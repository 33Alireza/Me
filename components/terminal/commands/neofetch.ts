import { profile } from "@/data/profile";
import { CommandDefinition } from "../types";

export const neofetchCommand: CommandDefinition = {
    name: "neofetch",
    description: "Display system summary with ASCII art",
    run: () => {
        return `
    /\\     ${profile.name}
   /  \\    ------------------
  /\\ /\\    Role: ${profile.role}
 /      \\   Tagline: ${profile.tagline}
/________\\  Status: ${profile.availabilityStatus}
            OS: Portfolio OS v2.6
            Shell: bash 5.2.15
            Uptime: 99.9% uptime
        `.trim();
    },
};
