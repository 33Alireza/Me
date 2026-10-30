import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";

export default function Projects() {
    const projects = [
        {
            number: "Project 01",
            title: "KotlinFinity",
            description: "A repository dedicated to learning and mastering Kotlin, covering basics to advanced topics.",
            url: "https://github.com/33Alireza/KotlinFinity",
            delay: "reveal-delay-1",
        },
        {
            number: "Project 02",
            title: "Mobile Dev Roadmap",
            description: "A comprehensive roadmap for mobile application development, covering Android and iOS platforms.",
            url: "https://github.com/33Alireza/MobileDevRoadmap",
            delay: "reveal-delay-2",
        },
        {
            number: "Project 03",
            title: "CodeHello",
            description: "A collection of \"Hello World\" programs in various programming languages, showcasing syntax diversity.",
            url: "https://github.com/33Alireza/CodeHello",
            delay: "reveal-delay-3",
        },
    ];

    return (
        <section id="projects" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <SectionHeader
                label="Projects"
                title="Featured"
                highlight="Projects"
                actionHref="https://github.com/33alireza"
                actionText="View All on GitHub"
            />
            <div className="projects-grid">
                {projects.map((p) => (
                    <a
                        key={p.title}
                        className={`proj-card reveal ${p.delay}`}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="proj-number">{p.number}</div>
                        <div className="proj-title">{p.title}</div>
                        <div className="proj-desc">{p.description}</div>
                        <div className="proj-footer">
                            <Badge variant="proj">GitHub Repository</Badge>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}