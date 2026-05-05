"use client";

import { motion, useMotionValue, useSpring, type MotionValue } from "framer-motion";
import { createContext, useContext, useEffect } from "react";

type MouseCtx = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
};

const MouseContext = createContext<MouseCtx | null>(null);

export function useMouse() {
  const ctx = useContext(MouseContext);
  if (!ctx) throw new Error("useMouse must be used within MouseProvider");
  return ctx;
}

export function MouseProvider({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <MouseContext.Provider value={{ x, y, smoothX, smoothY }}>
      {children}
    </MouseContext.Provider>
  );
}

export const Motion = motion;
