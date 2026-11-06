import fs from "fs";
import path from "path";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import Terminal from "@/components/terminal/Terminal";

export default function Hero() {
  const hasResume = fs.existsSync(
    path.join(process.cwd(), "public/resume.pdf"),
  );
  const isProd = process.env.NODE_ENV === "production";
  const resumeHref = isProd ? "/Me/resume.pdf" : "/resume.pdf";

  return (
    <section
      id="hero"
      className="section reveal"
      style={{ position: "relative", zIndex: 11 }}
    >
      <div className="hero-grid">
        <div>
          <div className="hero-status">
            <span className="status-dot"></span>
            {profile.tagline}
          </div>
          <h1 className="hero-name">
            <span>Software</span>
            <br />
            <span className="filled">Engineer</span>
            <br />
            <span>& Geek</span>
          </h1>
          <p className="hero-desc">
            I build high-quality mobile applications and I love contributing to
            open-source projects.
          </p>
          <div className="hero-ctas flex flex-wrap gap-4">
            <Button variant="primary" href="#projects">
              View My Work
            </Button>
            <Button variant="ghost" href="#contact">
              Contact Me
            </Button>
            {hasResume && (
              <Button
                variant="ghost"
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <i className="fa-solid fa-file-pdf text-xs"></i>
              </Button>
            )}
          </div>
        </div>
        <div className="parallax-wrap">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
