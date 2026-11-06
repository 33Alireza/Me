import React from "react";
import { cn } from "@/lib/cn";
import ViewAllButton from "@/components/ui/ViewAllButton";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  action?: React.ReactNode;
  actionHref?: string;
  actionText?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  action,
  actionHref,
  actionText,
  className,
}: SectionHeaderProps) {
  const resolvedAction =
    action ||
    (actionHref && actionText ? (
      <ViewAllButton href={actionHref}>{actionText}</ViewAllButton>
    ) : null);

  return (
    <div className={cn("section-header", className)}>
      <div>
        <div className="label">{label}</div>
        <h2 className="section-title">
          {title} <span>{highlight}</span>
        </h2>
      </div>
      {resolvedAction && (
        <div className="hidden sm:block">
          {resolvedAction}
        </div>
      )}
    </div>
  );
}