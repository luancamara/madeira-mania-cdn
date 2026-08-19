# Busca textual Algolia com interface nativa

**Data:** 2026-08-19
**Escopo aprovado:** modal do header e pagina `/busca`, sem redesign e sem busca visual.

## Objetivo

Substituir somente o mecanismo textual da busca atual por Algolia, mantendo a aparencia e o comportamento visual existentes. A busca deve tolerar erros de portugues, acentos, singular/plural, aliases comerciais e consultas por SKU, sem armazenar ou reutilizar preco e estoque potencialmente defasados.

## Decisoes

1. Algolia e a fonte de descoberta, relevancia, facetas e paginacao.
2. Magazord confirma dados comerciais dos SKUs visiveis em cada requisicao.
3. O navegador fala apenas com o Cloudflare Worker; credenciais nunca entram no bundle.
4. O modal preserva seu DOM, classes e CSS atuais. Apenas o parser de HTML e o cache comercial sao removidos.
5. A pagina `/busca` usa um adaptador progressivo ao lado do mount React nativo. O conteudo original so e ocultado depois de uma resposta avancada valida.
6. Falha inicial restaura ou preserva integralmente a busca nativa.
7. Busca visual por imagem fica fora deste ciclo.

## Invariantes comerciais

O indice Algolia nunca contem preco, preco anterior, desconto, estoque, deposito, condicao de disponibilidade ou payload de carrinho.

Para cada hit visivel, o Worker consulta `GET /v2/site/frontend/produto/:loja/:sku` com cache desabilitado e combina a resposta ao hit. As respostas de busca usam `Cache-Control: no-store`.

- `404` ou produto inativo: remover o hit da pagina atual.
- timeout ou erro transitorio: manter identidade do produto, ocultar numeros comerciais e oferecer acesso a PDP.
- nenhuma resposta pode cair para preco ou estoque do Algolia, fixture, HTML SSR ou cache do navegador.

No modal sao hidratados no maximo seis SKUs. Na pagina sao hidratados no maximo doze por requisicao, com timeout e concorrencia limitados.

## Relevancia em portugues

Settings versionados:

- idiomas de indexacao/consulta em portugues;
- tolerancia conservadora de um e dois erros;
- SKU antes de nome; nome antes de marca, categorias e atributos;
- acentos e plurais tratados pelo mecanismo de linguagem;
- aliases deterministas para erros curtos que a distancia de edicao nao cobre.

Casos obrigatorios:

- `rack`, `racks`, `rak`, `raqui`, `raque` e `raki` encontram racks relevantes;
- `cristalera` encontra cristaleiras;
- `meza de jantar` encontra mesas de jantar;
- `guarda ropa` encontra guarda-roupas;
- `comoda` e `comoda` acentuada sao equivalentes;
- SKU exato recebe prioridade;
- modo exato desativa aliases, sinonimos e typo tolerance.

## Sincronizacao

- incremental a cada tres minutos, com janela sobreposta e operacoes idempotentes;
- reconciliacao completa diaria por indice temporario e troca atomica;
- carga completa aborta antes da troca se a coleta ficar abaixo do piso seguro ou exceder o limite de falhas;
- settings, sinonimos e replicas sao reaplicados/preservados antes da troca;
- estado de saude exposto sem segredos e com resultado sanitizado;
- produtos novos podem levar poucos minutos para aparecer.

## API do Worker

### `GET /api/search`

Aceita `q`, `page`, `limit`, `exact` e filtros repetiveis/CSV para categoria, marca, material e montagem. A URL e validada, normalizada e limitada. A resposta inclui query original e interpretada, paginacao, facetas, sugestoes, hits e estado comercial.

### `GET /api/search/health`

Retorna provider, configuracao presente e estado sanitizado da ultima sincronizacao. Nunca retorna chaves, tokens, cabecalhos autenticados ou corpos brutos de upstream.

### `POST /api/search/admin/reindex`

Exige bearer token exclusivo e executa reconciliacao completa protegida.

### `POST /api/search/events`

Recebe apenas eventos limitados de busca/clique. O envio e best-effort e nunca bloqueia navegacao.

Todas as rotas restringem metodos, CORS, tamanho de entrada e mensagens de erro. Rate limiting deve existir no Worker, sem depender apenas de regra externa da Cloudflare.

## Modal do header

O modal atual continua sendo o renderer visual:

