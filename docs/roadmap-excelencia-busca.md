# Roadmap de excelência em busca e descoberta — Madeira Mania

- **Data-base:** 19 de agosto de 2026
- **Escopo:** busca textual, sugestões, relevância, descoberta, recomendações e evolução futura para voz, imagem e conversa.
- **Status:** proposta para discussão; não representa autorização de deploy ou contratação.

## Resumo executivo

A recomendação é continuar com a Algolia e evoluir a implementação atual em camadas. Trocar de plataforma agora atrasaria o aprendizado mais importante: quais consultas os clientes fazem, em quais resultados clicam e quais produtos acabam no carrinho ou no pedido.

A ordem recomendada é:

1. publicar com segurança e medir corretamente;
2. melhorar sugestões, recuperação de zero resultado e filtros;
3. enriquecer o catálogo e criar governança de relevância e merchandising;
4. ativar re-ranking, recomendações e busca semântica somente depois de haver eventos válidos;
5. testar busca visual e conversacional como experiências complementares.

O principal investimento imediato não é uma nova IA. É a atribuição completa de eventos de busca até compra. A própria Algolia exige eventos de clique e conversão, ligados por `queryID` e `userToken`, para alimentar analytics, NeuralSearch, Recommend, Personalization, Dynamic Re-Ranking e Query Categorization ([documentação](https://www.algolia.com/doc/guides/sending-events)).

## Estado atual comprovado

Na sessão de 19/08/2026, a RC local foi validada com:

- 840 registros indexados por full reindex atômico;
- `indexLanguages` e `queryLanguages` em `pt-br` e dicionário de flexões `pt`;
- aliases explícitos como `rak`, `raqui`, `raque` e `raki` para `rack`;
- modal do header e página `/busca` usando a mesma API;
- preço, preço anterior, estoque e depósito consultados ao vivo na Magazord e ausentes do índice;
- facetas estáveis de categoria, marca, material e montagem;
- ordenação por relevância, lançamento, nome e avaliações;
- avaliações e quantidade de avaliações nos cards;
- fallback para a busca nativa quando a resposta inicial falha;
- incremental a cada 3 minutos, avaliações de hora em hora e full diário;
- teste real via túnel: `raqui` e `rak` foram interpretados como `rack`, com 52 resultados; modal retornou 6 produtos e página retornou 12 cards.

Isso está validado em ambiente local/túnel, não publicado em produção.

## Princípios que não devem ser negociados

1. **Verdade comercial ao vivo.** Preço e estoque só aparecem quando confirmados pela Magazord. Em falha, ocultar o dado ou encaminhar ao produto; nunca mostrar valor possivelmente antigo.
2. **Descoberta separada de comércio.** Algolia contém apenas campos estáveis de descoberta. A Magazord continua sendo a autoridade comercial.
3. **Medição antes de automação.** Nenhum modelo aprende ou reordena produção sem eventos validados, simulação e teste controlado.
4. **Relevância antes de margem.** Regras comerciais não devem fazer um produto textualmente inadequado superar um resultado claramente correto.
5. **Privacidade por desenho.** `userToken` pseudônimo e estável, sem nome, e-mail, telefone ou outro dado pessoal no índice ou nos eventos. Personalização deve respeitar consentimento e política LGPD.
6. **Fallback seguro.** Falhas de Algolia, Magazord ou túnel não podem apagar resultados nativos nem bloquear navegação para a PDP.
7. **Mudança demonstrável.** Ajustes de ranking entram por réplica/A-B, com critério de sucesso e rollback.

## Arquitetura-alvo

```text
Magazord — catálogo estável ──> sincronizador ──> Algolia
        └— preço/estoque ao vivo ───────────────┐
                                                v
Navegador ──> Search Worker ──> descoberta ──> hidratação comercial ──> UI
    └──────── cliques / carrinho / compra ──> Insights + analytics
                                                  └─> sugestões, re-ranking,
                                                      recomendações e IA
```

No futuro Medusa, o storefront deve consumir uma API de busca estável pelo SDK, enquanto o backend preserva as mesmas fontes de verdade. Migração de plataforma não deve mudar o contrato público de busca sem versionamento.

## Métricas e metas

Primeiro medir 14 a 28 dias para estabelecer a linha de base. Depois definir metas relativas por experimento.

| Dimensão | Métrica principal | Meta inicial sugerida |
|---|---|---|
| Encontrabilidade | taxa de zero resultado | reduzir 30% sobre a linha de base |
| Relevância | CTR após busca e posição média do primeiro clique | elevar CTR e reduzir posição sem piorar conversão |
| Intenção comercial | add-to-cart e compra após busca | elevar 10% sobre o controle em teste A/B |
| Qualidade de sessão | taxa de busca sem clique e reformulações sucessivas | reduzir 20% |
| Receita | receita por sessão com busca e ticket médio atribuído | acompanhar por dispositivo e consulta |
| Latência | tempo da tecla até resultado útil, p50/p95 | definir após medir; separar Algolia, Magazord e renderização |
| Atualização | atraso do catálogo, p95 | abaixo de 5 minutos para produtos; preço/estoque sempre ao vivo |
| Confiabilidade | disponibilidade e respostas comerciais parciais | alertar por SLO e nunca mostrar dado comercial não confirmado |
| Eventos | eventos válidos e atribuíveis no debugger | acima de 99%, sem PII |

O painel da Algolia já expõe zero resultado, CTR, conversão, add-to-cart, compra, receita, ausência de clique e posição de clique ([métricas oficiais](https://www.algolia.com/doc/guides/search-analytics/concepts/metrics)). O tempo do motor não representa a experiência inteira; rede, Magazord e renderização também precisam ser medidos ([performance](https://www.algolia.com/doc/guides/going-to-production/track-usage)).

## Roadmap recomendado

### Fase 0 — produção segura e telemetria (0–2 semanas)

**Objetivo:** tornar a RC publicável e criar dados confiáveis para todas as fases seguintes.

- rotacionar as credenciais que passaram pelo chat e criar chaves de menor privilégio;
- configurar segredos no Worker, executar full reindex e liberar primeiro para devmode/canário;
- manter kill switch para retornar instantaneamente à busca nativa;
- enviar `userToken` pseudônimo em cada consulta e preservar `queryID` ao navegar para PDP, carrinho e pedido;
- implementar eventos Algolia corretos para:
  - produto visto após busca;
  - clique após busca;
  - adição ao carrinho após busca;
  - compra após busca, com quantidade, preço vivo, moeda e ID da transação;
- separar eventos de modal, página de busca, categoria e recomendação por tags;
- validar no Events Debugger e no Events Health ([procedimento oficial](https://www.algolia.com/doc/guides/sending-events/guides/validate));
- criar monitor sintético para `rack`, `raqui`, SKU exato, zero resultado e falha Magazord;
- alertar quando incremental atrasar, full abortar, preço/estoque parcial subir ou taxa de erro ultrapassar o SLO;
- investigar a intermitência observada em `/v3/avaliacoes/query`, mantendo o agregado nativo como fallback;
- criar conjunto ouro inicial com 50–100 consultas reais e resultado esperado no top 3/top 5.

**Critério de saída:** sete dias de eventos válidos, nenhum segredo no bundle/Git, nenhum preço ou estoque não confirmado, canários estáveis e rollback testado.

### Fase 1 — sugestões e recuperação de intenção (2–4 semanas)

**Objetivo:** reduzir digitação, reformulação e páginas sem saída.

- criar índice Algolia Query Suggestions alimentado por analytics; até haver volume, semear com GA4/Search Console, categorias e termos comerciais aprovados;
- substituir a lista fixa de populares por sugestões reais, reconstruídas diariamente;
- tornar o autocomplete multi-origem:
  - consultas sugeridas;
  - produtos;
  - categorias e ambientes;
  - marcas;
  - conteúdos úteis, quando disponíveis;
- mostrar recentes localmente, com opção clara de apagar;
- destacar a parte completada da consulta e preservar teclado, leitor de tela e touch;
- oferecer correção, consultas relacionadas e categorias alternativas na página sem resultados;
- quando filtros zerarem o resultado, explicar qual remoção recupera produtos;
- adicionar chips de filtros aplicados e remoção individual;
- no mobile, usar filtro em drawer/tela própria com botão “Ver X produtos”; no desktop, atualizar imediatamente;
- agrupar derivações visuais do mesmo produto quando elas estiverem poluindo a lista.

Query Suggestions usa consultas populares, elimina sugestões duplicadas e evita termos sem resultados ([documentação](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js)). A UX recomendada pela própria Algolia combina sugestões, produtos, filtros e recuperação de zero resultado ([guia de ecommerce](https://www.algolia.com/doc/guides/solutions/ecommerce/search)). A pesquisa de UX da Baymard recomenda filtros específicos por categoria, resumo de filtros aplicados e comportamento distinto em desktop/mobile ([filtros](https://baymard.com/learn/ecommerce-filter-ui), [benchmark 2025](https://baymard.com/blog/current-state-product-list-and-filtering)).

**Critério de saída:** teste A/B mostra redução de zero resultado/reformulação sem queda de add-to-cart; acessibilidade de teclado e mobile passa no smoke.

### Fase 2 — catálogo semântico, relevância e merchandising (4–8 semanas)

**Objetivo:** entender como clientes realmente descrevem móveis e controlar resultados sem editar código.

- definir uma ontologia de móveis com fonte e responsável por campo:
  - ambiente e categoria hierárquica;
  - tipo do móvel;
  - marca e linha;
  - material e acabamento;
  - cor;
  - largura, altura e profundidade normalizadas;
  - capacidade, como TV de até X polegadas ou mesa para X lugares;
  - portas, gavetas, montagem e estilo;
- corrigir e enriquecer o PIM antes de compensar dados ruins com sinônimos;
- indexar somente atributos estáveis; dados comerciais continuam fora do índice;
- suportar consultas como “rack off white 220 cm”, “mesa 6 lugares” e “guarda roupa sem montagem” por Rules/filtros dinâmicos;
- criar taxonomia e revisão mensal de sinônimos a partir de zero resultado e consultas com baixo CTR;
- usar Rules para pin, hide, redirect e banners com início, expiração, responsável e justificativa;
- criar coleções sazonais e campanhas sem alterar o ranking textual base;
- adicionar ferramenta interna ou runbook para simular ranking e visualizar `_rankingInfo`;
- revisar pesos de atributos e `customRanking` com o conjunto ouro;
- avaliar Query Categorization depois de a hierarquia e os eventos estarem corretos.

A Algolia recomenda escolher atributos pesquisáveis, aplicar ranking comercial apenas como desempate e usar analytics/A-B para alterações ([relevância](https://www.algolia.com/doc/guides/managing-results/relevance-overview)). Rules podem promover, ocultar, redirecionar, exibir banners e aplicar filtros dinâmicos ([merchandising](https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting), [detecção de intenção](https://www.algolia.com/doc/guides/managing-results/rules/detecting-intent)). Query Categorization aprende categorias a partir da hierarquia e dos eventos ([documentação](https://www.algolia.com/doc/guides/algolia-ai/query-categorization)).

**Regra comercial importante:** ordenar ou filtrar o catálogo inteiro por preço/estoque só será aceitável se a Magazord oferecer consulta server-side ao vivo para essa operação. Não ordenar 12 hits hidratados e apresentar isso como ordenação global.

**Critério de saída:** conjunto ouro aprovado por negócio, zero resultado prioritário tratado, Rules auditáveis e nenhum campo comercial no índice.

### Fase 3 — aprendizado comportamental e IA de relevância (6–12 semanas)

**Objetivo:** deixar o ranking aprender com comportamento real sem perder controle.

1. **Dynamic Re-Ranking:** ativar primeiro em réplica, simular e A/B testar. O modelo usa a janela móvel de 30 dias e precisa, por consulta/produto, de pelo menos 20 cliques ou 2 conversões para promover um item ([documentação](https://www.algolia.com/doc/guides/algolia-ai/re-ranking)).
2. **Query Categorization:** aplicar boosting automático antes de filtering automático; excluir consultas ambíguas e acompanhar categorias com baixo desempenho.
3. **NeuralSearch:** testar em réplica para consultas naturais como “rack pequeno para sala clara e TV de 65 polegadas”. Ela combina keyword e vetor, mas exige ao menos 1.000 cliques ou 100 conversões válidas nos últimos 30 dias ([requisitos](https://www.algolia.com/doc/guides/ai-relevance/neuralsearch/get-started)).
4. **Personalização:** somente após consentimento, identidade pseudônima estável e volume suficiente; começar com baixo impacto e A/B. Personalização e Dynamic Re-Ranking não operam simultaneamente para o mesmo usuário com dados suficientes ([documentação](https://www.algolia.com/doc/guides/personalization/classic-personalization/what-is-personalization)).

**Critério de saída:** ganho estatisticamente confiável em add-to-cart/compra, sem aumento relevante de zero resultado, latência ou concentração indevida de produtos.

### Fase 4 — descoberta além da busca (8–16 semanas)

**Objetivo:** reutilizar o mesmo núcleo em toda a jornada.

- alimentar páginas de categoria/browse pela mesma camada, com analytics separado;
- Related Items na PDP e no zero resultado;
- Frequently Bought Together no carrinho/PDP, treinado preferencialmente com compras;
- Trending Items e categorias em home e campanhas;
- Looking Similar na PDP para alternativas visualmente semelhantes;
- busca federada em produtos, categorias, guias, montagem, entrega, FAQ e atendimento;
- sugestões contextuais por ambiente e etapa da jornada;
- experiências de “complete o ambiente” e comparação de produtos;
- fallback editorial quando um modelo não tiver cobertura.

Algolia Recommend oferece Related Items, Frequently Bought Together, Trending e Looking Similar. Os modelos comportamentais precisam de eventos; Looking Similar usa imagens e não precisa deles ([visão geral e mínimos](https://www.algolia.com/doc/guides/algolia-recommend/overview), [Looking Similar](https://www.algolia.com/doc/guides/algolia-recommend/how-to/lookingSimilar)).

### Fase 5 — imagem, voz e conversa (posterior)

**Objetivo:** adicionar novas entradas sem substituir a busca rápida existente.

- começar por Looking Similar na PDP, que é menor e mede interesse visual sem upload;
- piloto de busca por foto com conjunto rotulado e consultas de referência;
- opção pragmática: Google Vision Product Search para similaridade visual + Algolia para filtros, relevância e merchandising. O serviço lista `homegoods` entre as categorias suportadas ([documentação atual](https://docs.cloud.google.com/vision/product-search/docs));
- alternativa: classificar imagens com Google Vision/ViSenze/Rekognition e indexar tags estáveis na Algolia ([arquitetura Algolia](https://www.algolia.com/doc/guides/solutions/ecommerce/visual-image-search));
- voz: converter fala para texto, marcar a origem e reaproveitar a busca textual; não criar um motor separado ([guia](https://www.algolia.com/doc/guides/solutions/ecommerce/voice-search));
- assistente conversacional: usar o catálogo como grounding, transformar intenção em consultas/filtros e confirmar preço/estoque ao vivo antes de recomendar ou comprar;
- exigir respostas citáveis ao produto, limites de escopo, proteção contra prompt injection e handoff para busca tradicional.

**Critério de saída:** benchmark visual rotulado supera a linha de base no top 5; conversa reduz reformulação sem inventar atributos ou dados comerciais.

## Backlog priorizado

| Prioridade | Entrega | Esforço | Dependência | Evidência de aceite |
|---|---|---:|---|---|
| P0 | eventos click/add-to-cart/purchase com `queryID` | M | contrato carrinho/pedido | Events Health válido e pedido atribuível |
| P0 | rollout canário, alertas e kill switch | M | segredos Worker | rollback e canários testados |
| P0 | conjunto ouro + relatório de relevância | S | consultas reais | top 3/top 5 aprovados |
| P1 | Query Suggestions e autocomplete multi-origem | M | analytics ou seed | CTR do modal e reformulação melhoram |
| P1 | zero resultado recuperável | S | sugestões | queda da taxa de abandono/zero resultado |
| P1 | ontologia e enriquecimento do catálogo | L | PIM/Magazord/Medusa | cobertura dos atributos prioritários |
| P1 | filtros por categoria + chips + mobile | M | ontologia | smoke desktop/mobile e A-B |
| P1 | governança de Rules e sinônimos | M | analytics | alterações auditáveis e expiradas |
| P2 | category/browse e busca federada | L | contrato de índices | analytics segmentado e paridade funcional |
| P2 | Dynamic Re-Ranking em réplica | M | eventos e volume | A-B com ganho comercial |
| P2 | Related/Trending/FBT | M/L | eventos de compra | cobertura e lift medidos |
| P2 | NeuralSearch em réplica | M | mínimo de eventos | benchmark natural + A-B |
| P3 | personalização consentida | L | identidade/LGPD/volume | simulação e A-B aprovados |
| P3 | busca visual por foto | L | imagens/fornecedor/benchmark | precisão top 5 e custo aprovados |
| P3 | busca conversacional e voz | XL | catálogo semântico | grounded eval e guardrails aprovados |

## Plano de 90 dias proposto

### Dias 0–14

- produção segura/canário;
- eventos completos e debugger saudável;
- métricas e canários;
- conjunto ouro;
- correção da integração de avaliações.

### Dias 15–30

- Query Suggestions;
- autocomplete multi-origem;
- zero resultado recuperável;
- chips de filtros e melhorias mobile de baixo risco.

### Dias 31–60

- ontologia e atributos prioritários;
- consultas estruturadas por Rules;
- governança de sinônimos e merchandising;
- relatório semanal de consultas sem resultado/sem clique.

### Dias 61–90

- réplica com Dynamic Re-Ranking;
- primeiro A/B;
- Related Items ou Looking Similar como piloto;
- decisão baseada em volume/plano sobre NeuralSearch;
- especificação e benchmark da busca visual, sem implementação em produção.

## Escolha de plataforma

### Recomendação agora: Algolia-first

Já existe integração funcional, o catálogo cabe confortavelmente, e a plataforma cobre sugestões, Rules, A-B, analytics, re-ranking, busca híbrida, personalização e recomendações. O custo de trocar antes de medir seria maior que o provável benefício.

### Quando reavaliar

Executar um bake-off somente se ocorrer pelo menos um destes gatilhos:

- plano necessário da Algolia ficar economicamente inviável;
- latência da hidratação comercial não atingir o SLO mesmo após otimização;
- necessidade comprovada de agente conversacional/visual superar o que a composição atual entrega;
- equipe precisar de merchandising e personalização mais commerce-native;
- volume de tráfego/eventos justificar uma suíte enterprise.

| Opção | Ponto forte | Custo/risco | Papel sugerido |
|---|---|---|---|
| Algolia | caminho mais curto; busca, Rules, analytics e IA no mesmo núcleo | recursos de IA dependem do plano e dos eventos | plataforma principal |
| Constructor | suíte focada em ecommerce e aprendizado comportamental | reintegração de catálogo/eventos e troca de operação | candidato a bake-off futuro ([docs](https://docs.constructor.com/docs/products-ai-powered-product-discovery)) |
| Coveo | busca enterprise, conteúdo e descoberta conversacional | maior complexidade operacional/comercial | avaliar se Medusa virar plataforma omnichannel de grande porte ([docs](https://docs.coveo.com/en/q2pb2427/coveo-for-commerce/conversational-product-discovery)) |
| Google Vertex/Vision | busca semântica e visual, com categoria `homegoods` | exige mais composição de UX, analytics e merchandising | componente preferencial do piloto visual ([docs](https://docs.cloud.google.com/vision/product-search/docs)) |
| Typesense/OpenSearch | controle e custo de infraestrutura | Madeira Mania passa a construir relevância, analytics, A-B e operação | não recomendado agora; só por requisito de soberania/custo ([Typesense hybrid](https://typesense.org/docs/30.0/api/vector-search.html)) |

Qualquer comparação deve usar o mesmo catálogo, as mesmas 100 consultas ouro, os mesmos eventos, latência end-to-end e custo total de operação — não apenas uma demo do fornecedor.

## Decisões necessárias para fechar o roadmap

1. Qual plano Algolia está contratado e quais recursos de AI/Recommend/A-B estão incluídos?
2. Qual sistema será a fonte final de eventos de pedido: Magazord agora e Medusa depois, ou uma camada comum?
3. Onde ficará a identidade pseudônima e o consentimento para personalização?
4. Quem é responsável pela ontologia e qualidade dos atributos: PIM, comercial ou catálogo?
5. Quais são as 50–100 consultas de maior valor, incluindo erros reais de português?
6. Quais categorias e atributos devem entrar primeiro: racks, mesas, guarda-roupas, cozinhas ou outra ordem?
7. Qual é o orçamento e o volume mensal esperados para busca, Recommend e IA?

## Próxima ação recomendada

Transformar a Fase 0 e a Fase 1 em tickets pequenos, cada um com evento/consulta de entrada, comportamento esperado, métrica, rollback e teste no navegador. Só depois do primeiro ciclo de dados reais selecionar Dynamic Re-Ranking, NeuralSearch ou outra plataforma.
