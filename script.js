// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Parallax Effect for Avatar
document.addEventListener('mousemove', (e) => {
    const avatar = document.querySelector('.hero-image img');
    if (avatar) {
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;
        avatar.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});

// Skills Pop Animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skills = entry.target.querySelectorAll('.skill-item');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add('pop-in');
                }, index * 200); // 200ms stagger delay for "one by one" feel
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

const skillsSection = document.querySelector('.skills-container');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

