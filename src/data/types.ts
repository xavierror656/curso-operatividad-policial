import type { MaterialId } from './materiales'

export type Layout =
  | 'cover'
  | 'goal'
  | 'takeaway'
  | 'bullets'
  | 'cards'
  | 'compare'
  | 'rule'
  | 'decision'
  | 'flow'
  | 'alerts'
  | 'table'
  | 'break'
  | 'timer'
  | 'checklist'
  | 'chart'
  | 'dashboard'
  | 'er'

export interface Card {
  icon?: string
  title: string
  text?: string
  /** Para layout 'dashboard': columnas que ocupa, de 6 */
  span?: number
}

export interface Chart {
  kind: 'bar' | 'line'
  /** Qué mide la gráfica, en una línea; las cifras son ficticias */
  caption: string
  data: { label: string; value: number }[]
  /** Etiquetas de las barras o puntos a resaltar */
  highlight?: string[]
}

export interface Side {
  /** Por omisión el lado izquierdo es «error» y el derecho «correcto» */
  tone?: 'bad' | 'good' | 'neutral'
  label: string
  items?: string[]
  /** Texto en bloque, para mostrar una instrucción o un registro completo */
  block?: string
  /** Tabla pequeña: la primera fila es el encabezado */
  rows?: string[][]
}

export interface Step {
  label: string
  detail?: string
}

export interface Alert {
  tone: 'error' | 'warning' | 'info' | 'success'
  icon: string
  value: string
  label: string
}

export interface ErEntity {
  id: string
  /** Nombre de la tabla */
  name: string
  /** Posición en un lienzo de 1000 x 400 */
  x: number
  y: number
  cols: { name: string; key?: 'PK' | 'FK'; bad?: boolean }[]
}

export interface ErRelation {
  from: string
  to: string
  /** Cardinalidad en cada extremo */
  fromCard: '1' | 'N'
  toCard: '1' | 'N'
  label?: string
  /** Fila (columna de la tabla) donde se ancla cada extremo; por omisión, el centro de la caja */
  fromCol?: number
  toCol?: number
  /** Relación rota: el valor no existe en la tabla de referencia */
  broken?: boolean
}

/** Diagrama entidad-relación para layout 'er' */
export interface Er {
  entities: ErEntity[]
  relations: ErRelation[]
}

export interface Slide {
  /** Bloque al que pertenece: 'Apertura', '1A', 'Receso', etc. */
  block: string
  /** Minuto del reloj en que inicia la diapositiva, HH:MM */
  time: string
  layout: Layout
  kicker?: string
  title: string
  lead?: string
  bullets?: string[]
  cards?: Card[]
  left?: Side
  right?: Side
  steps?: Step[]
  /** Para layout 'decision': lo que ocurre si alguna respuesta es «sí» y si todas son «no» */
  yes?: string
  no?: string
  capture?: string
  alerts?: Alert[]
  table?: { head: string[]; rows: string[][] }
  chart?: Chart
  /** Para layout 'er': tablas y sus relaciones */
  er?: Er
  /** Minutos del cronómetro para layout 'timer' */
  minutes?: number
  /** Recordatorio de la regla de oro cuando aparece un asistente de IA en pantalla */
  ruleReminder?: boolean
  /** Páginas del sitio que acompañan la diapositiva; se enlazan en el pie */
  material?: MaterialId[]
  notes: string
}

export interface Block {
  id: string
  label: string
  range: string
}

export interface Deck {
  slug: string
  day: number
  title: string
  subtitle: string
  schedule: string
  objective: string
  blocks: Block[]
  slides: Slide[]
}
