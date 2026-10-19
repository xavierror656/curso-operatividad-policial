/**
 * Estado de navegación compartido por la vista del público y la del
 * presentador: diapositiva actual y cuántas viñetas se han revelado.
 */
export interface NavState {
  index: number
  step: number
}

const REVEAL_KEY = 'deck-reveal'

export const stepsOf = (slide: HTMLElement) => [...slide.querySelectorAll<HTMLElement>('[data-step]')]

/** El revelado progresivo está activo salvo que se haya apagado con la tecla R. */
export function revealEnabled() {
  try {
    return localStorage.getItem(REVEAL_KEY) !== '0'
  } catch {
    return true
  }
}

export function setRevealEnabled(on: boolean) {
  try {
    localStorage.setItem(REVEAL_KEY, on ? '1' : '0')
  } catch {}
}

/** Al avanzar se revela la siguiente viñeta; al retroceder a otra diapositiva, llega completa. */
export function advance(slides: HTMLElement[], s: NavState, dir: 1 | -1, reveal: boolean): NavState {
  const total = reveal ? stepsOf(slides[s.index]).length : 0
  if (dir > 0) {
    if (s.step < total) return { index: s.index, step: s.step + 1 }
    if (s.index < slides.length - 1) return { index: s.index + 1, step: 0 }
    return s
  }
  if (reveal && s.step > 0 && s.step <= total) return { index: s.index, step: s.step - 1 }
  if (s.index > 0) return { index: s.index - 1, step: stepsOf(slides[s.index - 1]).length }
  return s
}

/** Marca como ocultas las viñetas posteriores al paso actual. */
export function applySteps(slide: HTMLElement, step: number, reveal: boolean) {
  stepsOf(slide).forEach((el, i) => el.toggleAttribute('data-hidden', reveal && i >= step))
}
