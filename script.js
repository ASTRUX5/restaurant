// --- Premium Interactive Universe ---

// 1. Inject Glowing Ambient Orbs
function createOrbs() {
    const body = document.body;
    const orb1 = document.createElement('div');
    orb1.className = 'ambient-orb orb-1';
    const orb2 = document.createElement('div');
    orb2.className = 'ambient-orb orb-2';
    body.appendChild(orb1);
    body.appendChild(orb2);
}

// 2. Advanced Starfield with Parallax Depth
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 250; // Increased density for a richer universe

    // Add dynamic styles for premium twinkling
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes premium-twinkle {
            0% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 10px #00f3ff; }
            100% { opacity: 0.2; transform: scale(0.8); }
        }
        .premium-star {
            position: absolute;
            background-color: #ffffff;
            border-radius: 50%;
            transition: transform 0.1s ease-out; /* Smooth transition for parallax */
        }
    `;
    document.head.appendChild(style);

    const stars = [];

    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.classList.add('premium-star');
        
        // Assign 3 layers of depth for the 3D parallax effect (1 = foreground, 3 = background)
        let layer = Math.floor(Math.random() * 3) + 1; 
        let size = layer === 1 ? Math.random() * 2 + 1.5 : (layer === 2 ? Math.random() * 1.5 + 1 : Math.random() * 1 + 0.5);
        let x = Math.random() * 100; // vw
        let y = Math.random() * 100; // vh
        let duration = Math.random() * 3 + 2; 
        let delay = Math.random() * 5; 

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animation = `premium-twinkle ${duration}s infinite alternate ${delay}s`;
        
        // Store layer data directly on the element for the mouse listener to read
        star.dataset.layer = layer;
        
        container.appendChild(star);
        stars.push(star); // Save to array for the mousemove event
    }

    // 3. Mousemove Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        stars.forEach(star => {
            const layer = star.dataset.layer;
            // Foreground stars move the most, background stars barely move
            const depth = layer === '1' ? 40 : (layer === '2' ? 15 : 5); 
            const moveX = mouseX * depth;
            const moveY = mouseY * depth;
            
            // Apply the movement based on mouse position
            star.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Initialize everything when the page loads
window.onload = () => {
    createOrbs();
    createStars();
};
