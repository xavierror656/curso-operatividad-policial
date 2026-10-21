import { initTimers, type TimerAction } from './timer'
import { advance, applySteps, revealEnabled, setRevealEnabled, stepsOf, type NavState } from './nav'

export type DeckMessage =
  | { type: 'go'; index: number; step: number }
  | { type: 'hello' }
  | { type: 'timer'; index: number; action: TimerAction }
  | { type: 'blackout'; on: boolean }

interface HSOverlayStatic {
  open: (target: string | HTMLElement) => void
  close: (target: string | HTMLElement) => void
}

const overlay = () => (window as unknown as { HSOverlay?: HSOverlayStatic }).HSOverlay

/** Ignora atajos mientras se escribe o con teclas modificadoras. */
export const isTypingTarget = (e: KeyboardEvent) =>
  e.ctrlKey || e.metaKey || e.altKey || (e.target as HTMLElement).closest('input, textarea, select, [contenteditable]')

/** Visor de diapositivas para la vista del público. */
export function initDeck() {
  const stage = document.querySelector<HTMLElement>('[data-deck]')!
  const slides = [...stage.querySelectorAll<HTMLElement>('.slide')]
  const { notes, blockLabels } = JSON.parse(document.getElementById('deck-data')!.textContent!) as {
    notes: string[]
    blockLabels: Record<string, string>
  }
  const channel = new BroadcastChannel(`deck-${stage.dataset.deck}`)
  const post = (msg: DeckMessage) => channel.postMessage(msg)

  const $ = <T extends HTMLElement = HTMLElement>(sel: string) => document.querySelector<T>(sel)!
  const counter = $('[data-counter]')
  const progress = $('[data-progress]')
  const badge = $('[data-block-badge]')
  const notesPanel = $('[data-notes-panel]')
  const notesText = $('[data-notes-text]')
  const notesToggle = $('[data-toggle-notes]')
  const revealToggle = $('[data-toggle-reveal]')
  const blackout = $('[data-blackout]')
  const live = $('[data-live]')
  const grid = $('[data-grid]')
  const indexLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-goto]')]

  let state: NavState = { index: -1, step: 0 }
  let reveal = revealEnabled()

  const timers = initTimers(stage, (index, action) => post({ type: 'timer', index, action }))

  const render = (next: NavState, broadcast = true) => {
    const i = Math.max(0, Math.min(slides.length - 1, next.index))
    const changed = i !== state.index
    if (changed) {
      slides[state.index]?.classList.remove('is-active')
      slides[i].classList.add('is-active')
      const s = slides[i]
      const block = s.dataset.block ?? ''
      counter.textContent = `${i + 1} / ${slides.length}`
      progress.style.width = `${((i + 1) / slides.length) * 100}%`
      progress.parentElement?.setAttribute('aria-valuenow', String(i + 1))
      badge.textContent = `${/^\d/.test(block) ? `${block} · ` : ''}${blockLabels[block] ?? block} · ${s.dataset.time}`
      notesText.textContent = notes[i]
      indexLinks.forEach((a) => a.classList.toggle('menu-active', Number(a.dataset.goto) === i))
      live.textContent = `Diapositiva ${i + 1} de ${slides.length}: ${s.querySelector('.s-title')?.textContent ?? ''}`
      history.replaceState(null, '', `#${i + 1}`)
    }
    state = { index: i, step: next.step }
    applySteps(slides[i], state.step, reveal)
    if (broadcast) post({ type: 'go', index: state.index, step: state.step })
  }

  /** Ir a una diapositiva completa (índice, cuadrícula, Inicio/Fin, hash). */
  const goTo = (index: number) => render({ index, step: stepsOf(slides[Math.max(0, Math.min(slides.length - 1, index))]).length })
  const move = (dir: 1 | -1) => render(advance(slides, state, dir, reveal))

  /** Modos de proyección que se recuerdan en este navegador: 'large' (texto grande) y 'contrast' (alto contraste) */
  const toggleMode = (mode: 'large' | 'contrast', on = stage.toggleAttribute(`data-${mode}`)) => {
    stage.toggleAttribute(`data-${mode}`, on)
    document.querySelector(`[data-mode-btn="${mode}"]`)?.setAttribute('aria-pressed', String(on))
    try {
      localStorage.setItem(`deck-${mode}`, on ? '1' : '0')
    } catch {}
    live.textContent = `${mode === 'large' ? 'Texto grande' : 'Alto contraste'} ${on ? 'activado' : 'desactivado'}`
  }
  for (const mode of ['large', 'contrast'] as const) {
    try {
      if (localStorage.getItem(`deck-${mode}`) === '1') toggleMode(mode, true)
    } catch {}
  }

  document.querySelectorAll<HTMLElement>('[data-mode-btn]').forEach((b) => b.addEventListener('click', () => toggleMode(b.dataset.modeBtn as 'large' | 'contrast')))

  const setBlackout = (on: boolean, broadcast = true) => {
    blackout.hidden = !on
    if (broadcast) post({ type: 'blackout', on })
  }

  const setNotes = (on: boolean) => {
    notesPanel.hidden = !on
    notesToggle.setAttribute('aria-pressed', String(on))
    notesToggle.classList.toggle('btn-active', on)
    try {
      localStorage.setItem('deck-notes', on ? '1' : '0')
    } catch {}
  }

  const setReveal = (on: boolean) => {
    reveal = on
    setRevealEnabled(on)
    revealToggle.setAttribute('aria-pressed', String(on))
    revealToggle.classList.toggle('btn-active', on)
    render({ index: state.index, step: stepsOf(slides[state.index]).length })
  }

  // Cuadrícula de miniaturas: se construye la primera vez que se abre
  const buildGrid = () => {
    if (grid.dataset.built) return
    const list = grid.querySelector('[data-grid-list]')!
    slides.forEach((s, i) => {
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'deck-thumb'
      btn.dataset.goto = String(i)
      btn.setAttribute('aria-label', `Ir a la diapositiva ${i + 1}`)
      const clone = s.cloneNode(true) as HTMLElement
      clone.classList.add('is-active')
      clone.removeAttribute('aria-label')
      clone.setAttribute('aria-hidden', 'true')
      clone.inert = true
      clone.querySelectorAll('[data-hidden]').forEach((el) => el.removeAttribute('data-hidden'))
      const num = document.createElement('span')
      num.className = 'deck-thumb-num'
      num.textContent = `${i + 1} · ${s.dataset.time}`
      btn.append(clone, num)
      btn.addEventListener('click', () => {
        goTo(i)
        setGrid(false)
      })
      list.append(btn)
    })
    grid.dataset.built = '1'
  }
  const setGrid = (on: boolean) => {
    if (on) buildGrid()
    grid.hidden = !on
    document.body.classList.toggle('grid-open', on)
    if (on) {
      const current = grid.querySelectorAll<HTMLElement>('.deck-thumb')[state.index]
      grid.querySelectorAll('.deck-thumb').forEach((t) => t.removeAttribute('aria-current'))
      current?.setAttribute('aria-current', 'true')
      current?.scrollIntoView({ block: 'center' })
      current?.focus()
    } else {
      stage.focus()
    }
  }

  const fromHash = () => {
    const n = parseInt(location.hash.slice(1), 10)
    return Number.isFinite(n) ? n - 1 : 0
  }

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen?.()
  }

  const openPresenter = () => {
    const link = $<HTMLAnchorElement>('[data-presenter]')
    window.open(`${link.href}#${state.index + 1}`, 'deck-presentador', 'popup,width=1280,height=800')
  }

  // Controles
  $('[data-prev]').addEventListener('click', () => move(-1))
  $('[data-next]').addEventListener('click', () => move(1))
  notesToggle.addEventListener('click', () => setNotes(notesPanel.hidden))
  revealToggle.addEventListener('click', () => setReveal(!reveal))
  $('[data-open-grid]').addEventListener('click', () => setGrid(true))
  $('[data-close-grid]').addEventListener('click', () => setGrid(false))
  $('[data-fullscreen]').addEventListener('click', toggleFullscreen)
  $('[data-print]').addEventListener('click', () => window.print())
  $('[data-presenter]').addEventListener('click', (e) => {
    e.preventDefault()
    openPresenter()
  })
  blackout.addEventListener('click', () => setBlackout(false))
  indexLinks.forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault()
      goTo(Number(a.dataset.goto))
      overlay()?.close(a.closest<HTMLElement>('.overlay') ?? '#deck-index')
    }),
  )

  document.addEventListener('fullscreenchange', () => document.body.classList.toggle('is-fullscreen', !!document.fullscreenElement))
  window.addEventListener('hashchange', () => {
    if (fromHash() !== state.index) goTo(fromHash())
  })

  // Clic sobre la diapositiva: dos tercios derechos avanzan, el izquierdo retrocede
  stage.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('button, a')) return
    const r = stage.getBoundingClientRect()
    move(e.clientX - r.left > r.width / 3 ? 1 : -1)
  })

  // Deslizar en pantallas táctiles
  let touchX: number | null = null
  stage.addEventListener('touchstart', (e) => (touchX = e.touches[0].clientX), { passive: true })
  stage.addEventListener('touchend', (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1)
    touchX = null
  })

  // Si el foco quedó dentro de un panel ya cerrado, se devuelve a la diapositiva
  const reclaimFocus = () => {
    const active = document.activeElement as HTMLElement | null
    if (active?.closest('.overlay:not(.open)')) stage.focus()
  }

  // Fase de captura: el visor recibe las teclas antes que los componentes de FlyonUI
  document.addEventListener('keydown', (e) => {
    if (isTypingTarget(e)) return
    reclaimFocus()
    if (!grid.hidden) {
      if (e.key === 'Escape' || e.key === 'o' || e.key === 'O') {
        setGrid(false)
        e.preventDefault()
      }
      return
    }
    if (document.querySelector('.overlay.open') && !['Escape', 'g', 'G', '?'].includes(e.key)) return
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
      case 'Enter':
        if ((e.key === 'Enter' || e.key === ' ') && (e.target as HTMLElement).closest('button, a, summary, input, select')) return
        move(1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
        move(-1)
        break
      case 'Home':
        goTo(0)
        break
      case 'End':
        goTo(slides.length - 1)
        break
      case 'Escape':
        if (document.querySelector('.overlay.open')) return
        setGrid(true)
        break
      case 'o':
      case 'O':
        setGrid(true)
        break
      case 'n':
      case 'N':
        setNotes(notesPanel.hidden)
        break
      case 'r':
      case 'R':
        setReveal(!reveal)
        break
      case 'f':
      case 'F':
        toggleFullscreen()
        break
      case 'p':
      case 'P':
        openPresenter()
        break
      case 'b':
      case 'B':
      case '.':
        setBlackout(blackout.hidden)
        break
      case 't':
      case 'T':
        if (timers.has(state.index)) {
          timers.apply(state.index, 'toggle')
          post({ type: 'timer', index: state.index, action: 'toggle' })
        }
        break
      case 'l':
      case 'L':
        toggleMode('large')
        break
      case 'c':
      case 'C':
        toggleMode('contrast')
        break
      case 'g':
      case 'G':
        document.querySelector('#deck-index.open') ? overlay()?.close('#deck-index') : overlay()?.open('#deck-index')
        break
      case '?':
        overlay()?.open('#deck-help')
        break
      default:
        return
    }
    e.preventDefault()
    e.stopPropagation()
  }, true)

  // Sincronización con la vista del presentador
  channel.addEventListener('message', ({ data }: MessageEvent<DeckMessage>) => {
    if (data.type === 'go') render({ index: data.index, step: data.step }, false)
    else if (data.type === 'hello') post({ type: 'go', index: state.index, step: state.step })
    else if (data.type === 'timer') timers.apply(data.index, data.action)
    else if (data.type === 'blackout') setBlackout(data.on, false)
  })

  let savedNotes = false
  try {
    savedNotes = localStorage.getItem('deck-notes') === '1'
  } catch {}
  setNotes(savedNotes)
  revealToggle.setAttribute('aria-pressed', String(reveal))
  revealToggle.classList.toggle('btn-active', reveal)
  const first = fromHash()
  render({ index: first, step: first === 0 ? 0 : stepsOf(slides[Math.max(0, Math.min(slides.length - 1, first))]).length }, false)

  // Al imprimir se muestran todas, completas; al volver se restaura la actual
  window.addEventListener('beforeprint', () => slides.forEach((s) => s.classList.add('is-active')))
  window.addEventListener('afterprint', () => slides.forEach((s, i) => s.classList.toggle('is-active', i === state.index)))
}
