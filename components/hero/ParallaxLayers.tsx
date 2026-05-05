"use client";

import { motion, useTransform } from "framer-motion";
import { useMouse } from "@/components/system/MouseProvider";

export function ParallaxLayers() {
  const { smoothX, smoothY } = useMouse();

  const halfX = typeof window !== "undefined" ? window.innerWidth / 2 : 720;
  const halfY = typeof window !== "undefined" ? window.innerHeight / 2 : 400;

  const dustX = useTransform(smoothX, (v) => (v - halfX) * 0.012);
  const dustY = useTransform(smoothY, (v) => (v - halfY) * 0.012);
  const gridX = useTransform(smoothX, (v) => (v - halfX) * 0.025);
  const gridY = useTransform(smoothY, (v) => (v - halfY) * 0.025);
  const flareX = useTransform(smoothX, (v) => (v - halfX) * 0.045);
  const flareY = useTransform(smoothY, (v) => (v - halfY) * 0.045);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          x: dustX,
          y: dustY,
          backgroundImage:
            "radial-gradient(circle, var(--color-fg) 0.7px, transparent 0.7px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "linear-gradient(to right, var(--color-fg-dim) 1px, transparent 1px), linear-gradient(to bottom, var(--color-fg-dim) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 mix-blend-screen"
        style={{
          x: flareX,
          y: flareY,
          background:
            "radial-gradient(ellipse 35% 30% at 75% 40%, rgba(255,80,70,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
