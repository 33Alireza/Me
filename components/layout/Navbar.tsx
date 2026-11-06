"use client";

import { useState, useEffect, useRef } from "react";
import { certificates } from "@/data/certificates";

interface NavbarProps {
    hasResume?: boolean;
    resumeHref?: string;
}

export default function Navbar({ hasResume = false, resumeHref = "/resume.pdf" }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [theme, setTheme] = useState<"dark" | "light">(() => {
        if (typeof window !== "undefined") {
            return (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
        }
        return "dark";
    });

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        try {
            localStorage.setItem("portfolio-theme", nextTheme);
        } catch {
            // ignore
        }
    };

    const showCertificates = certificates && certificates.length > 0;
    const navItems = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        ...(showCertificates ? [{ id: "certificates", label: "Certificates" }] : []),
        { id: "social", label: "Social" },
        { id: "contact", label: "Contact" },
    ];

    // Scroll spy / active section highlight via IntersectionObserver
    useEffect(() => {
        const sections = document.querySelectorAll("section[id], #top");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    // Close on Escape and Focus Trap for Mobile Menu
    useEffect(() => {
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape" && mobileMenuOpen) {
                setMobileMenuOpen(false);
                hamburgerRef.current?.focus();
            }
        };

        const handleFocusTrap = (e: globalThis.KeyboardEvent) => {
            if (!mobileMenuOpen || !mobileMenuRef.current) return;
            if (e.key === "Tab") {
                const focusableElements = mobileMenuRef.current.querySelectorAll("a, button");
                if (focusableElements.length === 0) return;
                const firstElement = focusableElements[0] as HTMLElement;
                const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keydown", handleFocusTrap);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keydown", handleFocusTrap);
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <nav style={{ zIndex: 100 }}>
                <a className="nav-logo text-[11px] sm:text-sm tracking-tight whitespace-nowrap min-h-[44px] flex items-center" href="#top">
                    Alireza Yousefzadeh
                </a>
                <div className="nav-links hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`px-3 py-1.5 rounded-lg font-['Space_Mono',monospace] text-xs transition-colors ${
                                activeSection === item.id ? "text-[var(--text)] bg-[var(--code-blue)]/20 font-bold" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    {hasResume && (
                        <a
                            href={resumeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg font-['Space_Mono',monospace] text-xs text-[var(--code-blue-light)] hover:text-[var(--text)] border border-[var(--border)] transition-colors ml-2"
                        >
                            Resume
                        </a>
                    )}
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-btn p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl cursor-pointer"
                        aria-label="Toggle theme"
                        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
                    >
                        {theme === "dark" ? (
                            <i className="fa-solid fa-sun text-[var(--text)] text-base sm:text-lg"></i>
                        ) : (
                            <i className="fa-solid fa-moon text-[var(--text)] text-base sm:text-lg"></i>
                        )}
                    </button>
                    <button
                        ref={hamburgerRef}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-[var(--text)] text-lg p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none rounded-xl cursor-pointer"
                        aria-label="Toggle mobile menu"
                    >
                        <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
                    </button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div ref={mobileMenuRef} className="mobile-menu-dropdown md:hidden shadow-2xl">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`min-h-[44px] flex items-center px-4 rounded-xl font-['Space_Mono',monospace] text-sm ${
                                activeSection === item.id ? "text-[var(--code-blue-light)] font-bold bg-[var(--code-blue)]/15" : "text-[var(--text)]"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    {hasResume && (
                        <a
                            href={resumeHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="min-h-[44px] flex items-center px-4 rounded-xl font-['Space_Mono',monospace] text-sm text-[var(--code-blue-light)] hover:bg-[var(--code-blue)]/15"
                        >
                            Resume <i className="fa-solid fa-file-pdf ml-2"></i>
                        </a>
                    )}
                </div>
            )}
        </>
    );
}