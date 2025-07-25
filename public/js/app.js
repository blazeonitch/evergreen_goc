const messageBox = document.getElementById("message");
const nav = document.getElementById("navLinks");
const hamburger = document.querySelector(".hamburger");
const carousel = document.querySelector('.carousel'); 
const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_56ad0hp';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });


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
