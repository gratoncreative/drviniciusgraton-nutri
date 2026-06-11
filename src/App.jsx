import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Especialidades from './pages/Especialidades'
import Consultas from './pages/Consultas'
import MateriaisPage from './pages/MateriaisPage'
import FaqPage from './pages/FaqPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/materiais" element={<MateriaisPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
