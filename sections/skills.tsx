"use client";

import { SectionSurface } from "@/components/common/SectionSurface";
import { SkillCategory } from "@/components/common/SkillCategory";
import { skillsCategories } from "@/constants/skills";

export function Skills() {
  return (
    <SectionSurface id="skills">
      {/* Section Heading */}
      <div className="text-center">
        {/* Eyebrow */}
        <div className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-500">
          // Technical Arsenal
        </div>

        {/* Title */}
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold leading-tight tracking-[-0.02em] text-slate-100">
          Skills by Domain
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-6 text-slate-400">
          {/* Technologies and tools I use to build modern, scalable, and
          reliable applications. */}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillsCategories.map((category, index) => (
          <SkillCategory
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </SectionSurface>
  );
}