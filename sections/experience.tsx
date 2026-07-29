"use client";

import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionSurface } from "@/components/common/SectionSurface";
import { Timeline } from "@/components/common/Timeline";

export function Experience() {
  return (
    <SectionSurface id="experience" className="mt-8 py-16 sm:py-20">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          subtitle="My professional journey and hands-on development experience."
        />
        <Timeline />
      </div>
    </SectionSurface>
  );
}
