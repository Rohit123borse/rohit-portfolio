"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { contactDetails, contactSocialLinks } from "@/constants/contact";

const icons = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail: FaEnvelope,
};

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="space-y-6"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Have a project idea or want to discuss an opportunity? Feel free to reach out.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/70">
        <dl className="space-y-4">
          {contactDetails.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{item.label}</dt>
              <dd className="text-base font-medium text-zinc-900 dark:text-zinc-100">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-wrap gap-3" aria-label="Social links">
        {contactSocialLinks.map((link) => {
          const Icon = icons[link.icon as keyof typeof icons];

          return (
            <motion.div key={link.label} whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-sky-500 hover:text-sky-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:text-sky-400"
              >
                <Icon size={16} />
                {link.label}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
