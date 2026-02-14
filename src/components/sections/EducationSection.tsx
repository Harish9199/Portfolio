"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  GitBranch,
  Trophy,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { education, achievements } from "@/data/education";
import { staggerItem } from "@/styles/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const achievementIcons: Record<string, any> = {
  GraduationCap,
  Brain,
  GitBranch,
  Trophy,
};

export default function EducationSection() {
  const eduAnim = useScrollAnimation();
  const achieveAnim = useScrollAnimation({ margin: "-50px" });

  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          title="Education"
          subtitle="Academic foundation and notable achievements"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div ref={eduAnim.ref} className="h-full">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={staggerItem}
                initial="hidden"
                animate={eduAnim.isInView ? "visible" : "hidden"}
                className="h-full"
              >
                <GlassCard padding="lg" glow="green" className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={24} className="text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-mono text-text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-neon-cyan text-sm font-mono">
                        {edu.field}
                      </p>
                      <p className="text-text-muted text-xs font-mono mt-1">
                        {edu.institution} • {edu.startDate} — {edu.endDate}
                      </p>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="mb-4 p-3 rounded-lg bg-neon-green/5 border border-neon-green/10">
                      <span className="text-text-muted text-xs font-mono">
                        CGPA:{" "}
                      </span>
                      <span className="text-neon-green font-bold font-mono text-lg">
                        {edu.gpa}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-text-secondary font-sans"
                      >
                        <span className="text-neon-green mt-1 text-xs">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div ref={achieveAnim.ref} className="space-y-4">
            <h3 className="text-sm font-mono text-text-muted mb-4">
              <span className="text-neon-green">$</span> ls achievements/
            </h3>
            {achievements.map((achievement, index) => {
              const Icon = achievementIcons[achievement.icon] || Trophy;
              return (
                <motion.div
                  key={achievement.id}
                  variants={staggerItem}
                  initial="hidden"
                  animate={achieveAnim.isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard hover padding="md">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-neon-purple" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-mono text-text-primary">
                          {achievement.title}
                        </h4>
                        <p className="text-text-secondary text-xs font-sans mt-1">
                          {achievement.description}
                        </p>
                        {achievement.year && (
                          <span className="text-text-muted text-xs font-mono mt-2 inline-block">
                            {achievement.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
