export type TimerAction = 'toggle' | 'reset'

interface Timer {
  el: HTMLElement
  display: HTMLElement
  label: HTMLElement | null
  icon: HTMLElement | null
  total: number
  remaining: number
  interval: number | undefined
}

const LOW_SECONDS = 5 * 60

const format = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

/**
 * Activa los cronómetros de las diapositivas con layout «timer». Cada uno se
 * identifica por el índice de su diapositiva, para poder sincronizarlo entre la
 * vista del público y la del presentador.
 */
export function initTimers(root: ParentNode, onAction?: (index: number, action: TimerAction) => void) {
  const timers = new Map<number, Timer>()

  const render = (t: Timer) => {
    t.display.textContent = format(t.remaining)
    t.el.dataset.state = t.remaining === 0 ? 'done' : t.remaining <= Math.min(LOW_SECONDS, t.total * 0.2) ? 'low' : ''
    const running = t.interval !== undefined
    if (t.label) t.label.textContent = running ? 'Pausar' : t.remaining < t.total ? 'Continuar' : 'Iniciar'
    if (t.icon) t.icon.className = running ? 'icon-[tabler--player-pause-filled]' : 'icon-[tabler--player-play-filled]'
  }

  const stop = (t: Timer) => {
    clearInterval(t.interval)
    t.interval = undefined
  }

  const apply = (index: number, action: TimerAction) => {
    const t = timers.get(index)
    if (!t) return
    if (action === 'reset') {
      stop(t)
      t.remaining = t.total
    } else if (t.interval !== undefined) {
      stop(t)
    } else if (t.remaining > 0) {
      t.interval = window.setInterval(() => {
        t.remaining = Math.max(0, t.remaining - 1)
        if (t.remaining === 0) stop(t)
        render(t)
      }, 1000)
    }
    render(t)
  }

  root.querySelectorAll<HTMLElement>('[data-timer]').forEach((el) => {
    const index = Number(el.closest<HTMLElement>('.slide')?.dataset.index)
    const total = Number(el.dataset.minutes) * 60
    const toggle = el.querySelector<HTMLElement>('[data-timer-toggle]')
    const t: Timer = {
      el,
      display: el.querySelector<HTMLElement>('[data-timer-display]')!,
      label: el.querySelector<HTMLElement>('[data-timer-label]'),
      icon: toggle?.querySelector<HTMLElement>('span') ?? null,
      total,
      remaining: total,
      interval: undefined,
    }
    timers.set(index, t)
    const fire = (action: TimerAction) => {
      apply(index, action)
      onAction?.(index, action)
    }
    toggle?.addEventListener('click', () => fire('toggle'))
    el.querySelector('[data-timer-reset]')?.addEventListener('click', () => fire('reset'))
  })

  return {
    apply,
    has: (index: number) => timers.has(index),
  }
}
