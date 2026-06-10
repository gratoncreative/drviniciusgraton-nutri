// Gera a imagem de compartilhamento social (Open Graph) em public/og.jpg
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = join(__dirname, '..', 'public', 'og.jpg')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1b4634"/>
      <stop offset="1" stop-color="#0e241c"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.6">
      <stop offset="0" stop-color="#d8a657" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#d8a657" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- monograma -->
  <g transform="translate(90,86) scale(1.7)">
    <rect width="64" height="64" rx="15" fill="#eef7f0"/>
    <path d="M32 11 C 20 22, 20 42, 32 53 C 44 42, 44 22, 32 11 Z" fill="#1f5c43"/>
    <path d="M24.4 21 L32 43.5 L39.6 21" fill="none" stroke="#d8a657" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 43.5 L32 50" fill="none" stroke="#eef7f0" stroke-width="3.1" stroke-linecap="round"/>
  </g>

  <text x="92" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="86" font-weight="700" fill="#ffffff">Dr. Vinícius Graton</text>
  <rect x="96" y="332" width="70" height="6" rx="3" fill="#d8a657"/>
  <text x="180" y="345" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="6" fill="#eccf9a">NUTRIÇÃO CLÍNICA</text>

  <text x="92" y="430" font-family="Arial, sans-serif" font-size="34" fill="#dcefe2">Emagrecimento · Saúde intestinal · Hormônios · Performance</text>
  <text x="92" y="482" font-family="Arial, sans-serif" font-size="30" fill="#9fc3ad">Atendimento em Uberlândia/MG e online para todo o Brasil</text>

  <g transform="translate(92,548)">
    <rect width="270" height="54" rx="27" fill="#d8a657"/>
    <text x="135" y="36" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#0e241c">Agende sua consulta</text>
  </g>
  <text x="392" y="584" font-family="Arial, sans-serif" font-size="24" fill="#9fc3ad">drviniciusgraton.com.br</text>
</svg>`

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(out)
console.log('OG image gerada em', out)
