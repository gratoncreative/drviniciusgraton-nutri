// Processa imagens da Onda 2: cards "Para quem é" (perf, metab) + capas de blog
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const tmp = join(__dirname, '..', '.tmp_pics')
const pub = join(__dirname, '..', 'public')

// Cards 16:10
await sharp(join(tmp, 'perf.jpg')).resize(800, 500, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80, mozjpeg: true }).toFile(join(pub, 'pq-performance.jpg'))
await sharp(join(tmp, 'metab.jpg')).resize(800, 500, { fit: 'cover', position: 'attention' }).jpeg({ quality: 80, mozjpeg: true }).toFile(join(pub, 'pq-metabolica.jpg'))

// Capas de blog 16:9
const covers = {
  'blog-como-desinchar-a-barriga': 'blog-desinchar',
  'blog-o-que-comer-para-emagrecer-com-saude': 'blog-emagrecer',
  'blog-intestino-preso-o-que-comer': 'blog-intestino',
}
for (const [out, src] of Object.entries(covers)) {
  await sharp(join(tmp, `${src}.jpg`)).resize(1200, 675, { fit: 'cover', position: 'attention' }).jpeg({ quality: 80, mozjpeg: true }).toFile(join(pub, `${out}.jpg`))
}
console.log('Onda 2 imagens geradas')
