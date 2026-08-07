"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: [0, 6, 0],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        mt-10
        inline-flex
        flex-col
        items-center
        gap-3

        self-start

        text-sm
        font-medium

        text-zinc-400

        transition-colors

        hover:text-blue-400
      "
      aria-label="Scroll to next section"
    >

      <span>
        Scroll
      </span>


      <span
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-white/5

          text-zinc-300

          shadow-[0_8px_30px_rgba(0,0,0,0.3)]

          backdrop-blur-xl

          transition-all

          hover:border-blue-400/50
          hover:bg-blue-500/10
        "
      >
        <ChevronDown size={18} />
      </span>


    </motion.a>
  );
}