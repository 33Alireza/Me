export default function Projects() {
    return (
        <section id="projects" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="section-header">
                <div>
                    <div className="label">Projects</div>
                    <h2 className="section-title">
                        Featured <span>Projects</span>
                    </h2>
                </div>
                <a
                    className="view-all"
                    href="https://github.com/33alireza"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View All on GitHub
                </a>
            </div>
            <div className="projects-grid">
                <a
                    className="proj-card reveal reveal-delay-1"
                    href="https://github.com/33Alireza/KotlinFinity"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="proj-number">Project 01</div>
                    <div className="proj-title">KotlinFinity</div>
                    <div className="proj-desc">
                        A repository dedicated to learning and mastering Kotlin, covering
                        basics to advanced topics.
                    </div>
                    <div className="proj-footer">
                        <span className="proj-tag">GitHub Repository</span>
                    </div>
                </a>
                <a
                    className="proj-card reveal reveal-delay-2"
                    href="https://github.com/33Alireza/MobileDevRoadmap"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="proj-number">Project 02</div>
                    <div className="proj-title">Mobile Dev Roadmap</div>
                    <div className="proj-desc">
                        A comprehensive roadmap for mobile application development,
                        covering Android and iOS platforms.
                    </div>
                    <div className="proj-footer">
                        <span className="proj-tag">GitHub Repository</span>
                    </div>
                </a>
                <a
                    className="proj-card reveal reveal-delay-3"
                    href="https://github.com/33Alireza/CodeHello"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="proj-number">Project 03</div>
                    <div className="proj-title">CodeHello</div>
                    <div className="proj-desc">
                        A collection of &quot;Hello World&quot; programs in various
                        programming languages, showcasing syntax diversity.
                    </div>
                    <div className="proj-footer">
                        <span className="proj-tag">GitHub Repository</span>
                    </div>
                </a>
            </div>
        </section>
    );
}