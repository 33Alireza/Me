"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { triggerConfetti } from "./confetti";

export default function EasterEggListener() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const konamiCode = useMemo(
    () => [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ],
    [],
  );
  const konamiIndexRef = useRef(0);
  const logoTapCountRef = useRef(0);
  const logoTapTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === konamiCode[konamiIndexRef.current].toLowerCase()
      ) {
        konamiIndexRef.current++;
        if (konamiIndexRef.current === konamiCode.length) {
          triggerConfetti();
          setToastMessage("🎉 Easter Egg Unlocked: Konami Code Activated!");
          setTimeout(() => setToastMessage(null), 4000);
          konamiIndexRef.current = 0;
        }
      } else {
        konamiIndexRef.current = 0;
      }
    };

    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".nav-logo")) {
        logoTapCountRef.current++;
        if (logoTapTimerRef.current) clearTimeout(logoTapTimerRef.current);
        if (logoTapCountRef.current >= 5) {
          triggerConfetti();
          setToastMessage("🎉 Easter Egg Unlocked: Logo Tapped 5 Times!");
          setTimeout(() => setToastMessage(null), 4000);
          logoTapCountRef.current = 0;
        }
        logoTapTimerRef.current = setTimeout(() => {
          logoTapCountRef.current = 0;
        }, 2000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleLogoClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleLogoClick);
      if (logoTapTimerRef.current) clearTimeout(logoTapTimerRef.current);
    };
  }, [konamiCode]);

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[300] bg-[var(--card)] border border-[var(--border-hover)] text-[var(--text)] px-5 py-3 rounded-xl shadow-2xl backdrop-blur-xl font-['Space_Mono',monospace] text-xs flex items-center gap-3 animate-bounce">
      <span className="w-2.5 h-2.5 rounded-full bg-[var(--code-blue-light)] animate-pulse"></span>
      <span>{toastMessage}</span>
    </div>
  );
}
