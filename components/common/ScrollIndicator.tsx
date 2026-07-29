"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, 6, 0] }}
      transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="mt-10 inline-flex flex-col items-center gap-2 self-start text-sm font-medium text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
      aria-label="Scroll to next section"
    >
      <span>Scroll</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white/70 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70">
        <ChevronDown size={18} />
      </span>
    </motion.a>
  );
}
