"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  name: string;
  url: string;
  icon: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
};

export default function SocialLink({
  name,
  url,
  icon,
  size = "md",
  className,
}: SocialLinkProps) {
  const Icon = iconMap[icon] || Globe;
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };
  const iconSizes = { sm: 14, md: 18, lg: 22 };

  return (
    <motion.a
      href={url}
      target={url.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={name}
      className={cn(
        "inline-flex items-center justify-center rounded-lg glass-card transition-all duration-300",
        "hover:bg-neon-green/10 hover:border-neon-green/30 hover:text-neon-green hover:shadow-neon-green",
        "text-text-secondary",
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={iconSizes[size]} />
    </motion.a>
  );
}
