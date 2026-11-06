import { CommandDefinition } from "../types";

export const echoCommand: CommandDefinition = {
    name: "echo",
    description: "Echo arguments",
    run: (args) => args.join(" "),
};