import Badge from "@/components/ui/Badge";

export default function About() {
    const skills = [
        "Kotlin",
        "Jetpack Compose",
        "Retrofit",
        "Dagger/Hilt",
        "MVVM",
        "Room",
        "KMP",
        "CMP",
        "Ktor",
        "Git / CI/CD",
    ];

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
                            <div className="stat-label">Open Source Contributes</div>
                        </div>
                        <div className="stat-card reveal">
                            <div className="stat-num">1</div>
                            <div className="stat-label">Passion for Coding</div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="about-text">
                        I am a passionate <strong>software engineer</strong> with experience
                        building mobile applications. I enjoy solving complex
                        problems and creating elegant solutions.
                    </p>
                    <p className="about-text">
                        When I&apos;m not coding, you can find me exploring new
                        technologies or contributing to{" "}
                        <strong>open-source projects</strong> on GitHub.
                    </p>
                    <div className="skill-list">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="skill">{skill}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}