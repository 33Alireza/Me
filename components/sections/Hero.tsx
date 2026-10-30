import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
    const terminalData = {
        name: profile.name,
        role: profile.role,
        skills: ["Kotlin", "Jetpack Compose", "KMP", "CMP", "Ktor", "Retrofit", "Dagger/Hilt", "MVVM"],
        openSourceContributor: true,
        status: profile.availabilityStatus,
    };

    const formattedJson = JSON.stringify(terminalData, null, 2);

    return (
        <section id="hero" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="hero-grid">
                <div>
                    <div className="hero-status">
                        <span className="status-dot"></span>{profile.tagline}
                    </div>
                    <h1 className="hero-name">
                        <span>Software</span>
                        <br/>
                        <span className="filled">Engineer</span>
                        <br/>
                        <span>& Geek</span>
                    </h1>
                    <p className="hero-desc">
                        I build high-quality mobile applications and I love contributing to
                        open-source projects.
                    </p>
                    <div className="hero-ctas">
                        <Button variant="primary" href="#projects">
                            View My Work
                        </Button>
                        <Button variant="ghost" href="#contact">
                            Contact Me
                        </Button>
                    </div>
                </div>
                <div className="parallax-wrap">
                    <div className="terminal">
                        <div className="term-bar">
                            <div className="term-dots">
                                <span className="term-dot"></span>
                                <span className="term-dot"></span>
                                <span className="term-dot"></span>
                            </div>
                            <span className="term-title">alireza@portfolio:~</span>
                        </div>
                        <div className="term-body">
                            <span className="term-line">
                                <span className="term-prompt">~$ </span>
                                <span className="term-key">cat</span> profile.json
                            </span>
                            <span className="term-line">&nbsp;</span>
                            <pre className="text-xs sm:text-sm font-['Space_Mono',monospace] text-[var(--text)] whitespace-pre overflow-x-auto leading-relaxed">
                                {formattedJson}
                            </pre>
                            <span className="term-line">
                                <span className="term-cursor"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}