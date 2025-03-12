// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll-triggered animations
const sections = document.querySelectorAll('.about, .projects');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Detect if the user is on a phone or PC
function isPhone() {
  return window.matchMedia("(max-width: 767px)").matches;
}

// Apply device-specific logic
if (isPhone()) {
  console.log("User is on a phone");
  document.body.classList.add("phone");
} else {
  console.log("User is on a PC or tablet");
  document.body.classList.add("pc");
}
