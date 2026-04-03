# PDP Redesign Plan — Madeira Mania

## Diagnóstico Visual (2026-04-03)

### Desktop (1440px) — Screenshots capturados

**First fold:** Título + galeria + avaliações + badge pronta entrega + preço + parcelas.
**Botão "Adicionar ao carrinho" NÃO VISÍVEL** — está 1.5 scrolls abaixo.

**Trust block:** "AtendimentoGarantiaTrocas e DevoluçõesParcelam" — texto colado, cortado, ilegível em flex-row no container estreito da direita.

**Espaço desperdiçado:** Galeria ocupa ~60% da largura, coluna info ~40%. Gap enorme entre avaliações e "Pronta entrega".

### Mobile (375px)

Funciona melhor por ser coluna única, mas distância preço→botão comprar ainda grande (variações + specs + quantidade no meio).

---

## Princípios de Redesign

### CRO (Page CRO Skill)
1. **CTA acima do fold** — botão comprar deve ser visível nos primeiros 100vh
2. **Hierarquia clara**: Preço → CTA → Trust → Detalhes (não misturar)
3. **Reduce friction**: menos passos entre "vi o preço" e "adicionei ao carrinho"
4. **Trust near CTA**: badges de segurança devem estar PRÓXIMOS do botão, não 3 scrolls abaixo

### Psicologia (Marketing Psychology Skill)
1. **Ancoragem**: Preço "de" R$1.688 deve ser proeminente ANTES do preço PIX R$942 (contrast effect)
2. **Loss Aversion**: "Economize R$746" é mais forte que "7% desconto PIX"
3. **Social Proof**: "231 avaliações 5.0" deve estar perto da decisão de compra, não isolado no topo
4. **Scarcity**: Badge "Pronta entrega · Enviamos em 24h" cria urgência legítima
5. **Goal-Gradient**: Mostrar economia PIX como progresso ("você economiza R$49,59")
6. **Bandwagon**: "231 clientes avaliaram com 5 estrelas" perto do CTA

### UI/UX Pro Max
1. **Touch targets** ≥ 44px
2. **Spacing system** 4/8px grid
3. **Contraste** texto ≥ 4.5:1
4. **Anti-flicker** CSS no head
5. **Responsive**: mobile-first, desktop enhances
6. **Tipografia**: escala consistente (13/14/16/18/22/28)

---

## Nova Hierarquia da Área de Compra

### Mobile (375px) — ordem vertical

```
[Título H1]
[Marca] [Avaliações ★★★★★ 5.0 (231)]
─────────────────────────────
[Badge: ⚡ Pronta entrega · 24h]
─────────────────────────────
[Preço riscado R$1.688,71]
[Preço PIX R$ 942,31] [-44% badge]
[ou 12x R$ 82,66 sem juros]
─────────────────────────────
[Variação: Cor] [swatches]
[Variação: Largura] [pills]
─────────────────────────────
[Qtd: - 1 +] [██ COMPRAR ██]  ← mesma linha
─────────────────────────────
[🔒 Compra Segura | 🔄 Troca 7d | ✓ RA Verificada]
─────────────────────────────
[💬 Compre pelo WhatsApp]
─────────────────────────────
[Calcule o frete: [CEP___] [Buscar]]
─────────────────────────────
Accordion: Especificações ▸
Accordion: Formas de pagamento ▸
```

**O que mudou:**
- Avaliações subiram para junto do título (social proof perto da primeira impressão)
- Preço e CTA são contíguos (sem specs no meio)
- Mini specs (material, dimensões) viram accordion abaixo do CTA
- Trust badges COLADOS no botão comprar (não separados)
- Frete desceu para depois do CTA (não é decisor primário)

### Desktop (1440px) — grid 2 colunas

```
┌──────────────────────┬─────────────────────────────┐
│                      │ Breadcrumb                   │
│                      │ Título H1                    │
│                      │ Marca · ★★★★★ 5.0 (231)     │
│                      │ ⚡ Pronta entrega · 24h      │
│     GALERIA          │─────────────────────────────│
│     (principal       │ R$1.688,71  →  R$ 942,31 PIX│
│      + thumbs)       │ ou 12x R$ 82,66 sem juros   │
│                      │─────────────────────────────│
│                      │ Cor: [sw1] [sw2]             │
│                      │ Largura: [180cm] [220cm]     │
│                      │─────────────────────────────│
│                      │ [- 1 +] [██ COMPRAR ██████]  │
│                      │ 🔒Segura  🔄Troca  ✓RA      │
│                      │ 💬 WhatsApp                  │
│                      │─────────────────────────────│
│                      │ Frete: [CEP] [Buscar]        │
└──────────────────────┴─────────────────────────────┘
┌─────────────────────────────────────────────────────┐
│ [Atendimento] [Garantia] [Trocas] [Frete] [12x]    │  ← FULL WIDTH, fora do grid
└─────────────────────────────────────────────────────┘
```

**O que mudou:**
- Trust block sai da coluna estreita → vai para full-width abaixo do grid
- Botão comprar VISÍVEL no first fold
- Specs compactos (checkmarks) ficam entre variações e CTA
- Galeria e info têm proporção equilibrada

---

## Trust Block Desktop — Layout Full-Width

```css
/* Fora de .informacoes-compra-produto, posicionado como seção full-width */
#mm-trust-block {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px 24px;
  background: #f7f8f7;
  border-top: 1px solid #e8ece8;
  border-bottom: 1px solid #e8ece8;
  margin: 0 -8px; /* full bleed */
}

#mm-trust-block .trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}
```

---

## Elementos a Remover/Mover

| Elemento | Ação | Motivo |
|----------|------|--------|
| Trust block (dentro de .informacoes) | MOVER para full-width fora do grid | Não cabe na coluna estreita |
| Mini specs (entre variações e CTA) | MOVER para accordion abaixo do CTA | Liberar espaço para CTA subir |
| Gap entre avaliações e pronta entrega | REDUZIR para 4px | Espaço desperdiçado |
| Inline payments (PIX + parcelas) | SIMPLIFICAR para 1 linha PIX + "Ver parcelas" | Toma muito espaço vertical |
| WhatsApp CTA | REDUZIR tamanho, mover para após trust badges | Não é ação primária |
| Favoritos + Share | MANTER como ícones compactos após CTA | Ações secundárias |

---

## Ordem de Implementação

1. **CSS Desktop**: trust block full-width, reduzir gaps, ajustar proporção grid
2. **CSS Mobile**: compactar espaçamento, CTA mais perto do preço
3. **JS**: mover trust block para fora do container React (seção própria)
4. **JS**: simplificar inline payments
5. **Validar**: screenshots before/after mobile 375px + desktop 1440px
6. **Testar frete**: garantir que o app não crasha

---

## Seções Abaixo da Área de Compra (Ordem)

1. Descrição do produto (accordion)
2. Que tal complementar com (cross-sell)
3. Produtos relacionados
4. Perguntas Frequentes (FAQ)
5. Avaliações gerais

Esta ordem já está correta no código atual.
