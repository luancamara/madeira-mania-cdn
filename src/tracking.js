/* =============================================
   TRACKING.JS - Madeira Mania
   Sistema de tracking agressivo - standalone
   Nao modifica CSS/JS de UI existentes.

   Ferramentas: PostHog, GA4, Meta Pixel,
   Microsoft Clarity, FingerprintJS Pro
   ============================================= */

/* =============================================
   SECAO 1: CONFIGURACAO
   ============================================= */

var MM_CONFIG = {
  posthog_key:  'phc_YBkzKTdsH90FWTbTjSsy62Jo95iDKjQgSlZFXqbds3Q',
  posthog_host: 'https://us.i.posthog.com',
  clarity_id:   'vnhd0x9eve',
  fp_key:       'Jn0Wp90CjDoz3DHpUbVs',
  debug:        false
};
/* GA4 (gtag) e Meta Pixel (fbq) ja carregados pelo Magazord —
   apenas despachamos eventos para window.gtag e window.fbq */

/* =============================================
   SECAO 2: UTILIDADES
   ============================================= */

function mmLoadScript(src, onLoad) {
  var s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (onLoad) s.onload = onLoad;
  (document.head || document.documentElement).appendChild(s);
}

function mmGetSelector(el) {
  if (!el || !el.tagName) return '';
  var parts = [];
  while (el && el.tagName) {
    var sel = el.tagName.toLowerCase();
    if (el.id) { parts.unshift(sel + '#' + el.id); break; }
    /* SVGAnimatedString guard */
    var cls = typeof el.className === 'string' ? el.className : (el.className.baseVal || '');
    if (cls) {
      sel += '.' + cls.trim().split(/\s+/).slice(0, 2).join('.');
    }
    parts.unshift(sel);
    el = el.parentElement;
  }
  return parts.join(' > ').substring(0, 150);
}

