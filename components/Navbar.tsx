"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, CONTACT } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-[9000] bg-[#b90124] text-white text-xs px-6 py-1.5 items-center justify-between">
        <a
          href={`tel:${CONTACT.phone}`}
          className="flex items-center gap-2 hover:text-[#ffd] transition-colors"
          aria-label="Call admissions helpline"
        >
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          Admissions Helpline: {CONTACT.phone}
        </a>
        <a
          href={CONTACT.admissionPortal}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#b90124] font-bold px-4 py-0.5 rounded-full text-xs hover:bg-[#ffe] transition-colors"
        >
          APPLY NOW
        </a>
      </div>

      {/* Main navbar */}
      <motion.header
        className={`fixed left-0 right-0 z-[8999] transition-all duration-500 ${
          scrolled
            ? "top-0 md:top-0 glass-dark shadow-2xl"
            : "top-0 md:top-[28px]"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Tulas International School home">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#b90124] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                T
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-tight">
                Tulas International
              </div>
              <div className="text-[#c09d59] text-xs tracking-widest">
                SCHOOL · DEHRADUN
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                role="none"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  role="menuitem"
                  aria-haspopup={item.dropdown ? "true" : undefined}
                  aria-expanded={activeDropdown === item.label ? "true" : "false"}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1 min-w-[180px] glass-dark rounded-xl shadow-2xl py-2 border border-white/10"
                      role="menu"
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#admission"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#b90124] text-white text-sm font-semibold rounded-full hover:bg-[#9a0020] transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30"
            >
              Enquire Now
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden glass-dark border-t border-white/10"
            >
              <nav aria-label="Mobile navigation" className="px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center gap-2 px-4 py-2.5 text-[#c09d59] text-sm font-medium"
                  >
                    📞 {CONTACT.phone}
                  </a>
                  <a
                    href="#admission"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-[#b90124] text-white font-semibold rounded-full"
                  >
                    Enquire Now
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
