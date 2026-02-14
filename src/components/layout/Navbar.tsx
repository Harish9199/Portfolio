"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-terminal/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-2 group"
            >
              <Terminal
                size={20}
                className="text-neon-green group-hover:text-neon-cyan transition-colors"
              />
              <span className="font-mono text-sm text-text-primary">
                <span className="text-neon-green">harish</span>
                <span className="text-text-muted">@</span>
                <span className="text-neon-cyan">dev</span>
                <span className="text-text-muted">:~$</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "px-3 py-2 text-xs font-mono rounded-lg transition-all duration-200",
                      isActive
                        ? "text-neon-green bg-neon-green/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-text-secondary hover:text-neon-green transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-terminal/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 pt-[72px]">
              {navItems.map((item, i) => {
                const isActive =
                  activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      "px-6 py-3 text-lg font-mono rounded-lg transition-all",
                      isActive
                        ? "text-neon-green bg-neon-green/10"
                        : "text-text-secondary hover:text-neon-green"
                    )}
                  >
                    <span className="text-neon-green mr-2 text-sm">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
