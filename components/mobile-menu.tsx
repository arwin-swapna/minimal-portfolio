"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";

export function MobileMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <SheetClose asChild>
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium hover:opacity-80 text-left"
            >
              About
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-lg font-medium hover:opacity-80 text-left"
            >
              Experience
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-lg font-medium hover:opacity-80 text-left"
            >
              Projects
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium hover:opacity-80 text-left"
            >
              Contact
            </button>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-80"
            >
              Resume
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
