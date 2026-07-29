import Link from "next/link";

import { footerNavigationItems } from "@/constants/footer";
import { siteContent } from "@/lib/site-data";
import { FooterSocials } from "@/components/common/FooterSocials";

export function FooterContent({ currentYear }: { currentYear: number }) {
  return (
    <div className="grid gap-8 rounded-[1.5rem] border border-white/60 bg-white/70 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-900/70 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">Portfolio</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{siteContent.name}</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{siteContent.role}</p>
        </div>

        <p className="max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Building thoughtful digital experiences with a focus on clarity, performance, and craft.
        </p>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {currentYear} {siteContent.name}. All rights reserved.
        </p>
      </div>

      <nav aria-label="Footer navigation" className="lg:justify-self-center">
        <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {footerNavigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-sky-700 dark:hover:text-sky-400">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-4 lg:justify-self-end">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Connect</p>
        <FooterSocials />
      </div>
    </div>
  );
}
