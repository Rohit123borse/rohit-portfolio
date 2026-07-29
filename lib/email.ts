export type SendContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(payload: SendContactEmailPayload) {
  return new Promise<{ success: boolean; message: string }>((resolve) => {
    setTimeout(() => {
      if (!payload.name || !payload.email || !payload.subject || !payload.message) {
        resolve({ success: false, message: "Please complete every field before sending your message." });
        return;
      }

      resolve({ success: true, message: "Thanks! Your message is ready to be delivered via your preferred email service." });
    }, 800);
  });
}
