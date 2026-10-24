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
    titulo: 'Cuestionario del Día 3 · Lectura de Metabase',
    descripcion: 'Cinco preguntas para repasar la lectura de tableros existentes, sus fuentes, periodos y filtros.',
    preguntas: [
      {
        pregunta: '¿Dónde se encuentran los tableros preparados para esta práctica en Metabase?',
        opciones: ['En la colección indicada para el curso', 'En Teselas XYZ de QGIS', 'En el archivo GeoJSON del mapa', 'En una carpeta de descargas del navegador'],
        correcta: 0,
        explicacion: 'La actividad empieza en la colección de tableros existentes; no requiere crear preguntas ni cargar archivos.',
      },
      {
        pregunta: 'Antes de interpretar una cifra de un tablero, ¿qué debe anotar?',
        opciones: ['Solo el color de la gráfica', 'Fuente, periodo, definición del indicador y filtros activos', 'El número de ventanas abiertas', 'El tamaño de la pantalla'],
        correcta: 1,
        explicacion: 'La misma cifra puede significar cosas distintas si cambian la fuente, el periodo, la definición o los filtros.',
      },
      {
        pregunta: '¿Cuándo es válido comparar dos cifras de tableros distintos?',
        opciones: ['Siempre que sus gráficas tengan el mismo color', 'Cuando sus títulos se parezcan', 'Después de comprobar que fuente, periodo, filtros y definición son compatibles', 'Cuando una cifra sea mayor que la otra'],
        correcta: 2,
        explicacion: 'Una comparación exige comprobar que ambas cifras miden lo mismo bajo condiciones compatibles.',
      },
      {
        pregunta: 'Al cambiar un filtro visible en un tablero, ¿qué hace para explicar el nuevo resultado?',
        opciones: ['Concluye que cambió la base de datos', 'Ignora el filtro y cita solo la cifra', 'Registra qué filtro y valor están activos y comprueba qué vistas cambiaron', 'Comparte su contraseña para que otra persona revise'],
        correcta: 2,
        explicacion: 'Un filtro puede cambiar el conjunto mostrado. El hallazgo debe mencionar el filtro aplicado y las vistas que afecta.',
      },
      {
        pregunta: 'Al presentar el tablero de Metabase junto al mapa de QGIS del Día 2, ¿qué advertencia corresponde?',
        opciones: ['Que representan necesariamente los mismos registros', 'Que se pueden sumar sus cifras sin revisar nada', 'Que el mapa de práctica y el tablero pueden tener fuentes y periodos distintos', 'Que el mapa corrige cualquier error del tablero'],
        correcta: 2,
        explicacion: 'El mapa del Día 2 usa un CSV sintético. Antes de relacionarlo con un tablero institucional hay que revisar la fuente, el periodo y los límites de cada producto.',
      },
    ],
  },
}
