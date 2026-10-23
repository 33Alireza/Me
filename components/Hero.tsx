export default function Hero() {
    return (
        <section id="hero" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="hero-grid">
                <div>
                    <div className="hero-status">
                        <span className="status-dot"></span>Making scalable mobile applications
                    </div>
                    <h1 className="hero-name">
                        <span>Software</span>
                        <br/>
                        <span className="filled">Engineer</span>
                        <br/>
                        <span>& Geek</span>
                    </h1>
                    <p className="hero-desc">
                        I build high-quality mobile applications and i love contributing to
                        open-source projects.
                    </p>
                    <div className="hero-ctas">
                        <a className="btn-primary" href="#projects">
                            View My Work
                        </a>
                        <a className="btn-ghost" href="#contact">
                            Contact Me
                        </a>
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
                            <span className="term-line">
                <span className="term-brace">&#123;</span>
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;<span className="term-key">&quot;name&quot;</span>:{" "}
                                <span className="term-str">&quot;Alireza Yousefzadeh&quot;</span>,
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;<span className="term-key">&quot;role&quot;</span>:{" "}
                                <span className="term-str">&quot;Software Engineer&quot;</span>,
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;<span className="term-key">&quot;skills&quot;</span>:{" "}
                                <span className="term-brace">&#91;</span>
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="term-str">&quot;Kotlin&quot;</span>,{" "}
                                <span className="term-str">&quot;Jetpack Compose&quot;</span>,
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="term-str">&quot;KMP&quot;</span>,{" "}
                                <span className="term-str">&quot;CMP&quot;</span>
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="term-str">&quot;Ktor&quot;</span>,{" "}
                                <span className="term-str">&quot;Retrofit&quot;</span>,{" "}
                                <span className="term-str">&quot;Dagger/Hilt&quot;</span>,{" "}
                                <span className="term-str">&quot;MVVM&quot;</span>,{" "}
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;<span className="term-brace">&#93;</span>,
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;
                                <span className="term-key">&quot;openSourceContributor&quot;</span>:{" "}
                                <span className="term-val">true</span>,
              </span>
                            <span className="term-line">
                &nbsp;&nbsp;<span className="term-key">&quot;status&quot;</span>:{" "}
                                <span className="term-str">&quot;Open for freelance&quot;</span>
              </span>
                            <span className="term-line">
                <span className="term-brace">&#125;</span>
                <span className="term-cursor"></span>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}