"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/lib/email";
import type { ContactFormValues } from "@/types/contact";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const result = await sendContactEmail(formValues);

    if (result.success) {
      setStatus("success");
      setFeedback(result.message);
      setFormValues(initialValues);
      return;
    }

    setStatus("error");
    setFeedback(result.message);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/70"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <span>Name</span>
          <input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Your name"
            className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-zinc-700 dark:bg-zinc-950/70"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="your@email.com"
            className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-zinc-700 dark:bg-zinc-950/70"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <span>Subject</span>
        <input
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          required
          aria-required="true"
          placeholder="Project discussion"
          className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-zinc-700 dark:bg-zinc-950/70"
        />
      </label>

      <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <span>Message</span>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
          aria-required="true"
          placeholder="Tell me about your idea..."
          rows={6}
          className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-zinc-700 dark:bg-zinc-950/70"
        />
      </label>

      <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="mt-6">
        <Button type="submit" className="w-full rounded-full bg-sky-600 px-5 py-2.5 text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700">
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </span>
          ) : status === "success" ? (
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} />
              Sent
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Send size={16} />
              Send Message
            </span>
          )}
        </Button>
      </motion.div>

      {feedback ? (
        <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-600 dark:text-emerald-400" : status === "error" ? "text-rose-600 dark:text-rose-400" : "text-zinc-600 dark:text-zinc-400"}`}>
          {feedback}
        </p>
      ) : null}
    </motion.form>
  );
}
