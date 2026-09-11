(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll([
    '.hero-copy', '.hero-art', '.hero-bottom',
    '.section-label', '.section-intro', '.service',
    '.essence-intro', '.name-composition', '.origins article', '.essence-statement',
    '.principles-heading', '.principles-list article', '.footer-main', '.footer-bottom',
    '.project-hero-inner > *', '.project-section-heading', '.project-grid',
    '.project-specs', '.project-roadmap', '.project-footer-main', '.project-footer-bottom'
  ].join(','));

  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 65}ms`);
  });

  const showAll = () => revealTargets.forEach((element) => element.classList.add('is-visible'));

  if (reducedMotion || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealTargets.forEach((element) => observer.observe(element));
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || event.defaultPrevented || link.target === '_blank' || link.hasAttribute('download') || link.dataset.noTransition !== undefined) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const destination = new URL(link.href, window.location.href);
    const current = new URL(window.location.href);
    if (destination.origin !== current.origin || (destination.pathname === current.pathname && destination.search === current.search)) return;

    event.preventDefault();
    if (reducedMotion) {
      window.location.assign(destination.href);
      return;
    }
    document.body.classList.add('is-leaving');
    window.setTimeout(() => window.location.assign(destination.href), 220);
  });
})();
