import { initTimers, type TimerAction } from './timer'

export type DeckMessage =
  | { type: 'go'; index: number }
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

  const counter = document.querySelector<HTMLElement>('[data-counter]')!
  const progress = document.querySelector<HTMLElement>('[data-progress]')!
  const badge = document.querySelector<HTMLElement>('[data-block-badge]')!
  const notesPanel = document.querySelector<HTMLElement>('[data-notes-panel]')!
  const notesText = document.querySelector<HTMLElement>('[data-notes-text]')!
  const notesToggle = document.querySelector<HTMLElement>('[data-toggle-notes]')!
  const blackout = document.querySelector<HTMLElement>('[data-blackout]')!
  const indexLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-goto]')]

  let current = -1

  const timers = initTimers(stage, (index, action) => channel.postMessage({ type: 'timer', index, action } satisfies DeckMessage))

  const go = (target: number, broadcast = true) => {
    const i = Math.max(0, Math.min(slides.length - 1, target))
    if (i === current) return
    slides[current]?.classList.remove('is-active')
    slides[i].classList.add('is-active')
    current = i

    const s = slides[i]
    const block = s.dataset.block ?? ''
    counter.textContent = `${i + 1} / ${slides.length}`
    progress.style.width = `${((i + 1) / slides.length) * 100}%`
    progress.parentElement?.setAttribute('aria-valuenow', String(i + 1))
    badge.textContent = `${/^\d/.test(block) ? `${block} · ` : ''}${blockLabels[block] ?? block} · ${s.dataset.time}`
    notesText.textContent = notes[i]
    indexLinks.forEach((a) => a.classList.toggle('menu-active', Number(a.dataset.goto) === i))
    history.replaceState(null, '', `#${i + 1}`)
    if (broadcast) channel.postMessage({ type: 'go', index: i } satisfies DeckMessage)
  }

  const setBlackout = (on: boolean, broadcast = true) => {
    blackout.hidden = !on
    if (broadcast) channel.postMessage({ type: 'blackout', on } satisfies DeckMessage)
  }

  const setNotes = (on: boolean) => {
    notesPanel.hidden = !on
    notesToggle.setAttribute('aria-pressed', String(on))
    notesToggle.classList.toggle('btn-active', on)
    try {
      localStorage.setItem('deck-notes', on ? '1' : '0')
    } catch {}
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
    const link = document.querySelector<HTMLAnchorElement>('[data-presenter]')!
    window.open(`${link.href}#${current + 1}`, 'deck-presentador', 'popup,width=1280,height=800')
  }

  // Controles
  document.querySelector('[data-prev]')!.addEventListener('click', () => go(current - 1))
  document.querySelector('[data-next]')!.addEventListener('click', () => go(current + 1))
  notesToggle.addEventListener('click', () => setNotes(notesPanel.hidden))
  document.querySelector('[data-fullscreen]')!.addEventListener('click', toggleFullscreen)
  document.querySelector('[data-print]')!.addEventListener('click', () => window.print())
  document.querySelector('[data-presenter]')!.addEventListener('click', (e) => {
    e.preventDefault()
    openPresenter()
  })
  blackout.addEventListener('click', () => setBlackout(false))
  indexLinks.forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault()
      go(Number(a.dataset.goto))
      overlay()?.close('#deck-index')
    }),
  )

  document.addEventListener('fullscreenchange', () => document.body.classList.toggle('is-fullscreen', !!document.fullscreenElement))
  window.addEventListener('hashchange', () => go(fromHash()))

  // Clic sobre la diapositiva: mitad derecha avanza, mitad izquierda retrocede
  stage.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('button, a')) return
    const r = stage.getBoundingClientRect()
    go(e.clientX - r.left > r.width / 3 ? current + 1 : current - 1)
  })

  // Deslizar en pantallas táctiles
  let touchX: number | null = null
  stage.addEventListener('touchstart', (e) => (touchX = e.touches[0].clientX), { passive: true })
  stage.addEventListener('touchend', (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) go(dx < 0 ? current + 1 : current - 1)
    touchX = null
  })

  document.addEventListener('keydown', (e) => {
    if (isTypingTarget(e)) return
    if (document.querySelector('.overlay.open') && e.key !== 'Escape') {
      if (!['g', 'G', '?'].includes(e.key)) return
    }
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
      case 'Enter':
        go(current + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
        go(current - 1)
        break
      case 'Home':
        go(0)
        break
      case 'End':
        go(slides.length - 1)
        break
      case 'n':
      case 'N':
        setNotes(notesPanel.hidden)
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
        if (timers.has(current)) {
          timers.apply(current, 'toggle')
          channel.postMessage({ type: 'timer', index: current, action: 'toggle' } satisfies DeckMessage)
        }
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
  })

  // Sincronización con la vista del presentador
  channel.addEventListener('message', ({ data }: MessageEvent<DeckMessage>) => {
    if (data.type === 'go') go(data.index, false)
    else if (data.type === 'hello') channel.postMessage({ type: 'go', index: current } satisfies DeckMessage)
    else if (data.type === 'timer') timers.apply(data.index, data.action)
    else if (data.type === 'blackout') setBlackout(data.on, false)
  })

  let savedNotes = false
  try {
    savedNotes = localStorage.getItem('deck-notes') === '1'
  } catch {}
  setNotes(savedNotes)
  go(fromHash(), false)

  // Al imprimir se muestran todas; al volver se restaura la actual
  window.addEventListener('beforeprint', () => slides.forEach((s) => s.classList.add('is-active')))
  window.addEventListener('afterprint', () => slides.forEach((s, i) => s.classList.toggle('is-active', i === current)))
}
