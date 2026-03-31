import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollEffects from "@/components/ScrollEffects";
import TiltProvider from "@/components/TiltProvider";

export const metadata: Metadata = {
  title: "Aditya Choudhary — Software Developer",
  description: "Full-stack developer specializing in React, Next.js, and data analysis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CustomCursor />
          <ScrollEffects />
          <TiltProvider />
          <div className="grain" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
