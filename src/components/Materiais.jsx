import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { materiais, LEAD_ENDPOINT } from '../data/materiais'
import { IconArrow, IconCheck, IconClose } from './Icons'

const LS_KEY = 'vg_lead_cadastrado'

export default function Materiais({ hideHeader = false }) {
  const [alvo, setAlvo] = useState(null) // material clicado
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '' })
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | erro

  const jaCadastrado = () => {
    try { return !!localStorage.getItem(LS_KEY) } catch { return false }
  }

  const baixar = (m) => {
    const a = document.createElement('a')
    a.href = `${import.meta.env.BASE_URL}${m.arquivo}`
    a.download = ''
    a.target = '_blank'
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const clicouMaterial = (m) => {
    if (jaCadastrado()) { baixar(m); return }
    setAlvo(m)
    setEstado('idle')
  }

  const enviar = async (e) => {
    e.preventDefault()
    if (!form.nome.trim() || !form.email.includes('@') || form.whatsapp.replace(/\D/g, '').length < 10) {
      setEstado('erro')
      return
    }
    setEstado('enviando')
    try {
      await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Novo lead do site (material: ${alvo?.titulo})`,
          nome: form.nome,
          email: form.email,
          whatsapp: form.whatsapp,
          material: alvo?.titulo,
          origem: 'drviniciusgraton.com.br',
        }),
      })
    } catch {
      /* mesmo se o envio falhar, não bloqueia o paciente */
    }
    try { localStorage.setItem(LS_KEY, JSON.stringify({ ...form, em: new Date().toISOString() })) } catch {}
    setEstado('ok')
    baixar(alvo)
  }

  return (
    <section className="section" id="materiais" style={{ background: 'var(--cream)' }}>
      <div className="container">
        {!hideHeader && (
          <div className="center">
            <Reveal><span className="eyebrow">Materiais gratuitos</span></Reveal>
            <Reveal delay={0.05}><h2 className="section-title">Ferramentas práticas para começar hoje</h2></Reveal>
            <Reveal delay={0.1}><p className="section-lead">Guias e ferramentas em PDF, feitos por mim, para você dar o primeiro passo — é só se cadastrar e baixar.</p></Reveal>
          </div>
        )}
        <div className="grid-3">
          {materiais.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.06}>
              <button className="material" onClick={() => clicouMaterial(m)}>
                <span className="material__tag">{m.tag}</span>
                <h3>{m.titulo}</h3>
                <p>{m.desc}</p>
                <span className="material__cta">Baixar grátis <IconArrow /></span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {alvo && (
          <motion.div className="gate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="gate__backdrop" onClick={() => setAlvo(null)} />
            <motion.div
              className="gate__box"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="gate__close" aria-label="Fechar" onClick={() => setAlvo(null)}><IconClose /></button>
              {estado === 'ok' ? (
                <div className="gate__ok">
                  <span className="gate__check"><IconCheck /></span>
                  <h3>Download liberado!</h3>
                  <p>O arquivo <strong>{alvo.titulo}</strong> foi aberto em uma nova aba. Os próximos materiais baixam direto, sem novo cadastro. Bom proveito!</p>
                  <button className="btn btn--primary" onClick={() => setAlvo(null)}>Fechar</button>
                </div>
              ) : (
                <>
                  <span className="eyebrow">Material gratuito</span>
                  <h3>{alvo.titulo}</h3>
                  <p className="gate__sub">Preencha uma única vez para liberar este e todos os outros materiais.</p>
                  <form onSubmit={enviar}>
                    <label>Nome
                      <input type="text" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" required />
                    </label>
                    <label>E-mail
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="voce@email.com" required />
                    </label>
                    <label>WhatsApp
                      <input type="tel" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="(34) 9 9999-9999" required />
                    </label>
                    {estado === 'erro' && <p className="gate__erro">Confira os campos: nome, e-mail válido e WhatsApp com DDD.</p>}
                    <button className="btn btn--gold" type="submit" disabled={estado === 'enviando'}>
                      {estado === 'enviando' ? 'Liberando…' : 'Liberar meu download'} <IconArrow />
                    </button>
                    <p className="gate__lgpd">Seus dados são usados apenas para contato sobre nutrição e novos materiais. Sem spam.</p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
