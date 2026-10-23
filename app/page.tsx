"use client";

import {useEffect, useRef, useState} from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const themeRef = useRef(theme);

    useEffect(() => {
        themeRef.current = theme;
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        // Tech Node Network Background Canvas with ResizeObserver for full page height
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
            const count = Math.floor((width * height) / 35000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: Math.random() * 1.2 + 0.8,
                });
            }
        };

        let mouseX = -1000,
            mouseY = -1000;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY + window.scrollY;
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resizeCanvas);

        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas();
        });
        resizeObserver.observe(document.body);

        resizeCanvas();

        let animId: number;
        const animate = () => {
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

                // Draw particle
                ctx.fillStyle = currentTheme === "dark" ? "rgba(0, 210, 255, 0.45)" : "rgba(37, 99, 235, 0.4)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                // Connect nearby particles
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.strokeStyle =
                            currentTheme === "dark"
                                ? `rgba(0, 120, 255, ${0.18 * (1 - dist / 100)})`
                                : `rgba(37, 99, 235, ${0.15 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.75;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const currentMouseY = mouseY;
                const mdx = p.x - mouseX;
                const mdy = p.y - currentMouseY;
                const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mDist < 130) {
                    ctx.strokeStyle =
                        currentTheme === "dark"
                            ? `rgba(0, 210, 255, ${0.3 * (1 - mDist / 130)})`
                            : `rgba(37, 99, 235, ${0.25 * (1 - mDist / 130)})`;
                    ctx.lineWidth = 0.9;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouseX, currentMouseY);
                    ctx.stroke();
                }
            });

            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);

        // Scroll reveal observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {threshold: 0.1}
        );

        document.querySelectorAll(".reveal").forEach((el) => {
            observer.observe(el);
        });

        // Interactive mouse spotlight following cursor
        const spotlight = document.getElementById("mouse-spotlight");
        let targetMouseX = 0,
            targetMouseY = 0;
        let currentX = 0,
            currentY = 0;

        const handleSpotlightMove = (e: MouseEvent) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleSpotlightMove);

        let spotAnimId: number;
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

        // 3D Tilt Effect
        function apply3DTilt(containerSelector: string, innerSelector: string, intensity = 15) {
            document.querySelectorAll(containerSelector).forEach((card) => {
                const htmlCard = card as HTMLElement;
                const inner = (htmlCard.querySelector(innerSelector) || htmlCard) as HTMLElement;

                const onMouseMove = (e: MouseEvent) => {
                    const rect = htmlCard.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    htmlCard.style.setProperty("--mouse-x", `${x}px`);
                    htmlCard.style.setProperty("--mouse-y", `${y}px`);

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

                htmlCard.addEventListener("mousemove", onMouseMove as EventListener);
                htmlCard.addEventListener("mouseleave", onMouseLeave);
            });
        }

        apply3DTilt(".parallax-wrap", ".terminal", 12);
        apply3DTilt(".projects-grid", ".proj-card", 8);
        apply3DTilt(".social-platforms", ".platform-card", 8);
        apply3DTilt(".about-stats", ".stat-card", 10);
        apply3DTilt(".experience-container", ".exp-card", 8);

        return () => {
            cancelAnimationFrame(animId);
            cancelAnimationFrame(spotAnimId);
            observer.disconnect();
            resizeObserver.disconnect();
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousemove", handleSpotlightMove);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div data-theme={theme} className="min-h-screen transition-colors duration-500">
            <canvas id="tech-canvas" className="absolute top-0 left-0 w-full pointer-events-none z-1"></canvas>
            <div className="hud-grid" style={{zIndex: 2}}></div>
            <div id="mouse-spotlight" style={{zIndex: 2}}></div>

            <Navbar theme={theme} toggleTheme={toggleTheme}/>

            <main style={{position: "relative", zIndex: 10}}>
                <div className="nebula-glow" style={{top: "5%", left: "55%"}}></div>
                <div className="nebula-cyan" style={{top: "45%", left: "-15%"}}></div>
                <div className="nebula-glow" style={{top: "75%", left: "65%"}}></div>

                <Hero/>
                <About/>
                <Experience/>
                <Projects/>
                <Social/>
                <Contact/>
            </main>

            <Footer/>
        </div>
    );
}