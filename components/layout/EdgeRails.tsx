"use client";

import { motion } from "framer-motion";

export function EdgeRails() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden lg:block">
      {/* Left rail */}
      <div
        aria-hidden
        className="absolute top-24 bottom-24 left-6 w-px"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, var(--color-line) 0 4px, transparent 4px 10px)",
        }}
      />
      {/* Right rail */}
      <div
        aria-hidden
        className="absolute top-24 bottom-24 right-6 w-px"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, var(--color-line) 0 4px, transparent 4px 10px)",
        }}
      />

      {/* Corners */}
      <Corner className="top-4 left-4" />
      <Corner className="top-4 right-4" mirror="x" />
      <Corner className="bottom-4 left-4" mirror="y" />
      <Corner className="bottom-4 right-4" mirror="xy" />

      {/* Pulse beacon top-center between hero sections */}
      <motion.div
        className="absolute top-[100vh] left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Beacon />
      </motion.div>
    </div>
  );
}

function Corner({ className = "", mirror }: { className?: string; mirror?: "x" | "y" | "xy" }) {
  const transform =
    mirror === "x"
      ? "scaleX(-1)"
      : mirror === "y"
        ? "scaleY(-1)"
        : mirror === "xy"
          ? "scale(-1)"
          : undefined;
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className={`absolute text-[var(--color-accent)] ${className}`}
      style={{ transform }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M0 8V0h8" />
      <circle cx="3" cy="3" r="1" fill="currentColor" />
    </svg>
  );
}

function Beacon() {
  return (
    <div className="relative h-3 w-3">
      <span className="absolute inset-0 rounded-full bg-[var(--color-accent)]" />
      <span className="pulse-soft absolute -inset-2 rounded-full border border-[var(--color-accent)] opacity-40" />
    </div>
  );
}
