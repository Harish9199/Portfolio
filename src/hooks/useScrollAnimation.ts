"use client";

import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

interface UseScrollAnimationOptions {
  once?: boolean;
  margin?: UseInViewOptions["margin"];
}

export function useScrollAnimation({
  once = true,
  margin = "-100px",
}: UseScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });
  return { ref, isInView };
}
