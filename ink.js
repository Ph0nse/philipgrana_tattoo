// Gallery tab filtering
const tabs = document.querySelectorAll(".tab");
const allItems = document.querySelectorAll(".gallery-item");

function applyFilter(filter) {
 let pos = 0;
 allItems.forEach((item) => {
  item.className = item.className.replace(/\bpos-\d+\b/g, "").trim();

  let show = false;
  if (filter === "preview") {
   show = item.hasAttribute("data-preview");
  } else {
   show = item.dataset.category === filter;
  }

  if (show) {
   item.style.display = "";
   pos++;
   item.classList.add("pos-" + ((pos - 1) % 6 + 1));
  } else {
   item.style.display = "none";
  }
 });
}

applyFilter("preview");

tabs.forEach((tab) => {
 tab.addEventListener("click", () => {
  tabs.forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  applyFilter(tab.dataset.filter);
 });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery-item").forEach((item) => {
 item.addEventListener("click", () => {
  const img = item.querySelector(".gallery-img");
  if (img) {
   lightboxImg.src = img.src;
   lightboxImg.alt = img.alt;
   lightbox.classList.add("active");
  }
 });
});

lightbox.addEventListener("click", () => {
 lightbox.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
 if (e.key === "Escape") lightbox.classList.remove("active");
});

// Tattoo style samples modal
const styleModal = document.getElementById("style-modal");
const styleModalEyebrow = document.getElementById("style-modal-eyebrow");
const styleModalTitle = document.getElementById("style-modal-title");
const styleModalGrid = document.getElementById("style-modal-grid");
const styleModalClose = document.getElementById("style-modal-close");
const SAMPLE_COUNT = 6;

function openStyleModal(card) {
 const style = card.querySelector(".tattoo-style");
 const title = card.querySelector(".tattoo-title");
 styleModalEyebrow.textContent = style ? style.textContent : "";
 styleModalTitle.textContent = title ? title.textContent : "";

 styleModalGrid.innerHTML = "";
 for (let i = 0; i < SAMPLE_COUNT; i++) {
  const img = document.createElement("img");
  img.src = "img/placeholder_tattoo.jpg";
  img.alt = (title ? title.textContent : "Tattoo style") + " sample " + (i + 1);
  styleModalGrid.appendChild(img);
 }

 styleModal.classList.add("active");
}

function closeStyleModal() {
 styleModal.classList.remove("active");
}

document.querySelectorAll(".tattoo-card").forEach((card) => {
 card.addEventListener("click", () => openStyleModal(card));
});

styleModalClose.addEventListener("click", (e) => {
 e.stopPropagation();
 closeStyleModal();
});

styleModal.addEventListener("click", (e) => {
 if (e.target === styleModal) closeStyleModal();
});

document.addEventListener("keydown", (e) => {
 if (e.key === "Escape") closeStyleModal();
});

