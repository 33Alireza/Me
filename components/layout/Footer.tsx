import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export default function Footer() {
    const github = socials.find((s) => s.platform === "GitHub")?.url || "https://github.com/33alireza";
    const twitter = socials.find((s) => s.platform === "Twitter / X")?.url || "https://x.com/AlirezaYouDev";

    return (
        <footer style={{position: "relative", zIndex: 11}}>
            <div className="footer-left">
                © 2026 {profile.name}. All rights reserved.
            </div>
            <div className="footer-right">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
            </div>
        </footer>
    );
}