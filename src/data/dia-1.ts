import type { Deck } from './types'

/**
 * Día 1 · Calidad de datos, seguridad y uso de la plataforma web.
 * Generado a partir del prompt del Día 1. Todas las cifras son ficticias y
 * ningún ejemplo contiene datos reales identificables.
 */
export const dia1: Deck = {
  slug: 'dia-1',
  day: 1,
  title: 'Calidad de datos, seguridad y uso de la plataforma web',
  subtitle: 'Día 1',
  schedule: '08:00 a 12:00',
  objective:
    'Que el participante reconozca los vicios de captura más frecuentes, aplique reglas de validación sobre la plataforma web institucional y obtenga un archivo depurado, bajo un protocolo claro de manejo de información sensible.',
  blocks: [
    { id: 'Apertura', label: 'Apertura', range: '08:00' },
    { id: '1A', label: 'Decisiones basadas en evidencia', range: '08:00 – 08:30' },
    { id: '1B', label: 'Regla de oro con IA', range: '08:30 – 09:00' },
    { id: '2A', label: 'Acceso y navegación', range: '09:00 – 09:30' },
    { id: '2B', label: 'Vicios de captura', range: '09:30 – 10:00' },
    { id: 'Receso', label: 'Receso técnico', range: '10:00 – 10:15' },
    { id: '3A', label: 'Reglas lógicas con ayuda de IA', range: '10:15 – 10:45' },
    { id: '3B', label: 'Procesamiento y advertencias', range: '10:45 – 11:15' },
    { id: '4A', label: 'Taller individual', range: '11:15 – 11:45' },
    { id: '4B', label: 'Cierre', range: '11:45 – 12:00' },
  ],
  slides: [
    // ───────────── Apertura ─────────────
    {
      block: 'Apertura',
      time: '08:00',
      layout: 'cover',
      kicker: 'Día 1 · 08:00 a 12:00',
      title: 'Un registro limpio es una patrulla bien enviada',
      lead: 'Calidad de datos, seguridad y uso de la plataforma web',
      notes:
        'Preséntese y presente el curso en una frase: hoy no se programa, se aprende a confiar en un dato. Recuerde que el grupo conoce el territorio mejor que nadie en el aula; ese conocimiento es la herramienta principal del día.',
    },
    {
      block: 'Apertura',
      time: '08:02',
      layout: 'bullets',
      kicker: 'Qué se logra hoy',
      title: 'Al mediodía usted entrega un archivo listo para el tablero',
      bullets: [
        'Reconoce los seis vicios de captura más frecuentes',
        'Aplica reglas de validación en la plataforma web',
        'Usa un asistente de IA sin exponer información sensible',
        'Entrega su archivo depurado y su diagnóstico de calidad',
      ],
      notes:
        'Insista en que el producto es concreto y se entrega hoy. Ese archivo se usa mañana en el tablero: si sale mal hoy, el tablero de mañana sale mal.',
    },
    {
      block: 'Apertura',
      time: '08:04',
      layout: 'cards',
      kicker: 'Cómo vamos a trabajar',
      title: 'Cada quien trabaja en su equipo, con su propio archivo',
      cards: [
        { icon: 'icon-[tabler--device-desktop]', title: 'Su equipo', text: 'Sesión abierta en la plataforma desde el inicio.' },
        { icon: 'icon-[tabler--file-spreadsheet]', title: 'Su archivo', text: 'Datos sintéticos, con errores sembrados a propósito.' },
        { icon: 'icon-[tabler--map-pin]', title: 'Su experiencia', text: 'Usted conoce el territorio: úselo para detectar errores.' },
        { icon: 'icon-[tabler--message-question]', title: 'Sus dudas', text: 'Se resuelven en voz alta: le sirven a todo el grupo.' },
      ],
      notes:
        'Cada archivo es distinto, así que copiar al compañero no funciona. Aclare que los datos son sintéticos: se parecen a los reales pero no corresponden a ninguna persona ni evento.',
    },

    // ───────────── Bloque 1A ─────────────
    {
      block: '1A',
      time: '08:06',
      layout: 'goal',
      kicker: 'Bloque 1 · 08:00 a 08:30',
      title: 'En esta media hora conectamos el dato con la decisión en calle',
      bullets: [
        'Por qué un registro sucio cuesta horas de patrullaje',
        'Las cuatro dimensiones de la calidad del dato',
        'Las seis variables que no pueden fallar',
      ],
      notes: 'Diapositiva de arranque del bloque. No se detenga; el contenido viene en las siguientes.',
    },
    {
      block: '1A',
      time: '08:08',
      layout: 'bullets',
      title: 'Un registro sucio manda la patrulla al lugar equivocado',
      bullets: [
        'Colonia mal escrita: el incidente no cuenta para su sector',
        'Hora vacía: el turno más cargado queda invisible',
        'Coordenada errónea: el punto cae lejos del hecho',
        'Resultado: patrullaje asignado donde el problema no está',
      ],
      notes:
        'Pregunte al grupo: ¿alguna vez un reporte dijo una cosa y en calle se vio otra? Deje que cuenten uno o dos casos sin datos identificables. Cierre con la pregunta que ordena el día: ¿qué puede hacer distinto un mando con esta información?',
    },
    {
      block: '1A',
      time: '08:13',
      layout: 'cards',
      title: 'La calidad del dato se mide en cuatro dimensiones',
      cards: [
        { icon: 'icon-[tabler--target-arrow]', title: 'Exactitud', text: 'Refleja lo que ocurrió. El delito coincide con el parte.' },
        { icon: 'icon-[tabler--list-check]', title: 'Completitud', text: 'Sin campos clave vacíos. Todo registro trae hora.' },
        { icon: 'icon-[tabler--equal]', title: 'Consistencia', text: '«Riberas del Bravo» siempre, nunca «Rib. Bravo».' },
        { icon: 'icon-[tabler--clock-check]', title: 'Oportunidad', text: 'Llega a tiempo: capturado antes del cambio de turno.' },
      ],
      notes:
        'Para cada dimensión, pida al grupo un ejemplo propio antes de leer el de la diapositiva. La oportunidad suele olvidarse: un dato correcto que llega tarde tampoco sirve para operar.',
    },
    {
      block: '1A',
      time: '08:21',
      layout: 'cards',
      title: 'Seis variables deciden si un registro sirve para operar',
      cards: [
        { icon: 'icon-[tabler--calendar]', title: 'Fecha', text: 'Ubica el hecho en el calendario.' },
        { icon: 'icon-[tabler--clock-hour-4]', title: 'Hora del turno', text: 'Define en qué turno se refuerza.' },
        { icon: 'icon-[tabler--alert-triangle]', title: 'Tipo de delito', text: 'Del catálogo unificado, nunca a mano libre.' },
        { icon: 'icon-[tabler--home]', title: 'Colonia', text: 'Con el nombre oficial del catálogo.' },
        { icon: 'icon-[tabler--map-2]', title: 'Sector', text: 'Determina quién responde.' },
        { icon: 'icon-[tabler--map-pin]', title: 'Coordenadas', text: 'Latitud y longitud dentro del municipio.' },
      ],
      notes:
        'Si falla cualquiera de estas seis, el registro no puede usarse para decidir despliegue. Estas son las columnas que validaremos el resto del día.',
    },
    {
      block: '1A',
      time: '08:26',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Un dato sin calidad no sostiene ninguna decisión de mando',
      bullets: [
        'Exactitud, completitud, consistencia y oportunidad',
        'Fecha, hora, delito, colonia, sector y coordenadas',
        'Cada error de captura tiene un costo en calle',
      ],
      notes: 'Cierre breve. Pregunte cuál de las cuatro dimensiones creen que falla más en su área.',
    },

    // ───────────── Bloque 1B ─────────────
    {
      block: '1B',
      time: '08:30',
      layout: 'goal',
      kicker: 'Bloque 1 · 08:30 a 09:00',
      title: 'En esta media hora fijamos la regla para usar IA con seguridad',
      bullets: [
        'Qué información es sensible en seguridad pública',
        'La regla de oro, en una frase',
        'Cómo pedir ayuda al asistente sin exponer datos',
      ],
      notes: 'La regla se enuncia en este bloque y se recordará cada vez que aparezca un asistente en pantalla.',
    },
    {
      block: '1B',
      time: '08:32',
      layout: 'bullets',
      title: 'Casi todo en un registro policial es información protegida',
      bullets: [
        'Nombres de víctimas, testigos y personas detenidas',
        'Domicilios, teléfonos y folios de parte informativo',
        'Coordenadas exactas de un evento real',
        'La ley de datos personales obliga a resguardarlos',
        'Una filtración tiene consecuencias legales para quien la comete',
      ],
      notes:
        'Cite el marco que indique el área jurídica de la Secretaría (por ejemplo, la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y la Ley General del Sistema Nacional de Seguridad Pública). Confirme artículos con jurídico antes de citarlos frente al grupo; no improvise afirmaciones normativas.',
    },
    {
      block: '1B',
      time: '08:38',
      layout: 'rule',
      kicker: 'Regla de oro',
      title: 'Comparta la estructura, nunca los datos.',
      left: {
        label: 'Sí',
        items: ['Nombres de las columnas', 'Tipos de dato y formatos', 'El mensaje de error que apareció', 'Lo que necesita validar'],
      },
      right: {
        label: 'No',
        items: ['Nombres, domicilios y folios', 'Coordenadas de eventos reales', 'Cualquier fila del archivo'],
      },
      lead: 'Ante la duda, no lo comparta y pregunte.',
      notes:
        'Lea la regla en voz alta y pida que el grupo la repita. Es la misma que está en la tarjeta impresa y en el fondo de pantalla. El asistente genera la regla o el código; los datos se quedan en el equipo.',
    },
    {
      block: '1B',
      time: '08:45',
      layout: 'compare',
      title: 'La misma pregunta puede exponer datos o protegerlos',
      left: {
        label: 'Instrucción insegura',
        block: 'Revisa estas filas y dime cuáles están mal:\n«[nombre completo], [domicilio], [folio], 31.72, -106.45 …»',
      },
      right: {
        label: 'Instrucción segura',
        block:
          'Mi archivo tiene las columnas fecha_evento (DD/MM/AAAA), colonia (texto), latitud y longitud (decimales). ¿Qué reglas me sugiere para detectar fechas imposibles?',
      },
      ruleReminder: true,
      notes:
        'Las dos piden lo mismo. La segunda obtiene una respuesta igual de útil sin que ningún dato salga del equipo. Haga notar que la instrucción segura incluso es más clara para el asistente.',
    },
    {
      block: '1B',
      time: '08:52',
      layout: 'decision',
      kicker: 'Qué se lleva del bloque',
      title: 'Antes de pegar cualquier cosa, hágase tres preguntas',
      steps: [
        { label: '¿Aparece el nombre de una persona?' },
        { label: '¿Hay un domicilio, folio o teléfono?' },
        { label: '¿Hay coordenadas de un evento real?' },
      ],
      yes: 'No lo pegue. Describa solo la estructura.',
      no: 'Puede compartirlo con el asistente.',
      ruleReminder: true,
      notes:
        'Este es el hábito que queremos instalar: tres preguntas, cinco segundos, antes de cada pegado. Si una sola respuesta es «sí», no se pega.',
    },

    // ───────────── Bloque 2A ─────────────
    {
      block: '2A',
      time: '09:00',
      layout: 'goal',
      kicker: 'Bloque 2 · 09:00 a 09:30',
      title: 'En esta media hora usted carga su archivo en la plataforma',
      bullets: [
        'Ingresar con su cuenta y ubicar los menús',
        'Cargar el archivo de práctica',
        'Conocer los cuatro catálogos institucionales',
      ],
      notes: 'Verifique que todos tengan la sesión abierta antes de avanzar. Resuelva accesos en este momento.',
    },
    {
      block: '2A',
      time: '09:03',
      layout: 'flow',
      title: 'Cargar un archivo toma cuatro pasos y un minuto',
      steps: [
        { label: 'Ingresar', detail: 'Con la cuenta asignada' },
        { label: 'Cargar archivo', detail: 'CSV o Excel' },
        { label: 'Revisar vista previa', detail: 'Columnas y primeras filas' },
        { label: 'Confirmar', detail: 'Esperar el resumen' },
      ],
      capture: 'Pantalla de carga de la plataforma con el archivo de práctica seleccionado.',
      notes:
        'Haga el recorrido en vivo en el proyector mientras el grupo lo repite en su equipo. Explique que CSV es un archivo de texto con columnas separadas por comas, que se abre en Excel.',
    },
    {
      block: '2A',
      time: '09:12',
      layout: 'cards',
      title: 'Los catálogos son la referencia contra la que se valida todo',
      cards: [
        { icon: 'icon-[tabler--grid-dots]', title: 'Cuadrantes', text: 'La división operativa mínima del territorio.' },
        { icon: 'icon-[tabler--map-2]', title: 'Sectores', text: 'Agrupan cuadrantes bajo un mando responsable.' },
        { icon: 'icon-[tabler--building-community]', title: 'Colonias oficiales', text: 'La única forma válida de escribir una colonia.' },
        { icon: 'icon-[tabler--list-details]', title: 'Catálogo unificado de delitos', text: 'Un solo nombre para cada tipo de delito.' },
      ],
      capture: 'Vista de los catálogos institucionales dentro de la plataforma.',
      notes:
        'Pida a alguien con experiencia en calle que explique al grupo la diferencia entre cuadrante y sector en su operación diaria. Confirme los nombres contra el catálogo vigente de la Secretaría.',
    },
    {
      block: '2A',
      time: '09:15',
      layout: 'er',
      kicker: 'Modelo entidad-relación · 1 de 3',
      title: 'Un modelo entidad-relación muestra cómo se conectan los datos',
      lead: 'Cada caja es una tabla y cada línea una regla: un delito se repite en muchos incidentes.',
      er: {
        entities: [
          { id: 'delito', name: 'DELITO', x: 70, y: 40, cols: [{ name: 'delito_id', key: 'PK' }, { name: 'nombre' }, { name: 'categoria' }] },
          { id: 'colonia', name: 'COLONIA', x: 70, y: 220, cols: [{ name: 'colonia_id', key: 'PK' }, { name: 'nombre_oficial' }, { name: 'sector' }] },
          {
            id: 'incidente',
            name: 'INCIDENTE',
            x: 670,
            y: 40,
            cols: [
              { name: 'folio', key: 'PK' },
              { name: 'fecha' },
              { name: 'hora' },
              { name: 'delito_id', key: 'FK' },
              { name: 'colonia_id', key: 'FK' },
              { name: 'latitud' },
              { name: 'longitud' },
            ],
          },
        ],
        relations: [
          { from: 'delito', to: 'incidente', fromCard: '1', toCard: 'N', label: 'clasifica a', fromCol: 0, toCol: 3 },
          { from: 'colonia', to: 'incidente', fromCard: '1', toCard: 'N', label: 'ubica a', fromCol: 0, toCol: 4 },
        ],
      },
      notes:
        'Explique con calma la lectura: PK es la llave que identifica cada fila; FK es la llave que apunta a otra tabla. El 1 y la N dicen cuántos: una colonia tiene muchos incidentes, pero cada incidente ocurre en una sola colonia. Los nombres de tablas y columnas son ilustrativos; ajústelos al esquema real de la plataforma.',
    },
    {
      block: '2A',
      time: '09:19',
      layout: 'er',
      kicker: 'Modelo entidad-relación · 2 de 3',
      title: 'Una colonia escrita a mano rompe la relación con el catálogo',
      lead: 'Si el valor no existe en el catálogo, el incidente queda huérfano y no cuenta en su colonia.',
      er: {
        entities: [
          { id: 'colonia', name: 'COLONIA (catálogo)', x: 70, y: 40, cols: [{ name: 'colonia_id = 118', key: 'PK' }, { name: 'Hacienda de las Torres' }] },
          {
            id: 'incidente',
            name: 'INCIDENTE',
            x: 670,
            y: 40,
            cols: [{ name: 'folio', key: 'PK' }, { name: 'fecha' }, { name: '«Hda. Las Torres»', bad: true }, { name: 'colonia_id = vacío', key: 'FK', bad: true }],
          },
        ],
        relations: [{ from: 'colonia', to: 'incidente', fromCard: '1', toCard: 'N', label: 'no coincide', broken: true, fromCol: 0, toCol: 3 }],
      },
      bullets: ['Sin coincidencia, el incidente no suma a su colonia', 'Se corrige eligiendo del catálogo, no escribiendo a mano'],
      notes:
        'Conecte con el vicio de captura que verán en el Bloque 2B: la colonia con varias grafías. La llave foránea queda vacía porque el texto capturado no existe en el catálogo. Ejemplo ficticio; no use nombres de colonias de casos reales.',
    },
    {
      block: '2A',
      time: '09:22',
      layout: 'er',
      kicker: 'Modelo entidad-relación · 3 de 3',
      title: 'Un incidente con dos unidades aparece dos veces al unir las tablas',
      lead: 'La relación de muchos a muchos se resuelve con una tabla intermedia, y se verifica con un conteo de control.',
      er: {
        entities: [
          { id: 'incidente', name: 'INCIDENTE', x: 0, y: 40, cols: [{ name: 'folio', key: 'PK' }, { name: 'fecha' }, { name: 'delito_id', key: 'FK' }] },
          { id: 'asignacion', name: 'ASIGNACION', x: 380, y: 40, cols: [{ name: 'folio', key: 'FK' }, { name: 'unidad_id', key: 'FK' }, { name: 'hora_llegada' }] },
          { id: 'unidad', name: 'UNIDAD', x: 760, y: 40, cols: [{ name: 'unidad_id', key: 'PK' }, { name: 'tipo' }, { name: 'sector' }] },
        ],
        relations: [
          { from: 'incidente', to: 'asignacion', fromCard: '1', toCard: 'N', label: 'se atiende', fromCol: 0, toCol: 0 },
          { from: 'unidad', to: 'asignacion', fromCard: '1', toCard: 'N', label: 'participa', fromCol: 0, toCol: 1 },
        ],
      },
      bullets: ['Un folio con 2 unidades genera 2 filas al unir', 'Cuente folios distintos, no filas', 'Compare contra un conteo de control'],
      notes:
        'Adelante el caso del Día 2: una consulta generada con IA unía incidentes con unidades y el tablero mostró 412 en lugar de 268. La causa es esta relación. Pida al grupo que prediga cuántas filas salen si un incidente tuvo dos unidades. Es un modelo ilustrativo.',
    },
    {
      block: '2A',
      time: '09:26',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'La plataforma compara su archivo contra los catálogos oficiales',
      bullets: ['Su archivo ya está cargado y visible', 'Los catálogos son la verdad de referencia', 'Lo que no coincide, se revisa'],
      notes: 'Antes de pasar al siguiente bloque, confirme que todos ven la vista previa de su archivo.',
    },

    // ───────────── Bloque 2B ─────────────
    {
      block: '2B',
      time: '09:30',
      layout: 'goal',
      kicker: 'Bloque 2 · 09:30 a 10:00',
      title: 'En esta media hora aprendemos a ver seis errores a simple vista',
      bullets: [
        'Colonias mal escritas',
        'Fechas imposibles y formatos invertidos',
        'Coordenadas invertidas o fuera del municipio',
        'Duplicados por doble captura',
      ],
      notes: 'Una diapositiva por vicio. En cada una, pida que lo busquen en su propio archivo antes de pasar a la siguiente.',
    },
    {
      block: '2B',
      time: '09:32',
      layout: 'compare',
      title: 'Una colonia mal escrita desaparece de su sector',
      lead: 'Tres escrituras distintas cuentan como tres colonias distintas.',
      left: { label: 'Como se capturó', items: ['Riveras del Bravo', 'Rib. del Bravo', 'RIBERAS DEL BRAVO.'] },
      right: { label: 'Como debe quedar', items: ['Riberas del Bravo', 'Nombre tomado del catálogo oficial'] },
      notes:
        'Pregunte qué otras colonias suelen escribirse de varias formas. El grupo las conoce. Ejemplo ilustrativo: verifique la escritura oficial en el catálogo.',
    },
    {
      block: '2B',
      time: '09:36',
      layout: 'compare',
      title: 'Una fecha imposible no se corrige adivinando',
      left: { label: 'Capturado', items: ['31/02/2025: febrero no tiene 31 días', '15/08/2031: fecha en el futuro', '02/11/1925: un siglo antes'] },
      right: { label: 'Qué se hace', items: ['Se marca para revisión', 'Se consulta el parte original', 'Nunca se inventa la fecha'] },
      notes: 'Corregir a ojo crea un dato falso que parece verdadero, que es peor que un dato marcado como dudoso.',
    },
    {
      block: '2B',
      time: '09:40',
      layout: 'compare',
      title: '03/07/2026 puede ser 3 de julio o 7 de marzo',
      lead: 'Si el día es menor a 13, el error no se nota.',
      left: { label: 'Formatos mezclados', items: ['03/07/2026 (día/mes)', '07/03/2026 (mes/día)', 'Mismo hecho, dos fechas'] },
      right: { label: 'Un solo formato', items: ['2026-07-03', 'Año, mes y día, siempre', 'En todo el archivo'] },
      notes:
        'Este error es silencioso: no marca error, solo mueve eventos de mes. Un tablero por mes saldría mal sin que nadie lo note.',
    },
    {
      block: '2B',
      time: '09:44',
      layout: 'compare',
      title: 'Las coordenadas invertidas sacan el punto del mapa',
      lead: 'En Juárez la latitud ronda 31 y la longitud ronda -106.',
      left: { label: 'Capturado', rows: [['Campo', 'Valor'], ['Latitud', '-106.4245'], ['Longitud', '31.6904']] },
      right: { label: 'Correcto', rows: [['Campo', 'Valor'], ['Latitud', '31.6904'], ['Longitud', '-106.4245']] },
      notes:
        'Las cifras son ilustrativas, no corresponden a ningún evento. Regla práctica para el grupo: si la latitud no empieza con 31, algo está mal.',
    },
    {
      block: '2B',
      time: '09:49',
      layout: 'compare',
      title: 'Un punto fuera del municipio es un error, no un hecho',
      left: {
        label: 'Capturado',
        items: ['Longitud sin signo negativo: el punto cae en China', 'Latitud 32.3: el punto cae en Nuevo México'],
      },
      right: {
        label: 'Regla de práctica',
        items: ['Latitud entre 31.0 y 31.8', 'Longitud entre -107.0 y -106.1', 'Lo que queda fuera, se marca'],
      },
      notes:
        'El rango es de práctica para el curso. El rango oficial lo define la capa del límite municipal, que se trabaja en el Día 3.',
    },
    {
      block: '2B',
      time: '09:54',
      layout: 'compare',
      title: 'Una llamada capturada dos veces duplica la incidencia',
      left: {
        label: 'Dos registros del 14/03/2026',
        rows: [
          ['', 'Hora', 'Tipo', 'Colonia'],
          ['A', '22:41', 'Robo a transeúnte', 'Bellavista'],
          ['B', '22:43', 'Robo a transeúnte', 'Bellavista'],
        ],
      },
      right: { label: 'Qué se hace', items: ['Misma fecha, tipo y colonia', 'Minutos de diferencia entre capturas', 'Se conserva uno; el otro se marca'] },
      notes:
        'Registros ficticios. Advierta que no todo parecido es duplicado: dos eventos reales pueden coincidir. Ante la duda se marca, no se borra.',
    },

    // ───────────── Receso ─────────────
    {
      block: 'Receso',
      time: '10:00',
      layout: 'break',
      kicker: 'Receso técnico · 15 minutos',
      title: 'Regresamos a las 10:15',
      lead: 'Deje su sesión abierta en la plataforma.',
      bullets: ['Antes del receso, usted ya distingue los seis vicios de captura.'],
      notes: 'Aproveche el receso para resolver problemas de acceso a la plataforma.',
    },

    // ───────────── Bloque 3A ─────────────
    {
      block: '3A',
      time: '10:15',
      layout: 'goal',
      kicker: 'Bloque 3 · 10:15 a 10:45',
      title: 'En esta media hora el asistente le ayuda a escribir reglas',
      bullets: [
        'Describir en lenguaje natural lo que necesita validar',
        'Dos ejemplos completos: fechas y geografía',
        'Decidir si la regla devuelta tiene sentido',
      ],
      ruleReminder: true,
      notes: 'Recuerde la regla de oro antes de abrir el asistente: estructura sí, datos nunca.',
    },
    {
      block: '3A',
      time: '10:17',
      layout: 'flow',
      title: 'Una buena instrucción dice qué campo, qué condición y qué hacer',
      steps: [
        { label: 'Campo', detail: 'fecha_evento' },
        { label: 'Condición', detail: 'No posterior a hoy ni anterior a 2020' },
        { label: 'Acción', detail: 'Marcar el registro para revisión' },
        { label: 'Explicación', detail: 'Pida la regla también en palabras' },
      ],
      ruleReminder: true,
      notes:
        'Pedir la explicación en palabras es lo que permite verificar sin saber programar. Si el asistente no puede explicarla claramente, no la use.',
    },
    {
      block: '3A',
      time: '10:24',
      layout: 'compare',
      title: 'Ejemplo 1: ninguna fecha puede ser futura ni anterior a 2020',
      left: {
        label: 'Lo que usted escribe',
        block:
          'Mi columna fecha_evento tiene formato DD/MM/AAAA. Necesito una regla que marque como inválida cualquier fecha posterior a hoy o anterior al 1 de enero de 2020.',
      },
      right: {
        label: 'Lo que usted verifica',
        items: ['La regla usa su columna exacta', 'Incluye los dos límites: 2020 y hoy', 'Detecta una fecha mala que usted conoce'],
      },
      ruleReminder: true,
      notes:
        'Haga el ejercicio en vivo. Muestre que la instrucción no contiene ningún registro. Si la regla devuelta usa otro nombre de columna, pídale que la corrija.',
    },
    {
      block: '3A',
      time: '10:32',
      layout: 'compare',
      title: 'Ejemplo 2: todo punto debe caer dentro del municipio',
      left: {
        label: 'Lo que usted escribe',
        block:
          'Tengo columnas latitud y longitud en grados decimales. Necesito marcar registros con latitud fuera de 31.0 a 31.8 o longitud fuera de -107.0 a -106.1.',
      },
      right: {
        label: 'Lo que usted verifica',
        items: ['Respeta el signo negativo de la longitud', 'Detecta una coordenada invertida conocida', 'No marca un punto que sabe correcto'],
      },
      ruleReminder: true,
      notes:
        'El error más común del asistente aquí es confundir mayor y menor con números negativos. Por eso se prueba con un caso conocido.',
    },
    {
      block: '3A',
      time: '10:40',
      layout: 'checklist',
      kicker: 'Qué se lleva del bloque',
      title: 'Una regla del asistente se acepta solo si pasa tres pruebas',
      lead: 'El asistente propone; usted decide.',
      bullets: [
        'La entiende: puede explicarla con sus palabras',
        'Detecta un caso malo que usted ya conocía',
        'No marca un caso bueno que usted ya conocía',
      ],
      ruleReminder: true,
      notes:
        'El asistente se equivoca con frecuencia y con mucha seguridad. La responsabilidad de la regla es de quien la aplica, no del asistente.',
    },

    // ───────────── Bloque 3B ─────────────
    {
      block: '3B',
      time: '10:45',
      layout: 'goal',
      kicker: 'Bloque 3 · 10:45 a 11:15',
      title: 'En esta media hora la plataforma le dice qué está mal',
      bullets: ['Ejecutar las reglas sobre su archivo', 'Leer las tarjetas de alerta', 'Decidir qué hacer con cada hallazgo'],
      notes: 'Todos ejecutan al mismo tiempo. Espere a que el grupo tenga sus tarjetas en pantalla antes de avanzar.',
    },
    {
      block: '3B',
      time: '10:48',
      layout: 'alerts',
      title: 'Las tarjetas de alerta le dicen cuánto y dónde revisar',
      lead: 'Archivo de práctica de 1,200 registros. Cifras ficticias.',
      alerts: [
        { tone: 'error', icon: 'icon-[tabler--calendar-x]', value: '38', label: 'Fechas inválidas' },
        { tone: 'error', icon: 'icon-[tabler--map-pin-off]', value: '21', label: 'Coordenadas fuera del municipio' },
        { tone: 'warning', icon: 'icon-[tabler--home-question]', value: '54', label: 'Colonias sin coincidencia' },
        { tone: 'warning', icon: 'icon-[tabler--copy]', value: '17', label: 'Posibles duplicados' },
      ],
      capture: 'Tarjetas de alerta y tabla de inconsistencias tras ejecutar las reglas.',
      notes:
        'Cada tarjeta lleva a su tabla de inconsistencias. Muestre cómo pasar de la tarjeta a las filas afectadas. Las cifras de cada participante serán distintas.',
    },
    {
      block: '3B',
      time: '10:58',
      layout: 'table',
      title: 'Cada tipo de hallazgo tiene una acción distinta',
      table: {
        head: ['Hallazgo', 'Acción', 'Quién decide'],
        rows: [
          ['Colonia mal escrita', 'Sustituir por el nombre oficial', 'Usted, con el catálogo'],
          ['Fecha imposible', 'Marcar y consultar el parte', 'Área de captura'],
          ['Formato invertido', 'Convertir a año-mes-día', 'Usted, con la regla'],
          ['Coordenada invertida', 'Intercambiar latitud y longitud', 'Usted, tras verificar'],
          ['Fuera del municipio', 'Marcar; no se mueve a ojo', 'Área de captura'],
          ['Duplicado', 'Conservar uno y documentar el otro', 'Usted, tras comparar'],
        ],
      },
      notes:
        'La regla general: lo que se puede verificar con el catálogo, se corrige; lo que requiere el parte original, se marca y se devuelve al área de captura.',
    },
    {
      block: '3B',
      time: '11:10',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Corregir sin documentar es crear un error nuevo',
      bullets: [
        'Toda corrección queda registrada en el diagnóstico',
        'Lo que no puede verificar, se marca, no se adivina',
        'La tarjeta de alerta es el inicio, no el final',
      ],
      notes: 'Prepare al grupo para el taller: ahora lo harán solos con su archivo.',
    },

    // ───────────── Bloque 4A ─────────────
    {
      block: '4A',
      time: '11:15',
      layout: 'bullets',
      kicker: 'Bloque 4 · 11:15 a 11:45 · Taller',
      title: 'Ahora usted depura su propio archivo, de principio a fin',
      bullets: [
        'Cargue el archivo que le entregó el instructor',
        'Ejecute las reglas de fechas y coordenadas',
        'Revise las colonias contra el catálogo oficial',
        'Resuelva o marque cada hallazgo',
        'Exporte el archivo depurado',
      ],
      notes:
        'Cada archivo tiene errores distintos. Recorra el aula; ayude con preguntas, no con respuestas. Si falla la conectividad, use el respaldo local de los archivos.',
    },
    {
      block: '4A',
      time: '11:17',
      layout: 'checklist',
      title: 'Su archivo se revisa con cinco criterios',
      bullets: [
        'Ninguna fecha imposible sin marcar',
        'Coordenadas dentro del municipio, o marcadas',
        'Colonias con el nombre del catálogo oficial',
        'Duplicados resueltos y documentados',
        'Ningún dato del archivo compartido con el asistente',
      ],
      notes: 'Deje esta diapositiva visible un momento para que la fotografíen o la anoten.',
    },
    {
      block: '4A',
      time: '11:18',
      layout: 'timer',
      title: 'Tiene 25 minutos para entregar su archivo depurado',
      minutes: 25,
      bullets: ['11:25 · Reglas ejecutadas', '11:35 · Hallazgos resueltos', '11:43 · Archivo exportado'],
      notes: 'Inicie el cronómetro con el botón o la tecla T. Avise a los diez y a los cinco minutos.',
    },

    // ───────────── Bloque 4B ─────────────
    {
      block: '4B',
      time: '11:45',
      layout: 'cards',
      kicker: 'Entregable del día',
      title: 'Hoy entrega un diagnóstico y un archivo depurado',
      cards: [
        { icon: 'icon-[tabler--report-search]', title: 'Diagnóstico de calidad', text: 'Coordenadas erróneas, duplicados y fechas inválidas detectados.' },
        { icon: 'icon-[tabler--file-check]', title: 'Archivo normalizado', text: 'Formatos uniformes, listo para tableros y mapas.' },
      ],
      notes: 'Recoja los dos productos. Confirme que cada participante guardó su archivo en el lugar indicado para el Día 2.',
    },
    {
      block: '4B',
      time: '11:50',
      layout: 'checklist',
      kicker: 'Verificación del protocolo',
      title: 'Hoy ningún dato sensible salió de su equipo',
      bullets: [
        'No pegué nombres, domicilios ni folios en el asistente',
        'No compartí coordenadas de eventos reales',
        'Solo describí columnas, formatos y errores',
        'Mi archivo de práctica se queda en mi equipo',
      ],
      ruleReminder: true,
      notes: 'Pida que levanten la mano quienes cumplen los cuatro puntos. Si alguien duda en uno, revíselo en privado, sin exponerlo.',
    },
    {
      block: '4B',
      time: '11:55',
      layout: 'flow',
      kicker: 'Puente al Día 2',
      title: 'Su archivo de hoy es el tablero de mañana',
      lead: 'No hay datos nuevos: la calidad de hoy decide la utilidad de mañana.',
      steps: [
        { label: 'Día 1', detail: 'Archivo depurado' },
        { label: 'Día 2', detail: 'Tablero de mando' },
        { label: 'Día 3', detail: 'Mapa de concentración' },
      ],
      notes:
        'Cierre con el hilo del curso. Mañana se construye un tablero de mando (dashboard): una pantalla que el mando consulta todos los días para decidir. Lo alimenta el archivo de hoy.',
    },
  ],
}
