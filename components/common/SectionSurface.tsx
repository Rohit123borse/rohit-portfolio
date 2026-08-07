import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionSurfaceProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  withGlow?: boolean;
};

export function SectionSurface({
  id,
  children,
  className,
  withGlow = true,
}: SectionSurfaceProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden bg-[#050912] px-6 py-24 sm:px-8 lg:px-12",
        className
      )}
    >
      {/* Subtle Blue Glow */}
      {withGlow && (
        <div className="pointer-events-none absolute -right-56 -top-56 h-[600px] w-[600px] rounded-full bg-blue-600/[0.035] blur-[150px]" />
      )}

      {/* Subtle Purple Glow */}
      {withGlow && (
        <div className="pointer-events-none absolute -bottom-56 -left-56 h-[600px] w-[600px] rounded-full bg-purple-600/[0.025] blur-[160px]" />
      )}

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
}