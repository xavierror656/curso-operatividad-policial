export const curso = {
  nombre: 'Herramientas tecnológicas orientadas a la operatividad policial',
  institucion: 'Secretaría de Seguridad Pública Municipal de Ciudad Juárez',
  imparte: 'Grupo Karsam',
  duracion: '37 horas',
  modalidad: 'Presencial y virtual, en sesiones de 2 horas',
  periodo: 'Un mes',
  /** Lo que cubren las diapositivas de este sitio. Confirmar con la Secretaría cómo se cubre el resto del programa. */
  presenciales: 'Tres sesiones presenciales de 4 horas (12 h) con diapositivas; el resto del programa de 37 h se imparte en sesiones adicionales por confirmar.',
  dirigido:
    'Personal de tecnologías de la información y personal operativo de la Secretaría de Seguridad Pública Municipal.',
  prerrequisito:
    'Conocimientos básicos de estadística, cartografía y hojas de cálculo. No se requiere experiencia previa en programación.',
  herramientas: ['Python con Jupyter', 'Metabase', 'QGIS', 'Asistentes de IA'],
  objetivo:
    'Que el participante sea capaz de depurar información de práctica, construir un mapa de puntos en QGIS e interpretar tableros institucionales de Metabase para sustentar decisiones, empleando software libre y asistentes de inteligencia artificial bajo criterios de seguridad de la información.',
}

export const enfoque = [
  {
    icon: 'icon-[tabler--database]',
    titulo: 'Del archivo al análisis',
    texto:
      'El CSV sintético se depura el Día 1 y se mapea en QGIS el Día 2. El Día 3 se analizan tableros existentes de Metabase; sus cifras se verifican según su propia fuente y periodo.',
  },
  {
    icon: 'icon-[tabler--sparkles]',
    titulo: 'La IA como apoyo al análisis',
    texto:
      'El participante usa asistentes para entender procedimientos y formular preguntas sin compartir filas ni resultados institucionales; siempre verifica las respuestas.',
  },
  {
    icon: 'icon-[tabler--package]',
    titulo: 'Cada tema cierra con un producto',
    texto: 'Cada tema deja un entregable que documenta el avance y se aplica a la operación diaria.',
  },
]

/**
 * `disponible: false` bloquea el día: sus diapositivas, guion, vista del presentador y material
 * del participante no se publican y en el sitio aparece «Se abre el Día N». Cámbielo a true
 * y vuelva a publicar al iniciar el día. Con `astro dev` se ven todos, para preparar la sesión.
 */
export const sesiones = [
  {
    dia: 1,
    slug: 'dia-1',
    titulo: 'Calidad de datos, seguridad y plataforma web',
    entregable: 'Diagnóstico de calidad y archivo de incidentes depurado.',
    disponible: true,
  },
  {
    dia: 2,
    slug: 'dia-2',
    titulo: 'Primeros pasos en QGIS: teselas, GeoJSON y puntos',
    entregable: 'Proyecto de QGIS con capas GeoJSON de colonias y cuadrantes, un polígono propio y puntos de práctica filtrados.',
    disponible: true,
  },
  {
    dia: 3,
    slug: 'dia-3',
    titulo: 'Lectura de tableros en Metabase y proyecto integrador',
    entregable: 'Análisis verificado de un tablero existente y presentación junto al mapa de QGIS.',
    disponible: true,
  },
]

export interface Tema {
  num: number
  titulo: string
  horas: number
  contenido: string
  ia?: string
  producto: string
}

