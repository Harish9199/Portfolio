"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

const ParticleBackground = dynamic(
  () => import("@/components/effects/ParticleBackground"),
  { ssr: false }
);

const ChatWidget = dynamic(
  () => import("@/components/chatbot/ChatWidget"),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/layout/CustomCursor"),
  { ssr: false }
);

const LoadingScreen = dynamic(
  () => import("@/components/layout/LoadingScreen"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
}
