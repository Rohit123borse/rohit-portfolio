"use client";

import { SectionSurface } from "@/components/common/SectionSurface";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SkillCategory } from "@/components/common/SkillCategory";
import { skillsCategories } from "@/constants/skills";

export function Skills() {
  return (
    <SectionSurface id="skills" className="mt-8 py-16 sm:py-20">
      <div className="relative space-y-10">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Technologies"
          subtitle="Technologies I use to build scalable, performant and user-friendly applications."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillsCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </SectionSurface>
  );
}
