import { CommandDefinition } from "./types";
import { helpCommand } from "./commands/help";
import { whoamiCommand } from "./commands/whoami";
import { lsCommand } from "./commands/ls";
import { cdCommand } from "./commands/cd";
import { pwdCommand } from "./commands/pwd";
import { catCommand } from "./commands/cat";
import { skillsCommand } from "./commands/skills";
import { projectsCommand } from "./commands/projects";
import { experienceCommand } from "./commands/experience";
import { certificatesCommand } from "./commands/certificates";
import { contactCommand } from "./commands/contact";
import { socialsCommand } from "./commands/socials";
import { resumeCommand } from "./commands/resume";
import { clearCommand } from "./commands/clear";
import { historyCommand } from "./commands/history";
import { dateCommand } from "./commands/date";
import { echoCommand } from "./commands/echo";
import { themeCommand } from "./commands/theme";
import { neofetchCommand } from "./commands/neofetch";
import { sudoCommand } from "./commands/sudo";
import { rmCommand } from "./commands/rm";
import { exitCommand } from "./commands/exit";

export const commands: Record<string, CommandDefinition> = {
  help: {
    ...helpCommand,
    run: () => {
      const list = Object.values(commands)
        .map((c) => `  ${c.name.padEnd(14)} - ${c.description}`)
        .join("\n");
      return `Available commands:\n${list}`;
    },
  },
  whoami: whoamiCommand,
  ls: lsCommand,
  cd: cdCommand,
  pwd: pwdCommand,
  cat: catCommand,
  skills: skillsCommand,
  projects: projectsCommand,
  experience: experienceCommand,
  certificates: certificatesCommand,
  contact: contactCommand,
  socials: socialsCommand,
  resume: resumeCommand,
  clear: clearCommand,
  history: historyCommand,
  date: dateCommand,
  echo: echoCommand,
  theme: themeCommand,
  neofetch: neofetchCommand,
  sudo: sudoCommand,
  rm: rmCommand,
  exit: exitCommand,
};
