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
    'Que el participante sea capaz de tomar información operativa de la Secretaría, depurarla, analizarla y convertirla en productos que apoyen la toma de decisiones: tableros de mando, mapas de concentración de incidentes y reportes periódicos, empleando software libre y asistentes de inteligencia artificial bajo criterios de seguridad de la información.',
}

export const enfoque = [
  {
    icon: 'icon-[tabler--database]',
    titulo: 'Un solo conjunto de datos',
    texto:
      'Todos los temas trabajan sobre el mismo conjunto de incidentes: el resultado de cada tema es el insumo del siguiente.',
  },
  {
    icon: 'icon-[tabler--sparkles]',
    titulo: 'La IA dentro de cada herramienta',
    texto:
      'El participante dirige un asistente para generar Python, SQL y PyQGIS, y verifica lo que devuelve. Se resuelven problemas con criterio, no se memoriza código.',
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
    titulo: 'Business Intelligence y tableros de mando',
    entregable: 'Tablero con tres vistas y un filtro de periodo.',
    disponible: false,
  },
  {
    dia: 3,
    slug: 'dia-3',
    titulo: 'Cartografía, análisis espacial y proyecto integrador',
    entregable: 'Mapa de concentración y proyecto integrador.',
    disponible: false,
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
    titulo: 'Business Intelligence con Metabase y SQL asistido',
    horas: 4,
    contenido:
      'Conceptos de Business Intelligence, interfaz de Metabase, conexión a bases de datos institucionales, navegación y construcción de preguntas.',
    ia: 'Consultas SQL a partir solo del esquema de tablas. Verificación obligatoria contra un conteo de control conocido.',
    producto: 'Colección de preguntas guardadas y verificadas.',
  },
  {
    num: 6,
    titulo: 'Visualización y dashboards en Metabase',
    horas: 4,
    contenido:
      'Gráficas, tablas y series temporales. Filtros y parámetros. Diseño de tableros institucionales orientados a la decisión de mando.',
    ia: 'Definición de indicadores y jerarquía visual del tablero a partir del perfil del usuario final.',
    producto: 'Tablero de mando por sector, hora del día y día de la semana.',
  },
  {
    num: 7,
    titulo: 'Introducción a QGIS y automatización con PyQGIS',
    horas: 3,
    contenido:
      'Interfaz y paneles, sistemas de coordenadas WGS84 y UTM zona 13N, capas vectoriales, georreferenciación de incidentes desde CSV, simbología y mapas base.',
    ia: 'Scripts de PyQGIS para carga automática de capas y georreferenciación por lotes.',
    producto: 'Mapa de puntos de incidentes y script de carga automatizada.',
  },
  {
    num: 8,
    titulo: 'Mapas temáticos y análisis espacial básico',
    horas: 3,
    contenido:
      'Unión de atributos con colonias o sectores, mapas coropléticos por cortes naturales y cuantiles, mapas de densidad, conteo de puntos en polígono y composición de impresión.',
    ia: 'Scripts de geoprocesamiento y exportación de mapas en lote.',
    producto: 'Generador de mapas de concentración en PDF.',
  },
  {
    num: 9,
    titulo: 'Integración de Python, Metabase y QGIS',
    horas: 4,
    contenido:
      'Flujo completo entre herramientas, exportación en CSV y GeoPackage, conexión directa a la base de datos, actualización periódica y documentación.',
    ia: 'Script único que ejecuta el flujo completo, revisado y validado por el participante.',
    producto: 'Reporte semanal automatizado.',
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
    titulo: 'Tablero de incidencia delictiva',
    texto: 'Depura, carga, alimenta el tablero y genera el mapa con una sola ejecución.',
  },
  {
    icon: 'icon-[tabler--zoom-exclamation]',
    titulo: 'Detector de capturas inconsistentes',
    texto: 'Aplicable de inmediato al control de calidad de los registros.',
  },
  {
    icon: 'icon-[tabler--map-2]',
    titulo: 'Generador de mapas de concentración',
    texto: 'Por periodo, con exportación lista para impresión.',
  },
  {
    icon: 'icon-[tabler--file-analytics]',
    titulo: 'Reporte periódico automatizado',
    texto: 'Mapa, gráficas y cifras del periodo en un solo documento.',
  },
]

export const requerimientos = [
  'Equipo por participante con privilegios de instalación y 8 GB de RAM como mínimo.',
  'Python con Jupyter, o Google Colab si no se autoriza la instalación local.',
  'QGIS LTR, misma versión para todo el grupo, con QuickMapServices.',
  'Instancia de Metabase conectada a una base de datos de práctica.',
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
export const diaActual = 1
