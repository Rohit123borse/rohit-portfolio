"use client";

import { motion } from "framer-motion";

import { BackToTop } from "@/components/common/BackToTop";
import { FooterContent } from "@/components/common/FooterContent";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mx-auto mb-8 mt-8 flex w-full max-w-6xl flex-col gap-4 px-6 sm:px-8 lg:px-12"
    >
      <FooterContent currentYear={currentYear} />
      <div className="flex items-center justify-end">
        <BackToTop />
      </div>
    </motion.footer>
  );
}
