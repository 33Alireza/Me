import { useState, useCallback, useRef } from "react";
import { VDirectory, OutputLine } from "./types";
import { createInitialFilesystem } from "./filesystem";
import { commands } from "./registry";

export function useTerminal() {
    const [fs, setFs] = useState<VDirectory>(createInitialFilesystem);
    const [currentPath, setCurrentPath] = useState<string>("~");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const idRef = useRef(1);
    const [output, setOutput] = useState<OutputLine[]>([
        {
            id: "init-welcome",
            type: "system",
            content: "AlirezaOS Terminal [Version 2.6.0]\nType 'help' for a list of available commands.",
        },
    ]);

    const clearOutput = useCallback(() => {
        setOutput([]);
    }, []);

    const executeCommand = useCallback(
        async (cmdLine: string) => {
            const trimmed = cmdLine.trim();
            if (!trimmed) return;

            setHistory((prev) => [...prev, trimmed]);
            setHistoryIndex(-1);

            const inputId = "in-" + idRef.current++;
            setOutput((prev) => [
                ...prev,
                { id: inputId, type: "input", content: `${currentPath} $ ${trimmed}` },
            ]);

            const parts = trimmed.split(" ");
            const cmdName = parts[0].toLowerCase();
            const args = parts.slice(1);

            const commandDef = commands[cmdName];
            const outputId = "out-" + idRef.current++;

            if (commandDef) {
                try {
                    const result = await commandDef.run(args, {
                        currentPath,
                        fs,
                        setFs,
                        setCurrentPath,
                        history,
                        clearHistory: () => setHistory([]),
                        clearOutput,
                    });
                    if (result !== "") {
                        setOutput((prev) => [...prev, { id: outputId, type: "output", content: result }]);
                    }
                } catch (err) {
                    setOutput((prev) => [
                        ...prev,
                        { id: outputId, type: "error", content: `Error executing command: ${err}` },
                    ]);
                }
            } else {
                setOutput((prev) => [
                    ...prev,
                    { id: outputId, type: "error", content: `zsh: command not found: ${cmdName}. Type 'help' for available commands.` },
                ]);
            }
        },
        [currentPath, fs, history, clearOutput]
    );

    return {
        fs,
        currentPath,
        setCurrentPath,
        history,
        historyIndex,
        setHistoryIndex,
        output,
        setOutput,
        executeCommand,
    };
}