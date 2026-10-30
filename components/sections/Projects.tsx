import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

export default function Projects() {
    const githubSocial = socials.find((s) => s.platform === "GitHub");
    const githubUrl = githubSocial ? githubSocial.url : "https://github.com/33alireza";

    const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

    return (
        <section id="projects" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <SectionHeader
                label="Projects"
                title="Featured"
                highlight="Projects"
                actionHref={githubUrl}
                actionText="View All on GitHub"
            />
            <div className="projects-grid">
                {projects.map((p, index) => (
                    <a
                        key={p.id}
                        className={`proj-card reveal ${delays[index % delays.length]}`}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="proj-number">{p.number}</div>
                        <div className="proj-title">{p.title}</div>
                        <div className="proj-desc">{p.description}</div>
                        <div className="proj-footer">
                            <Badge variant="proj">{p.tags[0]}</Badge>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}