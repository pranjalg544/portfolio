/**
 * scrollReveal.js
 * IntersectionObserver-based scroll reveal.
 * Elements with .reveal, .reveal-stagger, or .reveal-left
 * get .visible added once when they enter the viewport.
 */

(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) {
    // Fallback: just make everything visible immediately
    document.querySelectorAll('.reveal, .reveal-stagger, .reveal-left').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const options = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, options);

  function init() {
    document.querySelectorAll('.reveal, .reveal-stagger, .reveal-left').forEach(el => {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
