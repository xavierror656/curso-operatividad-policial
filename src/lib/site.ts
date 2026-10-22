import QRCode from 'qrcode'

/** Ruta interna con el prefijo configurado en Astro (raíz en el dominio personalizado). */
export const href = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`

/** URL pública completa, para códigos QR. */
export const absoluteUrl = (path: string) => new URL(href(path), import.meta.env.SITE ?? 'http://localhost:4321').href

export const qrSvg = (url: string) =>
  QRCode.toString(url, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#191b2d', light: '#ffffff' } })
