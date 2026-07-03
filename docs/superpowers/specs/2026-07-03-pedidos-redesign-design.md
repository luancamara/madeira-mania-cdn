# Redesign: Consultar Pedido + Resultado do Pedido

**Data:** 2026-07-03 · **Abordagem aprovada:** B — reestruturação progressiva (CSS pesado + JS cirúrgico sobre o DOM nativo do Magazord). Shadow rebuild descartado por risco (estados de pedido não enumeráveis).

## Objetivo

Repensar a experiência das duas telas de consulta de pedido — hierarquia de informação, timeline de status clara, CTAs úteis — alinhando à identidade da marca (verde `#4b664a`, CTA `#1b7a45`, bordas `#dbe1db`, radius 4/8/12) e consertando o mobile. Requisito crítico do dono: **máscara automática no CPF/CNPJ** do form de consulta (backend Magazord rejeita CPF sem pontuação com erro enganoso de "pedido inválido").

## Telas e DOM nativo (mapeado em produção)

### 1. Form "Consultar pedido" (`/login`, toggle via `#btn-consulta`)
```
#form-consulta-pedido.consultar-pedido.default-form.v3
  .title-area  (button.cancel-consulta "Voltar para Login", h2, h3)
  .toast-error-ctn
  form[method=post]
    .ipt-ctn > input#cpfcnpj[type=tel] + span.icon-documento-identificacao
    .ipt-ctn > input#numero-pedido[type=text] + span.icon-pedido
    button.button.button-medium.button-login "Consultar meu Pedido"  (azul hoje)
```

### 2. Resultado (`/cliente/pedidos?verPedido=...&cpfcnpj=...`) — jQuery server-rendered, sem React
```
.detalhes-pedido.flex.space-between.wrap
  .resumo-pedido                    ← cards Endereço / Forma Pagamento / Total (azul, espremidos no mobile)
    .resumo-topo (h3 + .numero-pedido + .resumo-data)
    .resumo-content > .resumo-info ×3
  .status-pedido
    .situacao-pedido > .historico-pedido
      .item-historico.{recebimento-pedido|confirmacao-pagamento|emissao-nota|transporte|entrega}
        (.status-success | .status-waiting) + img zordcdn + strong + .data-hora-etapa
    .itens-pedido > .pedido-item > .item-principal (link, img, nome, qtd, valor)
Ações: a.btn-comprar-novamente (cart dinâmico) e a.btn-ajuda-pedido (→ /cliente/atendimento/novo?pedido=N)
```

Rastreio: não presente em pedido pré-despacho; markup desconhecido — tratar oportunisticamente.

## Design

### Arquivos novos
- `src/pedidos.css` — todo o estilo, gated por classe `mm-ped-on`/`mm-consulta-on` que o JS põe no `<html>` (zero vazamento pra outras rotas). Style ID `mm-pedidos-css` (guard idempotente do build).
- `src/pedidos.js` — enhancements, guarded por rota; try/catch; degrada pro nativo se selectors mudarem.
- Wiring no `build.sh` (seção CSS injection + seção JS).

### Form de consulta
1. **Máscara CPF/CNPJ** em `#cpfcnpj`: só dígitos → formata progressivo (≤11 = `000.000.000-00`; >11 = `00.000.000/0000-00`, maxlength 18). Cobre digitação e paste. `inputmode` já é tel.
2. Rebranding: botão verde CTA, focus verde nos campos, card e tipografia no padrão do site.
3. Hint sob o nº do pedido: "Está no e-mail de confirmação da compra."
4. Fallback WhatsApp sob o submit: "Não encontra os dados? Fale com a gente" → wa.me com msg contextual.
5. Deep-link `/login#consultar-pedido` abre o form direto (auto-click no `#btn-consulta`).

### Resultado do pedido — nova hierarquia (sem mover DOM; flex `order` + blocos injetados)
1. **Hero injetado** (`#mm-ped-hero`): "Pedido #N" + data + badge do status atual (lido da timeline) + CTA WhatsApp compacto. `.resumo-topo` nativo é ocultado (só quando o hero existir).
2. **Timeline hero** (`.status-pedido` com `order` antes do resumo): stepper da marca — ícones SVG próprios via CSS (imgs nativas ocultas), verde pra `.status-success`, cinza pra `.status-waiting`; primeira `.status-waiting` ganha `.mm-atual` via JS (destaque "em andamento"). Horizontal no desktop, **vertical no mobile**.
3. **Bloco entrega/rastreio** (`#mm-ped-entrega`, injetado após a timeline): se achar link/código de rastreio no DOM (`a[href*=rastre]` etc.) → card destacado; senão → texto "o rastreio aparece aqui quando o pedido for despachado" + link Política de Entrega.
4. **Itens**: cards restilizados, imagem maior no mobile, empilhado.
5. **Resumo financeiro/endereço**: desce (order), 3 colunas desktop → empilhado mobile, verde no lugar do azul.
6. **Ações**: WhatsApp com nº do pedido preenchido = primário; "Comprar novamente" e "Preciso de ajuda" (ticket) = secundários outline.

### Regras herdadas do repo
Estilo idempotente (guard por ID), sem depender de ordem de carga, validação Playwright via `page.route()` intercept em desktop 1440 + mobile 375 antes de commit; sem push até o dono validar em dev mode (push = auto-deploy do worker).

## Critérios de aceite
- Digitar `28993194858` no CPF → campo mostra `289.931.948-58` e consulta funciona.
- Resultado: status em destaque no topo com etapa atual clara; WhatsApp com nº do pedido na mensagem; mobile 375px sem overflow horizontal nem cards espremidos; nada de azul Magazord nas duas telas.
- Com bundle desativado (site sem CDN), telas nativas continuam 100% funcionais.
