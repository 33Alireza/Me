import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/data/experience";

export default function Experience() {
    const exp = experiences[0];

    return (
        <section id="experience" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <SectionHeader label="Career" title="Work" highlight="Experience" />
            <div className="experience-container">
                <div className="exp-card">
                    <div className="exp-header">
                        <div>
                            <h3 className="exp-title">{exp.role}</h3>
                            <div className="exp-company">{exp.company}</div>
                        </div>
                        <div className="exp-period">{exp.period}</div>
                    </div>
                    <ul className="exp-list">
                        {exp.bulletPoints.map((bp, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: bp }} />
                        ))}
                    </ul>
                    <div className="skill-list" style={{marginTop: "2.5rem"}}>
                        {exp.techTags.map((tag) => (
                            <Badge key={tag} variant="skill">{tag}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
