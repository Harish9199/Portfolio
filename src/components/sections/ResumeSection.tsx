"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import NeonButton from "@/components/ui/NeonButton";
import GlassCard from "@/components/ui/GlassCard";
import { personalInfo } from "@/data/personal";
import { fadeInUp } from "@/styles/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ResumeSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="resume" className="py-20 md:py-32 relative">
      <div className="section-container">
        <SectionHeader
          title="Resume"
          subtitle="Download my resume for a complete overview of my qualifications"
        />

        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <GlassCard padding="lg" glow="cyan">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mx-auto mb-6">
                <FileText size={32} className="text-neon-cyan" />
              </div>

              <h3 className="text-xl font-bold font-mono text-text-primary mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-text-secondary text-sm font-sans mb-6">
                {personalInfo.title}
              </p>

              {/* Resume Preview Box */}
              <div className="glass-card rounded-lg p-8 mb-6 border-dashed border-white/10">
                <div className="space-y-3">
                  <div className="h-3 bg-white/5 rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-white/5 rounded w-1/2 mx-auto" />
                  <div className="h-3 bg-white/5 rounded w-2/3 mx-auto" />
                  <div className="h-px bg-white/5 my-4" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                  <div className="h-3 bg-white/5 rounded w-5/6" />
                  <div className="h-3 bg-white/5 rounded w-4/5" />
                </div>
                <p className="text-text-muted text-xs font-mono mt-4">
                  PDF Preview
                </p>
              </div>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <NeonButton
                  href={personalInfo.resumeUrl}
                  variant="primary"
                  size="lg"
                  icon={<Download size={18} />}
                  download
                >
                  Download Resume
                </NeonButton>
                <NeonButton
                  href={personalInfo.resumeUrl}
                  variant="outline"
                  size="lg"
                  icon={<Eye size={18} />}
                  target="_blank"
                >
                  View Online
                </NeonButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
