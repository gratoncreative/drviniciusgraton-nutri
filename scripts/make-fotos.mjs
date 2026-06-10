// Processa as fotos do Dr. Vinícius para o site (corta nos formatos certos + otimiza)
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = join(__dirname, '..', 'public')

const DL = 'C:/Users/vinic/Downloads'
const SRC = {
  hero: `${DL}/c65ea3354bfe48969774e385533fb681 (1).webp`, // séria, na mesa
  sobre: `${DL}/IMG_0417.png`,                               // sorrindo
  ambiente: `${DL}/a7fc6332-a606-42f9-8e32-5193b89bc1a8.jpg`,// panorâmica consultório
}

// Retrato 4:5 focando no rosto (attention)
await sharp(SRC.hero)
  .resize(880, 1100, { fit: 'cover', position: sharp.strategy.attention })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(join(pub, 'foto-hero.jpg'))

await sharp(SRC.sobre)
  .resize(880, 1100, { fit: 'cover', position: sharp.strategy.attention })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(join(pub, 'foto-sobre.jpg'))

// Faixa panorâmica de ambiente
await sharp(SRC.ambiente)
  .resize(1600, 540, { fit: 'cover', position: 'center' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(join(pub, 'ambiente.jpg'))

// Banner largo do HERO = foto panorâmica do consultório (escurecida no CSS)
await sharp(SRC.ambiente)
  .resize(1800, 1000, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(join(pub, 'banner-hero.jpg'))

console.log('Fotos geradas: foto-hero.jpg, foto-sobre.jpg, ambiente.jpg')
