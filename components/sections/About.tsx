import TechBadge from "@/components/ui/TechBadge";
import { profile } from "@/data/profile";
import { skills, SkillCategory } from "@/data/skills";

export default function About() {
    const categoryLabels: Record<SkillCategory, string> = {
        language: "Languages",
        mobile: "Mobile",
        library: "Libraries & Architecture",
        tool: "Tools & Platforms",
    };

    const categories: SkillCategory[] = ["language", "mobile", "library", "tool"];

    return (
        <section id="about" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="space-y-12">
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
                        <div className="label">Overview</div>
                        {profile.bioParagraphs.map((paragraph, index) => (
                            <p key={index} className="about-text" dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                    </div>
                </div>

                {/* Tech Stack Grid */}
                <div className="pt-6 border-t border-[var(--border)]">
                    <div className="label mb-6">Tech Stack & Expertise</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat) => {
                            const catSkills = skills.filter((s) => s.category === cat);
                            if (catSkills.length === 0) return null;
                            return (
                                <div key={cat} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 backdrop-blur-[10px]">
                                    <h4 className="font-['Space_Mono',monospace] text-xs uppercase tracking-wider text-[var(--code-blue-light)] mb-4">
                                        {categoryLabels[cat]}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {catSkills.map((skill) => (
                                            <TechBadge key={skill.id} name={skill.name} iconKey={skill.iconKey} />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}