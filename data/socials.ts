export interface SocialItem {
  platform: string;
  handle: string;
  url: string;
  description: string;
  priority: "primary" | "secondary";
  icon: string;
  badge: string;
  linkText: string;
}

export const socials: readonly SocialItem[] = [
  {
    platform: "Instagram",
    handle: "@33allireza",
    url: "https://www.instagram.com/33allireza",
    description:
      "Follow me for updates, programming tips, and snippets from my daily life.",
    priority: "secondary",
    icon: "fa-brands fa-instagram",
    badge: "Social",
    linkText: "Follow me",
  },
  {
    platform: "GitHub",
    handle: "33Alireza",
    url: "https://github.com/33alireza",
    description:
      "Check out my open-source projects, repositories, and code contributions.",
    priority: "primary",
    icon: "fa-brands fa-github",
    badge: "Code",
    linkText: "View projects",
  },
  {
    platform: "Email",
    handle: "alireza.yousefzadeh.dev@gmail.com",
    url: "mailto:alireza.yousefzadeh.dev@gmail.com",
    description:
      "Send me an email for inquiries, collaborations, or project discussions.",
    priority: "primary",
    icon: "fa-regular fa-envelope",
    badge: "Email",
    linkText: "Send email",
  },
  {
    platform: "Twitter / X",
    handle: "@AlirezaYouDev",
    url: "https://x.com/AlirezaYouDev",
    description:
      "Read my latest thoughts, tech news updates, and development insights.",
    priority: "primary",
    icon: "fa-brands fa-x-twitter",
    badge: "Updates",
    linkText: "Follow me",
  },
  {
    platform: "LinkedIn",
    handle: "in/33alireza",
    url: "https://www.linkedin.com/in/33alireza",
    description:
      "Connect with me professionally, view my resume, and explore career milestones.",
    priority: "primary",
    icon: "fa-brands fa-linkedin-in",
    badge: "Professional",
    linkText: "Connect",
  },
  {
    platform: "Telegram",
    handle: "@AlirezaYouDev",
    url: "https://t.me/AlirezaYousefzadehDev",
    description:
      "Message me directly on Telegram for quick chats, answers, and queries.",
    priority: "secondary",
    icon: "fa-brands fa-telegram",
    badge: "Chat",
    linkText: "Message me",
  },
] as const;
