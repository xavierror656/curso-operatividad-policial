/** Recursos de práctica y cierre: casos, escenarios, verificación y versiones del curso. */

export interface Caso {
  dia: 1 | 2 | 3
  titulo: string
  paso: string
  error: string
  consecuencia: string
  leccion: string
  pregunta: string
}

/**
 * Casos ilustrativos, construidos a partir de errores frecuentes de captura y de análisis.
 * No corresponden a hechos reales de la Secretaría. El instructor puede sustituirlos
 * por casos propios ya anonimizados (sin nombres, folios, domicilios ni coordenadas).
 */
export const casos: Caso[] = [
  {
    dia: 1,
    titulo: 'La colonia que tenía cuatro nombres',
    paso: 'Un reporte semanal mostraba la misma colonia escrita como «Hacienda de las Torres», «Hda. Las Torres», «HACIENDA LAS TORRES » (con espacio al final) y «Hacienda Torres».',
    error: 'No se usó el catálogo institucional de colonias al capturar.',
    consecuencia: 'El tablero repartió 26 incidentes en cuatro barras chicas (11, 7, 5 y 3). La colonia no figuró entre las prioritarias y el recorrido se asignó a otra zona.',
    leccion: 'Una variable categórica sin catálogo no se puede contar. Se normaliza antes de analizar.',
    pregunta: '¿Qué dimensión de calidad falló?',
  },
  {
    dia: 1,
    titulo: 'La fecha que se leyó al revés',
    paso: 'Un archivo mezclaba fechas como 03/07/2026 capturadas como día/mes con otras capturadas como mes/día.',
    error: 'Formato de fecha distinto entre dos capturistas y ninguna validación de rango.',
    consecuencia: 'El análisis mensual puso en marzo incidentes de julio y la tendencia semanal salió falsa.',
    leccion: 'Se fija un solo formato en la captura y se valida que la fecha no sea futura ni anterior al inicio del periodo.',
    pregunta: '¿Cómo detectaría el problema sin revisar fila por fila?',
  },
  {
    dia: 3,
    titulo: 'La consulta que contó de más',
    paso: 'Un asistente de IA generó una consulta SQL que unía incidentes con una tabla de unidades. El tablero mostró 428 registros para un distrito que en realidad tenía 214.',
    error: 'La unión duplicaba las filas con más de una unidad asignada y nadie comparó contra el conteo de control (214).',
    consecuencia: 'El informe al mando sobrestimó la incidencia en más de 50 % y hubo que retirarlo.',
    leccion: 'Toda consulta generada con IA se verifica contra un conteo conocido antes de publicarse.',
    pregunta: '¿Qué conteo de control habría usado?',
  },
  {
    dia: 2,
    titulo: 'El punto que cayó fuera del mapa',
    paso: 'Al graficar el CSV en QGIS, catorce puntos aparecieron lejos del municipio.',
    error: 'Latitud y longitud capturadas al revés en un lote y sin validación de coordenadas.',
    consecuencia: 'El mapa mostraba ubicaciones falsas y se descubrió hasta la reunión de presentación.',
    leccion: 'Antes de graficar, se revisan las coordenadas con el rango de práctica. Los puntos erróneos se identifican y no se corrigen a ojo.',
    pregunta: '¿Qué rango de latitud y longitud le exigiría a Ciudad Juárez?',
  },
  {
    dia: 1,
    titulo: 'La fila pegada en el asistente',
    paso: 'Para «ir más rápido», una persona pegó en un asistente de IA una fila real con nombre, domicilio y folio, y pidió que le sugiriera una regla de limpieza.',
    error: 'Se compartieron datos en lugar de la estructura del archivo.',
    consecuencia: 'Información personal salió de la institución sin posibilidad de recuperarla y se levantó un reporte de incidencia de seguridad.',
    leccion: 'Se comparte la estructura (nombres de columnas, tipos, mensaje de error), nunca los datos.',
    pregunta: '¿Cómo habría descrito el problema al asistente sin pegar la fila?',
  },
]

