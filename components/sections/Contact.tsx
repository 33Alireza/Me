export default function Contact() {
    const socials = [
        { name: "GitHub", url: "https://github.com/33alireza" },
        { name: "Twitter", url: "https://x.com/AlirezaYouDev" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/33alireza" },
    ];

    return (
        <section id="contact" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <div className="contact-layout">
                <div>
                    <div className="label">Get In Touch</div>
                    <h2 className="contact-big">
                        Let&apos;s <span>Work Together</span>
                    </h2>
                    <p className="contact-desc">
                        Have a project in mind or want to collaborate? Feel free to reach
                        out to me through any of the channels below.
                    </p>
                    <a
                        className="contact-email-link"
                        href="mailto:alireza.yousefzadeh.dev@gmail.com"
                    >
                        Send an Email
                    </a>
                    <div className="socials-grid">
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                className="social-pill"
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="contact-illustration">
                        <div style={{color: "rgba(255,255,255,0.25)"}}>
                            {/* Contact Information */}
                        </div>
                        &nbsp;
                        <div>
                            <span style={{color: "var(--code-blue-light)"}}>const</span>{" "}
                            contact = <span className="term-brace">&#123;</span>
                        </div>
                        <div>
                            &nbsp;&nbsp;email:{" "}
                            <span style={{color: "#A4BFFF"}}>
                &quot;alireza.yousefzadeh.dev@gmail.com&quot;
              </span>
                            ,
                        </div>
                        <div>
                            &nbsp;&nbsp;status:{" "}
                            <span
                                style={{
                                    color: "var(--text)",
                                    textShadow: "0 0 10px rgba(0,210,255,0.4)",
                                }}
                            >
                &quot;Open for opportunities&quot;
              </span>
                        </div>
                        <div>
                            <span className="term-brace">&#125;</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}