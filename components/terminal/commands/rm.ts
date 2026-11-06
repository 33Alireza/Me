import { CommandDefinition } from "../types";

export const rmCommand: CommandDefinition = {
  name: "rm",
  description: "Remove files or directories",
  run: (args) => {
    if (
      args.join(" ").includes("-rf") &&
      (args.join(" ").includes("/") || args.join(" ").includes("~"))
    ) {
      return "🚨 Nice try! Refusing to destroy portfolio file system. 🔥";
    }
    return `rm: cannot remove '${args.join(" ")}': No such file or directory`;
  },
};
