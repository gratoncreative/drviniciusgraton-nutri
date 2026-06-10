# Site — Dr. Vinícius Graton (Nutricionista Clínico)

Site profissional em **React + Vite**, projetado para ser **100% gratuito** de hospedar.
Projeto totalmente separado do site de corretor de imóveis.

---

## 🚀 Como rodar localmente

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build    # gera a pasta /dist
npm run preview  # testa a versão de produção
```

---

## ✏️ O que você precisa editar

Quase tudo que muda no dia a dia está em **um único arquivo**:

`src/data/site.js`
- **WhatsApp** → troque `whatsapp` pelo seu número real (formato `55` + DDD + número, só dígitos)
- **Instagram** → troque `instagram` pelo seu @
- E-mail, cidade, CRN, etc.

### Fotos
As fotos hoje são *placeholders*. Para colocar as suas:
1. Coloque os arquivos em `public/` (ex: `public/vinicius.jpg`)
2. No `src/App.jsx`, troque os blocos `.hero__photo` e `.about__photo` por uma `<img src="/vinicius.jpg" />`

### Textos e depoimentos
- Seções e textos: `src/App.jsx`
- Perguntas frequentes: `src/components/Faq.jsx`
- Os depoimentos são ilustrativos — substitua por relatos reais.

---

## 🌐 Como publicar de graça (Netlify) e usar o domínio drviniciusgraton.com.br

1. Crie uma conta grátis em **netlify.com**.
2. Suba este projeto para o GitHub (ou arraste a pasta `dist` no Netlify Drop).
3. No Netlify, conecte o repositório — ele já lê o `netlify.toml` e faz o build sozinho.
4. Em **Domain settings**, adicione `drviniciusgraton.com.br`.
5. No seu registrador de domínio, aponte o DNS para o Netlify (eles mostram os registros).
6. SSL/HTTPS é ativado automaticamente e de graça.

Resultado: hospedagem **R$ 0/mês**. Só o registro anual do domínio segue pago no registrador.

> Alternativas igualmente gratuitas: **Cloudflare Pages** ou **Vercel** — o mesmo `dist` funciona.

---

## Stack
- React 18 + Vite 5
- framer-motion (animações) · lenis (scroll suave)
- SVG icons inline (sem dependências de ícone)
- Sem backend → nada para pagar
