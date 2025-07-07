// lib/sendEmail.ts
"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  // Don't actually send emails in development or without an API key
  if (!process.env.RESEND_API_KEY || process.env.NODE_ENV !== "production") {
    console.log(`[DEV MODE] Email not sent. Would have sent to: ${to}`);
    return {
      success: true,
      message: "Email skipped in development mode (no API key).",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
