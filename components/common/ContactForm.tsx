// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle2, Loader2, Send } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { sendContactEmail } from "@/lib/email";
// import type { ContactFormValues } from "@/types/contact";

// const initialValues: ContactFormValues = {
//   name: "",
//   email: "",
//   subject: "",
//   message: "",
// };

// export function ContactForm() {
//   const [formValues, setFormValues] =
//     useState<ContactFormValues>(initialValues);

//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");

//   const [feedback, setFeedback] = useState("");

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;

//     setFormValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();

//     setStatus("loading");
//     setFeedback("");

//     const result = await sendContactEmail(formValues);

//     if (result.success) {
//       setStatus("success");
//       setFeedback(result.message);
//       setFormValues(initialValues);
//       return;
//     }

//     setStatus("error");
//     setFeedback(result.message);
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0, x: 24 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       onSubmit={handleSubmit}
//       noValidate
//       className="
//         rounded-xl
//         border
//         border-white/[0.06]
//         bg-[rgba(15,20,35,0.6)]
//         p-6
//         shadow-sm
//         transition-all
//         duration-300
//         hover:border-white/[0.09]
//         sm:p-7
//       "
//     >
//       {/* FORM GRID */}
//       <div className="grid gap-5 sm:grid-cols-2">

//         {/* NAME */}
//         <label className="flex flex-col gap-2">
//           <span
//             className="
//               font-mono
//               text-[11px]
//               font-medium
//               uppercase
//               tracking-[0.18em]
//               text-slate-500
//             "
//           >
//             Name
//           </span>

//           <input
//             name="name"
//             value={formValues.name}
//             onChange={handleChange}
//             required
//             aria-required="true"
//             placeholder="Your name"
//             className="
//               w-full
//               rounded-lg
//               border
//               border-[#1e293b]
//               bg-[#0b1120]
//               px-4
//               py-3
//               text-sm
//               text-slate-200
//               outline-none
//               placeholder:text-slate-600
//               transition-all
//               duration-200
//               focus:border-blue-500/50
//               focus:ring-2
//               focus:ring-blue-500/10
//             "
//           />
//         </label>

//         {/* EMAIL */}
//         <label className="flex flex-col gap-2">
//           <span
//             className="
//               font-mono
//               text-[11px]
//               font-medium
//               uppercase
//               tracking-[0.18em]
//               text-slate-500
//             "
//           >
//             Email
//           </span>

//           <input
//             name="email"
//             type="email"
//             value={formValues.email}
//             onChange={handleChange}
//             required
//             aria-required="true"
//             placeholder="your@email.com"
//             className="
//               w-full
//               rounded-lg
//               border
//               border-[#1e293b]
//               bg-[#0b1120]
//               px-4
//               py-3
//               text-sm
//               text-slate-200
//               outline-none
//               placeholder:text-slate-600
//               transition-all
//               duration-200
//               focus:border-blue-500/50
//               focus:ring-2
//               focus:ring-blue-500/10
//             "
//           />
//         </label>
//       </div>

//       {/* SUBJECT */}
//       <label className="mt-5 flex flex-col gap-2">
//         <span
//           className="
//             font-mono
//             text-[11px]
//             font-medium
//             uppercase
//             tracking-[0.18em]
//             text-slate-500
//           "
//         >
//           Subject
//         </span>

//         <input
//           name="subject"
//           value={formValues.subject}
//           onChange={handleChange}
//           required
//           aria-required="true"
//           placeholder="Project discussion"
//           className="
//             w-full
//             rounded-lg
//             border
//             border-[#1e293b]
//             bg-[#0b1120]
//             px-4
//             py-3
//             text-sm
//             text-slate-200
//             outline-none
//             placeholder:text-slate-600
//             transition-all
//             duration-200
//             focus:border-blue-500/50
//             focus:ring-2
//             focus:ring-blue-500/10
//           "
//         />
//       </label>

//       {/* MESSAGE */}
//       <label className="mt-5 flex flex-col gap-2">
//         <span
//           className="
//             font-mono
//             text-[11px]
//             font-medium
//             uppercase
//             tracking-[0.18em]
//             text-slate-500
//           "
//         >
//           Message
//         </span>

//         <textarea
//           name="message"
//           value={formValues.message}
//           onChange={handleChange}
//           required
//           aria-required="true"
//           placeholder="Tell me about your idea..."
//           rows={6}
//           className="
//             w-full
//             resize-none
//             rounded-lg
//             border
//             border-[#1e293b]
//             bg-[#0b1120]
//             px-4
//             py-3
//             text-sm
//             leading-7
//             text-slate-200
//             outline-none
//             placeholder:text-slate-600
//             transition-all
//             duration-200
//             focus:border-blue-500/50
//             focus:ring-2
//             focus:ring-blue-500/10
//           "
//         />
//       </label>

