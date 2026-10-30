import { useEffect, useRef } from "react";

export function usePortfolioEffects() {
    const themeRef = useRef<"dark" | "light">("dark");

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isTouchOrMobile = window.matchMedia("(max-width: 768px), (hover: none)").matches;

        const updateThemeRef = () => {
            const currentTheme = (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
            themeRef.current = currentTheme;
        };
        updateThemeRef();

        const observerAttr = new MutationObserver(() => {
            updateThemeRef();
        });
        observerAttr.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        // Tech Node Network Background Canvas
        const canvas = document.getElementById("tech-canvas") as HTMLCanvasElement;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
        }> = [];

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
                window.innerHeight
            );

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);
            initParticles(width, height);
        };

        const initParticles = (width: number, height: number) => {
            particles = [];
            const count = prefersReducedMotion || isTouchOrMobile ? 0 : Math.floor((width * height) / 45000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 1.2 + 0.8,
                });
            }
        };

        let lastMoveTime = 0;
        const handleMouseMove = () => {
            const now = performance.now();
            if (now - lastMoveTime < 30) return;
            lastMoveTime = now;
        };

        if (!prefersReducedMotion && !isTouchOrMobile) {
            window.addEventListener("mousemove", handleMouseMove, { passive: true });
        }
        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();

        let animId: number;
        let isCanvasVisible = true;

        const canvasObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isCanvasVisible = entry.isIntersecting;
                });
            },
            { threshold: 0 }
        );
        canvasObserver.observe(canvas);

        const animate = () => {
            if (!isCanvasVisible || prefersReducedMotion || isTouchOrMobile) {
                animId = requestAnimationFrame(animate);
                return;
            }

            const width = window.innerWidth;
            const height = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
                window.innerHeight
            );

            ctx.clearRect(0, 0, width, height);

            const currentTheme = themeRef.current;

            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.fillStyle = currentTheme === "dark" ? "rgba(0, 210, 255, 0.4)" : "rgba(37, 99, 235, 0.35)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 90) {
                        ctx.strokeStyle =
                            currentTheme === "dark"
                                ? `rgba(0, 120, 255, ${0.15 * (1 - dist / 90)})`
                                : `rgba(37, 99, 235, ${0.12 * (1 - dist / 90)})`;
                        ctx.lineWidth = 0.75;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animId = requestAnimationFrame(animate);
        };
        if (!prefersReducedMotion && !isTouchOrMobile) {
            animId = requestAnimationFrame(animate);
        }

        // Scroll reveal observer for .reveal elements
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        document.querySelectorAll(".reveal").forEach((el) => {
            if (prefersReducedMotion) {
                el.classList.add("active");
            } else {
                revealObserver.observe(el);
            }
        });

        // Interactive mouse spotlight following cursor
        let spotAnimId: number;
        const spotlight = document.getElementById("mouse-spotlight");
        if (spotlight && !prefersReducedMotion && !isTouchOrMobile) {
            let targetMouseX = 0,
                targetMouseY = 0;
            let currentX = 0,
                currentY = 0;

            const handleSpotlightMove = (e: MouseEvent) => {
                targetMouseX = e.clientX;
                targetMouseY = e.clientY;
            };
            window.addEventListener("mousemove", handleSpotlightMove, { passive: true });

            const updateSpotlight = () => {
                currentX += (targetMouseX - currentX) * 0.1;
                currentY += (targetMouseY - currentY) * 0.1;
                if (spotlight) {
                    spotlight.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, ${
                        themeRef.current === "dark" ? "rgba(0, 150, 255, 0.08)" : "rgba(37, 99, 235, 0.06)"
                    }, transparent 60%)`;
                }
                spotAnimId = requestAnimationFrame(updateSpotlight);
            };
            spotAnimId = requestAnimationFrame(updateSpotlight);
        }

        // 3D Tilt Effect
        if (!prefersReducedMotion && !isTouchOrMobile) {
            function apply3DTilt(containerSelector: string, innerSelector: string, intensity = 12) {
                document.querySelectorAll(containerSelector).forEach((card) => {
                    const htmlCard = card as HTMLElement;
                    const inner = (htmlCard.querySelector(innerSelector) || htmlCard) as HTMLElement;

                    const onMouseMove = (e: MouseEvent) => {
                        const rect = htmlCard.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const xc = rect.width / 2;
                        const yc = rect.height / 2;
                        const dx = x - xc;
                        const dy = y - yc;

                        const degX = -(dy / yc) * intensity;
                        const degY = (dx / xc) * intensity;
                        inner.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`;
                    };

                    const onMouseLeave = () => {
                        inner.style.transform = "rotateX(0deg) rotateY(0deg)";
                    };

                    htmlCard.addEventListener("mousemove", onMouseMove as EventListener, { passive: true });
                    htmlCard.addEventListener("mouseleave", onMouseLeave);
                });
            }

            apply3DTilt(".parallax-wrap", ".terminal", 10);
            apply3DTilt(".projects-grid", ".proj-card", 6);
            apply3DTilt(".social-platforms", ".platform-card", 6);
            apply3DTilt(".about-stats", ".stat-card", 8);
            apply3DTilt(".experience-container", ".exp-card", 6);
        }

        return () => {
            if (animId) cancelAnimationFrame(animId);
            if (spotAnimId) cancelAnimationFrame(spotAnimId);
            canvasObserver.disconnect();
            revealObserver.disconnect();
            observerAttr.disconnect();
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);
}