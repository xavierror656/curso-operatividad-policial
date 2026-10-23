import type { Deck } from './types'

/**
 * Día 3 · Business Intelligence, tableros de mando y proyecto integrador.
 * Secuencia de tableros adaptada para el Día 3. Todas las cifras son ficticias y
 * cuadran entre sí: el archivo depurado de práctica tiene 928 registros.
 */

const horas = [30, 24, 19, 15, 12, 10, 13, 22, 31, 35, 38, 40, 42, 41, 40, 44, 48, 55, 60, 66, 70, 76, 58, 39]

export const dia3: Deck = {
  slug: 'dia-3',
  day: 3,
  title: 'Business Intelligence, tableros de mando y proyecto integrador',
  subtitle: 'Día 3',
  schedule: '08:00 a 12:00',
  objective:
    'Que el participante construya un tablero de mando a partir del archivo que depuró el Día 1, verifique sus cifras y lo presente junto al mapa del Día 2 como proyecto integrador.',
  blocks: [
    { id: 'Apertura', label: 'Apertura', range: '08:00' },
    { id: '1', label: 'De la consulta al tablero', range: '08:00 – 09:00' },
    { id: '2', label: 'Primeras vistas', range: '09:00 – 10:00' },
    { id: 'Receso', label: 'Receso técnico', range: '10:00 – 10:15' },
    { id: '3', label: 'Diseño del tablero y SQL asistido', range: '10:15 – 10:45' },
    { id: '4', label: 'Tablero, proyecto integrador y cierre', range: '10:45 – 12:00' },
  ],
  slides: [
    // ───────────── Apertura ─────────────
    {
      block: 'Apertura',
      time: '08:00',
      layout: 'cover',
      kicker: 'Día 3 · 08:00 a 12:00',
      title: 'Un tablero es la misma pregunta, contestada todos los días',
      lead: 'Business Intelligence y tableros de mando',
      notes:
        'Abra recordando el hilo del curso: no hay datos nuevos. Hoy se trabaja con el archivo del Día 1 y el mapa entregado ayer. Si alguien no lo tiene, use el respaldo local que preparó el instructor.',
    },
    {
      block: 'Apertura',
      time: '08:02',
      layout: 'checklist',
      kicker: 'Repaso de los Días 1 y 2',
      title: 'Ya tiene un archivo depurado y un mapa verificado',
      bullets: [
        'Fechas válidas y en un solo formato',
        'Coordenadas dentro del municipio, o marcadas',
        'Colonias con el nombre del catálogo oficial',
        'Mapa de concentración y PDF guardados el Día 2',
      ],
      material: ['datos'],
      notes:
        'Una sola diapositiva de repaso. Pregunte qué error fue el más frecuente en su archivo; sirve para anticipar qué cifras del tablero pueden salir raras.',
    },
    {
      block: 'Apertura',
      time: '08:04',
      layout: 'bullets',
      kicker: 'Qué se logra hoy',
      title: 'Al mediodía usted presenta su tablero y el proyecto integrador',
      bullets: [
        'Construye vistas sin escribir código',
        'Arma un tablero con tres vistas y un filtro',
        'Pide consultas al asistente sin exponer datos',
        'Verifica las cifras y presenta el tablero junto al mapa',
      ],
      notes: 'El producto del día es el tablero verificado y su presentación junto al mapa del Día 2. Reserve tiempo para el cierre.',
    },

    // ───────────── Bloque 1 ─────────────
    {
      block: '1',
      time: '08:06',
      layout: 'goal',
      kicker: 'Bloque 1 · 08:00 a 09:00',
      title: 'En esta hora pasamos de la consulta suelta al tablero',
      bullets: [
        'Qué es Business Intelligence en la operación diaria',
        'Por qué un tablero no es un reporte',
        'Conectar su archivo depurado a Metabase',
      ],
      notes: 'Diapositiva de arranque del bloque.',
    },
    {
      block: '1',
      time: '08:08',
      layout: 'bullets',
      title: 'Business Intelligence es responder rápido lo que el mando pregunta',
      lead: 'Business Intelligence (BI): convertir registros en respuestas para decidir.',
      bullets: [
        '¿Dónde se concentra la incidencia esta semana?',
        '¿A qué hora conviene reforzar el patrullaje?',
        '¿Subió o bajó respecto al mes pasado?',
        'Sin BI, cada respuesta es un reporte nuevo',
      ],
      notes:
        'Pida al grupo que diga qué preguntas les hace su mando con más frecuencia. Anótelas en el pizarrón: son los indicadores del tablero que armarán.',
    },
    {
      block: '1',
      time: '08:14',
      layout: 'compare',
      title: 'Un reporte se lee una vez; un tablero se consulta todos los días',
      left: { tone: 'neutral', label: 'Reporte', items: ['Se lee una vez', 'Foto de un periodo cerrado', 'Se arma a mano cada vez'] },
      right: {
        label: 'Tablero (dashboard)',
        items: ['Se consulta todos los días', 'Se actualiza con datos nuevos', 'Las mismas preguntas, siempre a la vista'],
      },
      notes:
        'Dashboard es el nombre en inglés del tablero de mando; en el curso usamos ambos. El reporte no desaparece: el tablero evita rehacerlo cada semana.',
    },
    {
      block: '1',
      time: '08:20',
      layout: 'cards',
      title: 'Un tablero útil responde cuatro preguntas del mando',
      cards: [
        { icon: 'icon-[tabler--map-pin]', title: '¿Dónde?', text: 'Sector y colonia con más incidencia.' },
        { icon: 'icon-[tabler--clock-hour-4]', title: '¿Cuándo?', text: 'Hora del día y día de la semana.' },
        { icon: 'icon-[tabler--alert-triangle]', title: '¿Qué?', text: 'Tipos de delito que dominan el periodo.' },
        { icon: 'icon-[tabler--trending-up]', title: '¿Cómo vamos?', text: 'Comparación con el periodo anterior.' },
      ],
      notes: 'Relacione cada pregunta con una decisión: dónde asignar unidades, a qué hora, qué prevenir y si la estrategia funciona.',
    },
    {
      block: '1',
      time: '08:28',
      layout: 'bullets',
      title: 'Metabase se abre en el navegador, como la plataforma del Día 1',
      bullets: [
        'Ingrese con la cuenta asignada para el curso',
        'Metabase es software libre: no requiere licencias',
        'Lo que construya queda guardado en el servidor',
      ],
      capture: 'Pantalla de inicio de Metabase con la cuenta del participante.',
      notes: 'Verifique que todos hayan ingresado antes de avanzar. Resuelva accesos ahora, no durante el taller.',
    },
    {
      block: '1',
      time: '08:34',
      layout: 'cards',
      title: 'La interfaz de Metabase se reduce a tres lugares',
      cards: [
        { icon: 'icon-[tabler--circle-plus]', title: 'Nueva pregunta', text: 'Donde se construyen las vistas.' },
        { icon: 'icon-[tabler--folder]', title: 'Colecciones', text: 'Donde se guardan, como carpetas.' },
        { icon: 'icon-[tabler--layout-dashboard]', title: 'Tableros', text: 'Donde se acomodan las vistas para el mando.' },
      ],
      capture: 'Recorrido de la interfaz: nueva pregunta, colecciones y tableros.',
      notes: 'Haga el recorrido en vivo. En Metabase, a cada vista se le llama «pregunta».',
    },
    {
      block: '1',
      time: '08:42',
      layout: 'flow',
      title: 'Su archivo depurado entra a Metabase en cuatro pasos',
      steps: [
        { label: 'Exportar', detail: 'El CSV depurado del Día 1' },
        { label: 'Subir', detail: 'Como tabla nueva en Metabase' },
        { label: 'Revisar tipos', detail: 'Fecha, número y texto' },
        { label: 'Contar registros', detail: 'Debe coincidir con su archivo' },
      ],
      material: ['datos'],
      notes:
        'El conteo de registros es el primer control del día: si su archivo tiene 928 registros, la tabla en Metabase debe tener 928. Si no coincide, algo se perdió en la carga. Antes de la sesión confirme con TI que la instancia de Metabase permita subir CSV; si no, cargue la tabla de práctica con antelación.',
    },
    {
      block: '1',
      time: '08:55',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Su archivo ya vive en Metabase y cuadra con el original',
      bullets: [
        'BI: respuestas rápidas a preguntas del mando',
        'El tablero se consulta; el reporte se lee',
        'El conteo de registros coincide con su archivo',
      ],
      notes: 'Antes de pasar al siguiente bloque, todos deben tener su tabla cargada y el conteo verificado.',
    },

    // ───────────── Bloque 2 ─────────────
    {
      block: '2',
      time: '09:00',
      layout: 'goal',
      kicker: 'Bloque 2 · 09:00 a 10:00',
      title: 'En esta hora construye sus primeras vistas sin escribir código',
      bullets: [
        'Conteo por tipo de delito y por sector',
        'Series por hora del día y día de la semana',
        'Elegir barras o líneas según la pregunta',
      ],
      notes: 'Cada participante construye las vistas en su equipo mientras usted las muestra en el proyector.',
    },
    {
      block: '2',
      time: '09:02',
      layout: 'goal',
      title: 'Una pregunta se arma eligiendo datos, filtro, resumen y grupo',
      bullets: [
        'Datos: su tabla de incidentes',
        'Filtro: periodo o tipo de delito',
        'Resumen: contar registros',
        'Agrupar por: tipo, sector, hora o día',
      ],
      capture: 'Editor de preguntas de Metabase con conteo agrupado por tipo de delito.',
      notes: 'Las cuatro decisiones son las mismas para todas las vistas del día. Lo único que cambia es por qué se agrupa.',
    },
    {
      block: '2',
      time: '09:10',
      layout: 'chart',
      title: 'Tres tipos de delito suman dos de cada tres registros',
      chart: {
        kind: 'bar',
        caption: 'Registros por tipo de delito, mes de práctica (928). Cifras ficticias.',
        data: [
          { label: 'Violencia familiar', value: 241 },
          { label: 'Robo a transeúnte', value: 214 },
          { label: 'Robo de vehículo', value: 167 },
          { label: 'Daño en propiedad', value: 132 },
          { label: 'Lesiones', value: 98 },
          { label: 'Robo a comercio', value: 76 },
        ],
        highlight: ['Violencia familiar', 'Robo a transeúnte', 'Robo de vehículo'],
      },
      bullets: ['Ordene siempre de mayor a menor', 'Lo importante salta sin leer números', 'Pregunta del mando: ¿qué prevengo primero?'],
      notes: 'Muestre cómo ordenar la vista de mayor a menor en Metabase. Una barra desordenada obliga al mando a leer cada número.',
    },
    {
      block: '2',
      time: '09:18',
      layout: 'chart',
      title: 'Dos distritos concentran casi la mitad de la incidencia',
      chart: {
        kind: 'bar',
        caption: 'Registros por distrito, mes de práctica (928). Cifras ficticias.',
        data: [
          { label: 'Cuauhtémoc', value: 214 },
          { label: 'Universidad', value: 199 },
          { label: 'Aldama', value: 198 },
          { label: 'Babícora', value: 121 },
          { label: 'Delicias', value: 109 },
          { label: 'Chihuahua', value: 87 },
        ],
        highlight: ['Cuauhtémoc', 'Universidad'],
      },
      bullets: ['El despliegue se decide por sector', 'Compare contra las unidades asignadas', 'Pregunta del mando: ¿dónde refuerzo?'],
      notes:
        'Cifras ficticias. Confirme los nombres de distrito contra el catálogo de distritos vigente. Haga notar que Aldama queda a un registro de Universidad: la diferencia entre ellos no es operativamente relevante.',
    },
    {
      block: '2',
      time: '09:28',
      layout: 'chart',
      title: 'La incidencia se acelera desde las 18:00 y llega al máximo a las 21:00',
      chart: {
        kind: 'line',
        caption: 'Registros por hora del día, de 0 a 23 h (928). Cifras ficticias.',
        data: horas.map((value, h) => ({ label: String(h).padStart(2, '0'), value })),
        highlight: ['21'],
      },
      bullets: ['Una línea muestra la forma del día', 'El cambio de turno debe anticipar el pico', 'Pregunta del mando: ¿a qué hora refuerzo?'],
      notes: 'La hora sale de la columna de hora del turno que se validó el Día 1. Si hubiera muchas horas vacías, esta vista mentiría.',
    },
    {
      block: '2',
      time: '09:38',
      layout: 'chart',
      title: 'El fin de semana concentra más registros que cualquier día hábil',
      chart: {
        kind: 'bar',
        caption: 'Registros por día de la semana (928). Cifras ficticias.',
        data: [
          { label: 'Lunes', value: 118 },
          { label: 'Martes', value: 112 },
          { label: 'Miércoles', value: 115 },
          { label: 'Jueves', value: 121 },
          { label: 'Viernes', value: 142 },
          { label: 'Sábado', value: 171 },
          { label: 'Domingo', value: 149 },
        ],
        highlight: ['Sábado', 'Domingo'],
      },
      bullets: ['Los días van en su orden natural', 'El viernes ya anticipa el fin de semana', 'Pregunta del mando: ¿qué días refuerzo?'],
      notes: 'Aquí no se ordena de mayor a menor: los días tienen un orden propio y romperlo confunde.',
    },
    {
      block: '2',
      time: '09:48',
      layout: 'compare',
      title: 'Barras para comparar categorías; líneas para ver cambios en el tiempo',
      left: { tone: 'neutral', label: 'Barras', items: ['Tipos de delito, sectores, colonias', 'Categorías que se comparan entre sí', 'Ordenadas de mayor a menor'] },
      right: { tone: 'neutral', label: 'Líneas', items: ['Horas, días seguidos, semanas', 'Algo que cambia de forma continua', 'El eje sigue el orden del tiempo'] },
      notes:
        'Los siete días de la semana pueden ir en barras porque son pocos y se comparan entre sí. Una serie de semanas o meses va en línea. Evite las gráficas de pastel: con más de tres partes no se leen.',
    },
    {
      block: '2',
      time: '09:55',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Cada vista responde una sola pregunta del mando',
      bullets: [
        'Tipo, sector, hora y día: cuatro vistas base',
        'Barras para comparar, líneas para el tiempo',
        'Cada vista guardada en su colección, con nombre claro',
      ],
      capture: 'Diálogo para guardar una pregunta en la colección del participante.',
      notes: 'Pida que guarden las cuatro vistas con un nombre que diga la pregunta, por ejemplo «Incidentes por sector».',
    },

    // ───────────── Receso ─────────────
    {
      block: 'Receso',
      time: '10:00',
      layout: 'break',
      kicker: 'Receso técnico · 15 minutos',
      title: 'Regresamos a las 10:15',
      lead: 'Deje Metabase abierto con su colección.',
      bullets: ['Antes del receso, usted ya tiene cuatro vistas guardadas.'],
      notes: 'Aproveche para revisar que todos tengan sus vistas guardadas.',
    },

    // ───────────── Bloque 3 ─────────────
    {
      block: '3',
      time: '10:15',
      layout: 'goal',
      kicker: 'Bloque 3 · 10:15 a 10:45',
      title: 'En esta hora arma el tablero y aprende a verificar sus cifras',
      bullets: [
        'Qué indicadores pide un mando y en qué orden',
        'Filtros de periodo para todo el tablero',
        'Consultas con el asistente y su verificación',
      ],
      ruleReminder: true,
      notes: 'En este bloque aparece el asistente de IA. Recuerde la regla de oro antes de abrirlo.',
    },
    {
      block: '3',
      time: '10:17',
      layout: 'table',
      title: 'Un mando lee el tablero siempre en el mismo orden',
      table: {
        head: ['Orden', 'Indicador', 'Pregunta que responde'],
        rows: [
          ['1', 'Total del periodo contra el anterior', '¿Vamos mejor o peor?'],
          ['2', 'Incidencia por sector', '¿Dónde refuerzo?'],
          ['3', 'Incidencia por hora del día', '¿A qué hora?'],
          ['4', 'Incidencia por día de la semana', '¿Qué días?'],
          ['5', 'Incidencia por tipo de delito', '¿Qué prevengo primero?'],
        ],
      },
      notes:
        'Este orden es una propuesta. Pregunte a quienes conocen a su mando si cambiaría algo: el tablero se diseña para quien lo va a leer.',
    },
    {
      block: '3',
      time: '10:21',
      layout: 'dashboard',
      title: 'Lo más importante va arriba a la izquierda',
      cards: [
        { title: 'Total del periodo', text: 'Cifra grande y cambio contra el anterior', span: 2 },
        { title: 'Por sector', text: 'Barras ordenadas de mayor a menor', span: 4 },
        { title: 'Por hora del día', text: 'Línea de 0 a 23 h', span: 3 },
        { title: 'Por día de la semana', text: 'Barras de lunes a domingo', span: 3 },
        { title: 'Por tipo de delito', text: 'Barras ordenadas', span: 6 },
      ],
      notes:
        'La vista se recorre como se lee un texto: de izquierda a derecha y de arriba abajo. Lo que va en la esquina superior izquierda es lo primero que el mando ve.',
    },
    {
      block: '3',
      time: '10:25',
      layout: 'bullets',
      title: 'Un filtro de periodo cambia todo el tablero a la vez',
      bullets: [
        'Un solo filtro arriba, conectado a todas las vistas',
        'Opciones: semana, mes o rango personalizado',
        'Evita armar un tablero por cada periodo',
      ],
      capture: 'Filtro de fecha conectado a las vistas del tablero en Metabase.',
      notes: 'Muestre cómo conectar el filtro a cada vista. El error común es conectarlo a una vista y olvidar las demás.',
    },
    {
      block: '3',
      time: '10:29',
      layout: 'compare',
      title: 'Al asistente se le da el esquema de la tabla, nunca sus filas',
      lead: 'SQL: el lenguaje con el que se le piden datos a una base de datos.',
      left: {
        label: 'Instrucción insegura',
        block: 'Te pego mi tabla, dime cuántos robos hubo por sector:\n«[fecha], [domicilio], [folio], [sector] …»',
      },
      right: {
        label: 'Instrucción segura',
        block:
          'Tengo una tabla incidentes con columnas fecha_evento (fecha), sector (entero) y tipo_delito (texto). Escribe una consulta SQL que cuente los robos por sector en marzo de 2026.',
      },
      ruleReminder: true,
      material: ['regla-de-oro'],
      notes:
        'El asistente no necesita ver datos para escribir SQL: le basta el nombre de la tabla y de las columnas. El resultado de la consulta tampoco se pega de vuelta en el asistente.',
    },
    {
      block: '3',
      time: '10:33',
      layout: 'flow',
      title: 'Ninguna cifra se presenta sin pasar por el conteo de control',
      steps: [
        { label: 'Correr la consulta', detail: 'Del asistente o propia' },
        { label: 'Conteo de control', detail: 'Un total que usted ya conoce' },
        { label: 'Comparar', detail: '¿Coinciden las cifras?' },
        { label: 'Decidir', detail: 'Si no coincide, no se usa' },
      ],
      ruleReminder: true,
      material: ['hoja-tablero'],
      notes:
        'Conteo de control: una cifra que ya se sabe correcta, como el total de registros del archivo depurado (928) o el total de un sector contado a mano. Si la suma de la consulta por sector no da 928, la consulta tiene un error.',
    },
    {
      block: '3',
      time: '10:38',
      layout: 'compare',
      title: 'Una cifra inflada se convierte en una patrulla mal asignada',
      left: {
        label: 'Consulta sin verificar',
        items: ['Une mal con el catálogo y duplica filas', 'Cuauhtémoc aparece con 428 registros', 'El mando mueve unidades sin necesidad'],
      },
      right: {
        label: 'Consulta verificada',
        items: ['La suma cuadra con el control: 928', 'Cuauhtémoc tiene 214 registros', 'El despliegue responde a la incidencia real'],
      },
      material: ['casos'],
      notes:
        'Ejemplo ficticio pero frecuente: al unir la tabla con un catálogo que tiene nombres repetidos, cada registro se cuenta dos veces. La consulta funciona, no marca error, y la cifra es falsa.',
    },
    {
      block: '3',
      time: '10:43',
      layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Su tablero ordena, filtra y muestra solo cifras verificadas',
      bullets: [
        'Orden de lectura: total, sector, hora, día y tipo',
        'Un filtro de periodo para todo el tablero',
        'Toda consulta del asistente pasa el conteo de control',
      ],
      ruleReminder: true,
      material: ['escenarios'],
      notes: 'Prepare al grupo para el taller de 25 minutos; el cierre empieza a las 11:15.',
    },

    // ───────────── Bloque 4 ─────────────
    {
      block: '4', time: '10:45', layout: 'bullets',
      kicker: 'Bloque 4 · 10:45 a 12:00 · Taller y cierre',
      title: 'Arme su tablero con tres vistas y un filtro',
      bullets: ['Elija tres vistas de su colección', 'Agregue un filtro de periodo conectado a las tres', 'Verifique el total contra su conteo de control', 'Guarde y comparta el enlace del tablero'],
      material: ['hoja-tablero'],
      notes: 'La práctica empieza de inmediato. Recorra el aula y ayude a completar el filtro y la verificación.',
    },
    {
      block: '4', time: '10:47', layout: 'timer',
      title: 'Tiene 25 minutos para armar y verificar su tablero', minutes: 25,
      bullets: ['10:55 · Vistas acomodadas', '11:05 · Filtro conectado', '11:12 · Cifras verificadas'],
      notes: 'Inicie el cronómetro. El mapa ya está listo desde ayer; aquí se termina el tablero.',
    },
    {
      block: '4', time: '11:13', layout: 'flow',
      title: 'Su producto final une los tres días en una sola historia',
      steps: [
        { label: 'Archivo depurado', detail: 'Día 1' },
        { label: 'Mapa de concentración', detail: 'Día 2' },
        { label: 'Tablero de mando', detail: 'Día 3' },
        { label: 'Recomendación', detail: 'Qué haría distinto el mando' },
      ],
      material: ['hoja-entrega'],
      notes: 'Forme equipos de cuatro o cinco. Den cuatro minutos para ordenar su presentación; ya tienen los tres productos.',
    },
    {
      block: '4', time: '11:17', layout: 'checklist',
      title: 'Cada equipo responde cuatro puntos en cinco minutos',
      bullets: ['Qué errores corrigió en el archivo', 'Dónde se concentra la incidencia en el mapa', 'Qué muestra el tablero y cómo verificó las cifras', 'Qué decisión operativa recomienda al mando'],
      notes: 'Con cuatro equipos, las presentaciones ocupan de 11:20 a 11:40. Con más equipos, continúe en una sesión adicional.',
    },
    {
      block: '4', time: '11:20', layout: 'timer',
      title: 'Cinco minutos por equipo', minutes: 5,
      bullets: ['Minuto 2 · Archivo y mapa', 'Minuto 3 · Tablero', 'Minuto 5 · Recomendación'],
      notes: 'Reinicie el cronómetro después de cada equipo. Cuatro equipos terminan a las 11:40.',
    },
    {
      block: '4', time: '11:40', layout: 'takeaway',
      title: 'Quien firma el resultado responde por él',
      bullets: ['Toda cifra se verifica contra un control', 'Todo script se revisa antes de ejecutarse', 'Ningún dato real se comparte con el asistente'],
      ruleReminder: true, material: ['escenarios'],
      notes: 'Cierre la discusión recordando los límites de la IA: puede inventar funciones, repetir sesgos y no asume responsabilidad por el resultado.',
    },
    {
      block: '4', time: '11:44', layout: 'timer', kicker: 'Cuestionario de cierre',
      title: 'El cuestionario de cierre mide cuánto avanzó el grupo', minutes: 10,
      bullets: ['Las mismas diez preguntas del Día 1', 'Elija «Cierre» y conteste sin consultar', 'Entregue su código al instructor'],
      material: ['cuestionario'],
      notes: 'Compare el punto de partida con el de llegada. Recoja los códigos (C3|C|...) y las dos preguntas de aplicación.',
    },
    {
      block: '4', time: '11:54', layout: 'cards', kicker: 'Cierre del curso',
      title: 'Se lleva herramientas que puede usar desde mañana',
      cards: [
        { icon: 'icon-[tabler--certificate]', title: 'Constancia', text: 'Para cada participante que acredita.' },
        { icon: 'icon-[tabler--folder]', title: 'Materiales', text: 'Datos de práctica, ejercicios y presentaciones.' },
        { icon: 'icon-[tabler--flag-check]', title: 'Compromiso y encuesta', text: 'En la sección Cierre del sitio; si no alcanza, queda de tarea.' },
      ],
      material: ['cierre', 'hoja-entrega'],
      notes: 'Recuerde los criterios de acreditación y la regla de seguridad al aplicar lo aprendido a un archivo real.',
    },
  ],
}
