import { CommandDefinition } from "../types";
import { triggerConfetti } from "@/components/ui/confetti";

export const sudoCommand: CommandDefinition = {
    name: "sudo",
    description: "Execute a command with superuser privileges",
    run: (args) => {
        if (args.join(" ") === "hire alireza") {
            triggerConfetti();
            return "🎉 SUCCESS: Alireza Yousefzadeh has been hired! Excellent choice.";
        }
        return `sudo: ${args.join(" ")}: permission denied (nice try though!)`;
    },
};