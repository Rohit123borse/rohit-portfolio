// "use client";

// import Link from "next/link";
// import { ArrowRight, Download } from "lucide-react";
// import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import { heroContent } from "@/constants/hero";

// type HeroButtonsProps = {
//   primaryHref?: string;
//   secondaryHref?: string;
// };

// export function HeroButtons({
//   primaryHref = "/resume.pdf",
//   secondaryHref = "#projects",
// }: HeroButtonsProps) {
//   return (
//     <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//       <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
//         <Button asChild size="lg" className="rounded-full bg-sky-600 px-6 text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700">
//           <Link href={primaryHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
//             <Download size={18} />
//             {heroContent.ctas.primary}
//           </Link>
//         </Button>
//       </motion.div>

//       <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
//         <Button asChild variant="outline" size="lg" className="rounded-full border-zinc-300 bg-white/80 px-6 text-zinc-800 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100">
//           <Link href={secondaryHref} className="inline-flex items-center gap-2">
//             {heroContent.ctas.secondary}
//             <ArrowRight size={18} />
//           </Link>
//         </Button>
//       </motion.div>
//     </div>
//   );
// }

//new code
"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/hero";

type HeroButtonsProps = {
  primaryHref?: string;
  secondaryHref?: string;
};

export function HeroButtons({
  primaryHref = "/resume.pdf",
  secondaryHref = "#projects",
}: HeroButtonsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      {/* Resume Button */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={primaryHref}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="lg"
            className="
              rounded-full
              bg-blue-600
              px-7
              text-white
              shadow-[0_10px_40px_rgba(37,99,235,0.35)]
              hover:bg-blue-700
            "
          >
            <Download size={18} />
            {heroContent.ctas.primary}
          </Button>
        </Link>
      </motion.div>


      {/* Project Button */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={secondaryHref}>
          <Button
            size="lg"
            variant="outline"
            className="
              rounded-full
              border-white/15
              bg-white/5
              px-7
              text-white
              backdrop-blur-xl
              hover:bg-white/10
            "
          >
            {heroContent.ctas.secondary}
            <ArrowRight size={18} />
          </Button>
        </Link>
      </motion.div>

    </div>
  );
}