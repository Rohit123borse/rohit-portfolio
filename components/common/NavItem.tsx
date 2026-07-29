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

export function NavItem({ label, href, active = false, onClick }: NavItemProps) {
  return (
    <motion.li whileHover={{ y: -2, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200",
          active
            ? "text-sky-600 dark:text-sky-400"
            : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        )}
      >
        <span>{label}</span>
      </Link>
    </motion.li>
  );
}
