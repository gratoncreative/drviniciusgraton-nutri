import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Nav from './Nav'
import { site, whatsappLink } from '../data/site'
import { IconWhats, IconMail } from './Icons'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) { e.preventDefault(); lenis.scrollTo(id, { offset: -80 }) }
    }
    document.addEventListener('click', onClick)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); document.removeEventListener('click', onClick) }
  }, [pathname])

  return (
    <>
      <Nav />
      <main id="topo">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__brand">
                <img className="nav__mark" src={`${import.meta.env.BASE_URL}logo-mark.svg`} alt="" width="42" height="42" />
                Dr. Vinícius Graton
              </div>
              <p>Nutrição clínica individualizada — emagrecimento, saúde intestinal, hormônios e performance. Atendimento em {site.cidade} e online para todo o Brasil.</p>
              <p style={{ marginTop: 14, fontSize: 14 }}>{site.crn}</p>
            </div>
            <div>
              <h4>Páginas</h4>
              <div className="footer__links">
                <a href="/especialidades">Para quem é</a>
                <a href="/consultas">Consultas e valores</a>
                <a href="/materiais">Materiais gratuitos</a>
                <a href="/dicas/">Dicas de Saúde</a>
                <a href="/faq">Dúvidas frequentes</a>
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
            <span>Nutrição clínica com cuidado real</span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        <IconWhats />
      </a>
    </>
  )
}
