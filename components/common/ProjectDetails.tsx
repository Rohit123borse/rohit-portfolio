"use client";

import Link from "next/link";
// import { ArrowUpRight, GithubIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { TechBadge } from "@/components/common/TechBadge";
import type { ProjectItem } from "@/types/project";

type ProjectDetailsProps = {
  project: ProjectItem;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="mt-5 space-y-5">
      <div className="flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
        {project.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:text-zinc-400">Features</h4>
        <ul className="mt-3 space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.challenges ? (
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:text-zinc-400">Challenges</h4>
          <ul className="mt-3 space-y-2">
            {project.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {project.githubUrl ? (
          <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:border-sky-500 hover:text-sky-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:text-sky-400"
            >
              <FaGithub size={16} />
              GitHub
            </Link>
          </motion.div>
        ) : null}

        {project.demoUrl ? (
          <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
