// export type SendContactEmailPayload = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// export async function sendContactEmail(payload: SendContactEmailPayload) {
//   return new Promise<{ success: boolean; message: string }>((resolve) => {
//     setTimeout(() => {
//       if (!payload.name || !payload.email || !payload.subject || !payload.message) {
//         resolve({ success: false, message: "Please complete every field before sending your message." });
//         return;
//       }

//       resolve({ success: true, message: "Thanks! Your message is ready to be delivered via your preferred email service." });
//     }, 800);
//   });
// }



// new database code
import { supabase } from "@/lib/supabase";

export type SendContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(
  payload: SendContactEmailPayload
): Promise<{ success: boolean; message: string }> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const subject = payload.subject.trim();
  const message = payload.message.trim();

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Please complete every field before sending your message.",
    };
  }

  try {
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);

      return {
        success: false,
        message: "Unable to send your message. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thanks for reaching out! Your message has been received.",
    };
  } catch (error) {
    console.error("Unexpected error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
