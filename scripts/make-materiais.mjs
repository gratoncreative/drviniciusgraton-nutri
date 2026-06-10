// Gera os materiais em PDF para download (identidade da marca, conteúdo real)
import PDFDocument from 'pdfkit'
import { createWriteStream, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = join(__dirname, '..', 'public', 'materiais')
mkdirSync(out, { recursive: true })

const VERDE = '#1f5c43', VERDE_ESCURO = '#14352a', DOURADO = '#c8923b', TINTA = '#16201b', CORPO = '#3c4a43', CREME = '#f7f4ec'

function novoDoc(arquivo) {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 64, bottom: 64, left: 56, right: 56 } })
  doc.pipe(createWriteStream(join(out, arquivo)))
  return doc
}

function capa(doc, titulo, subtitulo) {
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(VERDE_ESCURO)
  doc.rect(0, 0, doc.page.width, 8).fill(DOURADO)
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(34)
  doc.text(titulo, 56, 230, { width: doc.page.width - 112 })
  doc.moveDown(0.4)
  doc.font('Helvetica').fontSize(15).fillColor('#dcefe2')
  doc.text(subtitulo, { width: doc.page.width - 112 })
  doc.fontSize(12).fillColor('#eccf9a')
  doc.text('\nDr. Vinícius Graton · Nutricionista Clínico · CRN 9.9877', { width: doc.page.width - 112 })
  doc.fillColor('#9fc3ad').fontSize(10)
  doc.text('drviniciusgraton.com.br', { width: doc.page.width - 112 })
  doc.addPage()
}

function h2(doc, t) {
  if (doc.y > doc.page.height - 150) doc.addPage()
  doc.moveDown(0.8)
  doc.font('Helvetica-Bold').fontSize(16).fillColor(VERDE)
  doc.text(t)
  doc.moveDown(0.3)
}
function p(doc, t) {
  doc.font('Helvetica').fontSize(10.5).fillColor(CORPO)
  doc.text(t, { lineGap: 2.5 })
}
function item(doc, t) {
  doc.font('Helvetica').fontSize(10.5).fillColor(CORPO)
  doc.text(`•  ${t}`, { lineGap: 2.5, indent: 6 })
}
function checkbox(doc, t) {
  if (doc.y > doc.page.height - 90) doc.addPage()
  const y = doc.y
  doc.rect(58, y + 1, 9, 9).lineWidth(1).stroke(VERDE)
  doc.font('Helvetica').fontSize(10.5).fillColor(CORPO)
  doc.text(t, 76, y, { lineGap: 3 })
  doc.x = 56
}
function rodape(doc) {
  doc.moveDown(1.2)
  doc.font('Helvetica-Oblique').fontSize(9).fillColor('#6b7a72')
  doc.text('Material educativo — não substitui consulta individualizada. Agende: wa.me/5534991570494 · drviniciusgraton.com.br · CRN 9.9877')
}

// ============ 1. GUIA ANTI-INCHAÇO (cardápio 3 dias + lista de compras) ============
{
  const doc = novoDoc('guia-anti-inchaco.pdf')
  capa(doc, 'Guia Anti-Inchaço', 'Cardápio de 3 dias + lista de compras para desinchar com comida de verdade')

  h2(doc, 'Como usar este guia')
  p(doc, 'Siga os 3 dias como modelo de organização (pode repetir e variar os itens equivalentes). Beba de 30 a 35 ml de água por kg de peso ao longo do dia, mastigue devagar e caminhe 20 minutos após uma das refeições. O inchaço responde a constância, não a radicalismo.')

  h2(doc, 'Dia 1')
  item(doc, 'Café da manhã: mamão com aveia e chia + 2 ovos mexidos + chá de gengibre')
  item(doc, 'Almoço: arroz + feijão bem cozido + frango grelhado + salada de folhas com pepino e azeite')
  item(doc, 'Lanche: iogurte natural com banana')
  item(doc, 'Jantar: peixe assado + legumes refogados + batata')

  h2(doc, 'Dia 2')
  item(doc, 'Café da manhã: iogurte natural + kiwi picado + aveia')
  item(doc, 'Almoço: arroz + lentilha + carne magra + abobrinha e cenoura refogadas')
  item(doc, 'Lanche: melancia ou abacaxi + castanhas')
  item(doc, 'Jantar: omelete de legumes + batata-doce + chá de hortelã')

  h2(doc, 'Dia 3')
  item(doc, 'Café da manhã: ovos + pão de fermentação natural + mamão')
  item(doc, 'Almoço: arroz + feijão + peixe + salada colorida com azeite e limão')
  item(doc, 'Lanche: água de coco + fruta com casca')
  item(doc, 'Jantar: frango desfiado com legumes + arroz')

  h2(doc, 'Lista de compras da semana')
  ;['Mamão, kiwi, banana, abacaxi ou melancia, limão', 'Folhas verdes, pepino, abobrinha, cenoura, tomate', 'Batata, batata-doce, arroz, aveia, chia', 'Feijão, lentilha', 'Ovos, frango, peixe branco, carne magra', 'Iogurte natural, queijo fresco', 'Azeite, castanhas, gengibre, hortelã'].forEach(t => checkbox(doc, t))

  h2(doc, 'Evite nesses dias')
  item(doc, 'Refrigerante e bebidas gaseificadas (mesmo zero)')
  item(doc, 'Embutidos, salgadinhos e congelados prontos (excesso de sódio)')
  item(doc, 'Excesso de adoçantes como sorbitol e maltitol')
  item(doc, 'Comer com pressa ou na frente de telas')
  rodape(doc)
  doc.end()
}

