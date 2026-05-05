"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.5 });
  const percent = useTransform(scrollYProgress, (v) => `${Math.round(v * 100).toString().padStart(2, "0")}`);

  return (
    <div className="pointer-events-none fixed top-1/2 right-3 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-muted)]">
        SCROLL
      </span>
      <div className="relative h-44 w-px bg-[var(--color-line-soft)]">
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-0 origin-top bg-[var(--color-accent)]"
          style={{ scaleY, height: "100%" }}
        />
      </div>
      <motion.span className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-fg-dim)]">
        {percent}
      </motion.span>
    </div>
  );
}
