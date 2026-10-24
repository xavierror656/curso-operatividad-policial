/** Cuestionarios breves de repaso de los Días 2 y 3. Todas las cifras son sintéticas. */
export interface PreguntaPractica {
  pregunta: string
  opciones: string[]
  correcta: number
  explicacion: string
}

export interface CuestionarioPractica {
  dia: number
  titulo: string
  descripcion: string
  preguntas: PreguntaPractica[]
}

export const cuestionariosPractica: Record<'dia2' | 'dia3', CuestionarioPractica> = {
  dia2: {
    dia: 2,
    titulo: 'Cuestionario del Día 2 · QGIS básico',
    descripcion: 'Seis preguntas para repasar el mapa base, el GeoJSON, los SRC, los puntos y el filtro.',
    preguntas: [
      {
        pregunta: '¿Qué añade las calles como fondo del mapa en QGIS?',
        opciones: ['La tabla de atributos', 'Las teselas de OpenStreetMap', 'El filtro de la capa', 'El archivo CSV'],
        correcta: 1,
        explicacion: 'OpenStreetMap se añade desde Teselas XYZ y queda debajo de las otras capas.',
      },
      {
        pregunta: 'Después de dibujar una zona con forma de polígono, ¿en qué formato la guardamos?',
        opciones: ['PDF', 'CSV', 'GeoJSON', 'Imagen JPG'],
        correcta: 2,
        explicacion: 'El polígono de práctica se guarda como zona_ejercicio.geojson.',
      },
      {
        pregunta: 'Al cargar el CSV como puntos, ¿qué columnas van en X y en Y?',
        opciones: ['X = latitud; Y = longitud', 'X = fecha; Y = hora', 'X = longitud; Y = latitud', 'X = colonia; Y = sector'],
        correcta: 2,
        explicacion: 'X corresponde a longitud y Y a latitud; en la práctica se usa EPSG:4326.',
      },
      {
        pregunta: 'El proyecto muestra EPSG:3857 por el mapa base. ¿Qué SRC se asigna al CSV de longitud y latitud al cargarlo?',
        opciones: ['EPSG:3857, para que coincida con el proyecto', 'EPSG:4326, porque sus coordenadas están en grados', 'EPSG:32613, porque Ciudad Juárez está en UTM 13N', 'Cualquiera: QGIS los trata igual'],
        correcta: 1,
        explicacion: 'El CSV está en EPSG:4326. QGIS lo muestra junto al mapa base mediante la transformación del proyecto; no hay que cambiar el SRC de origen del CSV.',
      },
      {
        pregunta: 'Al cargar completo el CSV sintético depurado, ¿cuántos puntos debe mostrar la tabla de atributos?',
        opciones: ['76', '214', '428', '928'],
        correcta: 3,
        explicacion: 'El archivo depurado de práctica tiene 928 registros ficticios.',
      },
      {
        pregunta: 'Tras filtrar «Robo a comercio» se ven 76 puntos. ¿Qué pasa al quitar el filtro?',
        opciones: ['Vuelven a verse los 928 puntos', 'Se borran los otros puntos del CSV', 'Se convierte la capa en GeoJSON', 'Desaparece el mapa base'],
        correcta: 0,
        explicacion: 'El filtro solo cambia qué puntos se ven; el CSV original conserva sus 928 registros.',
      },
    ],
  },
  dia3: {
    dia: 3,
    titulo: 'Cuestionario del Día 3 · DeepSeek y Metabase',
    descripcion: 'Tres preguntas sobre el apoyo de IA, la comprobación de gráficas y el cuidado del acceso.',
    preguntas: [
      {
        pregunta: 'DeepSeek creó una gráfica de prácticas por tarea. ¿Qué haces antes de guardarla?',
        opciones: ['Compruebo la tabla, los campos y los conteos con los datos de práctica', 'La guardo porque una respuesta de IA ya está verificada', 'Cambio los datos para que coincidan con la gráfica', 'La publico antes de revisar el resultado'],
        correcta: 0,
        explicacion: 'La IA propone un resultado. El equipo comprueba que usa la tabla ficticia y que los conteos son 5, 4 y 3: doce prácticas.',
      },
      {
        pregunta: 'Para comparar el tiempo por práctica con y sin IA, ¿qué operación pide el trabajo 2?',
        opciones: ['Sumar todos los tiempos sin separar las tareas', 'Promedio de ambos campos de minutos, agrupado por tarea', 'Contar sólo las prácticas revisadas', 'Elegir el número más alto de cada tarea'],
        correcta: 1,
        explicacion: 'Se comparan promedios por tarea, con minutos como unidad. Al ser datos simulados, no prueban un ahorro real.',
      },
      {
        pregunta: '¿Qué ayuda a proteger el acceso al tablero en Metabase?',
        opciones: ['Un filtro visible que oculte algunas filas', 'Un título que diga «privado»', 'Los permisos de datos y de colección configurados y comprobados por el responsable', 'Que DeepSeek haya creado las gráficas'],
        correcta: 2,
        explicacion: 'Los filtros cambian la vista; los permisos controlan el acceso. Activar IA no vuelve confidencial la información automáticamente.',
      },
    ],
  },
}
