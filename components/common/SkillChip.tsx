// "use client";

// import { motion } from "framer-motion";

// type SkillChipProps = {
//   label: string;
// };

// export function SkillChip({ label }: SkillChipProps) {
//   return (
//     <motion.span
//       whileHover={{
//         y: -2,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//       }}
//       className="inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[13px] font-medium text-slate-300 transition-colors duration-200 hover:border-blue-500/30 hover:bg-blue-500/[0.05] hover:text-blue-300"
//     >
//       {label}
//     </motion.span>
//   );
// }

//new code
"use client";

import { motion } from "framer-motion";

type SkillChipProps = {
  label: string;
  variant?: "default" | "purple";
};

export function SkillChip({
  label,
  variant = "default",
}: SkillChipProps) {
  const isPurple = variant === "purple";

  return (
    <motion.span
      whileHover={{
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`
        inline-flex
        items-center
        rounded-lg
        border
        px-4
        py-2
        text-[13px]
        font-medium
        transition-all
        duration-200
        ${
          isPurple
            ? `
              border-[#a78bfa30]
              bg-[#a78bfa15]
              text-[#a78bfa]
              hover:border-[#a78bfa50]
              hover:bg-[#a78bfa20]
              hover:text-[#a78bfa]
            `
            : `
              border-white/[0.08]
              bg-white/[0.02]
              text-slate-300
              hover:border-blue-500/30
              hover:bg-blue-500/[0.05]
              hover:text-blue-300
            `
        }
      `}
    >
      {label}
    </motion.span>
  );
}