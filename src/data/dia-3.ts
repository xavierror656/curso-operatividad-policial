import type { Deck } from './types'

/**
 * Día 3 · Lectura y verificación de tableros existentes de Metabase.
 * La colección requiere una cuenta individual autorizada. Las cifras institucionales
 * se consultan dentro de Metabase y nunca se copian al sitio público del curso.
 */
export const dia3: Deck = {
  slug: 'dia-3',
  day: 3,
  title: 'Metabase: lectura de tableros y decisión operativa',
  subtitle: 'Día 3',
  schedule: '08:00 a 12:00',
  objective:
    'Que el participante navegue los diez tableros existentes de Metabase, compare indicadores con el mismo periodo y distrito, verifique qué mide cada vista y presente una recomendación operativa con sus límites.',
  blocks: [
    { id: 'Apertura', label: 'Apertura', range: '08:00' },
    { id: '1', label: 'Acceso y recorrido de la colección', range: '08:00 – 09:00' },
    { id: '2', label: 'Lectura de los diez tableros', range: '09:00 – 10:00' },
    { id: 'Receso', label: 'Receso técnico', range: '10:00 – 10:15' },
    { id: '3', label: 'Verificación de indicadores', range: '10:15 – 10:45' },
    { id: '4', label: 'Análisis en equipos y cierre', range: '10:45 – 12:00' },
  ],
  slides: [
    {
      block: 'Apertura', time: '08:00', layout: 'cover',
      kicker: 'Día 3 · 08:00 a 12:00',
      title: 'Del tablero a una decisión que se puede defender',
      lead: 'Diez tableros existentes de Metabase · lectura, filtros y verificación',
      material: ['metabase'],
      notes: 'Abra la colección autorizada en Metabase. Los diez tableros ya están construidos; hoy se leen y contrastan mediante actividades guiadas.',
    },
    {
      block: 'Apertura', time: '08:02', layout: 'checklist',
      kicker: 'Puente con los días anteriores',
      title: 'Prepare su acceso a los tableros de Javier',
      bullets: [
        'Abra la colección de Metabase del curso',
        'Use su cuenta individual con permiso de lectura',
        'Tenga a mano la guía de actividades',
        'Ubique los filtros Periodo y Distrito',
      ],
      material: ['metabase'],
      notes: 'Haga una revisión rápida de red y acceso antes de iniciar. La sesión se dedica a los diez tableros existentes y a las actividades de interpretación.',
    },
    {
      block: 'Apertura', time: '08:04', layout: 'bullets',
      kicker: 'Qué se logra hoy',
      title: 'Al mediodía presenta una lectura verificable',
      bullets: [
        'Entra con su cuenta autorizada y localiza los diez tableros',
        'Aplica los filtros Periodo y Distrito antes de comparar',
        'Explica unidad, fuente, cobertura y límites de un indicador',
        'Propone una decisión y señala qué debe corroborarse',
      ],
      material: ['metabase'],
      notes: 'El entregable es una ficha breve de análisis y una presentación oral. Se trabaja en lectura; no se asignan permisos de edición a los participantes.',
    },

    // Bloque 1 · Acceso y recorrido
    {
      block: '1', time: '08:06', layout: 'goal',
      kicker: 'Bloque 1 · 08:00 a 09:00',
      title: 'Primero ubicamos la colección y sus filtros',
      bullets: [
        'Acceso con cuenta individual autorizada',
        'Diez tableros organizados por tema',
        'Preguntas guardadas dentro de cada tablero',
      ],
      material: ['metabase'],
      notes: 'Abra la guía del sitio y la colección. Si un participante recibe una pantalla de inicio de sesión o falta de permiso, gestione acceso con el responsable; no distribuya claves de API.',
    },
    {
      block: '1', time: '08:10', layout: 'cards',
      title: 'Metabase convierte registros en preguntas visibles',
      cards: [
        { icon: 'icon-[tabler--folder]', title: 'Colección', text: 'Agrupa los diez tableros del curso.' },
        { icon: 'icon-[tabler--layout-dashboard]', title: 'Tablero', text: 'Reúne indicadores relacionados.' },
        { icon: 'icon-[tabler--chart-bar]', title: 'Pregunta', text: 'Es una consulta o visualización guardada.' },
        { icon: 'icon-[tabler--filter]', title: 'Filtro', text: 'Acota la vista para un periodo y distrito.' },
      ],
      notes: 'Muestre los nombres de estos elementos en pantalla. Las ochenta preguntas de la colección ya existen; la actividad no consiste en crear otras.',
    },
    {
      block: '1', time: '08:16', layout: 'flow',
      title: 'Abra la colección del curso en cuatro pasos',
      steps: [
        { label: 'Abrir la guía', detail: 'Enlace Metabase del material' },
        { label: 'Iniciar sesión', detail: 'Cuenta asignada con permiso de lectura' },
        { label: 'Entrar a la colección', detail: 'Diez tableros del curso' },
        { label: 'Elegir un tablero', detail: 'Identificar título y filtros' },
      ],
      material: ['metabase'],
      notes: 'La colección es privada. Puede devolver 401 sin sesión; cada participante requiere cuenta individual con permisos de lectura de la colección y de sus datos.',
    },
    {
      block: '1', time: '08:23', layout: 'table',
      title: 'Los primeros cinco tableros cubren lugar, tiempo y personas',
      table: {
        head: ['Tablero', 'Tema', 'Pregunta orientadora'],
        rows: [
          ['2', 'Territorio y concentración de eventos', '¿Dónde hay registros?'],
          ['3', 'Ritmo temporal y turnos', '¿Cuándo se capturaron?'],
          ['4', 'Detenciones y perfil registrado', '¿Qué se registró en detenciones?'],
          ['5', 'Víctimas y atención declarada', '¿Qué atención quedó declarada?'],
          ['6', 'Clasificación de hechos y faltas', '¿Cómo se clasificaron?'],
        ],
      },
      material: ['metabase'],
      notes: 'Los números son IDs de tablero verificados, no una prioridad operativa. Visite la colección y abra una vista para ubicar título, periodo y distrito.',
    },
    {
      block: '1', time: '08:31', layout: 'table',
      title: 'Otros cinco tableros cubren aseguramientos y calidad',
      table: {
        head: ['Tablero', 'Tema', 'Pregunta orientadora'],
        rows: [
          ['7', 'Armas y municiones registradas', '¿Qué tipos se registraron?'],
          ['8', 'Vehículos y motivos de aseguramiento', '¿Qué motivos se declararon?'],
          ['9', 'Sustancias y objetos asegurados', '¿Qué categorías aparecen?'],
          ['10', 'Emergencias y clasificación de atención', '¿Cómo se clasificó la atención?'],
          ['11', 'Calidad de captura y cobertura', '¿Qué falta revisar?'],
        ],
      },
      material: ['metabase'],
      notes: 'Son los títulos de los tableros existentes. Aclare que categorías registradas no equivalen por sí solas a prevalencia real ni resultados operativos.',
    },
    {
      block: '1', time: '08:38', layout: 'bullets',
      title: 'Fije Periodo y Distrito antes de leer una cifra',
      bullets: [
        'Los diez tableros tienen filtros llamados Periodo y Distrito',
        'Anote ambos valores en su ficha antes de comparar',
        'Cambie un filtro a la vez y observe qué indicadores responden',
        'Si una tarjeta no cambia, confirme su alcance antes de usarla',
      ],
      material: ['metabase'],
      notes: 'Demuestre los filtros tal como aparecen en la instancia. El periodo predeterminado puede cambiar; nunca presuponga que todas las personas ven el mismo corte.',
    },
    {
      block: '1', time: '08:45', layout: 'checklist',
      title: 'Compruebe que su pantalla está lista para la práctica',
      bullets: [
        'Veo la colección del curso y puedo abrir un tablero',
        'Identifico nombre y tema del tablero',
        'Localizo Periodo y Distrito',
        'Puedo volver a la colección sin perder la ruta',
      ],
      notes: 'Recorra el aula. Si alguien solo ve la pantalla de acceso, verifique cuenta y permisos con TI; no le pida la contraseña en voz alta.',
    },
    {
      block: '1', time: '08:53', layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Sabe dónde está cada tablero y con qué corte lo ve',
      bullets: [
        'Colección → tablero → pregunta guardada',
        'Periodo y Distrito quedan anotados',
        'La lectura parte de una cuenta autorizada',
      ],
      material: ['metabase'],
      notes: 'Antes del siguiente bloque confirme que cada equipo puede navegar, aunque al menos una persona comparta pantalla de forma autorizada.',
    },

    // Bloque 2 · Lectura
    {
      block: '2', time: '09:00', layout: 'goal',
      kicker: 'Bloque 2 · 09:00 a 10:00',
      title: 'Leemos vistas existentes, sin fabricar cifras',
      bullets: [
        'Recorrido de los diez tableros',
        'Unidad de análisis de cada indicador',
        'Una observación y una duda por tema',
      ],
      notes: 'No dicte cifras de los datos institucionales en la diapositiva pública. Haga que las vean en Metabase con el acceso asignado.',
    },
    {
      block: '2', time: '09:04', layout: 'cards',
      title: 'Territorio: ubique la concentración sin atribuir causas',
      cards: [
        { icon: 'icon-[tabler--map-pin]', title: 'Distrito', text: 'Compare registros con el mismo periodo.' },
        { icon: 'icon-[tabler--map-2]', title: 'Colonia', text: 'Revise si el nombre está capturado y es comparable.' },
        { icon: 'icon-[tabler--chart-bar]', title: 'Sector', text: 'Distinga conteo de registros de una tasa.' },
      ],
      material: ['metabase'],
      notes: 'Abra el tablero 2. Las tarjetas incluyen partes, distritos, colonias, ubicación y distribución. Pregunte si un distrito con más registros también tiene más población o mayor captura; aquí no se dispone de denominador para una tasa.',
    },
    {
      block: '2', time: '09:13', layout: 'cards',
      title: 'Tiempo: una tendencia necesita fechas comparables',
      cards: [
        { icon: 'icon-[tabler--calendar]', title: 'Periodo', text: 'Mismo rango en todas las comparaciones.' },
        { icon: 'icon-[tabler--clock-hour-4]', title: 'Turno y franja', text: 'Observe la categoría capturada.' },
        { icon: 'icon-[tabler--chart-line]', title: 'Serie', text: 'Revise días con captura y meses parciales.' },
      ],
      material: ['metabase'],
      notes: 'Abra el tablero 3. Contiene eventos con fecha utilizable, días con registros, promedio por día con captura, turnos, día de semana y franjas. Algunas tarjetas llaman a octubre parcial: no compare un mes incompleto contra uno completo como si tuvieran igual duración.',
    },
    {
      block: '2', time: '09:22', layout: 'compare',
      title: 'Registros de personas y partes vinculados no son la misma unidad',
      left: {
        tone: 'neutral', label: 'Registros de detención o víctima',
        items: ['Cuenta filas de personas registradas', 'Puede haber más de una por parte', 'Describe lo declarado en la captura'],
      },
      right: {
        tone: 'neutral', label: 'Partes vinculados',
        items: ['Cuenta partes con al menos un registro', 'Un parte puede vincular varias personas', 'Es otra pregunta y otro denominador'],
      },
      material: ['metabase'],
      notes: 'Abra tableros 4 y 5. Señale sus tarjetas de registros y partes vinculados. No reste un indicador del otro ni interprete la diferencia como error sin revisar la relación de datos.',
    },
    {
      block: '2', time: '09:31', layout: 'table',
      title: 'Compare clasificación, armas y vehículos según su pregunta',
      table: {
        head: ['Tablero', 'Indicador que puede buscar', 'Precaución'],
        rows: [
          ['6 · Hechos y faltas', 'Clasificaciones y faltas registradas', 'Un parte puede tener más de una clasificación'],
          ['7 · Armas y municiones', 'Tipos y calibres declarados', 'Es conteo de registros, no de eventos únicos'],
          ['8 · Vehículos', 'Motivos de aseguramiento', 'Marcas declaradas pueden faltar o variar'],
        ],
      },
      material: ['metabase'],
      notes: 'Visite una tarjeta por tablero. Pida decir en voz alta la unidad que cuenta la tarjeta antes de discutir diferencias por distrito.',
    },
    {
      block: '2', time: '09:38', layout: 'table',
      title: 'Aseguramientos y emergencias requieren leer la etiqueta',
      table: {
        head: ['Tablero', 'Observe', 'Verifique'],
        rows: [
          ['9 · Sustancias y objetos', 'Tipos y unidades declaradas', 'No mezclar cantidades con unidades distintas'],
          ['10 · Emergencias', 'Tipo, subtipo y clasificación', 'Qué universo de llamadas o partes cubre'],
          ['11 · Calidad de captura', 'Fechas y colonias por revisar', 'Ausencia de dato no significa ausencia de evento'],
        ],
      },
      material: ['metabase'],
      notes: 'Estas vistas sirven para formular preguntas de control de calidad. No muestre ni exporte filas identificables en materiales públicos.',
    },
    {
      block: '2', time: '09:45', layout: 'flow',
      title: 'Haga una primera lectura que otro pueda repetir',
      steps: [
        { label: 'Título', detail: 'Tablero y tarjeta exactos' },
        { label: 'Corte', detail: 'Periodo y Distrito visibles' },
        { label: 'Unidad', detail: 'Qué cuenta la cifra' },
        { label: 'Observación', detail: 'Qué se aprecia, sin explicar causas aún' },
      ],
      material: ['metabase'],
      notes: 'En parejas, elijan una tarjeta y escriban estos cuatro elementos. Circule para corregir confusiones entre personas, partes, vehículos, eventos y clasificaciones.',
    },
    {
      block: '2', time: '09:52', layout: 'timer',
      title: 'Ocho minutos para comparar dos vistas', minutes: 8,
      bullets: [
        'Use el mismo Periodo y Distrito',
        'Elija dos tarjetas con la misma unidad de análisis',
        'Anote una diferencia y una limitación',
      ],
      notes: 'Si las unidades no coinciden, el hallazgo válido es explicar por qué esa comparación no debe hacerse.',
    },
    {
      block: '2', time: '09:59', layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Una observación útil dice qué se midió y cómo se filtró',
      bullets: ['Nombre de tablero y tarjeta', 'Periodo y Distrito', 'Unidad y cobertura', 'Límite de la lectura'],
      notes: 'Deje abierta la ficha; después del receso se completa la verificación.',
    },

    {
      block: 'Receso', time: '10:00', layout: 'break',
      kicker: 'Receso técnico · 15 minutos',
      title: 'Regresamos a las 10:15',
      lead: 'Conserve el enlace del tablero y el corte de filtros.',
      bullets: ['No exporte ni publique capturas de datos institucionales.'],
      notes: 'Aproveche para revisar problemas de acceso y preparar las tarjetas de calidad para el bloque siguiente.',
    },

    // Bloque 3 · Verificación
    {
      block: '3', time: '10:15', layout: 'goal',
      kicker: 'Bloque 3 · 10:15 a 10:45',
      title: 'Antes de recomendar, pruebe la solidez de la lectura',
      bullets: [
        'Misma ventana y mismo distrito',
        'Misma unidad de análisis',
        'Cobertura de captura y periodo parcial',
      ],
      material: ['metabase'],
      notes: 'La verificación se hace con lo visible y autorizado en Metabase. Una cifra que parece plausible aún necesita contexto.',
    },
    {
      block: '3', time: '10:18', layout: 'flow',
      title: 'Cuatro comprobaciones antes de citar un indicador',
      steps: [
        { label: 'Fuente', detail: 'Qué origen está documentado' },
        { label: 'Filtro', detail: 'Periodo y Distrito aplicados' },
        { label: 'Unidad', detail: 'Partes, personas, objetos o eventos' },
        { label: 'Cobertura', detail: 'Fechas y campos completos' },
      ],
      material: ['metabase'],
      notes: 'Si el origen o la definición no están visibles para la cuenta de lectura, márquelos como pendientes y pregunte al responsable; no invente la respuesta. Después contraste con otra tarjeta comparable. No es obligatorio abrir SQL ni tener permiso de edición.',
    },
    {
      block: '3', time: '10:24', layout: 'compare',
      title: 'Dos totales distintos pueden ser correctos',
      left: {
        tone: 'neutral', label: 'Registros',
        items: ['Una fila por persona u objeto registrado', 'Un parte puede aportar varias filas', 'No siempre equivale a incidentes'],
      },
      right: {
        tone: 'neutral', label: 'Partes vinculados',
        items: ['Cuenta partes únicos vinculados', 'Responde otra pregunta', 'Debe nombrarse como tal en la presentación'],
      },
      notes: 'Use las tarjetas iniciales de detenciones, víctimas o emergencias. Pida que un participante formule dos frases correctas con los dos indicadores, sin declarar que uno de ellos está mal.',
    },
    {
      block: '3', time: '10:29', layout: 'bullets',
      title: 'Un mes parcial no demuestra una baja',
      bullets: [
        'Algunas tarjetas identifican octubre como periodo parcial',
        'Compare intervalos de igual duración y cobertura',
        'Revise días con captura antes de interpretar la curva',
        'Si no puede igualar los cortes, declare la limitación',
      ],
      material: ['metabase'],
      notes: 'El rótulo “oct. parcial” existe en varias tarjetas. No infiera tendencias operativas a partir de un mes incompleto frente a meses cerrados.',
    },
    {
      block: '3', time: '10:34', layout: 'cards',
      title: 'Calidad de captura también es un resultado',
      cards: [
        { icon: 'icon-[tabler--calendar-question]', title: 'Fechas por revisar', text: 'Pueden mover registros entre periodos.' },
        { icon: 'icon-[tabler--map-pin-question]', title: 'Sin colonia', text: 'Reduce la lectura territorial.' },
        { icon: 'icon-[tabler--tags]', title: 'Sin clasificar', text: 'Cambia la lectura por categoría.' },
      ],
      material: ['metabase'],
      notes: 'Abra el tablero 11. Plantee una acción de mejora de captura antes de una acción de despliegue si el dato no soporta la conclusión.',
    },
    {
      block: '3', time: '10:40', layout: 'takeaway',
      kicker: 'Qué se lleva del bloque',
      title: 'Una conclusión responsable incluye su límite',
      bullets: [
        'Cite tablero, tarjeta, periodo y distrito',
        'No mezcle unidades ni meses parciales con completos',
        'Separe el dato observado de la hipótesis',
      ],
      material: ['metabase'],
      notes: 'Dé la consigna del taller: una ficha por equipo, basada en lectura autorizada. El instructor revisará que ninguna evidencia identificable pase al sitio público.',
    },

    // Bloque 4 · Actividades y cierre
    {
      block: '4', time: '10:45', layout: 'goal',
      kicker: 'Bloque 4 · 10:45 a 12:00',
      title: 'Cada equipo prepara una ficha y una recomendación',
      bullets: [
        'Elija un tablero principal y otro para contraste',
        'Aplique el mismo Periodo y Distrito',
        'Redacte hallazgo, límite y acción comprobable',
        'Use otra tarjeta compatible para contrastar el hallazgo',
      ],
      material: ['metabase'],
      notes: 'Asigne temas para cubrir la colección completa. La ficha y la recomendación se basan únicamente en los tableros de Metabase.',
    },
    {
      block: '4', time: '10:48', layout: 'table',
      title: 'Distribuya los diez tableros entre los equipos',
      table: {
        head: ['Ruta', 'Tableros', 'Pregunta de equipo'],
        rows: [
          ['A · Lugar y tiempo', '2 Territorio · 3 Ritmo temporal', '¿Dónde y cuándo se registró?'],
          ['B · Personas y hechos', '4 Detenciones · 5 Víctimas · 6 Hechos', '¿Qué unidades cuentan las vistas?'],
          ['C · Aseguramientos', '7 Armas · 8 Vehículos · 9 Sustancias', '¿Qué categorías y unidades se declararon?'],
          ['D · Servicio y calidad', '10 Emergencias · 11 Calidad', '¿Qué se atendió y qué falta revisar?'],
        ],
      },
      material: ['metabase'],
      notes: 'Con cuatro equipos, cada ruta cubre todos los tableros. Con más equipos, reparta una ruta entre dos. La ficha elige un indicador principal, no resume todas las tarjetas.',
    },
    {
      block: '4', time: '10:51', layout: 'timer',
      title: 'Veintidós minutos para preparar la ficha', minutes: 22,
      bullets: [
        '10:58 · Tablero, tarjeta, Periodo y Distrito definidos',
        '11:06 · Unidad y cobertura comprobadas',
        '11:13 · Hallazgo, límite y recomendación redactados',
      ],
      material: ['metabase'],
      notes: 'Inicie el cronómetro. La ficha imprimible está en la guía Metabase. Recorra los equipos y cuestione inferencias causales o comparaciones de unidades incompatibles.',
    },
    {
      block: '4', time: '11:13', layout: 'flow',
      title: 'Presente una historia que otro pueda verificar',
      steps: [
        { label: 'Dato', detail: 'Tablero, tarjeta y corte exactos' },
        { label: 'Lectura', detail: 'Qué se observa' },
        { label: 'Límite', detail: 'Qué falta o qué no se puede concluir' },
        { label: 'Acción', detail: 'Qué confirmaría o decidiría el mando' },
      ],
      material: ['metabase'],
      notes: 'La presentación cita una tarjeta principal y otra compatible para contraste. El equipo explica el corte, la unidad y el límite antes de proponer una acción.',
    },
    {
      block: '4', time: '11:17', layout: 'checklist',
      title: 'Cada presentación se revisa con cinco preguntas',
      bullets: [
        '¿Qué tablero y tarjeta se usaron?',
        '¿Qué Periodo y Distrito se aplicaron?',
        '¿Qué unidad cuenta el indicador?',
        '¿Qué límite o problema de captura se identificó?',
        '¿Qué acción concreta se propone verificar?',
      ],
      material: ['metabase'],
      notes: 'Use esta lista como rúbrica rápida. No pida descargar filas, capturas o exportaciones de Metabase para subirlas a la web pública.',
    },
    {
      block: '4', time: '11:20', layout: 'timer',
      title: 'Cinco minutos por equipo', minutes: 5,
      bullets: [
        'Minuto 2 · Hallazgo y corte',
        'Minuto 3 · Verificación y límite',
        'Minuto 5 · Recomendación',
      ],
      notes: 'Con cuatro equipos se termina alrededor de las 11:40. Si hay más, continúe en la siguiente sesión prevista para el programa completo.',
    },
    {
      block: '4', time: '11:40', layout: 'takeaway',
      title: 'Quien presenta una cifra responde por su contexto',
      bullets: [
        'Un total sin unidad ni periodo puede engañar',
        'Una captura incompleta exige cautela',
        'La decisión se contrasta con la fuente responsable',
      ],
      material: ['metabase'],
      notes: 'Cierre con la diferencia entre observación y decisión. El acceso a datos institucionales permanece dentro de Metabase y de los canales autorizados.',
    },
    {
      block: '4', time: '11:44', layout: 'timer',
      kicker: 'Cuestionario del Día 3',
      title: 'Repase el análisis de Metabase', minutes: 10,
      bullets: [
        'Cinco preguntas sobre colección, filtros y fuentes',
        'Explique por qué dos totales pueden diferir',
        'Revise la retroalimentación al terminar',
      ],
      material: ['cuestionario-dia3'],
      notes: 'Abra el cuestionario específico del Día 3. Se centra en los tableros existentes y sus filtros, sin tareas de otros programas.',
    },
    {
      block: '4', time: '11:54', layout: 'cards',
      kicker: 'Cierre de Metabase',
      title: 'Se lleva una lectura que otro puede comprobar',
      cards: [
        { icon: 'icon-[tabler--layout-dashboard]', title: 'Tablero', text: 'Nombre y enlace del indicador analizado.' },
        { icon: 'icon-[tabler--filter]', title: 'Corte', text: 'Periodo, Distrito y unidad explícitos.' },
        { icon: 'icon-[tabler--flag-check]', title: 'Acción', text: 'Una recomendación sujeta a verificación.' },
      ],
      material: ['metabase'],
      notes: 'Cierre la actividad pidiendo que cada equipo conserve la ruta del tablero y su ficha dentro de los medios institucionales autorizados.',
    },
  ],
}
