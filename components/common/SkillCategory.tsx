"use client";

import { motion } from "framer-motion";

import { SkillChip } from "@/components/common/SkillChip";
import type { SkillCategoryItem } from "@/types/skill";

type SkillCategoryProps = {
  category: SkillCategoryItem;
  index: number;
};

export function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-[1.5rem] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-900/70"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-violet-500/20 text-2xl shadow-sm">
          <span aria-hidden="true">{category.icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">{category.title}</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{category.description}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" aria-label={`${category.title} technologies`}>
        {category.skills.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </div>
    </motion.article>
  );
}
