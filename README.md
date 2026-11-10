# O Manual da Fertilidade: landing page

Página de vendas do e-book **O Manual da Fertilidade**, do Dr. Rodrigo Zangriane.

O objetivo da página é um só: levar o visitante a clicar em **Comprar** e ir para o checkout da **Kiwify**, onde a venda acontece. A página não processa pagamento, não tem backend e não tem banco de dados. É um site estático (Next.js + Tailwind) hospedado na Vercel.

---

## 1. Antes de publicar: o que preencher

Tudo que pode mudar está em **um único arquivo**: [`src/config/site.ts`](src/config/site.ts).

Procure por `[PREENCHER]`, `SEU-CODIGO` e `[EXEMPLO, SUBSTITUIR]` nesse arquivo. Itens obrigatórios:

| Campo | O que colocar |
|---|---|
| `checkoutUrl` | Link do checkout da Kiwify |
| `preco` | Ex.: `"R$ 47,00"` |
| `precoParcelado` | Ex.: `"ou 12x de R$ 4,86 no cartão"`. Deixe `""` para não exibir |
| `autor.crm` e `autor.uf` | Número do CRM e estado |
| `autor.bio` | Parágrafos da biografia |
| `emailContato` | E-mail de suporte |
| `casos.lista` | Os 3 casos reais, aprovados pelo autor e anonimizados |

Também é preciso trocar a **capa**: o arquivo `public/capa.jpg` atual é **provisório** e tem a faixa vermelha "CAPA PROVISÓRIA". Substitua-o pela capa real, com o mesmo nome. Recomendações:
- largura de cerca de 800 px, formato JPG, até ~150 KB (afeta a velocidade no celular);
- se a proporção não for 2:3, ajuste `capa.largura` e `capa.altura` em `site.ts`.

Campos opcionais (vazios = não aparecem): `precoAntigo`, `autor.rqe`, `autor.especialidade`, `autor.fotoUrl`.

> **Publicidade médica (CFM).** Não prometa cura, gravidez ou resultado. Não use nome, foto, iniciais, cidade, profissão, idade exata ou qualquer detalhe que permita reconhecer um paciente. Só informe especialidade se houver RQE registrado. Use `precoAntigo` apenas se esse preço tiver sido praticado de fato.

---

## 2. Como editar `src/config/site.ts`

- Edite só o texto **entre aspas**. Mantenha as aspas e a vírgula no fim da linha.
- Listas (`itens`, `topicos`, `casos.lista`, `faq.perguntas`, `autor.bio`) aceitam mais ou menos itens: copie um bloco `{ ... },` inteiro para adicionar, ou apague um para remover.
- No FAQ, escreva `{email}` dentro de uma resposta para inserir o e-mail de contato como link.
- Todos os textos das seções (títulos, introduções, rótulos, textos dos botões, rodapé) estão no mesmo arquivo, organizados na ordem da página.
- Foto do autor: coloque o arquivo em `public/` (ex.: `public/autor.jpg`, quadrado, ~480 px) e preencha `autor.fotoUrl: "/autor.jpg"`. Sem foto, aparecem as iniciais num círculo.

Depois de salvar, a página atualiza sozinha no `npm run dev`.

---

## 3. Como trocar o link da Kiwify

1. No painel da Kiwify, abra **Produtos → O Manual da Fertilidade → Links** e copie o link de checkout (algo como `https://pay.kiwify.com.br/AbC123`).
2. Em `src/config/site.ts`, troque:
   ```ts
   checkoutUrl: "https://pay.kiwify.com.br/SEU-CODIGO",
   ```
   pelo seu link.
3. Faça um novo deploy (veja a seção 6).

Como funciona:
- **Todos** os botões de compra (topo, oferta e barra fixa do celular) usam o mesmo componente `<BuyButton />` e o mesmo link.
- Os parâmetros da URL da página são repassados ao checkout. Exemplo: quem chega por `manualdafertilidade.com.br/?utm_source=instagram&utm_campaign=bio` vai para `https://pay.kiwify.com.br/AbC123?utm_source=instagram&utm_campaign=bio`. Isso vale para `utm_*`, `src`, `sck` e qualquer outro parâmetro. Parâmetros que **já existem** no link da Kiwify nunca são sobrescritos.
- Enquanto o link tiver `SEU-CODIGO` ou `[PREENCHER]`, os botões **não** levam ao checkout: eles rolam até a seção de oferta e mostram um aviso no console do navegador.

