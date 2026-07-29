"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AnimatedRole } from "@/components/common/AnimatedRole";
import { FloatingBadges } from "@/components/common/FloatingBadges";
import { HeroButtons } from "@/components/common/HeroButtons";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { SectionSurface } from "@/components/common/SectionSurface";
import { SocialLinks } from "@/components/common/SocialLinks";
import { heroContent } from "@/constants/hero";

export function Hero() {
  return (
    <SectionSurface id="home" className="overflow-hidden py-20 sm:py-24 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:36px_36px] dark:opacity-10" />

      <div className="relative mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400">
            {heroContent.greeting}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-7xl">
            {heroContent.name}
          </h1>
          <AnimatedRole />
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {heroContent.description}
          </p>

          <HeroButtons />
          <SocialLinks />
          <ScrollIndicator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="relative mx-auto flex w-full max-w-lg items-center justify-center"
        >
          <div className="relative h-[420px] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-sky-500/20 via-white/70 to-violet-500/20 p-4 shadow-[0_25px_70px_rgba(14,116,144,0.2)] backdrop-blur-xl dark:border-zinc-700 dark:from-sky-500/10 dark:via-zinc-950/70 dark:to-violet-500/10">
            <Image
              src="/profile-placeholder.svg"
              alt="Professional developer illustration"
              width={640}
              height={640}
              priority
              className="h-full w-full rounded-[1.3rem] object-cover"
            />
            <FloatingBadges />
          </div>
        </motion.div>
      </div>
    </SectionSurface>
  );
}
