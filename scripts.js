document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    const heroSection = document.getElementById('hero');
    const images = [
        'images/hero.jpg',
        'images/hero2.jpg',
        'images/hero3.jpg'
    ];
    let currentImageIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Initial call to set the first image
    changeBackgroundImage();

    // Change image every 5 seconds
    setInterval(changeBackgroundImage, 5000);

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});
