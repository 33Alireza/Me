import { CommandDefinition } from "../types";

export const dateCommand: CommandDefinition = {
  name: "date",
  description: "Display current date and time",
  run: () => new Date().toLocaleString(),
};