export const temas: Tema[] = [
  {
    num: 1,
    titulo: 'Análisis de información y calidad de datos en seguridad pública',
    horas: 6,
    contenido:
      'Uso de datos para la toma de decisiones basada en evidencia. Tipos de información institucional y flujo de datos operativos y administrativos. Dimensiones de la calidad del dato: exactitud, completitud, consistencia y oportunidad. Variables clave. Clasificación de la información, confidencialidad y tratamiento de datos personales.',
    producto: 'Diagnóstico de calidad del conjunto de datos del curso.',
  },
  {
    num: 2,
    titulo: 'Proceso ETL en la Secretaría de Seguridad Pública',
    horas: 3,
    contenido:
      'Extracción desde fuentes institucionales: registros policiales, incidentes y reportes operativos. Transformación mediante limpieza, validación y normalización. Catálogos institucionales de delitos, colonias y sectores. Carga asegurando integridad y disponibilidad.',
    producto: 'Diagrama del flujo ETL con sus reglas de validación.',
  },
  {
    num: 3,
    titulo: 'Introducción a Python para análisis de datos, con asistencia de IA',
    horas: 3,
    contenido:
      'Notebooks, tipos de datos y estructuras básicas, introducción a pandas. Regla de seguridad para el uso de asistentes de IA con información institucional.',
    ia: 'Generar código a partir de lenguaje natural, leer y verificar el código devuelto e interpretar errores compartiendo solo el mensaje de error, revisado para que no traiga valores de datos.',
    producto: 'Notebook de ejercicios resuelto con asistencia.',
  },
  {
    num: 4,
    titulo: 'Limpieza y análisis descriptivo con Python',
    horas: 4,
    contenido:
      'Carga de CSV, valores nulos y duplicados, manejo de fechas, estandarización de texto, validación de coordenadas, frecuencias y estadística descriptiva.',
    ia: 'Funciones de limpieza a partir de la descripción del problema y del esquema de columnas. Depuración asistida de errores.',
    producto: 'Detector de capturas inconsistentes.',
  },
  {
    num: 5,
    titulo: 'Añadir mapa base y capas GeoJSON en QGIS',
    horas: 3,
    contenido:
      'Recorrido breve de QGIS. Añadir un mapa base de teselas, cargar las capas proporcionadas de colonias y cuadrantes, dibujar un polígono sencillo y guardarlo como GeoJSON.',
    producto: 'Proyecto de QGIS con mapa base, dos capas GeoJSON proporcionadas y un polígono dibujado.',
  },
  {
    num: 6,
    titulo: 'Graficar y filtrar puntos en QGIS',
    horas: 3,
    contenido:
      'Cargar el archivo sintético de incidentes como puntos con longitud y latitud, comprobar que aparecen en el lugar esperado y aplicar un filtro sencillo para mostrar solo los registros elegidos.',
    producto: 'Proyecto de QGIS con puntos graficados y un filtro aplicado.',
  },
  {
    num: 7,
    titulo: 'Business Intelligence y lectura de Metabase',
    horas: 4,
    contenido:
      'Conceptos de Business Intelligence, navegación por la colección de diez tableros existentes y lectura de sus preguntas, fuentes, periodos y filtros.',
    ia: 'Ayuda para formular preguntas de análisis sin pegar datos ni resultados; verificación en la fuente autorizada.',
    producto: 'Ficha de lectura de un tablero con fuente, periodo, filtros y hallazgo verificable.',
  },
  {
    num: 8,
    titulo: 'Interpretación de visualizaciones en Metabase',
    horas: 4,
    contenido:
      'Lectura de gráficas, tablas y series temporales de los tableros disponibles. Uso de filtros visibles y comparación solo cuando fuente, periodo y definición son compatibles.',
    ia: 'Redacción de una explicación clara del indicador, sin compartir cifras ni capturas institucionales con el asistente.',
    producto: 'Interpretación de un tablero existente con sus límites y una pregunta para el mando.',
  },
  {
    num: 9,
    titulo: 'Integración del análisis con QGIS y Metabase',
    horas: 4,
    contenido:
      'Presentación del mapa de práctica de QGIS junto con la lectura de un tablero de Metabase. Documentación de fuente, periodo, filtros, limitaciones y diferencia entre ambos conjuntos de datos.',
    ia: 'Apoyo para ordenar una presentación sin pegar datos operativos ni cifras del tablero.',
    producto: 'Presentación breve con mapa, lectura verificada del tablero y recomendación condicionada por las fuentes.',
  },
  {
    num: 10,
    titulo: 'Proyecto final aplicado a seguridad pública',
    horas: 3,
    contenido:
      'Producto analítico que integra estadística, visualización y cartografía. Retroalimentación grupal. Límites de la IA: verificación, sesgo y responsabilidad sobre el resultado.',
    producto: 'Proyecto integrador presentado ante el grupo.',
  },
]

export const productos = [
  {
    icon: 'icon-[tabler--layout-dashboard]',
    titulo: 'Lectura verificada de Metabase',
    texto: 'Describe la fuente, el periodo y los filtros de un tablero existente antes de sacar conclusiones.',
  },
  {
    icon: 'icon-[tabler--zoom-exclamation]',
    titulo: 'Detector de capturas inconsistentes',
    texto: 'Aplicable de inmediato al control de calidad de los registros.',
  },
  {
    icon: 'icon-[tabler--map-2]',
    titulo: 'Mapa básico de incidentes en QGIS',
    texto: 'Mapa base, capas proporcionadas de colonias y cuadrantes, GeoJSON dibujado y puntos filtrados.',
  },
  {
    icon: 'icon-[tabler--file-analytics]',
    titulo: 'Presentación integradora',
    texto: 'Expone el mapa de práctica y un hallazgo de Metabase con sus límites y una recomendación.',
  },
]

export const requerimientos = [
  'Equipo por participante con privilegios de instalación y 8 GB de RAM como mínimo.',
  'Python con Jupyter, o Google Colab si no se autoriza la instalación local.',
  'QGIS LTR, misma versión para todo el grupo, con acceso a un mapa base de teselas.',
  'Acceso autorizado de lectura a la colección de tableros del curso en Metabase.',
  'Acceso a internet y a los asistentes de IA definidos para el curso.',
  'Conjunto de datos sintético o anonimizado, proporcionado por el instructor.',
]

export const acreditacion = [
  { icon: 'icon-[tabler--user-check]', texto: 'Asistencia mínima del 80% de las sesiones.' },
  { icon: 'icon-[tabler--presentation]', texto: 'Entrega del producto integrador del Día 3.' },
  { icon: 'icon-[tabler--checklist]', texto: 'Puntaje mínimo de 6 sobre 10 en la rúbrica del producto final.' },
  { icon: 'icon-[tabler--shield-lock]', texto: 'Cero incidencias en el manejo seguro de la información.' },
]

/**
 * Día en que va el grupo, para la línea de avance de la portada.
 * 0 = el curso no ha empezado; 4 = ya concluyó. Actualícelo al iniciar cada día.
 */
export const diaActual = 3
