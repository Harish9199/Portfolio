"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  className?: string;
}

export default function SkillBar({ name, level, color, className }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-text-primary text-sm font-mono">{name}</span>
        <span className="text-text-muted text-xs font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: color
              ? `linear-gradient(90deg, ${color}88, ${color})`
              : "linear-gradient(90deg, #00ff8888, #00ff88)",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute right-0 top-0 w-1 h-full bg-white/30 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
