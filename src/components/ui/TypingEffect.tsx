"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorClassName?: string;
}

export default function TypingEffect({
  texts,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  cursorClassName,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  const tick = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (phase === "typing") {
      if (displayText.length < currentFullText.length) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      } else {
        setPhase("pausing");
      }
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setPhase("typing");
      }
    }
  }, [displayText, textIndex, phase, texts]);

  useEffect(() => {
    let delay: number;
    if (phase === "typing") delay = typingSpeed;
    else if (phase === "pausing") delay = pauseDuration;
    else delay = deletingSpeed;

    const timeout = setTimeout(() => {
      if (phase === "pausing") {
        setPhase("deleting");
      } else {
        tick();
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [tick, phase, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("font-mono", className)}>
      {displayText}
      <span
        className={cn(
          "inline-block w-[2px] h-[1em] bg-neon-green ml-0.5 align-middle animate-cursor-blink",
          cursorClassName
        )}
      />
    </span>
  );
}
