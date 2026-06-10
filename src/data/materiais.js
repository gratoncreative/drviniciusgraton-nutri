// Materiais para download (liberados após cadastro do lead)
export const materiais = [
  {
    id: 'guia-anti-inchaco',
    titulo: 'Guia Anti-Inchaço',
    desc: 'Cardápio de 3 dias + lista de compras para desinchar com comida de verdade.',
    arquivo: 'materiais/guia-anti-inchaco.pdf',
    tag: 'PDF · Cardápio',
  },
  {
    id: 'diario-alimentar-7-dias',
    titulo: 'Diário Alimentar de 7 Dias',
    desc: 'O primeiro passo para mudar é enxergar o padrão. Imprima e registre sua semana.',
    arquivo: 'materiais/diario-alimentar-7-dias.pdf',
    tag: 'PDF · Ferramenta',
  },
  {
    id: '21-trocas-inteligentes',
    titulo: '21 Trocas Inteligentes no Mercado',
    desc: 'O checklist para encher o carrinho a favor da sua saúde — sem produto "fit" caro.',
    arquivo: 'materiais/21-trocas-inteligentes.pdf',
    tag: 'PDF · Checklist',
  },
]

// Endpoint gratuito que encaminha o lead por e-mail (FormSubmit AJAX).
// 1º envio dispara um e-mail de ativação para a caixa abaixo — basta clicar em "Activate".
export const LEAD_ENDPOINT = 'https://formsubmit.co/ajax/viniciusgraton1985@gmail.com'
