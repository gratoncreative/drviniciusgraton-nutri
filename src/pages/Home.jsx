import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { site, whatsappLink } from '../data/site'
import Faq from '../components/Faq'
import {
  IconWhats,
  IconArrow,
  IconScale,
  IconGut,
  IconFemale,
  IconPulse,
  IconLeaf,
  IconHeart,
  IconShield,
  IconUser,
  IconMonitor,
  IconPin,
  IconApple,
  IconClock,
} from '../components/Icons'

const PROOF = [
  { n: 'CRN 9.9877', d: 'Registro profissional ativo' },
  { n: '100% individual', d: 'Sem dieta de gaveta' },
  { n: 'Online + presencial', d: 'Uberlândia e todo o Brasil' },
]

const DORES = [
  {
    img: 'pq-emagrecimento.jpg',
    Icon: IconScale,
    titulo: 'Já fez dieta mil vezes e o peso sempre volta',
    desc: 'Você não falhou na dieta — a dieta falhou em você. O problema é método, não força de vontade.',
    expand: 'Emagrecimento sustentável parte do seu histórico, sua rotina e o que você realmente consegue manter. Sem fome, sem efeito sanfona.',
  },
  {
    img: 'pq-intestino.jpg',
    Icon: IconGut,
    titulo: 'Inchaço, gases ou intestino que não coopera',
    desc: 'Sintomas que parecem normais mas travam sua vida. Têm causa e têm solução com a abordagem certa.',
    expand: 'Investigamos alimentação, flora intestinal e intolerâncias para tratar pela raiz — não mascarar com restrição.',
  },
  {
    img: 'pq-mulher.jpg',
    Icon: IconFemale,
    titulo: 'TPM intensa, menopausa difícil ou tireoide desregulada',
    desc: 'Hormônios e alimentação são inseparáveis. Com o plano certo, você sente diferença no humor, energia e corpo.',
    expand: 'A alimentação pode trabalhar a favor dos seus hormônios em cada fase — gestação, TPM, menopausa, tireoide.',
  },
  {
    img: 'pq-performance.jpg',
    Icon: IconPulse,
    titulo: 'Treina muito mas o resultado não aparece',
    desc: 'Falta estratégia alimentar para o esporte. Energia, foco e recuperação dependem do que você come.',
    expand: 'Um plano ajustado à sua modalidade, horário de treino e objetivos faz diferença real — do amador ao atleta.',
  },
  {
    img: 'pq-reeducacao.jpg',
    Icon: IconLeaf,
    titulo: 'Comer virou fonte de culpa e ansiedade',
    desc: 'Você merece uma relação leve com a comida. Sem proibições radicais, sem neura, com prazer de verdade.',
    expand: 'Reeducação alimentar é construir hábitos que cabem na sua vida — não uma lista de proibições que dura duas semanas.',
  },
  {
    img: 'pq-metabolica.jpg',
    Icon: IconHeart,
    titulo: 'Colesterol, glicemia ou pressão fora do controle',
    desc: 'Exames alterados têm solução com comida de verdade, antes de precisar só de remédio.',
    expand: 'Ajustes alimentares certos ajudam a controlar colesterol, glicemia e pressão — prevenção real com ciência.',
  },
]

const STEPS = [
  {
    num: '1',
    titulo: 'Você chama no WhatsApp',
    desc: 'Sem formulários complicados. Você manda uma mensagem, tiramos suas dúvidas e escolhemos o melhor horário — online ou presencial.',
  },
  {
    num: '2',
    titulo: 'Consulta completa, sem julgamento',
    desc: 'Conversa sobre seu histórico, exames, rotina e objetivos. Você fala, eu escuto. Sem pressa, sem protocolo engessado.',
  },
  {
    num: '3',
    titulo: 'Plano feito só para você',
    desc: 'Você recebe um plano alimentar 100% individual — com comida de verdade, ajustado ao que você gosta e consegue manter.',
  },
  {
    num: '4',
    titulo: 'Acompanhamento de perto',
    desc: 'Ajustamos juntos ao longo do caminho. Resultado que vira hábito e se sustenta — não efeito de dois meses.',
  },
]

