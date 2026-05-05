"use client";

import { motion } from "framer-motion";
import { stagger, splitChar } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
  delay?: number;
  staggerChildren?: number;
  by?: "word" | "char";
};

export function SplitText({
  text,
  className,
  as = "span",
  delay = 0,
  staggerChildren = 0.04,
  by = "word",
}: Props) {
  const Component = motion[as] as typeof motion.span;
  const items = by === "word" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <Component
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={stagger(delay, staggerChildren)}
      aria-label={text}
    >
      {items.map((token, i) =>
        /^\s+$/.test(token) ? (
          <span key={`s-${i}`} aria-hidden>
            {token}
          </span>
        ) : (
          <span key={i} aria-hidden className="inline-block overflow-hidden align-baseline">
            <motion.span variants={splitChar} className="inline-block will-change-transform">
              {token}
            </motion.span>
          </span>
        ),
      )}
    </Component>
  );
}
