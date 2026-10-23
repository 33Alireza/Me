export default function Experience() {
    return (
        <section id="experience" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="section-header">
                <div>
                    <div className="label">Career</div>
                    <h2 className="section-title">
                        Work <span>Experience</span>
                    </h2>
                </div>
            </div>
            <div className="experience-container">
                <div className="exp-card">
                    <div className="exp-header">
                        <div>
                            <h3 className="exp-title">Mobile Developer</h3>
                            <div className="exp-company">Mahan Informatic Inc.</div>
                        </div>
                        <div className="exp-period">2026 – Present</div>
                    </div>
                    <ul className="exp-list">
                        <li>
                            Architected and developed robust multi-module cross-platform applications using <strong>Kotlin
                            Multiplatform (KMP)</strong> for both Android & iOS platforms.
                        </li>
                        <li>
                            Implemented <strong>Clean Architecture</strong> and <strong>MVVM</strong> design patterns
                            for scalable state management and clean separation of concerns.
                        </li>
                        <li>
                            Successfully published and maintained production-grade applications on Google Play Store and
                            Apple App Store, including <strong>TowingMate Android</strong> & <strong>TowingMate
                            iOS</strong>.
                        </li>
                    </ul>
                    <div className="skill-list" style={{marginTop: "2.5rem"}}>
                        <span className="skill">Kotlin</span>
                        <span className="skill">Kotlin Multiplatform</span>
                        <span className="skill">Compose Multiplatform</span>
                        <span className="skill">Ktor</span>
                        <span className="skill">Koin</span>
                        <span className="skill">Room</span>
                        <span className="skill">MVVM</span>
                        <span className="skill">CI/CD</span>
                    </div>
                </div>
            </div>
        </section>
    );
}