export interface Escenario {
  situacion: string
  opciones: { texto: string; mejor?: boolean; porque: string }[]
}

export const escenarios: Escenario[] = [
  {
    situacion:
      'Su jefe le pide un mapa de incidentes en diez minutos. Al cargar el archivo, treinta puntos tienen coordenadas fuera del municipio.',
    opciones: [
      { texto: 'Mapear todo tal como está para no perder tiempo.', porque: 'Los puntos fuera del municipio dan una imagen equivocada de dónde ocurrieron los incidentes.' },
      {
        texto: 'Filtrar los treinta puntos erróneos, guardar el proyecto y explicar cuántos se excluyeron y por qué.',
        mejor: true,
        porque: 'El mapa queda claro y la exclusión se explica antes de tomar una decisión.',
      },
      { texto: 'Corregir las coordenadas a ojo, cambiándolas de lugar.', porque: 'Inventar un dato es peor que omitirlo. Solo se corrige con la fuente original.' },
    ],
  },
  {
    situacion:
      'El asistente de IA le devuelve una consulta SQL que corre sin errores, pero el total del mes no coincide con el que usted conoce.',
    opciones: [
      { texto: 'Confiar en la consulta: corrió sin errores.', porque: 'Que corra no significa que cuente bien. Es el error más común.' },
      {
        texto: 'Comparar contra el conteo de control y revisar si hay uniones que duplican filas.',
        mejor: true,
        porque: 'Es la verificación obligatoria del curso y localiza la causa.',
      },
      { texto: 'Pegar los resultados en el asistente para que los «corrija».', porque: 'Los resultados también son información institucional y no se comparten.' },
    ],
  },
  {
    situacion: 'Un compañero le pide el archivo de incidentes por mensajería personal para «adelantar el análisis en su casa».',
    opciones: [
      { texto: 'Enviárselo, es de confianza.', porque: 'La confianza no cambia la clasificación de la información.' },
      {
        texto: 'No enviarlo. Compartirle la ruta institucional autorizada o la versión sintética del curso.',
        mejor: true,
        porque: 'Mantiene el dato dentro de los medios institucionales y el compañero igual avanza.',
      },
      { texto: 'Enviarle solo una muestra de diez filas.', porque: 'Diez filas reales siguen siendo datos reales.' },
    ],
  },
  {
    situacion: 'En el tablero, un sector aparece con cero incidentes durante tres semanas seguidas.',
    opciones: [
      { texto: 'Informar que el sector está tranquilo.', porque: 'Cero puede ser ausencia de captura, no ausencia de incidentes.' },
      {
        texto: 'Preguntar al área si hubo captura en esas semanas antes de concluir nada.',
        mejor: true,
        porque: 'Se descarta primero un problema de oportunidad o completitud del dato.',
      },
      { texto: 'Quitar el sector del tablero para que no distraiga.', porque: 'Ocultar un hueco impide detectar el problema de fondo.' },
    ],
  },
]

export interface FilaError {
  folio: string
  fecha: string
  hora: string
  delito: string
  colonia: string
  sector: string
  lat: string
  lon: string
  falla?: string
}

