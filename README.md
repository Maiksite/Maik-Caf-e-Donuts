# Maik Café e Donuts

Site institucional e catálogo digital da Maik Café e Donuts, desenvolvido em React + TypeScript + Vite + Tailwind CSS.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React

## Estrutura principal

```text
src/
├── components/   # componentes reutilizáveis
├── data/         # catálogo, horários, feriados e configuração do site
├── hooks/        # lógica reutilizável
├── sections/     # seções da página
├── App.tsx
├── main.tsx
└── index.css
```

## Dados do catálogo

Produtos, preços, imagens e links individuais do iFood ficam em:

```text
src/data/products.ts
```

Evite duplicar produtos diretamente em componentes.

## Horários

A fonte de verdade do horário da loja fica em:

```text
src/data/storeHours.ts
```

O status usa o fuso `America/Sao_Paulo` e é atualizado no navegador a cada minuto.

## Feriados

A lógica fica em:

```text
src/data/holidays.ts
```

Somente feriados oficiais nacionais, estaduais e municipais são tratados automaticamente como horário de feriado. Datas de ponto facultativo, como Carnaval, não alteram automaticamente o horário comercial.

## Redes sociais

URLs canônicas das redes ficam em:

```text
src/data/site.ts
```

## SEO

Metadados e dados estruturados ficam em `index.html`.

Arquivos auxiliares:

```text
public/robots.txt
public/sitemap.xml
```

Ao trocar o domínio oficial, atualize `SITE_URL`, `index.html`, `robots.txt` e `sitemap.xml`.

## Desenvolvimento

```bash
bun install
bun run dev
```

ou, com outro gerenciador compatível:

```bash
npm install
npm run dev
```

## Validação antes de publicar

```bash
npm run lint
npm run build
```

Também teste manualmente:

- menu desktop e mobile;
- busca e filtros do cardápio;
- abertura/fechamento do modal;
- links individuais do iFood;
- Instagram, TikTok e WhatsApp;
- status aberto/fechado;
- mapa e rotas;
- layout em telas pequenas.

## Publicação

A versão de produção é publicada pela Vercel a partir da branch configurada no projeto. Faça alterações em branch separada e revise o preview antes de mesclar na branch de produção.
