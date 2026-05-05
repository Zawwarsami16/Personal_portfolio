"use client";

import { cn } from "@/lib/cn";

export type TechName =
  | "next"
  | "react"
  | "typescript"
  | "tailwind"
  | "python"
  | "node"
  | "postgres"
  | "supabase"
  | "docker"
  | "github";

type Props = {
  name: TechName;
  className?: string;
};

export function TechIcon({ name, className }: Props) {
  const cls = cn("h-5 w-5", className);
  switch (name) {
    case "next":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 8v8M9 8l7 9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 8v6" strokeLinecap="round" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.4">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="2.5" y="2.5" width="19" height="19" rx="2" />
          <path d="M7 10h6M10 10v8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 16.5c.5.8 1.5 1.3 2.5 1.3 1.4 0 2.5-.7 2.5-1.9s-1-1.6-2.4-2c-1.4-.4-2.4-.8-2.4-1.9s1-1.7 2.2-1.7c1 0 1.8.4 2.2 1" strokeLinecap="round" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path
            d="M7 13c1-3 2.5-4.5 5-4.5 3.7 0 4.4 2.7 6.2 3.2 1.3.4 2.4-.1 3.3-1.1-.9 3-2.5 4.5-5 4.5-3.7 0-4.4-2.7-6.2-3.2-1.3-.4-2.4.1-3.3 1.1z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 19c1-3 2.5-4.5 5-4.5 3.7 0 4.4 2.7 6.2 3.2 1.3.4 2.4-.1 3.3-1.1-.9 3-2.5 4.5-5 4.5-3.7 0-4.4-2.7-6.2-3.2-1.3-.4-2.4.1-3.3 1.1z"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3.5h4c2 0 3.5 1.5 3.5 3.5v3.5h-7v1.5H6c-2 0-3.5 1.5-3.5 3.5v2c0 2 1.5 3.5 3.5 3.5h2v-3.5c0-2 1.5-3.5 3.5-3.5h5c1.7 0 3-1.3 3-3V7c0-2-1.5-3.5-3.5-3.5H9z" strokeLinejoin="round" />
          <circle cx="9" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="15" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2.5l8.5 5v9L12 21.5 3.5 16.5v-9z" strokeLinejoin="round" />
          <path d="M9 9.5v5c0 1 .8 1.5 1.7 1.5h.6c.9 0 1.7-.5 1.7-1.5v-5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 13.5c0 1 .8 1.5 1.7 1.5h.6c.9 0 1.7-.5 1.7-1.5s-.8-1.3-1.7-1.5l-.6-.1c-.9-.2-1.7-.5-1.7-1.5s.8-1.4 1.7-1.4h.6c.9 0 1.6.4 1.7 1.4" strokeLinecap="round" />
        </svg>
      );
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="6" rx="8" ry="2.5" />
          <path d="M4 6v12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V6" />
          <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M13 2L3 14.5h7L9 22l11-12.5h-7L13 2z" opacity="0.95" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="3" height="3" />
          <rect x="6.5" y="11" width="3" height="3" />
          <rect x="10" y="11" width="3" height="3" />
          <rect x="13.5" y="11" width="3" height="3" />
          <rect x="6.5" y="7.5" width="3" height="3" />
          <rect x="10" y="7.5" width="3" height="3" />
          <rect x="10" y="4" width="3" height="3" />
          <path d="M2.5 14.5c0 3 2.5 5 6.5 5 4.5 0 8-2.5 9-6h2c1 0 2-.5 2-2-1.5-.8-2.5-.5-3-.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.1-3.3-1.1-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.6 0 3.7-2.2 4.6-4.4 4.8.4.3.7.9.7 1.9v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2z" />
        </svg>
      );
  }
}
