import { useEffect } from 'react'
import Lenis from 'lenis'
import { site, whatsappLink } from './data/site'
import { artigosOrdenados } from './data/artigos'
import Nav from './components/Nav'
import Reveal from './components/Reveal'
import Faq from './components/Faq'
import {
  IconWhats, IconArrow, IconCheck, IconMail, IconInstagram,
  IconScale, IconGut, IconFemale, IconPulse, IconLeaf, IconHeart,
  IconMonitor, IconPin, IconClock, IconChat, IconClipboard, IconShield, IconUser,
} from './components/Icons'

const PAINS = [
  { icon: IconScale, t: 'Emagrecimento', d: 'Perder peso de forma sustentável, sem dietas malucas nem efeito sanfona.' },
  { icon: IconGut, t: 'Saúde intestinal', d: 'Inchaço, intestino preso, gases e desconforto — tratados pela raiz.' },
  { icon: IconFemale, t: 'Saúde da mulher', d: 'TPM, menopausa, tireoide e equilíbrio hormonal através da alimentação.' },
  { icon: IconPulse, t: 'Performance', d: 'Mais energia, foco e disposição para treinar, trabalhar e viver bem.' },
  { icon: IconLeaf, t: 'Reeducação alimentar', d: 'Construir uma relação saudável e leve com a comida, sem culpa.' },
  { icon: IconHeart, t: 'Saúde metabólica', d: 'Colesterol, glicemia e pressão sob controle com comida de verdade.' },
]

const STEPS = [
  { t: 'Agende pelo WhatsApp', d: 'Você fala comigo, tira dúvidas e escolhe o melhor horário — online ou presencial.' },
  { t: 'Avaliação completa', d: 'Analisamos histórico, exames, rotina e objetivos. Entendo você por inteiro.' },
  { t: 'Plano individualizado', d: 'Você recebe um plano feito para a sua vida real, com comida de verdade.' },
  { t: 'Acompanhamento', d: 'Ajustamos o caminho juntos até o resultado virar hábito que se sustenta.' },
]

const PROOF = [
  { n: 'CRN 9.9877', d: 'Registro profissional ativo' },
  { n: '100% individual', d: 'Sem dieta de gaveta' },
  { n: 'Online + presencial', d: 'Uberlândia e todo o Brasil' },
]