### Meta Pixel e Google Analytics (opcional)

Há um ponto preparado, desativado por padrão:
1. Preencha `analytics.metaPixelId` e/ou `analytics.googleAnalyticsId` em `site.ts`.
2. Descomente o código em `src/components/Analytics.tsx` (carrega os scripts).
3. Descomente as chamadas em `src/lib/tracking.ts` (dispara `InitiateCheckout` no clique em Comprar).

Ao ativar rastreamento, avalie a LGPD (aviso de cookies e política de privacidade).

---

## 4. Como rodar no computador

Pré-requisito: [Node.js](https://nodejs.org) 20 ou mais recente.

```bash
npm install     # só na primeira vez
npm run dev     # abre em http://localhost:3000
```

---

## 5. Como fazer o build

```bash
npm run build   # gera o site estático na pasta /out
npm run start   # (opcional) serve a pasta /out em http://localhost:3000 para conferir
```

O conteúdo de `/out` é o site completo (HTML, CSS, JS e imagens). O ano do rodapé é definido no momento do build, então cada novo deploy o atualiza.

---

## 6. Como publicar na Vercel

### 6.1 Primeiro deploy

**Opção A: pelo GitHub (recomendado, cada alteração publica sozinha)**
1. Crie um repositório no GitHub e envie este projeto.
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Next.js automaticamente. Não altere nada e clique em **Deploy**.
4. A partir daí, cada `git push` gera um novo deploy.

**Opção B: pela linha de comando**
```bash
npm i -g vercel
vercel          # primeiro deploy (cria o projeto)
vercel --prod   # publica em produção
```

### 6.2 Apontar o domínio `manualdafertilidade.com.br`

1. Na Vercel, abra o projeto → **Settings → Domains**.
2. Adicione `manualdafertilidade.com.br` e também `www.manualdafertilidade.com.br`. Escolha um deles como principal e a Vercel redireciona o outro.
3. A Vercel mostra os registros DNS necessários. Use **os valores que ela exibir**; normalmente são:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | *(vazio / @)* | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

### 6.3 Configurar o DNS no Registro.br

1. Entre em [registro.br](https://registro.br) e abra o domínio `manualdafertilidade.com.br`.
2. Em **DNS**, clique em **Editar zona**. Se aparecer a opção de usar os servidores DNS do Registro.br ("modo avançado"), ative-a e aguarde alguns minutos.
3. Adicione as entradas:
   - **A**: nome vazio, valor `76.76.21.21` (ou o IP indicado pela Vercel).
   - **CNAME**: nome `www`, valor `cname.vercel-dns.com` (ou o indicado pela Vercel).
4. Remova registros A/AAAA/CNAME antigos que conflitem com esses.
5. Salve. A propagação costuma levar de alguns minutos a algumas horas. Quando a Vercel mostrar "Valid Configuration", o HTTPS é emitido automaticamente.

*Alternativa:* em vez de editar a zona, troque os **servidores DNS** do domínio no Registro.br para `ns1.vercel-dns.com` e `ns2.vercel-dns.com`. Assim a Vercel passa a gerenciar todo o DNS. Atenção: e-mails do domínio, se houver, precisarão ter seus registros (MX etc.) recriados na Vercel.

### 6.4 Depois de publicar

- Teste a página no celular e clique em **Comprar** para confirmar que abre o checkout certo.
- Teste com UTMs: `https://manualdafertilidade.com.br/?utm_source=teste` → o link do checkout deve conter `utm_source=teste`.
- Rode o [PageSpeed Insights](https://pagespeed.web.dev) no endereço final.
- Teste a pré-visualização do link no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) (vale também para WhatsApp e Instagram).

---

## Estrutura do projeto

```
public/capa.jpg              capa do livro (também usada no compartilhamento)
src/config/site.ts           ← TODOS os textos e dados editáveis
src/app/layout.tsx           fontes, SEO, Open Graph, idioma pt-BR
src/app/page.tsx             ordem das seções
src/app/icon.svg             favicon
src/components/BuyButton.tsx botão de compra único (link Kiwify + UTMs)
src/components/MobileBuyBar.tsx barra fixa de compra no celular
src/components/Analytics.tsx Meta Pixel / GA (comentado)
src/lib/checkout.ts          repasse de parâmetros para o checkout
src/lib/tracking.ts          evento InitiateCheckout (comentado)
```
