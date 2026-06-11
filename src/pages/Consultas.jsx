import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { site, whatsappLink } from '../data/site'
import {
  IconArrow, IconCheck, IconWhats,
  IconMonitor, IconClock, IconChat, IconClipboard, IconLeaf, IconPulse, IconShield, IconHeart, IconPlus,
} from '../components/Icons'

const PLANS = [
  {
    tag: 'Presencial · Uberlândia', nome: 'Consulta presencial', preco: '500', btn: 'ghost', cta: 'Agendar presencial',
    desc: 'Avaliação completa, presencial, com acompanhamento de perto.',
    itens: ['Anamnese e avaliação detalhada', 'Plano alimentar individualizado', 'Orientações práticas para o dia a dia', 'Retornos de acompanhamento'],
    mais: 'A consulta dura cerca de 1h e inclui avaliação antropométrica, análise dos seus exames e da sua rotina. Você sai com um plano alimentar montado para a sua realidade e os próximos passos definidos.',
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
    mais: 'Você paga o valor da consulta e recebe o recibo e a documentação para solicitar reembolso ao seu plano. O valor reembolsado varia conforme o convênio.',
    wa: 'Olá, Dr. Vinícius! Tenho plano de saúde e quero agendar uma consulta (R$ 250).',
  },
]

const STEPS = [
  { t: 'Agende pelo WhatsApp', d: 'Você fala comigo, tira dúvidas e escolhe o melhor horário — online ou presencial.' },
  { t: 'Avaliação completa', d: 'Analisamos histórico, exames, rotina e objetivos. Entendo você por inteiro.' },
  { t: 'Plano individualizado', d: 'Você recebe um plano feito para a sua vida real, com comida de verdade.' },
  { t: 'Acompanhamento', d: 'Ajustamos o caminho juntos até o resultado virar hábito que se sustenta.' },
]

const BENEFITS = [
  { icon: IconMonitor, t: 'Sem deslocamento', d: 'Atendimento online com a mesma qualidade.' },
  { icon: IconClock, t: 'Horário flexível', d: 'Agendamos no melhor momento para você.' },
  { icon: IconChat, t: 'Suporte próximo', d: 'Você não fica sozinho entre as consultas.' },
  { icon: IconClipboard, t: 'Plano individualizado', d: 'Feito a partir do seu histórico e objetivos.' },
  { icon: IconLeaf, t: 'Sem dietas restritivas', d: 'Comida de verdade, sem sofrimento.' },
  { icon: IconPulse, t: 'Resultados acompanhados', d: 'Ajustes ao longo do processo, com você.' },
  { icon: IconShield, t: 'Profissional registrado', d: `${site.crn} — nutrição clínica.` },
  { icon: IconHeart, t: 'Atendimento humano', d: 'Escuta de verdade, sem pressa.' },
]

export default function Consultas() {
  const [openPlan, setOpenPlan] = useState(-1)
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">Atendimentos</span></Reveal>
          <Reveal delay={0.05}><h1 className="page-hero__title">Escolha o formato que combina com você</h1></Reveal>
          <Reveal delay={0.1}><p className="page-hero__lead">Online ou presencial em Uberlândia — a mesma qualidade de avaliação e acompanhamento personalizado.</p></Reveal>
        </div>
      </div>

      {/* Planos */}
      <section className="section" id="planos">
        <div className="container">
          <div className="plans">
            {PLANS.map((p, i) => {
              const open = openPlan === i
              return (
                <Reveal key={p.nome} delay={i * 0.08}>
                  <article className={`card plan ${p.feature ? 'plan--feature' : ''} ${open ? 'plan--open' : ''}`} onClick={() => setOpenPlan(open ? -1 : i)}>
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
                        <motion.div className="plan__more"
                          initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                          <p>{p.mais}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <a className={`btn ${p.btn === 'gold' ? 'btn--gold' : 'btn--ghost'}`}
                      href={whatsappLink(p.wa)} target="_blank" rel="noopener"
                      onClick={(e) => e.stopPropagation()}>
                      {p.cta} <IconArrow />
                    </a>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section" style={{ background: 'var(--cream)' }} id="como-funciona">
        <div className="container">
          <div className="center">
            <Reveal><span className="eyebrow">Como funciona</span></Reveal>
            <Reveal delay={0.05}><h2 className="section-title">Do primeiro contato ao resultado</h2></Reveal>
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
        </div>
      </section>

      {/* Benefícios */}
      <section className="section" id="beneficios">
        <div className="container">
          <div className="center">
            <Reveal><span className="eyebrow">Por que aqui</span></Reveal>
            <Reveal delay={0.05}><h2 className="section-title">O que você encontra neste atendimento</h2></Reveal>
          </div>
          <div className="benefits" style={{ marginTop: 48 }}>
            {BENEFITS.map((b, i) => {
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

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <Reveal>
            <div className="cta__box">
              <h2>Pronto para dar o primeiro passo?</h2>
              <p>Chame no WhatsApp, tire suas dúvidas e agende sua consulta. Sua saúde não precisa esperar.</p>
              <div className="hero__actions" style={{ justifyContent: 'center', position: 'relative', marginTop: 32 }}>
                <a className="btn btn--gold" href={whatsappLink()} target="_blank" rel="noopener">
                  <IconWhats /> Agendar minha consulta
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
