"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "Initializing system...",
  "Loading kernel modules...",
  "Mounting file systems...",
  "Starting network services...",
  "Loading portfolio data...",
  "Compiling components...",
  "System ready.",
];

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show loading once per session
    const hasLoaded = sessionStorage.getItem("portfolio-loaded");
    if (hasLoaded) {
      setShow(false);
      return;
    }

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= bootLines.length - 1) {
          clearInterval(lineInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    const timeout = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("portfolio-loaded", "true");
    }, 2500);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-void flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-md w-full px-8">
            <div className="font-mono text-sm space-y-1 mb-6">
              {bootLines.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-neon-green">$</span>
                  <span
                    className={
                      i === currentLine ? "text-neon-green" : "text-text-muted"
                    }
                  >
                    {line}
                  </span>
                  {i === currentLine && (
                    <span className="w-2 h-4 bg-neon-green animate-cursor-blink" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00ff88, #00d4ff)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="text-right mt-2">
              <span className="text-text-muted text-xs font-mono">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
