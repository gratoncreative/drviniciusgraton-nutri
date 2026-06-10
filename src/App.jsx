import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { site, whatsappLink } from './data/site'
import { artigosOrdenados } from './data/artigos'
import Nav from './components/Nav'
import Reveal from './components/Reveal'
import Faq from './components/Faq'
import Materiais from './components/Materiais'
import {
  IconWhats, IconArrow, IconCheck, IconMail, IconInstagram,
  IconApple, IconGut, IconFemale, IconPulse, IconLeaf, IconHeart,
  IconMonitor, IconPin, IconClock, IconChat, IconClipboard, IconShield, IconUser, IconPlus,
} from './components/Icons'

const PLANS = [
  {
    tag: 'Presencial · Uberlândia', nome: 'Consulta presencial', preco: '500', btn: 'ghost', cta: 'Agendar presencial',
    desc: 'Avaliação completa, presencial, com acompanhamento de perto.',
    itens: ['Anamnese e avaliação detalhada', 'Plano alimentar individualizado', 'Orientações práticas para o dia a dia', 'Retornos de acompanhamento'],
    mais: 'A consulta dura cerca de 1h e inclui avaliação antropométrica, análise dos seus exames e da sua rotina. Você sai com um plano alimentar montado para a sua realidade e os próximos passos definidos. Os retornos ajustam o caminho conforme seus resultados.',
    wa: 'Olá, Dr. Vinícius! Quero agendar uma consulta PRESENCIAL em Uberlândia (R$ 500).',
  },
  {
    tag: 'Online · Todo o Brasil', nome: 'Consulta online', preco: '350', feature: true, badge: 'Mais procurada', btn: 'gold', cta: 'Agendar online',
    desc: 'A mesma profundidade do presencial, por vídeo, de onde você estiver.',
    itens: ['Consulta por vídeo, sem deslocamento', 'Plano e materiais enviados digitalmente', 'Suporte para dúvidas entre as consultas', 'Acompanhamento dos seus resultados'],
    mais: 'Atendimento por vídeo com a mesma avaliação e o mesmo plano do presencial — você recebe tudo digitalmente e conta com suporte entre as consultas. Ideal para quem mora fora de Uberlândia ou tem a rotina corrida.',
    wa: 'Olá, Dr. Vinícius! Quero agendar uma consulta ONLINE (R$ 350).',
  },
  {
    tag: 'Com plano de saúde', nome: 'Tenho plano de saúde', preco: '250', btn: 'ghost', cta: 'Agendar',
    desc: 'Valor especial para quem tem plano de saúde (atendimento via reembolso).',
    itens: ['Online ou presencial em Uberlândia', 'Recibo e documentos para reembolso', 'Plano alimentar individualizado', 'Acompanhamento dos seus resultados'],
    mais: 'Você paga o valor da consulta e recebe o recibo e a documentação para solicitar reembolso ao seu plano. O valor reembolsado varia conforme o convênio — me chame no WhatsApp que eu te oriento sobre o seu caso.',
    wa: 'Olá, Dr. Vinícius! Tenho plano de saúde e quero agendar uma consulta (R$ 250).',
  },
]

