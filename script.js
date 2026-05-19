/* ============================================
   SnapCV — Landing Page Interactions
   ============================================ */

(function () {
  'use strict';

  /* ---------- Lucide icons ---------- */
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  /* ---------- Sticky navbar shadow on scroll ---------- */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Mobile menu toggle */
    const toggle = navbar.querySelector('.nav-toggle');
    const links = navbar.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });

      /* Close menu when a link is clicked (mobile) */
      links.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
          links.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* ---------- Scroll reveal via IntersectionObserver ---------- */
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ---------- Testimonial carousel ---------- */
  function initTestimonialCarousel() {
    const carousel = document.getElementById('testimonialCarousel');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.testimonial'));
    const dots = Array.from(carousel.querySelectorAll('.dot'));
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    if (!slides.length) return;

    let current = 0;
    let autoTimer = null;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === current));
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(next, 4000);
    }
    function stopAuto() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    prevBtn && prevBtn.addEventListener('click', () => { prev(); startAuto(); });
    nextBtn && nextBtn.addEventListener('click', () => { next(); startAuto(); });
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const i = Number(dot.dataset.index || 0);
        goTo(i);
        startAuto();
      });
    });

    /* Pause on hover */
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    /* Pause when tab is hidden */
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAuto();
      else startAuto();
    });

    /* Touch swipe support */
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAuto();
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
      startAuto();
    }, { passive: true });

    startAuto();
  }

  /* ---------- FAQ accordion — close others when one opens ---------- */
  function initFaq() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  }

  /* ---------- Smooth scroll offset for fixed navbar ---------- */
  function initAnchorOffset() {
    const navbar = document.getElementById('navbar');
    const offset = () => (navbar ? navbar.offsetHeight + 8 : 80);

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - offset();
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ---------- Print mode: open FAQs, reveal sections, size PDF to 1440 × docHeight ---------- */
  function initPrintHandlers() {
    const openAllForPrint = () => {
      document.querySelectorAll('.faq-item').forEach((item) => { item.open = true; });
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    };

    /* Inject @page rule sized to actual document height so the PDF becomes one
       single tall page that mirrors scrolling the 1440px-wide web view. */
    const setPageSize = () => {
      const h = Math.ceil(document.documentElement.scrollHeight);
      let pageStyle = document.getElementById('dynamic-page-size');
      if (!pageStyle) {
        pageStyle = document.createElement('style');
        pageStyle.id = 'dynamic-page-size';
        document.head.appendChild(pageStyle);
      }
      pageStyle.textContent = '@media print { @page { size: 1920px ' + h + 'px; margin: 0; } }';
    };

    window.addEventListener('beforeprint', () => {
      openAllForPrint();
      setPageSize();
    });

    /* Headless PDF generation triggers via ?print=1 */
    if (new URLSearchParams(window.location.search).has('print')) {
      openAllForPrint();
      /* Wait for layout + fonts + icons to settle, then size the page */
      const measure = () => {
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => requestAnimationFrame(setPageSize));
        } else {
          requestAnimationFrame(setPageSize);
        }
      };
      if (document.readyState === 'complete') measure();
      else window.addEventListener('load', measure);
    }
  }

  /* ---------- Boot ---------- */
  function boot() {
    initIcons();
    initNavbar();
    initScrollReveal();
    initTestimonialCarousel();
    initFaq();
    initAnchorOffset();
    initPrintHandlers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
