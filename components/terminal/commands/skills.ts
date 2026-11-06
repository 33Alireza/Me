import { skills } from "@/data/skills";
import { CommandDefinition } from "../types";

export const skillsCommand: CommandDefinition = {
  name: "skills",
  description: "Display technical skills and stack",
  run: () => skills.map((s) => `• ${s.name} (${s.category})`).join("\n"),
};
