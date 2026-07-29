"use client";

import Link from "next/link";
// import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

import { heroContent } from "@/constants/hero";

const icons = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: FaEnvelope,
};

export function SocialLinks() {
  return (
    <div className="mt-8 flex items-center gap-3" aria-label="Social links">
      {heroContent.socialLinks.map((link) => {
        const Icon = icons[link.icon as keyof typeof icons];

        return (
          <motion.div key={link.label} whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 text-zinc-700 shadow-sm transition-colors hover:border-sky-500 hover:text-sky-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:text-sky-400"
            >
              <Icon size={18} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
