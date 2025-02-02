"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function MainNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:flex items-center space-x-6">
      <button
        onClick={() => scrollToSection("about")}
        className="hover:opacity-80"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className="hover:opacity-80"
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="hover:opacity-80"
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="hover:opacity-80"
      >
        Contact
      </button>
      <Link
        href="https://github.com/arwin-swapna/arwin-swapna/raw/main/1728157187.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        Resume
      </Link>
      <ThemeToggle />
    </div>
  );
}

export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${inter.className} dark:bg-black`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xl font-bold hover:opacity-80"
              >
                arwin.dev
              </button>
              <MainNav />
              <MobileMenu />
            </nav>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </ThemeProvider>
    </body>
  );
}
