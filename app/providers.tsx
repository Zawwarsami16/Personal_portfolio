"use client";

import { MotionConfig } from "framer-motion";
import { MouseProvider } from "@/components/system/MouseProvider";
import { SmoothScroll } from "@/components/system/SmoothScroll";
import { Cursor } from "@/components/system/Cursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <MouseProvider>
        <SmoothScroll>
          {children}
          <Cursor />
        </SmoothScroll>
      </MouseProvider>
    </MotionConfig>
  );
}
