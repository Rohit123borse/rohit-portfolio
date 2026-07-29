"use client";

import { motion } from "framer-motion";

import { aboutContent } from "@/constants/about";
import { JourneyCard } from "@/components/common/JourneyCard";
import { StatsCard } from "@/components/common/StatsCard";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="space-y-8"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400">
          {aboutContent.heading}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          {aboutContent.subheading}
        </h2>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {aboutContent.summary}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {aboutContent.journey.map((item) => (
          <JourneyCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {aboutContent.stats.map((item) => (
          <StatsCard key={item.label} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
