import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionShellProps) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <section id={id} className={cn("mx-auto flex w-full max-w-6xl flex-col px-6 py-20 sm:px-8 lg:px-12", className)}>
      {(eyebrow || title || description) && (
        <div className={cn("max-w-3xl", alignmentClass)}>
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          ) : null}
        </div>
      )}

      <div className="mt-10">{children}</div>
    </section>
  );
}