function mmHashString(str) {
  if (!window.crypto || !window.crypto.subtle) return Promise.resolve('');
  var buf = new TextEncoder().encode(str.toLowerCase().trim());
  return crypto.subtle.digest('SHA-256', buf).then(function(hash) {
    return Array.from(new Uint8Array(hash)).map(function(b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  });
}

function mmGetClosestSection(node) {
  if (!node || !node.closest) return 'unknown';
  if (node.closest('.informacoes-compra-produto')) return 'purchase_info';
  if (node.closest('#block-imagem')) return 'gallery';
  if (node.closest('.descricao-produto')) return 'description';
  if (node.closest('.container-avaliacoes')) return 'reviews';
  if (node.closest('.produtos-relacionados')) return 'related_products';
  if (node.closest('.recomendacao-ctn-0')) return 'cross_sell';
  if (node.closest('.comprar-fixo')) return 'sticky_bar';
  if (node.closest('header')) return 'header';
  if (node.closest('footer')) return 'footer';
  return 'other';
}

/* =============================================
   SECAO 3: CONTEXTO
   ============================================= */

function mmDetectPageType() {
  var path = location.pathname;
  if (path === '/' || path === '') return 'home';
  if (document.querySelector('#pagina-produto-react-app')) return 'product';
  if (path.indexOf('/carrinho') !== -1 || document.querySelector('.carrinho')) return 'cart';
  if (path.indexOf('/checkout') !== -1 || path.indexOf('/pagamento') !== -1) return 'checkout';
  if (path.indexOf('/busca') !== -1 || location.search.indexOf('busca=') !== -1) return 'search';
  if (document.querySelector('.listagem-produtos') || document.querySelector('.produtos-categoria')) return 'category';
  return 'other';
}

function mmExtractUTMs() {
  var params = new URLSearchParams(location.search);
  var keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  var utms = {};
  var hasAny = false;
  keys.forEach(function(k) {
    var v = params.get(k);
    if (v) { utms[k] = v; hasAny = true; }
  });
  if (hasAny) {
    try { sessionStorage.setItem('mm_utms', JSON.stringify(utms)); } catch(e) {}
  } else {
    try {
      var stored = sessionStorage.getItem('mm_utms');
      if (stored) utms = JSON.parse(stored);
    } catch(e) {}
  }
  return utms;
}

function mmGetOrCreateId() {
  var anonId, sessionId;
  try {
    anonId = localStorage.getItem('mm_anon_id');
    if (!anonId) {
      anonId = 'mm_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 10);
      localStorage.setItem('mm_anon_id', anonId);
    }
  } catch(e) {
    anonId = 'mm_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 10);
  }
  try {
    sessionId = sessionStorage.getItem('mm_session_id');
    if (!sessionId) {
      sessionId = 'ses_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
      sessionStorage.setItem('mm_session_id', sessionId);
    }
  } catch(e) {
    sessionId = 'ses_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
  }
  return { anon_id: anonId, session_id: sessionId };
}

function mmDetectReturnVisitor() {
  var now = Date.now();
  var info = { visit_count: 1, is_returning: false, days_since_last: 0, first_seen: now };
  try {
    var data = localStorage.getItem('mm_visitor');
    if (data) {
      var parsed = JSON.parse(data);
      info.visit_count = (parsed.visit_count || 0) + 1;
      info.first_seen = parsed.first_seen || now;
      info.days_since_last = Math.floor((now - (parsed.last_visit || now)) / 86400000);
      info.is_returning = true;
    }
    localStorage.setItem('mm_visitor', JSON.stringify({
      visit_count: info.visit_count,
      first_seen: info.first_seen,
      last_visit: now
    }));
  } catch(e) {}
  return info;
}

function mmDetectDevice() {
  var ua = navigator.userAgent;
  var w = window.innerWidth;
  var type = 'desktop';
  if (/Mobi|Android/i.test(ua) || w < 768) type = 'mobile';
  else if (/Tablet|iPad/i.test(ua) || (w >= 768 && w < 1024)) type = 'tablet';

  var conn = navigator.connection || {};
  return {
    device_type: type,
    viewport_width: w,
    viewport_height: window.innerHeight,
    screen_width: screen.width,
    screen_height: screen.height,
    connection_type: conn.effectiveType || 'unknown',
    user_agent: ua
  };
}

function mmBuildContext() {
  var ids = mmGetOrCreateId();
  var visitor = mmDetectReturnVisitor();
  var device = mmDetectDevice();
  var utms = mmExtractUTMs();

  return {
    anon_id: ids.anon_id,
    session_id: ids.session_id,
    visitor_id: null, /* set by FingerprintJS later */
    page_type: mmDetectPageType(),
    url: location.href,
    path: location.pathname,
    referrer: document.referrer,
    title: document.title,
    visit_count: visitor.visit_count,
    is_returning: visitor.is_returning,
    days_since_last: visitor.days_since_last,
    first_seen: visitor.first_seen,
    device_type: device.device_type,
    viewport_width: device.viewport_width,
    viewport_height: device.viewport_height,
    connection_type: device.connection_type,
    utm_source: utms.utm_source || null,
    utm_medium: utms.utm_medium || null,
    utm_campaign: utms.utm_campaign || null,
    utm_term: utms.utm_term || null,
    utm_content: utms.utm_content || null,
    gclid: utms.gclid || null,
    fbclid: utms.fbclid || null,
    timestamp: Date.now()
  };
}

/* =============================================
   SECAO 4: EVENT DISPATCH
   ============================================= */

function mmMapToFBEvent(name, props) {
  var map = {
    page_view:        { fb: 'PageView' },
    product_viewed:   { fb: 'ViewContent', params: { content_type: 'product', content_ids: [props.product_id], value: props.price, currency: 'BRL' } },
    add_to_cart:      { fb: 'AddToCart', params: { content_type: 'product', content_ids: [props.product_id], value: props.price, currency: 'BRL' } },
    checkout_started: { fb: 'InitiateCheckout', params: { value: props.cart_value, currency: 'BRL' } },
    freight_calculated: { fb: 'CustomizeProduct' }
  };
  if (name === 'whatsapp_inline_clicked' || name === 'whatsapp_float_clicked') {
    return { fb: 'Contact' };
  }
  return map[name] || null;
}

function mmTrackEvent(name, props) {
  props = props || {};
  var ctx = window.__MM.ctx;
  var merged = {};
  /* merge select context fields */
  merged.mm_session_id = ctx.session_id;
  merged.mm_anon_id = ctx.anon_id;
  merged.mm_page_type = ctx.page_type;
  merged.mm_device_type = ctx.device_type;
  merged.mm_visit_count = ctx.visit_count;
  merged.mm_is_returning = ctx.is_returning;
  for (var k in props) {
    if (props.hasOwnProperty(k)) merged[k] = props[k];
  }

  /* Debug */
  if (MM_CONFIG.debug) {
    console.log('[MM Track]', name, merged);
  }

  /* Queue if not ready */
  if (!window.__MM._ready) {
    window.__MM._q.push({ name: name, props: merged, ts: Date.now() });
    return;
  }

  /* PostHog */
  try {
    if (window.posthog && window.posthog.capture) {
      window.posthog.capture(name, merged);
    }
  } catch(e) {}

  /* GA4 */
  try {
    if (window.gtag) {
      window.gtag('event', name, merged);
    }
  } catch(e) {}

  /* Meta Pixel */
  try {
    if (window.fbq) {
      var fbEvt = mmMapToFBEvent(name, merged);
      if (fbEvt) {
        if (fbEvt.params) {
          window.fbq('track', fbEvt.fb, fbEvt.params);
        } else {
          window.fbq('track', fbEvt.fb);
        }
      } else {
        window.fbq('trackCustom', name, merged);
      }
    }
  } catch(e) {}
}

function mmFlushQueue() {
  var q = window.__MM._q;
  window.__MM._q = [];
  q.forEach(function(item) {
    mmTrackEvent(item.name, item.props);
  });
}

/* =============================================
   SECAO 5: INICIALIZACAO SDKs
   ============================================= */

function mmInitPostHog() {
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing startSessionRecording stopSessionRecording sessionRecordingStarted loadToolbar get_property getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSurvey getSurveyResponse".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  var ctx = window.__MM.ctx;
  window.posthog.init(MM_CONFIG.posthog_key, {
    api_host: MM_CONFIG.posthog_host,
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    enable_recording_console_log: true,
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: { password: true }
    },
    persistence: 'localStorage+cookie',
    respect_dnt: false,
    loaded: function(ph) {
      ph.register({
        mm_session_id: ctx.session_id,
        mm_visit_count: ctx.visit_count,
        mm_is_returning: ctx.is_returning,
        mm_device_type: ctx.device_type
      });
      if (MM_CONFIG.debug) console.log('[MM] PostHog loaded');
    }
  });
}

/* GA4 e Meta Pixel: JA carregados pelo site.
   O dispatch em mmTrackEvent() usa window.gtag e window.fbq diretamente. */

function mmInitClarity() {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", MM_CONFIG.clarity_id);
  if (MM_CONFIG.debug) console.log('[MM] Clarity loaded');
}

function mmInitFingerprintJS() {
  /* FingerprintJS Pro v3 — endpoint IIFE (compativel com <script> normal) */
  mmLoadScript('https://fpjscdn.net/v3/' + MM_CONFIG.fp_key + '/iife.min.js', function() {
    var FpJS = window.FingerprintJS;
    if (!FpJS) {
      if (MM_CONFIG.debug) console.warn('[MM] FingerprintJS global nao encontrado');
      return;
    }
    FpJS.load().then(function(fp) {
      return fp.get();
    }).then(function(result) {
      window.__MM.ctx.visitor_id = result.visitorId;
      /* Identify in PostHog */
      if (window.posthog && window.posthog.identify) {
        window.posthog.identify(result.visitorId, {
          fp_confidence: result.confidence.score,
          mm_anon_id: window.__MM.ctx.anon_id
        });
      }
      mmTrackEvent('visitor_identified', {
        visitor_id: result.visitorId,
        confidence: result.confidence.score,
        is_returning: window.__MM.ctx.is_returning
      });
      if (MM_CONFIG.debug) console.log('[MM] FingerprintJS:', result.visitorId, result.confidence.score);
    }).catch(function(err) {
      if (MM_CONFIG.debug) console.warn('[MM] FingerprintJS error:', err);
    });
  });
}

/* =============================================
   SECAO 6: OBSERVADORES GLOBAIS
   ============================================= */

function mmInitScrollTracker() {
  var thresholds = [10, 25, 50, 75, 90, 100];
  var fired = {};
  var maxScroll = 0;
  var ticking = false;

  function getScrollPercent() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight
    );
    var winHeight = window.innerHeight;
    if (docHeight <= winHeight) return 100;
    return Math.round((scrollTop / (docHeight - winHeight)) * 100);
  }

  window.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      var pct = getScrollPercent();
      if (pct > maxScroll) maxScroll = pct;
      thresholds.forEach(function(t) {
        if (pct >= t && !fired[t]) {
          fired[t] = true;
          mmTrackEvent('scroll_depth_' + t, { max_scroll_percent: maxScroll });
        }
      });
      ticking = false;
    });
  }, { passive: true });

  /* Expose maxScroll for other trackers */
  window.__MM._getMaxScroll = function() { return maxScroll; };
}

