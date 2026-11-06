import React from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "skill" | "platform" | "proj";
  className?: string;
}

export default function Badge({
  children,
  variant = "skill",
  className,
}: BadgeProps) {
  const variantMap = {
    skill: "skill",
    platform: "platform-badge",
    proj: "proj-tag",
  };

  return <span className={cn(variantMap[variant], className)}>{children}</span>;
}
