"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { footerSocialLinks } from "@/constants/footer";

const icons = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: FaEnvelope,
};

export function FooterSocials() {
  return (
    <div className="flex flex-wrap gap-3 lg:justify-end">
      {footerSocialLinks.map((link) => {
        const Icon = icons[link.icon as keyof typeof icons];

        return (
          <motion.div key={link.label} whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/70 px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-sky-500 hover:text-sky-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:text-sky-400"
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
