import type { Deck } from './types'
import { dia1 } from './dia-1'
import { dia2 } from './dia-2'
import { dia3 } from './dia-3'

export const decks: Deck[] = [dia1, dia2, dia3]

export const getDeck = (slug: string) => decks.find((d) => d.slug === slug)
