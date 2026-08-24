"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { siteContent } from "@/lib/site-data";

export function FooterContent({ currentYear }: { currentYear: number }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[rgba(6,9,18,0.8)] px-6 py-20 sm:px-8"
    >
      {/* Bottom Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-80px]
          left-1/2
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,transparent_70%)]
        "
      />

      <div className="relative mx-auto max-w-[680px] text-center">
        {/* Label */}
        <div className="mb-4">
          <span
            className="
              font-mono
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-blue-500
            "
          >
            // Let&apos;s Connect
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mb-5
            font-serif
            text-[clamp(32px,5vw,52px)]
            font-bold
            leading-[1.1]
            tracking-[-0.03em]
            text-slate-100
          "
        >
          Ready to build
          <br />
          <span className="font-light italic text-[#6ea8fe]">
            something great?
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mb-10
            max-w-[460px]
            text-[16px]
            leading-[1.7]
            text-slate-600
          "
        >
          I&apos;m actively seeking full-time Flutter, React, or AI developer
          roles. Let&apos;s talk about what you&apos;re building.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {/* Email */}
          <a
            href="borserohit006@gmail.com"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-blue-500/40
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-blue-600/10
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-blue-500
            "
          >
            <FaEnvelope className="h-4 w-4" />
            borserohit006@gmail.com
          </a>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/[0.09]
              bg-white/[0.03]
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-300
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-blue-500/30
              hover:bg-blue-500/[0.06]
              hover:text-blue-300
            "
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/[0.09]
              bg-white/[0.03]
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-300
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-blue-500/30
              hover:bg-blue-500/[0.06]
              hover:text-blue-300
            "
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </Link>
        </div>

        {/* Copyright */}
        <p
          className="
            mt-16
            font-mono
            text-[12px]
            text-[#d4e2f7]
          "
        >
          © {currentYear} {siteContent.name} · Flutter · React · AI Developer
        </p>
      </div>
    </footer>
  );
}