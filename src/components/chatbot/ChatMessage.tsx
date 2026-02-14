"use client";

import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/types";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="w-7 h-7 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center shrink-0 mt-1">
          <span className="text-neon-green text-xs font-mono">&gt;_</span>
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-xl px-4 py-3 text-sm font-sans",
          isUser
            ? "bg-neon-green/10 border border-neon-green/20 text-text-primary"
            : "bg-white/[0.03] border border-white/[0.08] text-text-secondary"
        )}
      >
        <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
        <div className="text-text-muted text-[10px] font-mono mt-1.5">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
