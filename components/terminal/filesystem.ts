import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { socials } from "@/data/socials";
import { VDirectory } from "./types";

export function createInitialFilesystem(): VDirectory {
  const profileJson = JSON.stringify(
    {
      name: profile.name,
      role: profile.role,
      tagline: profile.tagline,
      email: profile.email,
      availability: profile.availabilityStatus,
      skills: skills.map((s) => s.name),
    },
    null,
    2,
  );

  const skillsText = skills.reduce<Record<string, string[]>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s.name);
    return acc;
  }, {});

  const skillsContent = Object.entries(skillsText)
    .map(([cat, list]) => `[${cat.toUpperCase()}]:\n  - ${list.join("\n  - ")}`)
    .join("\n\n");

  const experienceContent = experiences
    .map(
      (e) =>
        `# ${e.role} at ${e.company}\nPeriod: ${e.period}\n\nBullet Points:\n${e.bulletPoints
          .map((bp) => `- ${bp.replace(/<[^>]*>?/gm, "")}`)
          .join("\n")}\n\nTech Stack: ${e.techTags.join(", ")}`,
    )
    .join("\n\n---\n\n");

  const contactContent = `# Contact Information\nEmail: ${profile.email}\nStatus: ${profile.availabilityStatus}\n\nSocial Profiles:\n${socials
    .map((s) => `- ${s.platform}: ${s.url} (${s.handle})`)
    .join("\n")}`;

  const readmeContent = `# Alireza Yousefzadeh - Portfolio Terminal\n\nWelcome to my interactive portfolio terminal!\nType 'help' to see available commands or 'neofetch' for a quick system summary.\nExplore files using 'ls', 'cd', and 'cat'.`;

  const projectsDir: Record<
    string,
    { name: string; type: "file"; content: string }
  > = {};
  projects.forEach((p) => {
    const fileName = `${p.id}.json`;
    projectsDir[fileName] = {
      name: fileName,
      type: "file",
      content: JSON.stringify(p, null, 2),
    };
  });

  const certsDir: Record<
    string,
    { name: string; type: "file"; content: string }
  > = {};
  certificates.forEach((c) => {
    const fileName = `${c.id}.json`;
    certsDir[fileName] = {
      name: fileName,
      type: "file",
      content: JSON.stringify(c, null, 2),
    };
  });

  return {
    name: "~",
    type: "dir",
    children: {
      "profile.json": {
        name: "profile.json",
        type: "file",
        content: profileJson,
      },
      "skills.txt": {
        name: "skills.txt",
        type: "file",
        content: skillsContent,
      },
      "experience.md": {
        name: "experience.md",
        type: "file",
        content: experienceContent,
      },
      "contact.md": {
        name: "contact.md",
        type: "file",
        content: contactContent,
      },
      "README.md": { name: "README.md", type: "file", content: readmeContent },
      projects: {
        name: "projects",
        type: "dir",
        children: projectsDir,
      },
      certificates: {
        name: "certificates",
        type: "dir",
        children: certsDir,
      },
    },
  };
}

export function resolvePath(
  currentPath: string,
  target: string,
  fs: VDirectory,
): {
  node: VDirectory | { name: string; type: "file"; content: string } | null;
  pathStr: string;
} {
  if (!target || target === "~") {
    return { node: fs, pathStr: "~" };
  }

  const parts =
    target.startsWith("/") || target.startsWith("~")
      ? target.replace(/^~\/?/, "").split("/").filter(Boolean)
      : [
          ...currentPath.replace(/^~\/?/, "").split("/").filter(Boolean),
          ...target.split("/").filter(Boolean),
        ];

  let curr: VDirectory | { name: string; type: "file"; content: string } = fs;
  const resolvedParts: string[] = [];

  for (const p of parts) {
    if (p === ".") continue;
    if (p === "..") {
      if (resolvedParts.length > 0) {
        resolvedParts.pop();
        curr = fs;
        for (const rp of resolvedParts) {
          if (curr.type === "dir" && curr.children[rp]) {
            curr = curr.children[rp] as VDirectory;
          }
        }
      }
      continue;
    }

    if (curr.type === "dir" && curr.children[p]) {
      curr = curr.children[p] as VDirectory;
      resolvedParts.push(p);
    } else {
      return { node: null, pathStr: "" };
    }
  }

  return {
    node: curr,
    pathStr: "~" + (resolvedParts.length ? "/" + resolvedParts.join("/") : ""),
  };
}
