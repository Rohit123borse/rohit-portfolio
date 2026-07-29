"use client";

import { motion } from "framer-motion";

import type { JourneyItem } from "@/constants/about";

type JourneyCardProps = {
  item: JourneyItem;
};

export function JourneyCard({ item }: JourneyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/70"
    >
      <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
    </motion.div>
  );
}