const PAINS = [
  { icon: IconApple, img: 'pq-emagrecimento.jpg', t: 'Emagrecimento', d: 'Perder peso de forma sustentável, sem dietas malucas nem efeito sanfona.',
    mais: 'Ajustamos calorias, proteína e rotina ao seu corpo. Sem passar fome e sem efeito sanfona — peso que desce e, principalmente, se mantém.' },
  { icon: IconGut, img: 'pq-intestino.jpg', t: 'Saúde intestinal', d: 'Inchaço, intestino preso, gases e desconforto — tratados pela raiz.',
    mais: 'Investigamos a causa (alimentação, flora intestinal, intolerâncias) e montamos um plano que regula o intestino e acaba com o inchaço.' },
  { icon: IconFemale, img: 'pq-mulher.jpg', t: 'Saúde da mulher', d: 'TPM, menopausa, tireoide e equilíbrio hormonal através da alimentação.',
    mais: 'Alimentação a favor dos seus hormônios em cada fase — TPM, gestação, menopausa, tireoide — para mais disposição, humor e equilíbrio.' },
  { icon: IconPulse, img: 'pq-performance.jpg', t: 'Performance', d: 'Mais energia, foco e disposição para treinar, trabalhar e viver bem.',
    mais: 'Estratégia alimentar para treino e trabalho: mais energia, foco e recuperação — do dia a dia agitado ao esporte.' },
  { icon: IconLeaf, img: 'pq-reeducacao.jpg', t: 'Reeducação alimentar', d: 'Construir uma relação saudável e leve com a comida, sem culpa.',
    mais: 'Sem proibições radicais. Construímos hábitos que cabem na sua vida e uma relação leve com a comida — para valer a longo prazo.' },
  { icon: IconHeart, img: 'pq-metabolica.jpg', t: 'Saúde metabólica', d: 'Colesterol, glicemia e pressão sob controle com comida de verdade.',
    mais: 'Ajustes alimentares que ajudam a controlar colesterol, glicemia e pressão — prevenção e saúde de verdade, com comida real.' },
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
  const [openPain, setOpenPain] = useState(-1)
  const [openPlan, setOpenPlan] = useState(-1)
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
                const open = openPain === i
                return (
                  <Reveal key={p.t} delay={i * 0.05}>
                    <article
                      className={`pain-card ${open ? 'pain-card--open' : ''}`}
                      onClick={() => setOpenPain(open ? -1 : i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenPain(open ? -1 : i) } }}
                    >
                      <div className="pain-card__media">
                        <img src={`${import.meta.env.BASE_URL}${p.img}`} alt={p.t} loading="lazy" />
                        <span className="pain-card__chip"><Icon /></span>
                      </div>
                      <div className="pain-card__body">
                        <h3>{p.t}</h3>
                        <p>{p.d}</p>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              className="pain-card__more"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.32, ease: 'easeInOut' }}
                            >
                              <p>{p.mais}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <span className="pain-card__toggle">{open ? 'Ver menos' : 'Saber mais'} <IconArrow /></span>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
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
              {PLANS.map((p, i) => {
                const open = openPlan === i
                return (
                  <Reveal key={p.nome} delay={i * 0.08}>
                    <article
                      className={`card plan ${p.feature ? 'plan--feature' : ''} ${open ? 'plan--open' : ''}`}
                      onClick={() => setOpenPlan(open ? -1 : i)}
                    >
                      {p.badge && <span className="plan__badge">{p.badge}</span>}
                      <span className="plan__tag">{p.tag}</span>
                      <h3>{p.nome}</h3>
                      <div className="plan__price"><span>R$</span>{p.preco}</div>
                      <p className="plan__desc">{p.desc}</p>
                      <ul className="plan__list">
                        {p.itens.map((it) => <li key={it}><IconCheck /> {it}</li>)}
                      </ul>
                      <span className="plan__expand">{open ? 'Ver menos' : 'Ver detalhes'} <IconPlus /></span>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            className="plan__more"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <p>{p.mais}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <a
                        className={`btn ${p.btn === 'gold' ? 'btn--gold' : 'btn--ghost'}`}
                        href={whatsappLink(p.wa)}
                        target="_blank"
                        rel="noopener"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {p.cta} <IconArrow />
                      </a>
                    </article>
                  </Reveal>
                )
              })}
            </div>

            <div className="benefits">
              {[
                { icon: IconMonitor, t: 'Sem deslocamento', d: 'Atendimento online com a mesma qualidade.' },
                { icon: IconClock, t: 'Horário flexível', d: 'Agendamos no melhor momento para você.' },
                { icon: IconChat, t: 'Suporte próximo', d: 'Você não fica sozinho entre as consultas.' },
                { icon: IconClipboard, t: 'Plano individualizado', d: 'Feito a partir do seu histórico e objetivos.' },
                { icon: IconLeaf, t: 'Sem dietas restritivas', d: 'Comida de verdade, sem sofrimento.' },
                { icon: IconPulse, t: 'Resultados acompanhados', d: 'Ajustes ao longo do processo, com você.' },
                { icon: IconShield, t: 'Profissional registrado', d: `${site.crn} — nutrição clínica.` },
                { icon: IconHeart, t: 'Atendimento humano', d: 'Escuta de verdade, sem pressa.' },
              ].map((b, i) => {
                const Icon = b.icon
                return (
                  <Reveal key={b.t} delay={i * 0.04}>
                    <div className="benefit">
                      <span className="benefit__ic"><Icon /></span>
                      <div><b>{b.t}</b><span>{b.d}</span></div>
                    </div>
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

        {/* ===================== MATERIAIS GRATUITOS ===================== */}
        <Materiais />

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
                  <a className="pain-card" href={`/dicas/${a.slug}/`}>
                    <div className="pain-card__media">
                      <img src={`${import.meta.env.BASE_URL}${a.img}`} alt={a.titulo} loading="lazy" />
                    </div>
                    <div className="pain-card__body">
                      <span className="eyebrow" style={{ marginBottom: 8, display: 'inline-block' }}>{a.categoria}</span>
                      <h3>{a.titulo}</h3>
                      <p>{a.descricao}</p>
                      <span className="pain-card__toggle">Ler artigo →</span>
                    </div>
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
