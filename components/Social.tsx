export default function Social() {
    return (
        <section id="social" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="section-header">
                <div>
                    <div className="label">Connect</div>
                    <h2 className="section-title">
                        Social <span>Profiles</span>
                    </h2>
                </div>
            </div>
            <div className="social-platforms">
                <a
                    className="platform-card reveal reveal-delay-1"
                    href="https://www.instagram.com/33allireza"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="platform-top">
                        <div className="platform-icon">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <span className="platform-badge">Social</span>
                    </div>
                    <div className="platform-name">Instagram</div>
                    <div className="platform-handle">@33allireza</div>
                    <div className="platform-desc">
                        Follow me for updates, programming tips, and snippets from my
                        daily life.
                    </div>
                    <div className="platform-link">Follow me <span className="link-arrow">→</span></div>
                </a>

                <a
                    className="platform-card reveal reveal-delay-2"
                    href="https://github.com/33Alireza"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="platform-top">
                        <div className="platform-icon">
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <span className="platform-badge">Code</span>
                    </div>
                    <div className="platform-name">GitHub</div>
                    <div className="platform-handle">33Alireza</div>
                    <div className="platform-desc">
                        Check out my open-source projects, repositories, and code
                        contributions.
                    </div>
                    <div className="platform-link">View projects <span className="link-arrow">→</span></div>
                </a>

                <a
                    className="platform-card reveal reveal-delay-3"
                    href="mailto:alireza.yousefzadeh.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="platform-top">
                        <div className="platform-icon">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <span className="platform-badge">Email</span>
                    </div>
                    <div className="platform-name">Email</div>
                    <div className="platform-handle">
                        alireza.yousefzadeh.dev@gmail.com
                    </div>
                    <div className="platform-desc">
                        Send me an email for inquiries, collaborations, or project
                        discussions.
                    </div>
                    <div className="platform-link">Send email <span className="link-arrow">→</span></div>
                </a>

                <a
                    className="platform-card reveal reveal-delay-1"
                    href="https://x.com/AlirezaYouDev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="platform-top">
                        <div className="platform-icon">
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>
                        <span className="platform-badge">Updates</span>
                    </div>
                    <div className="platform-name">Twitter / X</div>
                    <div className="platform-handle">@AlirezaYouDev</div>
                    <div className="platform-desc">
                        Read my latest thoughts, tech news updates, and development
                        insights.
                    </div>
                    <div className="platform-link">Follow me <span className="link-arrow">→</span></div>
                </a>

                <a
                    className="platform-card reveal reveal-delay-2"
                    href="https://www.linkedin.com/in/33alireza"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="platform-top">
                        <div className="platform-icon">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <span className="platform-badge">Professional</span>
                    </div>
                    <div className="platform-name">LinkedIn</div>
                    <div className="platform-handle">in/33alireza</div>
                    <div className="platform-desc">
                        Connect with me professionally, view my resume, and explore career
                        milestones.
                    </div>
                    <div className="platform-link">Connect <span className="link-arrow">→</span></div>
                </a>

                <a
                    className="platform-card reveal reveal-delay-3"
                    href="https://t.me/AlirezaYousefzadehDev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="platform-top">
                        <div className="platform-icon">
                            <i className="fa-brands fa-telegram"></i>
                        </div>
                        <span className="platform-badge">Chat</span>
                    </div>
                    <div className="platform-name">Telegram</div>
                    <div className="platform-handle">@AlirezaYouDev</div>
                    <div className="platform-desc">
                        Message me directly on Telegram for quick chats, answers, and
                        queries.
                    </div>
                    <div className="platform-link">Message me <span className="link-arrow">→</span></div>
                </a>
            </div>
        </section>
    );
}