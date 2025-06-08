// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const alertBtn = document.getElementById('alertBtn');
    
    // Add click event listener to button
    alertBtn.addEventListener('click', () => {
        alert('Hello! Thanks for clicking!');
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add image loading animation
    const img = document.querySelector('img');
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease-in';
    
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });

    // Add random color change to h1 on hover
    const h1 = document.querySelector('h1');
    h1.addEventListener('mouseover', () => {
        const colors = ['#2c3e50', '#e74c3c', '#3498db', '#2ecc71', '#f1c40f'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        h1.style.color = randomColor;
    });
});

// Add console message
console.log('JavaScript loaded successfully! 🚀');
