import { initTimers } from './timer'
import { isTypingTarget, type DeckMessage } from './deck'
import { advance, applySteps, revealEnabled, stepsOf, type NavState } from './nav'

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

/** Segundos de sesión continua tras los cuales se recomienda una pausa activa */
const PAUSE_EVERY = 50 * 60

/** Vista del presentador: sigue y controla la ventana del público. */
export function initPresenter() {
  const current = document.querySelector<HTMLElement>('[data-stage="current"]')!
  const next = document.querySelector<HTMLElement>('[data-stage="next"]')!
  const currentSlides = [...current.querySelectorAll<HTMLElement>('.slide')]
  const nextSlides = [...next.querySelectorAll<HTMLElement>('.slide')]
  const data = JSON.parse(document.getElementById('presenter-data')!.textContent!) as {
    notes: string[]
    titles: string[]
    times: string[]
    blocks: string[]
    blockLabels: Record<string, string>
  }
  const channel = new BroadcastChannel(`deck-${current.dataset.deck}`)
  const post = (msg: DeckMessage) => channel.postMessage(msg)
  const $ = (sel: string) => document.querySelector<HTMLElement>(sel)!

  let state: NavState = { index: -1, step: 0 }
  let reveal = revealEnabled()
  const start = toMinutes(data.times[0])

  const timers = initTimers(current, (i, action) => post({ type: 'timer', index: i, action }))

  const show = (list: HTMLElement[], i: number) => list.forEach((s, n) => s.classList.toggle('is-active', n === i))

  const render = (target: NavState, broadcast = true) => {
    const i = Math.max(0, Math.min(currentSlides.length - 1, target.index))
    if (i !== state.index) {
      show(currentSlides, i)
      show(nextSlides, i + 1)
      next.hidden = i + 1 >= nextSlides.length
      $('[data-end]').hidden = !next.hidden
      $('[data-counter]').textContent = `${i + 1} / ${currentSlides.length}`
      $('[data-notes]').textContent = data.notes[i]
      const block = data.blocks[i]
      $('[data-block]').textContent = `${/^\d/.test(block) ? `Bloque ${block} · ` : ''}${data.blockLabels[block] ?? block}`
      $('[data-planned]').textContent = `Minuto previsto: ${data.times[i]}`
      history.replaceState(null, '', `#${i + 1}`)
    }
    state = { index: i, step: target.step }
    applySteps(currentSlides[i], state.step, reveal)
    const total = stepsOf(currentSlides[i]).length
    $('[data-steps]').textContent = reveal && total ? `Viñeta ${Math.min(state.step, total)} de ${total}` : ''
    renderPace()
    if (broadcast) post({ type: 'go', index: state.index, step: state.step })
  }

  const move = (dir: 1 | -1) => render(advance(currentSlides, state, dir, reveal))
  const goTo = (index: number) => render({ index, step: stepsOf(currentSlides[Math.max(0, Math.min(currentSlides.length - 1, index))]).length })

  // Ritmo: compara el tiempo transcurrido con el minuto previsto de la diapositiva actual
  let elapsed = 0
  let running: number | undefined
  const pad = (n: number) => String(n).padStart(2, '0')
  const renderPace = () => {
    const pace = $('[data-pace]')
    if (!elapsed || state.index < 0) {
      pace.hidden = true
      return
    }
    const planned = toMinutes(data.times[state.index]) - start
    const diff = Math.round(elapsed / 60 - planned)
    pace.hidden = false
    pace.className = 'badge badge-lg'
    if (Math.abs(diff) <= 1) {
      pace.classList.add('badge-success')
      pace.textContent = 'A tiempo'
    } else if (diff > 0) {
      pace.classList.add(diff > 5 ? 'badge-error' : 'badge-warning')
      pace.textContent = `${diff} min atrasado`
    } else {
      pace.classList.add('badge-info')
      pace.textContent = `${-diff} min adelantado`
    }
  }
  const renderElapsed = () => {
    $('[data-elapsed]').textContent = `${pad(Math.floor(elapsed / 3600))}:${pad(Math.floor(elapsed / 60) % 60)}:${pad(elapsed % 60)}`
    const btn = $('[data-elapsed-toggle]')
    btn.querySelector('span')!.className = `${running ? 'icon-[tabler--player-pause-filled]' : 'icon-[tabler--player-play-filled]'} size-4`
    btn.querySelector('span:last-child')!.textContent = running ? 'Pausar' : elapsed ? 'Continuar' : 'Iniciar sesión'
    renderPace()
  }
  $('[data-elapsed-toggle]').addEventListener('click', () => {
    if (running) {
      clearInterval(running)
      running = undefined
    } else {
      running = window.setInterval(() => {
        elapsed++
        // Cada 50 minutos seguidos se sugiere una pausa activa de 5 minutos
        if (elapsed % PAUSE_EVERY === 0) $('[data-pause]').hidden = false
        renderElapsed()
      }, 1000)
    }
    renderElapsed()
  })
  $('[data-pause-close]').addEventListener('click', () => ($('[data-pause]').hidden = true))
  $('[data-elapsed-reset]').addEventListener('click', () => {
    elapsed = 0
    $('[data-pause]').hidden = true
    renderElapsed()
  })
  const tick = () => ($('[data-clock]').textContent = new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }))
  tick()
  setInterval(tick, 10_000)

  $('[data-prev]').addEventListener('click', () => move(-1))
  $('[data-next]').addEventListener('click', () => move(1))

  document.addEventListener('keydown', (e) => {
    if (isTypingTarget(e)) return
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) move(1)
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) move(-1)
    else if (e.key === 'Home') goTo(0)
    else if (e.key === 'End') goTo(currentSlides.length - 1)
    else if ((e.key === 't' || e.key === 'T') && timers.has(state.index)) {
      timers.apply(state.index, 'toggle')
      post({ type: 'timer', index: state.index, action: 'toggle' })
    } else if (e.key === 'b' || e.key === 'B' || e.key === '.') {
      const on = !document.body.dataset.blackout
      document.body.dataset.blackout = on ? '1' : ''
      post({ type: 'blackout', on })
    } else return
    e.preventDefault()
  })

  channel.addEventListener('message', ({ data: msg }: MessageEvent<DeckMessage>) => {
    if (msg.type === 'go') render({ index: msg.index, step: msg.step }, false)
    else if (msg.type === 'timer') timers.apply(msg.index, msg.action)
    else if (msg.type === 'blackout') document.body.dataset.blackout = msg.on ? '1' : ''
  })

  // La tecla R en la ventana del público cambia el modo de revelado para ambas
  window.addEventListener('storage', (e) => {
    if (e.key === 'deck-reveal') {
      reveal = revealEnabled()
      render({ index: state.index, step: stepsOf(currentSlides[state.index]).length }, false)
    }
  })

  const n = parseInt(location.hash.slice(1), 10)
  const first = Math.max(0, Math.min(currentSlides.length - 1, Number.isFinite(n) ? n - 1 : 0))
  render({ index: first, step: stepsOf(currentSlides[first]).length }, false)
  renderElapsed()
  // Pide a la ventana del público su posición actual
  post({ type: 'hello' })
}
