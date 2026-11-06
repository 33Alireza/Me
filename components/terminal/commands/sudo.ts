import { CommandDefinition } from "../types";

export const sudoCommand: CommandDefinition = {
    name: "sudo",
    description: "Execute a command with superuser privileges",
    run: (args) => {
        if (args.join(" ") === "hire alireza") {
            return "🎉 SUCCESS: Alireza Yousefzadeh has been hired! Excellent choice.";
        }
        return `sudo: ${args.join(" ")}: permission denied (nice try though!)`;
    },
};