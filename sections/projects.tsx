"use client";

import { motion } from "framer-motion";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#070b12] py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-8">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-500">
            // Featured Work
          </div>

          <h2 className="mb-4 font-serif text-[32px] font-bold tracking-[-0.02em] text-slate-100 sm:text-[40px]">
  Featured Projects
</h2>

          <p className="max-w-[560px] text-[15px] leading-7 text-slate-600 sm:text-base">
  A selection of production, personal, and academic projects showcasing
  my experience in mobile and web application development.
</p>
        </motion.div>

        {/* =========================
            PROJECT GRID
        ========================== */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* =========================
              MOKSHARIDE
          ========================== */}
          {/* <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="
              rounded-xl
              border
              border-white/[0.06]
              bg-[rgba(15,20,35,0.6)]
              p-6
              transition-all
              duration-300
              hover:border-blue-500/20
              md:col-span-2
            "
          > */}
            {/* Header */}
            {/* <div className="mb-2 flex flex-col items-start justify-between gap-3 sm:flex-row">
              <div>
                <span className="mb-3 inline-block rounded-md border border-blue-500/15 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[11px] font-medium text-blue-400">
                  Full-Stack Ecosystem
                </span>

                <h3 className="font-serif text-[26px] font-bold tracking-[-0.02em] text-slate-100 sm:text-[28px]">
                  Moksharide — Ride-Hailing Platform
                </h3>
              </div>

              <span className="shrink-0 rounded-md border border-blue-500/15 bg-blue-500/[0.08] px-3 py-1.5 font-mono text-[11px] text-blue-500">
                Live · Production
              </span>
            </div> */}

            {/* Description */}
            {/* <p className="mb-6 mt-3 max-w-[680px] text-[14px] leading-7 text-slate-500 sm:text-[15px]">
              Engineered a complete ride-hailing infrastructure from the
              ground up — including a{" "}
              <strong className="font-semibold text-slate-400">
                Flutter User App
              </strong>
              , a{" "}
              <strong className="font-semibold text-slate-400">
                Flutter Driver App
              </strong>{" "}
              with real-time GPS tracking, and a{" "}
              <strong className="font-semibold text-slate-400">
                React Admin Dashboard
              </strong>
              . Integrated Firebase for real-time location sync and push
              notifications. Later extended with AI-powered customer support
              (text + voice).
            </p> */}

            {/* App Architecture */}
            {/* <div className="mb-7 grid grid-cols-1 gap-4 rounded-[10px] border border-white/[0.04] bg-black/20 p-5 sm:grid-cols-3">
              {/* User App */}
              {/* <div className="text-center">
                <div className="mb-1.5 text-[22px]">📱</div>

                <div className="mb-1 text-[13px] font-semibold text-slate-300">
                  User App
                </div>

                <div className="font-mono text-[11px] text-slate-600">
                  Flutter · Firebase · Maps
                </div>
              </div> */}

              {/* Driver App */}
              {/* <div className="text-center">
                <div className="mb-1.5 text-[22px]">🚗</div>

                <div className="mb-1 text-[13px] font-semibold text-slate-300">
                  Driver App
                </div>

                <div className="font-mono text-[11px] text-slate-600">
                  Flutter · GPS · Real-Time
                </div>
              </div> */}

              {/* Admin Panel */}
              {/* <div className="text-center">
                <div className="mb-1.5 text-[22px]">🖥️</div>

                <div className="mb-1 text-[13px] font-semibold text-slate-300">
                  Admin Panel
                </div>

                <div className="font-mono text-[11px] text-slate-600">
                  React · REST API · Charts
                </div>
              </div> */}
            {/* </div> */} 

            {/* Technologies */}
            {/* <div className="flex flex-wrap gap-2">
              {[
                "Flutter",
                "Dart",
                "React",
                "Firebase",
                "Google Maps API",
                "Real-Time GPS",
                "REST APIs",
                "Push Notifications",
                "Live Tracking",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-md
                    border
                    border-white/[0.07]
                    bg-[#111827]
                    px-3
                    py-1.5
                    text-[11px]
                    font-medium
                    text-slate-400
                  "
                >
                  {skill}
                </span>
              ))}
            </div> */}
          {/* </motion.article> */}


          {/* =========================
    MOTOBUKET
========================== */}
<motion.article
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.5 }}
  className="
    rounded-xl
    border
    border-white/[0.06]
    bg-[rgba(15,20,35,0.6)]
    p-6
    transition-all
    duration-300
    hover:border-blue-500/20
    md:col-span-2
  "
