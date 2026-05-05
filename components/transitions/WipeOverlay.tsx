"use client";

import { motion } from "framer-motion";

export function WipeOverlay() {
  return (
    <motion.div
      key="route-wipe"
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[80]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-full origin-bottom bg-[var(--color-accent)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], times: [0, 0.45, 0.55, 1] }}
        style={{ transformOrigin: "bottom" }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 h-full origin-top bg-[var(--color-bg)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{
          duration: 1.1,
          ease: [0.65, 0, 0.35, 1],
          times: [0, 0.5, 0.6, 1],
          delay: 0.05,
        }}
        style={{ transformOrigin: "bottom" }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 1.1, ease: "linear", times: [0, 0.4, 0.5, 0.7] }}
      >
        <span className="font-mono text-[10px] tracking-[0.5em] text-[var(--color-bg)] uppercase">
          ◉ &nbsp; Zawwar Sami &nbsp; ◉
        </span>
      </motion.div>
    </motion.div>
  );
}
