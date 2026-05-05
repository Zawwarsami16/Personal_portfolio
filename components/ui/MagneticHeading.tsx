"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  text: string;
  className?: string;
  italic?: boolean;
  /** Pixel radius of the magnetic field around the cursor */
  radius?: number;
  /** Max scale at the cursor centre */
  maxScale?: number;
};

export function MagneticHeading({
  text,
  className,
  italic = false,
  radius = 180,
  maxScale = 1.18,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const wrap = ref.current;
    if (!wrap) return;
    const chars = Array.from(wrap.querySelectorAll<HTMLSpanElement>("[data-mc]"));
    if (!chars.length) return;

    let mouseX = -9999;
    let mouseY = -9999;
    let raf = 0;
    let active = false;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!active) {
        active = true;
        loop();
      }
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const loop = () => {
      let anyActive = false;
      for (const c of chars) {
        const r = c.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const t = Math.max(0, 1 - dist / radius);
        const scale = 1 + (maxScale - 1) * Math.pow(t, 2);
        const lift = -t * 6;
        c.style.transform = `translateY(${lift.toFixed(2)}px) scale(${scale.toFixed(3)})`;
        if (t > 0.001) anyActive = true;
      }
      if (anyActive || mouseX > -9000) {
        raf = requestAnimationFrame(loop);
      } else {
        active = false;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
      for (const c of chars) c.style.transform = "";
    };
  }, [text, radius, maxScale, reduced]);

  return (
    <span
      ref={ref}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          data-mc
          aria-hidden
          className={cn(
            "inline-block transition-transform duration-150 ease-out will-change-transform",
            italic && "font-serif-italic",
          )}
          style={{ transformOrigin: "center bottom" }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
