// Metadata configuration (server-side)
import type { Metadata } from "next";
import "./globals.css";
import { LayoutContent } from "./layout-client";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Arwin Arun Swapna | Software Engineer",
  description:
    "Full-stack software engineer specializing in web development, currently at 10x. Graduate from University of South Florida with expertise in React, TypeScript, and modern web technologies.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "web development",
    "React",
    "TypeScript",
    "Next.js",
    "USF",
    "10x",
  ],
  authors: [{ name: "Arwin Arun Swapna" }],
  creator: "Arwin Arun Swapna",
  publisher: "Arwin Arun Swapna",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arwinswapna.netlify.app",
    siteName: "Arwin Arun Swapna Portfolio",
    title: "Arwin Arun Swapna | Software Engineer",
    description:
      "Full-stack software engineer specializing in web development, currently at 10x. Graduate from University of South Florida with expertise in React, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arwin Arun Swapna - Software Engineer",
      },
    ],
  },
  verification: {
    google: "your-google-site-verification", // You'll need to add this
  },
  alternates: {
    canonical: "https://arwinswapna.netlify.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <LayoutContent>{children}</LayoutContent>
    </html>
  );
}
