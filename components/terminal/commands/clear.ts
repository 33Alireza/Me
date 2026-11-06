import { CommandDefinition } from "../types";

export const clearCommand: CommandDefinition = {
    name: "clear",
    description: "Clear terminal screen",
    run: (_, context) => {
        context.clearOutput();
        return "";
    },
};