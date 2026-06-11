import Reveal from '../components/Reveal'
import Faq from '../components/Faq'
import { whatsappLink } from '../data/site'
import { IconWhats, IconArrow } from '../components/Icons'

const QUOTES = [
  { n: 'Mariana A.', c: 'Emagrecimento', t: 'Pela primeira vez segui um plano sem passar fome. Perdi peso e, melhor, mantive. O acompanhamento faz toda a diferença.' },
  { n: 'Rafael S.', c: 'Performance', t: 'Minha energia nos treinos mudou completamente. O Dr. Vinícius ajustou tudo à minha rotina, sem complicação.' },
  { n: 'Letícia M.', c: 'Saúde intestinal', t: 'Convivia com inchaço e desconforto há anos. Em poucas semanas senti diferença real. Profissional atencioso e detalhista.' },
]

export default function FaqPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">Dúvidas frequentes</span></Reveal>
          <Reveal delay={0.05}><h1 className="page-hero__title">Tudo o que você precisa saber antes de agendar</h1></Reveal>
          <Reveal delay={0.1}><p className="page-hero__lead">Não encontrou sua dúvida? Me chame no WhatsApp que respondo na hora.</p></Reveal>
        </div>
      </div>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <Reveal delay={0.05}><Faq /></Reveal>
          <Reveal delay={0.1}>
            <div className="center" style={{ marginTop: 48 }}>
              <a className="btn btn--gold" href={whatsappLink('Olá, Dr. Vinícius! Tenho uma dúvida antes de agendar.')} target="_blank" rel="noopener">
                <IconWhats /> Tirar dúvida no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Depoimentos */}
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
          <p className="center" style={{ color: 'rgba(255,255,255,.45)', fontSize: 13, marginTop: 24 }}>
            Depoimentos ilustrativos — substitua por relatos reais de pacientes.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta">
        <div className="container">
          <Reveal>
            <div className="cta__box">
              <h2>Ainda com dúvidas?</h2>
              <p>Me chame no WhatsApp agora — respondo pessoalmente e sem compromisso.</p>
              <div className="hero__actions" style={{ justifyContent: 'center', position: 'relative', marginTop: 32 }}>
                <a className="btn btn--gold" href={whatsappLink()} target="_blank" rel="noopener">
                  <IconWhats /> Falar agora
                </a>
                <a className="btn btn--light" href="/consultas">
                  Ver consultas e valores <IconArrow />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
