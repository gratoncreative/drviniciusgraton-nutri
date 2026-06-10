import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconPlus } from './Icons'

const ITEMS = [
  {
    q: 'Você atende online ou presencial?',
    a: 'Os dois. O atendimento presencial é em Uberlândia/MG e o online é feito por vídeo para qualquer lugar do Brasil — com a mesma profundidade de avaliação, plano e acompanhamento.',
  },
  {
    q: 'Como funciona a primeira consulta?',
    a: 'É uma conversa completa sobre seu histórico, rotina, exames, hábitos e objetivos. A partir disso eu monto um plano individualizado — nada de dieta genérica. Você sai com orientações claras e os próximos passos definidos.',
  },
  {
    q: 'Preciso fazer exames antes?',
    a: 'Se você já tiver exames recentes, traga — ajudam muito. Se não tiver, sem problema: avaliamos na consulta e, quando necessário, eu indico quais exames fazem sentido para o seu caso.',
  },
  {
    q: 'Vou receber uma dieta restritiva e impossível de seguir?',
    a: 'Não. O trabalho é construir uma alimentação que cabe na sua vida real, com comida de verdade e ajustes graduais. O objetivo é resultado que se sustenta, não sofrimento por algumas semanas.',
  },
  {
    q: 'Em quanto tempo vejo resultados?',
    a: 'Depende do seu objetivo e ponto de partida, mas a maioria dos pacientes percebe mudanças de energia, digestão e disposição nas primeiras semanas. Resultados consistentes vêm do acompanhamento ao longo do processo.',
  },
  {
    q: 'Como faço para agendar?',
    a: 'É só chamar no WhatsApp. Eu mesmo (ou minha equipe) confirmo o melhor horário, explico os valores e tiro qualquer dúvida antes de você marcar.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {ITEMS.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
            <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              {item.q}
              <IconPlus />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="faq__a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
