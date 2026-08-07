"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/constants/hero";

export function FloatingBadges() {
  return (
    <>
      {heroContent.badges.map((badge, index) => (
        <motion.div
          key={badge}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            delay: 0.2 + index * 0.08,
            duration: 1.4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={`
            absolute rounded-full 
            border border-white/10
            bg-zinc-900/80
            px-4 py-2
            text-sm font-medium
            text-zinc-100
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl

            ${
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
            }
          `}
        >
          {badge}
        </motion.div>
      ))}
    </>
  );
}