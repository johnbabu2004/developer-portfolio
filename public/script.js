document.addEventListener('DOMContentLoaded', function() {
    // Theme management
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeSelector = document.getElementById('themeSelector');
    const html = document.documentElement;
    
    // Available themes
    const themes = {
        purple: { 
            name: 'default',
            icon: 'bi-moon-fill'
        },
        blue: {
            name: 'blue',
            icon: 'bi-droplet-fill'
        },
        green: {
            name: 'green',
            icon: 'bi-tree-fill'
        },
        dark: {
            name: 'dark',
            icon: 'bi-sun-fill'
        }
    };
    
    // // Check for saved theme preference or use preferred color scheme
    // const savedTheme = localStorage.getItem('theme') || 'default';
    // applyTheme(savedTheme);
    
    // Toggle theme selector visibility
    themeToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (themeSelector.classList.contains('show')) {
            // If selector is open, toggle theme directly
            toggleTheme();
        } else {
            // Otherwise show theme selector
            themeSelector.classList.add('show');
        }
    });
    
    // Close theme selector when clicking outside
    document.addEventListener('click', function(e) {
        if (!themeToggle.contains(e.target) && !themeSelector.contains(e.target)) {
            themeSelector.classList.remove('show');
        }
    });
    
    // Theme selection from selector
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
            localStorage.setItem('theme', theme);
            themeSelector.classList.remove('show');
        });
    });
    
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme') || 'purple';
        const newTheme = currentTheme === 'dark' ? 'purple' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    function applyTheme(theme) {
        // Remove all theme attributes first
        Object.values(themes).forEach(t => {
            html.removeAttribute(`data-theme-${t.name}`);
        });
        
        // Apply selected theme
        if (theme !== 'purple') {
            html.setAttribute('data-theme', theme);
        } else {
            html.removeAttribute('data-theme');
        }
        
        // Update active state on theme options
        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.classList.remove('active');
            if (opt.getAttribute('data-theme') === theme) {
                opt.classList.add('active');
            }
        });
        
        // Update toggle icon
        updateThemeIcon(theme);
    }
    
    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        
        // Remove all possible icon classes
        Object.values(themes).forEach(t => {
            themeIcon.classList.remove(t.icon);
        });
        
        // Add the correct icon class
        if (theme === 'dark') {
            themeIcon.classList.add('bi-sun-fill');
        } else {
            themeIcon.classList.add('bi-moon-fill');
        }
    }
//  // Smooth scrolling for anchor links
//  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop - 70,
//                 behavior: 'smooth'
//             });
            
//             // Close mobile menu if open
//             const navbarCollapse = document.querySelector('.navbar-collapse');
//             if (navbarCollapse && navbarCollapse.classList.contains('show')) {
//                 navbarCollapse.classList.remove('show');
//             }
//         }
//     });
// });

// // Navbar background change on scroll
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (navbar) {
//         if (window.scrollY > 50) {
//             navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
//             navbar.style.padding = '10px 0';
//         } else {
//             navbar.style.boxShadow = 'none';
//             navbar.style.padding = '15px 0';
//         }
//     }
// });

// // Animation on scroll
// const animateOnScroll = () => {
//     const elements = document.querySelectorAll('.fade-in, .slide-up');
    
//     elements.forEach(element => {
//         const elementPosition = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
        
//         if (elementPosition < windowHeight - 100) {
//             element.style.opacity = '1';
//             if (element.classList.contains('slide-up')) {
//                 element.style.transform = 'translateY(0)';
//             }
//         }
// //     });
// // };

// // Initialize elements as invisible
// document.querySelectorAll('.fade-in').forEach(el => {
//     el.style.opacity = '0';
// });

// document.querySelectorAll('.slide-up').forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(50px)';
// });

// // Run once on load
// animateOnScroll();

// // Then run on scroll
// window.addEventListener('scroll', animateOnScroll);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}
});
    

   