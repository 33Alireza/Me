export type Theme = "dark" | "light";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  url: string;
  tag: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}
