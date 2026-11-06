import { socials } from "@/data/socials";
import { CommandDefinition } from "../types";

export const socialsCommand: CommandDefinition = {
    name: "socials",
    description: "List social media and community profiles",
    run: () => socials.map((s) => `${s.platform}: ${s.url} (${s.handle})`).join("\n"),
};