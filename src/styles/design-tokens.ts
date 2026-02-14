export const colors = {
  void: "#030303",
  terminal: "#0a0a0f",
  surface: "#111118",
  surfaceLight: "#1a1a24",
  neon: {
    green: "#00ff88",
    cyan: "#00d4ff",
    purple: "#8b5cf6",
    pink: "#ec4899",
  },
  text: {
    primary: "#e4e4e7",
    secondary: "#a1a1aa",
    muted: "#71717a",
  },
} as const;

export const gradients = {
  neonGreenCyan: "linear-gradient(135deg, #00ff88, #00d4ff)",
  neonPurplePink: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  neonFull: "linear-gradient(135deg, #00ff88, #00d4ff, #8b5cf6)",
} as const;

export const spacing = {
  section: { padding: "py-20 md:py-32" },
  container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
} as const;