function mmInitTimeTracker() {
  var milestones = [5000, 15000, 30000, 60000, 120000, 300000];
  var firedIdx = 0;
  var visibleTime = 0;
  var lastVisible = document.hidden ? null : Date.now();
  var intervalId;

  function tick() {
    if (lastVisible !== null) {
      visibleTime += Date.now() - lastVisible;
      lastVisible = Date.now();
    }
    while (firedIdx < milestones.length && visibleTime >= milestones[firedIdx]) {
      var ms = milestones[firedIdx];
      mmTrackEvent('time_on_page_' + (ms / 1000) + 's', { cumulative_visible_ms: visibleTime });
      firedIdx++;
    }
    if (firedIdx >= milestones.length) clearInterval(intervalId);
  }

  intervalId = setInterval(tick, 1000);

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      if (lastVisible !== null) {
        visibleTime += Date.now() - lastVisible;
        lastVisible = null;
      }
      mmTrackEvent('tab_hidden', { time_visible_ms: visibleTime });
    } else {
      var away = lastVisible === null ? 0 : 0;
      /* Calculate time away */
      mmTrackEvent('tab_visible', { time_away_ms: 0 });
      lastVisible = Date.now();
    }
  });

  window.__MM._getVisibleTime = function() { return visibleTime + (lastVisible ? Date.now() - lastVisible : 0); };
}

function mmInitEngagementTracker() {
  var fired = false;
  var loadTime = Date.now();
  function handler() {
    if (fired) return;
    fired = true;
    mmTrackEvent('page_engaged', { time_to_first_interaction_ms: Date.now() - loadTime });
    window.removeEventListener('scroll', handler);
    window.removeEventListener('click', handler);
    window.removeEventListener('keypress', handler);
  }
  window.addEventListener('scroll', handler, { passive: true });
  window.addEventListener('click', handler);
  window.addEventListener('keypress', handler);
}

function mmInitExitIntent() {
  /* Desktop: mouse leaves viewport top */
  var exitFired = false;
  if (window.__MM.ctx.device_type === 'desktop') {
    document.addEventListener('mouseout', function(e) {
      if (exitFired) return;
      if (e.clientY <= 0) {
        exitFired = true;
        mmTrackEvent('exit_intent', {
          method: 'mouseout_top',
          time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
          max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0
        });
      }
    });
  }

  /* Both: beforeunload */
  window.addEventListener('beforeunload', function() {
    if (!exitFired) {
      mmTrackEvent('exit_intent', {
        method: 'beforeunload',
        time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
        max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0
      });
    }
  });
}

function mmInitClickQuality() {
  var clickLog = []; /* { ts, target } */

  document.addEventListener('click', function(e) {
    var now = Date.now();
    var target = e.target;
    var sel = mmGetSelector(target);

    /* --- Rage click: 3+ clicks on same element in 1s --- */
    clickLog.push({ ts: now, sel: sel });
    /* Clean old entries */
    clickLog = clickLog.filter(function(c) { return now - c.ts < 1000; });
    var sameEl = clickLog.filter(function(c) { return c.sel === sel; });
    if (sameEl.length >= 3) {
      mmTrackEvent('rage_click', {
        element_selector: sel,
        element_text: (target.textContent || '').trim().substring(0, 60),
        click_count: sameEl.length
      });
      clickLog = []; /* reset after firing */
    }

    /* --- Dead click: non-interactive element --- */
    var tag = target.tagName.toLowerCase();
    var isInteractive = (
      tag === 'a' || tag === 'button' || tag === 'input' ||
      tag === 'select' || tag === 'textarea' || tag === 'label' ||
      target.getAttribute('role') === 'button' ||
      target.getAttribute('tabindex') !== null ||
      target.onclick !== null ||
      target.closest('a') || target.closest('button') || target.closest('[role="button"]')
    );
    if (!isInteractive) {
      mmTrackEvent('dead_click', {
        element_selector: sel,
        element_tag: tag,
        element_text: (target.textContent || '').trim().substring(0, 60)
      });
    }
  }, true);
}

