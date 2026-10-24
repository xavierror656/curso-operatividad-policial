export type EstadoAccesosMetabase = 'pendiente' | 'activo' | 'caducado'

/** Datos públicos. Las contraseñas y el paquete privado se administran fuera del sitio. */
export const accesosMetabase: {
  estado: EstadoAccesosMetabase
  activado: string | null
  caduca: string | null
  bajaProgramadaVerificada: boolean
  vigenciaDias: number
  zonaHoraria: string
  url: string
  usuarios: { numero: number; usuario: string }[]
} = {
  estado: 'activo',
  activado: '2026-10-24T04:38:18Z',
  caduca: '2026-10-31T04:38:18Z',
  bajaProgramadaVerificada: true,
  vigenciaDias: 7,
  zonaHoraria: 'America/Ciudad_Juarez',
  url: 'https://estadisticas.floresjavier.com/',
  usuarios: Array.from({ length: 50 }, (_, index) => {
    const numero = index + 1
    return { numero, usuario: `usuario${String(numero).padStart(2, '0')}@floresjavier.com` }
  }),
}

/** Estado informativo de la página; la baja efectiva debe ejecutarse en Metabase. */
export function obtenerEstadoAccesosMetabase(ahora = Date.now()): EstadoAccesosMetabase {
  if (accesosMetabase.estado === 'caducado') return 'caducado'
  const activado = Date.parse(accesosMetabase.activado ?? '')
  const caduca = Date.parse(accesosMetabase.caduca ?? '')
  if (
    accesosMetabase.estado !== 'activo' ||
    !accesosMetabase.bajaProgramadaVerificada ||
    !Number.isFinite(activado) ||
    !Number.isFinite(caduca) ||
    activado > ahora ||
    caduca <= activado
  ) return 'pendiente'
  return ahora >= caduca ? 'caducado' : 'activo'
}
