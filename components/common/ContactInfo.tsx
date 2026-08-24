"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8"
    >
      {/* =========================
          HEADER
      ========================== */}
      <div>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-500 sm:text-xs">
          // Contact
        </p>

        <h2 className="mt-5 font-serif text-[36px] font-bold tracking-[-0.02em] text-slate-100 sm:text-[42px]">
          Let&apos;s Work Together
        </h2>

        <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base">
          Have a project idea or want to discuss an opportunity? Feel free to
          reach out. I&apos;m always open to discussing new projects,
          opportunities, and collaborations.
        </p>
      </div>

      {/* =========================
          CONTACT DETAILS
      ========================== */}
      <div
        className="
          rounded-xl
          border
          border-white/[0.06]
          bg-[rgba(15,20,35,0.6)]
          p-6
          transition-all
          duration-300
          hover:border-blue-500/20
          sm:p-7
        "
      >
        <dl className="space-y-6">
          {contactDetails.map((item) => (
            <div key={item.label}>
              <dt className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                {item.label}
              </dt>

              <dd className="text-[15px] font-medium text-slate-300">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* =========================
          SOCIAL LINKS
      ========================== */}
      <div>
        <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
          Connect
        </p>

        <div className="flex flex-wrap gap-3" aria-label="Social links">
          {contactSocialLinks.map((link) => {
            const Icon = icons[link.icon as keyof typeof icons];

            return (
              <motion.div
                key={link.label}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={link.href}
                  target={
                    link.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-md
                    border
                    border-white/[0.07]
                    bg-[#111827]
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-400
                    transition-all
                    duration-200
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.05]
                    hover:text-blue-400
                  "
                >
                  <Icon size={15} />
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}