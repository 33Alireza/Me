import { CommandDefinition } from "../types";

export const themeCommand: CommandDefinition = {
    name: "theme",
    description: "Toggle or set theme (dark / light)",
    run: (args) => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = args[0] === "light" ? "light" : args[0] === "dark" ? "dark" : currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        return `Theme switched to ${newTheme} mode.`;
    },
};