"use client";

import { motion } from "framer-motion";
import TechBadge from "./TechBadge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  color: string;
  index: number;
}

export default function TimelineItem({
  title,
  company,
  location,
  startDate,
  endDate,
  current,
  description,
  highlights,
  technologies,
  color,
  index,
}: TimelineItemProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-[5.5px] ring-4 ring-terminal z-10"
        style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}50` }}
      />

      {/* Content card */}
      <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold font-mono text-text-primary">{title}</h3>
            <p className="text-neon-cyan text-sm font-mono">
              {company}{" "}
              <span className="text-text-muted">• {location}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-xs font-mono">
              {startDate} — {endDate}
            </span>
            {current && (
              <span className="px-2 py-0.5 bg-neon-green/10 text-neon-green text-xs font-mono rounded-full border border-neon-green/20">
                Current
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 font-sans">{description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary font-sans">
              <span className="text-neon-green mt-1 text-xs">▹</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