// Translation
const translations = {
 es: {
  "nav-about": "Acerca",
  "nav-work": "Trabajos",
  "nav-tattoo": "Tatuaje",
  "nav-location": "Ubicación",
  "nav-book": "Reservar",
  "nav-follow": "Sígueme en:",
  "nav-lang-label": "Selector de idioma:",
  "hero-eyebrow": "Tatuador y creador visual",
  "hero-sub": "Tinta, fotografía y arte visual hecho a mano — con un profundo respeto por el cuerpo humano como lienzo vivo.",
  "hero-cta-book": "Reservar una sesión",
  "hero-cta-work": "Ver trabajos",
  "about-eyebrow": "El artista",
  "about-title": "Haciendo tu visión realidad",
  "about-body1": "Información sobre el artista va aquí. Una breve biografía que abarca su trayectoria, estilo y enfoque del tatuaje. Algo que transmita quién es y qué valora en su trabajo.",
  "about-body2": "Trayectoria del artista, cómo se inició en el tatuaje, sus influencias artísticas y lo que busca crear con su trabajo. Esta es una oportunidad de conectar con clientes potenciales a nivel personal y compartir la filosofía detrás del arte.",
  "stat-years": "Años tatuando",
  "stat-pieces": "Piezas creadas",
  "stat-exp": "Años de experiencia",
  "gallery-eyebrow": "Arte y fotografía",
  "gallery-title": "Trabajos seleccionados",
  "tab-preview": "Vista previa",
  "tab-photo": "Fotografía",
  "tab-illust": "Ilustración",
  "tab-tattoo": "Tatuaje",
  "tattoo-eyebrow": "Trabajo de tatuaje",
  "tattoo-title": "El oficio de las marcas permanentes",
  "tattoo-body": "Cada tatuaje comienza con una conversación. El proceso es colaborativo — quiere entender dónde irá, qué significa y cómo se moverá con el cuerpo durante décadas.",
  "tattoo-style1": "Realismo en blanco y negro",
  "tattoo-title1": "Retratos y rostros",
  "tattoo-desc1": "Realizados con trabajo de aguja fina y transiciones de degradado sutiles que envejecen bellamente con el tiempo.",
  "tattoo-style2": "Línea fina",
  "tattoo-title2": "Botánico y geométrico",
  "tattoo-desc2": "Delicado trabajo de línea con aguja única — limpio, minimalista y preciso. Botánicos, constelaciones, formas arquitectónicas.",
  "tattoo-style3": "Ilustrativo",
  "tattoo-title3": "Ilustrativo personalizado",
  "tattoo-desc3": "Donde la formación en ilustración se cruza con el tatuaje — piezas audaces, originales y narrativas.",
  "tattoo-more-cta": "Haz clic para ver más muestras →",
  "process-eyebrow": "Cómo funciona",
  "process-title": "De la idea a la tinta",
  "process-body": "Cada pieza sigue el mismo camino cuidadoso — desde la primera conversación hasta la piel sanada — para que siempre sepas qué esperar.",
  "process-step1-title": "Consulta",
  "process-step1-desc": "Comparte tu idea, ubicación y tamaño en persona o por Instagram — hablamos sobre el estilo, la viabilidad y qué durará bien con el tiempo.",
  "process-step2-title": "Diseño personalizado",
  "process-step2-desc": "Se crea un diseño único a partir de tu consulta y se ajusta contigo hasta que quede exactamente como lo imaginas, antes de reservar la sesión.",
  "process-step3-title": "La sesión",
  "process-step3-desc": "Tatuado en un espacio de estudio limpio y privado, con descansos incluidos para piezas más largas o grandes para que estés cómodo en todo momento.",
  "process-step4-title": "Cuidado posterior y retoques",
  "process-step4-desc": "Se entrega una guía clara de cuidado posterior el mismo día, además de un retoque de cortesía una vez que la pieza haya sanado completamente.",
  "testimonials-eyebrow": "Historias de clientes",
  "testimonials-title": "Lo que dicen los clientes",
  "testimonial1-quote": "Andres se tomó el tiempo de entender exactamente lo que quería y convirtió una idea vaga en una pieza que amaré para siempre. Todo el proceso se sintió tranquilo y profesional.",
  "testimonial1-author": "Jordan M. — Pieza de línea fina",
  "testimonial2-quote": "La mejor experiencia de tatuaje que he tenido. Estudio limpio, buena conversación y un trazo increíblemente preciso.",
  "testimonial2-author": "Maya T. — Pieza botánica",
  "testimonial3-quote": "Llegué con solo una sensación y algunas fotos de referencia — Andres la transformó en algo mejor de lo que imaginaba.",
  "testimonial3-author": "Sam R. — Pieza ilustrativa",
  "faq-eyebrow": "Bueno saberlo",
  "faq-title": "Preguntas frecuentes",
  "faq-q1": "¿Necesito una consulta antes de mi sesión?",
  "faq-a1": "Sí — cada pieza comienza con una breve consulta, en persona o por Instagram, para hablar sobre ubicación, tamaño y dirección de diseño antes de reservar una sesión.",
  "faq-q2": "¿Requieren depósito?",
  "faq-a2": "Se requiere un depósito no reembolsable para asegurar tu cita, que se descuenta del precio final. El depósito se pierde por inasistencia o cancelaciones con menos de 48 horas de aviso.",
  "faq-q3": "¿Aceptan clientes sin cita?",
  "faq-a3": "Hay cupos limitados sin cita para diseños más pequeños y simples — consulta el horario del estudio abajo, o escribe con anticipación para verificar disponibilidad.",
  "faq-q4": "¿Cuál es la edad mínima para tatuarse?",
  "faq-a4": "Debes tener 18 años o más, con identificación con foto válida, para poder tatuarte — sin excepciones.",
  "faq-q5": "¿Cuánto costará mi tatuaje?",
  "faq-a5": "El precio depende del tamaño, la ubicación y el nivel de detalle. Recibirás una estimación en tu consulta, antes de pagar cualquier depósito.",
  "faq-q6": "¿Ofrecen retoques?",
  "faq-a6": "Sí — se incluye un retoque de cortesía dentro de las 6 semanas posteriores a tu sesión, una vez que el tatuaje haya sanado por completo.",
  "aftercare-eyebrow": "Sanación y cuidado",
  "aftercare-title": "Instrucciones de cuidado posterior",
  "aftercare-body": "El cuidado adecuado influye en cómo sana y envejece tu tatuaje. Sigue estos pasos de cerca durante las primeras semanas.",
  "aftercare-step1": "Deja el vendaje inicial puesto de 2 a 4 horas (o según las indicaciones) y luego retíralo con cuidado.",
  "aftercare-step2": "Lava con agua tibia y un jabón antibacterial sin fragancia, secando con una toalla de papel limpia — nunca frotes.",
  "aftercare-step3": "Aplica una capa fina de humectante sin fragancia apto para tatuajes, de 2 a 3 veces al día. Un poco es suficiente.",
  "aftercare-step4": "Evita mojar el tatuaje — nada de nadar, baños o saunas — durante al menos dos semanas.",
  "aftercare-step5": "Manténlo alejado de la luz solar directa mientras sana, y usa protector solar una vez sanado para proteger el trazo y el color a largo plazo.",
  "aftercare-step6": "Usa ropa holgada y transpirable sobre la zona y evita que telas ajustadas la rocen.",
  "aftercare-step7": "No arranques ni rasques la piel que se pela o forma costra — deja que se caiga naturalmente.",
  "aftercare-step8": "Contacta al estudio si notas enrojecimiento excesivo, hinchazón o secreción — señales de posible infección.",
  "aftercare-note": "¿Preguntas durante la sanación? Escribe al estudio en cualquier momento por Instagram.",
  "loc-eyebrow": "Encuéntrame",
  "loc-title": "Con base en Melbourne",
  "loc-studio": "Estudio",
  "loc-walkin": "Horario sin cita",
  "loc-walkin-val": "Horario de atención sin cita",
  "loc-appt": "Con cita previa",
  "loc-appt-val": "Días disponibles para contacto o reserva de citas<br />Contactar para coordinar una consulta",
  "loc-contact": "Contacto",
  "loc-cta": "Reservar una consulta",
  "book-eyebrow": "¿Listo para empezar?",
  "book-title": "Todo gran tatuaje comienza con una conversación",
  "book-body": "Envía tu idea — una referencia, un sentimiento, un boceto, incluso solo unas palabras. Te responderemos en 48 horas para hablar sobre la pieza y coordinar una consulta.",
  "book-cta": "Contactar",
  "lightbox-close": "Cerrar",
 }
};

