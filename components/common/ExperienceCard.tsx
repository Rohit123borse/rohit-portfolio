"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

import type { ExperienceItem } from "@/types/experience";

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="rounded-[1.5rem] border border-white/60 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/70"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
            <BriefcaseBusiness size={16} />
            <span>{item.duration}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-zinc-50">{item.role}</h3>
          <p className="mt-1 text-lg font-medium text-zinc-700 dark:text-zinc-300">{item.company}</p>
        </div>
        <div className="rounded-full border border-sky-500/20 bg-sky-500/10 p-2 text-sky-600 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
          <Sparkles size={16} />
        </div>
      </div>

      <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">{item.description}</p>

      <ul className="mt-5 space-y-2">
        {item.responsibilities.map((responsibility) => (
          <li key={responsibility} className="flex items-start gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2" aria-label={`${item.company} technologies`}>
        {item.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-slate-200/70 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