function mmInitPerformanceTracker() {
  setTimeout(function() {
    var perf = {};
    try {
      var nav = performance.getEntriesByType('navigation')[0];
      if (nav) perf.ttfb_ms = Math.round(nav.responseStart - nav.requestStart);

      var paint = performance.getEntriesByType('paint');
      paint.forEach(function(p) {
        if (p.name === 'first-contentful-paint') perf.fcp_ms = Math.round(p.startTime);
      });

      /* LCP */
      if (window.PerformanceObserver) {
        try {
          var lcpEntries = performance.getEntriesByType('largest-contentful-paint');
          if (lcpEntries && lcpEntries.length > 0) {
            perf.lcp_ms = Math.round(lcpEntries[lcpEntries.length - 1].startTime);
          }
        } catch(e) {}
      }

      /* CLS via PerformanceObserver if available, otherwise skip */
      perf.cls_score = 0;
      try {
        var clsEntries = performance.getEntriesByType('layout-shift');
        if (clsEntries) {
          clsEntries.forEach(function(entry) {
            if (!entry.hadRecentInput) perf.cls_score += entry.value;
          });
          perf.cls_score = Math.round(perf.cls_score * 1000) / 1000;
        }
      } catch(e) {}
    } catch(e) {}

    if (Object.keys(perf).length > 0) {
      mmTrackEvent('page_performance', perf);
    }
  }, 10000);
}

function mmInitErrorTracker() {
  window.addEventListener('error', function(e) {
    mmTrackEvent('js_error', {
      message: (e.message || '').substring(0, 200),
      source: (e.filename || '').substring(0, 100),
      line: e.lineno,
      col: e.colno,
      stack: (e.error && e.error.stack) ? e.error.stack.substring(0, 300) : ''
    });
  });
  window.addEventListener('unhandledrejection', function(e) {
    var msg = '';
    if (e.reason) msg = (e.reason.message || String(e.reason)).substring(0, 200);
    mmTrackEvent('js_error', {
      message: msg,
      source: 'unhandledrejection',
      line: 0,
      col: 0,
      stack: (e.reason && e.reason.stack) ? e.reason.stack.substring(0, 300) : ''
    });
  });
}

function mmInitContentTracker() {
  /* Copy event */
  document.addEventListener('copy', function(e) {
    var sel = window.getSelection();
    var text = sel ? sel.toString().substring(0, 100) : '';
    mmTrackEvent('text_copied', {
      copied_text: text,
      page_section: mmGetClosestSection(sel.anchorNode)
    });
  });

  /* Right-click */
  document.addEventListener('contextmenu', function(e) {
    mmTrackEvent('right_click', {
      element_selector: mmGetSelector(e.target),
      element_tag: e.target.tagName.toLowerCase()
    });
  });
}

function mmInitWhatsAppFloatTracker() {
  document.addEventListener('click', function(e) {
    var wa = e.target.closest('#popup-msg-whats') || e.target.closest('[id*="whatsapp"]');
    if (wa && !e.target.closest('.exibe-botao-whatsapp')) {
      mmTrackEvent('whatsapp_float_clicked', {
        page_type: window.__MM.ctx.page_type,
        time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
      });
    }
  }, true);
}

function mmInitDeanonTracker() {
  /* Email capture on blur */
  document.addEventListener('blur', function(e) {
    var target = e.target;
    if (!target || target.tagName !== 'INPUT') return;
    var type = (target.type || '').toLowerCase();
    var name = (target.name || '').toLowerCase();
    if (type === 'email' || name.indexOf('email') !== -1 || name.indexOf('mail') !== -1) {
      var val = target.value || '';
      if (val.indexOf('@') !== -1) {
        mmHashString(val).then(function(hash) {
          mmTrackEvent('email_captured', { email_hash: hash });
          if (window.posthog && window.posthog.identify) {
            window.posthog.identify(hash);
          }
        });
      }
    }
  }, true);

  /* Login detection */
  setTimeout(function() {
    /* Common Magazord logged-in selectors */
    var userEl = document.querySelector('.nome-usuario') ||
                 document.querySelector('.meu-perfil .nome') ||
                 document.querySelector('[data-user-name]');
    if (userEl) {
      var name = (userEl.textContent || userEl.getAttribute('data-user-name') || '').trim();
      if (name) {
        mmHashString(name).then(function(hash) {
          mmTrackEvent('login_detected', { user_id_hash: hash });
          if (window.posthog && window.posthog.identify) {
            window.posthog.identify(hash);
          }
        });
      }
    }
  }, 3000);

  /* Form submit tracking */
  document.addEventListener('submit', function(e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    var inputs = form.querySelectorAll('input');
    var hasEmail = false, hasPhone = false;
    inputs.forEach(function(inp) {
      var n = (inp.name || '').toLowerCase();
      var t = (inp.type || '').toLowerCase();
      if (t === 'email' || n.indexOf('email') !== -1) hasEmail = true;
      if (t === 'tel' || n.indexOf('phone') !== -1 || n.indexOf('tel') !== -1 || n.indexOf('celular') !== -1) hasPhone = true;
    });
    mmTrackEvent('form_submitted', {
      form_type: form.getAttribute('action') || 'unknown',
      has_email: hasEmail,
      has_phone: hasPhone
    });
  }, true);
}

/* =============================================
   SECAO 7: TRACKERS DE PRODUTO
   ============================================= */

