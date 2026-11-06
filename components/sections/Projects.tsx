import SectionHeader from "@/components/layout/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import ProjectImageGallery from "@/components/ui/ProjectImageGallery";
import ViewAllButton from "@/components/ui/ViewAllButton";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

export default function Projects() {
  const githubSocial = socials.find((s) => s.platform === "GitHub");
  const githubUrl = githubSocial
    ? githubSocial.url
    : "https://github.com/33alireza";

  const featuredProjects = projects.filter((p) => p.featured);
  const compactProjects = projects.filter((p) => !p.featured);

  const getInitials = (title: string) => {
    return title
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section
      id="projects"
      className="section reveal"
      style={{ position: "relative", zIndex: 11 }}
    >
      <SectionHeader
        label="Projects"
        title="Featured"
        highlight="Projects"
        action={<ViewAllButton href={githubUrl} />}
      />

      {/* Featured Projects Grid (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {featuredProjects.map((p, index) => {
          const images = p.images || (p.image ? [p.image] : []);

          return (
            <div
              key={p.id}
              className={`group bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border-hover)] rounded-2xl overflow-hidden backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-8 reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div>
                {/* Image Gallery or Custom Code Preview Window for Portfolio */}
                {images.length > 0 ? (
                  <ProjectImageGallery images={images} title={p.title} />
                ) : (
                  <div className="relative w-full h-60 sm:h-64 rounded-xl overflow-hidden mb-6 bg-[var(--card)] border border-[var(--border)] flex flex-col justify-between p-5 font-['Space_Mono',monospace] shadow-inner group/code">
                    {/* Browser / Terminal Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/85"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/85"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500/85"></span>
                      </div>
                      <span className="text-[11px] text-[var(--text-muted)] tracking-wider">
                        portfolio.tsx
                      </span>
                    </div>
                    {/* Code Body */}
                    <div className="py-2 text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                      <div>
                        <span className="text-[var(--code-blue-light)]">
                          import
                        </span>{" "}
                        React{" "}
                        <span className="text-[var(--code-blue-light)]">
                          from
                        </span>{" "}
                        &quot;react&quot;;
                      </div>
                      <div className="text-[var(--text-muted)]">
                        {/* Next.js + TS + Tailwind */}
                      </div>
                      <div>
                        <span className="text-[var(--code-blue-light)]">
                          export default function
                        </span>{" "}
                        <span className="text-yellow-400">Portfolio</span>()
                        &#123;
                      </div>
                      <div className="pl-4 text-[var(--text-muted)]">
                        &nbsp;&nbsp;return &lt;
                        <span className="text-[var(--code-blue-light)]">
                          App
                        </span>{" "}
                        /&gt;;
                      </div>
                      <div>&#125;</div>
                    </div>
                    <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                      <span>⚡ App Router</span>
                      <span className="text-[var(--code-blue-light)]">
                        GitHub Pages
                      </span>
                    </div>
                  </div>
                )}

                {p.status && (
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-['Space_Mono',monospace] text-xs text-[var(--code-blue-light)] tracking-wider">
                      {p.number}
                    </span>
                    <span className="font-['Space_Mono',monospace] text-[10px] uppercase tracking-wider bg-[var(--card)] border border-[var(--border)] text-[var(--code-blue-light)] px-3 py-1 rounded-full">
                      {p.status}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] uppercase tracking-tight mb-3">
                  {p.title}
                </h3>

                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((tagId) => (
                    <TechBadge key={tagId} name={tagId} iconKey={tagId} />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)] flex-wrap">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="btn-primary py-2.5 px-4 text-xs min-h-[44px] flex items-center justify-center"
                  >
                    <i className="fa-brands fa-github text-sm"></i> GitHub
                  </a>
                )}
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} Live Demo`}
                    className="btn-ghost py-2.5 px-4 text-xs min-h-[44px] flex items-center justify-center"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>{" "}
                    Live
                  </a>
                )}
                {p.links.store && (
                  <a
                    href={p.links.store}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on Store`}
                    className="btn-ghost py-2.5 px-4 text-xs min-h-[44px] flex items-center justify-center"
                  >
                    <i className="fa-solid fa-store text-xs"></i> Store
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Compact Projects Grid (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {compactProjects.map((p, index) => {
          const initials = getInitials(p.title);
          return (
            <div
              key={p.id}
              className={`group bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border-hover)] rounded-2xl p-6 backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Space_Mono',monospace] text-xs text-[var(--code-blue-light)] tracking-wider">
                    {p.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[var(--code-blue)]/10 border border-[var(--border)] flex items-center justify-center font-['Space_Mono',monospace] text-xs font-bold text-[var(--code-blue-light)]">
                    {initials}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--text)] uppercase tracking-tight mb-2">
                  {p.title}
                </h3>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tagId) => (
                    <TechBadge key={tagId} name={tagId} iconKey={tagId} />
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="inline-flex items-center gap-2 font-['Space_Mono',monospace] text-xs text-[var(--code-blue-light)] hover:text-[var(--text)] transition-colors min-h-[44px] py-2"
                  >
                    <i className="fa-brands fa-github"></i> View Repository →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View All on GitHub button (shown under 640px only) */}
      <div className="mt-8 sm:hidden flex justify-center w-full">
        <ViewAllButton
          href={githubUrl}
          className="w-full justify-center min-h-[44px]"
        />
      </div>
    </section>
  );
}