let currentLang = "en";
const savedEN = {};

document.querySelectorAll("[data-i18n]").forEach((el) => {
 savedEN[el.dataset.i18n] = el.innerHTML;
});

const langSelect = document.querySelector(".lang-select");
const langToggle = document.getElementById("lang-toggle");
const langCurrent = langToggle.querySelector(".lang-current");
const langMenu = document.getElementById("lang-menu");
const langOptions = langMenu.querySelectorAll("li[data-lang]");

function setLanguage(lang) {
 currentLang = lang;
 document.documentElement.lang = lang;
 langCurrent.textContent = lang.toUpperCase();
 langToggle.setAttribute("aria-label", "Translate — " + lang.toUpperCase());
 langOptions.forEach((opt) => {
  opt.setAttribute("aria-selected", opt.dataset.lang === lang ? "true" : "false");
 });

 document.querySelectorAll("[data-i18n]").forEach((el) => {
  const key = el.dataset.i18n;
  if (lang === "es" && translations.es[key]) {
   el.innerHTML = translations.es[key];
  } else if (savedEN[key]) {
   el.innerHTML = savedEN[key];
  }
 });
}

function closeLangMenu() {
 if (langMenu.contains(document.activeElement)) langToggle.focus();
 langSelect.classList.remove("open");
 langToggle.setAttribute("aria-expanded", "false");
}

langToggle.addEventListener("click", (e) => {
 e.stopPropagation();
 const isOpen = langSelect.classList.toggle("open");
 langToggle.setAttribute("aria-expanded", String(isOpen));
});

langOptions.forEach((opt) => {
 opt.addEventListener("click", () => {
  setLanguage(opt.dataset.lang);
  closeLangMenu();
 });
 opt.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
   e.preventDefault();
   setLanguage(opt.dataset.lang);
   closeLangMenu();
  }
 });
});

