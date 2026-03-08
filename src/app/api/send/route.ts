import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import nodemailer from "nodemailer";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email credentials");
      return Response.json(
        { error: "Email service not configured. Please set EMAIL_USER and EMAIL_PASSWORD." },
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log("Contact form submission:", body);
    
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      console.error("Validation error:", zodError);
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: config.email,
      replyTo: zodData.email,
      subject: `[Client] New message from ${zodData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #fff; padding: 20px; border-radius: 8px;">
            <h1 style="color: #333; margin-bottom: 10px;">New Message from ${zodData.fullName}</h1>
            <div style="margin-bottom: 15px; color: #666;">
              <strong>From:</strong> ${zodData.email}
            </div>
            <div style="margin-bottom: 15px; color: #666;">
              <strong>Tag:</strong> <span style="background-color: #007bff; color: #fff; padding: 4px 8px; border-radius: 4px;">Client</span>
            </div>
            <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${zodData.message}</p>
            </div>
          </div>
        </div>
      `,
    };

    console.log("Sending email to:", config.email);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
