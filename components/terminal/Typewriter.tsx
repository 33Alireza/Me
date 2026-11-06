"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    speed?: [number, number]; // min, max ms per char
    onComplete?: () => void;
}

export default function Typewriter({ text, speed = [25, 70], onComplete }: TypewriterProps) {
    const prefersReducedMotion =
        typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const [displayedText, setDisplayedText] = useState(prefersReducedMotion ? text : "");
    const [isDone, setIsDone] = useState(prefersReducedMotion);

    useEffect(() => {
        if (prefersReducedMotion) {
            onComplete?.();
            return;
        }

        let i = 0;
        let timeoutId: NodeJS.Timeout;

        const typeNext = () => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                const [min, max] = speed;
                const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
                timeoutId = setTimeout(typeNext, randomDelay);
            } else {
                setIsDone(true);
                onComplete?.();
            }
        };

        typeNext();

        return () => clearTimeout(timeoutId);
    }, [text, speed, onComplete, prefersReducedMotion]);

    return (
        <span>
            {displayedText}
            {!isDone && <span className="term-cursor"></span>}
        </span>
    );
}