//       {/* SEND BUTTON */}
//       <motion.div
//         whileHover={{ y: -1 }}
//         whileTap={{ scale: 0.98 }}
//         className="mt-6"
//       >
//         <Button
//           type="submit"
//           disabled={status === "loading"}
//           className="
//             inline-flex
//             w-full
//             items-center
//             justify-center
//             gap-2
//             rounded-lg
//             border
//             border-blue-500/30
//             bg-blue-600
//             px-5
//             py-3
//             text-sm
//             font-semibold
//             text-white
//             shadow-lg
//             shadow-blue-600/10
//             transition-all
//             duration-200
//             hover:bg-blue-500
//             disabled:cursor-not-allowed
//             disabled:opacity-70
//           "
//         >
//           {status === "loading" ? (
//             <>
//               <Loader2
//                 size={16}
//                 className="animate-spin"
//               />
//               Sending...
//             </>
//           ) : status === "success" ? (
//             <>
//               <CheckCircle2 size={16} />
//               Message Sent
//             </>
//           ) : (
//             <>
//               <Send size={16} />
//               Send Message
//             </>
//           )}
//         </Button>
//       </motion.div>

//       {/* FEEDBACK */}
//       {feedback ? (
//         <p
//           className={`
//             mt-4
//             text-sm
//             ${
//               status === "success"
//                 ? "text-emerald-400"
//                 : status === "error"
//                 ? "text-rose-400"
//                 : "text-slate-400"
//             }
//           `}
//         >
//           {feedback}
//         </p>
//       ) : null}
//     </motion.form>
//   );
// }



// new database code
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ContactFormValues } from "@/types/contact";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialValues);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear old feedback when user edits the form again
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const subject = formValues.subject.trim();
    const message = formValues.message.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      setStatus("error");
      setFeedback(
        "Please complete every field before sending your message."
      );
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      // Send contact form to our Next.js API route.
      // The API route handles Supabase + Resend securely on the server.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error("Contact API error:", result);

        setStatus("error");
        setFeedback(
          result.message ||
            "Unable to send your message. Please try again later."
        );
        return;
      }

      // Success
      setStatus("success");
      setFeedback(
        "Thanks for reaching out! Your message has been received."
      );

      setFormValues(initialValues);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
      setFeedback(
        "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onSubmit={handleSubmit}
      noValidate
      className="
        rounded-xl
        border
        border-white/[0.06]
        bg-[rgba(15,20,35,0.6)]
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:border-white/[0.09]
        sm:p-7
      "
    >
      {/* FORM GRID */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* NAME */}
        <label className="flex flex-col gap-2">
          <span
            className="
              font-mono
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-slate-500
            "
          >
            Name
          </span>

          <input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Your name"
            className="
              w-full rounded-lg border border-[#1e293b]
              bg-[#0b1120] px-4 py-3 text-sm text-slate-200
              outline-none placeholder:text-slate-600
              transition-all duration-200
              focus:border-blue-500/50
              focus:ring-2 focus:ring-blue-500/10
            "
          />
        </label>

        {/* EMAIL */}
        <label className="flex flex-col gap-2">
          <span
            className="
              font-mono text-[11px] font-medium uppercase
              tracking-[0.18em] text-slate-500
            "
          >
            Email
          </span>

          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="your@email.com"
            className="
              w-full rounded-lg border border-[#1e293b]
              bg-[#0b1120] px-4 py-3 text-sm text-slate-200
              outline-none placeholder:text-slate-600
              transition-all duration-200
              focus:border-blue-500/50
              focus:ring-2 focus:ring-blue-500/10
            "
          />
        </label>
      </div>

      {/* SUBJECT */}
      <label className="mt-5 flex flex-col gap-2">
        <span
          className="
            font-mono text-[11px] font-medium uppercase
            tracking-[0.18em] text-slate-500
          "
        >
          Subject
        </span>

        <input
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          required
          aria-required="true"
          placeholder="Project discussion"
          className="
            w-full rounded-lg border border-[#1e293b]
            bg-[#0b1120] px-4 py-3 text-sm text-slate-200
            outline-none placeholder:text-slate-600
            transition-all duration-200
            focus:border-blue-500/50
            focus:ring-2 focus:ring-blue-500/10
          "
        />
      </label>

      {/* MESSAGE */}
      <label className="mt-5 flex flex-col gap-2">
        <span
          className="
            font-mono text-[11px] font-medium uppercase
            tracking-[0.18em] text-slate-500
          "
        >
          Message
        </span>

        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
          aria-required="true"
          placeholder="Tell me about your idea..."
          rows={6}
          className="
            w-full resize-none rounded-lg border border-[#1e293b]
            bg-[#0b1120] px-4 py-3 text-sm leading-7
            text-slate-200 outline-none placeholder:text-slate-600
            transition-all duration-200
            focus:border-blue-500/50
            focus:ring-2 focus:ring-blue-500/10
          "
        />
      </label>

      {/* SEND BUTTON */}
      <motion.div
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6"
      >
        <Button
          type="submit"
          disabled={status === "loading"}
          className="
            inline-flex w-full items-center justify-center gap-2
            rounded-lg border border-blue-500/30 bg-blue-600
            px-5 py-3 text-sm font-semibold text-white
            shadow-lg shadow-blue-600/10 transition-all duration-200
            hover:bg-blue-500
            disabled:cursor-not-allowed disabled:opacity-70
          "
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 size={16} />
              Message Sent
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </Button>
      </motion.div>

      {/* FEEDBACK */}
      {feedback ? (
        <p
          className={`
            mt-4 text-sm
            ${
              status === "success"
                ? "text-emerald-400"
                : status === "error"
                ? "text-rose-400"
                : "text-slate-400"
            }
          `}
        >
          {feedback}
        </p>
      ) : null}
    </motion.form>
  );
}
