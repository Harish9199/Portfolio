import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // In production, integrate with email service (SendGrid, Resend, etc.)
    // For now, log and return success
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json(
      { message: "Message received! I'll get back to you soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
