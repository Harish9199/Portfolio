"use client";

import { Heart, Terminal } from "lucide-react";
import SocialLink from "@/components/ui/SocialLink";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Status */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-neon-green" />
              <span className="font-mono text-sm text-text-primary">
                <span className="text-neon-green">harish</span>
                <span className="text-text-muted">@</span>
                <span className="text-neon-cyan">dev</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
              <span className="text-text-secondary text-xs font-mono">
                Open for opportunities
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {personalInfo.social.map((link) => (
              <SocialLink
                key={link.name}
                name={link.name}
                url={link.url}
                icon={link.icon}
                size="sm"
              />
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-muted text-xs font-mono flex items-center gap-1">
              Built with <Heart size={12} className="text-neon-pink inline" />{" "}
              by Harish Shankar Thorath
            </p>
            <p className="text-text-muted text-xs font-mono mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
