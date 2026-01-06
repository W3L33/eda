// Crear canvas que ocupe toda la pantalla
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Configuración de los puntos
const points = [];
const POINTS_COUNT = 100; // cantidad de puntos
const MAX_DISTANCE = 200; // distancia máxima para dibujar líneas

// Crear puntos aleatorios
for (let i = 0; i < POINTS_COUNT; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // velocidad en x
        vy: (Math.random() - 0.5) * 0.5, // velocidad en y
        radius: 1 + Math.random() * 2 // tamaño del punto
    });
}

// Función para dibujar cada frame
function animate() {
    // Fondo negro con leve transparencia para efecto difuminado
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar líneas entre puntos cercanos
    for (let i = 0; i < points.length; i++) {
        const p1 = points[i];

        // Dibujar puntos
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)'; // color azul neón
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
            const p2 = points[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MAX_DISTANCE) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(0, 255, 255, ${1 - dist / MAX_DISTANCE})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }

        // Mover punto
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Rebote en los bordes
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;
    }

    requestAnimationFrame(animate);
}

animate();
