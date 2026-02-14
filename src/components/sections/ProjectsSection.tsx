"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import NeonButton from "@/components/ui/NeonButton";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          title="Projects"
          subtitle="Featured work that showcases my skills and passion"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center"
        >
          <NeonButton
            href="/projects"
            variant="outline"
            size="md"
            icon={<ArrowRight size={16} />}
          >
            View All Projects
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}