document.addEventListener("click", (e) => {
 if (!langSelect.contains(e.target)) closeLangMenu();
});

document.addEventListener("keydown", (e) => {
 if (e.key === "Escape") closeLangMenu();
});

// Scroll + mouse: parallax rings/glow + nav scrolled state
const nav = document.querySelector("nav");
const heroEl = document.getElementById("hero");
const heroRings = document.querySelectorAll(".hero-ring");
const heroGlowWrap = document.querySelector(".hero-glow-wrap");
let mouseX = 0;
let mouseY = 0;

function updateHeroRings() {
 const scrollY = window.scrollY;
 heroRings.forEach((ring, i) => {
  const depth = 0.4 + i * 0.2;
  ring.style.transform = `translate(calc(-50% + ${mouseX * depth}px), calc(-50% + ${scrollY * (0.05 + i * 0.03) + mouseY * depth}px))`;
 });
}

window.addEventListener(
 "scroll",
 () => {
  updateHeroRings();
  nav.classList.toggle("scrolled", window.scrollY > 60);
 },
 { passive: true },
);

if (heroEl) {
 let ticking = false;
 function setPointer(clientX, clientY) {
  const rect = heroEl.getBoundingClientRect();
  mouseX = ((clientX - rect.left) / rect.width - 0.5) * 60;
  mouseY = ((clientY - rect.top) / rect.height - 0.5) * 60;
  if (!ticking) {
   requestAnimationFrame(() => {
    if (heroGlowWrap) {
     heroGlowWrap.style.transform = `translate(${mouseX * 2}px, ${mouseY * 2}px)`;
    }
    updateHeroRings();
    ticking = false;
   });
   ticking = true;
  }
 }
 function resetPointer() {
  mouseX = 0;
  mouseY = 0;
  if (heroGlowWrap) heroGlowWrap.style.transform = "translate(0, 0)";
  updateHeroRings();
 }

 // Mouse: fine pointers with hover (desktop/trackpad)
 heroEl.addEventListener(
  "mousemove",
  (e) => setPointer(e.clientX, e.clientY),
  { passive: true },
 );
 heroEl.addEventListener("mouseleave", resetPointer);

 // Touch: coarse pointers (phones/tablets) follow the finger while dragging
 heroEl.addEventListener(
  "touchmove",
  (e) => {
   const touch = e.touches[0];
   if (touch) setPointer(touch.clientX, touch.clientY);
  },
  { passive: true },
 );
 heroEl.addEventListener("touchend", resetPointer);
 heroEl.addEventListener("touchcancel", resetPointer);
}

// Scroll reveal
const revealObserver = new IntersectionObserver(
 (entries) => {
  entries.forEach((e) => {
   if (e.isIntersecting) {
    const delay = parseInt(e.target.dataset.delay) || 0;
    setTimeout(() => e.target.classList.add("visible"), delay);
    revealObserver.unobserve(e.target);
   }
  });
 },
 { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Active nav link on scroll
const sectionIds = ["hero", "about", "gallery", "tattoo", "location", "booking"];
const navAnchors = document.querySelectorAll('nav ul a[href^="#"]');
const sectionEls = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
const sectionObserver = new IntersectionObserver(
 (entries) => {
  entries.forEach((e) => {
   if (e.isIntersecting) {
    navAnchors.forEach((a) => {
     a.classList.toggle("nav-active", a.getAttribute("href") === "#" + e.target.id);
    });
   }
  });
 },
 { rootMargin: "-40% 0px -55% 0px" },
);
sectionEls.forEach((el) => sectionObserver.observe(el));

// Hamburger menu
const hamburger = document.getElementById("nav-hamburger");
const navUl = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
 hamburger.classList.toggle("open");
 navUl.classList.toggle("open");
});
navUl.querySelectorAll("a").forEach((a) => {
 a.addEventListener("click", () => {
  hamburger.classList.remove("open");
  navUl.classList.remove("open");
 });
});

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
 const question = item.querySelector(".faq-question");
 const answer = item.querySelector(".faq-answer");
 question.addEventListener("click", () => {
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach((openItem) => {
   if (openItem !== item) {
    openItem.classList.remove("open");
    openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    openItem.querySelector(".faq-answer").style.maxHeight = "";
   }
  });
  item.classList.toggle("open", !isOpen);
  question.setAttribute("aria-expanded", String(!isOpen));
  answer.style.maxHeight = isOpen ? "" : answer.scrollHeight + "px";
 });
});
