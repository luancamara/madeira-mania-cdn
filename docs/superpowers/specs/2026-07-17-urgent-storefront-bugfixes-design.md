# Correções urgentes do fluxo de compra

**Data:** 2026-07-17  
**Status:** aprovado para implementação

## Objetivo

Corrigir três regressões do storefront sem substituir os fluxos nativos do
Magazord nem mover elementos controlados pelo React:

1. oferecer nas vitrines o mesmo feedback pós-adição da PDP;
2. encaminhar clientes autenticados diretamente ao checkout que reconhece sua
   sessão, preservando o carrinho;
3. permitir scroll interno no drawer desktop quando os itens não couberem.

## Evidência e causas

### Feedback das vitrines

Na home, um clique bem-sucedido em `.btn-comprar-vitrine` abre apenas o alerta
curto `Adicionado ao carrinho!`. Na PDP, o sucesso abre
`.popup-adicionado-ao-carrinho`, com as ações `Continuar comprando` e
`Finalizar compra`. A ação de finalizar da PDP navega para `/checkout/cart`.

O evento genérico `reactItemAddedToCart` não é uma fronteira segura para abrir o
modal, pois também é disparado por atualizações de quantidade e outras operações
do carrinho. A fronteira segura é a combinação do clique na vitrine com o alerta
nativo de sucesso efetivamente renderizado.

### Checkout autenticado

`checkout-cro.js` envia o CTA de `/checkout/cart` incondicionalmente para
`/checkout/identify`. `cart-sheet.js` também contém um redirecionamento fixo para
essa rota em parte dos previews. A tela de identidade customizada é orientada ao
visitante e não usa o mesmo tratamento de sessão que o onepage.

O `/checkout/onepage` já diferencia cliente autenticado pelo cookie `zordEm` e
possui o fluxo de endereços e pagamento para esse cliente. Por isso, passar o
cliente autenticado pelo identify cria uma transição guest desnecessária e
permite que estado intermediário do checkout seja refeito.

### Scroll do drawer

O CSS pressupõe que o desktop sempre contém
`.content-cart > .cart-items`, tornando esse wrapper o scroll container. No DOM
real observado, o Magazord também renderiza os `.cart-item` diretamente em
`.content-cart`. Nesse formato, `.content-cart` mantém `overflow: hidden`, o
rodapé sobrepõe o último card e a roda do mouse não altera nenhum `scrollTop`.

## Desenho

### 1. Normalização do modal pós-adição

`cart-sheet.js` marcará temporariamente uma intenção de compra quando o clique
vier de `.btn-comprar-vitrine`. Um `MutationObserver` observará o alerta de
sucesso criado pelo Magazord.

O alerta só será promovido quando todas as condições forem verdadeiras:

- existe uma intenção recente de compra por vitrine;
- o alerta tem o título curto exato `Adicionado ao carrinho!`;
- o popup ainda não possui `.popup-adicionado-ao-carrinho`;
- `Swal.fire` está disponível.

Ao promover, o alerta curto será fechado e substituído pelo mesmo contrato
visual e textual da PDP:

- título `Produto adicionado ao seu carrinho!`;
- texto `O que você deseja fazer a seguir?`;
- confirmação `Continuar comprando`, que apenas fecha o modal;
- negação `Finalizar compra`, que navega para `/checkout/cart`;
- mesmas classes customizadas utilizadas pela PDP.

Um guard idempotente impedirá que o observer processe o popup criado pela
própria correção. A intenção terá expiração curta e será consumida no primeiro
sucesso, evitando que um alerta posterior e não relacionado seja promovido.
Falhas de adição não mostrarão sucesso, porque a correção aguarda o alerta real
do Magazord em vez de reagir apenas ao clique.

### 2. Roteamento consciente da sessão

A decisão de destino seguirá a mesma regra de sessão já usada no onepage:

| Origem | Cliente autenticado (`zordEm`) | Visitante |
| --- | --- | --- |
| CTA de `/checkout/cart` | `/checkout/onepage` | `/checkout/identify` |
| CTA do drawer/preview | `/checkout/onepage` | comportamento guest já existente |

