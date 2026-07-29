"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  items: Array<{ label: string; href: string }>;
  activeSection: string;
  onNavigate?: () => void;
};

export function MobileMenu({ items, activeSection, onNavigate }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full border border-zinc-200/70 bg-white/80 text-zinc-700 shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-200 dark:hover:bg-zinc-900"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-zinc-200/70 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95"
          >
            <motion.nav
              id="mobile-navigation-menu"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-2">
                {items.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleNavigate}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium",
                          isActive
                            ? "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400"
                            : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
