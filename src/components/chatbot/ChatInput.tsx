"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 border-t border-white/5"
    >
      <div className="flex items-center gap-2 flex-1 bg-white/[0.03] rounded-lg border border-white/[0.08] px-3 py-2 focus-within:border-neon-green/30">
        <span className="text-neon-green text-xs font-mono select-none">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={disabled}
          className="flex-1 bg-transparent text-sm font-mono text-text-primary placeholder:text-text-muted outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={!input.trim() || disabled}
        className="w-9 h-9 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center text-neon-green hover:bg-neon-green/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Send size={14} />
      </button>
    </form>
  );
}
