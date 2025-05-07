// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu when clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            links.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Animate Skills on Scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Form Submission
const form = document.getElementById('formKontak');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
    
    // Here you would typically send the data to a server
    console.log({ nama, email, pesan });
    
    // Show success message
    alert('Pesan Anda telah berhasil dikirim! Saya akan segera menghubungi Anda.');
    
    // Reset form
    form.reset();
});

// Animation on scroll
function checkScroll() {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
window.addEventListener('load', () => {
    document.querySelectorAll('.skill-card, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    animateSkills();
    checkScroll();
});

window.addEventListener('scroll', checkScroll);