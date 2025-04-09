// Toggle mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Form submission handler
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = 'red';
        return;
    }

    // Simulate message sent (no backend)
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = 'lightgreen';

    // Clear form fields
    form.reset();
});
// Scroll to top button
const scrollBtn = document.getElementById("scrollToTopBtn");

// Show/hide button on scroll
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to top on click
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});