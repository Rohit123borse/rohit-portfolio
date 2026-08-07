"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type NavItemProps = {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
};

export function NavItem({
  label,
  href,
  active = false,
  onClick,
}: NavItemProps) {
  return (
    <motion.li
      whileHover={{
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          `
          relative
          rounded-full
          px-4
          py-2
          text-sm
          font-medium
          transition-all
          duration-200
          `,
          
          active
            ? `
              text-blue-400
              bg-blue-500/10
              shadow-[0_0_20px_rgba(59,130,246,0.15)]
            `
            : `
              text-zinc-400
              hover:text-white
              hover:bg-white/5
            `
        )}
      >
        {label}
      </Link>
    </motion.li>
  );
}