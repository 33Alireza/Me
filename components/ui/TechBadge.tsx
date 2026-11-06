import React from "react";
import TechIcon from "@/components/ui/TechIcon";
import { techBrandColors } from "@/lib/tech-icons";
import { cn } from "@/lib/cn";

interface TechBadgeProps {
  name: string;
  iconKey: string;
  className?: string;
}

export default function TechBadge({
  name,
  iconKey,
  className,
}: TechBadgeProps) {
  const brandColor = techBrandColors[iconKey] || "var(--code-blue-light)";

  return (
    <span
      className={cn(
        "tech-badge group inline-flex items-center gap-2 font-['Space_Mono',monospace] text-xs px-3.5 py-2 border border-[var(--border)] rounded-xl bg-[var(--card)] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-0.5",
        className,
      )}
      style={
        {
          ["--brand-color" as string]: brandColor,
        } as React.CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center text-[var(--brand-color)] transition-colors duration-300"
      >
        <TechIcon iconKey={iconKey} />
      </span>
      <span className="group-hover:text-[var(--text)] transition-colors duration-300">
        {name}
      </span>
    </span>
  );
}
