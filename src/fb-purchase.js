/* FB Purchase tracking (ex CA-20)
   Dispara fbq('track', 'Purchase') na página de confirmação.
   Suporta PIX (aguarda QR code sumir) e Cartão/Boleto (direto). */
(function() {
  try {
    if (typeof fbq === 'undefined') return;
    var dl = window.dataLayer;
    if (!dl || !dl[0] || dl[0].pageType !== 'transaction') return;

    var tx = dl[0].transaction;
    var orderId = tx.id;
    var key = 'mm_fbq_' + orderId;
    if (localStorage.getItem(key)) return;

    var ids = [];
    for (var i = 0; i < tx.items.length; i++) {
      ids.push(tx.items[i].sku);
    }

    function firePurchase() {
      if (localStorage.getItem(key)) return;
      fbq('track', 'Purchase', {
        value: tx.value,
        currency: 'BRL',
        content_type: 'product',
        content_ids: ids,
        num_items: tx.items.length
      }, { eventID: orderId });
      localStorage.setItem(key, '1');
    }

    var qrBox = document.querySelector('.box-qrcode');
    var isPix = qrBox && qrBox.style.display !== 'none';

    if (!isPix) {
      firePurchase();
      return;
    }

    var observer = new MutationObserver(function() {
      if (qrBox.style.display === 'none') {
        firePurchase();
        observer.disconnect();
      }
    });
    observer.observe(qrBox, { attributes: true, attributeFilter: ['style'] });
  } catch(e) {}
})();
