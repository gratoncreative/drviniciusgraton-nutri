# 🚀 Publicar o site (passo a passo) — drviniciusgraton.com.br

O código **já está no GitHub**: repositório privado `gratoncreative/drviniciusgraton-nutri`.
Falta só **conectar a Netlify** (precisa do seu login) e **apontar o domínio**. Leva ~5 minutos.

---

## Opção A — Netlify + GitHub (recomendado: atualiza sozinho a cada mudança)

1. Acesse **app.netlify.com** e faça login (use a mesma conta do site de imóveis).
2. Clique em **Add new site → Import an existing project → GitHub**.
3. Autorize a Netlify a ver seus repositórios (se pedir) e escolha **drviniciusgraton-nutri**.
4. A Netlify já lê o arquivo `netlify.toml` — as configurações vêm prontas:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em **Deploy**. Em ~1 min o site fica no ar num endereço tipo `nome-aleatorio.netlify.app`.

### Apontar o domínio drviniciusgraton.com.br
6. No site recém-criado: **Domain settings → Add a domain** → digite `drviniciusgraton.com.br`.
7. A Netlify mostra os registros de DNS. No seu **registrador do domínio** (onde ele está registrado hoje), aponte conforme indicado (geralmente um CNAME para `www` e o ALIAS/A para o domínio raiz).
8. Aguarde a propagação (minutos a algumas horas). O **HTTPS é ativado de graça e automático**.

> ⚠️ Importante: hoje o domínio aponta para a Hostinger. Ao mudar o DNS para a Netlify,
> o site antigo da Hostinger deixa de aparecer e o novo entra no lugar.

---

## Opção B — Netlify Drop (mais rápido para testar, sem Git)

1. No PC, rode `npm run build` (gera a pasta `dist`).
2. Acesse **app.netlify.com/drop** e **arraste a pasta `dist`** para a página.
3. Em segundos o site fica no ar. Depois é só adicionar o domínio (passos 6–8 acima).

> A Opção B não atualiza sozinha: a cada mudança você arrasta o `dist` de novo.
> Por isso a Opção A é melhor a médio prazo.

---

## Alternativas 100% gratuitas equivalentes
- **Cloudflare Pages** (cloudflare.com) — conecta no mesmo repositório GitHub.
- **Vercel** (vercel.com) — idem. Todas leem o `dist` e dão HTTPS grátis.

---

## Resumo do custo
- Hospedagem: **R$ 0/mês** (qualquer opção acima).
- Domínio `.com.br`: continua pago **só o registro anual** no registrador (~R$40/ano).
