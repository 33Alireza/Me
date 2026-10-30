"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade" | "scale";
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.classList.add("active");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const variantClass = {
    "fade-up": "reveal-fade-up",
    "fade": "reveal-fade",
    "scale": "reveal-scale",
  }[variant];

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return React.createElement(
    Component as string,
    {
      ref,
      className: cn("reveal-base", variantClass, className),
      style,
    },
    children
  );
}