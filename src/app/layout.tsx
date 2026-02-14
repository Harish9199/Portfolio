import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harish Shankar Thorath | AI/ML & Full-Stack Developer",
  description:
    "Portfolio of Harish Shankar Thorath — AI/ML Engineer & Full-Stack Developer specializing in Python, Golang, FastAPI, and intelligent systems.",
  keywords: [
    "Harish Shankar Thorath",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Python Developer",
    "Golang",
    "FastAPI",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Harish Shankar Thorath" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Harish Shankar Thorath | AI/ML & Full-Stack Developer",
    description:
      "AI/ML Engineer & Full-Stack Developer specializing in Python, Golang, FastAPI, and intelligent systems.",
    siteName: "Harish Shankar Thorath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harish Shankar Thorath | AI/ML & Full-Stack Developer",
    description:
      "AI/ML Engineer & Full-Stack Developer specializing in Python, Golang, FastAPI, and intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="bg-void text-text-primary font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