const QUOTES = [
  { n: 'Mariana A.', c: 'Emagrecimento', t: 'Pela primeira vez segui um plano sem passar fome. Perdi peso e, melhor, mantive. O acompanhamento faz toda a diferença.' },
  { n: 'Rafael S.', c: 'Performance', t: 'Minha energia nos treinos mudou completamente. O Dr. Vinícius ajustou tudo à minha rotina, sem complicação.' },
  { n: 'Letícia M.', c: 'Saúde intestinal', t: 'Convivia com inchaço e desconforto há anos. Em poucas semanas senti diferença real. Profissional atencioso e detalhista.' },
]

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    // âncoras com scroll suave
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) { e.preventDefault(); lenis.scrollTo(id, { offset: -80 }) }
    }
    document.addEventListener('click', onClick)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); document.removeEventListener('click', onClick) }
  }, [])

  return (
    <>
      <Nav />
      <main id="topo">

        {/* ===================== HERO (banner imersivo) ===================== */}
        <section className="hero">
          <div className="hero__bg">
            <img src={`${import.meta.env.BASE_URL}banner-hero.jpg`} alt="Dr. Vinícius Graton, nutricionista clínico, em seu consultório" />
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
                <a className="btn btn--gold" href="#servicos">Agendar consulta <IconArrow /></a>
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
          <a href="#para-quem" className="hero__scroll" aria-label="Rolar para ver mais"><span /></a>
        </section>

        {/* ===================== FAIXA ===================== */}
        <div className="strip">
          <div className="container strip__inner">
            {['Avaliação completa', 'Sem dietas restritivas', 'Acompanhamento próximo', 'Atendimento humanizado'].map((s) => (
              <span key={s} className="strip__item"><IconCheck /> {s}</span>
            ))}
          </div>
        </div>

        {/* ===================== PARA QUEM É ===================== */}
        <section className="section" id="para-quem">
          <div className="container">
            <div className="center">
              <Reveal><span className="eyebrow">Para quem é</span></Reveal>
              <Reveal delay={0.05}><h2 className="section-title">Se você se identifica com algum desses pontos, posso te ajudar</h2></Reveal>
            </div>
            <div className="grid-3">
              {PAINS.map((p, i) => {
                const Icon = p.icon
                return (
                  <Reveal key={p.t} delay={i * 0.05}>
                    <article className="card pain">
                      <div className="pain__icon"><Icon /></div>
                      <h3>{p.t}</h3>
                      <p>{p.d}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===================== QUEM SOU ===================== */}
        <section className="section about" id="sobre">
          <div className="container about__grid">
            <Reveal className="about__photo">
              <img src={`${import.meta.env.BASE_URL}foto-hero.jpg`} alt="Dr. Vinícius Graton, nutricionista clínico" width="880" height="1100" />
            </Reveal>
            <div>
              <Reveal><span className="eyebrow">Quem sou</span></Reveal>
              <Reveal delay={0.05}><h2 className="section-title">Dr. Vinícius Graton, nutricionista clínico</h2></Reveal>
              <Reveal delay={0.1}>
                <p>
                  Acredito que nutrição não é sobre proibir — é sobre construir, junto com você,
                  um jeito de comer que faça sentido para a sua vida, o seu corpo e a sua rotina.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Cada plano que entrego é individualizado: parte do seu histórico, dos seus exames
                  e dos seus objetivos reais. Nada de fórmula pronta. O foco é resultado que se sustenta
                  e uma relação leve e saudável com a comida.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="about__creds">
                  <span className="about__cred"><IconShield /> {site.crn}</span>
                  <span className="about__cred"><IconClipboard /> Nutrição clínica individualizada</span>
                  <span className="about__cred"><IconPin /> {site.cidade} + Online</span>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="hero__actions">
                  <a className="btn btn--primary" href={whatsappLink()} target="_blank" rel="noopener"><IconWhats /> Falar comigo</a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================== PROCESSO ===================== */}
        <section className="section" id="processo">
          <div className="container">
            <div className="center">
              <Reveal><span className="eyebrow">Como funciona</span></Reveal>
              <Reveal delay={0.05}><h2 className="section-title">Um caminho simples, do primeiro contato ao resultado</h2></Reveal>
            </div>
            <div className="steps">
              {STEPS.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.08}>
                  <div className="step">
                    <div className="step__num">{i + 1}</div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="center" style={{ marginTop: 50 }}>
                <a className="btn btn--primary" href="#servicos">Ver atendimentos e valores <IconArrow /></a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== SERVIÇOS / ATENDIMENTOS ===================== */}
        <section className="section" id="servicos" style={{ background: 'var(--cream)' }}>
          <div className="container">
            <div className="center">
              <Reveal><span className="eyebrow">Atendimentos</span></Reveal>
              <Reveal delay={0.05}><h2 className="section-title">Escolha o formato que combina com você</h2></Reveal>
            </div>
            <div className="plans">
              <Reveal>
                <article className="card plan">
                  <span className="plan__tag">Presencial · Uberlândia</span>
                  <h3>Consulta presencial</h3>
                  <div className="plan__price"><span>R$</span>500</div>
                  <p className="plan__desc">Avaliação completa, presencial, com acompanhamento de perto.</p>
                  <ul className="plan__list">
                    <li><IconCheck /> Anamnese e avaliação detalhada</li>
                    <li><IconCheck /> Plano alimentar individualizado</li>
                    <li><IconCheck /> Orientações práticas para o dia a dia</li>
                    <li><IconCheck /> Retornos de acompanhamento</li>
                  </ul>
                  <a className="btn btn--ghost" href={whatsappLink('Olá, Dr. Vinícius! Quero agendar uma consulta PRESENCIAL em Uberlândia (R$ 500).')} target="_blank" rel="noopener">
                    Agendar presencial <IconArrow />
                  </a>
                </article>
              </Reveal>
              <Reveal delay={0.08}>
                <article className="card plan plan--feature">
                  <span className="plan__badge">Mais procurada</span>
                  <span className="plan__tag">Online · Todo o Brasil</span>
                  <h3>Consulta online</h3>
                  <div className="plan__price"><span>R$</span>350</div>
                  <p className="plan__desc">A mesma profundidade do presencial, por vídeo, de onde você estiver.</p>
                  <ul className="plan__list">
                    <li><IconCheck /> Consulta por vídeo, sem deslocamento</li>
                    <li><IconCheck /> Plano e materiais enviados digitalmente</li>
                    <li><IconCheck /> Suporte para dúvidas entre as consultas</li>
                    <li><IconCheck /> Acompanhamento dos seus resultados</li>
                  </ul>
                  <a className="btn btn--gold" href={whatsappLink('Olá, Dr. Vinícius! Quero agendar uma consulta ONLINE (R$ 350).')} target="_blank" rel="noopener">
                    Agendar online <IconArrow />
                  </a>
                </article>
              </Reveal>
              <Reveal delay={0.16}>
                <article className="card plan">
                  <span className="plan__tag">Com plano de saúde</span>
                  <h3>Tenho plano de saúde</h3>
                  <div className="plan__price"><span>R$</span>250</div>
                  <p className="plan__desc">Valor especial para quem tem plano de saúde (atendimento via reembolso).</p>
                  <ul className="plan__list">
                    <li><IconCheck /> Online ou presencial em Uberlândia</li>
                    <li><IconCheck /> Recibo e documentos para reembolso</li>
                    <li><IconCheck /> Plano alimentar individualizado</li>
                    <li><IconCheck /> Acompanhamento dos seus resultados</li>
                  </ul>
                  <a className="btn btn--ghost" href={whatsappLink('Olá, Dr. Vinícius! Tenho plano de saúde e quero agendar uma consulta (R$ 250).')} target="_blank" rel="noopener">
                    Agendar <IconArrow />
                  </a>
                </article>
              </Reveal>
            </div>

            <div className="grid-3" style={{ marginTop: 24 }}>
              {[
                { icon: IconMonitor, t: 'Sem deslocamento', d: 'Atendimento online com a mesma qualidade.' },
                { icon: IconClock, t: 'Horário flexível', d: 'Agendamos no melhor momento para você.' },
                { icon: IconChat, t: 'Suporte próximo', d: 'Você não fica sozinho entre as consultas.' },
              ].map((b, i) => {
                const Icon = b.icon
                return (
                  <Reveal key={b.t} delay={i * 0.06}>
                    <article className="card pain">
                      <div className="pain__icon"><Icon /></div>
                      <h3>{b.t}</h3>
                      <p>{b.d}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===================== DEPOIMENTOS ===================== */}
        <section className="section quotes">
          <div className="container">
            <div className="center">
              <Reveal><span className="eyebrow">Resultados</span></Reveal>
              <Reveal delay={0.05}><h2 className="section-title">Histórias de quem decidiu cuidar da saúde</h2></Reveal>
            </div>
            <div className="grid-3">
              {QUOTES.map((q, i) => (
                <Reveal key={q.n} delay={i * 0.08}>
                  <article className="quote">
                    <div className="quote__stars">★★★★★</div>
                    <p>"{q.t}"</p>
                    <div className="quote__by">
                      <span className="quote__av">{q.n[0]}</span>
                      <div><b>{q.n}</b><span>{q.c}</span></div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="center" style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 28 }}>
              Depoimentos ilustrativos — substitua por relatos reais de pacientes.
            </p>
          </div>
        </section>

        {/* ===================== DICAS (BLOG) ===================== */}
        <section className="section" id="dicas" style={{ background: 'var(--cream)' }}>
          <div className="container">
            <div className="center">
              <Reveal><span className="eyebrow">Dicas de Saúde</span></Reveal>
              <Reveal delay={0.05}><h2 className="section-title">Conteúdo para você cuidar da sua saúde</h2></Reveal>
            </div>
            <div className="grid-3">
              {artigosOrdenados.slice(0, 3).map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.05}>
                  <a className="card pain" href={`/dicas/${a.slug}/`} style={{ display: 'block', height: '100%' }}>
                    <span className="eyebrow" style={{ marginBottom: 10 }}>{a.categoria}</span>
                    <h3>{a.titulo}</h3>
                    <p>{a.descricao}</p>
                    <span style={{ marginTop: 16, display: 'inline-block', fontWeight: 600, color: 'var(--green-700)' }}>Ler artigo →</span>
                  </a>
                </Reveal>
              ))}
            </div>
            <div className="center" style={{ marginTop: 32 }}>
              <a className="btn btn--ghost" href="/dicas/">Ver todas as dicas</a>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="section" id="faq">
          <div className="container">
            <div className="center">
              <Reveal><span className="eyebrow">Dúvidas frequentes</span></Reveal>
              <Reveal delay={0.05}><h2 className="section-title">Tudo o que você precisa saber antes de agendar</h2></Reveal>
            </div>
            <Reveal delay={0.1}><Faq /></Reveal>
          </div>
        </section>

        {/* ===================== CTA FINAL ===================== */}
        <section className="cta">
          <div className="container">
            <Reveal>
              <div className="cta__box">
                <h2>Pronto para dar o primeiro passo?</h2>
                <p>Chame no WhatsApp, tire suas dúvidas e agende sua consulta. Sua saúde não precisa esperar.</p>
                <div className="hero__actions">
                  <a className="btn btn--gold" href={whatsappLink()} target="_blank" rel="noopener">
                    <IconWhats /> Agendar minha consulta
                  </a>
                  <a className="btn btn--light" href={`mailto:${site.email}`}>
                    <IconMail /> Enviar e-mail
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__brand"><img className="nav__mark" src={`${import.meta.env.BASE_URL}logo-mark.svg`} alt="" width="42" height="42" /> Dr. Vinícius Graton</div>
              <p>Nutrição clínica individualizada — emagrecimento, saúde intestinal, hormônios e performance. Atendimento em {site.cidade} e online para todo o Brasil.</p>
              <p style={{ marginTop: 14, fontSize: 14 }}>{site.crn}</p>
            </div>
            <div>
              <h4>Navegação</h4>
              <div className="footer__links">
                <a href="#sobre">Quem sou</a>
                <a href="#para-quem">Para quem é</a>
                <a href="#processo">Como funciona</a>
                <a href="#servicos">Atendimentos</a>
                <a href="/dicas/">Dicas de Saúde</a>
                <a href="#faq">Dúvidas</a>
              </div>
            </div>
            <div>
              <h4>Contato</h4>
              <div className="footer__links">
                <a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} {site.nome} · {site.crn}</span>
            <span>Feito com cuidado · Nutrição clínica</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        <IconWhats />
      </a>
    </>
  )
}
