import { motion } from 'framer-motion'

// Fade + sobe ao entrar na viewport. delay opcional para escalonar.
export default function Reveal({ children, delay = 0, y = 26, as = 'div', className }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}
