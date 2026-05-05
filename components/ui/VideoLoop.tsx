"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** Where the video sits in its container — controls object-position for cropping. */
  position?: string;
  /** Optional opacity, for subtle background loops. */
  opacity?: number;
  /** Cache hint for the video element. */
  preload?: "auto" | "metadata" | "none";
};

export function VideoLoop({
  src,
  poster,
  className,
  position = "center",
  opacity = 1,
  preload = "metadata",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const onLoaded = () => {
      setReady(true);
      if (!reduced) {
        v.play().catch(() => {
          /* Some browsers reject autoplay even when muted; the poster still shows. */
        });
      }
    };
    const onVisibility = () => {
      if (!v) return;
      if (document.hidden) v.pause();
      else if (!reduced) v.play().catch(() => {});
    };

    v.addEventListener("loadedmetadata", onLoaded);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload={preload}
      aria-hidden
      className={cn(
        "h-full w-full object-cover transition-opacity duration-700",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
      style={{ objectPosition: position, opacity }}
    />
  );
}
