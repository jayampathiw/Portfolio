import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailConfig } from "@/lib/emailConfig";

export async function POST(req) {
  // Debug log the configuration
  console.log("Email Configuration Check:", {
    user: emailConfig.user ? "Present" : "Missing",
    password: emailConfig.password ? "Present" : "Missing",
  });

  if (!emailConfig.user || !emailConfig.password) {
    console.error("Missing email configuration");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: emailConfig.user,
        pass: emailConfig.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify connection configuration
    await transporter.verify();
    console.log("SMTP connection verified");

    const mailOptions = {
      from: emailConfig.user,
      to: emailConfig.user,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
