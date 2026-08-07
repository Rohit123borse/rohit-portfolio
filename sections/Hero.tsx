"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#050912] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[5%] top-[25%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute right-[5%] top-[15%] h-[450px] w-[450px] rounded-full bg-indigo-500/[0.05] blur-[140px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1250px] items-center px-6 py-20 lg:px-0">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            {/* Badges */}
            <div className="mb-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to Full-Time Opportunities
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-purple-400">
                <span>✦</span>
                Flutter Developer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="whitespace-nowrap font-serif text-[64px] font-medium leading-[0.95] tracking-[-0.045em] text-white xl:text-[78px]">
              Flutter Developer.
            </h1>

            {/* Second Line */}
            <h2 className="mt-4 whitespace-nowrap font-serif text-[55px] font-normal italic leading-[0.98] tracking-[-0.04em] text-[#27B5F4] xl:text-[68px]">
              Full-Stack Developer.
            </h2>

            {/* Third Line */}
            <h2 className="mt-3 whitespace-nowrap font-serif text-[55px] font-normal italic leading-[0.98] tracking-[-0.04em] text-[#9A8CFF] xl:text-[68px]">
              Mobile App Developer.
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[650px] text-[16px] leading-7 text-slate-400 xl:text-[17px]">
              I build modern cross-platform mobile applications using
              Flutter, Dart, Firebase, REST APIs, and scalable app
              architectures. Focused on clean UI, reliable API integration,
              and real-world applications.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group flex h-[58px] items-center gap-3 rounded-xl bg-blue-600 px-7 text-[15px] font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.25)] transition duration-300 hover:bg-blue-500"
              >
                View Projects
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[58px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-6 text-[15px] font-semibold text-slate-200 transition hover:bg-white/[0.06]"
              >
                <span className="text-lg">◉</span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[58px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-6 text-[15px] font-semibold text-slate-200 transition hover:bg-white/[0.06]"
              >
                <span className="font-bold">in</span>
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
            <div className="absolute inset-0 m-auto h-[350px] w-[350px] rounded-full bg-blue-500/[0.08] blur-[110px]" />

            {/* Image */}
            <div className="relative">
              <div className="relative h-[390px] w-[320px] overflow-hidden rounded-[28px] border border-white/[0.12] bg-[#111827] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src="/rohit.jpg"
                  alt="Rohit Borse"
                  width={640}
                  height={800}
                  priority
                  className="h-full w-full rounded-[22px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-8 rounded-2xl border border-white/[0.10] bg-[#090E18]/95 px-4 py-3 shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                    🚀
                  </div>

                  <div>
                    <p className="whitespace-nowrap text-[13px] font-semibold text-white">
                      Flutter + Full-Stack Developer
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
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