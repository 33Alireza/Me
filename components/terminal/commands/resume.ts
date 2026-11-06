import { CommandDefinition } from "../types";

export const resumeCommand: CommandDefinition = {
  name: "resume",
  description: "Open or download resume",
  run: () => {
    if (typeof window !== "undefined") {
      window.open("#contact", "_self");
    }
    return "Opening contact / resume section...";
  },
};
