"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/types/project";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-600"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </Link>
        )}

        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-300"
          >
            GitHub
          </Link>
        )}
      </div>
    </motion.div>
  );
}
