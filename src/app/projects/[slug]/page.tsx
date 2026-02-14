"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import TechBadge from "@/components/ui/TechBadge";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-mono gradient-text mb-4">
            Project Not Found
          </h1>
          <Link
            href="/projects"
            className="text-neon-green font-mono hover:underline"
          >
            &larr; Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-neon-green font-mono text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20 mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold font-mono gradient-text mb-2">
              {project.title}
            </h1>
            <p className="text-neon-cyan font-mono text-sm">{project.tagline}</p>
          </div>

          {/* Image placeholder */}
          <div className="w-full h-64 rounded-xl mb-8 bg-gradient-to-br from-neon-green/5 via-neon-cyan/5 to-neon-purple/5 border border-white/5 flex items-center justify-center">
            <span className="text-6xl opacity-20">
              {project.category === "AI/ML" ? "🧠" : project.category === "Full-Stack" ? "⚡" : "🎨"}
            </span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.metrics.map((metric) => (
              <GlassCard key={metric.label} padding="md">
                <div className="text-center">
                  <div className="text-2xl font-bold font-mono text-neon-green">
                    {metric.value}
                  </div>
                  <div className="text-text-muted text-xs font-mono mt-1">
                    {metric.label}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Content sections */}
          <div className="space-y-8">
            {/* Overview */}
            <GlassCard padding="lg">
              <h2 className="text-lg font-bold font-mono text-text-primary mb-3">
                <span className="text-neon-green mr-2">##</span>Overview
              </h2>
              <p className="text-text-secondary font-sans leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </GlassCard>

            {/* Problem & Solution */}
            {project.problem && (
              <div className="grid md:grid-cols-2 gap-4">
                <GlassCard padding="lg" glow="cyan">
                  <h3 className="text-sm font-bold font-mono text-neon-cyan mb-3">
                    The Problem
                  </h3>
                  <p className="text-text-secondary text-sm font-sans">
                    {project.problem}
                  </p>
                </GlassCard>
                <GlassCard padding="lg" glow="green">
                  <h3 className="text-sm font-bold font-mono text-neon-green mb-3">
                    The Solution
                  </h3>
                  <p className="text-text-secondary text-sm font-sans">
                    {project.solution}
                  </p>
                </GlassCard>
              </div>
            )}

            {/* Impact */}
            {project.impact && (
              <GlassCard padding="lg" glow="purple">
                <h3 className="text-sm font-bold font-mono text-neon-purple mb-3">
                  Impact
                </h3>
                <p className="text-text-secondary text-sm font-sans">
                  {project.impact}
                </p>
              </GlassCard>
            )}

            {/* Tech Stack */}
            <GlassCard padding="lg">
              <h3 className="text-sm font-bold font-mono text-text-primary mb-4">
                <span className="text-neon-green mr-2">$</span>Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="green" />
                ))}
              </div>
            </GlassCard>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <NeonButton
                  key={link.type}
                  href={link.url}
                  variant={link.type === "github" ? "primary" : "secondary"}
                  target="_blank"
                  icon={
                    link.type === "github" ? (
                      <Github size={16} />
                    ) : (
                      <ExternalLink size={16} />
                    )
                  }
                >
                  {link.label}
                </NeonButton>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
