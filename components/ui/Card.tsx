import React from "react";
import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export default function Card({
  as = "div",
  href,
  target,
  rel,
  children,
  className,
  ...props
}: CardProps) {
  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}
