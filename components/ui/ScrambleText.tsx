"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*<>/\\=+-";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

export function ScrambleText({ text, className, delay = 0, duration = 1.4 }: Props) {
  const [display, setDisplay] = useState(text);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setDisplay(text);
      return;
    }
    let raf = 0;
    let start = 0;
    const total = duration * 1000;
    const charDelay = (total / Math.max(text.length, 1)) * 0.55;

    const tick = (now: number) => {
      if (!start) start = now + delay * 1000;
      if (now < start) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - start;
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          out += " ";
          continue;
        }
        const lockTime = i * charDelay + 350;
        if (elapsed >= lockTime) {
          out += ch;
        } else {
          out += CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }
      }
      setDisplay(out);
      if (elapsed < total) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delay, duration, reduced]);

  return (
    <span className={cn("inline-block tabular-nums", className)} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}
