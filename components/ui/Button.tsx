import React from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const classNameMap = {
    primary: "btn-primary",
    ghost: "btn-ghost",
  };

  return (
    <a className={cn(classNameMap[variant], className)} {...props}>
      {children}
    </a>
  );
}
