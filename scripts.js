
// ----- NAV TOGGLE FOR MOBILE -----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ----- ACTIVE LINK ON SCROLL -----
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let scrollPos = window.scrollY + 100;
  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (scrollPos >= top && scrollPos < bottom) {
      navAnchors.forEach((a) => a.classList.remove("active"));
      const active = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (active) active.classList.add("active");
    }
  });
}
window.addEventListener("scroll", setActiveLink);

// ----- TYPING EFFECT -----
const typedText = document.getElementById("typedText");
const roles = ["Full Stack Developer", "Java Enthusiast", "UI/UX Learner"];
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

function typeLoop() {
  const current = roles[roleIndex];
  if (typingForward) {
    charIndex++;
    if (charIndex === current.length) {
      typingForward = false;
      setTimeout(typeLoop, 1000);
      typedText.textContent = current;
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      typingForward = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  typedText.textContent = current.substring(0, charIndex);
  setTimeout(typeLoop, typingForward ? 90 : 40);
}
typeLoop();

// ----- REVEAL ON SCROLL -----
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
revealEls.forEach((el) => observer.observe(el));

// ----- CONTACT FORM (DEMO) -----
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = "Please fill all the fields.";
    statusEl.className = "form-status err";
    return;
  }

  statusEl.textContent = "Thanks, " + name + "! This is a demo form. Please contact via email or LinkedIn.";
  statusEl.className = "form-status ok";

  form.reset();
});

// ----- YEAR IN FOOTER -----
document.getElementById("year").textContent = new Date().getFullYear();
