import { CommandDefinition } from "../types";

export const helpCommand: CommandDefinition = {
  name: "help",
  description: "List all available commands",
  run: () =>
    "Available commands: help, whoami, ls, cd, pwd, cat, skills, projects, experience, certificates, contact, socials, resume, clear, history, date, echo, theme, neofetch, sudo, rm, exit",
};
