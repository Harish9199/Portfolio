"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  glow?: "green" | "cyan" | "purple" | "none";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
  glow = "none",
}: GlassCardProps) {
  const paddings = { sm: "p-4", md: "p-6", lg: "p-8" };
  const glows = {
    green: "hover:shadow-neon-green",
    cyan: "hover:shadow-neon-cyan",
    purple: "hover:shadow-neon-purple",
    none: "",
  };

  return (
    <motion.div
      className={cn(
        "glass-card rounded-xl",
        paddings[padding],
        hover && "transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]",
        glows[glow],
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
    >
      {children}
    </motion.div>
  );
}
