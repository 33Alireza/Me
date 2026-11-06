import { projects } from "@/data/projects";
import { CommandDefinition } from "../types";

export const projectsCommand: CommandDefinition = {
    name: "projects",
    description: "List portfolio projects",
    run: () => projects.map((p) => `[${p.number}] ${p.title} - ${p.description.slice(0, 80)}...\n   Tags: ${p.tags.join(", ")}`).join("\n\n"),
};