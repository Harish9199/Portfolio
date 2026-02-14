"use client";

import { useState, useEffect } from "react";
import { SECTION_IDS, NAV_HEIGHT } from "@/lib/constants";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = Object.values(SECTION_IDS);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${NAV_HEIGHT + 20}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
