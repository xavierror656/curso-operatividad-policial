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
    descripcion: 'Cinco preguntas para repasar el mapa base, el GeoJSON, los puntos y el filtro.',
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
    titulo: 'Cuestionario del Día 3 · Metabase y tablero',
    descripcion: 'Cinco preguntas para repasar vistas, gráficas, filtros y verificación del tablero.',
    preguntas: [
      {
        pregunta: 'En Metabase, ¿dónde empieza a construir una vista de los datos?',
        opciones: ['Nueva pregunta', 'Teselas XYZ', 'Guardar como GeoJSON', 'Tabla de atributos de QGIS'],
        correcta: 0,
        explicacion: 'En Metabase, una vista se construye como una «nueva pregunta».',
      },
      {
        pregunta: 'Para comparar el número de incidentes por tipo de delito, ¿qué gráfica conviene usar?',
        opciones: ['Barras', 'Línea de tiempo', 'Mapa base de teselas', 'Polígono GeoJSON'],
        correcta: 0,
        explicacion: 'Las barras permiten comparar categorías, como tipos de delito o distritos.',
      },
      {
        pregunta: '¿Qué gráfica ayuda a ver cómo cambian los registros a lo largo de las horas?',
        opciones: ['Tabla sin ordenar', 'Línea', 'Mapa base', 'Polígono'],
        correcta: 1,
        explicacion: 'Una línea muestra el cambio a lo largo del tiempo, por ejemplo de 0 a 23 horas.',
      },
      {
        pregunta: 'Si el tablero tiene tres vistas y un filtro de periodo, ¿a cuántas vistas debe conectarse el filtro?',
        opciones: ['Solo a la primera', 'Solo a las dos gráficas', 'A las tres', 'A ninguna'],
        correcta: 2,
        explicacion: 'El filtro de periodo debe cambiar las tres vistas del tablero a la vez.',
      },
      {
        pregunta: 'Si la tabla de práctica tiene 928 registros, ¿qué debe comprobar antes de presentar el tablero?',
        opciones: ['Que cualquier cifra parezca razonable', 'Que el total del tablero cuadre con 928', 'Que la gráfica tenga muchos colores', 'Que el nombre del archivo sea corto'],
        correcta: 1,
        explicacion: 'El total conocido de 928 registros sirve como conteo de control para detectar errores.',
      },
    ],
  },
}
