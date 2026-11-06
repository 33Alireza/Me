import React from "react";

export interface VFile {
  name: string;
  type: "file";
  content: string;
}

export interface VDirectory {
  name: string;
  type: "dir";
  children: Record<string, VFile | VDirectory>;
}

export type VNode = VFile | VDirectory;

export interface CommandContext {
  currentPath: string;
  fs: VDirectory;
  setFs: React.Dispatch<React.SetStateAction<VDirectory>>;
  setCurrentPath: (path: string) => void;
  history: string[];
  clearHistory: () => void;
  clearOutput: () => void;
}

export interface CommandDefinition {
  name: string;
  description: string;
  run: (
    args: string[],
    context: CommandContext,
  ) => string | React.ReactNode | Promise<string | React.ReactNode>;
}

export interface OutputLine {
  id: string;
  type: "input" | "output" | "error" | "system";
  content: string | React.ReactNode;
}
