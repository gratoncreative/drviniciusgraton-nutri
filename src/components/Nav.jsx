import { useEffect, useState } from 'react'
import { site, whatsappLink } from '../data/site'
import { IconMenu, IconClose, IconWhats } from './Icons'

const LINKS = [
  ['Para quem é', '#para-quem'],
  ['Como funciona', '#processo'],
  ['Atendimentos', '#servicos'],
  ['Materiais', '#materiais'],
  ['Dicas de Saúde', '/dicas/'],
  ['Dúvidas', '#faq'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#topo" className="nav__brand" aria-label="Início">
          <img className="nav__mark" src={`${import.meta.env.BASE_URL}logo-mark.svg`} alt="" width="42" height="42" />
          <span>
            Dr. Vinícius Graton
            <small>{site.profissao}</small>
          </span>
        </a>

        <nav className="nav__links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="nav__cta">
          <a className="btn btn--primary" href={whatsappLink()} target="_blank" rel="noopener">
            <IconWhats /> Agendar
          </a>
          <button className="nav__toggle" aria-label="Abrir menu" onClick={() => setOpen(true)}>
            <IconMenu />
          </button>
        </div>
      </div>

      {open && <div className="nav__backdrop" onClick={() => setOpen(false)} />}
      <div className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
        <button className="nav__close" aria-label="Fechar menu" onClick={() => setOpen(false)}>
          <IconClose />
        </button>
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="btn btn--primary" href={whatsappLink()} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
          <IconWhats /> Agendar pelo WhatsApp
        </a>
      </div>
    </header>
  )
}
