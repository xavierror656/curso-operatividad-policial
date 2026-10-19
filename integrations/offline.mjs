import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Hace que el sitio funcione sin internet en el aula: al terminar el build
 * genera el manifest de la app y un service worker que guarda en el navegador
 * todas las páginas y archivos del sitio desde la primera visita.
 */
export default function offline({ name, shortName, themeColor = '#191b2d' }) {
  let base = '/'
  return {
    name: 'offline',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = config.base.endsWith('/') ? config.base : `${config.base}/`
      },
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir)

        const manifest = {
          name,
          short_name: shortName,
          lang: 'es-MX',
          start_url: base,
          scope: base,
          display: 'standalone',
          background_color: themeColor,
          theme_color: themeColor,
          icons: [
            { src: `${base}icon-192.png`, sizes: '192x192', type: 'image/png' },
            { src: `${base}icon-512.png`, sizes: '512x512', type: 'image/png' },
            { src: `${base}favicon.svg`, sizes: 'any', type: 'image/svg+xml' },
          ],
        }
        await writeFile(join(root, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2))

        const files = []
        const walk = async (d) => {
          for (const entry of await readdir(d, { withFileTypes: true })) {
            const full = join(d, entry.name)
            if (entry.isDirectory()) await walk(full)
            else files.push(full)
          }
        }
        await walk(root)

        // La versión cambia cuando cambia cualquier archivo, para renovar la caché
        const hash = createHash('sha256')
        const urls = []
        for (const f of files.sort()) {
          const rel = relative(root, f).split(sep).join('/')
          if (rel === 'sw.js') continue
          hash.update(rel).update(await readFile(f))
          urls.push(base + rel.replace(/(^|\/)index\.html$/, '$1'))
        }
        const version = `curso3-${hash.digest('hex').slice(0, 12)}`

        const sw = `// Generado en el build. No editar a mano.
const VERSION = ${JSON.stringify(version)}
const FILES = ${JSON.stringify(urls)}

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('curso3-') && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(request)
          .then((res) => {
            if (res.ok) {
              const copy = res.clone()
              caches.open(VERSION).then((cache) => cache.put(request, copy))
            }
            return res
          })
          .catch(() => caches.match(${JSON.stringify(base)})),
    ),
  )
})
`
        await writeFile(join(root, 'sw.js'), sw)
        logger.info(`Modo sin conexión: ${urls.length} archivos (${version})`)
      },
    },
  }
}
