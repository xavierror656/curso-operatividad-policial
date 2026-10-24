import type { Deck } from './types'

/**
 * Día 3 · Tres actividades guiadas en los tableros existentes de Javier.
 * Las cifras se consultan dentro de Metabase con acceso individual.
 */
export const dia3: Deck = {
  slug: 'dia-3',
  day: 3,
  title: 'Metabase: tres lecturas sencillas',
  subtitle: 'Día 3',
  schedule: '08:00 a 12:00',
  objective: 'Que cada participante abra tres tableros existentes, lea una gráfica en cada uno y responda una pregunta breve indicando Periodo y Distrito.',
  blocks: [
    { id: 'Apertura', label: 'Apertura', range: '08:00' },
    { id: '1', label: 'Entrar y reconocer los filtros', range: '08:00 – 08:40' },
    { id: '2', label: 'Territorio y turnos', range: '08:40 – 10:00' },
    { id: 'Receso', label: 'Receso técnico', range: '10:00 – 10:15' },
    { id: '3', label: 'Emergencias', range: '10:15 – 11:00' },
    { id: '4', label: 'Compartir y repasar', range: '11:00 – 12:00' },
  ],
  slides: [
    {
      block: 'Apertura', time: '08:00', layout: 'cover',
      kicker: 'Día 3 · 08:00 a 12:00',
      title: 'Tres gráficas. Tres respuestas.',
      lead: 'Hoy veremos territorio, turnos y emergencias en Metabase.',
      material: ['metabase'],
      notes: 'Presente el objetivo con lenguaje simple. Los tres tableros ya existen; nadie necesita crear consultas ni recorrer todas las gráficas. Muestre primero el ejemplo en el proyector.',
    },
    {
      block: '1', time: '08:05', layout: 'goal',
      title: 'Esto es lo que haremos hoy',
      bullets: [
        'Abrir tres tableros con la cuenta asignada',
        'Mirar una gráfica en cada tablero',
        'Responder una pregunta en una frase',
      ],
      material: ['metabase'],
      notes: 'Escriba en el pizarrón el Periodo completo y el Distrito asignado. No use un mes en curso. Si el grupo avanza despacio, mantenga la demostración guiada y trabajo en parejas.',
    },
    {
      block: '1', time: '08:15', layout: 'flow',
      title: 'Entrar a Metabase paso a paso',
      steps: [
        { label: 'Abrir la guía', detail: 'El enlace está en el material del Día 3' },
        { label: 'Iniciar sesión', detail: 'Con la cuenta entregada por el instructor' },
        { label: 'Abrir un tablero', detail: 'Usar su botón directo en la guía' },
      ],
      material: ['metabase'],
      notes: 'Abra el primer tablero en el proyector. Permita unos minutos para el acceso. Si alguien no puede entrar, revíselo con la persona responsable; no comparta contraseñas entre participantes.',
    },
    {
      block: '1', time: '08:25', layout: 'cards',
      title: 'Dos filtros que veremos siempre',
      cards: [
        { icon: 'icon-[tabler--calendar]', title: 'Periodo', text: 'Las fechas que estamos mirando.' },
        { icon: 'icon-[tabler--map-pin]', title: 'Distrito', text: 'El lugar que estamos mirando.' },
      ],
      material: ['metabase'],
      notes: 'Señale ambos filtros en pantalla, sin explicar funciones avanzadas. Para Territorio muestre cómo ver todos los distritos, según la opción disponible en Metabase; para las otras dos actividades use el Distrito asignado. Mantenga el mismo Periodo completo.',
    },
    {
      block: '1', time: '08:35', layout: 'takeaway',
      title: 'Una gráfica muestra registros capturados',
      bullets: [
        'Mira su título antes de leer las barras',
        'Di siempre qué Periodo y Distrito usaste',
        'La barra mayor no explica por qué ocurrieron los hechos',
      ],
      notes: 'Modele una frase sin cifras reales: «En el periodo elegido, viendo todos los distritos, la barra más alta corresponde a…». Deje que el grupo complete la frase con la pantalla autorizada.',
    },
    {
      block: '2', time: '08:40', layout: 'goal',
      title: 'Actividad 1 · Territorio',
      bullets: [
        'Abre «Territorio y concentración de eventos»',
        'Busca una gráfica de registros por distrito',
        'Usa el Periodo indicado y la vista de todos los distritos',
        'Pregunta: ¿qué distrito tiene más registros en la gráfica?',
      ],
      material: ['metabase'],
      notes: 'Abra el tablero 2. Señale la gráfica por distrito o una equivalente. Muestre cómo dejar el filtro sin un distrito específico, según la interfaz disponible. La salida es una sola frase con Periodo, vista de todos los distritos y nombre del distrito.',
    },
    {
      block: '2', time: '09:05', layout: 'timer',
      title: 'Escriba la primera frase', minutes: 15,
      bullets: [
        'En el periodo ___, viendo todos los distritos…',
        '…la gráfica muestra más registros en ___',
      ],
      material: ['metabase'],
      notes: 'Trabajen en parejas si es necesario. Recorra el aula y confirme que leen la gráfica indicada, no una cifra de otro tablero. No pida descargar datos.',
    },
    {
      block: '2', time: '09:20', layout: 'goal',
      title: 'Actividad 2 · Turnos',
      bullets: [
        'Abre «Ritmo temporal y turnos»',
        'Busca una gráfica de registros por turno',
        'Usa el mismo Periodo y el Distrito asignado',
        'Pregunta: ¿qué turno tiene más registros?',
      ],
      material: ['metabase'],
      notes: 'Abra el tablero 3. Localice la gráfica por turno o una equivalente y señale los filtros. Explique que un Periodo incompleto puede cambiar la lectura; use el completo elegido al inicio.',
    },
    {
      block: '2', time: '09:40', layout: 'timer',
      title: 'Escriba la segunda frase', minutes: 15,
      bullets: [
        'En el periodo ___, con Distrito ___…',
        '…el turno con más registros es ___',
      ],
      material: ['metabase'],
      notes: 'Pida una frase, no un informe. Si alguien no ve la gráfica, muestre la ubicación en proyector o indique una vista equivalente. Deje cinco minutos para comentar respuestas hasta el receso.',
    },
    {
      block: 'Receso', time: '10:00', layout: 'break',
      kicker: 'Receso técnico · 15 minutos',
      title: 'Regresamos a las 10:15',
      lead: 'Deja anotadas tus dos frases.',
      notes: 'Revise los accesos pendientes durante el receso.',
    },
    {
      block: '3', time: '10:15', layout: 'goal',
      title: 'Actividad 3 · Emergencias',
      bullets: [
        'Abre «Emergencias y clasificación de atención»',
        'Busca una gráfica por tipo de atención',
        'Usa el mismo Periodo y el Distrito asignado',
        'Pregunta: ¿qué tipo de atención tiene más registros?',
      ],
      material: ['metabase'],
      notes: 'Abra el tablero 10. Si la vista usa una etiqueta diferente, señale una gráfica equivalente de tipo o clasificación de atención. Explique que son registros de atención, no necesariamente hechos confirmados.',
    },
    {
      block: '3', time: '10:40', layout: 'timer',
      title: 'Escriba la tercera frase', minutes: 15,
      bullets: [
        'En el periodo ___, con Distrito ___…',
        '…el tipo con más registros es ___',
      ],
      material: ['metabase'],
      notes: 'Cada participante o pareja entrega tres frases, una por actividad. Confirme los filtros visibles. No agregue una cuarta actividad si el grupo todavía practica lo básico.',
    },
    {
      block: '4', time: '11:00', layout: 'checklist',
      title: 'Revise sus tres respuestas',
      bullets: [
        'Una frase de territorio',
        'Una frase de turnos',
        'Una frase de emergencias',
        'Periodo y Distrito anotados en cada frase',
      ],
      material: ['metabase'],
      notes: 'Dé tiempo para corregir frases incompletas. El instructor confirma la gráfica usada y los filtros; no se pide buscar causas ni comparar medidas de tableros diferentes.',
    },
    {
      block: '4', time: '11:15', layout: 'flow',
      title: 'Comparta una frase con un compañero',
      steps: [
        { label: 'Nombre el tablero', detail: 'Territorio, turnos o emergencias' },
        { label: 'Diga los filtros', detail: 'Periodo y Distrito' },
        { label: 'Lea su respuesta', detail: 'Sólo lo que muestra la gráfica' },
      ],
      material: ['metabase'],
      notes: 'Pida a algunas parejas que lean una frase. La meta es hablar con claridad y reconocer el alcance de los filtros, no exponer cifras institucionales fuera de Metabase.',
    },
    {
      block: '4', time: '11:35', layout: 'takeaway',
      title: 'No adivine la causa a partir de una barra',
      bullets: [
        'La gráfica permite describir lo registrado',
        'La causa requiere otras comprobaciones',
        'Si no se ve bien la gráfica, pregunte al instructor',
      ],
      notes: 'Cierre la demostración recordando la diferencia entre observar y explicar. No se asigna recomendación operativa como producto de estas actividades iniciales.',
    },
    {
      block: '4', time: '11:45', layout: 'timer',
      title: 'Repaso de Metabase', minutes: 5,
      bullets: [
        'Tres preguntas sencillas',
        'Una sobre cada actividad',
      ],
      material: ['cuestionario-dia3'],
      notes: 'Abra el cuestionario específico del Día 3. Permita comentar errores con ejemplos de los tres tableros, sin añadir una nueva consulta.',
    },
    {
      block: '4', time: '11:55', layout: 'cards',
      title: 'Hoy se lleva tres respuestas claras',
      cards: [
        { icon: 'icon-[tabler--map-pin]', title: 'Territorio', text: 'El distrito con más registros en la gráfica.' },
        { icon: 'icon-[tabler--clock]', title: 'Turnos', text: 'El turno con más registros.' },
        { icon: 'icon-[tabler--alert-circle]', title: 'Emergencias', text: 'El tipo de atención con más registros.' },
      ],
      material: ['metabase'],
      notes: 'Recoja las tres frases. Los demás tableros quedan como material opcional para el instructor; no son tarea para el participante.',
    },
  ],
}
