export interface ProjectItem {
    id: string;
    number: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
}

export const projects: readonly ProjectItem[] = [
    {
        id: "kotlinfinity",
        number: "Project 01",
        title: "KotlinFinity",
        description: "A repository dedicated to learning and mastering Kotlin, covering basics to advanced topics.",
        url: "https://github.com/33Alireza/KotlinFinity",
        tags: ["GitHub Repository"],
    },
    {
        id: "mobile-dev-roadmap",
        number: "Project 02",
        title: "Mobile Dev Roadmap",
        description: "A comprehensive roadmap for mobile application development, covering Android and iOS platforms.",
        url: "https://github.com/33Alireza/MobileDevRoadmap",
        tags: ["GitHub Repository"],
    },
    {
        id: "code-hello",
        number: "Project 03",
        title: "CodeHello",
        description: "A collection of \"Hello World\" programs in various programming languages, showcasing syntax diversity.",
        url: "https://github.com/33Alireza/CodeHello",
        tags: ["GitHub Repository"],
    },
] as const;