export type SkillCategory = "language" | "mobile" | "library" | "tool";

export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    iconKey: string;
    brandColor?: string;
}

export const skills: readonly Skill[] = [
    // Languages
    { id: "kotlin", name: "Kotlin", category: "language", iconKey: "kotlin", brandColor: "#7F52FF" },
    { id: "swift", name: "Swift", category: "language", iconKey: "swift", brandColor: "#F05138" },
    { id: "typescript", name: "TypeScript", category: "language", iconKey: "typescript", brandColor: "#3178C6" },
    { id: "javascript", name: "JavaScript", category: "language", iconKey: "javascript", brandColor: "#F7DF1E" },

    // Mobile
    { id: "compose", name: "Jetpack Compose", category: "mobile", iconKey: "compose", brandColor: "#4285F4" },
    { id: "kmp", name: "Kotlin Multiplatform", category: "mobile", iconKey: "kmp", brandColor: "#7F52FF" },
    { id: "cmp", name: "Compose Multiplatform", category: "mobile", iconKey: "cmp", brandColor: "#4285F4" },

    // Libraries and architecture
    { id: "ktor", name: "Ktor", category: "library", iconKey: "ktor", brandColor: "#087CFA" },
    { id: "retrofit", name: "Retrofit", category: "library", iconKey: "retrofit", brandColor: "#00E676" },
    { id: "koin", name: "Koin", category: "library", iconKey: "koin", brandColor: "#20A5D8" },
    { id: "hilt", name: "Dagger/Hilt", category: "library", iconKey: "hilt", brandColor: "#4285F4" },
    { id: "room", name: "Room", category: "library", iconKey: "room", brandColor: "#00E676" },
    { id: "mvvm", name: "MVVM", category: "library", iconKey: "mvvm", brandColor: "#00D2FF" },
    { id: "clean-architecture", name: "Clean Architecture", category: "library", iconKey: "clean-architecture", brandColor: "#00D2FF" },
    { id: "nextjs", name: "Next.js", category: "library", iconKey: "nextjs", brandColor: "#F0F4FF" },
    { id: "tailwindcss", name: "Tailwind CSS", category: "library", iconKey: "tailwindcss", brandColor: "#06B6D4" },

    // Tools and platforms
    { id: "git", name: "Git", category: "tool", iconKey: "git", brandColor: "#F05032" },
    { id: "ci-cd", name: "CI/CD", category: "tool", iconKey: "ci-cd", brandColor: "#2088FF" },
    { id: "linux", name: "Linux", category: "tool", iconKey: "linux", brandColor: "#FCC624" },
] as const;