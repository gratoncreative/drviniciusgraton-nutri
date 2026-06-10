// Gera as páginas estáticas do blog "Dicas de Saúde" dentro de /dist/dicas
// Roda depois do `vite build`. Cada artigo vira uma página HTML real (bom p/ SEO).
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { artigos, artigosOrdenados, tempoLeitura } from '../src/data/artigos.js'
import { site, whatsappLink } from '../src/data/site.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const ORIGIN = 'https://drviniciusgraton.com.br'

const wa = whatsappLink()

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{--green-900:#14352a;--green-700:#1f5c43;--green-600:#2e7d5b;--gold:#d8a657;--cream:#f7f4ec;--paper:#fbfaf5;--ink:#16201b;--body:#3c4a43;--muted:#6b7a72;--line:rgba(20,53,42,.1);--head:'Fraunces',Georgia,serif;--sans:'Plus Jakarta Sans',system-ui,sans-serif}
html{scroll-behavior:smooth}
body{font-family:var(--sans);color:var(--body);background:var(--paper);line-height:1.7;font-size:18px;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{width:100%;max-width:780px;margin:0 auto;padding:0 22px}
.wrap{max-width:1100px}
h1,h2,h3{font-family:var(--head);color:var(--ink);line-height:1.15;font-weight:600;letter-spacing:-.01em}
/* header */
.nav{position:sticky;top:0;z-index:50;background:rgba(251,250,245,.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav__in{max-width:1100px;margin:0 auto;padding:14px 22px;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:11px;font-family:var(--head);font-weight:600;font-size:18px;color:var(--ink)}
.brand img{width:38px;height:38px;border-radius:11px}
.brand small{display:block;font-family:var(--sans);font-size:10.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--green-600)}
.nav__links{display:flex;gap:22px;align-items:center}
.nav__links a{font-size:15px;font-weight:500}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15px;padding:12px 22px;border-radius:100px;background:var(--green-700);color:#fff;transition:transform .2s,background .2s}
.btn:hover{background:var(--green-900);transform:translateY(-2px)}
.btn--gold{background:var(--gold);color:var(--green-900)}
@media(max-width:620px){.nav__links a:not(.btn){display:none}}
/* breadcrumb */
.crumb{font-size:14px;color:var(--muted);padding:26px 0 0}
.crumb a:hover{color:var(--green-700)}
/* article */
.post{padding:14px 0 60px}
.eyebrow{display:inline-block;font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--green-600);margin:18px 0 10px}
.post h1{font-size:clamp(30px,5vw,46px);margin-bottom:14px}
.post .meta{color:var(--muted);font-size:14.5px;margin-bottom:30px}
.post h2{font-size:clamp(22px,3vw,28px);margin:36px 0 12px}
.post p{margin:0 0 18px}
.post ul{margin:0 0 18px;padding-left:4px;list-style:none}
.post li{position:relative;padding-left:26px;margin-bottom:10px}
.post li::before{content:'';position:absolute;left:4px;top:11px;width:7px;height:7px;border-radius:50%;background:var(--gold)}
.post strong{color:var(--ink)}
.post a{color:var(--green-700);text-decoration:underline;text-underline-offset:2px}
.post a:hover{color:var(--green-900)}
.post-cta{background:var(--green-50);border:1px solid var(--green-100);border-radius:16px;padding:22px 24px;margin:30px 0}
.post-cta p{margin:0 0 14px;font-size:16px;color:var(--ink)}
.author-box{display:flex;gap:18px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:20px;padding:24px;margin:42px 0 6px}
.author-box img{width:74px;height:74px;border-radius:16px;object-fit:cover;flex:none}
.author-box b{font-family:var(--head);font-size:18px;color:var(--ink);display:block}
.author-box>div>span{font-size:13.5px;color:var(--green-700);font-weight:700;display:block;margin:2px 0 8px}
.author-box p{font-size:14.5px;color:var(--muted);margin:0 0 4px;max-width:60ch}
@media(max-width:540px){.author-box{flex-direction:column}}
/* cta */
.cta{background:linear-gradient(150deg,var(--green-700),var(--green-900));color:#fff;border-radius:22px;padding:38px 30px;text-align:center;margin:46px 0}
.cta h3{color:#fff;font-size:26px;margin-bottom:10px}
.cta p{color:rgba(255,255,255,.85);margin-bottom:22px;font-size:16px}
/* listing */
.hero-blog{background:radial-gradient(120% 90% at 85% -10%,#dcefe2 0,transparent 55%),var(--paper);padding:54px 0 30px}
.hero-blog h1{font-size:clamp(32px,5vw,52px)}
.hero-blog p{color:var(--muted);font-size:19px;margin-top:14px;max-width:54ch}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;padding:36px 0 60px}
@media(max-width:680px){.grid{grid-template-columns:1fr}}
.card{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:0 2px 10px rgba(14,36,28,.06);transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column}
.card__cover{aspect-ratio:16/9;overflow:hidden}
.card__cover img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
.card:hover .card__cover img{transform:scale(1.06)}
.card__body{padding:24px 26px 26px;display:flex;flex-direction:column;flex:1}
.post__cover{border-radius:18px;overflow:hidden;margin:8px 0 28px;aspect-ratio:16/9}
.post__cover img{width:100%;height:100%;object-fit:cover;display:block}
.card:hover{transform:translateY(-4px);box-shadow:0 18px 50px rgba(14,36,28,.12)}
.card .eyebrow{margin-top:0}
.card h2{font-size:22px;margin-bottom:10px}
.card p{color:var(--muted);font-size:15.5px;flex:1}
.card .more{margin-top:18px;font-weight:600;color:var(--green-700);font-size:15px}
.related{border-top:1px solid var(--line);padding-top:30px;margin-top:10px}
.related h3{font-size:20px;margin-bottom:16px}
.related a{display:block;padding:12px 0;border-bottom:1px solid var(--line);font-family:var(--head);font-size:18px;color:var(--ink)}
.related a:hover{color:var(--green-700)}
/* footer */
.footer{background:#0e241c;color:rgba(255,255,255,.72);padding:46px 0 26px;margin-top:30px}
.footer .brand{color:#fff;margin-bottom:12px}
.footer a:hover{color:var(--gold)}
.footer .fb{border-top:1px solid rgba(255,255,255,.1);margin-top:26px;padding-top:18px;font-size:13px}
.wa-float{position:fixed;right:20px;bottom:20px;z-index:60;width:58px;height:58px;border-radius:50%;background:#25D366;display:grid;place-items:center;box-shadow:0 10px 30px rgba(37,211,102,.45)}
.wa-float svg{width:30px;height:30px;fill:#fff}
`

const WHATS_SVG = `<svg viewBox="0 0 24 24"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.05 20.15a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>`

const head = (titulo, descricao, canonical, jsonld, ogImg) => `<!doctype html><html lang="pt-BR"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${titulo}</title>
<meta name="description" content="${descricao}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#14352a">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:type" content="article"><meta property="og:locale" content="pt_BR">
<meta property="og:title" content="${titulo}"><meta property="og:description" content="${descricao}">
<meta property="og:url" content="${canonical}"><meta property="og:image" content="${ORIGIN}/${ogImg || 'og.jpg'}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head><body>`

const header = `<header class="nav"><div class="nav__in">
<a class="brand" href="/"><img src="/logo-mark.svg" alt=""><span>Dr. Vinícius Graton<small>Nutricionista Clínico</small></span></a>
<nav class="nav__links"><a href="/">Início</a><a href="/dicas/">Dicas</a><a class="btn" href="${wa}" target="_blank" rel="noopener">Agendar</a></nav>
</div></header>`

const ctaBox = `<div class="cta"><h3>Quer um plano feito só para você?</h3><p>Agende sua consulta — atendimento online e presencial em ${site.cidade}.</p><a class="btn btn--gold" href="${wa}" target="_blank" rel="noopener">Agendar pelo WhatsApp</a></div>`

const authorBox = `<div class="author-box">
<img src="/foto-hero.jpg" alt="${site.nome}, nutricionista clínico ${site.crn}">
<div><b>${site.nome}</b><span>Nutricionista Clínico · ${site.crn}</span>
<p>Nutrição clínica individualizada — emagrecimento, saúde intestinal, hormônios e performance. Atende em ${site.cidade} e online para todo o Brasil.</p>
<a class="btn btn--gold" href="${wa}" target="_blank" rel="noopener" style="margin-top:6px">Agendar consulta</a></div></div>`

const ano = new Date().getFullYear()
const footerFinal = `<footer class="footer"><div class="container wrap">
<div class="brand"><img src="/logo-mark.svg" alt="" style="width:36px;height:36px;border-radius:10px"> Dr. Vinícius Graton</div>
<p style="font-size:15px;max-width:46ch">Nutrição clínica individualizada — emagrecimento, saúde intestinal, hormônios e performance. ${site.cidade} e online.</p>
<p style="margin-top:12px"><a href="/">Início</a> · <a href="/dicas/">Dicas de Saúde</a> · <a href="${wa}" target="_blank" rel="noopener">WhatsApp</a></p>
<div class="fb">© ${ano} Dr. Vinícius Graton · ${site.crn}</div>
</div></footer>
<a class="wa-float" href="${wa}" target="_blank" rel="noopener" aria-label="WhatsApp">${WHATS_SVG}</a>
</body></html>`

// ---- Página de artigo ----
function artigoHTML(a, idx) {
  const url = `${ORIGIN}/dicas/${a.slug}/`
  const min = tempoLeitura(a.html)
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: a.titulo, description: a.descricao, datePublished: a.dataISO,
    author: { '@type': 'Person', name: site.nome, jobTitle: 'Nutricionista Clínico', identifier: site.crn, url: ORIGIN },
    publisher: { '@type': 'Organization', name: 'Dr. Vinícius Graton', logo: { '@type': 'ImageObject', url: `${ORIGIN}/logo-mark.svg` } },
    mainEntityOfPage: url, image: `${ORIGIN}/${a.img || 'og.jpg'}`, inLanguage: 'pt-BR',
    about: { '@type': 'MedicalCondition', name: a.categoria },
  }
  const outros = artigosOrdenados.filter((x) => x.slug !== a.slug).slice(0, 3)
  const related = outros.length
    ? `<div class="related"><h3>Veja também</h3>${outros.map((o) => `<a href="/dicas/${o.slug}/">${o.titulo}</a>`).join('')}</div>`
    : ''
  return head(`${a.titulo} | Dr. Vinícius Graton`, a.descricao, url, jsonld, a.img) + header +
    `<main class="container"><div class="crumb"><a href="/">Início</a> › <a href="/dicas/">Dicas</a> › ${a.categoria}</div>
     <article class="post"><span class="eyebrow">${a.categoria}</span><h1>${a.titulo}</h1>
     <div class="meta">Por <strong>${site.nome}</strong> · ${site.crn} · ${a.data} · ${min} min de leitura</div>
     ${a.img ? `<div class="post__cover"><img src="/${a.img}" alt="${a.titulo}"></div>` : ''}
     ${a.html}
     ${authorBox}
     ${ctaBox}
     ${related}
     </article></main>` + footerFinal
}

// ---- Página de listagem ----
function listaHTML() {
  const url = `${ORIGIN}/dicas/`
  const cards = artigosOrdenados.map((a) => `<a class="card" href="/dicas/${a.slug}/">
    ${a.img ? `<div class="card__cover"><img src="/${a.img}" alt="${a.titulo}" loading="lazy"></div>` : ''}
    <div class="card__body"><span class="eyebrow">${a.categoria}</span><h2>${a.titulo}</h2><p>${a.descricao}</p>
    <span class="more">Ler artigo →</span></div></a>`).join('')
  return head('Dicas de Saúde | Dr. Vinícius Graton', 'Artigos de nutrição clínica do Dr. Vinícius Graton: emagrecimento, saúde intestinal, hormônios e hábitos para viver melhor.', url) + header +
    `<section class="hero-blog"><div class="container wrap"><h1>Dicas de Saúde</h1><p>Conteúdo de nutrição clínica para você comer melhor, desinchar, emagrecer com saúde e cuidar do seu corpo — sem dietas malucas.</p></div></section>
     <main class="container wrap"><div class="grid">${cards}</div>${ctaBox}</main>` + footerFinal
}

// ---- Sitemap ----
function sitemap() {
  const urls = [
    { loc: `${ORIGIN}/`, p: '1.0' },
    { loc: `${ORIGIN}/dicas/`, p: '0.8' },
    ...artigosOrdenados.map((a) => ({ loc: `${ORIGIN}/dicas/${a.slug}/`, p: '0.7', lastmod: a.dataISO })),
  ]
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.p}</priority></url>`).join('\n') +
    `\n</urlset>\n`
}

// ---- Escrever ----
await mkdir(join(DIST, 'dicas'), { recursive: true })
await writeFile(join(DIST, 'dicas', 'index.html'), listaHTML())
for (let i = 0; i < artigos.length; i++) {
  await mkdir(join(DIST, 'dicas', artigos[i].slug), { recursive: true })
  await writeFile(join(DIST, 'dicas', artigos[i].slug, 'index.html'), artigoHTML(artigos[i], i))
}
await writeFile(join(DIST, 'sitemap.xml'), sitemap())
console.log(`Blog gerado: ${artigos.length} artigos + listagem + sitemap`)
