"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  download?: boolean;
  target?: string;
}

export default function NeonButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  icon,
  download,
  target,
}: NeonButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-mono font-medium rounded-lg transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-neon-green/10 text-neon-green border border-neon-green/30 hover:bg-neon-green/20 hover:shadow-neon-green hover:border-neon-green/60",
    secondary:
      "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:shadow-neon-cyan hover:border-neon-cyan/60",
    outline:
      "bg-transparent text-text-primary border border-white/10 hover:border-neon-green/30 hover:text-neon-green",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-neon-green/0 via-neon-green/5 to-neon-green/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        download={download}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
