import { CommandDefinition } from "../types";
import { resolvePath } from "../filesystem";

export const lsCommand: CommandDefinition = {
  name: "ls",
  description: "List directory contents",
  run: (args, context) => {
    const target = args[0] || "";
    const { node } = resolvePath(context.currentPath, target, context.fs);
    if (!node) return `ls: ${target}: No such file or directory`;
    if (node.type === "file") return node.name;

    const entries = Object.values(node.children).map((child) => {
      if (child.type === "dir") {
        return `<span style="color: var(--code-blue-light); font-weight: bold;">${child.name}/</span>`;
      }
      return child.name;
    });

    return entries.join("   ");
  },
};
