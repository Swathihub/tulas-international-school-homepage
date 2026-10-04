"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    document.body.classList.add("custom-cursor-active");

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.transform = `translate(${curX - 20}px, ${curY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => cursor.classList.add("scale-150", "opacity-60");
    const onMouseLeaveLink = () => cursor.classList.remove("scale-150", "opacity-60");

    window.addEventListener("mousemove", onMouseMove);
    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <>
      {/* Large ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#c09d59]/60 rounded-full pointer-events-none z-[99998] transition-[width,height,opacity] duration-300 will-change-transform hidden md:block"
        aria-hidden="true"
      />
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#c09d59] rounded-full pointer-events-none z-[99999] will-change-transform hidden md:block"
        aria-hidden="true"
      />
    </>
  );
}
