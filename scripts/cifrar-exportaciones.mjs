import { createCipheriv, pbkdf2Sync, randomBytes, webcrypto } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

// Formato: C3E1 (4 bytes) + sal (16) + IV (12) + AES-256-GCM (datos + etiqueta).
// La contraseña no se guarda en el repositorio ni en el sitio.
const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const source = resolve(root, '..', '03 Materiales de sesion', 'Exportaciones SSPM 2.0 - 2026-10-21', '2026 acumulado - CENTRO')
const destination = resolve(root, 'public', 'datos-protegidos')
const names = [
  'ubicaciones-centro-2026.csv',
  'clasificacion-hechos-centro-2026.csv',
  'consolidados-centro-2026.csv',
]
const password = process.env.CURSO_EXPORT_PASSWORD || randomBytes(24).toString('base64url')
if (password.length < 20) throw new Error('La contraseña debe tener al menos 20 caracteres.')
await mkdir(destination, { recursive: true })

for (const name of names) {
  const plain = await readFile(resolve(source, name))
  const salt = randomBytes(16)
  const iv = randomBytes(12)
  const key = pbkdf2Sync(password, salt, 400_000, 32, 'sha256')
  const cipher = createCipheriv('aes-256-gcm', key, iv)
  const encrypted = Buffer.concat([cipher.update(plain), cipher.final(), cipher.getAuthTag()])
  const output = Buffer.concat([Buffer.from('C3E1'), salt, iv, encrypted])
  const material = await webcrypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey'])
  const browserKey = await webcrypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 400_000, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  )
  const check = Buffer.from(await webcrypto.subtle.decrypt({ name: 'AES-GCM', iv }, browserKey, encrypted))
  if (!plain.equals(check)) throw new Error(`No se pudo verificar el cifrado de ${name}`)
  await writeFile(resolve(destination, `${name}.c3e`), output)
  console.log(`${name}: ${plain.length} bytes cifrados`)
}

console.log(`CLAVE_DE_DESCARGA=${password}`)
