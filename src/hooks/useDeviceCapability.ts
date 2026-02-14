"use client";

import { useState, useEffect } from "react";

interface DeviceCapability {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  prefersReducedMotion: boolean;
  supportsHover: boolean;
  isLowEnd: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    prefersReducedMotion: false,
    supportsHover: true,
    isLowEnd: false,
  });

  useEffect(() => {
    const updateCapability = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const supportsHover = window.matchMedia("(hover: hover)").matches;

      const isLowEnd =
        typeof navigator.hardwareConcurrency === "number" &&
        navigator.hardwareConcurrency <= 4;

      setCapability({
        isMobile,
        isTablet,
        isDesktop,
        prefersReducedMotion,
        supportsHover,
        isLowEnd,
      });
    };

    updateCapability();
    window.addEventListener("resize", updateCapability);
    return () => window.removeEventListener("resize", updateCapability);
  }, []);

  return capability;
}
