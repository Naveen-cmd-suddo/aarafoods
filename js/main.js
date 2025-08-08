document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Run once on page load
    fadeInOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', fadeInOnScroll);

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will respond soon.');
            this.reset();
        });
    }
});