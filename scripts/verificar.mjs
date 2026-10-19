// Verifica la coherencia del contenido del curso antes de publicar.
//   npm run verificar
// Falla (código 1) si encuentra un problema; así no se publica un curso con tiempos o datos rotos.
import { dia1 } from '../src/data/dia-1.ts'
import { dia2 } from '../src/data/dia-2.ts'
import { dia3 } from '../src/data/dia-3.ts'
import { reactivos, explicaciones } from '../src/data/cuestionario.ts'
import { temas } from '../src/data/curso.ts'
import { readFileSync } from 'node:fs'

const decks = [dia1, dia2, dia3]
const errores = []
const falla = (msg) => errores.push(msg)
const min = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// 1. Tiempos: crecientes, dentro del horario del día y dentro del rango de su bloque
for (const deck of decks) {
  const [ini, fin] = deck.schedule.split(' a ').map(min)
  let previa = -1
  deck.slides.forEach((s, i) => {
    const t = min(s.time)
    const id = `${deck.slug} #${i + 1} (${s.time}) «${s.title.slice(0, 40)}»`
    if (t < previa) falla(`Tiempo que retrocede: ${id}`)
    if (t < ini || t >= fin) falla(`Fuera del horario ${deck.schedule}: ${id}`)
    previa = t
    const bloque = deck.blocks.find((b) => b.id === s.block)
    if (!bloque) return falla(`Bloque inexistente «${s.block}»: ${id}`)
    const nums = bloque.range.match(/\d{2}:\d{2}/g)
    if (nums?.length === 2 && (t < min(nums[0]) || t >= min(nums[1]))) falla(`Fuera del rango ${bloque.range} del bloque ${s.block}: ${id}`)
    // 2. Campos obligatorios por layout
    if (s.layout === 'timer' && !s.minutes) falla(`Cronómetro sin minutos: ${id}`)
    if (s.layout === 'er') {
      const ids = new Set(s.er?.entities.map((e) => e.id))
      for (const r of s.er?.relations ?? []) if (!ids.has(r.from) || !ids.has(r.to)) falla(`Relación ER con entidad inexistente: ${id}`)
    }
    if (!s.notes) falla(`Sin notas del instructor: ${id}`)
  })
}

// 3. Cuestionario
if (reactivos.length !== explicaciones.length) falla(`Hay ${reactivos.length} reactivos y ${explicaciones.length} explicaciones`)
reactivos.forEach((r, i) => {
  if (!Number.isInteger(r.correcta) || r.correcta < 0 || r.correcta >= r.opciones.length) falla(`Reactivo ${i + 1}: «correcta» fuera de rango`)
})

// 4. Temario: 37 horas
const horas = temas.reduce((n, t) => n + t.horas, 0)
if (horas !== 37) falla(`Las horas de los temas suman ${horas}, no 37`)

// 5. Datos de práctica
for (const [archivo, esperado] of [['incidentes_practica_depurado.csv', 928], ['incidentes_practica_sucio.csv', 1058]]) {
  try {
    const n = readFileSync(new URL(`../public/datos/${archivo}`, import.meta.url), 'utf8').trim().split(/\r?\n/).length - 1
    if (n !== esperado) falla(`${archivo} tiene ${n} registros, se esperaban ${esperado}`)
  } catch {
    falla(`Falta public/datos/${archivo}. Ejecute: python datos/generar.py`)
  }
}

if (errores.length) {
  console.error(`✗ ${errores.length} problema${errores.length === 1 ? '' : 's'}:\n` + errores.map((e) => `  - ${e}`).join('\n'))
  process.exit(1)
}
console.log(`✓ Contenido verificado: ${decks.length} días, ${decks.reduce((n, d) => n + d.slides.length, 0)} diapositivas, ${reactivos.length} reactivos.`)
