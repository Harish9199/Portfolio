"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Rss } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-neon-green font-mono text-sm mb-12 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-xl p-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mx-auto mb-6">
            <Rss size={28} className="text-neon-cyan" />
          </div>

          <h1 className="text-3xl font-bold font-mono gradient-text mb-4">
            Blog
          </h1>

          <div className="font-mono text-sm space-y-2 text-left mb-6 glass-card rounded-lg p-4">
            <p>
              <span className="text-neon-green">$</span>{" "}
              <span className="text-text-muted">ls</span>{" "}
              <span className="text-neon-cyan">blog/posts/</span>
            </p>
            <p className="text-yellow-400/80">
              Directory is empty. Coming soon...
            </p>
          </div>

          <p className="text-text-secondary font-sans text-sm mb-6">
            I&apos;m working on some exciting articles about AI/ML, backend architecture,
            and software engineering. Stay tuned!
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 text-neon-cyan text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-glow-pulse" />
            Coming Soon
          </div>
        </motion.div>
      </div>
    </div>
  );
}
