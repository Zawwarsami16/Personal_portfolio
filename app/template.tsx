"use client";

import { Chrome } from "@/components/layout/Chrome";
import { PageTransition } from "@/components/transitions/PageTransition";
import { WipeOverlay } from "@/components/transitions/WipeOverlay";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Chrome>
      <WipeOverlay />
      <PageTransition>{children}</PageTransition>
    </Chrome>
  );
}
