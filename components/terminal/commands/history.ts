import { CommandDefinition } from "../types";

export const historyCommand: CommandDefinition = {
  name: "history",
  description: "Display command history",
  run: (_, context) =>
    context.history.map((h, i) => `  ${i + 1}  ${h}`).join("\n"),
};
