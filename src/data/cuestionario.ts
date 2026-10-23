/**
 * Cuestionario de diagnóstico y cierre, versión A.
 * Se aplica idéntico al inicio del Día 1 y al cierre del Día 3.
 * `correcta` es el índice de la opción correcta según la hoja de respuestas.
 */
export interface Reactivo {
  pregunta: string
  opciones: string[]
  correcta: number
}

export const reactivos: Reactivo[] = [
  {
    pregunta: 'Un registro con la colonia escrita de tres formas distintas falla principalmente en:',
    opciones: ['Oportunidad', 'Consistencia', 'Completitud', 'Exactitud'],
    correcta: 1,
  },
  {
    pregunta: '¿Cuál de estos datos SÍ se le puede compartir a un asistente de inteligencia artificial?',
    opciones: [
      'Las coordenadas de un evento real',
      'El nombre y tipo de dato de las columnas',
      'Una fila de ejemplo con nombre y domicilio',
      'El folio de un parte informativo',
    ],
    correcta: 1,
  },
  {
    pregunta: 'Una fecha registrada como 03/07/2026 puede leerse de dos formas distintas. Esto es un problema de:',
    opciones: ['Coordenadas invertidas', 'Registro duplicado', 'Campo vacío', 'Formato invertido entre día y mes'],
    correcta: 3,
  },
  {
    pregunta: 'Si la latitud y la longitud se capturaron al revés, el punto aparecerá:',
    opciones: ['Fuera del municipio, lejos de donde ocurrió', 'En el centro del municipio', 'Unos metros desplazado', 'Exactamente en el mismo lugar'],
    correcta: 0,
  },
  {
    pregunta: 'El propósito de un tablero de mando, a diferencia de un reporte, es:',
    opciones: ['Sustituir al parte informativo de cada turno', 'Guardar el histórico completo de registros', 'Imprimirse al cierre de cada mes para archivo', 'Consultarse de forma recurrente para decidir'],
    correcta: 3,
  },
  {
    pregunta: 'Después de que un asistente genera una consulta, lo primero que debe hacerse es:',
    opciones: ['Usarla, porque la IA no se equivoca', 'Enviarla directamente al mando', 'Compararla contra un conteo de control conocido', 'Guardarla sin revisar'],
    correcta: 2,
  },
  {
    pregunta: 'Las variables críticas de un registro de incidencia incluyen:',
    opciones: [
      'Tipo de delito, colonia y número de patrulla',
      'Nombre del elemento, turno y número de patrulla',
      'Fecha, hora, tipo de delito, colonia, sector y coordenadas',
      'Solo el tipo de delito y el nombre de la colonia',
    ],
    correcta: 2,
  },
  {
    pregunta: 'Un mapa de concentración de eventos sirve para:',
    opciones: [
      'Sustituir el análisis estadístico',
      'Identificar dónde se acumulan los incidentes',
      'Determinar quién cometió el delito',
      'Calcular el presupuesto del área',
    ],
    correcta: 1,
  },
  {
    pregunta: 'Dos llamadas capturadas para el mismo evento producen:',
    opciones: ['Un registro duplicado que infla las cifras', 'Una mejora en la completitud', 'Un cambio automático de sector', 'Un dato más exacto'],
    correcta: 0,
  },
  {
    pregunta: 'Si un resultado generado con apoyo de IA se presenta a un mando, la responsabilidad del dato es:',
    opciones: ['Del área de sistemas', 'Del proveedor de la herramienta', 'De quien lo presenta', 'De nadie, es automático'],
    correcta: 2,
  },
]

/** Preguntas abiertas que solo se contestan en el cierre, como evidencia cualitativa. */
export const abiertas = [
  'Mencione un error de captura que haya detectado en su propia área de trabajo durante el curso.',
  '¿Qué va a hacer distinto a partir de la próxima semana con la información que captura o consulta?',
]

/** Explicación de cada respuesta correcta y el día del curso donde se repasa. Mismo orden que `reactivos`. */
export const explicaciones: { porque: string; dia: 1 | 2 | 3 }[] = [
  { porque: 'La misma colonia escrita de varias formas es un problema de consistencia: no se puede contar ni agrupar.', dia: 1 },
  { porque: 'Se comparte la estructura (nombres y tipos de columnas), nunca filas, coordenadas ni folios reales.', dia: 1 },
  { porque: 'Día/mes contra mes/día es un formato invertido. Se resuelve fijando un solo formato y validando el rango.', dia: 1 },
  { porque: 'Con latitud y longitud al revés, el punto cae fuera del municipio, lejos de donde ocurrió, o ni siquiera se puede ubicar.', dia: 2 },
  { porque: 'El tablero se consulta de forma recurrente para decidir; un reporte es una fotografía de un periodo.', dia: 3 },
  { porque: 'Que una consulta corra no significa que cuente bien. Se compara contra un conteo de control conocido.', dia: 3 },
  { porque: 'Fecha, hora, tipo de delito, colonia, sector y coordenadas son las variables mínimas para analizar y mapear.', dia: 1 },
  { porque: 'El mapa de concentración muestra dónde se acumulan los incidentes; no identifica responsables.', dia: 2 },
  { porque: 'Dos capturas del mismo evento son un duplicado que infla las cifras.', dia: 1 },
  { porque: 'Quien presenta el resultado responde por él, aunque lo haya generado un asistente.', dia: 3 },
]
