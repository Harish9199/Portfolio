"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Code2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { personalInfo } from "@/data/personal";
import { fadeInUp, staggerItem } from "@/styles/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const strengthPillars = [
  {
    icon: Brain,
    title: "Analyze",
    description:
      "Breaking down complex problems with data-driven approaches and ML algorithms.",
    color: "text-neon-green",
    borderColor: "border-neon-green/20",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Engineering scalable systems with Python, Golang, FastAPI, and modern web tech.",
    color: "text-neon-cyan",
    borderColor: "border-neon-cyan/20",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "Shipping production-ready applications with Docker, AWS, and CI/CD pipelines.",
    color: "text-neon-purple",
    borderColor: "border-neon-purple/20",
  },
];

export default function AboutSection() {
  const bioAnim = useScrollAnimation();
  const pillarsAnim = useScrollAnimation({ margin: "-50px" });
  const quoteAnim = useScrollAnimation({ margin: "-50px" });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          title="About Me"
          subtitle="Passionate about building intelligent systems that solve real problems"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            ref={bioAnim.ref}
            variants={fadeInUp}
            initial="hidden"
            animate={bioAnim.isInView ? "visible" : "hidden"}
          >
            <div className="space-y-4 text-text-secondary font-sans leading-relaxed">
              <p>{personalInfo.bio}</p>
              <p>
                With a strong foundation in computer science (8.58 CGPA) and hands-on experience
                in AI/ML research, I bridge the gap between theoretical knowledge and practical
                application. My approach combines analytical thinking with creative problem-solving
                to deliver solutions that make a real impact.
              </p>
            </div>

            {/* Mini terminal */}
            <div className="mt-8 glass-card rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="text-text-muted text-xs font-mono ml-2">
                  about.sh
                </span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1">
                <p>
                  <span className="text-neon-green">$</span>{" "}
                  <span className="text-text-muted">cat</span>{" "}
                  <span className="text-neon-cyan">interests.txt</span>
                </p>
                <p className="text-text-secondary pl-4">
                  &gt; AI/ML Research
                </p>
                <p className="text-text-secondary pl-4">
                  &gt; Backend Architecture
                </p>
                <p className="text-text-secondary pl-4">
                  &gt; Open Source Development
                </p>
                <p className="text-text-secondary pl-4">
                  &gt; Problem Solving
                </p>
              </div>
            </div>
          </motion.div>

          {/* Strength Pillars */}
          <div ref={pillarsAnim.ref} className="space-y-4">
            {strengthPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                initial="hidden"
                animate={pillarsAnim.isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard
                  hover
                  glow={
                    index === 0
                      ? "green"
                      : index === 1
                      ? "cyan"
                      : "purple"
                  }
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center border ${pillar.borderColor} bg-white/[0.02]`}
                    >
                      <pillar.icon size={24} className={pillar.color} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-mono text-text-primary mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-text-secondary text-sm font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              ref={quoteAnim.ref}
              variants={fadeInUp}
              initial="hidden"
              animate={quoteAnim.isInView ? "visible" : "hidden"}
              className="mt-6 pl-4 border-l-2 border-neon-green/30"
            >
              <p className="text-text-secondary italic font-sans text-sm">
                &ldquo;The best way to predict the future is to build it.&rdquo;
              </p>
              <p className="text-text-muted text-xs font-mono mt-1">
                — Alan Kay
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
