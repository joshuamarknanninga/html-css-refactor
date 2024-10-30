document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const contactForm = document.getElementById('contact-form');

    // CTA Button Click Event
    ctaButton.addEventListener('click', () => {
        alert('Button Clicked!');
    });

    // Contact Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    }
});
