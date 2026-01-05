/* ======================
   GLOBAL: MENU + THEME
   ====================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================
     MENU HAMBURGUESA
  ========================== */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', (!expanded).toString());
      navLinks.classList.toggle('show');
      menuToggle.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================
     THEME SWITCH (persistente)
  ========================== */
  const themeBtn = document.getElementById('themeToggle');
  const body = document.body;

  if (themeBtn) {
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('light-mode');
      themeBtn.textContent = '🌙';
    } else {
      themeBtn.textContent = '☀️';
    }

    themeBtn.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-mode');
      themeBtn.textContent = isLight ? '🌙' : '☀️';
      localStorage.setItem('theme', isLight ? 'dark' : 'light');
    });
  }

  /* ==========================
     HERO SLIDER (solo index.html)
  ========================== */
  const slider = document.querySelector(".hero-slider");

  if (slider) {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const dotsContainer = document.querySelector(".slider-dots");

    let index = 0;

    // Crear dots
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active-dot");
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    function showSlide(i) {
      slides.forEach(sl => sl.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active-dot"));

      slides[i].classList.add("active");
      dots[i].classList.add("active-dot");
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });

    // Autoplay
    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 5000);

    // Swipe (mobile)
    let startTouch = 0;

    slider.addEventListener("touchstart", (e) => {
      startTouch = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
      let endTouch = e.changedTouches[0].clientX;

      if (startTouch - endTouch > 50) {
        index = (index + 1) % slides.length;
        showSlide(index);
      }
      if (endTouch - startTouch > 50) {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      }
    });
  }

  /* ==========================
     INTERSECTION OBSERVER (reveal)
  ========================== */
  (function initReveal(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  })();

  /* ==========================
     CURSOS: FILTRO Y MODAL
  ========================== */
  (function initCourses(){
    const searchInput = document.getElementById('courseSearch');
    const filterSelect = document.getElementById('filterCert');
    const coursesGrid = document.getElementById('coursesGrid');
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = modal ? modal.querySelector('.modal-close') : null;

    if (!coursesGrid) return;

    function filterCourses(){
      const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
      const cat = filterSelect ? filterSelect.value : '';
      const cards = coursesGrid.querySelectorAll('.curso-card');
      cards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const category = card.dataset.category;
        const matchesQuery = title.includes(q) || card.textContent.toLowerCase().includes(q);
        const matchesCat = !cat || category === cat;
        card.style.display = (matchesQuery && matchesCat) ? '' : 'none';
      });
    }

    if (searchInput) searchInput.addEventListener('input', filterCourses);
    if (filterSelect) filterSelect.addEventListener('change', filterCourses);

    coursesGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-more]');
      if (!btn) return;
      e.preventDefault();

      const key = btn.dataset.more;
      const card = coursesGrid.querySelector(`.curso-card[data-category="${key}"]`);
      if (!card) return;

      const title = card.dataset.title;
      const html = `
        <h2>${title}</h2>
        <p>${card.querySelector('p').textContent}</p>
        <ul>${Array.from(card.querySelectorAll('.cert-list li')).map(li => `<li>${li.textContent}</li>`).join('')}</ul>
      `;

      modalBody.innerHTML = html;
      modal.setAttribute('aria-hidden', 'false');
    });

    if (modalClose) modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
    if (modal) modal.addEventListener('click', (e) => { 
      if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
    });

  })();

}); // END DOMContentLoaded



/* ================================
   NAVEGACIÓN RÁPIDA ENTRE SEDES
================================ */
const sedeButtons = document.querySelectorAll(".sedes-nav-buttons button");

if (sedeButtons.length > 0) {
  sedeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-sede");
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ================================
   MOSTRAR CAMPO PQRS (solo contacto)
================================ */
const tipoConsulta = document.getElementById("tipo");
const pqrField = document.getElementById("pqr");

if (tipoConsulta && pqrField) {
  tipoConsulta.addEventListener("change", () => {
    if (tipoConsulta.value === "PQRS") {
      pqrField.classList.remove("hidden");
    } else {
      pqrField.classList.add("hidden");
    }
  });
}