function mmInitProductTrackers() {
  var app = document.querySelector('#produto-react-app');
  if (!app) return;

  /* --- Extract product context from DOM --- */
  var h1 = app.querySelector('h1');
  var productName = h1 ? h1.textContent.trim() : '';
  var priceEl = app.querySelector('.preco-principal .texto-preco') ||
                app.querySelector('.preco-principal') ||
                app.querySelector('[class*="preco"]');
  var priceText = priceEl ? priceEl.textContent.trim() : '';
  var priceNum = parseFloat(priceText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

  var pixPriceEl = app.querySelector('.preco-pix .texto-preco') || app.querySelector('.preco-pix');
  var pixPriceText = pixPriceEl ? pixPriceEl.textContent.trim() : '';
  var pixPrice = parseFloat(pixPriceText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

  var variationPills = app.querySelectorAll('.variation-pill');
  var swatches = app.querySelectorAll('.variation-color-swatch-wrapper');
  var hasVariations = variationPills.length > 0 || swatches.length > 0;

  var images = app.querySelectorAll('.swiper-slide img, .gallery-main img');
  var imageCount = images.length;

  var reviewCountEl = document.querySelector('.container-avaliacoes .total-avaliacoes') ||
                      document.querySelector('.container-avaliacoes [class*="total"]');
  var reviewCount = reviewCountEl ? parseInt(reviewCountEl.textContent.replace(/\D/g, ''), 10) || 0 : 0;
  var hasReviews = reviewCount > 0;

  /* product_id from URL or data attribute */
  var pathParts = location.pathname.split('/');
  var productId = pathParts[pathParts.length - 1] || location.pathname;

  var productCtx = {
    product_id: productId,
    name: productName,
    price: priceNum,
    price_pix: pixPrice,
    has_variations: hasVariations,
    variation_count: variationPills.length + swatches.length,
    image_count: imageCount,
    has_reviews: hasReviews,
    review_count: reviewCount
  };

  /* #27 product_viewed */
  mmTrackEvent('product_viewed', productCtx);

  /* --- #28-29 Gallery tracker --- */
  (function initGalleryTracker() {
    var pagination = app.querySelector('.swiper-pagination');
    if (!pagination) return;

    var viewedImages = new Set();
    var currentIdx = 0;
    var lastChangeTime = Date.now();

    function getCurrentIndex() {
      var active = pagination.querySelector('.swiper-pagination-bullet-active');
      var allBullets = pagination.querySelectorAll('.swiper-pagination-bullet');
      if (!active) return 0;
      return Array.prototype.indexOf.call(allBullets, active);
    }

    function onSlideChange() {
      var newIdx = getCurrentIndex();
      if (newIdx === currentIdx) return;

      var timePrev = Date.now() - lastChangeTime;

      /* #28 */
      mmTrackEvent('gallery_image_viewed', {
        image_index: newIdx,
        total_images: imageCount,
        time_on_previous_ms: timePrev
      });

      viewedImages.add(newIdx);
      currentIdx = newIdx;
      lastChangeTime = Date.now();

      /* #29 */
      if (viewedImages.size === imageCount && imageCount > 1) {
        mmTrackEvent('gallery_all_viewed', {
          total_images: imageCount,
          time_to_view_all_ms: Date.now() - window.__MM._productLoadTime
        });
      }
    }

    viewedImages.add(getCurrentIndex());

    var observer = new MutationObserver(onSlideChange);
    observer.observe(pagination, { subtree: true, attributes: true, attributeFilter: ['class'] });

    /* #30 Gallery zoom (pinch-to-zoom via touch events) */
    var gallery = app.querySelector('.gallery-main') || app.querySelector('#block-imagem');
    if (gallery) {
      var touchCount = 0;
      gallery.addEventListener('touchstart', function(e) {
        touchCount = e.touches.length;
      }, { passive: true });
      gallery.addEventListener('touchmove', function(e) {
        if (e.touches.length >= 2 && touchCount < 2) {
          mmTrackEvent('gallery_zoom', { image_index: getCurrentIndex() });
        }
        touchCount = e.touches.length;
      }, { passive: true });
    }
  })();

  /* --- #31-32 Variation tracker --- */
  (function initVariationTracker() {
    var derivacoes = app.querySelector('.derivacoes-produto') || app;
    var selectionCount = 0;
    var changeCount = 0;
    var lastSelection = null;

    derivacoes.addEventListener('click', function(e) {
      var pill = e.target.closest('.variation-pill');
      var swatch = e.target.closest('.variation-color-swatch-wrapper');
      var target = pill || swatch;
      if (!target) return;

      var type = swatch ? 'color' : 'size';
      var value = target.textContent.trim().substring(0, 50) ||
                  (target.querySelector('img') ? target.querySelector('img').alt : 'unknown');
      selectionCount++;

      if (lastSelection !== null && lastSelection !== value) {
        changeCount++;
        /* #32 */
        mmTrackEvent('variation_changed', {
          from_value: lastSelection,
          to_value: value,
          change_count: changeCount
        });
      }

      /* #31 */
      mmTrackEvent('variation_selected', {
        type: type,
        value: value,
        previous_value: lastSelection,
        selection_count: selectionCount,
        time_since_load_ms: Date.now() - window.__MM._productLoadTime
      });

      lastSelection = value;
    }, true);
  })();

  /* --- #36 Quantity tracker --- */
  (function initQuantityTracker() {
    var quantArea = app.querySelector('.quantidade') || app.querySelector('[class*="quantidade"]');
    if (!quantArea) return;

    quantArea.addEventListener('click', function(e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      setTimeout(function() {
        var input = quantArea.querySelector('input');
        var qty = input ? parseInt(input.value, 10) : 1;
        var text = btn.textContent.trim();
        mmTrackEvent('quantity_changed', {
          new_quantity: qty,
          direction: text === '+' ? 'increase' : 'decrease',
          previous_quantity: text === '+' ? qty - 1 : qty + 1
        });
      }, 100);
    }, true);
  })();

  /* --- #37-39 Freight tracker --- */
  (function initFreightTracker() {
    var freteArea = app.querySelector('.calculo-frete') ||
                    app.querySelector('[class*="frete"]') ||
                    app.querySelector('[class*="cep"]');
    if (!freteArea) return;

    var cepInput = freteArea.querySelector('input');
    var calcBtn = freteArea.querySelector('button');
    var focusTime = null;

    if (cepInput) {
      cepInput.addEventListener('focus', function() {
        focusTime = Date.now();
        /* #37 */
        mmTrackEvent('freight_input_focused', {
          time_since_load_ms: Date.now() - window.__MM._productLoadTime
        });
      });

      cepInput.addEventListener('blur', function() {
        var val = cepInput.value.replace(/\D/g, '');
        if (val.length < 8 && focusTime) {
          /* #38 - abandoned without calculating */
          mmTrackEvent('freight_input_abandoned', {
            cep_partial: val.substring(0, 5),
            time_typing_ms: Date.now() - focusTime
          });
        }
      });
    }

    if (calcBtn) {
      calcBtn.addEventListener('click', function() {
        /* Wait for result */
        setTimeout(function() {
          var resultEl = freteArea.querySelector('.resultado-frete') ||
                         freteArea.querySelector('[class*="resultado"]') ||
                         freteArea.querySelector('table');
          var hasResult = !!resultEl && resultEl.children.length > 0;
          var val = cepInput ? cepInput.value.replace(/\D/g, '') : '';
          /* #39 */
          mmTrackEvent('freight_calculated', {
            cep_region: val.substring(0, 5),
            has_result: hasResult,
            time_from_price_view_ms: window.__MM._priceViewTime
              ? Date.now() - window.__MM._priceViewTime
              : null
          });
        }, 2000);
      });
    }
  })();

  /* --- #40 Payment options tracker --- */
  (function initPaymentTracker() {
    app.addEventListener('click', function(e) {
      var link = e.target.closest('.form-pag-link') || e.target.closest('[class*="parcela"]');
      if (link) {
        mmTrackEvent('payment_options_clicked', {
          time_since_load_ms: Date.now() - window.__MM._productLoadTime
        });
      }
    }, true);
  })();

  /* --- #33-35, #41-49 Section visibility (IntersectionObservers) --- */
  (function initSectionVisibility() {
    var sections = [
      { sel: '.preco-principal, [class*="preco-principal"]', event: 'price_section_viewed', timeEvent: 'price_section_time', ctx: app },
      { sel: '.porcentagem-desconto, [class*="desconto"]', event: 'discount_badge_viewed', ctx: app },
      { sel: '.descricao-produto.accordion, .descricao-produto', event: 'description_opened', timeEvent: 'description_time', ctx: document },
      { sel: '.container-avaliacoes', event: 'reviews_section_viewed', timeEvent: 'reviews_time', ctx: document },
      { sel: '.produtos-relacionados.accordion, .produtos-relacionados', event: 'related_products_viewed', ctx: document },
      { sel: '.recomendacao-ctn-0', event: 'cross_sell_viewed', ctx: document }
    ];

    sections.forEach(function(section) {
      var el = section.ctx.querySelector(section.sel);
      if (!el) return;

      var viewStartTime = null;
      var hasFired = false;

      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !hasFired) {
            hasFired = true;
            viewStartTime = Date.now();
            var props = { time_since_load_ms: Date.now() - window.__MM._productLoadTime };

            if (section.event === 'price_section_viewed') {
              window.__MM._priceViewTime = Date.now();
              props.price_value = priceNum;
            }
            if (section.event === 'discount_badge_viewed') {
              var text = el.textContent.replace(/[^\d]/g, '');
              props.discount_percent = parseInt(text, 10) || 0;
            }
            if (section.event === 'reviews_section_viewed') {
              props.review_count = reviewCount;
            }

            mmTrackEvent(section.event, props);
          }

          if (!entry.isIntersecting && viewStartTime && section.timeEvent) {
            mmTrackEvent(section.timeEvent, {
              time_visible_ms: Date.now() - viewStartTime,
              price_value: section.event === 'price_section_time' ? priceNum : undefined
            });
            viewStartTime = null;
          }
        });
      }, { threshold: 0.3 });

      observer.observe(el);
    });
  })();

  /* --- #45 Write review clicked --- */
  (function() {
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.container-avaliacoes button') ||
                e.target.closest('[class*="avaliar"]') ||
                e.target.closest('[class*="review"] button');
      if (btn) {
        mmTrackEvent('write_review_clicked', { existing_review_count: reviewCount });
      }
    }, true);
  })();

  /* --- #47 Related product clicked --- */
  (function() {
    var related = document.querySelector('.produtos-relacionados');
    if (!related) return;
    related.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;
      var nameEl = link.querySelector('.nome-produto') || link.querySelector('h3') || link;
      var items = related.querySelectorAll('a[href*="/"]');
      var pos = Array.prototype.indexOf.call(items, link);
      mmTrackEvent('related_product_clicked', {
        clicked_product_name: (nameEl.textContent || '').trim().substring(0, 80),
        position: pos
      });
    }, true);
  })();

  /* --- #49 Cross-sell clicked --- */
  (function() {
    var crossSell = document.querySelector('.recomendacao-ctn-0');
    if (!crossSell) return;
    crossSell.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;
      var nameEl = link.querySelector('.nome-produto') || link.querySelector('h3') || link;
      var items = crossSell.querySelectorAll('a[href*="/"]');
      var pos = Array.prototype.indexOf.call(items, link);
      mmTrackEvent('cross_sell_clicked', {
        clicked_product_name: (nameEl.textContent || '').trim().substring(0, 80),
        position: pos
      });
    }, true);
  })();

  /* --- #50-51, #55 Purchase tracker (buy button + sticky + hesitation) --- */
  (function initPurchaseTracker() {
    /* Inline buy button */
    var buyBtn = app.querySelector('#area-comprar button') ||
                 app.querySelector('.comprar button');

    /* Sticky buy button */
    var stickyBar = document.querySelector('.comprar-fixo.area-compra-float');
    var stickyAppeared = false;

    /* #51 Sticky bar appeared (when main buy button leaves viewport) */
    if (buyBtn && stickyBar) {
      var stickyObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (!entry.isIntersecting && !stickyAppeared) {
            stickyAppeared = true;
            mmTrackEvent('sticky_bar_appeared', {
              scroll_position: window.pageYOffset,
              time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
            });
          }
        });
      }, { threshold: 0 });
      stickyObserver.observe(buyBtn);
    }

    /* #50 Add to cart */
    function handleBuyClick(e, location) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var text = btn.textContent.toLowerCase();
      if (text.indexOf('comprar') === -1 && text.indexOf('carrinho') === -1 && text.indexOf('adicionar') === -1) return;

      mmTrackEvent('add_to_cart', {
        product_id: productId,
        name: productName,
        price: priceNum,
        quantity: (function() {
          var inp = app.querySelector('.quantidade input');
          return inp ? parseInt(inp.value, 10) || 1 : 1;
        })(),
        selected_variations: (function() {
          var selected = [];
          app.querySelectorAll('.variation-pill[tabindex="0"]').forEach(function(p) {
            selected.push(p.textContent.trim());
          });
          return selected.join(', ');
        })(),
        time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
        scroll_depth: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0,
        button_location: location
      });
    }

    if (buyBtn) {
      buyBtn.closest('#area-comprar').addEventListener('click', function(e) {
        handleBuyClick(e, 'inline');
      }, true);
    }

    if (stickyBar) {
      stickyBar.addEventListener('click', function(e) {
        handleBuyClick(e, 'sticky');
      }, true);
    }

    /* #55 Buy button hesitation (hover/touch > 3s without click) */
    function trackHesitation(btn, location) {
      if (!btn) return;
      var hoverStart = null;
      var hoverTimer = null;

      function startHesitation() {
        hoverStart = Date.now();
        hoverTimer = setTimeout(function() {
          mmTrackEvent('buy_button_hesitation', {
            hesitation_ms: Date.now() - hoverStart,
            button_location: location
          });
        }, 3000);
      }

      function clearHesitation() {
        if (hoverTimer) clearTimeout(hoverTimer);
        hoverStart = null;
      }

      btn.addEventListener('mouseenter', startHesitation);
      btn.addEventListener('mouseleave', clearHesitation);
      btn.addEventListener('click', clearHesitation);
      btn.addEventListener('touchstart', startHesitation, { passive: true });
      btn.addEventListener('touchend', clearHesitation);
    }

    trackHesitation(buyBtn, 'inline');
    if (stickyBar) trackHesitation(stickyBar.querySelector('button'), 'sticky');
  })();

  /* --- #52-54 Action row tracker --- */
  (function initActionRowTracker() {
    /* #52 Favorite */
    app.addEventListener('click', function(e) {
      if (e.target.closest('.salvar-favoritos')) {
        mmTrackEvent('favorite_clicked', { product_id: productId, product_name: productName });
      }
    }, true);

    /* #53 Share */
    app.addEventListener('click', function(e) {
      if (e.target.closest('.compartilhar-produto')) {
        mmTrackEvent('share_clicked', { product_id: productId });
      }
    }, true);

    /* #54 WhatsApp inline */
    app.addEventListener('click', function(e) {
      if (e.target.closest('.exibe-botao-whatsapp')) {
        mmTrackEvent('whatsapp_inline_clicked', {
          product_id: productId,
          product_price: priceNum,
          time_on_page_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
        });
      }
    }, true);
  })();

  /* --- #56-58 Scroll pattern tracker --- */
  (function initScrollPattern() {
    var lastDir = null;
    var dirChanges = 0;
    var lastY = window.pageYOffset;
    var sectionsViewed = new Set();
    var excessiveFired = false;
    var recentReversals = [];

    window.addEventListener('scroll', function() {
      var y = window.pageYOffset;
      var dir = y > lastY ? 'down' : 'up';

      if (lastDir && dir !== lastDir) {
        dirChanges++;
        recentReversals.push(Date.now());
        /* Keep only last 10s */
        var cutoff = Date.now() - 10000;
        recentReversals = recentReversals.filter(function(t) { return t > cutoff; });

        /* #58 Excessive scrolling */
        if (recentReversals.length >= 5 && !excessiveFired) {
          excessiveFired = true;
          mmTrackEvent('excessive_scrolling', {
            reversal_count: recentReversals.length,
            section: mmGetClosestSection(document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2))
          });
        }
      }

      lastDir = dir;
      lastY = y;

      /* Track sections in viewport */
      var midEl = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
      if (midEl) sectionsViewed.add(mmGetClosestSection(midEl));
    }, { passive: true });

    /* #56 Product scroll pattern on beforeunload */
    window.addEventListener('beforeunload', function() {
      mmTrackEvent('product_scroll_pattern', {
        max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0,
        direction_changes: dirChanges,
        sections_viewed: Array.from(sectionsViewed),
        time_total_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0
      });
    });

    /* #57 Bounce with context */
    setTimeout(function() {
      var scroll = window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0;
      if (scroll < 25) {
        /* Will fire if user leaves before 15s with <25% scroll */
        window.addEventListener('beforeunload', function bounceHandler() {
          var time = window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0;
          if (time < 15000 && scroll < 25) {
            var lastEl = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
            mmTrackEvent('bounce_with_context', {
              time_on_page_ms: time,
              last_element_seen: lastEl ? mmGetSelector(lastEl) : 'unknown'
            });
          }
          window.removeEventListener('beforeunload', bounceHandler);
        });
      }
    }, 5000);
  })();
}

