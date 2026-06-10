// ============================================================================
//  CONFIGURAÇÃO DO SITE — edite os dados aqui (é o único arquivo que você precisa mexer)
// ============================================================================

export const site = {
  nome: 'Dr. Vinícius Graton',
  profissao: 'Nutricionista Clínico',
  crn: 'CRN 9.9877',
  cidade: 'Uberlândia, MG',
  email: 'contato@viniciusgraton.com.br',

  // Número real (formato internacional, só dígitos): 55 + DDD + número
  whatsapp: '5534991570494',

  // >>> TROQUE pelo seu @ do Instagram (sem o @)
  instagram: 'drviniciusgraton',

  // Mensagem que abre pré-preenchida no WhatsApp
  whatsappMsg: 'Olá, Dr. Vinícius! Vim pelo site e gostaria de agendar uma consulta nutricional.',
}

export const whatsappLink = (msg = site.whatsappMsg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`

export const instagramLink = `https://instagram.com/${site.instagram}`
