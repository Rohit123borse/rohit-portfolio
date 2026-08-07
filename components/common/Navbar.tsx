"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { MobileMenu } from "@/components/common/MobileMenu";
import { NavItem } from "@/components/common/NavItem";
import { navigationItems } from "@/constants/navigation";
import { siteContent } from "@/lib/site-data";
import { useScroll } from "@/hooks/use-scroll";

export function Navbar() {
  const { isScrolled, activeSection } = useScroll();

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(5,9,18,0.82)"
          : "rgba(5,9,18,0)",
        boxShadow: isScrolled
          ? "0 10px 40px rgba(0,0,0,0.18)"
          : "0 0 0 rgba(0,0,0,0)",
        borderColor: isScrolled
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0)",
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        sticky
        top-0
        z-50
        border-b
        border-transparent
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[88px]
          w-full
          max-w-6xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            flex
            shrink-0
            items-center
            gap-3
            text-white
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              text-base
              font-bold
              text-white
              shadow-lg
              shadow-blue-600/25
            "
          >
            {siteContent.name.charAt(0)}
          </div>

          <span
            className="
              whitespace-nowrap
              text-lg
              font-semibold
              tracking-tight
            "
          >
            {siteContent.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-1">
            {navigationItems
              .filter((item) => item.label !== "Home")
              .map((item) => {
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

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Hire Me */}
          <Link
            href="#contact"
            className="
              hidden
              items-center
              gap-1.5
              rounded-lg
              border
              border-blue-500/40
              bg-blue-500/[0.04]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-blue-400
              transition-all
              duration-200
              hover:border-blue-400/70
              hover:bg-blue-500/10
              hover:text-blue-300
              sm:flex
            "
          >
            Hire Me

            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu */}
          <MobileMenu
            items={navigationItems}
            activeSection={activeSection}
          />
        </div>
      </div>
    </motion.header>
  );
}