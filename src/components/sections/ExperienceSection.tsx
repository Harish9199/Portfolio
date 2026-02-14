"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-neon-green/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and contributions"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              startDate={exp.startDate}
              endDate={exp.endDate}
              current={exp.current}
              description={exp.description}
              highlights={exp.highlights}
              technologies={exp.technologies}
              color={exp.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
