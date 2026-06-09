// =========================
// MOBILE NAV MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// =========================
// SCROLL REVEAL ANIMATIONS
// =========================

const sections = document.querySelectorAll(".hero, main section");

sections.forEach((section) => {
  section.classList.add("reveal-section");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

sections.forEach((section) => {
  revealObserver.observe(section);
});