// ============ 2. DIÁRIO ALIMENTAR DE 7 DIAS ============
{
  const doc = novoDoc('diario-alimentar-7-dias.pdf')
  capa(doc, 'Diário Alimentar de 7 Dias', 'O primeiro passo para mudar é enxergar o padrão. Registre sem julgamento.')

  h2(doc, 'Como preencher')
  p(doc, 'Durante 7 dias, anote o que comeu, o horário e como estava se sentindo (fome real, ansiedade, tédio, pressa). Não mude nada de propósito na primeira semana: o objetivo é fotografar a sua rotina real. Esse registro vale ouro na consulta — é com ele que identificamos gatilhos, horários críticos e os ajustes de maior impacto.')

  for (let d = 1; d <= 7; d++) {
    doc.addPage()
    doc.font('Helvetica-Bold').fontSize(18).fillColor(VERDE)
    doc.text(`Dia ${d}`)
    doc.moveDown(0.3)
    doc.font('Helvetica').fontSize(10).fillColor(CORPO)
    doc.text('Data: ________________    Água (copos): ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐    Sono (h): ______')
    doc.moveDown(0.5)
    ;['Café da manhã', 'Lanche da manhã', 'Almoço', 'Lanche da tarde', 'Jantar', 'Depois do jantar'].forEach((ref) => {
      doc.font('Helvetica-Bold').fontSize(11).fillColor(TINTA)
      doc.text(ref)
      doc.font('Helvetica').fontSize(9.5).fillColor('#6b7a72')
      doc.text('Horário: ______   O que comi: ____________________________________________________')
      doc.text('Como me senti: ____________________________________________________________________')
      doc.moveDown(0.55)
    })
    doc.font('Helvetica-Bold').fontSize(11).fillColor(TINTA)
    doc.text('Observações do dia (intestino, energia, treino):')
    doc.font('Helvetica').fontSize(9.5).fillColor('#6b7a72')
    doc.text('_________________________________________________________________________________________')
  }
  doc.moveDown(1)
  rodape(doc)
  doc.end()
}

// ============ 3. 21 TROCAS INTELIGENTES NO MERCADO ============
{
  const doc = novoDoc('21-trocas-inteligentes.pdf')
  capa(doc, '21 Trocas Inteligentes', 'O checklist para encher o carrinho a favor da sua saúde — sem virar refém de produto "fit"')

  h2(doc, 'Padaria e café da manhã')
  ;['Pão de forma industrial → pão de fermentação natural', 'Cereal matinal açucarado → aveia em flocos', 'Margarina → manteiga (com moderação) ou azeite', 'Suco de caixinha → fruta inteira', 'Achocolatado → cacau em pó 100%'].forEach(t => checkbox(doc, t))

  h2(doc, 'Mercearia')
  ;['Macarrão instantâneo → macarrão comum + molho caseiro', 'Tempero pronto em cubo → alho, cebola e ervas de verdade', 'Molho pronto → tomate pelado + azeite', 'Barrinha de cereal → castanhas e frutas secas', 'Biscoito recheado → chocolate 70% (porção pequena)', 'Refrigerante → água com gás + limão'].forEach(t => checkbox(doc, t))

  h2(doc, 'Açougue e frios')
  ;['Salsicha e nuggets → frango de verdade (coxa/sobrecoxa rende e é barato)', 'Presunto e mortadela → ovos ou frango desfiado', 'Carne empanada congelada → carne moída de boa procedência'].forEach(t => checkbox(doc, t))

  h2(doc, 'Laticínios')
  ;['Iogurte de sabor → iogurte natural + fruta de verdade', 'Queijo processado/fatiado → queijo minas ou muçarela de peça', 'Leite condensado no café → canela ou cacau'].forEach(t => checkbox(doc, t))

  h2(doc, 'Hortifrúti (a regra de ouro)')
  ;['Encha metade do carrinho aqui: quanto mais cor, melhor', 'Compre 2 frutas que regulam o intestino: mamão, kiwi ou ameixa', 'Tenha 1 vegetal "coringa" já lavado para a semana (alface, rúcula)', 'Congele banana madura para vitaminas e "sorvete" caseiro'].forEach(t => checkbox(doc, t))

  doc.moveDown(0.8)
  h2(doc, 'Regra dos 5 ingredientes')
  p(doc, 'Antes de colocar qualquer produto no carrinho, leia o rótulo: se tiver mais de 5 ingredientes — ou nomes que você não reconhece como comida — devolva para a prateleira. Simples assim.')
  rodape(doc)
  doc.end()
}

console.log('3 PDFs gerados em public/materiais/')
