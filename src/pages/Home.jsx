import Reveal from '../components/Reveal'
import { site, whatsappLink } from '../data/site'
import { IconWhats, IconArrow, IconCheck } from '../components/Icons'

const PROOF = [
  { n: 'CRN 9.9877', d: 'Registro profissional ativo' },
  { n: '100% individual', d: 'Sem dieta de gaveta' },
  { n: 'Online + presencial', d: 'Uberlândia e todo o Brasil' },
]

const PORTAL = [
  {
    href: '/especialidades',
    img: 'pq-performance.jpg',
    eyebrow: 'Especialidades',
    title: 'Para quem é este trabalho?',
    desc: 'Emagrecimento, intestino, hormônios, performance e muito mais.',
    big: true,
  },
  {
    href: '/consultas',
    img: 'foto-sobre.jpg',
    eyebrow: 'Consultas e valores',
    title: 'Atendimento online e presencial',
    desc: 'Veja os formatos e agende sua consulta.',
  },
  {
    href: '/materiais',
    img: 'pq-reeducacao.jpg',
    eyebrow: 'Materiais gratuitos',
    title: 'Ferramentas práticas para começar hoje',
    desc: 'PDFs gratuitos para dar o primeiro passo.',
  },
  {
    href: '/dicas/',
    img: 'pq-mulher.jpg',
    eyebrow: 'Blog · Dicas de Saúde',
    title: 'Conteúdo para cuidar de você',
    desc: 'Artigos baseados em ciência e prática clínica.',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <img src={`${import.meta.env.BASE_URL}banner-hero.jpg`} alt="Dr. Vinícius Graton, nutricionista clínico" />
        </div>
        <div className="hero__scrim" />
        <div className="container hero__content">
          <Reveal>
            <span className="hero__badge"><span className="dot" /> Atendimento online e presencial em {site.cidade}</span>
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
              <a className="btn btn--outline" href={whatsappLink()} target="_blank" rel="noopener"><IconWhats /> Falar no WhatsApp</a>
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
        <a href="#portal" className="hero__scroll" aria-label="Rolar para ver mais"><span /></a>
      </section>

      {/* ===== PORTAL ===== */}
      <section className="portal-section" id="portal">
        <div className="container">
          <Reveal>
            <div className="portal-section__head">
              <span className="eyebrow">Navegue</span>
              <h2 className="section-title" style={{ maxWidth: '26ch', margin: '14px auto 0' }}>
                Por onde você quer começar?
              </h2>
            </div>
          </Reveal>

          <div className="portal">
            {PORTAL.map((card, i) => (
              <Reveal key={card.href} delay={i * 0.07}>
                <a
                  href={card.href}
                  className={`portal-card${card.big ? ' portal-card--big' : ''}`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${card.img}`}
                    alt={card.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="portal-card__overlay" />
                  <div className="portal-card__content">
                    <span className="portal-card__eyebrow">{card.eyebrow}</span>
                    <h3 className="portal-card__title">{card.title}</h3>
                    <p className="portal-card__desc">{card.desc}</p>
                    <span className="portal-card__arrow">
                      Explorar <IconArrow />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
