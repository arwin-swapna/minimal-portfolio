// Metadata configuration (server-side)
import type { Metadata } from "next";
import "./globals.css";
import { LayoutContent } from "./layout-client";
import { StructuredData } from "@/components/structured-data";

const baseUrl = "https://arwinswapna.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Arwin Arun Swapna | Software Engineer",
  description:
    "Full-stack software engineer specializing in web development. Currently a DMS and Risk Systems Engineer at White & Case LLP. Graduate from University of South Florida with expertise in React, TypeScript, .NET, and modern web technologies.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "web development",
    "React",
    "TypeScript",
    "Next.js",
    "C#",
    ".NET",
    "Blazor",
    "USF",
    "Tampa",
  ],
  authors: [{ name: "Arwin Arun Swapna" }],
  creator: "Arwin Arun Swapna",
  publisher: "Arwin Arun Swapna",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Arwin Arun Swapna | Portfolio",
    title: "Arwin Arun Swapna | Software Engineer",
    description:
      "Full-stack software engineer specializing in web development with expertise in React, TypeScript, .NET, and cloud technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arwin Arun Swapna - Software Engineer Portfolio",
      },
    ],
  },
  alternates: {
    canonical: baseUrl,
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
