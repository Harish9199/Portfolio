import { NextRequest, NextResponse } from "next/server";
import { getChatResponse } from "@/lib/chatbot-engine";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = getChatResponse(message);
    return NextResponse.json({ response });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