/* =============================================
   SECAO 8: CART / CHECKOUT TRACKERS
   ============================================= */

function mmInitCartTrackers() {
  var pageType = window.__MM.ctx.page_type;

  /* #62 Cart viewed */
  if (pageType === 'cart') {
    setTimeout(function() {
      var items = document.querySelectorAll('.item-carrinho, .cart-item, [class*="item-cart"]');
      var totalEl = document.querySelector('.total-carrinho, .cart-total, [class*="total"]');
      var totalText = totalEl ? totalEl.textContent : '';
      var totalVal = parseFloat(totalText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

      mmTrackEvent('cart_viewed', {
        cart_value: totalVal,
        item_count: items.length
      });

      /* #63 Cart item removed (MutationObserver) */
      var cartContainer = items.length > 0 ? items[0].parentElement : null;
      if (cartContainer) {
        var prevCount = items.length;
        var cartObserver = new MutationObserver(function() {
          var currentItems = cartContainer.querySelectorAll('.item-carrinho, .cart-item, [class*="item-cart"]');
          if (currentItems.length < prevCount) {
            mmTrackEvent('cart_item_removed', {
              removed_product: 'unknown',
              remaining_count: currentItems.length
            });
          }
          prevCount = currentItems.length;
        });
        cartObserver.observe(cartContainer, { childList: true, subtree: true });
      }
    }, 2000);
  }

  /* #64-65 Checkout */
  if (pageType === 'checkout') {
    setTimeout(function() {
      var totalEl = document.querySelector('.total-pedido, .order-total, [class*="total"]');
      var totalText = totalEl ? totalEl.textContent : '';
      var totalVal = parseFloat(totalText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
      var items = document.querySelectorAll('.item-pedido, .checkout-item, [class*="item"]');

      /* #64 */
      mmTrackEvent('checkout_started', {
        cart_value: totalVal,
        item_count: items.length
      });

      /* #65 Checkout abandoned */
      window.addEventListener('beforeunload', function() {
        var lastStep = '';
        var steps = document.querySelectorAll('.step.active, .etapa.ativa, [class*="step"].active');
        if (steps.length > 0) lastStep = steps[steps.length - 1].textContent.trim().substring(0, 50);

        mmTrackEvent('checkout_abandoned', {
          last_step: lastStep,
          time_in_checkout_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
          cart_value: totalVal
        });
      });
    }, 2000);
  }
}

/* =============================================
   SECAO 9: BOOT
   ============================================= */

(function mmBoot() {
  /* Namespace global */
  window.__MM = {
    cfg: MM_CONFIG,
    ctx: null,
    track: mmTrackEvent,
    _q: [],
    _ready: false,
    _productLoadTime: Date.now(),
    _priceViewTime: null
  };

  /* Build context */
  window.__MM.ctx = mmBuildContext();

  if (MM_CONFIG.debug) {
    console.log('[MM] Context:', window.__MM.ctx);
  }

  /* Init SDKs — apenas os NOVOS (GA4 + Meta Pixel ja estao no site) */
  mmInitPostHog();
  setTimeout(function() { mmInitClarity(); }, 2000);
  setTimeout(function() { mmInitFingerprintJS(); }, 3000);

  /* Mark ready + flush queue after short delay for SDKs to load */
  setTimeout(function() {
    window.__MM._ready = true;
    mmFlushQueue();
    if (MM_CONFIG.debug) console.log('[MM] Ready. Flushed', window.__MM._q.length, 'queued events');
  }, 4000);

  /* #1 page_view (fires immediately, may queue) */
  mmTrackEvent('page_view', {
    page_type: window.__MM.ctx.page_type,
    url: window.__MM.ctx.url,
    referrer: window.__MM.ctx.referrer,
    utm_source: window.__MM.ctx.utm_source,
    utm_medium: window.__MM.ctx.utm_medium,
    utm_campaign: window.__MM.ctx.utm_campaign,
    device_type: window.__MM.ctx.device_type,
    is_returning: window.__MM.ctx.is_returning,
    visit_count: window.__MM.ctx.visit_count,
    viewport: window.__MM.ctx.viewport_width + 'x' + window.__MM.ctx.viewport_height
  });

  /* Init global observers immediately */
  mmInitScrollTracker();
  mmInitTimeTracker();
  mmInitEngagementTracker();
  mmInitExitIntent();
  mmInitClickQuality();
  mmInitPerformanceTracker();
  mmInitErrorTracker();
  mmInitContentTracker();
  mmInitWhatsAppFloatTracker();
  mmInitDeanonTracker();

  /* Product page: wait for React render then init product trackers */
  if (window.__MM.ctx.page_type === 'product') {
    (function waitForProduct() {
      var retries = 0;
      function check() {
        retries++;
        var reactApp = document.querySelector('#produto-react-app');
        if (reactApp && reactApp.querySelector('.informacoes-compra-produto')) {
          window.__MM._productLoadTime = Date.now();
          mmInitProductTrackers();
          return;
        }
        if (retries < 30) setTimeout(check, 500);
      }
      check();
    })();
  }

  /* Cart/Checkout trackers */
  if (window.__MM.ctx.page_type === 'cart' || window.__MM.ctx.page_type === 'checkout') {
    mmInitCartTrackers();
  }

  /* #25 Session summary on beforeunload */
  window.addEventListener('beforeunload', function() {
    var productsViewed = 0;
    try {
      var stored = sessionStorage.getItem('mm_products_viewed');
      productsViewed = stored ? JSON.parse(stored).length : 0;
    } catch(e) {}

    mmTrackEvent('session_summary', {
      pages_viewed: (function() {
        try {
          var count = parseInt(sessionStorage.getItem('mm_page_count') || '0', 10);
          return count;
        } catch(e) { return 0; }
      })(),
      total_time_ms: window.__MM._getVisibleTime ? window.__MM._getVisibleTime() : 0,
      max_scroll: window.__MM._getMaxScroll ? window.__MM._getMaxScroll() : 0,
      products_viewed: productsViewed,
      add_to_cart_count: parseInt(sessionStorage.getItem('mm_atc_count') || '0', 10)
    });
  });

  /* Track page count and products viewed in sessionStorage */
  try {
    var pageCount = parseInt(sessionStorage.getItem('mm_page_count') || '0', 10) + 1;
    sessionStorage.setItem('mm_page_count', String(pageCount));

    if (window.__MM.ctx.page_type === 'product') {
      var productsArr = [];
      try { productsArr = JSON.parse(sessionStorage.getItem('mm_products_viewed') || '[]'); } catch(e) {}
      productsArr.push(location.pathname);
      sessionStorage.setItem('mm_products_viewed', JSON.stringify(productsArr));
    }
  } catch(e) {}

  if (MM_CONFIG.debug) {
    console.log('[MM] Boot complete. Page type:', window.__MM.ctx.page_type);
    /* Expose track function globally for testing */
    window.mmTrack = mmTrackEvent;
  }
})();
