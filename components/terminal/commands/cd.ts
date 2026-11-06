import { CommandDefinition } from "../types";
import { resolvePath } from "../filesystem";

export const cdCommand: CommandDefinition = {
    name: "cd",
    description: "Change directory",
    run: (args, context) => {
        const target = args[0] || "~";
        const { node, pathStr } = resolvePath(context.currentPath, target, context.fs);
        if (!node) return `cd: no such file or directory: ${target}`;
        if (node.type === "file") return `cd: not a directory: ${target}`;

        context.setCurrentPath(pathStr);
        return "";
    },
};