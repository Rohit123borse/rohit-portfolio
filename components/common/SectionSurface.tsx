import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionSurfaceProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  withGlow?: boolean;
};

export function SectionSurface({ id, children, className, withGlow = true }: SectionSurfaceProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 px-6 py-16 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-900/70 sm:px-8 lg:px-12 lg:py-20",
        className
      )}
    >
      {withGlow ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.14),_transparent_30%)]" />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}
