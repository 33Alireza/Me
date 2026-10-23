"use client";

import {useState} from "react";

interface NavbarProps {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

export default function Navbar({theme, toggleTheme}: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav style={{zIndex: 100}}>
                <a className="nav-logo text-[10px] xs:text-xs sm:text-sm tracking-tight whitespace-nowrap" href="#top">
                    Alireza Yousefzadeh
                </a>
                <div className="nav-links hidden md:flex">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#social">Social</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-btn p-1.5"
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
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-[var(--text)] text-lg p-2 focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="mobile-menu-dropdown md:hidden">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
                    <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                    <a href="#social" onClick={() => setMobileMenuOpen(false)}>Social</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </div>
            )}
        </>
    );
}