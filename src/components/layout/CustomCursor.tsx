"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const { isDesktop, prefersReducedMotion, supportsHover } = useDeviceCapability();

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const ringX = useSpring(0, { stiffness: 150, damping: 15 });
  const ringY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion || !supportsHover) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, [isDesktop, prefersReducedMotion, supportsHover, cursorX, cursorY, ringX, ringY, visible]);

  if (!isDesktop || prefersReducedMotion || !supportsHover) return null;

  return (
    <>
      <motion.div
        className="fixed w-2 h-2 bg-neon-green rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border border-neon-green/30"
        style={{
          left: ringX,
          top: ringY,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
