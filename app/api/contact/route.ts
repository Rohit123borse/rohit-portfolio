
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     if (!process.env.RESEND_API_KEY) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "RESEND_API_KEY is not configured.",
//         },
//         { status: 500 }
//       );
//     }

//     const body = await request.json();

//     const name = String(body.name ?? "").trim();
//     const email = String(body.email ?? "").trim();
//     const subject = String(body.subject ?? "").trim();
//     const message = String(body.message ?? "").trim();

//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please complete every field.",
//         },
//         { status: 400 }
//       );
//     }

//     const { error } = await resend.emails.send({
//       from: "Portfolio Contact <onboarding@resend.dev>",
//       to: [process.env.CONTACT_TO_EMAIL ?? "YOUR_EMAIL@example.com"],
//       replyTo: email,
//       subject: `Portfolio Contact: ${subject}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Subject: ${subject}

// Message:
// ${message}
//       `.trim(),
//     });

//     if (error) {
//       console.error("Resend error:", error);

//       return NextResponse.json(
//         {
//           success: false,
//           message: "Unable to send your message. Please try again later.",
//         },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Thanks for reaching out! Your message has been sent successfully.",
//     });
//   } catch (error) {
//     console.error("Contact API error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Something went wrong. Please try again later.",
//       },
//       { status: 500 }
//     );
//   }
// }


//new database code
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
}

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY");
}

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete every field.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // 1. SAVE MESSAGE TO SUPABASE DATABASE
    // =====================================================

    const { error: supabaseError } = await supabase
      .from("contact_messages")
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ]);

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to save your message. Please try again later.",
        },
        { status: 500 }
      );
    }

    // =====================================================
    // 2. SEND EMAIL USING RESEND
    // =====================================================

    const { error: resendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [
        process.env.CONTACT_TO_EMAIL ??
          "YOUR_EMAIL@example.com",
      ],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
    });

    if (resendError) {
      console.error("Resend error:", resendError);

      // Database save succeeded even if email failed.
      return NextResponse.json(
        {
          success: false,
          message:
            "Your message was saved, but the email could not be sent.",
        },
        { status: 500 }
      );
    }

    // =====================================================
    // 3. EVERYTHING SUCCESSFUL
    // =====================================================

    return NextResponse.json({
      success: true,
      message:
        "Thanks for reaching out! Your message has been received.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}