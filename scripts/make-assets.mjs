// Gera ícones PNG a partir do monograma: foto de perfil para redes + apple-touch-icon
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = join(__dirname, '..', 'public')

// Avatar quadrado para redes sociais (fundo verde cheio + folha grande)
const avatar = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#246b4e"/><stop offset="1" stop-color="#0e241c"/>
  </linearGradient></defs>
  <rect width="100" height="100" fill="url(#g)"/>
  <g transform="translate(6.8,6.8) scale(1.35)">
    <path d="M32 11 C 20 22, 20 42, 32 53 C 44 42, 44 22, 32 11 Z" fill="#eef7f0"/>
    <path d="M24.4 21 L32 43.5 L39.6 21" fill="none" stroke="#d8a657" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 43.5 L32 50" fill="none" stroke="#eef7f0" stroke-width="3.1" stroke-linecap="round"/>
  </g>
</svg>`

// Apple touch icon (badge arredondado, igual ao favicon)
const touch = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#246b4e"/><stop offset="1" stop-color="#13392c"/>
  </linearGradient></defs>
  <rect width="64" height="64" rx="14" fill="url(#b)"/>
  <path d="M32 11 C 20 22, 20 42, 32 53 C 44 42, 44 22, 32 11 Z" fill="#eef7f0"/>
  <path d="M24.4 21 L32 43.5 L39.6 21" fill="none" stroke="#d8a657" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32 43.5 L32 50" fill="none" stroke="#1f5c43" stroke-width="3.1" stroke-linecap="round"/>
</svg>`

await sharp(Buffer.from(avatar(1080))).png().toFile(join(pub, 'perfil-redes-1080.png'))
await sharp(Buffer.from(touch)).png().toFile(join(pub, 'apple-touch-icon.png'))
await sharp(Buffer.from(touch)).resize(512, 512).png().toFile(join(pub, 'icon-512.png'))
await sharp(Buffer.from(touch)).resize(192, 192).png().toFile(join(pub, 'icon-192.png'))
console.log('Assets PNG gerados: perfil-redes-1080, apple-touch-icon, icon-512, icon-192')
