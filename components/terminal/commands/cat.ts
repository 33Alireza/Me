import { CommandDefinition } from "../types";
import { resolvePath } from "../filesystem";

export const catCommand: CommandDefinition = {
    name: "cat",
    description: "Concatenate and display file contents",
    run: (args, context) => {
        if (!args[0]) return "cat: missing file operand";
        const { node } = resolvePath(context.currentPath, args[0], context.fs);
        if (!node) return `cat: ${args[0]}: No such file or directory`;
        if (node.type === "dir") return `cat: ${args[0]}: Is a directory`;

        return node.content;
    },
};