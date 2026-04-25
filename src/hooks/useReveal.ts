import { useEffect } from "react";

/**
 * Adds .in-view to any element with .reveal when it enters the viewport.
 * Idempotent – safe to mount once at app root.
 */
export function useReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-reveal";
    const els = document.querySelectorAll<HTMLElement>(selectors);
    
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
