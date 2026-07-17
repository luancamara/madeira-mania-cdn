import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function loadStorefrontFlow() {
  const source = readFileSync(new URL('../../src/storefront-flow.js', import.meta.url), 'utf8');
  const window = {};
  vm.runInNewContext(source, { window });
  return window.MMStorefrontFlow;
}

test('detecta somente uma sessão zordEm não vazia', () => {
  const flow = loadStorefrontFlow();

  assert.equal(flow.isLoggedCustomer('foo=1; zordEm=cliente%40example.com; bar=2'), true);
  assert.equal(flow.isLoggedCustomer('zordEm=cliente@example.com'), true);
  assert.equal(flow.isLoggedCustomer('foo=1; zordEm=; bar=2'), false);
  assert.equal(flow.isLoggedCustomer('foo=1; outro=cliente@example.com'), false);
  assert.equal(flow.isLoggedCustomer(''), false);
});

test('leva autenticado ao onepage e visitante ao identify', () => {
  const flow = loadStorefrontFlow();

  assert.equal(flow.checkoutTarget('zordEm=cliente%40example.com'), '/checkout/onepage');
  assert.equal(flow.checkoutTarget('foo=1'), '/checkout/identify');
});

test('promove somente o alerta curto ligado a uma intenção recente de vitrine', () => {
  const flow = loadStorefrontFlow();
  const valid = {
    hasPendingIntent: true,
    title: 'Adicionado ao carrinho!',
    popupClass: 'swal2-popup swal2-toast',
    hasSwal: true
  };

  assert.equal(flow.shouldPromoteVitrineSuccess(valid), true);
  assert.equal(flow.shouldPromoteVitrineSuccess({ ...valid, hasPendingIntent: false }), false);
  assert.equal(flow.shouldPromoteVitrineSuccess({ ...valid, title: 'Falha ao adicionar' }), false);
  assert.equal(flow.shouldPromoteVitrineSuccess({
    ...valid,
    popupClass: 'swal2-popup popup-adicionado-ao-carrinho'
  }), false);
  assert.equal(flow.shouldPromoteVitrineSuccess({ ...valid, hasSwal: false }), false);
});
