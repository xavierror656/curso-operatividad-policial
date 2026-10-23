import type { Deck } from './types'

/**
 * Día 2 · Primeros pasos en QGIS con el CSV sintético del curso.
 * Tres tareas: mapa base de teselas, un polígono GeoJSON y puntos con un filtro.
 */
export const dia2: Deck = {
  slug: 'dia-2',
  day: 2,
  title: 'Primeros pasos en QGIS',
  subtitle: 'Día 2',
  schedule: '08:00 a 12:00',
  objective:
    'Que cada participante coloque un mapa base de teselas, dibuje una zona de práctica y la guarde como GeoJSON, y muestre y filtre los puntos del CSV sintético.',
  blocks: [
    { id: 'Apertura', label: 'Apertura', range: '08:00' },
    { id: '1', label: 'Poner un mapa base', range: '08:00 – 09:00' },
    { id: '2', label: 'Dibujar y guardar un GeoJSON', range: '09:00 – 10:00' },
    { id: 'Receso', label: 'Receso', range: '10:00 – 10:15' },
    { id: '3', label: 'Mostrar y filtrar puntos', range: '10:15 – 11:30' },
    { id: '4', label: 'Repetir las tres tareas', range: '11:30 – 12:00' },
  ],
  slides: [
    {
      block: 'Apertura', time: '08:00', layout: 'cover',
      kicker: 'Día 2 · 08:00 a 12:00',
      title: 'Hoy hacemos nuestro primer mapa en QGIS',
      lead: 'Un mapa base, una zona GeoJSON y puntos que se pueden filtrar.',
      notes: 'Rutas de menú verificadas en QGIS 3.44.15 LTR con interfaz en español. Abra la misma versión para todo el grupo. Use solo los datos sintéticos del sitio. Muestre cada clic y espere a que todos lo repitan.',
    },
    {
      block: 'Apertura', time: '08:03', layout: 'bullets',
      kicker: 'Qué se logra hoy',
      title: 'Solo haremos tres cosas',
      bullets: [
        'Poner calles de fondo con teselas',
        'Dibujar una zona de práctica y guardarla como GeoJSON',
        'Cargar los puntos del CSV sintético y filtrar un delito',
      ],
      notes: 'No se harán mapas de calor, uniones, mediciones ni scripts. Diga que el mapa base es una imagen de referencia y que el polígono será inventado para practicar.',
    },
    {
      block: 'Apertura', time: '08:06', layout: 'checklist',
      title: 'Antes de empezar, prepare el CSV y una carpeta',
      bullets: ['QGIS abierto', 'incidentes_practica_depurado.csv descargado', 'Una carpeta donde guardar zona_ejercicio.geojson y el proyecto', 'Conexión para ver el mapa base de OpenStreetMap'],
      material: ['datos-qgis'],
      notes: 'El CSV tiene 928 registros ficticios. Descárguelo previamente en cada equipo. Si no hay conexión, continúe con el GeoJSON y el CSV; las teselas requieren red.',
    },

    // ───────────── 1 · Teselas ─────────────
    {
      block: '1', time: '08:10', layout: 'goal',
      kicker: '1 · Mapa base de teselas',
      title: 'Las teselas muestran calles debajo de nuestras capas',
      bullets: ['Si falta «Navegador»: Ver → Paneles → Navegador (Ctrl+2)', 'Dentro de «Navegador», despliegue «Teselas XYZ»', 'Busque «OpenStreetMap»'],
      notes: 'En QGIS 3.44.15 en español, el grupo del panel se llama Teselas XYZ. Si está oculta la barra lateral, Ctrl+2 muestra el panel Navegador. Señale también el lienzo y el panel Capas.',
    },
    {
      block: '1', time: '08:17', layout: 'flow',
      title: 'Ponga OpenStreetMap como fondo',
      steps: [
        { label: 'Navegador', detail: 'Despliegue Teselas XYZ' },
        { label: 'OpenStreetMap', detail: 'Doble clic para añadirlo' },
        { label: 'Lienzo', detail: 'Acerque el mapa a Ciudad Juárez' },
      ],
      notes: 'Si no aparece OpenStreetMap, haga clic derecho en Teselas XYZ → Nueva conexión; nombre OpenStreetMap y URL https://tile.openstreetmap.org/{z}/{x}/{y}.png. Luego haga doble clic en la conexión. Compruebe que se ven calles; espere al grupo.',
    },
    {
      block: '1', time: '08:28', layout: 'compare',
      title: 'El fondo y los datos son capas distintas',
      left: { tone: 'neutral', label: 'Teselas', items: ['Muestran calles', 'Necesitan conexión para cargarse', 'Van abajo en el panel Capas'] },
      right: { tone: 'neutral', label: 'Nuestras capas', items: ['La zona y los puntos se añaden después', 'Van encima del fondo', 'Se guardan con el proyecto'] },
      notes: 'Arrastre OpenStreetMap al fondo del panel Capas si hace falta. No agregue más servicios cartográficos.',
    },
    {
      block: '1', time: '08:36', layout: 'timer',
      title: 'Practique 15 minutos: encuentre el fondo y navegue', minutes: 15,
      bullets: ['Abra OpenStreetMap', 'Acerque y aleje con la rueda', 'Mueva el mapa sin editar ninguna capa'],
      notes: 'Recorra el aula. Si un equipo está en blanco, compruebe primero la red y la visibilidad de la capa.',
    },
    {
      block: '1', time: '08:54', layout: 'takeaway',
      title: 'Primera tarea lista: ya tiene calles de fondo',
      bullets: ['OpenStreetMap aparece en Capas', 'El mapa se ve en el lienzo', 'El fondo quedará debajo del GeoJSON y de los puntos'],
      notes: 'Pida que levanten la mano quienes ven las calles. El siguiente bloque usa el fondo solo como guía visual.',
    },

    // ───────────── 2 · GeoJSON ─────────────
    {
      block: '2', time: '09:00', layout: 'goal',
      kicker: '2 · Dibujar un GeoJSON',
      title: 'Dibujaremos una zona inventada de práctica',
      bullets: ['Un polígono es una figura cerrada', 'La dibujaremos con cuatro o cinco clics', 'La guardaremos como zona_ejercicio.geojson'],
      notes: 'Diga expresamente que esta figura no es un límite oficial ni una zona real de incidencia.',
    },
    {
      block: '2', time: '09:07', layout: 'flow',
      title: 'Cree una capa temporal de polígonos',
      steps: [
        { label: 'Capa → Crear capa', detail: 'Nueva capa borrador temporal…' },
        { label: 'Nombre de la capa', detail: 'zona_ejercicio' },
        { label: 'Tipo de geometría', detail: 'Elija polígono' },
        { label: 'SRC y Aceptar', detail: 'EPSG:4326; capa en Capas' },
      ],
      notes: 'La etiqueta exacta en QGIS 3.44.15 en español es «Nueva capa borrador temporal…»; en inglés, Layer → Create Layer → New Temporary Scratch Layer…. No añada campos de atributos. La capa se perderá al cerrar QGIS si no la exporta.',
    },
    {
      block: '2', time: '09:18', layout: 'flow',
      title: 'Active la edición y dibuje una figura sencilla',
      steps: [
        { label: 'Seleccione zona_ejercicio', detail: 'Solo esta capa' },
        { label: 'Icono de lápiz', detail: 'Active el modo de edición' },
        { label: 'Añadir polígono', detail: 'Marque cuatro esquinas' },
        { label: 'Clic derecho', detail: 'Termina la figura' },
      ],
      notes: 'El botón «Añadir polígono» existe en QGIS 3.44.15 y aparece en la barra de Digitalización cuando la capa de polígonos está en edición. Si no se ve la barra: Ver → Barras de herramientas → Digitalización. Dibuje un rectángulo pequeño. Si aparece un formulario de atributos, acéptelo sin agregar campos.',
    },
    {
      block: '2', time: '09:29', layout: 'checklist',
      title: 'Guarde el dibujo antes de seguir',
      bullets: ['Pulse «Guardar cambios de la capa»', 'Desactive el modo de edición', 'Confirme que el polígono sigue visible', 'Compruebe que OpenStreetMap está debajo'],
      notes: 'La capa temporal aún se perdería al cerrar el proyecto. El siguiente paso crea el archivo GeoJSON permanente.',
    },
    {
      block: '2', time: '09:36', layout: 'timer',
      title: 'Practique 15 minutos: dibuje una sola zona', minutes: 15,
      bullets: ['Un polígono cerrado', 'Sin figuras adicionales', 'Cambios guardados'],
      notes: 'Ayude a quien se quede en modo de navegación o haya seleccionado OpenStreetMap en vez de la capa temporal.',
    },
    {
      block: '2', time: '09:53', layout: 'flow',
      title: 'Convierta la capa temporal en un archivo GeoJSON',
      steps: [
        { label: 'Clic derecho en zona_ejercicio', detail: 'Exportar → Guardar objetos como…' },
        { label: 'Formato', detail: 'GeoJSON' },
        { label: 'Nombre', detail: 'zona_ejercicio.geojson' },
        { label: 'Guardar', detail: 'Compruebe el archivo en su carpeta' },
      ],
      notes: 'La ruta corresponde al menú contextual de la capa temporal en el panel Capas; no al menú del lienzo. Elija Formato GeoJSON, SRC EPSG:4326 y nombre zona_ejercicio.geojson. Compruebe que el archivo existe físicamente. Si QGIS añade la capa exportada, oculte la temporal para no ver dos polígonos.',
    },
    {
      block: '2', time: '09:58', layout: 'takeaway',
      title: 'Segunda tarea lista: su dibujo ya es un GeoJSON',
      bullets: ['Un polígono inventado', 'Archivo zona_ejercicio.geojson guardado', 'La capa aparece encima de las teselas'],
      notes: 'Compruebe que el archivo existe antes del receso; una capa temporal sola no basta.',
    },

    {
      block: 'Receso', time: '10:00', layout: 'break',
      kicker: 'Receso · 15 minutos',
      title: 'Regresamos a las 10:15',
      lead: 'Ya tiene un mapa base y un GeoJSON guardado.',
      notes: 'Durante el receso, compruebe que los archivos GeoJSON quedaron guardados y que todos tienen el CSV sintético.',
    },

    // ───────────── 3 · Puntos y filtro ─────────────
    {
      block: '3', time: '10:15', layout: 'goal',
      kicker: '3 · Puntos del CSV',
      title: 'Cada fila del CSV se convertirá en un punto',
      bullets: ['Use incidentes_practica_depurado.csv', 'X = longitud; Y = latitud', 'El sistema de coordenadas es EPSG:4326'],
      material: ['datos-qgis'],
      notes: 'Muestre una fila ficticia del CSV. Explique que X es longitud e Y es latitud. Las siguientes dos diapositivas aclaran por qué el SRC de esta capa sigue siendo EPSG:4326 aunque el SRC del proyecto o del fondo sea otro.',
    },
    {
      block: '3', time: '10:17', layout: 'cards',
      kicker: 'SRC · tipos de coordenadas y proyecciones',
      title: 'Tres códigos EPSG que puede encontrar en QGIS',
      cards: [
        { icon: 'icon-[tabler--world]', title: 'EPSG:4326 · geográfico', text: 'Longitud y latitud en grados. Es el SRC real del CSV de práctica.' },
        { icon: 'icon-[tabler--map]', title: 'EPSG:3857 · proyectado', text: 'Es el SRC de las teselas web de OpenStreetMap. Útil para ver el fondo.' },
        { icon: 'icon-[tabler--ruler-measure]', title: 'EPSG:32613 · UTM 13N', text: 'Proyectado en metros para la zona de Ciudad Juárez. Es opcional aquí.' },
      ],
      notes: 'Distinga SRC geográfico (EPSG:4326, coordenadas en grados) de SRC proyectado (EPSG:3857 y UTM 13N, coordenadas en metros). Ciudad Juárez cae en la zona UTM 13N. Para este ejercicio no mida distancias en el mapa web ni cambie el SRC de origen del CSV. QGIS transforma las capas a la vista del proyecto automáticamente.',
    },
    {
      block: '3', time: '10:20', layout: 'flow',
      title: 'Compruebe el SRC del proyecto; el CSV tiene el suyo',
      steps: [
        { label: 'Esquina inferior derecha', detail: 'Lea el código EPSG del proyecto' },
        { label: 'Si necesita cambiarlo', detail: 'Clic en el código o Proyecto → Propiedades… → SRC' },
        { label: 'Para vista local en metros', detail: 'Busque EPSG:32613; aquí es opcional' },
        { label: 'Al cargar este CSV', detail: 'SRC de la geometría: EPSG:4326' },
      ],
      notes: 'Puede dejar el proyecto en EPSG:3857 si QGIS lo tomó del mapa base, o en EPSG:4326. Cambiar el SRC del proyecto cambia la vista, no reescribe las coordenadas del CSV. En el selector escriba el código EPSG y confirme. No asigne EPSG:3857 ni EPSG:32613 al CSV de longitud/latitud: sus números están en grados y se interpretan como EPSG:4326.',
    },
    {
      block: '3', time: '10:23', layout: 'flow',
      title: 'Cargue el CSV como texto delimitado',
      steps: [
        { label: 'Capa → Añadir capa', detail: 'Añadir capa de texto delimitado…' },
        { label: 'Nombre de archivo', detail: 'incidentes_practica_depurado.csv' },
        { label: 'Coordenadas del punto', detail: 'Campo X: longitud · Campo Y: latitud' },
        { label: 'SRC de la geometría', detail: 'EPSG:4326; pulse «Añadir»' },
      ],
      notes: 'Ruta alternativa: Ctrl+L abre el Administrador de fuentes de datos; elija Texto delimitado. Seleccione «CSV (valores separados por coma)» y «Coordenadas del punto». El CSV usa punto decimal: no active «El separador decimal es la coma». Si invierte X e Y, los puntos no quedarán donde se espera.',
    },
    {
      block: '3', time: '10:34', layout: 'checklist',
      title: 'Compruebe que aparecieron los puntos',
      bullets: ['La capa de incidentes está encima de OpenStreetMap', 'Pulse «Zoom a la capa» si no ve puntos', 'Abra la tabla de atributos: debe mostrar 928 filas', 'Si no aparecen, revise X, Y y EPSG:4326'],
      notes: 'No pida comparar distritos ni calcular densidad. El conteo de 928 solo confirma que el CSV se cargó completo.',
    },
    {
      block: '3', time: '10:43', layout: 'timer',
      title: 'Practique 15 minutos: cargue y localice los 928 puntos', minutes: 15,
      bullets: ['CSV cargado como puntos', 'Puntos visibles sobre las calles', 'Tabla con 928 filas'],
      notes: 'Espere a que todo el grupo vea puntos antes de mostrar el filtro.',
    },
    {
      block: '3', time: '11:00', layout: 'flow',
      title: 'Filtre para ver solo «Robo a comercio»',
      steps: [
        { label: 'Clic derecho en la capa de puntos', detail: 'Elija «Filtrar…»' },
        { label: 'Escriba', detail: '"delito" = \'Robo a comercio\'' },
        { label: 'Aplique', detail: 'Solo quedan esos puntos en el mapa' },
        { label: 'Compruebe', detail: 'El archivo sintético tiene 76' },
      ],
      notes: 'Seleccione la capa de puntos en el panel Capas y use su clic derecho → Filtrar…; también sirve Capa → Filtrar… (Ctrl+F). Se abre el Constructor de consultas: escriba la expresión y pruebe que devuelve 76 antes de aceptar. El filtro inferior de la tabla de atributos solo oculta filas en esa tabla; no cambia el mapa. El CSV original no se modifica.',
    },
    {
      block: '3', time: '11:11', layout: 'timer',
      title: 'Practique 15 minutos: aplique y quite el filtro', minutes: 15,
      bullets: ['Con filtro: 76 puntos de «Robo a comercio»', 'Quite el filtro: vuelven los 928 puntos', 'Aplique otra vez el mismo filtro'],
      notes: 'Si un participante ve cero, revise comillas, acento y valor exacto del delito. No añada más expresiones ni condiciones.',
    },
    {
      block: '3', time: '11:27', layout: 'takeaway',
      title: 'Tercera tarea lista: puede mostrar solo los puntos que busca',
      bullets: ['Con el filtro se ven 76 puntos', 'El CSV original no cambió', 'Al borrar el filtro regresan los 928 puntos'],
      notes: 'Deje aplicado el filtro de Robo a comercio para la práctica final.',
    },

    // ───────────── Práctica de las tres tareas ─────────────
    {
      block: '4', time: '11:30', layout: 'checklist',
      kicker: 'Práctica final · las mismas tres tareas',
      title: 'Su proyecto se revisa con estas tres tareas',
      bullets: ['Se ven las teselas de OpenStreetMap al fondo', 'Se ve el polígono de zona_ejercicio.geojson', 'Se ven los puntos del CSV filtrados a «Robo a comercio»', 'El filtro muestra 76 puntos; al quitarlo vuelven 928'],
      notes: 'Revise un equipo a la vez. El polígono es solo un dibujo de práctica; no se compara con incidentes ni con límites oficiales.',
    },
    {
      block: '4', time: '11:34', layout: 'timer',
      title: 'Tiene 15 minutos para repetir y comprobar', minutes: 15,
      bullets: ['Fondo de teselas', 'GeoJSON guardado', 'Puntos cargados y filtrados'],
      notes: 'Quien termine primero puede ayudar a un compañero a encontrar los botones, sin hacer la tarea por él.',
    },
    {
      block: '4', time: '11:51', layout: 'cards',
      kicker: 'Entregable del día',
      title: 'Guarde dos archivos y conserve el CSV original',
      cards: [
        { icon: 'icon-[tabler--polygon]', title: 'zona_ejercicio.geojson', text: 'Su polígono inventado.' },
        { icon: 'icon-[tabler--map]', title: 'proyecto_qgis.qgz', text: 'Mapa base, GeoJSON y puntos con el filtro aplicado.' },
      ],
      notes: 'Use Proyecto → Guardar como… para crear proyecto_qgis.qgz en la misma carpeta. Compruebe que el GeoJSON no es una capa temporal y que el CSV sigue en su ubicación.',
    },
    {
      block: '4', time: '11:56', layout: 'flow',
      kicker: 'Puente al Día 3',
      title: 'Mañana usará el mismo CSV para crear un tablero',
      steps: [
        { label: 'Día 1', detail: 'Archivo sintético depurado' },
        { label: 'Día 2', detail: 'Primer mapa en QGIS' },
        { label: 'Día 3', detail: 'Tablero y proyecto integrador' },
      ],
      notes: 'Recoja la evidencia de las tres tareas. Recuerde que el Día 3 reutiliza el mismo CSV, sin pedir análisis espacial avanzado.',
    },
  ],
}
