"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/styles/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="text-neon-green font-mono text-sm">&#47;&#47;</span>
        <div className="h-px w-8 bg-gradient-to-r from-neon-green to-transparent" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
        <span className="text-neon-green select-none mr-2 text-2xl md:text-3xl">&gt;</span>
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2 justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-green/50" />
        <div className="w-2 h-2 rounded-full bg-neon-green/50" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-green/50" />
      </div>
    </motion.div>
  );
}