/** Registros ficticios. El catálogo de sectores de práctica va del 1 al 6. */
export const filasError: FilaError[] = [
  { folio: 'J-0001', fecha: '14/03/2026', hora: '08:15', delito: 'Robo a transeúnte', colonia: 'Bellavista', sector: '2', lat: '31.7412', lon: '-106.4870' },
  { folio: 'J-0002', fecha: '14/03/2026', hora: '09:40', delito: 'Violencia familiar', colonia: 'Hacienda de las Torres', sector: '4', lat: '31.6425', lon: '-106.3290' },
  { folio: 'J-0003', fecha: '15/03/2026', hora: '25:10', delito: 'Robo de vehículo', colonia: 'Bellavista', sector: '2', lat: '31.7380', lon: '-106.4820', falla: 'Exactitud: la hora 25:10 no existe.' },
  { folio: 'J-0004', fecha: '15/03/2026', hora: '11:05', delito: 'Robo a casa habitación', colonia: 'HACIENDA LAS TORRES ', sector: '4', lat: '31.6440', lon: '-106.3310', falla: 'Consistencia: la colonia está escrita distinto al catálogo (mayúsculas y espacio final).' },
  { folio: 'J-0002', fecha: '14/03/2026', hora: '09:40', delito: 'Violencia familiar', colonia: 'Hacienda de las Torres', sector: '4', lat: '31.6425', lon: '-106.3290', falla: 'Duplicado: el folio J-0002 ya se capturó con los mismos datos.' },
  { folio: 'J-0006', fecha: '16/03/2026', hora: '14:30', delito: 'Robo a comercio', colonia: 'Centro', sector: '1', lat: '-106.4870', lon: '31.7005', falla: 'Exactitud: latitud y longitud están invertidas.' },
  { folio: 'J-0007', fecha: '12/11/2027', hora: '16:20', delito: 'Lesiones', colonia: 'Centro', sector: '1', lat: '31.7250', lon: '-106.4800', falla: 'Oportunidad: la fecha es posterior a la de hoy.' },
  { folio: 'J-0008', fecha: '17/03/2026', hora: '19:45', delito: 'Robo a transeúnte', colonia: 'Bellavista', sector: '2', lat: '', lon: '-106.4850', falla: 'Completitud: falta la latitud.' },
  { folio: 'J-0009', fecha: '17/03/2026', hora: '21:10', delito: 'Daño en propiedad', colonia: 'Centro', sector: '9', lat: '31.7260', lon: '-106.4790', falla: 'Consistencia: el sector 9 no existe en el catálogo (1 a 6).' },
  { folio: 'J-0010', fecha: '18/03/2026', hora: '07:55', delito: 'Robo a transeúnte', colonia: 'Bellavista', sector: '2', lat: '31.7400', lon: '-106.4860' },
]

export interface GrupoVerificacion {
  id: string
  titulo: string
  icon: string
  items: string[]
}

export const verificacion: GrupoVerificacion[] = [
  {
    id: 'ia',
    titulo: 'Antes de usar un asistente de IA',
    icon: 'icon-[tabler--shield-lock]',
    items: [
      'Voy a compartir solo nombres de columnas, tipos de dato o un mensaje de error.',
      'No hay nombres, domicilios, folios, coordenadas ni resultados en lo que voy a pegar.',
      'Si tengo duda sobre un dato, no lo comparto y pregunto al instructor o a mi mando.',
    ],
  },
  {
    id: 'depurado',
    titulo: 'Archivo depurado',
    icon: 'icon-[tabler--database]',
    items: [
      'Fechas en un solo formato y ninguna posterior a hoy.',
      'Horas válidas, entre 00:00 y 23:59.',
      'Colonias y sectores normalizados contra el catálogo.',
      'Registros duplicados identificados y marcados, no borrados.',
      'Coordenadas dentro del rango del municipio y sin latitud ni longitud invertidas.',
      'Conté los registros antes y después de depurar y puedo explicar la diferencia.',
    ],
  },
  {
    id: 'tablero',
    titulo: 'Tablero o consulta',
    icon: 'icon-[tabler--layout-dashboard]',
    items: [
      'Cada consulta se comparó contra un conteo de control conocido.',
      'Revisé que ninguna unión duplique filas.',
      'El filtro de periodo cambia todas las vistas, sin excepción.',
      'Las cifras en cero se confirmaron con el área antes de interpretarlas.',
      'El título de cada gráfica dice qué mide y en qué periodo.',
    ],
  },
  {
    id: 'mapa',
    titulo: 'Proyecto básico de QGIS',
    icon: 'icon-[tabler--map-2]',
    items: [
      'Añadí un mapa base de teselas debajo de las capas de datos.',
      'Dibujé un polígono sencillo y lo guardé como GeoJSON.',
      'Grafiqué los puntos del archivo sintético y apliqué un filtro que puedo explicar.',
    ],
  },
  {
    id: 'entrega',
    titulo: 'Antes de entregar al mando',
    icon: 'icon-[tabler--send]',
    items: [
      'Puedo explicar de dónde sale cada cifra principal.',
      'Verifiqué el resultado generado con IA: la responsabilidad es mía.',
      'El producto lleva la clasificación de la información que le corresponde.',
      'Guardé una copia del procedimiento para repetirlo la próxima semana.',
    ],
  },
  {
    id: 'proyeccion',
    titulo: 'Antes de proyectar en el aula',
    icon: 'icon-[tabler--presentation]',
    items: [
      'Probé el proyector y leí una diapositiva desde la última fila.',
      'Activé «texto grande» o «alto contraste» (teclas L y C) si el salón lo necesita.',
      'Probé avanzar y retroceder solo con el teclado o el control remoto.',
      'Abrí el sitio una vez con internet para que quede disponible sin conexión.',
      'Ningún dato real aparece en pantalla.',
    ],
  },
]

