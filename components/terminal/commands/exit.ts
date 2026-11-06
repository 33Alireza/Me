import { CommandDefinition } from "../types";

export const exitCommand: CommandDefinition = {
    name: "exit",
    description: "Exit the terminal session",
    run: () => "🚪 You can't leave yet—there's still too much code to explore! (Use browser back or tabs instead)",
};