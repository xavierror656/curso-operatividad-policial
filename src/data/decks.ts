import type { Deck } from './types'
import { sesiones } from './curso'
import { dia1 } from './dia-1'
import { dia2 } from './dia-2'
import { dia3 } from './dia-3'

export const decks: Deck[] = [dia1, dia2, dia3]

export const getDeck = (slug: string) => decks.find((d) => d.slug === slug)

/** Si el día se publica; en desarrollo todos están abiertos para preparar la sesión. */
export const abierto = (slug: string) => import.meta.env.DEV || sesiones.find((s) => s.slug === slug)?.disponible === true

/** Días que se publican; los bloqueados no generan páginas. */
export const decksAbiertos = decks.filter((d) => abierto(d.slug))
