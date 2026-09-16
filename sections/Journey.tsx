"use client";

import { motion } from "framer-motion";

const journey = [

    {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "Cognevance Technologies",
    type: "Internship",
    date: "Sep 2026 — Present",
    description:
      "Working on industry-oriented web application projects using MongoDB, Express.js, React.js, and Node.js. Gaining hands-on experience in REST APIs, authentication, CRUD operations, database integration, deployment, and full-stack development.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST API",
      "JWT",
      "bcrypt",
      "CRUD",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Netlify",
    ],
  },


  {
    id: 2,
    role: "Flutter Developer Intern",
    company: "Octverse Technologies Pvt. Ltd",
    type: "Internship",
    date: "Jan 2026 — July 2026",
    description:
      "Worked on live mobile application projects using Flutter and Dart. Developed responsive UI components, integrated REST APIs, handled API states, worked with Firebase services, and collaborated using Git workflows.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "Dio",
      "Git",
      "GitHub",
      "Postman",
      "Provider",
      "Google Maps",
      "Vscode",
    ],
  },

  {
    id: 3,
    role: "Master of Computer Applications (MCA)",
    company: "Sandeep Institute of Technology and Research Center",
    type: "Education · 9.00 GPA",
    date: "2024 — 2026",
    description:
      "Completed my Master of Computer Applications with a focus on software development, mobile application development, programming, databases, and modern technologies.",
    skills: [
      "Flutter",
      "Dart",
      "Java",
      "Database",
      "Software Development",
    ],
  },

  {
    id: 4,
    role: "Bachelor of Computer Applications (BCA)",
    company: "R. C. Patel Institute, Shirpur",
    type: "Education · 9.29 GPA",
    date: "2021 — 2024",
    description:
      "Built a strong foundation in programming, computer applications, databases, web technologies, and software development.",
    skills: [
      "Programming",
      "Java",
      "Database",
      "Web Development",
    ],
  },
];

export function Journey() {
  return (
    <section
      id="journey"
      className="relative bg-[#070b16] pt-12 pb-24 sm:pt-16 sm:pb-32"
    >
      <div className="mx-auto w-full max-w-[850px] px-6 sm:px-8">
        {/* =========================
            HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-14"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-500 sm:text-xs">
            // Career Timeline
          </p>

          <h2 className="mb-14 font-serif text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-[#f1f5f9]">
  My Journey
</h2>
        </motion.div>

        {/* =========================
            TIMELINE
        ========================== */}
        <div className="flex flex-col gap-0">
          {journey.map((item, index) => {
            const isLast = index === journey.length - 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`flex gap-6 ${
                  isLast ? "pb-0" : "pb-10"
                }`}
              >
                {/* =========================
                    TIMELINE DOT + LINE
                ========================== */}
                <div className="flex w-6 shrink-0 flex-col items-center">
                  {/* DOT */}
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#070b16]">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#475569] ring-4 ring-[#070b16]" />
                  </div>

                  {/* CONNECTING LINE */}
                  {!isLast && (
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-blue-500/30 to-slate-700/20" />
                  )}
                </div>

                {/* =========================
                    EXPERIENCE / EDUCATION CARD
                ========================== */}
                <article className="mt-[-3px] flex-1 rounded-xl border border-white/[0.06] bg-[rgba(15,20,35,0.6)] p-6 transition-all duration-200 hover:border-[#2e3d56] sm:p-7">
                  {/* ROLE + DATE */}
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-[17px] font-semibold text-[#f1f5f9] sm:text-lg">
                      {item.role}
                    </h3>

                    <span className="shrink-0 font-mono text-xs text-[#475569]">
                      {item.date}
                    </span>
                  </div>

                  {/* COMPANY */}
                  <p className="mb-1 text-[13px] font-medium text-[#2563eb]">
                    {item.company}
                  </p>

                  {/* TYPE */}
                  <p className="mb-[14px] font-mono text-[11px] uppercase tracking-wide text-[#334155]">
                    {item.type}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mb-4 text-[14px] leading-[1.7] text-[#64748b]">
                    {item.description}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-[6px]">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[#1e293b] bg-[#131c2e] px-[10px] py-1 text-[11px] font-medium text-[#94a3b8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}