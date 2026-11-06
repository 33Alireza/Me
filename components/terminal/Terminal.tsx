"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useTerminal } from "./useTerminal";
import Typewriter from "./Typewriter";
import { resolvePath } from "./filesystem";

export default function Terminal() {
    const { fs, currentPath, history, historyIndex, setHistoryIndex, output, setOutput, executeCommand } = useTerminal();
    const [input, setInput] = useState("");
    const [introCompleted, setIntroCompleted] = useState(false);
    const outputContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const idRef = useRef(100);

    // Auto-scroll output container (never window.scrollTo)
    useEffect(() => {
        if (outputContainerRef.current) {
            outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
        }
    }, [output, introCompleted, input]);

    // Focus input on mount for desktop
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== "undefined" && window.innerWidth >= 768) {
                inputRef.current?.focus();
            }
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    const completeIntroAndRun = (cmdToRun?: string) => {
        if (!introCompleted) {
            setIntroCompleted(true);
            const profileNode = resolvePath("~", "profile.json", fs);
            const outputId = "out-" + idRef.current++;
            const profileContent = profileNode.node && profileNode.node.type === "file" ? profileNode.node.content : "";
            setOutput((prev) => [
                ...prev,
                { id: "intro-cmd", type: "input", content: "~ $ cat profile.json" },
                { id: outputId, type: "output", content: profileContent },
            ]);
        }
        if (cmdToRun) {
            executeCommand(cmdToRun);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!introCompleted) {
            completeIntroAndRun();
        }

        if (e.key === "Enter") {
            e.preventDefault();
            if (input.trim()) {
                executeCommand(input);
                setInput("");
            }
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length > 0) {
                const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(nextIndex);
                setInput(history[nextIndex] || "");
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex !== -1) {
                const nextIndex = historyIndex + 1;
                if (nextIndex >= history.length) {
                    setHistoryIndex(-1);
                    setInput("");
                } else {
                    setHistoryIndex(nextIndex);
                    setInput(history[nextIndex] || "");
                }
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const parts = input.trim().split(" ");
            if (parts.length <= 1) {
                const availableCmds = [
                    "help",
                    "whoami",
                    "ls",
                    "cd",
                    "pwd",
                    "cat",
                    "skills",
                    "projects",
                    "experience",
                    "certificates",
                    "contact",
                    "socials",
                    "resume",
                    "clear",
                    "history",
                    "date",
                    "echo",
                    "theme",
                    "neofetch",
                    "sudo",
                    "rm",
                    "exit",
                ];
                const match = availableCmds.find((c) => c.startsWith(parts[0] || ""));
                if (match) setInput(match);
            }
        } else if (e.ctrlKey && e.key === "l") {
            e.preventDefault();
            setOutput([]);
        } else if (e.ctrlKey && e.key === "c") {
            e.preventDefault();
            setInput("");
        }
    };

    const handleContainerClick = () => {
        if (!introCompleted) {
            completeIntroAndRun();
        }
        inputRef.current?.focus();
    };

    const runCommandChip = (cmd: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!introCompleted) {
            completeIntroAndRun();
        }
        executeCommand(cmd);
        inputRef.current?.focus();
    };

    return (
        <div
            className="terminal w-full cursor-text"
            onClick={handleContainerClick}
        >
            <div className="term-bar flex items-center justify-between px-4 py-3 bg-[var(--card)] border-b border-[var(--border)]">
                <div className="flex items-center gap-2 group/dots">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-[8px] text-black/60 opacity-90 hover:opacity-100 cursor-pointer shadow-sm">
                        <span className="opacity-0 group-hover/dots:opacity-80">×</span>
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center text-[8px] text-black/60 opacity-90 hover:opacity-100 cursor-pointer shadow-sm">
                        <span className="opacity-0 group-hover/dots:opacity-80">−</span>
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center text-[8px] text-black/60 opacity-90 hover:opacity-100 cursor-pointer shadow-sm">
                        <span className="opacity-0 group-hover/dots:opacity-80">+</span>
                    </span>
                </div>
                <span className="term-title text-xs text-[var(--text-muted)] font-['Space_Mono',monospace]">alireza@portfolio: ~</span>
                <div className="w-12"></div>
            </div>

            {/* Mobile Tappable Command Chips */}
            <div className="flex sm:hidden items-center gap-2 p-3 bg-black/30 border-b border-[var(--border)] overflow-x-auto">
                <span className="text-[10px] text-[var(--text-muted)] font-['Space_Mono',monospace] whitespace-nowrap">Quick:</span>
                {["help", "skills", "projects", "contact", "neofetch", "clear"].map((cmd) => (
                    <button
                        key={cmd}
                        onClick={(e) => runCommandChip(cmd, e)}
                        className="font-['Space_Mono',monospace] text-[11px] px-2.5 py-1 rounded-md bg-[var(--code-blue)]/15 border border-[var(--border)] text-[var(--code-blue-light)] whitespace-nowrap active:scale-95 transition-transform min-h-[32px] flex items-center cursor-pointer"
                    >
                        {cmd}
                    </button>
                ))}
            </div>

            <div
                ref={outputContainerRef}
                role="log"
                aria-live="polite"
                className="term-body max-h-[420px] overflow-y-auto p-4 sm:p-6 text-xs sm:text-sm font-['Space_Mono',monospace]"
            >
                {output.map((line) => (
                    <div key={line.id} className="term-line mb-2 whitespace-pre-wrap">
                        {line.type === "input" ? (
                            <span>
                                <span className="text-green-400">alireza@portfolio</span>:<span className="text-[var(--code-blue-light)]">~</span>$ {String(line.content).replace(/^.*?\$\s*/, "")}
                            </span>
                        ) : line.type === "error" ? (
                            <span className="text-red-400">{line.content}</span>
                        ) : line.type === "system" ? (
                            <span className="text-[var(--text-muted)]">{line.content}</span>
                        ) : (
                            <span
                                className="text-[var(--text)]"
                                dangerouslySetInnerHTML={{
                                    __html: typeof line.content === "string" ? line.content : "",
                                }}
                            >
                                {typeof line.content !== "string" ? line.content : null}
                            </span>
                        )}
                    </div>
                ))}

                {/* Initial Intro Typewriter */}
                {!introCompleted && (
                    <div className="term-line mb-2">
                        <span className="text-green-400">alireza@portfolio</span>:<span className="text-[var(--code-blue-light)]">~</span>${" "}
                        <Typewriter text="cat profile.json" onComplete={() => setIntroCompleted(true)} />
                    </div>
                )}

                {/* Active Input Line (Always rendered so user can type anytime) */}
                <div className="term-line flex items-center gap-1 flex-wrap pt-1">
                    <span className="text-green-400 whitespace-nowrap">alireza@portfolio</span>:
                    <span className="text-[var(--code-blue-light)] whitespace-nowrap">{currentPath}</span>$
                    <div className="relative flex-1 min-w-[120px] flex items-center">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => {
                                if (!introCompleted) completeIntroAndRun();
                                setInput(e.target.value);
                            }}
                            onKeyDown={handleKeyDown}
                            aria-label="Terminal command input"
                            className="w-full bg-transparent border-none outline-none text-[var(--text)] font-['Space_Mono',monospace] text-base sm:text-sm p-0 m-0 caret-[var(--code-blue-light)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}