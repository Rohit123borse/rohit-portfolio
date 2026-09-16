"use client";

import { motion } from "framer-motion";

import { SkillChip } from "@/components/common/SkillChip";
import type { SkillCategoryItem } from "@/types/skill";

type SkillCategoryProps = {
  category: SkillCategoryItem;
  index: number;
};

export function SkillCategory({
  category,
  index,
}: SkillCategoryProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -4,
      }}
      className="group rounded-2xl border border-white/[0.08] bg-[#0b1220] p-7 transition-all duration-300 hover:border-blue-500/30"
    >
      {/* Card Header */}
      <div className="mb-5 flex items-center gap-3">
        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-blue-500/20 bg-blue-500/[0.08] text-[18px]">
          {category.icon}
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-semibold text-slate-200">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div
        className="flex flex-wrap gap-2"
        aria-label={`${category.title} technologies`}
      >
        {category.skills.map((skill) => (
 <SkillChip
  key={skill}
  label={skill}
  variant={
    category.id === "state-management" ||
    category.id === "frontend" ||
     category.id === "development-concepts"
      ? "purple"
      : "default"
  }
/>
))}
      </div>
    </motion.article>
  );
}