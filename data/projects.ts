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
        id: "towingmate",
        number: "Project 02",
        title: "TowingMate",
        description: "TowingMate (also registered as TowingTask) is an enterprise-grade, multi-platform dispatching and fleet management solution engineered with Kotlin Multiplatform (KMP) and Compose Multiplatform. Designed specifically for towing providers, dispatch centers, drivers, and fleet managers, TowingMate streamlines the end-to-end tow job lifecycle—from instant job creation and automated driver dispatch to real-time interactive mapping, status updates, condition photo capture, driver commission tracking, and comprehensive accounting & invoicing.",
        tags: ["kmp", "cmp", "ktor", "koin", "mvvm"],
        status: "Live",
        featured: true,
        links: {},
        images: [
            "/towingmate.png",
        ],
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
