import { experiences } from "@/data/experience";
import { CommandDefinition } from "../types";

export const experienceCommand: CommandDefinition = {
  name: "experience",
  description: "Display work experience",
  run: () =>
    experiences
      .map(
        (e) =>
          `${e.role} at ${e.company} (${e.period})\n${e.bulletPoints.map((bp) => `  - ${bp.replace(/<[^>]*>?/gm, "")}`).join("\n")}`,
      )
      .join("\n\n"),
};
