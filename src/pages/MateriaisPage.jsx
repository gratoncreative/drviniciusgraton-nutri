import Reveal from '../components/Reveal'
import Materiais from '../components/Materiais'

export default function MateriaisPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">Materiais gratuitos</span></Reveal>
          <Reveal delay={0.05}><h1 className="page-hero__title">Ferramentas práticas para começar hoje</h1></Reveal>
          <Reveal delay={0.1}><p className="page-hero__lead">Guias e ferramentas em PDF, feitos por mim, para você dar o primeiro passo — é só se cadastrar e baixar.</p></Reveal>
        </div>
      </div>
      <Materiais hideHeader />
    </>
  )
}
