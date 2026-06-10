import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const tmp = join(__dirname, '..', '.tmp_pics')
const pub = join(__dirname, '..', 'public')
const map = {
  'blog-resistencia-insulina-sinais': 'resistencia',
  'blog-diminuir-vontade-de-doce': 'doce',
  'blog-cansaco-mesmo-dormindo-bem': 'cansaco',
}
for (const [out, src] of Object.entries(map)) {
  await sharp(join(tmp, `${src}.jpg`)).resize(1200, 675, { fit: 'cover', position: 'attention' }).jpeg({ quality: 80, mozjpeg: true }).toFile(join(pub, `${out}.jpg`))
}
console.log('Capas dos novos posts geradas')
