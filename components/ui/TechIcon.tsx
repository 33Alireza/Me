import React from "react";
import { techIconRegistry } from "@/lib/tech-icons";
import { cn } from "@/lib/cn";

interface TechIconProps {
  iconKey: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TechIcon({ iconKey, className, style }: TechIconProps) {
  const IconComponent = techIconRegistry[iconKey] || techIconRegistry["kotlin"];

  return (
    <IconComponent
      className={cn("w-5 h-5 transition-colors duration-200", className)}
      style={style}
    />
  );
}
