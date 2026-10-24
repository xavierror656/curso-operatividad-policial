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
    titulo: 'Cuestionario del Día 3 · Metabase básico',
    descripcion: 'Tres preguntas sencillas sobre las actividades de territorio, turnos y emergencias.',
    preguntas: [
      {
        pregunta: 'Para ver qué distrito tiene más registros, ¿qué debes mirar primero?',
        opciones: ['La gráfica por distrito del tablero Territorio', 'La gráfica por turno del tablero Ritmo temporal', 'El total general sin separar distritos', 'La gráfica por tipo de atención del tablero Emergencias'],
        correcta: 0,
        explicacion: 'En Territorio se observa la gráfica por distrito con el Periodo indicado y la vista de todos los distritos.',
      },
      {
        pregunta: 'En el tablero Ritmo temporal, ¿qué filtros debes comprobar antes de decir qué turno tiene más registros?',
        opciones: ['Sólo el nombre del turno', 'Periodo y Distrito', 'Sólo la barra más alta', 'El Periodo usado en otra actividad'],
        correcta: 1,
        explicacion: 'La respuesta sólo se entiende si dices qué Periodo y Distrito estaban seleccionados.',
      },
      {
        pregunta: 'En el tablero Emergencias, ¿qué respuesta sirve para informar lo observado?',
        opciones: ['«En cualquier distrito, éste es siempre el tipo más frecuente»', '«En todo el año, las emergencias fueron de este tipo»', '«Con este Periodo y Distrito, este tipo de atención tiene más registros en la gráfica»', '«La gráfica demuestra la causa de estas emergencias»'],
        correcta: 2,
        explicacion: 'Describe sólo lo que muestra la gráfica y menciona los filtros. La gráfica no explica causas.',
      },
    ],
  },
}
