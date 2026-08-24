"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Newspaper, Trophy, X } from "lucide-react";

import { certifications } from "@/constants/certifications";

export function Certifications() {
  const featured = certifications.find((item) => item.featured);
  const others = certifications.filter((item) => !item.featured);

  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);

  return (
    <>
      <section
        id="certifications"
        className="relative bg-[#070b12] px-6 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-500">
              // Credentials &amp; Achievements
            </p>

            <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-bold tracking-[-0.02em] text-slate-100">
              Certifications &amp; Achievements
            </h2>

            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.7] text-slate-600">
              Recognition earned through innovation, technical competitions,
              and hands-on problem solving.
            </p>
          </motion.div>

          {/* Featured Achievement */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="
                relative
                mb-5
                overflow-hidden
                rounded-xl
                border
                border-white/[0.07]
                bg-[rgba(15,20,35,0.6)]
                p-6
                transition-all
                duration-300
                hover:border-blue-500/20
                sm:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-[-100px]
                  top-[-100px]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  bg-blue-600/[0.07]
                  blur-3xl
                "
              />

              <div className="relative">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-blue-500/15 bg-blue-500/[0.06] px-3 py-1.5">
                      <Trophy className="h-3.5 w-3.5 text-blue-500" />

                      <span className="font-mono text-[10px] uppercase tracking-wider text-blue-500">
                        Featured Achievement
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold tracking-[-0.02em] text-slate-100 sm:text-[28px]">
                      {featured.title}
                    </h3>
                  </div>

                  {featured.rank && (
                    <span className="rounded-md border border-blue-500/15 bg-blue-500/[0.08] px-3 py-1.5 font-mono text-[11px] font-medium text-blue-400">
                      {featured.rank}
                    </span>
                  )}
                </div>

                <p className="mb-2 text-[13px] font-medium text-blue-500">
                  {featured.organization}
                </p>

                <p className="mb-5 font-mono text-[11px] text-slate-600">
                  {featured.date}
                </p>

                <p className="max-w-[720px] text-[14px] leading-[1.75] text-slate-500 sm:text-[15px]">
                  {featured.description}
                </p>

                {/* View Certificate */}
                {featured.image && (
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(featured)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-slate-300
                        transition-all
                        hover:border-blue-500/30
                        hover:bg-blue-500/[0.05]
                        hover:text-blue-300
                      "
                    >
                      View Certificate
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </motion.article>
          )}

          {/* Other Achievements */}
          <div className="grid gap-5 md:grid-cols-2">
            {others.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-[rgba(15,20,35,0.6)]
                  p-6
                  transition-all
                  duration-300
                  hover:border-blue-500/20
                  sm:p-7
                "
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
                      {item.category === "Recognition" ? (
                        <Newspaper className="h-3.5 w-3.5 text-slate-500" />
                      ) : (
                        <Award className="h-3.5 w-3.5 text-blue-500" />
                      )}

                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold tracking-[-0.02em] text-slate-100">
                      {item.title}
                    </h3>
                  </div>

                  {item.rank && (
                    <span className="shrink-0 rounded-md border border-blue-500/15 bg-blue-500/[0.06] px-2.5 py-1 font-mono text-[10px] text-blue-400">
                      {item.rank}
                    </span>
                  )}
                </div>

                <p className="mb-2 text-[13px] font-medium text-blue-500">
                  {item.organization}
                </p>

                <p className="mb-4 font-mono text-[11px] text-slate-600">
                  {item.date}
                </p>

                <p className="text-[14px] leading-[1.75] text-slate-500">
                  {item.description}
                </p>

                {/* View Certificate / Recognition */}
                {item.image && (
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(item)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-slate-400
                        transition-colors
                        hover:text-blue-400
                      "
                    >
                      {item.category === "Recognition"
                        ? "View Recognition"
                        : "View Certificate"}

                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate?.image && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="
              relative
              max-h-[92vh]
              max-w-5xl
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#0f1423]
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
              className="
                absolute
                right-3
                top-3
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/60
                text-slate-300
                backdrop-blur
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >
              <X className="h-4 w-4" />
            </button>

            {/* Certificate Image */}
            <div className="max-h-[92vh] overflow-auto p-2 sm:p-3">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={1400}
                height={1000}
                className="
                  h-auto
                  max-h-[86vh]
                  w-auto
                  max-w-full
                  rounded-lg
                  object-contain
                "
                priority
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}