O handler do drawer reconhecerá tanto o preview ainda contido em
`#cart-preview-area` quanto o drawer desktop elevado para
`.carrinho-rapido-ctn`. Para visitantes, ele não mudará a navegação nativa do
drawer desktop; somente preservará o redirecionamento guest já existente onde
ele já se aplica.

Antes da navegação do carrinho principal, o snapshot atual continuará sendo
salvo de forma síncrona. O caminho autenticado não criará `mm_checkout_mode`,
não acionará `compraSemCadastro` e não limpará quantidades, itens, cupom, CEP,
frete, `mm_cart_snapshot` ou draft. O onepage continua sendo responsável por
reconciliar o resumo com o carrinho real do servidor.

Se o cookie não estiver disponível, o comportamento será conservador: tratar
como visitante e manter o fluxo atual.

### 3. Scroll compatível com as duas estruturas do drawer

A correção será somente em CSS; nenhum nó React será reparentado.

- Com `.content-cart > .cart-items`, o wrapper existente permanece como scroll
  container e o rodapé permanece fora dele.
- Com `.cart-item` diretamente em `.content-cart`, o próprio `.content-cart`
  passa a ter `overflow-y: auto`, `overflow-x: hidden` e overscroll contido.
- Cards diretos recebem `flex-shrink: 0`, preservando sua altura.
- O `.box-total-btn` direto fica `position: sticky; bottom: 0`, participa do
  fluxo e permanece acessível sem sobrepor permanentemente o último item.
- O comportamento mobile e o overlay React permanecem inalterados.

O fallback direto será limitado ao desktop e à ausência de `.cart-items`, para
não criar dois scroll containers concorrentes.

## Tratamento de falhas

- Ausência de SweetAlert mantém o alerta nativo em vez de quebrar a adição.
- Um popup da PDP nunca é substituído.
- Operações de quantidade, remoção e recálculo de frete não abrem o modal.
- Ausência ou expiração da sessão segue o checkout guest existente.
- A correção de scroll não depende da ordem em que o React renderiza os itens.

## Validação

### Feedback da vitrine

1. Interceptar o bundle completo local antes do carregamento da página.
2. Adicionar um produto disponível pela home.
3. Confirmar um único dialog com os dois botões.
4. Confirmar que `Continuar comprando` fecha o dialog e mantém a página.
5. Confirmar que `Finalizar compra` abre `/checkout/cart`.
6. Repetir a adição pela PDP e comprovar que seu modal não foi duplicado.

### Checkout

1. Visitante: `/checkout/cart` continua levando a `/checkout/identify`.
2. Autenticado: alterar uma quantidade e manter um CEP/frete válido no carrinho.
3. Finalizar pelo drawer e, separadamente, pela página do carrinho.
4. Confirmar chegada direta a `/checkout/onepage`.
5. Confirmar os mesmos itens, quantidades e valores e a sessão reconhecida.
6. Não finalizar nem criar pedido durante a validação.

### Drawer

1. Usar ao menos três itens no carrinho.
2. Validar desktop em 1440x768 e 1440x1000.
3. Confirmar que a roda do mouse altera o scroll container interno.
4. Confirmar que todos os cards ficam alcançáveis e o último não fica encoberto.
5. Confirmar que o resumo e o CTA permanecem alcançáveis.
6. Fazer regressão em 375 px, sem alterar o drawer mobile.

### Verificações técnicas

- `bash ./build.sh` após as alterações em `src/`;
- testes Node existentes e novos testes determinísticos para a decisão de rota;
- validação visual com substituição do bundle completo por interceptação de rede;
- inspeção de erros de console e requisições do carrinho durante os fluxos.

## Fora de escopo

- reescrever o add-to-cart nativo;
- alterar autenticação, cookies ou APIs do Magazord;
- redesenhar o modal da PDP;
- criar ou concluir pedidos de teste;
- reestruturar o DOM React do drawer.
