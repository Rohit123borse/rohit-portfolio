"use client";

import { motion } from "framer-motion";

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm backdrop-blur dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300"
    >
      {label}
    </motion.span>
  );
}
