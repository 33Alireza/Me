import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export default function Contact() {
    const contactSocials = socials.filter((s) => ["GitHub", "Twitter / X", "LinkedIn"].includes(s.platform));

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
                        className="contact-email-link min-h-[44px] flex items-center justify-center"
                        href={`mailto:${profile.email}`}
                    >
                        Send an Email
                    </a>
                    <div className="socials-grid">
                        {contactSocials.map((s) => {
                            const displayName = s.platform === "Twitter / X" ? "Twitter" : s.platform;
                            return (
                                <a
                                    key={s.platform}
                                    className="social-pill min-h-[44px] flex items-center justify-center"
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {displayName}
                                </a>
                            );
                        })}
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
                                &quot;{profile.email}&quot;
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
                                &quot;{profile.availabilityStatus}&quot;
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
