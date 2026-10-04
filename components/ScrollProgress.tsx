"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? scrolled / total : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReduced]);

  return (
    <div
      ref={barRef}
      id="scroll-progress"
      style={{ width: "100%", transformOrigin: "left", transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}