>
  {/* Header */}
  <div className="mb-2 flex flex-col items-start justify-between gap-3 sm:flex-row">
    <div>
      <span className="mb-3 inline-block rounded-md border border-blue-500/15 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[11px] font-medium text-blue-400">
        Internship · Production
      </span>

      <h3 className="font-serif text-[26px] font-bold tracking-[-0.02em] text-slate-100 sm:text-[28px]">
        MotoBuket — Smart Car Service Platform
      </h3>
    </div>

    <span className="shrink-0 rounded-md border border-blue-500/15 bg-blue-500/[0.08] px-3 py-1.5 font-mono text-[11px] text-blue-500">
      Live · Production
    </span>
  </div>

  {/* Description */}
  <p className="mb-6 mt-3 max-w-[680px] text-[14px] leading-7 text-slate-500 sm:text-[15px]">
    Worked on a production vehicle service booking platform built with{" "}
    <strong className="font-semibold text-slate-400">
      Flutter
    </strong>
    . Developed responsive UI screens, integrated{" "}
    <strong className="font-semibold text-slate-400">
      REST APIs
    </strong>
    , implemented vendor search and service booking flows, and integrated
    Firebase and Google Maps to deliver a smooth customer experience.
  </p>

  {/* Project Architecture */}
  <div className="mb-7 grid grid-cols-1 gap-4 rounded-[10px] border border-white/[0.04] bg-black/20 p-5 sm:grid-cols-3">
    {/* Customer App */}
    <div className="text-center">
      <div className="mb-1.5 text-[22px]">📱</div>

      <div className="mb-1 text-[13px] font-semibold text-slate-300">
        Customer App
      </div>

      <div className="font-mono text-[11px] text-slate-600">
        Flutter · Provider · Firebase
      </div>
    </div>

    {/* Service Booking */}
    <div className="text-center">
      <div className="mb-1.5 text-[22px]">🚗</div>

      <div className="mb-1 text-[13px] font-semibold text-slate-300">
        Service Booking
      </div>

      <div className="font-mono text-[11px] text-slate-600">
        REST API · Dio · Vendor Search
      </div>
    </div>

    {/* Location */}
    <div className="text-center">
      <div className="mb-1.5 text-[22px]">📍</div>

      <div className="mb-1 text-[13px] font-semibold text-slate-300">
        Location Services
      </div>

      <div className="font-mono text-[11px] text-slate-600">
        Google Maps · Location
      </div>
    </div>
  </div>

  {/* Technologies */}
  <div className="flex flex-wrap gap-2">
    {[
      "Flutter",
      "Dart",
      "Provider",
      "REST APIs",
      "Dio",
      "Firebase",
      "Google Maps",
      "Postman",
    ].map((skill) => (
      <span
        key={skill}
        className="
          rounded-md
          border
          border-white/[0.07]
          bg-[#111827]
          px-3
          py-1.5
          text-[11px]
          font-medium
          text-slate-400
        "
      >
        {skill}
      </span>
    ))}
  </div>
</motion.article>

          {/* =========================
              NEWSHUB
          ========================== */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="
              rounded-xl
              border
              border-white/[0.06]
              bg-[rgba(15,20,35,0.6)]
              p-6
              transition-all
              duration-300
              hover:border-blue-500/20
            "
          >
            <span className="mb-3 inline-block rounded-md border border-blue-500/15 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[11px] font-medium text-blue-400">
              Personal Project
            </span>

            <h3 className="mb-1 font-serif text-[23px] font-bold tracking-[-0.02em] text-slate-100">
              NewsHub — News Aggregator App
            </h3>

            <p className="mb-4 font-mono text-[11px] text-slate-600">
              Flutter · Firebase · In Progress
            </p>

            <p className="mb-6 text-[14px] leading-7 text-slate-500">
              Building a Flutter news aggregator app with Firebase Firestore
              as the backend for article storage and categorization.
              Implementing category-based browsing, article bookmarking, and
              Firebase Cloud Messaging for breaking-news push notifications.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Flutter",
                "Dart",
                "Firebase",
                "Firestore",
                "FCM",
                "Responsive UI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-md
                    border
                    border-white/[0.07]
                    bg-[#111827]
                    px-3
                    py-1.5
                    text-[11px]
                    font-medium
                    text-slate-400
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>

      {/* =========================
    PERSONAL PORTFOLIO
========================== */}
<motion.article
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.5, delay: 0.08 }}
  className="
    rounded-xl
    border
    border-white/[0.06]
    bg-[rgba(15,20,35,0.6)]
    p-6
    transition-all
    duration-300
    hover:border-blue-500/20
  "
>
  <span className="mb-3 inline-block rounded-md border border-purple-500/15 bg-purple-500/[0.06] px-3 py-1.5 font-mono text-[11px] font-medium text-purple-400">
    Personal Project
  </span>

  <h3 className="mb-1 font-serif text-[23px] font-bold tracking-[-0.02em] text-slate-100">
    Personal Portfolio Website
  </h3>

  <p className="mb-4 font-mono text-[11px] text-slate-600">
    Next.js · TypeScript · Supabase · Resend
  </p>

  <p className="mb-6 text-[14px] leading-7 text-slate-500">
    A modern, responsive developer portfolio built to showcase my skills,
    projects, experience, and professional journey. Includes a functional
    contact system with Supabase database integration and email delivery
    using Resend.
  </p>

  <div className="flex flex-wrap gap-2">
    {[
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "Resend",
    ].map((skill) => (
      <span
        key={skill}
        className="
          rounded-md
          border
          border-white/[0.07]
          bg-[#111827]
          px-3
          py-1.5
          text-[11px]
          font-medium
          text-slate-400
        "
      >
        {skill}
      </span>
    ))}
  </div>
</motion.article>

         {/* =========================
    THE BOOK SPOT
========================== */}
<motion.article
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.5, delay: 0.24 }}
  className="
    rounded-xl
    border
    border-white/[0.06]
    bg-[rgba(15,20,35,0.6)]
    p-6
    transition-all
    duration-300
    hover:border-blue-500/20
  "
>
  <span className="mb-3 inline-block rounded-md border border-blue-500/15 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[11px] font-medium text-blue-400">
    Academic Project
  </span>

  <h3 className="mb-1 font-serif text-[23px] font-bold tracking-[-0.02em] text-slate-100">
    The Book Spot — E-commerce Website
  </h3>

  <p className="mb-4 font-mono text-[11px] text-slate-600">
    HTML · CSS · JavaScript · May 2021 — July 2021
  </p>

  <p className="mb-6 text-[14px] leading-7 text-slate-500">
    Developed a responsive e-commerce website for browsing and purchasing
    books. Implemented product listing and basic cart functionality while
    focusing on responsive design and an improved user experience.
  </p>

  <div className="flex flex-wrap gap-2">
    {[
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Product Listing",
      "Shopping Cart",
      "UI/UX",
    ].map((skill) => (
      <span
        key={skill}
        className="
          rounded-md
          border
          border-white/[0.07]
          bg-[#111827]
          px-3
          py-1.5
          text-[11px]
          font-medium
          text-slate-400
        "
      >
        {skill}
      </span>
    ))}
  </div>
</motion.article>
        </div>
      </div>
    </section>
  );
}