export const versiones = [
  {
    version: '1.3',
    fecha: '2026-10-19',
    cambios: [
      'Auditoría: cifras unificadas (428 contra 214; 1,058 menos 130 igual 928), cuestionario de diagnóstico programado en el Día 1 y cierre del Día 3 reorganizado por equipos.',
      'Día 1: diapositiva de ETL, cuestionario de diagnóstico y seis vicios de captura completos. Día 3: práctica cronometrada de exportación.',
      'Modelo ER, prompts de EDA, limpieza y gráficas, y nuevos distractores en el cuestionario.',
      'Datos sintéticos descargables con diccionario, aviso de privacidad con borrado de datos, y materiales del instructor (rúbrica, asistencia, protocolo de incidente y plan B).',
      'Diapositivas: botones de texto grande y alto contraste, letra mínima mayor y teclado corregido. Sitio sin conexión que muestra la versión más reciente.',
      'Verificación automática del contenido antes de publicar.',
    ],
  },
  {
    version: '1.2',
    fecha: '2026-10-19',
    cambios: [
      'Casos ilustrativos, escenarios de decisión y práctica para detectar capturas inconsistentes.',
      'Hoja de verificación interactiva y resumen imprimible de una página por día.',
      'Retroalimentación con explicación y diapositiva de repaso en el cuestionario.',
      'Aviso de pausa activa en la vista del presentador y modos de texto grande y alto contraste en las diapositivas.',
      'Cierre con compromiso individual, encuesta de satisfacción y registro de versiones.',
    ],
  },
  {
    version: '1.1',
    fecha: '2026-10-18',
    cambios: ['Diez mejoras de interfaz y experiencia de uso.', 'Foco visible de alto contraste en los componentes.'],
  },
  {
    version: '1.0',
    fecha: '2026-10-18',
    cambios: ['Sitio del curso y diapositivas de los tres días.'],
  },
]

/** Preguntas de la encuesta de satisfacción, escala de 1 a 5. */
export const encuesta = [
  { id: 'ritmo', corta: 'Ritmo', texto: 'El ritmo de las sesiones fue adecuado.' },
  { id: 'claridad', corta: 'Claridad', texto: 'Las explicaciones y los materiales fueron claros.' },
  { id: 'utilidad', corta: 'Utilidad', texto: 'Lo aprendido me sirve en mi trabajo diario.' },
  { id: 'practica', corta: 'Práctica', texto: 'Hubo tiempo suficiente para practicar con las herramientas.' },
  { id: 'ia', corta: 'Uso de IA', texto: 'Me siento seguro de usar un asistente de IA sin exponer información.' },
]
