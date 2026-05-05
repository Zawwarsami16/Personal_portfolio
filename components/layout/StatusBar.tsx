"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function StatusBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex flex-col items-end gap-0.5">
        <span className="font-mono text-[9px] tracking-[0.3em] text-[var(--color-muted)]">
          SYSTEM STATUS
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--color-accent)]">
          ONLINE
        </span>
      </div>
      <div className="flex h-5 items-end gap-[3px]">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="block w-[2px] bg-[var(--color-accent)]"
            initial={{ height: "20%" }}
            animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
            transition={{
              duration: 1.6 + (i % 3) * 0.2,
              ease: [0.65, 0, 0.35, 1],
              delay: i * 0.04,
              repeat: Infinity,
            }}
            style={{ height: 4 }}
          />
        ))}
      </div>
    </div>
  );
}
