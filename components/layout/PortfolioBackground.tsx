"use client";

import { usePortfolioEffects } from "@/hooks/usePortfolioEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PortfolioBackgroundProps {
  children: React.ReactNode;
}

export default function PortfolioBackground({ children }: PortfolioBackgroundProps) {
  usePortfolioEffects();

  return (
    <div className="min-h-screen transition-colors duration-500">
      <canvas id="tech-canvas" className="absolute top-0 left-0 w-full pointer-events-none z-1"></canvas>
      <div className="hud-grid" style={{zIndex: 2}}></div>
      <div id="mouse-spotlight" style={{zIndex: 2}}></div>

      <Navbar />

      <main style={{position: "relative", zIndex: 10}}>
        <div className="nebula-glow" style={{top: "5%", left: "55%"}}></div>
        <div className="nebula-cyan" style={{top: "45%", left: "-15%"}}></div>
        <div className="nebula-glow" style={{top: "75%", left: "65%"}}></div>

        {children}
      </main>

      <Footer />
    </div>
  );
}