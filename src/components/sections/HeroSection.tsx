"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, ChevronRight } from "lucide-react";
import NeonButton from "@/components/ui/NeonButton";
import SocialLink from "@/components/ui/SocialLink";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TypingEffect from "@/components/ui/TypingEffect";
import { personalInfo } from "@/data/personal";
import { heroTextVariants, staggerContainer } from "@/styles/animations";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-green/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-neon-purple/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container relative z-10 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Terminal line */}
          <motion.div
            variants={heroTextVariants}
            custom={0}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
              <span className="text-text-muted">root@harish:~$</span>
              <span className="text-neon-green">whoami</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={heroTextVariants}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono mb-4 leading-tight"
          >
            <span className="text-text-primary">Hi, I&apos;m </span>
            <span className="gradient-text">{personalInfo.firstName}</span>
          </motion.h1>

          {/* Typing effect for roles */}
          <motion.div
            variants={heroTextVariants}
            custom={2}
            className="text-xl sm:text-2xl md:text-3xl font-mono mb-6 h-10"
          >
            <span className="text-text-muted mr-2">&gt;</span>
            <TypingEffect
              texts={personalInfo.roles}
              className="text-neon-cyan"
              typingSpeed={70}
              deletingSpeed={35}
              pauseDuration={2000}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={heroTextVariants}
            custom={3}
            className="text-text-secondary text-base md:text-lg max-w-2xl font-sans mb-8 leading-relaxed"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroTextVariants}
            custom={4}
            className="flex flex-wrap gap-4 mb-12"
          >
            <NeonButton
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ChevronRight size={18} />}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </NeonButton>
            <NeonButton
              href={personalInfo.resumeUrl}
              variant="secondary"
              size="lg"
              icon={<Download size={18} />}
              download
            >
              Download Resume
            </NeonButton>
            <NeonButton
              href="#contact"
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </NeonButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={heroTextVariants}
            custom={5}
            className="grid grid-cols-3 gap-8 max-w-md mb-12"
          >
            {personalInfo.stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={heroTextVariants}
            custom={6}
            className="flex items-center gap-4"
          >
            <span className="text-text-muted text-xs font-mono">
              Find me on
            </span>
            <div className="h-px w-8 bg-white/10" />
            <div className="flex gap-3">
              {personalInfo.social.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
