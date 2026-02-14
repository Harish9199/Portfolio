"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { personalInfo } from "@/data/personal";
import { fadeInLeft, fadeInRight } from "@/styles/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyles =
    "w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-text-primary text-sm font-sans placeholder:text-text-muted focus:outline-none focus:border-neon-green/30 focus:ring-1 focus:ring-neon-green/20 transition-colors";

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-green/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            ref={formAnim.ref}
            variants={fadeInLeft}
            initial="hidden"
            animate={formAnim.isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <GlassCard padding="lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-text-muted mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-text-muted mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-text-muted mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-text-muted mb-2 block">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className={inputStyles + " resize-none"}
                  />
                </div>

                <NeonButton
                  variant="primary"
                  size="lg"
                  icon={<Send size={16} />}
                  className="w-full"
                  onClick={() => {}}
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Message Sent!"
                    : status === "error"
                    ? "Error — Try Again"
                    : "Send Message"}
                </NeonButton>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            ref={infoAnim.ref}
            variants={fadeInRight}
            initial="hidden"
            animate={infoAnim.isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-4"
          >
            <GlassCard padding="md" glow="green">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                  <Mail size={18} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-mono text-text-primary hover:text-neon-green transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard padding="md" glow="cyan">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                  <MapPin size={18} className="text-neon-cyan" />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">Location</p>
                  <p className="text-sm font-mono text-text-primary">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard padding="md" glow="purple">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center">
                  <Github size={18} className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">GitHub</p>
                  <a
                    href="https://github.com/Harish919901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-text-primary hover:text-neon-purple transition-colors"
                  >
                    @Harish919901
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard padding="md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                  <Linkedin size={18} className="text-neon-cyan" />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/harish-shankar-thorath-7b776722a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-text-primary hover:text-neon-cyan transition-colors"
                  >
                    Harish Shankar Thorath
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Status */}
            <div className="flex items-center gap-2 pt-4">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
              <span className="text-text-secondary text-xs font-mono">
                Currently open for opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
