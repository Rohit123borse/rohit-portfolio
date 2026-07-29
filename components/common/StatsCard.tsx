"use client";

import { motion } from "framer-motion";

import type { StatItem } from "@/constants/about";

type StatsCardProps = {
  item: StatItem;
};

export function StatsCard({ item }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-white/70 to-violet-500/10 p-4 shadow-sm backdrop-blur-xl dark:from-sky-500/10 dark:via-zinc-900/70 dark:to-violet-500/10"
    >
      <p className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">{item.value}</p>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.label}</p>
    </motion.div>
  );
}
