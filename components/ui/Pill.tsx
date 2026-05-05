"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function StatusPill({ label, className }: { label: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-5 py-2 backdrop-blur-md",
        className,
      )}
    >
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
        <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
      </span>
      <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--color-fg-dim)] uppercase">
        {label}
      </span>
      <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]/40" />
    </motion.div>
  );
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-[10px] tracking-[0.25em] text-[var(--color-fg-dim)] uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-[var(--color-accent)] uppercase">
      <span aria-hidden>{"//"}</span>
      <span>{label}</span>
      <span aria-hidden>{"//"}</span>
    </div>
  );
}
