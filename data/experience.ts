export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    bulletPoints: string[];
    techTags: string[];
}

export const experiences: readonly ExperienceItem[] = [
    {
        role: "Mobile Developer",
        company: "Mahan Informatic Inc.",
        period: "2026 – Present",
        bulletPoints: [
            "Architected and developed robust multi-module cross-platform applications using <strong>Kotlin Multiplatform (KMP)</strong> for both Android & iOS platforms.",
            "Implemented <strong>Clean Architecture</strong> and <strong>MVVM</strong> design patterns for scalable state management and clean separation of concerns.",
            "Successfully published and maintained production-grade applications on Google Play Store and Apple App Store, including <strong>TowingMate Android</strong> & <strong>TowingMate iOS</strong>.",
        ],
        techTags: [
            "Kotlin",
            "Kotlin Multiplatform",
            "Compose Multiplatform",
            "Ktor",
            "Koin",
            "Room",
            "MVVM",
            "CI/CD",
        ],
    },
] as const;
