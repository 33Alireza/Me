import React from "react";
import { cn } from "@/lib/cn";

interface ViewAllButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: React.ReactNode;
}

export default function ViewAllButton({
  href,
  children = "View All on GitHub",
  className,
  ...props
}: ViewAllButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "view-all inline-flex items-center justify-center min-h-[44px] px-6 py-3 text-xs sm:text-sm font-['Space_Mono',monospace]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
