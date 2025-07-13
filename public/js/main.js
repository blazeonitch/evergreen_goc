const messageBox = document.getElementById("message");
const nav = document.getElementById("navLinks");
const hamburger = document.querySelector(".hamburger");
const carousel = document.querySelector('.carousel'); // Make sure this matches your HTML

// Auto-grow textarea height on input
if (messageBox) {
  messageBox.addEventListener("input", () => {
    messageBox.style.height = "auto";
    messageBox.style.height = `${messageBox.scrollHeight}px`;
  });
}

function toggleMenu() {
  nav.classList.toggle("show");
}

// Close nav if clicked outside
document.addEventListener("click", (event) => {
  if (
    nav.classList.contains("show") &&
    !nav.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    nav.classList.remove("show");
  }
});

// Horizontal scroll on mouse wheel for desktop only
if (carousel) {
  carousel.addEventListener('wheel', (e) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      carousel.scrollBy({
        left: e.deltaY,
        behavior: 'smooth'
      });
    }
  }, { passive: false });
}
