"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";
import TechBadge from "./TechBadge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <TiltCard className="h-full" glowColor="rgba(0, 255, 136, 0.1)">
        <div className="p-6 flex flex-col h-full">
          {/* Category & Links */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20">
              {project.category}
            </span>
            <div className="flex items-center gap-3">
              {project.links.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-neon-green transition-colors"
                  aria-label={link.label}
                >
                  {link.type === "github" ? (
                    <Github size={18} />
                  ) : (
                    <ExternalLink size={18} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="w-full h-40 rounded-lg mb-4 bg-gradient-to-br from-neon-green/5 via-neon-cyan/5 to-neon-purple/5 border border-white/5 flex items-center justify-center">
            <span className="text-4xl opacity-30">
              {project.category === "AI/ML" ? "🧠" : project.category === "Full-Stack" ? "⚡" : "🎨"}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold font-mono text-text-primary mb-1">
            {project.title}
          </h3>
          <p className="text-neon-cyan text-xs font-mono mb-3">{project.tagline}</p>
          <p className="text-text-secondary text-sm font-sans mb-4 flex-grow">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-t border-b border-white/5">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-neon-green font-mono text-sm font-bold">
                  {metric.value}
                </div>
                <div className="text-text-muted text-xs">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {project.technologies.length > 5 && (
              <TechBadge name={`+${project.technologies.length - 5}`} />
            )}
          </div>

          {/* Case study link */}
          <a
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-mono text-neon-green hover:text-neon-cyan transition-colors group/link"
          >
            View Case Study
            <ArrowRight
              size={14}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </TiltCard>
    </motion.div>
  );
}
