"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Brain,
  Wrench,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBar from "@/components/ui/SkillBar";
import SkillCircle from "@/components/ui/SkillCircle";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Code2,
  Layout,
  Server,
  Brain,
  Wrench,
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          title="Skills & Tech"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs transition-all duration-300",
                  isActive
                    ? "bg-neon-green/10 text-neon-green border border-neon-green/30 shadow-neon-green"
                    : "glass-card text-text-secondary hover:text-text-primary hover:bg-white/[0.06]"
                )}
              >
                <Icon size={14} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Skill bars */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-text-muted mb-6">
                <span className="text-neon-green">$</span> cat proficiency.log
              </h3>
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </div>

            {/* Skill circles */}
            <div>
              <h3 className="text-sm font-mono text-text-muted mb-6">
                <span className="text-neon-green">$</span> visualize --chart
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {activeCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillCircle
                      name={skill.name}
                      level={skill.level}
                      color={skill.color || "#00ff88"}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
