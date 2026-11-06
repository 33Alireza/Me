import { profile } from "@/data/profile";
import { CommandDefinition } from "../types";

export const contactCommand: CommandDefinition = {
  name: "contact",
  description: "Display contact information",
  run: () => `Email: ${profile.email}\nStatus: ${profile.availabilityStatus}`,
};
