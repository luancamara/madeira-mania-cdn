# Plano de implementacao da busca textual nativa

**Spec:** `docs/superpowers/specs/2026-08-19-algolia-native-text-search-design.md`

## 1. Dominio e Worker

- portar os modulos puros da branch historica;
- manter denylist de campos comerciais e aliases de portugues;
- validar REST Algolia e Magazord com testes mockados;
- adicionar piso de seguranca ao full reindex, estado sanitizado e rate limiting;
- manter cron incremental de tres minutos e full diaria.

## 2. Infraestrutura local

- transformar o Worker assets-only em entrypoint que trata `/api/*`;
- configurar assets binding e crons no Wrangler;
- adicionar contrato de secrets em `.dev.vars.example`;
- fazer `./dev.sh` servir bundle e API na mesma origem.

## 3. Modal do header

- extrair cliente compartilhado para `src/search.js`;
- remover parser SSR e cache comercial do `src/header.js`;
- preservar markup, classes, recentes, populares e submit nativo;
- renderizar hits Algolia hidratados nas classes atuais;
- adicionar cancelamento, resposta obsoleta, erro e acessibilidade.

## 4. Pagina `/busca`

- detectar a estrutura nativa sem modificar o mount React;
- montar wrapper irmao somente apos resposta valida;
- renderizar cards visualmente nativos, facetas suportadas e paginacao;
- persistir estado na URL e implementar `popstate`;
- restaurar nativo em falha inicial e oferecer fallback em falha posterior;
- integrar compra com feature detection e fallback PDP.

## 5. Verificacao

- executar testes de busca e storefront;
- executar checks de sintaxe e build nos dois modos;
- executar dry-run do Worker;
- subir `./dev.sh` e provar health, aliases, filtros e headers;
- validar bundle completo no site em desktop e mobile;
- auditar todos os criterios do spec antes de sinalizar conclusao.
