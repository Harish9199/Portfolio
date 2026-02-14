"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export function useTypingEffect({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  loop = true,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length + 1));

      if (displayText.length === currentText.length) {
        if (!loop && textIndex === texts.length - 1) {
          setIsComplete(true);
          return pauseDuration;
        }
        setIsDeleting(true);
        return pauseDuration;
      }
      return typingSpeed;
    } else {
      setDisplayText(currentText.substring(0, displayText.length - 1));

      if (displayText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return typingSpeed;
      }
      return deletingSpeed;
    }
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      tick();
    }, tick() || typingSpeed);

    return () => clearTimeout(timeout);
  }, [tick, typingSpeed]);

  return { displayText, isComplete, isDeleting };
}
