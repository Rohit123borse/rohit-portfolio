"use client";

import { ContactForm } from "@/components/common/ContactForm";
import { ContactInfo } from "@/components/common/ContactInfo";
import { SectionSurface } from "@/components/common/SectionSurface";

export function Contact() {
  return (
    <SectionSurface id="contact" className="mt-8 py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionSurface>
  );
}
