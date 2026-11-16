/* Option B mobile carousels: arrows, dots, swiping and visible-only autoplay. */
(function () {
  'use strict';
  var mobile = matchMedia('(max-width: 760px)');
  var reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-mobile-carousel]').forEach(function (track) {
    var slides = Array.prototype.slice.call(track.children);
    var label = track.getAttribute('aria-label');
    var controls = document.createElement('div');
    controls.className = 'carousel-controls' + (track.closest('.light') ? ' is-light' : '');
    controls.dataset.carouselControls = track.id;
    var dots = document.createElement('div');
    dots.className = 'carousel-dots';
    var buttons = slides.map(function (_, n) {
      var button = document.createElement('button');
      button.type = 'button'; button.className = 'carousel-dot';
      button.setAttribute('aria-label', label + ': trang ' + (n + 1) + ' / ' + slides.length);
      button.setAttribute('aria-controls', track.id);
      button.addEventListener('click', function () { go(n); });
      dots.appendChild(button);
      return button;
    });
    function arrow(direction) {
      var button = document.createElement('button');
      button.type = 'button'; button.className = 'carousel-arrow';
      button.setAttribute('data-carousel-' + (direction < 0 ? 'prev' : 'next'), '');
      button.setAttribute('aria-label', label + (direction < 0 ? ': mục trước' : ': mục tiếp theo'));
      button.setAttribute('aria-controls', track.id);
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + (direction < 0 ? 'm14 5-7 7 7 7' : 'm10 5 7 7-7 7') + '"/></svg>';
      button.addEventListener('click', function () { go((index + direction + slides.length) % slides.length); });
      return button;
    }
    controls.appendChild(arrow(-1)); controls.appendChild(dots);
    controls.appendChild(arrow(1));
    track.insertAdjacentElement('afterend', controls);
    track.setAttribute('role', 'region');
    var index = 0, pending = false, visible = false, interacting = false, focused = false;
    var timer = 0, scrollTimer = 0;
    var interval = track.id === 'artist-carousel' ? 6500 : 5000;
    function schedule() {
      clearTimeout(timer);
      if (mobile.matches && !reduced.matches && visible && !document.hidden && !interacting && !focused) {
        timer = setTimeout(function () { go((index + 1) % slides.length); }, interval);
      }
    }
    function offset(slide) {
      return slide.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    }
    function update() {
      pending = false;
      var distance = Infinity;
      slides.forEach(function (slide, n) {
        var diff = Math.abs(offset(slide) - track.scrollLeft);
        if (diff < distance) { index = n; distance = diff; }
      });
      if (track.scrollLeft > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) index = slides.length - 1;
      buttons.forEach(function (button, n) { button.setAttribute('aria-current', n === index ? 'true' : 'false'); });
    }
    function go(n) {
      var target = Math.max(0, Math.min(slides.length - 1, n));
      track.scrollTo({left:offset(slides[target]), behavior:reduced.matches ? 'instant' : 'smooth'});
      schedule();
    }
    track.addEventListener('scroll', function () {
      clearTimeout(timer); clearTimeout(scrollTimer);
      if (!pending) { pending = true; requestAnimationFrame(update); }
      scrollTimer = setTimeout(schedule, 200);
    }, {passive:true});
    track.addEventListener('pointerdown', function () { interacting = true; schedule(); }, {passive:true});
    addEventListener('pointerup', function () { interacting = false; schedule(); }, {passive:true});
    addEventListener('pointercancel', function () { interacting = false; schedule(); }, {passive:true});
    function focusIn(event) {
      focused = event.target.matches(':focus-visible');
      schedule();
    }
    function focusOut() {
      requestAnimationFrame(function () {
        focused = (track.contains(document.activeElement) || controls.contains(document.activeElement)) && document.activeElement.matches(':focus-visible');
        schedule();
      });
    }
    track.addEventListener('focusin', focusIn); controls.addEventListener('focusin', focusIn);
    track.addEventListener('focusout', focusOut); controls.addEventListener('focusout', focusOut);
    track.addEventListener('keydown', function (e) {
      if (!mobile.matches || e.target !== track || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        go(e.key === 'Home' ? 0 : e.key === 'End' ? slides.length - 1 : index + (e.key === 'ArrowRight' ? 1 : -1));
      }
    });
    function resize() {
      track.tabIndex = mobile.matches ? 0 : -1;
      if (mobile.matches) track.setAttribute('aria-roledescription', 'carousel');
      else { track.removeAttribute('aria-roledescription'); track.scrollLeft = 0; }
      update(); schedule();
    }
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .4;
      schedule();
    }, {threshold:[0,.4]}).observe(track);
    document.addEventListener('visibilitychange', schedule);
    mobile.addEventListener('change', resize);
    reduced.addEventListener('change', schedule);
    addEventListener('resize', resize, {passive:true});
    resize();
  });
})();
