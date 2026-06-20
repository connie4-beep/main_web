/* ============================================
   Connie Zhang Portfolio — Scripts
   ============================================ */

// --- Dynamic year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// --- Active nav link highlighting ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function highlightNav() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

// --- Scroll reveal (IntersectionObserver) ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add stagger delay if inside a stagger container
      const parent = entry.target.parentElement;
      if (parent && parent.classList.contains('reveal-stagger')) {
        const siblings = Array.from(parent.querySelectorAll('.reveal'));
        const i = siblings.indexOf(entry.target);
        entry.target.style.setProperty('--reveal-index', i);
        entry.target.style.transitionDelay = `${i * 0.08}s`;
      }

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// --- Accordion toggle for project details ---
function toggleDetails(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const btn = el.previousElementSibling?.querySelector('.btn-outline') ||
    document.querySelector(`[onclick="toggleDetails('${id}')"]`);

  if (el.classList.contains('open')) {
    el.classList.remove('open');
    if (btn) btn.textContent = 'Show Details ▾';
  } else {
    el.classList.add('open');
    if (btn) btn.textContent = 'Hide Details ▴';
  }
}