import { sesiones } from './curso'
import { abierto } from './decks'

export interface Recurso {
  titulo: string
  descripcion: string
  tipo: 'Presentaciones' | 'Materiales' | 'Datos' | 'Prácticas' | 'Diagramas' | 'Repositorios'
  dias: number[]
  formato: string
  ruta: string
  descarga?: boolean
}

export const biblioteca: Recurso[] = [
  ...sesiones.filter(s => abierto(s.slug)).flatMap((s): Recurso[] => [
    { titulo: `Día ${s.dia}: ${s.titulo}`, descripcion: s.entregable, tipo: 'Presentaciones', dias: [s.dia], formato: 'Presentación web', ruta: `/diapositivas/${s.slug}/` },
    { titulo: `Material del participante · Día ${s.dia}`, descripcion: 'Consulte las explicaciones y los materiales que acompañan la sesión.', tipo: 'Materiales', dias: [s.dia], formato: 'Guía web', ruta: `/participante/${s.slug}/` },
  ]),
  { titulo: 'Archivos del curso', descripcion: 'Catálogo de descargas, capas geográficas y condiciones de acceso a los archivos.', tipo: 'Datos', dias: [1, 2, 3], formato: 'Catálogo web', ruta: '/datos/' },
  { titulo: 'Incidentes para depurar', descripcion: 'Datos sintéticos con inconsistencias para practicar la revisión de calidad.', tipo: 'Datos', dias: [1], formato: 'CSV', ruta: '/datos/incidentes_practica_sucio.csv', descarga: true },
  { titulo: 'Incidentes depurados', descripcion: 'Archivo sintético de referencia para comparar la limpieza y cargar puntos en QGIS.', tipo: 'Datos', dias: [1, 2], formato: 'CSV', ruta: '/datos/incidentes_practica_depurado.csv', descarga: true },
  { titulo: 'Capas geográficas para QGIS', descripcion: 'Paquete de seis capas GeoJSON. Los límites son reales. El catálogo de archivos explica su alcance.', tipo: 'Datos', dias: [2], formato: 'ZIP', ruta: '/datos/paquete_capas_geojson.zip', descarga: true },
  { titulo: 'Datos de práctica de IA y Metabase', descripcion: 'Conjunto ficticio para trabajar tareas, tiempos y revisión humana.', tipo: 'Datos', dias: [3], formato: 'CSV', ruta: '/datos/practica_ia_metabase.csv', descarga: true },
  { titulo: 'Prompts para asistentes de IA', descripcion: 'Instrucciones de apoyo para análisis, limpieza y gráficas, con criterios de verificación.', tipo: 'Materiales', dias: [1, 3], formato: 'Guía web', ruta: '/practica/prompts/' },
  { titulo: 'Qué gráfica elegir', descripcion: 'Cinco lecciones sobre tipos de gráficas, unidades y límites de interpretación.', tipo: 'Materiales', dias: [3], formato: 'Guía web', ruta: '/graficas-cientificas/' },
  { titulo: 'Detecte las capturas inconsistentes', descripcion: 'Ejercicio para identificar problemas antes de analizar un archivo.', tipo: 'Prácticas', dias: [1], formato: 'Actividad web', ruta: '/practica/detecta-errores/' },
  { titulo: 'IA y Metabase: tres trabajos', descripcion: 'Construya y compruebe las gráficas que integrarán su tablero.', tipo: 'Prácticas', dias: [3], formato: 'Actividad web', ruta: '/metabase/' },
  { titulo: 'Hoja de verificación', descripcion: 'Revise el archivo, el mapa, las respuestas de IA y el tablero antes de entregar.', tipo: 'Prácticas', dias: [1, 2, 3], formato: 'Lista web', ruta: '/practica/hoja-de-verificacion/' },
  { titulo: 'Flujos visuales del curso', descripcion: 'Recorrido del participante y diagramas de ETL, QGIS y Metabase. Listos para imprimir.', tipo: 'Diagramas', dias: [1, 2, 3], formato: 'Diagramas web', ruta: '/diagramas/' },
  { titulo: 'Repositorio del curso', descripcion: 'Código fuente, historial de cambios e instrucciones para mantener el sitio.', tipo: 'Repositorios', dias: [1, 2, 3], formato: 'GitHub · requiere internet', ruta: 'https://github.com/xavierror656/curso-operatividad-policial' },
  { titulo: 'Repositorio de materiales y datos', descripcion: 'Carpeta de archivos de práctica en GitHub. Para descargar con explicación, use Archivos del curso.', tipo: 'Repositorios', dias: [1, 2, 3], formato: 'GitHub · requiere internet', ruta: 'https://github.com/xavierror656/curso-operatividad-policial/tree/main/public/datos' },
]
