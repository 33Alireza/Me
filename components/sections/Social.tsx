import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";

export default function Social() {
    const profiles = [
        {
            name: "Instagram",
            handle: "@33allireza",
            url: "https://www.instagram.com/33allireza",
            icon: "fa-brands fa-instagram",
            badge: "Social",
            description: "Follow me for updates, programming tips, and snippets from my daily life.",
            linkText: "Follow me",
            delay: "reveal-delay-1",
        },
        {
            name: "GitHub",
            handle: "33Alireza",
            url: "https://github.com/33Alireza",
            icon: "fa-brands fa-github",
            badge: "Code",
            description: "Check out my open-source projects, repositories, and code contributions.",
            linkText: "View projects",
            delay: "reveal-delay-2",
        },
        {
            name: "Email",
            handle: "alireza.yousefzadeh.dev@gmail.com",
            url: "mailto:alireza.yousefzadeh.dev@gmail.com",
            icon: "fa-regular fa-envelope",
            badge: "Email",
            description: "Send me an email for inquiries, collaborations, or project discussions.",
            linkText: "Send email",
            delay: "reveal-delay-3",
        },
        {
            name: "Twitter / X",
            handle: "@AlirezaYouDev",
            url: "https://x.com/AlirezaYouDev",
            icon: "fa-brands fa-x-twitter",
            badge: "Updates",
            description: "Read my latest thoughts, tech news updates, and development insights.",
            linkText: "Follow me",
            delay: "reveal-delay-1",
        },
        {
            name: "LinkedIn",
            handle: "in/33alireza",
            url: "https://www.linkedin.com/in/33alireza",
            icon: "fa-brands fa-linkedin-in",
            badge: "Professional",
            description: "Connect with me professionally, view my resume, and explore career milestones.",
            linkText: "Connect",
            delay: "reveal-delay-2",
        },
        {
            name: "Telegram",
            handle: "@AlirezaYouDev",
            url: "https://t.me/AlirezaYousefzadehDev",
            icon: "fa-brands fa-telegram",
            badge: "Chat",
            description: "Message me directly on Telegram for quick chats, answers, and queries.",
            linkText: "Message me",
            delay: "reveal-delay-3",
        },
    ];

    return (
        <section id="social" className="section reveal" style={{position: "relative", zIndex: 11}}>
            <SectionHeader label="Connect" title="Social" highlight="Profiles" />
            <div className="social-platforms">
                {profiles.map((item) => (
                    <a
                        key={item.name}
                        className={`platform-card reveal ${item.delay}`}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="platform-top">
                            <div className="platform-icon">
                                <i className={item.icon}></i>
                            </div>
                            <Badge variant="platform">{item.badge}</Badge>
                        </div>
                        <div className="platform-name">{item.name}</div>
                        <div className="platform-handle">{item.handle}</div>
                        <div className="platform-desc">{item.description}</div>
                        <div className="platform-link">
                            {item.linkText} <span className="link-arrow">→</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}