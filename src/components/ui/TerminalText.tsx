"use client";

import { cn } from "@/lib/utils";

interface TerminalTextProps {
  children: React.ReactNode;
  className?: string;
  prefix?: string;
  showCursor?: boolean;
}

export default function TerminalText({
  children,
  className,
  prefix = "$",
  showCursor = false,
}: TerminalTextProps) {
  return (
    <div className={cn("font-mono flex items-center gap-2", className)}>
      <span className="text-neon-green font-bold select-none">{prefix}</span>
      <span className="text-text-primary">{children}</span>
      {showCursor && (
        <span className="w-2 h-5 bg-neon-green inline-block animate-cursor-blink" />
      )}
    </div>
  );
}
