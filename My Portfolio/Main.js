function lineDotAnimation() {
    const canvas = document.getElementById("background-animation");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const dots = [];
    for (let i = 0; i < 60; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
        });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach(dot => {
            dot.x += dot.vx;
            dot.y += dot.vy;
            if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
            if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = "#aaa";
            ctx.fill();
        });
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = "rgba(170,170,170," + (1 - dist / 100) + ")";
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}
lineDotAnimation();