const DEPOIMENTOS = [
  {
    av: 'A',
    name: 'Ana Paula, 38 anos',
    ctx: 'Emagrecimento · Uberlândia',
    text: '"Depois de três anos tentando emagrecer sozinha, em quatro meses com o Dr. Vinícius perdi 11kg sem passar fome. O plano parecia impossível de ser tão fácil de seguir — comia tudo que gostava, só com mais inteligência."',
  },
  {
    av: 'L',
    name: 'Letícia M., 34 anos',
    ctx: 'Saúde intestinal · online, Belo Horizonte',
    text: '"Tinha inchaço e desconforto intestinal há anos e achava que era normal. Em seis semanas de acompanhamento senti diferença real — menos gases, mais energia, melhor humor. Nunca imaginei que a alimentação impactava tanto."',
  },
  {
    av: 'R',
    name: 'Rafael S., 29 anos',
    ctx: 'Performance esportiva · online',
    text: '"Treino há cinco anos e nunca tinha entendido por que meu resultado estagnava. Com o acompanhamento do Dr. Vinícius minha energia nos treinos mudou completamente. Tudo ajustado à minha rotina, sem complicação."',
  },
]

export default function Home() {
  const [openPain, setOpenPain] = useState(-1)

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
              <a className="btn btn--outline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
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
        <a href="#credenciais" className="hero__scroll" aria-label="Rolar para ver mais"><span /></a>
      </section>

      {/* ===== STRIP CREDENCIAIS ===== */}
      <section className="strip" id="credenciais">
        <div className="container">
          <div className="strip__inner">
            <div className="strip__item">
              <IconShield />
              <div>
                <strong>CRN 9.9877 · ativo</strong>
                <span>Registro profissional verificável</span>
              </div>
            </div>
            <div className="strip__item">
              <IconUser />
              <div>
                <strong>500+ pacientes</strong>
                <span>atendidos desde 2016</span>
              </div>
            </div>
            <div className="strip__item">
              <IconMonitor />
              <div>
                <strong>Atende online</strong>
                <span>para todo o Brasil</span>
              </div>
            </div>
            <div className="strip__item">
              <IconPin />
              <div>
                <strong>Uberlândia, MG</strong>
                <span>atendimento presencial</span>
              </div>
            </div>
            <div className="strip__item">
              <IconHeart />
              <div>
                <strong>100% individual</strong>
                <span>sem dieta de gaveta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM É ===== */}
      <section className="section para-quem" id="para-quem">
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">Para quem é esse trabalho</span>
              <h2 className="section-title">Reconhece alguma dessas situações?</h2>
              <p className="section-lead">
                Se você se viu em pelo menos uma — você está exatamente no lugar certo.
              </p>
            </div>
          </Reveal>

          <div className="grid-3">
            {DORES.map(({ img, Icon, titulo, desc, expand }, i) => {
              const open = openPain === i
              return (
                <Reveal key={titulo} delay={i * 0.07}>
                  <article
                    className={`pain-card${open ? ' pain-card--open' : ''}`}
                    onClick={() => setOpenPain(open ? -1 : i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setOpenPain(open ? -1 : i)
                      }
                    }}
                  >
                    <div className="pain-card__media">
                      <img src={`${import.meta.env.BASE_URL}${img}`} alt={titulo} loading="lazy" />
                      <span className="pain-card__chip"><Icon /></span>
                    </div>
                    <div className="pain-card__body">
                      <h3>{titulo}</h3>
                      <p>{desc}</p>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            className="pain-card__more"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: 'easeInOut' }}
                          >
                            <p>{expand}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <span className="pain-card__toggle">
                        {open ? 'Ver menos' : 'Saber mais'} <IconArrow />
                      </span>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="center" style={{ marginTop: 60 }}>
              <a
                className="btn btn--gold"
                href={whatsappLink('Olá, Dr. Vinícius! Me identifiquei com uma das situações do site. Pode me ajudar?')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhats /> Falar com o Dr. Vinícius
              </a>
              <a className="btn btn--ghost" href="/especialidades" style={{ marginLeft: 14 }}>
                Ver todas as especialidades <IconArrow />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <section className="about section" id="sobre">
        <div className="container">
          <div className="about__grid">
            <Reveal>
              <div className="about__photo">
                <img
                  src={`${import.meta.env.BASE_URL}foto-sobre.jpg`}
                  alt="Dr. Vinícius Graton, nutricionista clínico em Uberlândia"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <div className="about__text">
              <Reveal delay={0.06}>
                <span className="eyebrow">Sobre o Dr. Vinícius</span>
                <h2 className="section-title" style={{ maxWidth: '22ch' }}>
                  Acredito que comida é prazer, não punição.
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p>
                  Escolhi a nutrição clínica porque vi de perto o que dietas genéricas fazem com as pessoas — frustração,
                  culpa e resultados que nunca duram. Queria criar um atendimento diferente: que começa pela história real
                  de cada paciente, não por uma planilha.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p>
                  Hoje atendo presencialmente em Uberlândia e por vídeo para todo o Brasil. Cada plano é construído do
                  zero — a partir dos seus exames, da sua rotina, dos alimentos que você ama e dos que você não consegue
                  encarar. Comida de verdade, sem radicalismo.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="about__creds">
                  <span className="about__cred"><IconShield /> CRN 9.9877</span>
                  <span className="about__cred"><IconApple /> Nutrição Clínica</span>
                  <span className="about__cred"><IconMonitor /> Online + presencial</span>
                  <span className="about__cred"><IconClock /> Atende desde 2016</span>
                </div>
              </Reveal>

              <Reveal delay={0.30}>
                <div style={{ marginTop: 36 }}>
                  <a className="btn btn--primary" href="/consultas">
                    Conhecer o atendimento <IconArrow />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="section section--alt como-funciona" id="como-funciona">
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">Como funciona</span>
              <h2 className="section-title" style={{ maxWidth: '22ch', marginLeft: 'auto', marginRight: 'auto' }}>
                Do primeiro contato ao resultado — sem mistério.
              </h2>
              <p className="section-lead">
                Quatro passos simples que mudam a relação com a sua saúde.
              </p>
            </div>
          </Reveal>

          <div className="steps">
            {STEPS.map(({ num, titulo, desc }, i) => (
              <Reveal key={num} delay={i * 0.08}>
                <div className="step">
                  <div className="step__num">{num}</div>
                  <h3>{titulo}</h3>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="center" style={{ marginTop: 48 }}>
              <a
                className="btn btn--gold"
                href={whatsappLink('Olá, Dr. Vinícius! Quero entender melhor como funciona o atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhats /> Quero dar o primeiro passo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="section quotes" id="depoimentos">
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">Resultados</span>
              <h2 className="section-title">Histórias de quem decidiu cuidar da saúde</h2>
            </div>
          </Reveal>

          <div className="grid-3">
            {DEPOIMENTOS.map((q, i) => (
              <Reveal key={q.name} delay={i * 0.07}>
                <div className="quote">
                  <div className="quote__stars">★★★★★</div>
                  <p>{q.text}</p>
                  <div className="quote__by">
                    <div className="quote__av" aria-hidden="true">{q.av}</div>
                    <div>
                      <b>{q.name}</b>
                      <span>{q.ctx}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="quotes__disclaimer">
              Depoimentos ilustrativos — substitua por relatos com nomes e fotos reais após obter consentimento escrito.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="center" style={{ marginTop: 32 }}>
              <a href="/consultas" className="btn btn--light">
                Ver como funciona o atendimento <IconArrow />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <Reveal>
            <div className="center">
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2 className="section-title">Tudo que você precisa saber antes de agendar</h2>
              <p className="section-lead">
                Não encontrou sua dúvida? Me chame no WhatsApp — respondo pessoalmente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Faq />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="center" style={{ marginTop: 48 }}>
              <a
                href={whatsappLink('Olá, Dr. Vinícius! Tenho uma dúvida antes de agendar.')}
                className="btn btn--gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhats /> Ainda com dúvidas? Me chama no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="cta" id="agendar">
        <div className="container">
          <Reveal>
            <div className="cta__box">
              <h2>Sua saúde não vai melhorar sozinha — mas pode melhorar com o plano certo.</h2>
              <p>
                Agenda com vagas limitadas por semana para garantir atendimento 100% individual.
                Online ou presencial em Uberlândia — você escolhe o que é melhor para você.
              </p>
              <div className="hero__actions cta__actions">
                <a
                  href={whatsappLink('Olá, Dr. Vinícius! Vim pelo site e quero agendar minha consulta. Tem vaga disponível?')}
                  className="btn btn--gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhats /> Agendar minha consulta
                </a>
                <a href="/consultas" className="btn btn--light">
                  Ver como funciona primeiro
                </a>
              </div>
              <p className="cta__anchor">
                Atendimento online para todo o Brasil · Presencial em Uberlândia, MG · CRN 9.9877
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
