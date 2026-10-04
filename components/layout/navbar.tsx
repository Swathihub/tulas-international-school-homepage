"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 dark:bg-zinc-950/90"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-green-700 transition-colors">
            T
          </div>
          <span
            className={cn(
              "font-bold text-xl tracking-tight transition-colors",
              isScrolled ? "text-zinc-900 dark:text-zinc-50" : "text-white"
            )}
          >
            Tula&apos;s International
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-500",
                isScrolled
                  ? "text-zinc-600 dark:text-zinc-300"
                  : "text-zinc-100"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#apply"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-zinc-900 dark:text-zinc-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X
              className={cn(
                isScrolled ? "text-zinc-900 dark:text-zinc-50" : "text-white"
              )}
            />
          ) : (
            <Menu
              className={cn(
                isScrolled ? "text-zinc-900 dark:text-zinc-50" : "text-white"
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 shadow-lg border-t border-zinc-100 dark:border-zinc-800 flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-800 dark:text-zinc-200 font-medium py-2 border-b border-zinc-100 dark:border-zinc-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#apply"
            className="bg-green-600 text-white text-center py-3 rounded-md font-medium mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
};
