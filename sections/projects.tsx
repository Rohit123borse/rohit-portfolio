"use client";

import { ProjectCard } from "@/components/common/ProjectCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionSurface } from "@/components/common/SectionSurface";
import { projects } from "@/constants/projects";

export function Projects() {
  return (
    <SectionSurface id="projects" className="mt-8 py-16 sm:py-20">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          subtitle="Real-world applications and engineering projects I have built."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionSurface>
  );
}
