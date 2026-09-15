"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[5%] top-[12%] h-[430px] w-[430px] rounded-full bg-indigo-500/[0.05] blur-[130px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1150px] items-center px-6 py-10 lg:px-0 lg:py-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            {/* Badges */}
            <div className="mb-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.04] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to Full-Time Opportunities
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/[0.04] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-purple-400">
                <span>✦</span>
                Flutter Developer
              </span>
            </div>

            {/* Main Heading */}
            <h1
  style={{
    fontFamily: "'Fraunces', serif",
    fontSize: "clamp(42px, 6vw, 72px)",
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    color: "#f1f5f9",
    marginBottom: "8px",
  }}
  className="whitespace-nowrap"
>
  Flutter Developer.
</h1>
            {/* Second Line */}
            <h2
  className="mt-3 whitespace-nowrap text-[52px] leading-[0.98] tracking-[-0.04em] xl:text-[68px]"
  style={{
    fontFamily: "'Fraunces', serif",
    fontWeight: 400,
    fontStyle: "italic",
    background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}
>
  MERN Stack Developer.
</h2>

            {/* Third Line */}
            <h2 className="mt-2 whitespace-nowrap font-serif text-[52px] font-normal italic leading-[0.98] tracking-[-0.04em] bg-gradient-to-br from-violet-300 via-indigo-400 to-cyan-400 bg-clip-text text-transparent xl:text-[68px]">
   Problem Solver.
</h2>

            {/* Description */}
            <p className="mt-7 max-w-[600px] text-[15px] leading-6 text-slate-400 xl:text-[16px]">
             Mobile & Full-Stack Developer specializing in Flutter and MERN Stack. Skilled in building modern web & mobile applications using Flutter, React, Node.js, Express.js, MongoDB, Firebase, and REST APIs. Passionate about creating clean, scalable, and real-world software solutions.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-2.5">

              {/* View Projects */}
              <a
                href="#projects"
                className="group flex h-[52px] items-center gap-2.5 rounded-xl bg-blue-600 px-6 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition duration-300 hover:bg-blue-500"
              >
                View Projects

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* GitHub */}
             <a
  href="https://github.com/Rohit123borse"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="flex h-[52px] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] px-5 text-[13px] font-semibold text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
>
  <FaGithub className="text-[18px]" />
  GitHub
</a>

              {/* LinkedIn */}
   <a
  href="https://www.linkedin.com/in/rohit-borse-436900247"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-[52px] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] px-5 text-[13px] font-semibold text-slate-200 transition duration-300 hover:bg-white/[0.06]"
>
  <FaLinkedin className="text-[18px]" />
  LinkedIn
</a>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow */}
            <div className="absolute inset-0 m-auto h-[320px] w-[320px] rounded-full bg-blue-500/[0.08] blur-[100px]" />

            {/* Image */}
            <div className="relative">
              <div className="relative h-[320px] w-[300px] overflow-hidden rounded-[26px] border border-white/[0.12] bg-[#111827] p-2 shadow-[0_20px_65px_rgba(0,0,0,0.45)]">
                <Image
                  src="/rohit.jpg"
                  alt="Rohit Borse"
                  width={640}
                  height={800}
                  priority
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 rounded-xl border border-white/[0.10] bg-[#090E18]/95 px-3 py-2.5 shadow-[0_16px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-sm">
                    🚀
                  </div>

                  <div>
                    <p className="whitespace-nowrap text-[11px] font-semibold text-white">
                      Flutter + Full-Stack Developer
                    </p>

                    <p className="mt-0.5 whitespace-nowrap text-[9px] text-slate-500">
                      Flutter · Dart · Firebase · REST API
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}