"use client";

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
  variant?: "default" | "green" | "cyan" | "purple";
}

export default function TechBadge({ name, className, variant = "default" }: TechBadgeProps) {
  const variants = {
    default: "bg-white/5 text-text-secondary border-white/10 hover:border-neon-green/30 hover:text-neon-green",
    green: "bg-neon-green/5 text-neon-green border-neon-green/20",
    cyan: "bg-neon-cyan/5 text-neon-cyan border-neon-cyan/20",
    purple: "bg-neon-purple/5 text-neon-purple border-neon-purple/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {name}
    </span>
  );
}
