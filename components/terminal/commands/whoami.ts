import { profile } from "@/data/profile";
import { CommandDefinition } from "../types";

export const whoamiCommand: CommandDefinition = {
  name: "whoami",
  description: "Display current user profile",
  run: () => `${profile.name} - ${profile.role} (${profile.tagline})`,
};
