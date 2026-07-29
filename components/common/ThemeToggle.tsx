"use client";

import { useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const cycleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
      return;
    }

    if (resolvedTheme === "light") {
      setTheme("system");
      return;
    }

    setTheme("dark");
  };

  const resolvedState = mounted ? resolvedTheme : "light";
  const icon = resolvedState === "dark" ? <Moon size={18} /> : resolvedState === "light" ? <Sun size={18} /> : <Monitor size={18} />;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle color theme"
      onClick={() => {
        setMounted(true);
        cycleTheme();
      }}
      aria-pressed={resolvedState === "dark"}
      className="rounded-full border border-zinc-200/70 bg-white/80 text-zinc-700 shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-200 dark:hover:bg-zinc-900"
    >
      <motion.span
        key={mounted ? String(resolvedState) : "initial"}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        {mounted ? icon : <Sun size={18} />}
      </motion.span>
    </Button>
  );
}
