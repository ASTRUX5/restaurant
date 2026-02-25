// --- Starry Background Generator ---
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 200; // Number of stars in our universe

    // Injecting the twinkle animation dynamically 
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes twinkle {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            50% { opacity: 1; box-shadow: 0 0 10px #00f3ff; }
            100% { transform: translateY(-50px) scale(0.8); opacity: 0; }
        }
        .star {
            position: absolute;
            background-color: #ffffff;
            border-radius: 50%;
        }
    `;
    document.head.appendChild(style);

    // Create the stars and scatter them randomly
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        let size = Math.random() * 2 + 1; // Random size between 1px and 3px
        let x = Math.random() * 100; // Random horizontal position (vw)
        let y = Math.random() * 100; // Random vertical position (vh)
        let duration = Math.random() * 4 + 3; // Animation duration between 3s and 7s
        let delay = Math.random() * 5; // Random start delay

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.animation = `twinkle ${duration}s infinite linear ${delay}s`;

        container.appendChild(star);
    }
}

// Initialize stars when the page loads
window.onload = createStars;
