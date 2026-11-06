import { CommandDefinition } from "../types";

export const pwdCommand: CommandDefinition = {
  name: "pwd",
  description: "Print working directory",
  run: (_, context) => context.currentPath,
};
