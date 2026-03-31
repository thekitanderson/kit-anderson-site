/* ─────────────────────────────────────────────
   SHELF.JS — Kit Anderson Network Component
   Arrow navigation + scroll state management
   v1.0 · 2026
   ───────────────────────────────────────────── */

(function () {
  'use strict';

  function initShelf(section) {
    const wrap  = section.querySelector('.shelf-track-wrap');
    const track = section.querySelector('.shelf-track');
    if (!wrap || !track) return;

    // ── Inject arrow buttons ──
    const prevBtn = document.createElement('button');
    prevBtn.className = 'shelf-arrow shelf-arrow-prev';
    prevBtn.setAttribute('aria-label', 'Scroll left');
    prevBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'shelf-arrow shelf-arrow-next';
    nextBtn.setAttribute('aria-label', 'Scroll right');
    nextBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>`;

    wrap.appendChild(prevBtn);
    wrap.appendChild(nextBtn);

    // ── Scroll amount: one card width + gap ──
    function getScrollAmount() {
      const firstCard = track.querySelector('.shelf-card');
      if (!firstCard) return 300;
      return firstCard.offsetWidth + 10; // card + gap
    }

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollAmount() * 3, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getScrollAmount() * 3, behavior: 'smooth' });
    });

    // ── Update arrow + fade state on scroll ──
    function updateState() {
      const atStart = track.scrollLeft <= 4;
      const atEnd   = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;

      prevBtn.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      nextBtn.setAttribute('aria-disabled', atEnd   ? 'true' : 'false');

      wrap.classList.toggle('scrolled-left',  !atStart);
      wrap.classList.toggle('scrolled-right',  atEnd);
    }

    track.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState, { passive: true });

    // Initial state
    updateState();
  }

  // ── Init all shelves on DOMContentLoaded ──
  function initAll() {
    document.querySelectorAll('.shelf-section').forEach(initShelf);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
