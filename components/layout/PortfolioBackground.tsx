"use client";

import { useEffect } from "react";
import { usePortfolioEffects } from "@/hooks/usePortfolioEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import EasterEggListener from "@/components/ui/EasterEggListener";

interface PortfolioBackgroundProps {
  children: React.ReactNode;
  hasResume?: boolean;
  resumeHref?: string;
}

export default function PortfolioBackground({ children, hasResume, resumeHref }: PortfolioBackgroundProps) {
  usePortfolioEffects();

  useEffect(() => {
    console.log(
        "%c👋 Hello, Developer! Looking under the hood?",
        "color: #00d2ff; font-size: 16px; font-weight: bold; font-family: 'Space Mono', monospace;"
    );
    console.log(
        "%cCheck out my GitHub and LinkedIn:\nGitHub: https://github.com/33alireza\nLinkedIn: https://www.linkedin.com/in/33alireza",
        "color: #F0F4FF; font-size: 12px; font-family: 'Space Mono', monospace;"
    );
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <ScrollProgress />
      <EasterEggListener />
      <canvas id="tech-canvas" className="absolute top-0 left-0 w-full pointer-events-none z-1"></canvas>
      <div className="hud-grid" style={{zIndex: 2}}></div>
      <div id="mouse-spotlight" style={{zIndex: 2}}></div>

      <Navbar hasResume={hasResume} resumeHref={resumeHref} />

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