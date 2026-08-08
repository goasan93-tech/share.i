// ============================================
// LANGUAGE TOGGLE FUNCTIONALITY
// ============================================

let currentLanguage = 'zh'; // Default: Traditional Chinese

function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateLanguage();
    localStorage.setItem('language', currentLanguage);
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-zh][data-en]');
    
    elements.forEach(element => {
        if (currentLanguage === 'zh') {
            element.innerHTML = element.getAttribute('data-zh');
        } else {
            element.innerHTML = element.getAttribute('data-en');
        }
    });

    // Update button text
    const langToggle = document.querySelector('.lang-toggle');
    langToggle.textContent = currentLanguage === 'zh' ? 'EN / 中文' : 'EN / 中文';
}

// Load saved language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }
});

// ============================================
// SMOOTH SCROLL FUNCTIONALITY
// ============================================

function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and elements
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .resource-box');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================

window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const section = document.getElementById(targetId);
        
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
                navLinks.forEach(l => l.style.color = 'var(--text-secondary)');
                link.style.color = 'var(--primary-light)';
            }
        }
    });
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// ADD PARALLAX EFFECT (Optional)
// ============================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-animation');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// PREVENT CONSOLE ERRORS
// ============================================

console.log('%c🎉 Welcome to Tech Portal!', 'color: #00ff99; font-size: 16px; font-weight: bold;');
console.log('%cPowered by Professional Technical Education Platform', 'color: #0080ff; font-size: 12px;');