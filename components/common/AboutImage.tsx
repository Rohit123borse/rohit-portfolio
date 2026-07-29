"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="relative mx-auto w-full max-w-[480px]"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-sky-500/20 via-white/70 to-violet-500/20 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-zinc-700 dark:from-sky-500/10 dark:via-zinc-900/70 dark:to-violet-500/10">
        <Image
          src="/profile-placeholder.svg"
          alt="Rohit Borse working on mobile app development"
          width={640}
          height={640}
          className="h-full w-full rounded-[1.4rem] object-cover"
        />
      </div>

      <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-lg backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200">
        <Sparkles size={16} className="text-sky-600 dark:text-sky-400" />
        <span>Experience + Growth</span>
      </div>
    </motion.div>
  );
}
