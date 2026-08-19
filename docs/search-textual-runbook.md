# Busca textual: execução e reindexação

## Teste local com todos os produtos

1. Instale as dependências com `npm install`.
2. Copie `.dev.vars.example` para `.dev.vars`.
3. Preencha credenciais novas da Algolia e da Magazord. O ID da loja é opcional e será identificado pela API.
4. Defina um `SEARCH_ADMIN_TOKEN` longo e aleatório.
5. Inicie o Worker com `npm run dev`.
6. Em outro terminal, rode `npm run search:reindex` uma vez para carregar o catálogo completo.
7. Para testar dentro do site real, inicie com `MM_DEV_TUNNEL=1 npm run dev` e execute no console do navegador o comando `localStorage.setItem('mm_dev_url', '<URL exibida>/madeira-mania.js'); location.reload()`.

Sem `.dev.vars`, o devmode usa uma fixture pequena e identificada como dados de demonstração. Nenhuma credencial deve ser versionada.

## Atualização do índice

- Produtos alterados: a cada 3 minutos, com uma janela sobreposta de 30 minutos.
- Avaliações aprovadas: no minuto 37 de cada hora.
- Reindexação completa de segurança: diariamente às 03:17 UTC, equivalente a 00:17 no horário de Brasília.

Preço, preço anterior, estoque e depósito não ficam no Algolia. Eles são consultados ao vivo na Magazord em cada resposta e na compra direta.

## Produção

O deploy exige configurar `ALGOLIA_APP_ID`, `ALGOLIA_SEARCH_KEY`, `ALGOLIA_WRITE_KEY`, `MAGAZORD_BASIC_AUTH` e `SEARCH_ADMIN_TOKEN` como segredos do Worker, executar o primeiro full reindex e somente depois ativar o bundle da nova versão no loader. As credenciais compartilhadas anteriormente em conversa devem ser revogadas e substituídas antes dessa etapa.
