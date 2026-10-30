export interface Skill {
    id: string;
    name: string;
    category: "language" | "mobile" | "library" | "tool";
}

export const skills: readonly Skill[] = [
    { id: "kotlin", name: "Kotlin", category: "language" },
    { id: "compose", name: "Jetpack Compose", category: "mobile" },
    { id: "kmp", name: "KMP", category: "mobile" },
    { id: "cmp", name: "CMP", category: "mobile" },
    { id: "ktor", name: "Ktor", category: "library" },
    { id: "retrofit", name: "Retrofit", category: "library" },
    { id: "hilt", name: "Dagger/Hilt", category: "library" },
    { id: "mvvm", name: "MVVM", category: "tool" },
    { id: "room", name: "Room", category: "library" },
    { id: "koin", name: "Koin", category: "library" },
    { id: "kotlin-multiplatform", name: "Kotlin Multiplatform", category: "mobile" },
    { id: "compose-multiplatform", name: "Compose Multiplatform", category: "mobile" },
    { id: "cicd", name: "Git / CI/CD", category: "tool" },
] as const;