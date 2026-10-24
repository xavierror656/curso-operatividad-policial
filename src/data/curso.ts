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
    'Manejo básico de computadora e internet. No se requieren conocimientos previos de estadística, cartografía o programación.',
  herramientas: ['Python con Jupyter', 'Metabase', 'QGIS', 'Asistentes de IA'],
  objetivo:
    'Que el participante revise datos de práctica, construya un mapa sencillo en QGIS y lea tres gráficas de tableros existentes de Metabase, con acompañamiento paso a paso y cuidado de la información.',
}

export const enfoque = [
  {
    icon: 'icon-[tabler--database]',
    titulo: 'Del archivo al análisis',
    texto:
      'El CSV sintético se depura el Día 1 y se mapea en QGIS el Día 2. El Día 3 se lee una gráfica de territorio, una de turnos y una de emergencias en Metabase.',
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
    titulo: 'Metabase: tres actividades guiadas',
    entregable: 'Tres respuestas breves sobre territorio, turnos y emergencias; cada una indica Periodo y Distrito.',
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
    titulo: 'Primeros pasos con Metabase',
    horas: 4,
    contenido:
      'Acceso guiado a Metabase y lectura de una gráfica sencilla en cada uno de tres tableros: Territorio, Ritmo temporal y Emergencias.',
    producto: 'Primera respuesta breve con Periodo y Distrito visibles.',
  },
  {
    num: 8,
    titulo: 'Leer tres gráficas de Metabase',
    horas: 4,
    contenido:
      'Lectura guiada de gráficas por distrito, turno y tipo de atención. Identificación de la barra mayor sin atribuir causas.',
    producto: 'Tres respuestas breves, una por gráfica.',
  },
  {
    num: 9,
    titulo: 'Revisar Periodo y Distrito',
    horas: 4,
    contenido:
      'Comprobación de los filtros Periodo y Distrito antes de leer cada gráfica. Uso de un periodo completo indicado por el instructor.',
    producto: 'Tres frases con los filtros utilizados.',
  },
  {
    num: 10,
    titulo: 'Compartir una respuesta de Metabase',
    horas: 3,
    contenido:
      'Lectura en voz alta de una de las tres respuestas. El participante nombra el Periodo y Distrito y distingue lo observado en la gráfica de una explicación de las causas.',
    producto: 'Una respuesta breve presentada al grupo.',
  },
]

export const productos = [
  {
    icon: 'icon-[tabler--layout-dashboard]',
    titulo: 'Tres lecturas de Metabase',
    texto: 'Responde tres preguntas breves e indica el Periodo y Distrito usados.',
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
    titulo: 'Respuesta clara al grupo',
    texto: 'Lee una frase y explica qué muestra la gráfica, sin atribuir causas.',
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
  { icon: 'icon-[tabler--presentation]', texto: 'Entrega de tres respuestas breves de Metabase del Día 3.' },
  { icon: 'icon-[tabler--checklist]', texto: 'Puntaje mínimo de 6 sobre 10 en la rúbrica del producto final.' },
  { icon: 'icon-[tabler--shield-lock]', texto: 'Cero incidencias en el manejo seguro de la información.' },
]

/**
 * Día en que va el grupo, para la línea de avance de la portada.
 * 0 = el curso no ha empezado; 4 = ya concluyó. Actualícelo al iniciar cada día.
 */
export const diaActual = 3
