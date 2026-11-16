/* Nutcracker 2026 LP — shared behaviour for Option A & B
   Seat map, tier selection, countdown, reveal, FAQ, lightbox, nav state. */
(function () {
  'use strict';

  var TIERS = [
    { id: 'vvip',    name: 'VVIP',       price: 3500000, seats: 89,  zone: 'Trung tâm tầng 1 · hàng F–L, gần sân khấu nhất' },
    { id: 'gold',    name: 'Gold · VIP', price: 2500000, seats: 131, zone: 'Trung tâm tầng 1 · hàng P–Z, ngay sau VVIP' },
    { id: 'silver',  name: 'Silver',     price: 2000000, seats: 397, zone: 'Hai cánh tầng 1 · hàng A–O' },
    { id: 'bronze',  name: 'Bronze',     price: 1500000, seats: 312, zone: 'Hai cánh tầng 1 phía sau & lô tầng 2' },
    { id: 'upper',   name: 'Upper',      price: 1000000, seats: 105, zone: 'Trung tâm tầng 2 · hàng A–F' },
    { id: 'economy', name: 'Economy',    price: 750000,  seats: 754, zone: 'Tầng 2 · hai cánh & phía sau' }
  ];
  var fmt = function (n) { return n.toLocaleString('vi-VN').replace(/,/g, '.') + 'đ'; };
  window.NUT = { TIERS: TIERS, fmt: fmt };

  /* ---------- Seat map ---------- */
  function buildSeatmap(host, colors) {
    var data = window.NUT_SEATMAP; if (!data || !host) return null;
    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '110 -150 2340 2580');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Sơ đồ khán phòng Nhà hát Hoà Bình, hai tầng, chia theo hạng vé');
    svg.classList.add('sm-svg');

    var defs = document.createElementNS(NS, 'defs');
    defs.innerHTML = '<pattern id="sm-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="' + colors.invited + '"/><line x1="0" y1="0" x2="0" y2="8" stroke="' + colors.invitedLine + '" stroke-width="3"/></pattern>';
    svg.appendChild(defs);

    // stage
    var stage = document.createElementNS(NS, 'g'); stage.setAttribute('class', 'sm-stage');
    stage.innerHTML =
      '<path d="M700 -110 H1920 V20 Q1310 70 700 20 Z" fill="' + colors.stage + '"/>' +
      '<text x="1310" y="-28" text-anchor="middle" fill="' + colors.stageText + '" font-size="40" letter-spacing="10" font-weight="600">SÂN KHẤU</text>';
    svg.appendChild(stage);

    // Larger labels are opt-in so the other landing page keeps its scale.
    var floorSize = Number(host.dataset.floorSize) || 30;
    [['TẦNG 1', 100], ['TẦNG 2', 1300]].forEach(function (f) {
      var t = document.createElementNS(NS, 'text');
      t.setAttribute('x', 1310); t.setAttribute('y', f[1] + 6); t.setAttribute('text-anchor', 'middle');
      t.setAttribute('class', 'sm-floor'); t.setAttribute('fill', colors.label);
      t.setAttribute('font-size', floorSize); t.setAttribute('letter-spacing', '8'); t.setAttribute('font-weight', '600');
      if (floorSize > 30) {
        t.setAttribute('dominant-baseline', 'middle');
        t.setAttribute('fill', colors.stageText);
      }
      t.textContent = f[0]; svg.appendChild(t);
      var l1 = document.createElementNS(NS, 'path');
      l1.setAttribute('class', 'sm-floor-rule');
      l1.setAttribute('d', 'M140 ' + f[1] + (floorSize > 30 ? ' H950 M1670 ' : ' H1180 M1440 ') + f[1] + ' H2440');
      l1.setAttribute('stroke', colors.rule); l1.setAttribute('stroke-width', '2'); svg.appendChild(l1);
    });

    var groups = {};
    data.tiers.forEach(function (id) {
      var g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'sm-tier'); g.dataset.tier = id;
      g.setAttribute('fill', id === 'invited' ? 'url(#sm-hatch)' : colors[id]);
      groups[id] = g; svg.appendChild(g);
    });
    var html = {};
    data.seats.forEach(function (s) {
      var id = data.tiers[s[2]];
      html[id] = (html[id] || '') + '<rect x="' + (s[0] - 13) + '" y="' + (s[1] - 13) + '" width="26" height="26" rx="7"/>';
    });
    Object.keys(html).forEach(function (id) { groups[id].innerHTML = html[id]; });

    // row letters (only the outer ones keep it readable)
    var rows = document.createElementNS(NS, 'g'); rows.setAttribute('class', 'sm-rows');
    rows.setAttribute('fill', colors.label); rows.setAttribute('font-size', '17'); rows.setAttribute('text-anchor', 'middle');
    rows.setAttribute('dominant-baseline', 'central');
    var rh = '';
    data.rows.forEach(function (r) { if (r[2].length === 1) rh += '<text x="' + r[0] + '" y="' + r[1] + '">' + r[2] + '</text>'; });
    rows.innerHTML = rh; svg.appendChild(rows);

    var views = { all: '110 -150 2340 2580', f1: '110 -150 2340 1320', f2: '110 1250 2340 1180' };
    var mobileLabels = host.hasAttribute('data-mobile-levels');
    var firstLabel, secondLabel, currentView = 'all';
    host.innerHTML = '';
    if (mobileLabels) {
      firstLabel = document.createElement('div'); firstLabel.className = 'sm-mobile-level';
      firstLabel.innerHTML = '<span data-level="1">Tầng 1</span><span data-level="2" hidden>Tầng 2</span>';
      var diagram = document.createElement('div'); diagram.className = 'sm-diagram';
      secondLabel = svg.querySelectorAll('.sm-floor')[1];
      host.appendChild(firstLabel); diagram.appendChild(svg); host.appendChild(diagram);
      var textScale = function () {
        var scale = svg.getBoundingClientRect().width / 2340;
        var mobile = matchMedia('(max-width: 760px)').matches;
        var label = stage.querySelector('text');
        if (!scale) return;
        label.setAttribute('font-size', mobile ? 10 / scale : 40);
        label.setAttribute('letter-spacing', mobile ? 1.2 / scale : 10);
        // This label sits entirely inside the empty aisle (y=1115..1361).
        // Keep it in SVG coordinates so it cannot drift over seats on resize.
        var floorText = document.documentElement.lang === 'en' ? (mobile ? 'Level 2' : 'LEVEL 2') : (mobile ? 'Tầng 2' : 'TẦNG 2');
        if (secondLabel.textContent !== floorText) secondLabel.textContent = floorText;
        secondLabel.setAttribute('x', mobile ? 140 : 1310);
        secondLabel.setAttribute('y', mobile ? 1238 : 1306);
        secondLabel.setAttribute('text-anchor', mobile ? 'start' : 'middle');
        secondLabel.setAttribute('dominant-baseline', mobile ? 'central' : 'auto');
        secondLabel.setAttribute('font-size', mobile ? 13 / scale : floorSize);
        secondLabel.setAttribute('font-weight', mobile ? 500 : 600);
        secondLabel.setAttribute('letter-spacing', mobile ? .26 / scale : 8);
        secondLabel.setAttribute('fill', mobile ? colors.stageText : colors.label);
        secondLabel.style.display = mobile && currentView === 'all' ? 'block' : '';
      };
      if ('ResizeObserver' in window) new ResizeObserver(textScale).observe(host);
      else addEventListener('resize', textScale, { passive: true });
      textScale();
    } else host.appendChild(svg);
    function setView(view) {
      view = views[view] ? view : 'all';
      currentView = view;
      svg.setAttribute('viewBox', views[view]);
      if (mobileLabels) {
        firstLabel.querySelector('[data-level="1"]').hidden = view === 'f2';
        firstLabel.querySelector('[data-level="2"]').hidden = view !== 'f2';
        textScale();
      }
    }
    return {
      svg: svg,
      setTier: function (id) {
        svg.classList.toggle('has-active', !!id);
        Object.keys(groups).forEach(function (k) { groups[k].classList.toggle('is-active', k === id); });
      },
      focusTier: function (id) {
        var bounds = id && groups[id] ? groups[id].getBBox() : null;
        var view = !bounds ? 'all' : bounds.y > 1250 ? 'f2' : bounds.y + bounds.height < 1250 ? 'f1' : 'all';
        setView(view);
      },
      setView: setView
    };
  }

  function initTickets(root, colors) {
    if (!root) return;
    var map = buildSeatmap(root.querySelector('[data-seatmap]'), colors);
    var list = root.querySelector('[data-tier-list]');
    var tpl = root.querySelector('template[data-tier-tpl]');
    var current = root.querySelector('[data-current]');
    var toggleTiers = root.hasAttribute('data-toggle-tiers');
    var noLongDashes = root.hasAttribute('data-no-long-dashes');
    var focusTier = root.hasAttribute('data-focus-tier');
    var phone = matchMedia('(max-width: 760px)');
    var mobileBuy = document.querySelector('[data-mobile-buy][data-sync-tier]');
    var mobileLabel = mobileBuy && mobileBuy.querySelector('[data-mobile-tier]');
    var mobilePrice = mobileBuy && mobileBuy.querySelector('[data-mobile-price]');
    var defaultMobileLabel = mobileLabel && mobileLabel.textContent;
    var defaultMobilePrice = mobilePrice && mobilePrice.textContent;
    var selectedTier = null;
    function syncMapView() {
      if (!map || !focusTier) return;
      if (phone.matches) map.focusTier(selectedTier);
      else map.setView('all');
    }
    if (focusTier) phone.addEventListener('change', syncMapView);
    if (list && tpl) {
      TIERS.forEach(function (t, i) {
        var n = tpl.content.firstElementChild.cloneNode(true);
        n.dataset.tier = t.id;
        n.style.setProperty('--tier', colors[t.id]);
        n.querySelector('[data-f=name]').textContent = t.name;
        n.querySelector('[data-f=price]').textContent = fmt(t.price);
        var zone = n.querySelector('[data-f=zone]');
        if (zone) zone.textContent = noLongDashes ? t.zone.replace(/[–—]/g, ' đến ') : t.zone;
        var sc = n.querySelector('[data-f=seats]'); if (sc) sc.textContent = t.seats + ' ghế';
        var idx = n.querySelector('[data-f=idx]'); if (idx) idx.textContent = String(i + 1).padStart(2, '0');
        list.appendChild(n);
      });
    }
    function select(id) {
      var t = TIERS.filter(function (x) { return x.id === id; })[0];
      if (!t && !(toggleTiers && id === null)) return;
      selectedTier = id;
      root.querySelectorAll('[data-tier-list] [data-tier]').forEach(function (b) {
        var on = b.dataset.tier === id; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on);
      });
      root.querySelectorAll('.legend [data-tier]').forEach(function (b) { b.classList.toggle('is-on', b.dataset.tier === id); });
      if (map) map.setTier(id);
      syncMapView();
      if (mobileLabel && mobilePrice) {
        mobileLabel.textContent = t ? t.name + ' · 22.12 · 20:00' : defaultMobileLabel;
        mobilePrice.textContent = t ? fmt(t.price) : defaultMobilePrice;
      }
      if (current) {
        current.querySelector('[data-f=name]').textContent = t ? t.name : 'Toàn bộ hạng vé';
        current.querySelector('[data-f=price]').textContent = t ? fmt(t.price) : fmt(TIERS[TIERS.length - 1].price) + (noLongDashes ? ' đến ' : ' – ') + fmt(TIERS[0].price);
        if (t) current.style.setProperty('--tier', colors[id]);
        else current.style.removeProperty('--tier');
      }
    }
    function activate(id) {
      select(toggleTiers && selectedTier === id ? null : id);
      if (focusTier && phone.matches) {
        var panel = root.querySelector('.stage-panel');
        if (panel) panel.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    }
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tier]'); if (b && root.contains(b) && !b.classList.contains('sm-tier')) activate(b.dataset.tier);
      var v = e.target.closest('[data-view]');
      if (v && map) {
        map.setView(v.dataset.view);
        root.querySelectorAll('[data-view]').forEach(function (x) { x.classList.toggle('is-on', x === v); x.setAttribute('aria-pressed', x === v); });
      }
    });
    if (map) map.svg.addEventListener('click', function (e) {
      var g = e.target.closest('.sm-tier'); if (g && g.dataset.tier !== 'invited') activate(g.dataset.tier);
    });
    select(toggleTiers ? null : root.dataset.default || 'gold');
  }

  /* ---------- Countdown ---------- */
  function initCountdown() {
    var els = document.querySelectorAll('[data-countdown]'); if (!els.length) return;
    var target = new Date('2026-12-22T20:00:00+07:00').getTime();
    function tick() {
      var d = Math.max(0, target - Date.now());
      var parts = { d: Math.floor(d / 864e5), h: Math.floor(d / 36e5) % 24, m: Math.floor(d / 6e4) % 60, s: Math.floor(d / 1e3) % 60 };
      els.forEach(function (el) {
        Object.keys(parts).forEach(function (k) {
          var n = el.querySelector('[data-' + k + ']'); if (n) n.textContent = String(parts[k]).padStart(2, '0');
        });
      });
    }
    tick(); setInterval(tick, 1000);
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (i) { i.classList.add('in'); }); return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- FAQ: one open at a time ---------- */
  function initFaq() {
    document.querySelectorAll('[data-faq] details').forEach(function (d, _, all) {
      d.addEventListener('toggle', function () {
        if (d.open) all.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    if (!items.length) return;
    var box = document.createElement('div');
    box.className = 'lb'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.hidden = true;
    box.innerHTML = '<button class="lb-x" aria-label="Đóng">×</button><button class="lb-p" aria-label="Ảnh trước">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-n" aria-label="Ảnh sau">›</button>';
    document.body.appendChild(box);
    var img = box.querySelector('img'), cap = box.querySelector('figcaption'), i = 0, last;
    function show(n) {
      i = (n + items.length) % items.length;
      var a = items[i]; img.src = a.getAttribute('href'); img.alt = a.dataset.caption || ''; cap.textContent = a.dataset.caption || '';
    }
    function close() { box.hidden = true; document.documentElement.classList.remove('lb-open'); if (last) last.focus(); }
    items.forEach(function (a, n) {
      a.addEventListener('click', function (e) { e.preventDefault(); last = a; show(n); box.hidden = false; document.documentElement.classList.add('lb-open'); box.querySelector('.lb-x').focus(); });
    });
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lb-x')) close();
      if (e.target.classList.contains('lb-p')) show(i - 1);
      if (e.target.classList.contains('lb-n')) show(i + 1);
    });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(i - 1); if (e.key === 'ArrowRight') show(i + 1);
    });
  }

  /* ---------- Header: scrolled state + active nav ---------- */
  function initNav() {
    var hdr = document.querySelector('[data-hdr]');
    var buy = document.querySelector('[data-mobile-buy]');
    var hero = document.querySelector('[data-hero]');
    function onScroll() {
      var y = window.scrollY;
      if (hdr) hdr.classList.toggle('is-scrolled', y > 24);
      if (buy && hero) buy.classList.toggle('is-shown', y > hero.offsetHeight * 0.7);
    }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    var links = document.querySelectorAll('[data-nav] a[href^="#"]');
    if (!('IntersectionObserver' in window) || !links.length) return;
    var map = {}; links.forEach(function (l) {
      var id = l.getAttribute('href').slice(1);
      (map[id] || (map[id] = [])).push(l);
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (l) { l.classList.remove('is-on'); l.removeAttribute('aria-current'); });
          map[e.target.id].forEach(function (l) { l.classList.add('is-on'); l.setAttribute('aria-current', 'location'); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  window.NUT.init = function (opts) {
    initTickets(document.querySelector('[data-tickets]'), opts.colors);
    initCountdown(); initReveal(); initFaq(); initLightbox(); initNav();
  };
})();
