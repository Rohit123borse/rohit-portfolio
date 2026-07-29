"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { MobileMenu } from "@/components/common/MobileMenu";
import { NavItem } from "@/components/common/NavItem";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { navigationItems } from "@/constants/navigation";
import { siteContent } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

export function Navbar() {
  const { isScrolled, activeSection } = useScroll();

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled ? "0 10px 40px rgba(15, 23, 42, 0.08)" : "0 0 0 rgba(15, 23, 42, 0)",
        borderColor: isScrolled ? "rgba(228, 228, 231, 0.8)" : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-transparent backdrop-blur-xl dark:border-zinc-800/70 dark:[background-color:rgba(9,9,11,0.6)]"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-[0.24em] text-zinc-900 uppercase dark:text-zinc-100">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
            {siteContent.name.charAt(0)}
          </span>
          <span>{siteContent.name}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              return (
                <NavItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  active={activeSection === sectionId}
                />
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href={siteContent.resumeUrl} target="_blank" rel="noreferrer" className="hidden sm:flex">
            <Button size="sm" className="rounded-full bg-sky-600 px-4 text-white hover:bg-sky-700">
              Resume
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <MobileMenu items={navigationItems} activeSection={activeSection} />
        </div>
      </div>
    </motion.header>
  );
}
