"use client";

import { motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useMouse } from "./MouseProvider";
import { useIsTouch } from "@/hooks/useIsTouch";

type CursorState = "default" | "hover" | "text";

export function Cursor() {
  const { smoothX, smoothY } = useMouse();
  const isTouch = useIsTouch();
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  // Translate using transform so it works on first frame
  const tx = useTransform(smoothX, (v) => v - 12);
  const ty = useTransform(smoothY, (v) => v - 12);

  useEffect(() => {
    setMounted(true);
    if (isTouch) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }
    document.body.classList.add("has-custom-cursor");

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a, button, [data-cursor='hover'], [role='button']")) {
        setState("hover");
      } else if (t.closest("input, textarea, [contenteditable='true']")) {
        setState("text");
      } else {
        setState("default");
      }
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    setVisible(true);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [isTouch]);

  if (!mounted || isTouch) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-6 w-6 will-change-transform"
        style={{ x: tx, y: ty }}
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: state === "hover" ? 1.6 : state === "text" ? 0.4 : 1,
            backgroundColor:
              state === "default"
                ? "rgba(220, 38, 38, 0.0)"
                : state === "hover"
                  ? "rgba(220, 38, 38, 0.15)"
                  : "rgba(220, 38, 38, 0.0)",
            borderColor:
              state === "default"
                ? "rgba(245, 241, 234, 0.4)"
                : "rgba(220, 38, 38, 0.9)",
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderWidth: 1.5, borderStyle: "solid" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
          animate={{
            scale: state === "default" ? 1 : state === "hover" ? 0 : 0.4,
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </>
  );
}