- debounce entre 220 e 300 ms a partir de dois caracteres;
- `AbortController` e guarda de resposta obsoleta;
- ate seis cards usando as classes `.mm-h-search-product*` existentes;
- recentes e populares permanecem;
- consulta interpretada pode aparecer como sugestao;
- CTA final navega para `/busca?q=<consulta original>`;
- falha da API preserva o submit nativo e mostra uma mensagem discreta, sem produto promocional falso;
- teclado, foco, Escape e semantica de dialog/combobox permanecem acessiveis.

O cache atual de dez minutos que inclui preco e estoque e removido. Somente termos recentes, sem dados comerciais, podem permanecer no `localStorage`.

## Pagina `/busca`

- URL e a fonte de verdade para query, filtros, pagina, modo exato e ordenacao;
- o adaptador nao modifica filhos de `#vitrine-react-app-*`;
- cria um wrapper irmao dentro da estrutura `.container.box-pesquisa`;
- reutiliza classes visuais nativas para grid, card, avaliacao, precos e botao;
- oculta o mount nativo somente depois que a resposta Algolia valida estiver pronta;
- falha inicial deixa o nativo intacto; falha posterior oferece tentar novamente ou restaurar nativo;
- `popstate` refaz a consulta e voltar/avancar restaura o estado;
- filtros globais suportados: categoria, marca, material e montagem;
- ordenacoes globais suportadas: relevancia, mais novos, nome A-Z/Z-A e melhores avaliados quando o agregado estiver indexado;
- filtros/ordenacoes por preco, estoque e desconto ficam indisponiveis enquanto a busca avancada estiver ativa, pois exigiriam dados comerciais defasados ou hidratacao de todo o conjunto;
- doze cards por pagina, imagens com lazy loading, estado vazio real e paginacao por URL.

## Avaliacoes e prova social

Media e quantidade de avaliacoes aprovadas podem ser sincronizadas periodicamente para o Algolia, sem texto, identificadores de consumidor ou outros dados pessoais. Como nao sao dados comerciais, uma pequena defasagem e aceitavel. Se o agregado nao estiver disponivel, o card omite a avaliacao em vez de fabricar prova social.

## Botao Comprar

O card preserva o botao visual nativo. No clique:

1. detectar `window.addCartVitrine`;
2. consultar a decisao nativa da PDP com `operation=buyButton&proderivacaoId=...`;
3. chamar o fluxo nativo apenas para `action=add-cart` e com todos os dados atuais presentes;
4. para variante, funcao ausente, dados incompletos, timeout, erro ou acao desconhecida, navegar para a PDP;
5. bloquear duplo clique e nunca antecipar confirmacao de sucesso.

Esse contrato e feature-detected e sempre possui fallback para a PDP.

## Seguranca e configuracao

- a chave de busca Algolia pode ir ao frontend apenas se for restrita ao indice e operacoes necessarias; a implementacao preferencial ainda passa pelo Worker;
- chave de escrita e credencial Magazord ficam somente em Cloudflare Secrets ou `.dev.vars` ignorado;
- credenciais anteriormente compartilhadas devem ser rotacionadas antes de qualquer publicacao;
- usar chave Algolia restrita a indexacao, nao uma chave administrativa ampla;
- logs nunca incluem Authorization, segredos, dados pessoais ou corpo integral de upstream.

## Devmode

`./dev.sh` inicia build observado e Wrangler na mesma origem. `/madeira-mania.js` preserva o loader local existente e `/api/search` responde no mesmo host.

- sem `.dev.vars`: fixture claramente identificada para testes de interface e falha;
- com `.dev.vars`: catalogo Algolia real e confirmacao Magazord real;
- o frontend aceita `localStorage.mm_search_api_url` somente em contexto local/dev;
- nenhum fallback de fixture e permitido em producao.

## Testes e criterios de aceite

- testes de dominio provam que registros Algolia rejeitam qualquer campo comercial;
- matriz de erros de portugues e modo exato passam;
- Worker valida parametros, CORS, auth administrativa, `no-store`, timeout e erros seguros;
- sincronizacao incremental e full sao idempotentes e full parcial nao troca o indice;
- modal mostra no maximo seis resultados reais e nunca cacheia comercial;
- pagina mostra no maximo doze resultados, preserva URL/filtros/paginacao e nao conflita com React;
- preco e estoque de cada card real pertencem a mesma requisicao Magazord;
- compra simples usa o runtime nativo uma vez; variantes e falhas vao para PDP;
- indisponibilidade do Worker mantem a busca nativa utilizavel;
- build minificado e nao minificado passam;
- validacao desktop 1440 px e mobile 375 px usa substituicao do bundle completo;
- nenhum push, deploy ou alteracao de producao faz parte desta implementacao local.
