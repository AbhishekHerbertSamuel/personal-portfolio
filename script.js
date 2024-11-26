// DOM Elements
const themeToggleButton = document.getElementById('theme-toggle');
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.id = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

// Light/Dark Mode Toggle
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.innerText = document.body.classList.contains('dark-mode')
        ? 'Toggle Light Mode'
        : 'Toggle Dark Mode';
});

// Smooth Scrolling
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight Active Navigation Link
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Scroll-to-Top Button Visibility
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to Top
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const errorMessage = document.getElementById('form-error');

        if (!emailInput.value || !messageInput.value) {
            errorMessage.innerText = 'Please fill out all fields.';
            errorMessage.style.display = 'block';
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            errorMessage.innerText = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Thank you for your message!');
            contactForm.reset();
        }
    });
}
