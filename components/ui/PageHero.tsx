"use client";

import { motion } from "framer-motion";
import { SectionTag } from "./Pill";
import { SplitText } from "./SplitText";
import { CoordinatesHUD } from "@/components/layout/CoordinatesHUD";

type Props = {
  tag: string;
  title: string;
  italic?: string;
  description?: string;
  align?: "left" | "center";
};

export function PageHero({ tag, title, italic, description, align = "left" }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-line)] pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="radial-glow absolute inset-0 opacity-70" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 90% 0%, rgba(220,38,38,0.20) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className={`relative mx-auto w-full max-w-[1440px] px-6 lg:px-12 ${align === "center" ? "text-center" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={align === "center" ? "flex justify-center" : ""}
        >
          <SectionTag label={tag} />
        </motion.div>

        <h1 className="mt-8 text-balance font-serif text-[clamp(48px,8vw,120px)] leading-[0.98] tracking-tight font-light text-[var(--color-fg)]">
          <span className="block overflow-hidden">
            <SplitText text={title} delay={0.2} staggerChildren={0.06} />
          </span>
          {italic && (
            <span className="block overflow-hidden">
              <span className="font-serif-italic text-[var(--color-accent)]">
                <SplitText text={italic} delay={0.45} staggerChildren={0.05} />
              </span>
            </span>
          )}
        </h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className={`text-pretty mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-fg-dim)] ${align === "center" ? "mx-auto" : ""}`}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className={`mt-10 ${align === "center" ? "flex justify-center" : ""}`}
        >
          <CoordinatesHUD compact />
        </motion.div>
      </div>
    </section>
  );
}
