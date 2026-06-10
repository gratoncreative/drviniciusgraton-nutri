// ============================================================================
//  ARTIGOS DO BLOG "Dicas de Saúde"
//  Para adicionar um artigo novo, copie um objeto e preencha os campos.
//  O corpo (html) aceita <h2>, <p>, <ul><li>, <strong>. Use linguagem simples.
// ============================================================================

export const artigos = [
  {
    slug: 'como-desinchar-a-barriga',
    titulo: 'Como desinchar a barriga: 7 hábitos que realmente funcionam',
    descricao:
      'Sente a barriga inchada com frequência? Veja 7 hábitos simples, baseados em nutrição clínica, para reduzir o inchaço abdominal e melhorar a digestão.',
    categoria: 'Saúde intestinal',
    data: '2 de junho de 2026',
    dataISO: '2026-06-02',
    img: 'blog-como-desinchar-a-barriga.jpg',
    html: `
      <p>Acordar com a barriga relativamente lisa e terminar o dia parecendo que "engoliu um balão" é uma queixa muito comum no consultório. Na maioria das vezes, o inchaço abdominal não é gordura — é uma combinação de gases, retenção de líquidos e digestão lenta. A boa notícia: pequenos ajustes resolvem grande parte dos casos.</p>

      <h2>1. Coma mais devagar e mastigue bem</h2>
      <p>A digestão começa na boca. Comer rápido faz você engolir ar e chega comida mal mastigada ao intestino, o que aumenta a fermentação e os gases. Tente pousar o garfo entre as garfadas e mastigar até a comida virar quase um purê.</p>

      <h2>2. Reduza ultraprocessados e excesso de sódio</h2>
      <p>Embutidos, salgadinhos, miojo e congelados são ricos em sódio, que aumenta a retenção de líquidos. Trocar parte deles por comida de verdade já desincha muita gente em poucos dias.</p>

      <h2>3. Beba água ao longo do dia</h2>
      <p>Parece contraintuitivo, mas beber pouca água piora a retenção. Distribua de 30 a 35 ml por quilo de peso ao longo do dia, em vez de grandes quantidades de uma vez.</p>

      <h2>4. Cuidado com o excesso de adoçantes e refrigerantes</h2>
      <p>Bebidas gaseificadas introduzem gás direto no sistema digestivo, e alguns adoçantes (como sorbitol e maltitol) fermentam no intestino, causando gases e desconforto.</p>

      <div class="post-cta">
        <p>Se a barriga inchada é uma constante na sua vida, esses ajustes ajudam — mas identificar a causa exata acelera muito o resultado. Uma avaliação individualizada mapeia o que está inflando você.</p>
        <a class="btn btn--gold" href="https://wa.me/5534991570494" target="_blank" rel="noopener">Falar com o nutricionista</a>
      </div>

      <h2>5. Movimente o corpo</h2>
      <p>Uma caminhada leve após as refeições ajuda o intestino a trabalhar e reduz a sensação de estufamento. Não precisa ser treino pesado — constância vale mais que intensidade.</p>

      <h2>6. Observe os alimentos que te incomodam</h2>
      <p>Leite, trigo, feijão e alguns vegetais podem causar mais gases em pessoas sensíveis. Antes de cortar tudo por conta própria (o que pode prejudicar sua nutrição), vale identificar os reais culpados com acompanhamento.</p>

      <h2>7. Tenha horários e durma bem</h2>
      <p>O intestino gosta de rotina. Refeições em horários parecidos e uma boa noite de sono regulam os hormônios que controlam a fome e o funcionamento digestivo.</p>

      <h2>Alimentos que ajudam a desinchar</h2>
      <p>Alguns alimentos têm efeito prático contra o inchaço e a retenção:</p>
      <ul>
        <li><strong>Ricos em potássio</strong> (banana, abacate, água de coco, batata): ajudam a equilibrar o sódio e a reduzir a retenção;</li>
        <li><strong>Diuréticos naturais</strong> (melancia, abacaxi, pepino, chá de hibisco ou cavalinha): auxiliam a eliminar o excesso de líquidos;</li>
        <li><strong>Iogurte natural e kefir</strong>: fortalecem a flora intestinal e melhoram a digestão;</li>
        <li><strong>Gengibre e hortelã</strong>: têm ação digestiva e reduzem a sensação de estufamento;</li>
        <li><strong>Mamão e kiwi</strong>: regulam o intestino — intestino preso é uma das maiores causas de barriga inchada.</li>
      </ul>
      <p>Se o seu caso envolve intestino lento, vale ler também o guia completo de <a href="/dicas/intestino-preso-o-que-comer/">o que comer para soltar o intestino preso</a>.</p>

      <h2>Exemplo de um dia "anti-inchaço"</h2>
      <ul>
        <li><strong>Café da manhã:</strong> mamão com aveia e chia + ovos mexidos + chá de gengibre;</li>
        <li><strong>Almoço:</strong> arroz + feijão bem cozido + frango grelhado + salada de folhas com pepino e azeite;</li>
        <li><strong>Lanche:</strong> iogurte natural com banana;</li>
        <li><strong>Jantar:</strong> peixe assado + legumes refogados + batata;</li>
        <li><strong>Ao longo do dia:</strong> água distribuída (30–35 ml/kg), mastigação caprichada e uma caminhada leve.</li>
      </ul>
      <p>Note que não há nada "milagroso": é comida de verdade, organizada do jeito certo. É assim que o resultado se sustenta — o mesmo princípio que explico em <a href="/dicas/o-que-comer-para-emagrecer-com-saude/">o que comer para emagrecer com saúde</a>.</p>

      <h2>Perguntas frequentes sobre barriga inchada</h2>
      <h3>Barriga inchada pode ser intolerância à lactose ou ao glúten?</h3>
      <p>Pode, mas não é a regra. Cortar grupos alimentares por conta própria empobrece a dieta e atrasa o diagnóstico. O caminho certo é testar de forma estruturada, com acompanhamento profissional.</p>
      <h3>Chá desincha mesmo?</h3>
      <p>Chás como hibisco e cavalinha têm leve efeito diurético e ajudam na retenção de líquidos, mas não resolvem a causa. Sem ajustar alimentação, mastigação e intestino, o inchaço volta.</p>
      <h3>Quanto tempo leva para desinchar?</h3>
      <p>Quando a causa é retenção e digestão, muitas pessoas notam diferença em 3 a 7 dias de ajustes consistentes. Quadros ligados à flora intestinal ou intolerâncias levam mais tempo e pedem investigação.</p>
      <h3>Inchaço pode ser algo mais sério?</h3>
      <p>Inchaço persistente acompanhado de dor forte, perda de peso sem explicação ou sangue nas fezes merece avaliação médica imediata.</p>

      <h2>Quando procurar um nutricionista</h2>
      <p>Se o inchaço é frequente, vem acompanhado de dor, prisão de ventre ou diarreia, ou não melhora com esses ajustes, é hora de investigar a causa. Como nutricionista clínico (CRN 9.9877), eu avalio sua rotina, exames e sintomas para montar um plano individual — sem dietas malucas e sem cortar alimentos sem necessidade. Para se aprofundar nas recomendações oficiais de alimentação, vale conhecer o <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/guia-alimentar-para-a-populacao-brasileira" target="_blank" rel="noopener nofollow">Guia Alimentar para a População Brasileira</a>.</p>
    `,
  },
  {
    slug: 'o-que-comer-para-emagrecer-com-saude',
    titulo: 'O que comer para emagrecer com saúde (sem dieta restritiva)',
    descricao:
      'Emagrecer não é passar fome. Veja como montar o prato, quais alimentos priorizar e por que dietas radicais sabotam seus resultados a longo prazo.',
    categoria: 'Emagrecimento',
    data: '4 de junho de 2026',
    dataISO: '2026-06-04',
    img: 'blog-o-que-comer-para-emagrecer-com-saude.jpg',
    html: `
      <p>Quem nunca tentou uma dieta super restritiva, perdeu peso rápido e recuperou tudo (às vezes com juros)? Esse é o famoso efeito sanfona. Emagrecer com saúde é o oposto disso: comer bem o suficiente para o corpo confiar que pode liberar gordura, sem viver com fome.</p>

      <h2>Comida de verdade primeiro</h2>
      <p>Antes de pensar em "cortar", pense em <strong>adicionar</strong> comida de verdade. Quando o prato tem nutrientes suficientes, a fome exagerada e a vontade de doce diminuem naturalmente.</p>

      <h2>Como montar o prato</h2>
      <ul>
        <li><strong>Metade do prato:</strong> vegetais e folhas (volume e saciedade com poucas calorias).</li>
        <li><strong>Um quarto:</strong> proteína (carnes magras, ovos, peixes, frango, leguminosas).</li>
        <li><strong>Um quarto:</strong> carboidrato de qualidade (arroz, batata, mandioca, raízes).</li>
        <li><strong>Uma porção de gordura boa:</strong> azeite, abacate, castanhas.</li>
      </ul>

      <h2>Proteína em todas as refeições</h2>
      <p>A proteína é a maior aliada do emagrecimento: aumenta a saciedade, preserva a massa muscular e gasta mais energia para ser digerida. Tente incluir uma fonte em cada refeição.</p>

      <div class="post-cta">
        <p>Se você já tentou de tudo e o peso volta sempre, o problema não é você — é o método. Um plano individualizado, calculado para o seu corpo e a sua rotina, muda esse jogo.</p>
        <a class="btn btn--gold" href="https://wa.me/5534991570494" target="_blank" rel="noopener">Quero um plano para mim</a>
      </div>

      <h2>Por que dietas radicais sabotam</h2>
      <p>Cortes drásticos de calorias derrubam o metabolismo, aumentam a fome e a irritabilidade, e quase sempre terminam em compulsão. O peso até cai no começo, mas o corpo "revida" depois. Resultado que dura vem de mudanças sustentáveis.</p>

      <h2>O que não pode faltar</h2>
      <ul>
        <li>Água ao longo do dia;</li>
        <li>Fibras (vegetais, frutas com casca, leguminosas) para saciedade e intestino;</li>
        <li>Sono de qualidade — dormir mal aumenta a fome no dia seguinte;</li>
        <li>Constância: o que você faz na maior parte do tempo importa mais do que um deslize.</li>
      </ul>

      <h2>Erros que travam o emagrecimento (e quase ninguém percebe)</h2>
      <ul>
        <li><strong>"Compensar" pulando refeições:</strong> aumenta a fome e termina em exagero à noite;</li>
        <li><strong>Calorias líquidas:</strong> sucos, refrigerantes e bebidas alcoólicas somam muito sem matar a fome;</li>
        <li><strong>Comer "fit" demais e de verdade de menos:</strong> barrinhas e produtos diet/light são ultraprocessados com outra roupa;</li>
        <li><strong>Dormir mal:</strong> uma noite ruim aumenta a fome e o desejo por doce no dia seguinte — se esse é o seu caso, veja <a href="/dicas/diminuir-vontade-de-doce/">como controlar a vontade de doce</a>;</li>
        <li><strong>Olhar só a balança:</strong> medidas, fotos, disposição e roupas contam uma história mais fiel que o peso isolado.</li>
      </ul>

      <h2>Quanto peso dá para perder de forma saudável?</h2>
      <p>Um ritmo sustentável fica em torno de 0,5 a 1 kg por semana, dependendo do seu ponto de partida. Mais rápido que isso, em geral, significa perder água e músculo — o que derruba o metabolismo e prepara o efeito sanfona. Emagrecer bem é perder <strong>gordura</strong> preservando massa muscular.</p>

      <h2>Perguntas frequentes sobre emagrecer com saúde</h2>
      <h3>Preciso cortar carboidrato para emagrecer?</h3>
      <p>Não. O que define o emagrecimento é o balanço energético e a qualidade do que você come. Carboidratos de verdade (arroz, batata, frutas, raízes) cabem — e ajudam a manter o plano de pé.</p>
      <h3>Posso comer doce durante o emagrecimento?</h3>
      <p>Pode, de forma planejada. A proibição total aumenta a compulsão. O segredo é a dose e o contexto, não o "nunca mais".</p>
      <h3>Por que eu emagreço e depois engordo tudo de novo?</h3>
      <p>Porque dietas radicais não ensinam o corpo (nem você) a viver no novo peso. Sem reeducação e sem preservar músculo, o metabolismo cai e a fome aumenta — a combinação perfeita do efeito sanfona.</p>
      <h3>Dieta dos famosos / da moda funciona?</h3>
      <p>Qualquer dieta que corte muito gera perda de peso no curto prazo. A pergunta certa é: dá para viver assim? Se a resposta é não, o resultado vai embora junto com a dieta.</p>

      <h2>O segredo é a individualização</h2>
      <p>Não existe dieta única que sirva para todo mundo. A quantidade ideal de comida, os melhores horários e os ajustes dependem da sua rotina, do seu metabolismo e dos seus objetivos. Como nutricionista clínico (CRN 9.9877), eu monto um plano feito para a sua vida real — para você emagrecer comendo bem e manter o resultado. As diretrizes oficiais do <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/guia-alimentar-para-a-populacao-brasileira" target="_blank" rel="noopener nofollow">Guia Alimentar para a População Brasileira</a> reforçam o mesmo princípio: comida de verdade como base da alimentação.</p>
    `,
  },
  {
    slug: 'intestino-preso-o-que-comer',
    titulo: 'Intestino preso: o que comer para regular de vez',
    descricao:
      'Prisão de ventre atrapalha o dia a dia e o bem-estar. Conheça os alimentos, a quantidade de água e os hábitos que ajudam a regular o intestino naturalmente.',
    categoria: 'Saúde intestinal',
    data: '6 de junho de 2026',
    dataISO: '2026-06-06',
    img: 'blog-intestino-preso-o-que-comer.jpg',
    html: `
      <p>Ir ao banheiro menos de três vezes por semana, com esforço ou sensação de evacuação incompleta, já caracteriza prisão de ventre. Além do desconforto, o intestino preso impacta o humor, a disposição e até a saúde da pele. A alimentação é a primeira (e mais poderosa) ferramenta para regular.</p>

      <h2>Fibras: as aliadas número 1</h2>
      <p>As fibras dão volume e maciez ao bolo fecal, facilitando a passagem. Boas fontes:</p>
      <ul>
        <li>Frutas com casca e bagaço (mamão, laranja com bagaço, ameixa, kiwi);</li>
        <li>Vegetais e folhas variadas;</li>
        <li>Leguminosas (feijão, lentilha, grão-de-bico);</li>
        <li>Aveia, chia e linhaça;</li>
        <li>Cereais e pães integrais de verdade.</li>
      </ul>

      <h2>Água é parte essencial</h2>
      <p>De nada adianta comer muita fibra e beber pouca água — pode até piorar. As fibras precisam de líquido para "inchar" e amolecer as fezes. Capriche na hidratação ao longo do dia.</p>

      <div class="post-cta">
        <p>Convive com o intestino preso há meses (ou anos)? Isso tem solução — mas cada intestino tem uma causa. Uma avaliação individualizada identifica a sua e monta o plano certo.</p>
        <a class="btn btn--gold" href="https://wa.me/5534991570494" target="_blank" rel="noopener">Quero regular meu intestino</a>
      </div>

      <h2>Movimento e rotina no banheiro</h2>
      <p>A atividade física estimula os movimentos do intestino. E vale criar o hábito de ir ao banheiro sempre no mesmo horário, sem pressa e sem segurar a vontade — o intestino responde à rotina.</p>

      <h2>Probióticos e comida fermentada</h2>
      <p>Iogurte natural, kefir e outros fermentados ajudam a equilibrar a flora intestinal, que tem papel direto no funcionamento do intestino.</p>

      <h2>O que costuma travar o intestino</h2>
      <ul>
        <li>Excesso de ultraprocessados e baixa ingestão de fibras;</li>
        <li>Pouca água;</li>
        <li>Sedentarismo;</li>
        <li>Segurar a vontade de evacuar;</li>
        <li>Estresse e sono ruim.</li>
      </ul>

      <h2>Cardápio de um dia amigo do intestino</h2>
      <ul>
        <li><strong>Ao acordar:</strong> 1 copo grande de água + 1 kiwi ou ameixa;</li>
        <li><strong>Café da manhã:</strong> mamão com aveia, chia hidratada e iogurte natural;</li>
        <li><strong>Almoço:</strong> arroz integral + feijão + carne magra + salada variada com azeite;</li>
        <li><strong>Lanche:</strong> fruta com casca + castanhas;</li>
        <li><strong>Jantar:</strong> legumes refogados + omelete + batata-doce;</li>
        <li><strong>Regra de ouro:</strong> fibra sempre acompanhada de água ao longo do dia.</li>
      </ul>
      <p>O intestino preso costuma andar junto com a barriga estufada — se esse é o seu caso, veja também <a href="/dicas/como-desinchar-a-barriga/">como desinchar a barriga</a>.</p>

      <h2>Laxante faz mal?</h2>
      <p>O uso frequente de laxantes irritativos, por conta própria, pode deixar o intestino cada vez mais "preguiçoso" e dependente, além de mascarar a causa real. Eles têm seu lugar — mas com indicação e acompanhamento, nunca como rotina.</p>

      <h2>Perguntas frequentes sobre intestino preso</h2>
      <h3>Quantas vezes por semana é normal ir ao banheiro?</h3>
      <p>Há variação individual, mas menos de 3 evacuações por semana, com esforço ou fezes muito ressecadas, já configura constipação e merece atenção.</p>
      <h3>Qual fruta é mais indicada para soltar o intestino?</h3>
      <p>Mamão, ameixa (fresca ou seca hidratada), kiwi e laranja com bagaço são as campeãs — sempre com boa hidratação junto.</p>
      <h3>Probiótico resolve intestino preso?</h3>
      <p>Pode ajudar como parte da estratégia, mas não substitui fibra, água e rotina. E a cepa certa varia conforme o caso — por isso a individualização importa.</p>
      <h3>Intestino preso engorda?</h3>
      <p>Não engorda no sentido de gordura, mas causa inchaço, desconforto e peso na balança pela retenção de fezes. Regular o intestino "desincha" visivelmente.</p>

      <h2>Quando buscar ajuda</h2>
      <p>Se o intestino preso é persistente, dói, alterna com diarreia ou apareceu de repente, é importante investigar. Como nutricionista clínico (CRN 9.9877), eu avalio sua alimentação, hidratação, rotina e exames para montar um plano que regule o intestino de forma natural e duradoura. Você também pode consultar as recomendações de alimentação saudável da <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener nofollow">Organização Mundial da Saúde</a>.</p>
    `,
  },
  {
    slug: 'resistencia-insulina-sinais',
    titulo: 'Resistência à insulina: 7 sinais antes do diabetes',
    descricao:
      'Cansaço, gordura na barriga e vontade de doce? Veja 7 sinais de resistência à insulina e o que fazer pela alimentação antes que vire diabetes.',
    categoria: 'Saúde metabólica',
    data: '10 de junho de 2026',
    dataISO: '2026-06-10',
    img: 'blog-resistencia-insulina-sinais.jpg',
    html: `
      <p>Você sente um cansaço que não passa, acumula gordura na barriga mesmo sem exagerar na comida e tem uma vontade de doce que parece impossível de controlar? Esses sinais tão comuns podem ser o seu corpo avisando que algo não vai bem com a insulina — às vezes anos antes de um exame acusar diabetes.</p>
      <p>A resistência à insulina é uma das alterações metabólicas mais silenciosas e, ao mesmo tempo, das mais reversíveis quando identificada cedo. O problema é que quase ninguém liga os pontos: os sinais são tratados como "normais" da correria.</p>
      <p>Neste guia você vai entender o que é a resistência à insulina, os 7 sinais que o corpo dá antes do diabetes e, principalmente, o que fazer pela alimentação para reverter o quadro.</p>

      <h2>O que é resistência à insulina</h2>
      <p>A insulina é o hormônio que coloca a glicose (o açúcar do sangue) para dentro das células, onde ela vira energia. Na resistência à insulina, as células passam a "responder mal" a esse hormônio. Para compensar, o pâncreas produz cada vez mais insulina.</p>
      <p>Esse excesso de insulina circulando (hiperinsulinemia) é justamente o que favorece o acúmulo de gordura, a fome constante e a inflamação — e, com o tempo, pode evoluir para pré-diabetes e diabetes tipo 2. A boa notícia: na maioria dos casos, dá para reverter com alimentação e estilo de vida.</p>

      <h2>Os 7 sinais de resistência à insulina antes do diabetes</h2>
      <ul>
        <li><strong>1. Gordura abdominal teimosa:</strong> barriga que não sai mesmo com dieta, especialmente o "pneuzinho" na cintura.</li>
        <li><strong>2. Cansaço após as refeições:</strong> aquela sonolência e moleza depois de comer, principalmente carboidratos.</li>
        <li><strong>3. Vontade frequente de doce e pão:</strong> desejo por açúcar e carboidrato que volta sempre.</li>
        <li><strong>4. Fome pouco tempo depois de comer:</strong> você almoça e em 2 horas já está com fome de novo.</li>
        <li><strong>5. Manchas escuras na pele:</strong> escurecimento no pescoço, axilas ou virilha (acantose nigricans).</li>
        <li><strong>6. Dificuldade para emagrecer:</strong> faz tudo "certo" e o peso não desce.</li>
        <li><strong>7. Exames no limite:</strong> triglicérides altos, HDL baixo, glicemia ou insulina de jejum no limite superior.</li>
      </ul>
      <p>Ter um ou dois sinais isolados não fecha diagnóstico — mas vários deles juntos são um forte alerta para investigar.</p>

      <h2>Por que a resistência à insulina acontece</h2>
      <p>Os principais gatilhos são o excesso de ultraprocessados e açúcar, o sedentarismo, o sono ruim, o estresse crônico e o acúmulo de gordura abdominal. A genética influencia, mas o estilo de vida é o que mais pesa — e é onde está o seu poder de mudar.</p>

      <div class="post-cta">
        <p>Se você se identificou com vários desses sinais, vale investigar a causa. Uma avaliação nutricional individualizada cruza os seus sintomas com os seus exames e monta um plano para reverter o quadro.</p>
        <a class="btn btn--gold" href="https://wa.me/5534991570494" target="_blank" rel="noopener">Falar comigo no WhatsApp</a>
      </div>

      <h2>O que comer para melhorar a sensibilidade à insulina</h2>
      <p>O foco não é "cortar carboidrato para sempre", e sim melhorar a qualidade da alimentação e a forma de comer:</p>
      <ul>
        <li><strong>Proteína em todas as refeições</strong> (ovos, carnes magras, peixes, leguminosas) — aumenta a saciedade e estabiliza a glicose.</li>
        <li><strong>Mais fibras</strong> (vegetais, frutas com casca, aveia, leguminosas), que reduzem os picos de açúcar no sangue.</li>
        <li><strong>Menos açúcar e ultraprocessados</strong> — o ajuste que mais muda o jogo.</li>
        <li><strong>Gorduras boas</strong> (azeite, abacate, castanhas) no lugar de frituras e gorduras trans.</li>
        <li><strong>Ordem dos alimentos:</strong> comer primeiro vegetais e proteína, e o carboidrato por último, reduz o pico de glicose da refeição.</li>
      </ul>
      <p>Se a vontade de doce é o seu maior obstáculo, veja também <a href="/dicas/diminuir-vontade-de-doce/">como diminuir a vontade de comer doce</a> e o passo a passo de <a href="/dicas/o-que-comer-para-emagrecer-com-saude/">o que comer para emagrecer com saúde</a>.</p>

      <h2>Hábitos que vão além do prato</h2>
      <p>O músculo é o maior "consumidor" de glicose do corpo: por isso, atividade física (mesmo caminhada) melhora muito a sensibilidade à insulina. Somam-se a isso dormir bem e controlar o estresse — dois fatores que, quando ignorados, sabotam qualquer dieta.</p>

      <h2>Como o diagnóstico é feito na prática</h2>
      <p>Não existe um exame único e isolado que "carimbe" a resistência à insulina. O quadro é montado como um quebra-cabeça: glicemia e insulina de jejum (que permitem calcular o índice <strong>HOMA-IR</strong>), hemoglobina glicada, triglicérides, HDL e a circunferência abdominal — tudo interpretado junto com os seus sintomas e histórico.</p>
      <p>Um detalhe importante: é comum a glicemia estar <strong>normal</strong> por anos enquanto a insulina já está alta. É por isso que muita gente recebe um "está tudo bem" no check-up e continua acumulando gordura abdominal e cansaço. Olhar só a glicose é ver metade do filme.</p>

      <h2>Plano prático: por onde começar esta semana</h2>
      <ul>
        <li><strong>Dia 1–2:</strong> tire os líquidos doces (refrigerante, suco com açúcar, café adoçado). É o corte de melhor custo-benefício;</li>
        <li><strong>Dia 3–4:</strong> garanta proteína no café da manhã (ovos, queijo, iogurte natural) — segura a glicose o dia inteiro;</li>
        <li><strong>Dia 5:</strong> adicione 1 prato de salada antes do carboidrato no almoço e no jantar;</li>
        <li><strong>Dia 6:</strong> caminhe 20–30 minutos (de preferência após uma refeição);</li>
        <li><strong>Dia 7:</strong> durma 7–8 horas — o sono ruim de uma única noite já piora a resposta à insulina no dia seguinte.</li>
      </ul>
      <p>Parece simples — e é. Consistência nesses pontos, semana após semana, muda exames e medidas.</p>

      <h2>Mitos que atrapalham</h2>
      <ul>
        <li><strong>"Resistência à insulina é só de quem está acima do peso"</strong> — pessoas magras também desenvolvem, especialmente com sedentarismo e dieta ruim;</li>
        <li><strong>"Fruta é proibida"</strong> — fruta inteira, com fibra, é aliada; o problema é o suco coado e o excesso;</li>
        <li><strong>"Só remédio resolve"</strong> — a base do tratamento é estilo de vida; a medicação, quando indicada, complementa.</li>
      </ul>

      <h2>Perguntas frequentes</h2>
      <h3>Resistência à insulina tem cura?</h3>
      <p>Na maioria dos casos ela é reversível com mudança de alimentação, atividade física, sono e perda de gordura abdominal — especialmente quando tratada cedo.</p>
      <h3>Quais exames detectam resistência à insulina?</h3>
      <p>Glicemia e insulina de jejum, índice HOMA-IR, hemoglobina glicada e o perfil de triglicérides/HDL ajudam a avaliar. A interpretação deve ser feita por um profissional, junto com os seus sintomas.</p>
      <h3>Resistência à insulina sempre vira diabetes?</h3>
      <p>Não. Identificada e tratada a tempo, a progressão para o diabetes tipo 2 pode ser evitada. Por isso reconhecer os sinais cedo é tão importante.</p>

      <h2>Quando procurar um nutricionista</h2>
      <p>Como nutricionista clínico (CRN 9.9877), meu trabalho é justamente investigar a raiz desses sinais e montar um plano alimentar individualizado — com comida de verdade e que cabe na sua rotina — para melhorar a sua sensibilidade à insulina e a sua disposição. Você pode se aprofundar em fontes como a <a href="https://diabetes.org.br" target="_blank" rel="noopener nofollow">Sociedade Brasileira de Diabetes</a> e nas evidências científicas reunidas no <a href="https://pubmed.ncbi.nlm.nih.gov/?term=insulin+resistance+diet" target="_blank" rel="noopener nofollow">PubMed</a>.</p>
    `,
  },
  {
    slug: 'diminuir-vontade-de-doce',
    titulo: 'Vontade de comer doce: como controlar de verdade',
    descricao:
      'Vontade de doce o tempo todo? Entenda as causas (não é falta de força de vontade) e veja como reduzir o desejo por açúcar de forma sustentável.',
    categoria: 'Emagrecimento',
    data: '9 de junho de 2026',
    dataISO: '2026-06-09',
    img: 'blog-diminuir-vontade-de-doce.jpg',
    html: `
      <p>Se você termina o almoço já pensando na sobremesa, ataca o armário no fim da tarde e sente que a vontade de doce tem mais força do que você, respire: o problema quase nunca é "fraqueza". É biologia — e dá para resolver.</p>
      <p>A vontade de comer doce é um dos motivos que mais sabotam quem tenta emagrecer ou melhorar a alimentação. Entender de onde ela vem é o primeiro passo para reduzi-la sem viver em sofrimento.</p>
      <p>Neste artigo você vai ver as causas reais do desejo por açúcar e estratégias práticas, baseadas em nutrição clínica, para controlar a vontade de doce.</p>

      <h2>Por que dá tanta vontade de doce</h2>
      <p>As causas mais comuns não têm nada a ver com falta de disciplina:</p>
      <ul>
        <li><strong>Refeições pobres em proteína e fibra:</strong> você come, mas o corpo continua "com fome" e pede energia rápida (açúcar).</li>
        <li><strong>Picos e quedas de glicose:</strong> uma refeição muito rica em carboidrato refinado faz a glicose subir e despencar — e a queda dispara a vontade de doce.</li>
        <li><strong>Restrição exagerada:</strong> proibir 100% o doce aumenta a obsessão e leva à compulsão.</li>
        <li><strong>Sono ruim e estresse:</strong> alteram os hormônios da fome e fazem o cérebro buscar recompensa rápida.</li>
        <li><strong>Hábito e gatilhos emocionais:</strong> o doce vira "prêmio" ou alívio para a ansiedade.</li>
      </ul>

      <div class="post-cta">
        <p>Se a vontade de doce está atrapalhando o seu emagrecimento, dá para reorganizar a sua alimentação para que ela diminua naturalmente — sem dieta de sofrimento.</p>
        <a class="btn btn--gold" href="https://wa.me/5534991570494" target="_blank" rel="noopener">Quero ajuda com isso</a>
      </div>

      <h2>Como diminuir a vontade de comer doce</h2>
      <ul>
        <li><strong>Coma proteína em todas as refeições:</strong> é o que mais reduz o desejo por doce ao longo do dia.</li>
        <li><strong>Capriche nas fibras:</strong> vegetais, frutas com casca e leguminosas estabilizam a glicose.</li>
        <li><strong>Não pule refeições:</strong> chegar faminto à próxima refeição é receita para atacar o açúcar.</li>
        <li><strong>Tenha alternativas à mão:</strong> fruta, iogurte natural, uma porção pequena de chocolate amargo.</li>
        <li><strong>Durma melhor e cuide do estresse:</strong> reduz a fome emocional.</li>
        <li><strong>Permita-se com consciência:</strong> incluir o doce em quantidade planejada tira o "proibido" e diminui a compulsão.</li>
      </ul>
      <p>Muitas vezes a vontade intensa de doce também é sinal de <a href="/dicas/resistencia-insulina-sinais/">resistência à insulina</a> — vale conhecer os sinais. E para organizar o prato como um todo, veja <a href="/dicas/o-que-comer-para-emagrecer-com-saude/">o que comer para emagrecer com saúde</a>.</p>

      <h2>O que fazer na hora em que a vontade bater</h2>
      <p>Estratégia de 4 passos para o momento crítico (fim de tarde, depois do jantar, TPM):</p>
      <ul>
        <li><strong>1. Espere 10 minutos:</strong> a onda do desejo sobe, faz pico e desce. Beba um copo de água e mude de ambiente;</li>
        <li><strong>2. Cheque a fome real:</strong> se você comeria uma fruta, é fome — coma algo de verdade. Se só serve o doce, é desejo;</li>
        <li><strong>3. Se for comer o doce, coma sentado e presente:</strong> porção definida, sem culpa e sem "já que comi, vou até o fim";</li>
        <li><strong>4. Note o gatilho:</strong> cansaço? estresse? tédio? Identificar o padrão vale mais que qualquer proibição.</li>
      </ul>

      <h2>Trocas mais inteligentes (sem virar refém de "fit")</h2>
      <ul>
        <li>Chocolate ao leite → <strong>chocolate 60–70% cacau</strong> (1–2 quadradinhos satisfazem mais);</li>
        <li>Sobremesa todo dia → <strong>fruta + iogurte natural com canela</strong> na semana, sobremesa de verdade no fim de semana;</li>
        <li>Doce escondido na gaveta → <strong>doce planejado no mercado</strong>: porção individual, comprada na hora, sem estoque em casa;</li>
        <li>Suco e refrigerante → <strong>água com gás + limão</strong> nas refeições.</li>
      </ul>
      <p>O objetivo não é nunca mais comer doce — é o doce virar escolha, não impulso.</p>

      <h2>Perguntas frequentes</h2>
      <h3>Cortar o açúcar de uma vez funciona?</h3>
      <p>Para a maioria das pessoas, o corte radical aumenta a obsessão e termina em compulsão. Reduzir de forma gradual, melhorando as refeições, costuma ser mais sustentável.</p>
      <h3>Adoçante ajuda a parar de querer doce?</h3>
      <p>Pode ajudar pontualmente, mas manter o paladar sempre "muito doce" tende a perpetuar o desejo. O ideal é reeducar o paladar aos poucos.</p>
      <h3>Vontade de doce pode ser falta de algum nutriente?</h3>
      <p>Mais do que falta de um nutriente específico, costuma refletir refeições desequilibradas, sono ruim e oscilações de glicose. Uma avaliação identifica o seu caso.</p>

      <h2>Quando procurar um nutricionista</h2>
      <p>Como nutricionista clínico (CRN 9.9877), eu ajudo você a montar refeições que reduzem a vontade de doce na origem, respeitando o seu paladar e a sua rotina. Para se aprofundar, a <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener nofollow">Organização Mundial da Saúde</a> traz recomendações sobre consumo de açúcar e alimentação saudável.</p>
    `,
  },
  {
    slug: 'cansaco-mesmo-dormindo-bem',
    titulo: 'Cansaço mesmo dormindo bem: o que pode ser',
    descricao:
      'Dorme bem mas vive cansado? Veja as causas nutricionais do cansaço (ferro, vitamina D, glicemia) e o que fazer para recuperar a sua energia.',
    categoria: 'Saúde metabólica',
    data: '8 de junho de 2026',
    dataISO: '2026-06-08',
    img: 'blog-cansaco-mesmo-dormindo-bem.jpg',
    html: `
      <p>Você dorme as suas horas, mas acorda sem energia e arrasta o dia inteiro no cansaço? Essa queixa é mais comum do que parece — e, muitas vezes, a resposta está na alimentação e no metabolismo, não só no sono.</p>
      <p>Sentir-se cansado o tempo todo, mesmo dormindo bem, não é "normal" nem frescura. É um sinal de que algo precisa de atenção.</p>
      <p>Neste artigo você vai entender as principais causas nutricionais do cansaço persistente e o que fazer para recuperar a disposição.</p>

      <h2>Por que o cansaço persiste mesmo com sono em dia</h2>
      <p>Quando o sono está adequado e a fadiga continua, vale investigar fatores como:</p>
      <ul>
        <li><strong>Deficiência de ferro / anemia:</strong> uma das causas mais comuns de cansaço, especialmente em mulheres.</li>
        <li><strong>Baixa de vitamina D e vitamina B12:</strong> impactam diretamente a energia e a disposição.</li>
        <li><strong>Oscilações de glicose:</strong> refeições muito ricas em açúcar causam picos e quedas que dão sonolência e fadiga.</li>
        <li><strong>Alimentação insuficiente ou desequilibrada:</strong> pouca proteína e excesso de ultraprocessados deixam o corpo "sem combustível de qualidade".</li>
        <li><strong>Hidratação inadequada</strong> e consumo excessivo de cafeína também pioram o quadro.</li>
        <li><strong>Tireoide e outras questões clínicas:</strong> que merecem avaliação médica.</li>
      </ul>

      <div class="post-cta">
        <p>Se o cansaço te acompanha há semanas mesmo dormindo bem, vale investigar a causa com exames e alimentação. Uma avaliação individualizada ajuda a mapear o que está drenando a sua energia.</p>
        <a class="btn btn--gold" href="https://wa.me/5534991570494" target="_blank" rel="noopener">Agendar avaliação</a>
      </div>

      <h2>O que comer para ter mais energia</h2>
      <ul>
        <li><strong>Proteína em todas as refeições</strong> para estabilizar a glicose e a saciedade.</li>
        <li><strong>Fontes de ferro</strong> (carnes, leguminosas, vegetais verde-escuros) combinadas com vitamina C para melhor absorção.</li>
        <li><strong>Carboidratos de qualidade</strong> (raízes, frutas, integrais) em vez de açúcar e refinados.</li>
        <li><strong>Boa hidratação</strong> ao longo do dia.</li>
        <li><strong>Cuidado com o excesso de café</strong>, que mascara o cansaço e atrapalha o sono.</li>
      </ul>
      <p>Vale lembrar que oscilações de energia e fome também aparecem na <a href="/dicas/resistencia-insulina-sinais/">resistência à insulina</a>, e que montar bem o prato faz diferença — veja <a href="/dicas/o-que-comer-para-emagrecer-com-saude/">como montar refeições equilibradas</a>.</p>

      <h2>Um dia alimentar pró-energia (exemplo)</h2>
      <ul>
        <li><strong>Café da manhã:</strong> ovos mexidos + pão integral + mamão. Café puro depois (não no lugar) da comida;</li>
        <li><strong>Almoço:</strong> arroz + feijão + carne ou frango + salada colorida com azeite. Prato equilibrado = tarde sem sonolência;</li>
        <li><strong>Lanche:</strong> iogurte natural + banana + castanhas;</li>
        <li><strong>Jantar:</strong> leve, 2–3 h antes de dormir (omelete com legumes), para não atrapalhar o sono;</li>
        <li><strong>Cafeína:</strong> última dose até 8 horas antes de deitar — depois disso ela rouba o sono profundo que devolveria sua energia.</li>
      </ul>

      <h2>Suplemento para energia: quando faz sentido?</h2>
      <p>Suplementar ferro, vitamina D ou B12 só faz sentido quando o exame mostra deficiência — aí o efeito na disposição é real. Tomar "polivitamínico para energia" sem saber o que falta é gastar dinheiro e, no caso do ferro, pode até fazer mal. Primeiro o diagnóstico, depois a dose certa, pelo tempo certo.</p>

      <h2>Sinais de alerta que pedem avaliação médica</h2>
      <p>Cansaço acompanhado de falta de ar, palpitações, perda de peso sem explicação, queda de cabelo intensa, pele muito seca ou tristeza persistente merece investigação médica além da nutricional — algumas causas (tireoide, anemia importante, depressão) precisam de tratamento específico.</p>

      <h2>Perguntas frequentes</h2>
      <h3>Falta de vitamina causa cansaço?</h3>
      <p>Sim. Deficiências de ferro, vitamina D e B12 estão entre as causas nutricionais mais frequentes de fadiga. Só exames confirmam — não se deve suplementar por conta própria.</p>
      <h3>Quais exames pedir para cansaço?</h3>
      <p>Hemograma, ferritina, vitamina D, B12 e função da tireoide são um bom ponto de partida, sempre com orientação profissional.</p>
      <h3>Comer pouco dá cansaço?</h3>
      <p>Sim. Comer abaixo do necessário, ou com pouca proteína, deixa o corpo sem combustível adequado e gera fadiga.</p>

      <h2>Quando procurar um nutricionista</h2>
      <p>Como nutricionista clínico (CRN 9.9877), analiso a sua alimentação junto com os seus exames para identificar e corrigir as causas do cansaço — devolvendo a sua energia com comida de verdade. Você pode consultar orientações oficiais sobre alimentação saudável no <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener nofollow">Ministério da Saúde</a>.</p>
    `,
  },
]

// Mais recentes primeiro
export const artigosOrdenados = [...artigos].sort((a, b) => (a.dataISO < b.dataISO ? 1 : -1))

export const tempoLeitura = (html) => {
  const palavras = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length
  return Math.max(2, Math.round(palavras / 200))
}
