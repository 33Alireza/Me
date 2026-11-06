"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const progress = docHeight > 0 ? scrollTop / docHeight : 0;
          setScaleX(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[200] pointer-events-none bg-transparent">
      <div
        className="h-full bg-[var(--code-blue-light)] shadow-[0_0_10px_var(--code-blue-light)] origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scaleX})` }}
      />
    </div>
  );
}
