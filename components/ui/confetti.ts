export function triggerConfetti() {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        canvas.remove();
        return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        size: number;
        rotation: number;
        vRot: number;
    }> = [];

    const colors = ["#0049FF", "#00D2FF", "#3B82F6", "#22C55E", "#EAB308", "#EC4899", "#8B5CF6"];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: (Math.random() - 0.5) * 16,
            vy: (Math.random() - 0.7) * 16 - 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.floor(Math.random() * 8) + 6,
            rotation: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 10,
        });
    }

    let alpha = 1;

    const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.4;
            p.vx *= 0.98;
            p.rotation += p.vRot;

            if (p.y < canvas.height + 50) {
                active = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, alpha);
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                ctx.restore();
            }
        });

        alpha -= 0.015;

        if (active && alpha > 0) {
            requestAnimationFrame(render);
        } else {
            canvas.remove();
        }
    };

    render();
}
