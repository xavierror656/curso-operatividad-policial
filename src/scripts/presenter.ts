import { initTimers } from './timer'
import { isTypingTarget, type DeckMessage } from './deck'

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
  const $ = (sel: string) => document.querySelector<HTMLElement>(sel)!

  let index = -1

  const timers = initTimers(current, (i, action) => channel.postMessage({ type: 'timer', index: i, action } satisfies DeckMessage))

  const show = (list: HTMLElement[], i: number) => list.forEach((s, n) => s.classList.toggle('is-active', n === i))

  const go = (target: number, broadcast = true) => {
    const i = Math.max(0, Math.min(currentSlides.length - 1, target))
    if (i === index) return
    index = i
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
    if (broadcast) channel.postMessage({ type: 'go', index: i } satisfies DeckMessage)
  }

  // Reloj y tiempo transcurrido de la sesión
  const pad = (n: number) => String(n).padStart(2, '0')
  let elapsed = 0
  let running: number | undefined
  const renderElapsed = () => {
    $('[data-elapsed]').textContent = `${pad(Math.floor(elapsed / 3600))}:${pad(Math.floor(elapsed / 60) % 60)}:${pad(elapsed % 60)}`
    const btn = $('[data-elapsed-toggle]')
    btn.querySelector('span')!.className = `${running ? 'icon-[tabler--player-pause-filled]' : 'icon-[tabler--player-play-filled]'} size-4`
    btn.querySelector('span:last-child')!.textContent = running ? 'Pausar' : elapsed ? 'Continuar' : 'Iniciar'
  }
  $('[data-elapsed-toggle]').addEventListener('click', () => {
    if (running) {
      clearInterval(running)
      running = undefined
    } else {
      running = window.setInterval(() => {
        elapsed++
        renderElapsed()
      }, 1000)
    }
    renderElapsed()
  })
  $('[data-elapsed-reset]').addEventListener('click', () => {
    elapsed = 0
    renderElapsed()
  })
  const tick = () => ($('[data-clock]').textContent = new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }))
  tick()
  setInterval(tick, 10_000)

  $('[data-prev]').addEventListener('click', () => go(index - 1))
  $('[data-next]').addEventListener('click', () => go(index + 1))

  document.addEventListener('keydown', (e) => {
    if (isTypingTarget(e)) return
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) go(index + 1)
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) go(index - 1)
    else if (e.key === 'Home') go(0)
    else if (e.key === 'End') go(currentSlides.length - 1)
    else if ((e.key === 't' || e.key === 'T') && timers.has(index)) {
      timers.apply(index, 'toggle')
      channel.postMessage({ type: 'timer', index, action: 'toggle' } satisfies DeckMessage)
    } else if (e.key === 'b' || e.key === 'B' || e.key === '.') {
      channel.postMessage({ type: 'blackout', on: !document.body.dataset.blackout } satisfies DeckMessage)
      document.body.dataset.blackout = document.body.dataset.blackout ? '' : '1'
    } else return
    e.preventDefault()
  })

  channel.addEventListener('message', ({ data: msg }: MessageEvent<DeckMessage>) => {
    if (msg.type === 'go') go(msg.index, false)
    else if (msg.type === 'timer') timers.apply(msg.index, msg.action)
    else if (msg.type === 'blackout') document.body.dataset.blackout = msg.on ? '1' : ''
  })

  const n = parseInt(location.hash.slice(1), 10)
  go(Number.isFinite(n) ? n - 1 : 0, false)
  renderElapsed()
  // Pide a la ventana del público su posición actual
  channel.postMessage({ type: 'hello' } satisfies DeckMessage)
}
