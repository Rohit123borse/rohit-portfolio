"use client";

import Link from "next/link";
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
    <div className="mt-8 flex gap-4">

      {heroContent.socialLinks.map((link) => {
        const Icon = icons[link.icon as keyof typeof icons];

        return (
          <motion.div
            key={link.label}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              aria-label={link.label}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full

                border
                border-white/10

                bg-white/5

                text-zinc-300

                shadow-[0_8px_30px_rgba(0,0,0,0.25)]

                backdrop-blur-xl

                transition-all

                hover:border-blue-400/50
                hover:bg-blue-500/10
                hover:text-blue-400
              "
            >
              <Icon size={18} />
            </Link>
          </motion.div>
        );
      })}

    </div>
  );
}