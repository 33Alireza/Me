import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";
import { socials } from "@/data/socials";

export default function Social() {
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

  return (
    <section
      id="social"
      className="section reveal"
      style={{ position: "relative", zIndex: 11 }}
    >
      <SectionHeader label="Connect" title="Social" highlight="Profiles" />
      <div className="social-platforms">
        {socials.map((item, index) => (
          <a
            key={item.platform}
            className={`platform-card reveal ${delays[index % delays.length]}`}
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
            <div className="platform-name">{item.platform}</div>
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
