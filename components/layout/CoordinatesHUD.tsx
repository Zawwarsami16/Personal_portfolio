"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function CoordinatesHUD({ compact = false }: { compact?: boolean }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () => {
      const localTime = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: site.location.timezone,
        hour12: false,
      });
      setTime(localTime);
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-muted)] uppercase">
      <div className="flex items-center gap-2">
        <span className="text-[var(--color-accent)]">◉</span>
        <span>{site.location.coords}</span>
      </div>
      {!compact && (
        <div className="mt-1 flex items-center gap-2 pl-4">
          <span>{site.location.label}</span>
          <span className="text-[var(--color-muted-dim)]">/</span>
          <span suppressHydrationWarning>{time || "--:--:--"}</span>
        </div>
      )}
    </div>
  );
}
