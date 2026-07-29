"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { heroContent } from "@/constants/hero";

type AnimatedRoleProps = {
  roles?: string[];
};

export function AnimatedRole({ roles = heroContent.roles }: AnimatedRoleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="mt-3 min-h-[3rem]" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-block bg-gradient-to-r from-sky-600 via-cyan-500 to-violet-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
