/* =============================================
   STOREFRONT FLOW — shared, side-effect-free decisions

   Kept as a browser global because the production bundle is concatenated,
   while remaining directly executable in a Node VM for regression tests.
   ============================================= */
(function initMMStorefrontFlow(root) {
  'use strict';

  if (!root || root.MMStorefrontFlow) return;

  function isLoggedCustomer(cookie) {
    return /(?:^|;\s*)zordEm=[^;\s]+/.test(String(cookie || ''));
  }

  function checkoutTarget(cookie) {
    return isLoggedCustomer(cookie) ? '/checkout/onepage' : '/checkout/identify';
  }

  function shouldPromoteVitrineSuccess(options) {
    options = options || {};
    return options.hasPendingIntent === true &&
      String(options.title || '').trim() === 'Adicionado ao carrinho!' &&
      String(options.popupClass || '').indexOf('popup-adicionado-ao-carrinho') === -1 &&
      options.hasSwal === true;
  }

  root.MMStorefrontFlow = Object.freeze({
    isLoggedCustomer: isLoggedCustomer,
    checkoutTarget: checkoutTarget,
    shouldPromoteVitrineSuccess: shouldPromoteVitrineSuccess
  });
})(window);
