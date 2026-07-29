type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
    </div>
  );
}
