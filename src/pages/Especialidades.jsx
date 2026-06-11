import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { whatsappLink } from '../data/site'
import {
  IconApple, IconGut, IconFemale, IconPulse, IconLeaf, IconHeart, IconArrow, IconWhats,
} from '../components/Icons'

const PAINS = [
  { icon: IconApple, img: 'pq-emagrecimento.jpg', t: 'Emagrecimento', d: 'Perder peso de forma sustentável, sem dietas malucas nem efeito sanfona.', mais: 'Ajustamos calorias, proteína e rotina ao seu corpo. Sem passar fome e sem efeito sanfona — peso que desce e, principalmente, se mantém.' },
  { icon: IconGut, img: 'pq-intestino.jpg', t: 'Saúde intestinal', d: 'Inchaço, intestino preso, gases e desconforto — tratados pela raiz.', mais: 'Investigamos a causa (alimentação, flora intestinal, intolerâncias) e montamos um plano que regula o intestino e acaba com o inchaço.' },
  { icon: IconFemale, img: 'pq-mulher.jpg', t: 'Saúde da mulher', d: 'TPM, menopausa, tireoide e equilíbrio hormonal através da alimentação.', mais: 'Alimentação a favor dos seus hormônios em cada fase — TPM, gestação, menopausa, tireoide — para mais disposição, humor e equilíbrio.' },
  { icon: IconPulse, img: 'pq-performance.jpg', t: 'Performance', d: 'Mais energia, foco e disposição para treinar, trabalhar e viver bem.', mais: 'Estratégia alimentar para treino e trabalho: mais energia, foco e recuperação — do dia a dia agitado ao esporte.' },
  { icon: IconLeaf, img: 'pq-reeducacao.jpg', t: 'Reeducação alimentar', d: 'Construir uma relação saudável e leve com a comida, sem culpa.', mais: 'Sem proibições radicais. Construímos hábitos que cabem na sua vida e uma relação leve com a comida — para valer a longo prazo.' },
  { icon: IconHeart, img: 'pq-metabolica.jpg', t: 'Saúde metabólica', d: 'Colesterol, glicemia e pressão sob controle com comida de verdade.', mais: 'Ajustes alimentares que ajudam a controlar colesterol, glicemia e pressão — prevenção e saúde de verdade, com comida real.' },
]

export default function Especialidades() {
  const [openPain, setOpenPain] = useState(-1)
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">Para quem é</span></Reveal>
          <Reveal delay={0.05}><h1 className="page-hero__title">Reconhece algum desses? Posso te ajudar.</h1></Reveal>
          <Reveal delay={0.1}><p className="page-hero__lead">Cada especialidade tem uma abordagem própria — clique nos cards para entender como funciona na prática.</p></Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {PAINS.map((p, i) => {
              const Icon = p.icon
              const open = openPain === i
              return (
                <Reveal key={p.t} delay={i * 0.05}>
                  <article
                    className={`pain-card ${open ? 'pain-card--open' : ''}`}
                    onClick={() => setOpenPain(open ? -1 : i)}
                    role="button" tabIndex={0}
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
                          <motion.div className="pain-card__more"
                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: 'easeInOut' }}>
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

          <Reveal delay={0.1}>
            <div className="center" style={{ marginTop: 60 }}>
              <a className="btn btn--gold" href={whatsappLink('Olá, Dr. Vinícius! Quero saber mais sobre o atendimento.')} target="_blank" rel="noopener">
                <IconWhats /> Tirar dúvidas no WhatsApp
              </a>
              <a className="btn btn--ghost" href="/consultas" style={{ marginLeft: 14 }}>
                Ver consultas e valores <IconArrow />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
