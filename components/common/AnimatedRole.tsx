"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { heroContent } from "@/constants/hero";

type AnimatedRoleProps = {
  roles?: string[];
};

export function AnimatedRole({
  roles = heroContent.roles,
}: AnimatedRoleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.div
      key={roles[index]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        mt-3
        inline-block
        bg-gradient-to-r
        from-blue-400
        via-sky-300
        to-violet-400
        bg-clip-text
        text-transparent
        text-3xl
        font-semibold
        tracking-tight
        sm:text-4xl
        lg:text-5xl
      "
    >
      {roles[index]}
    </motion.div>
  );
}