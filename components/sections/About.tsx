import Badge from "@/components/ui/Badge";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export default function About() {
    return (
        <section id="about" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="about-layout">
                <div>
                    <div className="label">My Journey</div>
                    <div className="about-stats">
                        <div className="stat-card reveal reveal-delay-1">
                            <div className="stat-num">1+</div>
                            <div className="stat-label">Years of Experience</div>
                        </div>
                        <div className="stat-card reveal reveal-delay-2">
                            <div className="stat-num">5+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card reveal reveal-delay-3">
                            <div className="stat-num">10+</div>
                            <div className="stat-label">Open Source Contributions</div>
                        </div>
                        <div className="stat-card reveal">
                            <div className="stat-num">1</div>
                            <div className="stat-label">Passion for Coding</div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="about-text" dangerouslySetInnerHTML={{ __html: profile.bioParagraphs[0] }} />
                    <p className="about-text" dangerouslySetInnerHTML={{ __html: profile.bioParagraphs[1] }} />
                    <div className="skill-list">
                        {skills.map((skill) => (
                            <Badge key={skill.id} variant="skill">{skill.name}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
