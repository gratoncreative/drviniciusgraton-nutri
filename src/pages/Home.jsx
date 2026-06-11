import Reveal from '../components/Reveal'
import { site, whatsappLink } from '../data/site'
import { IconWhats, IconArrow, IconClipboard } from '../components/Icons'
import { materiais } from '../data/materiais'

const PROOF = [
  { n: 'CRN 9.9877', d: 'Registro profissional ativo' },
  { n: '100% individual', d: 'Sem dieta de gaveta' },
  { n: 'Online + presencial', d: 'Uberlândia e todo o Brasil' },
]

const POSTS = [
  {
    slug: 'como-desinchar-a-barriga',
    img: 'blog-como-desinchar-a-barriga.jpg',
    tag: 'Saúde intestinal',
    title: 'Como desinchar a barriga de vez (sem passar fome)',
  },
  {
    slug: 'o-que-comer-para-emagrecer',
    img: 'blog-o-que-comer-para-emagrecer-com-saude.jpg',
    tag: 'Emagrecimento',
    title: 'O que comer para emagrecer com saúde',
  },
  {
    slug: 'intestino-preso-o-que-comer',
    img: 'blog-intestino-preso-o-que-comer.jpg',
    tag: 'Intestino',
    title: 'Intestino preso: o que comer (e o que evitar)',
  },
  {
    slug: 'resistencia-insulina-sinais',
    img: 'blog-resistencia-insulina-sinais.jpg',
    tag: 'Metabolismo',
    title: 'Resistência à insulina: 8 sinais que seu corpo dá',
  },
  {
    slug: 'diminuir-vontade-de-doce',
    img: 'blog-diminuir-vontade-de-doce.jpg',
    tag: 'Comportamento',
    title: 'Como diminuir a vontade de doce de vez',
  },
  {
    slug: 'cansaco-mesmo-dormindo-bem',
    img: 'blog-cansaco-mesmo-dormindo-bem.jpg',
    tag: 'Saúde',
    title: 'Cansaço mesmo dormindo bem: o que pode ser?',
  },
]

// PPM PPM PPM — posts interspersed with materials in a 3-col grid
const FEED = [
  { type: 'post', ...POSTS[0] },
  { type: 'post', ...POSTS[1] },
  { type: 'material', ...materiais[0] },
  { type: 'post', ...POSTS[2] },
  { type: 'post', ...POSTS[3] },
  { type: 'material', ...materiais[1] },
  { type: 'post', ...POSTS[4] },
  { type: 'post', ...POSTS[5] },
  { type: 'material', ...materiais[2] },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src={`${import.meta.env.BASE_URL}banner-hero.jpg`}
            alt="Dr. Vinícius Graton, nutricionista clínico"
          />
        </div>
        <div className="hero__scrim" />
        <div className="container hero__content">
          <Reveal>
            <span className="hero__badge">
              <span className="dot" /> Atendimento online e presencial em {site.cidade}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>Sua saúde merece um plano <em>feito só para você</em>.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero__lead">
              Nutrição clínica de verdade — sem dieta genérica, sem sofrimento. Emagrecimento,
              saúde intestinal, hormônios e disposição com comida real e acompanhamento de perto.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero__actions">
              <a className="btn btn--gold" href="/consultas">Agendar consulta <IconArrow /></a>
              <a className="btn btn--outline" href={whatsappLink()} target="_blank" rel="noopener">
                <IconWhats /> Falar no WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="hero__trust">
              {PROOF.map((p) => (
                <div key={p.n}><strong>{p.n}</strong><span>{p.d}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
        <a href="#conteudo" className="hero__scroll" aria-label="Rolar para ver mais"><span /></a>
      </section>

      {/* ===== CONTEÚDO ===== */}
      <section className="feed-section" id="conteudo">
        <div className="container">

          {/* Cabeçalho do feed */}
          <Reveal>
            <div className="feed-section__head">
              <span className="eyebrow">Dicas de saúde · Materiais gratuitos</span>
              <h2 className="section-title">Conteúdo para cuidar de você</h2>
            </div>
          </Reveal>

          {/* Feed: artigos + materiais intercalados */}
          <div className="feed-grid">
            {FEED.map((item, i) =>
              item.type === 'post' ? (
                <Reveal key={item.slug} delay={(i % 3) * 0.07}>
                  <a href={`/dicas/${item.slug}/`} className="feed-card feed-card--post">
                    <div className="feed-card__img">
                      <img
                        src={`${import.meta.env.BASE_URL}${item.img}`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="feed-card__body">
                      <span className="feed-card__tag">{item.tag}</span>
                      <h3 className="feed-card__title">{item.title}</h3>
                      <span className="feed-card__cta">Ler artigo <IconArrow /></span>
                    </div>
                  </a>
                </Reveal>
              ) : (
                <Reveal key={item.id} delay={(i % 3) * 0.07}>
                  <a href="/materiais" className="feed-card feed-card--material">
                    <div className="feed-card__mat-icon">
                      <IconClipboard />
                    </div>
                    <span className="feed-card__tag">{item.tag}</span>
                    <h3 className="feed-card__title">{item.titulo}</h3>
                    <p className="feed-card__mat-desc">{item.desc}</p>
                    <span className="feed-card__cta">Baixar grátis <IconArrow /></span>
                  </a>
                </Reveal>
              )
            )}
          </div>

          {/* Link para todos os artigos */}
          <Reveal>
            <div className="center" style={{ marginTop: 56 }}>
              <a href="/dicas/" className="btn btn--ghost">Ver todos os artigos <IconArrow /></a>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  )
}
