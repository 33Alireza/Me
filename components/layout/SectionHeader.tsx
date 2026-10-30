import React from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  actionHref?: string;
  actionText?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  actionHref,
  actionText,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("section-header", className)}>
      <div>
        <div className="label">{label}</div>
        <h2 className="section-title">
          {title} <span>{highlight}</span>
        </h2>
      </div>
      {actionHref && actionText && (
        <a
          className="view-all"
          href={actionHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {actionText}
        </a>
      )}
    </div>
  );
}