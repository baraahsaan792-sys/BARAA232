/* ===============================
   DOG HOTEL - MAIN JAVASCRIPT
   Animations, Interactions & Effects
================================= */

'use strict';

// ===========================
// LOADING SCREEN
// ===========================
document.addEventListener('DOMContentLoaded', function () {
  const loading = document.getElementById('loadingScreen');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
    }, 1800);
  }

  initAll();
});

function initAll() {
  initNavbar();
  initScrollAnimations();
  initParticles();
  initCounters();
  initFAQ();
  initFormValidation();
  initScrollToTop();
  initToast();
  initMobileMenu();
  initActivePage();
  initPackageHover();
}

// ===========================
// NAVBAR
// ===========================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ===========================
// MOBILE MENU
// ===========================
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('mobile-open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

// ===========================
// ACTIVE PAGE NAV
// ===========================
function initActivePage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ===========================
// PARTICLES
// ===========================
function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;

  const colors = ['rgba(59,111,255,0.6)', 'rgba(0,212,255,0.5)', 'rgba(255,201,71,0.4)', 'rgba(77,135,255,0.5)'];
  const sizes = [3, 4, 5, 6, 8];
  const count = 25;

  for (let i = 0; i < count; i++) {
    createParticle(container, colors, sizes, i);
  }
}

function createParticle(container, colors, sizes, index) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = sizes[Math.floor(Math.random() * sizes.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const duration = 8 + Math.random() * 15;
  const delay = Math.random() * 10;
  const left = Math.random() * 100;

  particle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    left: ${left}%;
    animation-duration: ${duration}s;
    animation-delay: -${delay}s;
    box-shadow: 0 0 ${size * 3}px ${color};
  `;

  container.appendChild(particle);
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ===========================
// COUNTERS
// ===========================
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const suffix = el.dataset.suffix || '';
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString('ar') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString('ar') + suffix;
    }
  }

  requestAnimationFrame(update);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// ===========================
// FAQ ACCORDION
// ===========================
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      // Open clicked if was closed
      if (!isOpen) {
        item.classList.add('open');
        // Smooth scroll into view if needed
        setTimeout(() => {
          const rect = item.getBoundingClientRect();
          if (rect.bottom > window.innerHeight) {
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 300);
      }
    });
  });
}

// ===========================
// FORM VALIDATION
// ===========================
function initFormValidation() {
  document.querySelectorAll('.contact-form, .booking-form').forEach(form => {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleFormSubmit(form, submitBtn);
    });

    // Real-time validation
    form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(input);
      });
    });
  });
}

function validateField(input) {
  const value = input.value.trim();
  let valid = true;
  let message = '';

  if (input.hasAttribute('required') && !value) {
    valid = false;
    message = 'هذا الحقل مطلوب';
  } else if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    valid = false;
    message = 'البريد الإلكتروني غير صحيح';
  } else if (input.type === 'tel' && value && !/^[\d\s\+\-\(\)]{7,}$/.test(value)) {
    valid = false;
    message = 'رقم الهاتف غير صحيح';
  }

  let errorEl = input.parentNode.querySelector('.field-error');
  if (!valid) {
    input.style.borderColor = '#ff5f6d';
    input.style.boxShadow = '0 0 0 3px rgba(255, 95, 109, 0.15)';
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'field-error';
      errorEl.style.cssText = 'display:block;font-size:0.8rem;color:#ff5f6d;margin-top:0.3rem';
      input.parentNode.appendChild(errorEl);
    }
    errorEl.textContent = message;
  } else {
    input.style.borderColor = '';
    input.style.boxShadow = '';
    if (errorEl) errorEl.remove();
  }

  return valid;
}

function handleFormSubmit(form, btn) {
  const inputs = form.querySelectorAll('.form-control[required]');
  let allValid = true;

  inputs.forEach(input => {
    if (!validateField(input)) allValid = false;
  });

  if (!allValid) {
    showToast('⚠️ يرجى تعبئة جميع الحقول المطلوبة', 'error');
    return;
  }

  // Simulate loading
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite">⟳</span> جاري الإرسال...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '✓ تم الإرسال بنجاح!';
    btn.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)';
    form.reset();
    showToast('✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً', 'success');

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      btn.style.background = '';
    }, 3000);
  }, 2000);
}

// ===========================
// SCROLL TO TOP
// ===========================
function initScrollToTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===========================
// TOAST NOTIFICATIONS
// ===========================
function initToast() {
  if (!document.getElementById('toast')) {
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = 'toast show';

  if (type === 'error') toast.style.borderColor = 'rgba(255, 95, 109, 0.5)';
  else if (type === 'success') toast.style.borderColor = 'rgba(0, 212, 255, 0.5)';
  else toast.style.borderColor = '';

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ===========================
// PACKAGE HOVER EFFECTS
// ===========================
function initPackageHover() {
  document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      document.querySelectorAll('.package-card').forEach(c => {
        if (c !== card) c.style.opacity = '0.75';
      });
    });

    card.addEventListener('mouseleave', () => {
      document.querySelectorAll('.package-card').forEach(c => {
        c.style.opacity = '';
      });
    });
  });
}

// ===========================
// CURSOR GLOW EFFECT
// ===========================
(function initCursorGlow() {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,111,255,0.06) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: opacity 0.3s;
    will-change: transform;
  `;
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  requestAnimationFrame(animateGlow);
})();

// ===========================
// RIPPLE EFFECT ON BUTTONS
// ===========================
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const ripple = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255,255,255,0.25);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleAnim 0.6s ease-out forwards;
    pointer-events: none;
  `;

  if (!document.querySelector('#rippleStyle')) {
    const style = document.createElement('style');
    style.id = 'rippleStyle';
    style.textContent = `
      @keyframes rippleAnim {
        to { transform: scale(3); opacity: 0; }
      }
      @keyframes spin { to { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);
  }

  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ===========================
// SMOOTH PAGE TRANSITIONS
// ===========================
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') ||
    href.startsWith('http') || link.target === '_blank') return;

  e.preventDefault();

  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    window.location.href = href;
  }, 300);
});

window.addEventListener('pageshow', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.3s ease';
});

// ===========================
// IMAGE LAZY LOADING SIMULATION
// ===========================
document.querySelectorAll('.gallery-placeholder').forEach((placeholder, i) => {
  const emojis = ['🐕', '🐩', '🦮', '🐾', '🏡', '🛁', '🌿', '⭐'];
  setTimeout(() => {
    placeholder.style.opacity = '0';
    placeholder.style.transition = 'all 0.5s ease';
    setTimeout(() => {
      placeholder.style.opacity = '1';
      placeholder.style.transform = 'scale(1)';
    }, 100);
  }, i * 150);
});

// ===========================
// DYNAMIC YEAR
// ===========================
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ===========================
// BOOKING DATE VALIDATION
// ===========================
document.querySelectorAll('input[type="date"]').forEach(input => {
  const today = new Date().toISOString().split('T')[0];
  input.setAttribute('min', today);
});

// ===========================
// UTILITY: Debounce
// ===========================
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Export for use in pages
window.DogHotel = {
  showToast,
  animateCounter
};
