// Metadata configuration (server-side)
import type { Metadata } from "next";
import "./globals.css";
import { LayoutContent } from "./layout-client";

export const metadata: Metadata = {
  title: "Arwin Arun Swapna | Software Engineer",
  description: "Portfolio of Arwin Arun Swapna, Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LayoutContent>{children}</LayoutContent>
    </html>
  );
}
