export interface ProjectLinkItem {
    github?: string;
    live?: string;
    store?: string;
}

export interface ProjectItem {
    id: string;
    number: string;
    title: string;
    description: string;
    tags: string[];
    status?: string;
    featured: boolean;
    links: ProjectLinkItem;
    image?: string;
    images?: string[];
}

export const projects: readonly ProjectItem[] = [
    {
        id: "movino",
        number: "Project 01",
        title: "Movino",
        description: "Movino is a modern, responsive Android application for browsing, searching, and discovering movies. Built using 100% Jetpack Compose, MVVM Architecture, Kotlin Coroutines & Flow, Dagger Hilt, and Ktor Client, Movino demonstrates Modern Android Development (MAD) best practices and type-safe navigation.",
        tags: ["kotlin", "compose", "ktor", "hilt", "mvvm"],
        status: "In progress",
        featured: true,
        links: {
            github: "https://github.com/33Alireza/Movino",
        },
        images: [
            "/movino.png",
        ],
    },
    {
        id: "me",
        number: "Project 02",
        title: "Me (Portfolio)",
        description: "Personal portfolio built with Next.js, TypeScript and Tailwind CSS.",
        tags: ["nextjs", "typescript", "tailwindcss"],
        status: "Completed",
        featured: true,
        links: {
            github: "https://github.com/33Alireza/Me",
            live: "https://33alireza.github.io/Me/",
        },
    },
    {
        id: "kotlinfinity",
        number: "Project 03",
        title: "KotlinFinity",
        description: "A repository dedicated to learning and mastering Kotlin, covering basics to advanced topics.",
        tags: ["kotlin"],
        featured: false,
        links: {
            github: "https://github.com/33Alireza/KotlinFinity",
        },
    },
    {
        id: "mobile-dev-roadmap",
        number: "Project 04",
        title: "Mobile Dev Roadmap",
        description: "A comprehensive roadmap for mobile application development, covering Android and iOS platforms.",
        tags: ["kotlin", "swift"],
        featured: false,
        links: {
            github: "https://github.com/33Alireza/MobileDevRoadmap",
        },
    },
    {
        id: "code-hello",
        number: "Project 05",
        title: "CodeHello",
        description: "A collection of \"Hello World\" programs in various programming languages, showcasing syntax diversity.",
        tags: ["javascript", "typescript", "kotlin"],
        featured: false,
        links: {
            github: "https://github.com/33Alireza/CodeHello",
        },
    },
] as const;
