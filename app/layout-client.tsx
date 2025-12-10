"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

/**
 * Main navigation component for desktop
 * Only visible on md+ screens
 */
function MainNav() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-opacity hover:opacity-60"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="https://github.com/arwin-swapna/arwin-swapna/blob/main/1728157187.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium transition-opacity hover:opacity-60"
      >
        Resume
      </Link>
      <ThemeToggle />
    </div>
  );
}

/**
 * Root layout component with theme provider and navigation
 */
export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${inter.className} dark:bg-black`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {/* Smooth scroll behavior and section margins */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          section {
            scroll-margin-top: 100px;
          }
        `}</style>

        <div className="flex flex-col min-h-screen">
          {/* Sticky header navigation */}
          <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              {/* Logo */}
              <Link
                href="#home"
                className="text-xl font-bold hover:opacity-60 transition-opacity"
              >
                arwin.dev
              </Link>

              {/* Desktop navigation */}
              <MainNav />
            </nav>
          </header>

          {/* Main content area */}
          <main className="flex-1">{children}</main>
        </div>
      </ThemeProvider>
    </body>
  );
}
