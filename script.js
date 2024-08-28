document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle functionality
    const themeToggleButton = document.querySelector('#theme-toggle');
    
    themeToggleButton.addEventListener('click', function() {
        const body = document.body;
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode'); 
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode'); 
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light-mode'); 
    }
});
