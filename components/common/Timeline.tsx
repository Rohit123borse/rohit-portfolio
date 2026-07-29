"use client";

import { ExperienceCard } from "@/components/common/ExperienceCard";
import { experienceItems } from "@/constants/experience";

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-sky-500/60 via-cyan-400/40 to-transparent md:block" />
      <div className="space-y-8">
        {experienceItems.map((item, index) => (
          <div key={item.company} className="relative md:pl-12">
            <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-lg md:block dark:border-zinc-900" />
            <ExperienceCard item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
