// Otimiza as fotos da seção "Para quem é" (corta 16:10) -> public/pq-*.jpg
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const tmp = join(__dirname, '..', '.tmp_pics')
const pub = join(__dirname, '..', 'public')

// position 'centre' para fotos com pessoas (evita cortar a pessoa); 'attention' para comida
const nomes = {
  emagrecimento: 'centre', intestino: 'attention', mulher: 'centre',
  performance: 'centre', reeducacao: 'attention', metabolica: 'attention',
}
for (const [n, pos] of Object.entries(nomes)) {
  await sharp(join(tmp, `${n}.jpg`))
    .resize(800, 500, { fit: 'cover', position: pos })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(join(pub, `pq-${n}.jpg`))
}
console.log('Fotos pq geradas:', Object.keys(nomes).join(', '))
