/**
 * main.js
 * - Nav scroll state (adds .scrolled class)
 * - Mobile nav toggle
 * - Scroll spy (highlights active nav link)
 * - Smooth scroll for anchor links
 */

(function () {
  'use strict';

  /* ── Nav scroll state ── */
  const nav = document.getElementById('site-nav');

  function updateNavState() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();

  /* ── Mobile nav toggle ── */
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');

  function openNav() {
    toggle.classList.add('open');
    navLinks.classList.add('open');
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    toggle.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    if (toggle.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  overlay.addEventListener('click', closeNav);

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && toggle.classList.contains('open')) {
      closeNav();
      toggle.focus();
    }
  });

  /* ── Scroll spy ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateScrollSpy() {
    let current = '';
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      if (section.offsetTop <= scrollY) {
        current = section.getAttribute('id');
      }
    });

    navAnchorLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Current year in footer ── */
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── Web3Forms Contact Form Submission ── */
  const contactForm = document.getElementById('contact-form');
  const formResult = document.getElementById('form-result');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnText = document.getElementById('btn-text');

  if (contactForm && formResult && submitBtn) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const originalText = btnText ? btnText.textContent : 'Send Message';
      if (btnText) btnText.textContent = 'Sending...';
      submitBtn.disabled = true;
      formResult.className = 'form-result';
      formResult.style.display = 'none';

      const formData = new FormData(contactForm);
      const jsonObject = {};
      formData.forEach((value, key) => {
        jsonObject[key] = value;
      });

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(jsonObject)
      })
        .then(async (response) => {
          const json = await response.json();
          if (response.status === 200 && json.success) {
            formResult.textContent = json.message || 'Thank you! Your message has been sent successfully.';
            formResult.className = 'form-result success';
            contactForm.reset();
          } else {
            formResult.textContent = json.message || 'Something went wrong. Please try again or email directly.';
            formResult.className = 'form-result error';
          }
        })
        .catch(() => {
          formResult.textContent = 'Network error. Please try emailing directly to pranjalg544@gmail.com.';
          formResult.className = 'form-result error';
        })
        .finally(() => {
          submitBtn.disabled = false;
          if (btnText) btnText.textContent = originalText;
          formResult.style.display = 'block';
          setTimeout(() => {
            if (formResult.classList.contains('success')) {
              formResult.style.display = 'none';
            }
          }, 6000);
        });
    });
  }

})();

