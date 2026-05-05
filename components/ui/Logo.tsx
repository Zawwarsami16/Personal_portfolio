"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Zawwar Sami — home"
    >
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        className="text-[var(--color-accent)]"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 90 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="11" cy="11" r="2.2" fill="currentColor" />
        <line x1="11" y1="0" x2="11" y2="3" stroke="currentColor" strokeWidth="0.6" />
        <line x1="11" y1="19" x2="11" y2="22" stroke="currentColor" strokeWidth="0.6" />
        <line x1="0" y1="11" x2="3" y2="11" stroke="currentColor" strokeWidth="0.6" />
        <line x1="19" y1="11" x2="22" y2="11" stroke="currentColor" strokeWidth="0.6" />
      </motion.svg>
      {withWordmark && (
        <span className="font-mono text-[11px] tracking-[0.32em] text-[var(--color-fg)] uppercase">
          Zawwar Sami
        </span>
      )}
    </Link>
  );
}
