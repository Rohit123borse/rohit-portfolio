"use client";

import { motion } from "framer-motion";

import { heroContent } from "@/constants/hero";

export function FloatingBadges() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {heroContent.badges.map((badge, index) => (
        <motion.div
          key={badge}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            delay: 0.2 + index * 0.08,
            duration: 1.4 + index * 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={`absolute rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-lg backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 ${
            index === 0
              ? "left-[6%] top-[10%]"
              : index === 1
                ? "right-[10%] top-[12%]"
                : index === 2
                  ? "bottom-[18%] left-[8%]"
                  : index === 3
                    ? "right-[6%] top-[42%]"
                    : index === 4
                      ? "bottom-[10%] right-[14%]"
                      : "left-[30%] bottom-[8%]"
          }`}
        >
          {badge}
        </motion.div>
      ))}
    </div>
  );
}
