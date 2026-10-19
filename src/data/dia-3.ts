import type { Deck } from './types'

/**
 * Día 3 · Cartografía, análisis espacial y proyecto integrador.
 * Generado a partir del prompt del Día 3. Las cifras son ficticias y son las
 * mismas del tablero del Día 2 (928 registros).
 */
export const dia3: Deck = {
  slug: 'dia-3',
  day: 3,
  title: 'Cartografía, análisis espacial y proyecto integrador',
  subtitle: 'Día 3',
  schedule: '08:00 a 12:00',
  objective:
    'Que el participante convierta los registros depurados en mapas de puntos y de concentración, y presente un producto analítico que integre lo trabajado en los tres días.',
  blocks: [
    { id: 'Apertura', label: 'Apertura', range: '08:00' },
    { id: '1', label: 'Del dato al mapa', range: '08:00 – 09:00' },
    { id: '2', label: 'Mapas de puntos y temáticos', range: '09:00 – 10:00' },
    { id: 'Receso', label: 'Receso técnico', range: '10:00 – 10:15' },
    { id: '3', label: 'Concentración y automatización', range: '10:15 – 11:15' },
    { id: '4', label: 'Proyecto integrador y cierre', range: '11:15 – 12:00' },
  ],
  slides: [
    // ───────────── Apertura ─────────────
    {
      block: 'Apertura',
      time: '08:00',
      layout: 'cover',
      kicker: 'Día 3 · 08:00 a 12:00',
      title: 'Un mapa muestra lo que una tabla esconde',
      lead: 'Cartografía, análisis espacial y proyecto integrador',
      notes:
        'Último día. Recuerde que hoy se cierra el producto integrador y se aplica el cuestionario de cierre. El archivo sigue siendo el mismo del Día 1.',
    },
    {
      block: 'Apertura',
      time: '08:02',
      layout: 'checklist',
      kicker: 'Repaso de los Días 1 y 2',
      title: 'Ya tiene un archivo confiable y un tablero verificado',
      bullets: [
        'Día 1: fechas, coordenadas y colonias depuradas',
        'Día 1: duplicados resueltos y documentados',
        'Día 2: tablero con tres vistas y un filtro',
        'Día 2: cifras verificadas con conteo de control',
      ],
      notes: 'Una sola diapositiva de repaso. Las coordenadas que se validaron el Día 1 son las que hoy se dibujan.',
    },
    {
      block: 'Apertura',
      time: '08:04',
      layout: 'bullets',
      kicker: 'Qué se logra hoy',
      title: 'Al mediodía usted presenta un producto con los tres días',
      bullets: [
        'Convierte su archivo en una capa de puntos',
        'Construye un mapa por sector y un mapa de calor',
        'Pide al asistente un script y lo revisa',
        'Exporta su mapa en PDF y presenta su proyecto',
      ],
      notes: 'El día es intenso. Mantenga el ritmo: el bloque 4 no se recorta, porque ahí se presenta el proyecto.',
    },

    // ───────────── Bloque 1 ─────────────
    {
      block: '1',
      time: '08:06',
      layout: 'goal',
      kicker: 'Bloque 1 · 08:00 a 09:00',
      title: 'En esta hora su archivo se convierte en puntos sobre el mapa',
      bullets: ['Qué responde un mapa que una tabla no', 'Coordenadas y sistemas de referencia', 'Cargar su archivo depurado en QGIS'],
      notes: 'Diapositiva de arranque del bloque.',
    },
    {
      block: '1',
      time: '08:08',
      layout: 'compare',
      title: 'Una tabla responde cuánto; un mapa responde dónde',
      left: {
        tone: 'neutral',
        label: 'Tabla',
        items: ['Cuauhtémoc: 214 registros', 'No muestra si están juntos o dispersos', 'No muestra qué calles comparten'],
      },
      right: { label: 'Mapa', items: ['Los 214 puntos sobre las calles', 'Se ven agrupamientos y huecos', 'Se ve la frontera entre sectores'] },
      notes:
        'Pregunte al grupo: con 214 registros en un distrito, ¿se reparten igual las unidades en todo el distrito? El mapa responde eso; la tabla no.',
    },
    {
      block: '1',
      time: '08:14',
      layout: 'cards',
      title: 'Una coordenada son dos números y una regla para leerlos',
      cards: [
        { icon: 'icon-[tabler--arrows-vertical]', title: 'Latitud', text: 'Qué tan al norte. En Juárez, cerca de 31.' },
        { icon: 'icon-[tabler--arrows-horizontal]', title: 'Longitud', text: 'Qué tan al oeste. En Juárez, cerca de -106.' },
        { icon: 'icon-[tabler--world]', title: 'Sistema de referencia', text: 'La regla que dice cómo leer esos dos números.' },
      ],
      notes: 'Conecte con el Día 1: la regla de práctica de latitud entre 31.0 y 31.8 sale de aquí.',
    },
    {
      block: '1',
      time: '08:20',
      layout: 'compare',
      title: 'WGS84 sirve para ubicar; UTM 13N sirve para medir',
      lead: 'Ciudad Juárez está en la zona 13 norte del sistema UTM.',
      left: { tone: 'neutral', label: 'WGS84 · EPSG:4326', items: ['Grados: latitud y longitud', 'Lo usan GPS y teléfonos', 'Su archivo viene en este sistema'] },
      right: { tone: 'neutral', label: 'UTM 13N · EPSG:32613', items: ['Metros, no grados', 'Distancias y áreas correctas', 'Para radios y mapas de calor'] },
      notes:
        'EPSG es el número de catálogo de cada sistema; QGIS los pide así. Regla práctica: se carga en WGS84 y se reproyecta a UTM 13N antes de medir cualquier distancia.',
    },
    {
      block: '1',
      time: '08:28',
      layout: 'table',
      title: 'Tres errores de georreferenciación arruinan todo el mapa',
      table: {
        head: ['Error', 'Qué se ve en el mapa', 'Consecuencia'],
        rows: [
          ['Columnas invertidas', 'Puntos fuera del continente', 'Registros perdidos sin aviso'],
          ['Sistema equivocado', 'Capa desplazada o en otro lugar', 'Todo el mapa es falso'],
          ['Medir en grados', 'Radios y áreas sin sentido', 'Concentración mal calculada'],
        ],
      },
      notes:
        'El primero ya se atacó el Día 1 en el archivo; aquí puede reaparecer al indicar las columnas en QGIS. El tercero es silencioso: el mapa se ve bien y las medidas están mal.',
    },
    {
      block: '1',
      time: '08:36',
      layout: 'cards',
      title: 'QGIS trabaja con capas, como hojas transparentes encimadas',
      cards: [
        { icon: 'icon-[tabler--stack-2]', title: 'Panel de capas', text: 'Lo que está arriba tapa lo de abajo.' },
        { icon: 'icon-[tabler--map]', title: 'Lienzo del mapa', text: 'Donde se ve el resultado.' },
        { icon: 'icon-[tabler--tool]', title: 'Herramientas', text: 'Acercar, mover, seleccionar y medir.' },
      ],
      capture: 'Interfaz de QGIS LTR con el panel de capas y el lienzo del mapa.',
      notes: 'Haga el recorrido en vivo con la versión LTR instalada en el aula; todos deben tener la misma versión.',
    },
    {
      block: '1',
      time: '08:44',
      layout: 'flow',
      title: 'Su archivo depurado se vuelve capa de puntos en cuatro pasos',
      steps: [
        { label: 'Agregar capa', detail: 'De texto delimitado: su CSV' },
        { label: 'Indicar columnas', detail: 'X = longitud, Y = latitud' },
        { label: 'Elegir sistema', detail: 'WGS84, EPSG:4326' },
        { label: 'Contar puntos', detail: 'Debe dar 928' },
      ],
      notes:
        'X es longitud y Y es latitud: es el error más común de todo el día. El conteo de puntos es el mismo control del Día 2: si no da 928, se perdieron registros.',
    },
    {
      block: '1',
      time: '08:55',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Si el conteo de puntos cuadra, su mapa empieza bien',
      bullets: ['El mapa responde dónde; la tabla, cuánto', 'WGS84 para ubicar, UTM 13N para medir', 'X es longitud, Y es latitud'],
      notes: 'Antes de avanzar, todos deben ver sus puntos dentro del municipio.',
    },

    // ───────────── Bloque 2 ─────────────
    {
      block: '2',
      time: '09:00',
      layout: 'goal',
      kicker: 'Bloque 2 · 09:00 a 10:00',
      title: 'En esta hora el mapa empieza a contar una historia',
      bullets: ['Simbología por tipo de delito', 'Unión con la capa de sectores', 'Mapas coropléticos y sus cortes'],
      notes: 'Diapositiva de arranque del bloque.',
    },
    {
      block: '2',
      time: '09:02',
      layout: 'bullets',
      title: 'Un color por tipo de delito, y no más de seis',
      lead: 'Simbología: la forma y el color con que se dibuja cada punto.',
      bullets: [
        'Colores distintos para tipos distintos',
        'Con más de seis colores ya no se distinguen',
        'Los tipos menores se agrupan en «Otros»',
        'Siempre con leyenda visible',
      ],
      capture: 'Capa de puntos clasificada por tipo de delito, con su leyenda.',
      notes: 'Use los seis tipos del tablero del Día 2. Si alguien tiene más, que agrupe los menores.',
    },
    {
      block: '2',
      time: '09:10',
      layout: 'bullets',
      title: 'El mapa base orienta, pero no debe competir con los datos',
      bullets: ['Mapa base en tonos grises claros', 'Calles y nombres como referencia', 'Se agrega con el complemento QuickMapServices', 'Los puntos siempre por encima'],
      capture: 'Puntos de incidentes sobre un mapa base en grises.',
      notes: 'Un mapa base muy colorido hace que los puntos se pierdan. El mapa base es fondo, no protagonista.',
    },
    {
      block: '2',
      time: '09:17',
      layout: 'flow',
      title: 'Unir los puntos con los sectores le da a cada sector su cifra',
      steps: [
        { label: 'Cargar sectores', detail: 'Polígonos oficiales' },
        { label: 'Contar puntos', detail: 'En cada polígono' },
        { label: 'Nueva columna', detail: 'Registros por sector' },
        { label: 'Comparar', detail: 'La suma debe dar 928' },
      ],
      notes:
        'El resultado debe coincidir con la vista por sector del tablero del Día 2. Si no coincide, hay puntos fuera de los polígonos o capas en sistemas distintos.',
    },
    {
      block: '2',
      time: '09:27',
      layout: 'bullets',
      title: 'Un mapa coroplético pinta cada sector según su cifra',
      lead: 'Coroplético: cada área se colorea según su valor, de claro a oscuro.',
      bullets: ['Un solo color, de claro a oscuro', 'Más oscuro significa más registros', 'Cinco clases como máximo', 'La leyenda dice qué rango es cada tono'],
      capture: 'Mapa coroplético de sectores con su leyenda de clases.',
      notes: 'No use un arcoíris de colores para cantidades: el ojo no sabe si el verde es más o menos que el amarillo.',
    },
    {
      block: '2',
      time: '09:36',
      layout: 'compare',
      title: 'Cortes naturales y cuantiles cuentan historias distintas',
      left: { tone: 'neutral', label: 'Cortes naturales', items: ['Agrupa valores parecidos', 'Respeta los saltos reales de los datos', 'Útil para ver los extremos'] },
      right: { tone: 'neutral', label: 'Cuantiles', items: ['Mismo número de sectores por clase', 'Siempre usa todos los colores', 'Puede exagerar diferencias pequeñas'] },
      notes: 'Clase: cada rango de valores que se pinta con un mismo tono. El método decide dónde empieza y termina cada rango.',
    },
    {
      block: '2',
      time: '09:44',
      layout: 'table',
      title: 'Con cuantiles, un solo registro cambia la clase de un distrito',
      lead: 'Mismos datos del tablero, tres clases. Cifras ficticias.',
      table: {
        head: ['Distrito', 'Registros', 'Cortes naturales', 'Cuantiles'],
        rows: [
          ['Chihuahua', '87', 'Baja', 'Baja'],
          ['Delicias', '109', 'Media', 'Baja'],
          ['Babícora', '121', 'Media', 'Media'],
          ['Aldama', '198', 'Alta', 'Media'],
          ['Universidad', '199', 'Alta', 'Alta'],
          ['Cuauhtémoc', '214', 'Alta', 'Alta'],
        ],
      },
      notes:
        'Con cuantiles, Aldama (198) queda en «Media» y Universidad (199) en «Alta» por un solo registro. Un mando que solo ve el mapa creería que son distintos. Siempre diga qué método usó.',
    },
    {
      block: '2',
      time: '09:53',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'El corte que elija decide lo que el mando ve',
      bullets: ['Colores por tipo de delito, máximo seis', 'Coroplético: un color, de claro a oscuro', 'Diga siempre qué método de corte usó'],
      notes: 'Pida que guarden su proyecto de QGIS antes del receso.',
    },

    // ───────────── Receso ─────────────
    {
      block: 'Receso',
      time: '10:00',
      layout: 'break',
      kicker: 'Receso técnico · 15 minutos',
      title: 'Regresamos a las 10:15',
      lead: 'Guarde su proyecto de QGIS y déjelo abierto.',
      bullets: ['Antes del receso, usted ya tiene su mapa por sector.'],
      notes: 'Revise que todos guardaron su proyecto.',
    },

    // ───────────── Bloque 3 ─────────────
    {
      block: '3',
      time: '10:15',
      layout: 'goal',
      kicker: 'Bloque 3 · 10:15 a 11:15',
      title: 'En esta hora encontramos concentración y la automatizamos',
      bullets: [
        'Mapa de calor y conteo por polígono',
        'Qué es y qué no es una zona de concentración',
        'Un script del asistente para repetir el proceso',
      ],
      ruleReminder: true,
      notes: 'En este bloque aparece el asistente. Recuerde la regla de oro antes de abrirlo.',
    },
    {
      block: '3',
      time: '10:17',
      layout: 'compare',
      title: 'El mapa de calor muestra dónde; el conteo por polígono dice cuánto',
      left: { tone: 'neutral', label: 'Mapa de calor', items: ['Convierte los puntos en manchas', 'No respeta límites de sector', 'Depende del radio que se elija'] },
      right: { tone: 'neutral', label: 'Conteo por polígono', items: ['Cifra exacta por sector o colonia', 'Se compara entre periodos', 'Respeta la responsabilidad de cada mando'] },
      notes:
        'Mapa de calor también se llama mapa de densidad. El radio se mide en metros: por eso la capa debe estar en UTM 13N. Los dos mapas se complementan; ninguno sustituye al otro.',
    },
    {
      block: '3',
      time: '10:26',
      layout: 'compare',
      title: 'Una zona de concentración es un patrón, no un punto aislado',
      left: { label: 'No es', items: ['Un solo evento grave', 'Una mancha creada por un radio enorme', 'Un lugar donde solo se captura más'] },
      right: { label: 'Sí es', items: ['Muchos eventos cercanos en un periodo', 'Se mantiene con radios razonables', 'Se repite al revisar varios periodos'] },
      notes:
        'El tercer punto de la izquierda es un sesgo de registro: donde hay más patrullaje se registra más. El grupo conoce el territorio; pídales que digan si una mancha tiene sentido.',
    },
    {
      block: '3',
      time: '10:34',
      layout: 'compare',
      title: 'Al asistente se le piden scripts con nombres de capas, no con datos',
      lead: 'PyQGIS: el lenguaje para dar órdenes a QGIS desde su consola de Python.',
      left: {
        label: 'Instrucción insegura',
        block: 'Te paso mis coordenadas, hazme el mapa de calor:\n«[latitud], [longitud], [tipo de delito] …»',
      },
      right: {
        label: 'Instrucción segura',
        block:
          'En QGIS tengo una capa de puntos llamada incidentes, en EPSG:4326. Escribe un script de PyQGIS que la reproyecte a EPSG:32613 y genere un mapa de calor con radio de 300 metros.',
      },
      ruleReminder: true,
      notes: 'El script trabaja con la capa que está en el equipo. Las coordenadas nunca salen de QGIS.',
    },
    {
      block: '3',
      time: '10:44',
      layout: 'checklist',
      title: 'Antes de ejecutar un script, revíselo con cuatro preguntas',
      lead: 'El asistente escribe el script; usted responde por lo que hace.',
      bullets: [
        '¿Usa los nombres reales de mis capas?',
        '¿Reproyecta a UTM 13N antes de medir?',
        '¿Guarda en un archivo nuevo, sin borrar nada?',
        '¿Lo probé primero con una copia?',
      ],
      ruleReminder: true,
      notes:
        'El asistente inventa con frecuencia funciones que no existen en la versión instalada. Si el script falla, se comparte solo el mensaje de error, nunca los datos.',
    },
    {
      block: '3',
      time: '10:54',
      layout: 'flow',
      title: 'Exportar el mapa en PDF toma cuatro pasos',
      steps: [
        { label: 'Nuevo diseño', detail: 'Composición de impresión' },
        { label: 'Agregar mapa', detail: 'Con título y periodo' },
        { label: 'Leyenda, escala y norte', detail: 'Sin ellos no se entiende' },
        { label: 'Exportar a PDF', detail: 'Listo para imprimir' },
      ],
      capture: 'Composición de impresión con mapa, título, leyenda, escala y norte.',
      notes: 'El título debe decir qué muestra y de qué periodo: «Concentración de robo a transeúnte, marzo de 2026».',
    },
    {
      block: '3',
      time: '11:08',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Un mapa de concentración se verifica antes de enviarse',
      bullets: ['Calor para ver dónde, conteo para decir cuánto', 'Concentración es un patrón que se repite', 'Todo script se revisa antes de ejecutarse'],
      ruleReminder: true,
      notes: 'Pida que tengan su PDF exportado antes del taller final.',
    },

    // ───────────── Bloque 4 ─────────────
    {
      block: '4',
      time: '11:15',
      layout: 'flow',
      kicker: 'Bloque 4 · 11:15 a 12:00 · Proyecto integrador',
      title: 'Su producto final une los tres días en una sola historia',
      steps: [
        { label: 'Archivo depurado', detail: 'Día 1' },
        { label: 'Tablero de mando', detail: 'Día 2' },
        { label: 'Mapa de concentración', detail: 'Día 3' },
        { label: 'Recomendación', detail: 'Qué haría distinto el mando' },
      ],
      notes: 'Dé diez minutos para que cada quien arme su presentación con lo que ya tiene. No se construye nada nuevo.',
    },
    {
      block: '4',
      time: '11:17',
      layout: 'checklist',
      title: 'Cada presentación responde cuatro puntos en tres minutos',
      bullets: [
        'Qué errores encontró y cómo los resolvió',
        'Qué muestra su tablero y cómo lo verificó',
        'Dónde se concentra la incidencia en su mapa',
        'Qué decisión operativa recomienda al mando',
      ],
      notes: 'La recomendación es lo más importante: es la respuesta a la pregunta que ordena todo el curso.',
    },
    {
      block: '4',
      time: '11:27',
      layout: 'timer',
      title: 'Tres minutos por participante',
      minutes: 3,
      bullets: ['Minuto 1 · Archivo y tablero', 'Minuto 2 · Mapa', 'Minuto 3 · Recomendación'],
      notes:
        'Reinicie el cronómetro con el botón de reinicio después de cada participante. Si el grupo es grande, forme equipos para que el tiempo alcance.',
    },
    {
      block: '4',
      time: '11:45',
      layout: 'cards',
      title: 'La IA ayuda, pero tiene tres límites que no desaparecen',
      cards: [
        { icon: 'icon-[tabler--ghost]', title: 'Alucinaciones', text: 'Inventa funciones, cifras y pasos con total seguridad.' },
        { icon: 'icon-[tabler--scale]', title: 'Sesgo', text: 'Repite los sesgos de los datos y de los registros.' },
        { icon: 'icon-[tabler--signature]', title: 'Responsabilidad', text: 'La firma del producto es suya, no del asistente.' },
      ],
      notes:
        'Cierre honesto: en los tres días el asistente se equivocó varias veces y el grupo lo detectó verificando. Ese hábito es el verdadero producto del curso.',
    },
    {
      block: '4',
      time: '11:48',
      layout: 'takeaway',
      kicker: 'Lo que se lleva del curso',
      title: 'Quien firma el resultado responde por él',
      bullets: ['Toda cifra se verifica contra un control', 'Todo script se revisa antes de ejecutarse', 'Ningún dato real se comparte con el asistente'],
      ruleReminder: true,
      notes: 'Última mención de la regla de oro. Entregue la tarjeta impresa a quien no la tenga.',
    },
    {
      block: '4',
      time: '11:50',
      layout: 'bullets',
      kicker: 'Cuestionario de cierre',
      title: 'El cuestionario de cierre mide cuánto avanzó el grupo',
      bullets: [
        'Las mismas diez preguntas del inicio del Día 1',
        'Diez minutos, sin consultar material',
        'Compara el punto de partida con el de llegada',
      ],
      notes: 'Reparta las versiones A y B alternadas en el aula, igual que al inicio del Día 1.',
    },
    {
      block: '4',
      time: '11:58',
      layout: 'cards',
      kicker: 'Cierre del curso',
      title: 'Se lleva herramientas que puede usar desde mañana',
      cards: [
        { icon: 'icon-[tabler--certificate]', title: 'Constancia', text: 'Para cada participante que acredita.' },
        { icon: 'icon-[tabler--folder]', title: 'Materiales', text: 'Datos de práctica, ejercicios y presentaciones.' },
        { icon: 'icon-[tabler--route]', title: 'Siguiente paso', text: 'Revise esta semana un archivo real de su área.' },
      ],
      notes:
        'Recuerde los criterios de acreditación: 80% de asistencia, productos de cada tema y proyecto integrador. Al aplicar lo aprendido a un archivo real, la regla de oro aplica con más razón.',
    },
  ],
}
