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
                        <span className="skill">Kotlin</span>
                        <span className="skill">Jetpack Compose</span>
                        <span className="skill">Retrofit</span>
                        <span className="skill">Dagger/Hilt</span>
                        <span className="skill">MVVM</span>
                        <span className="skill">Room</span>
                        <span className="skill">KMP</span>
                        <span className="skill">CMP</span>
                        <span className="skill">Ktor</span>
                        <span className="skill">Git / CI/CD</span>
                    </div>
                </div>
            </div>
        </section>
    );
}