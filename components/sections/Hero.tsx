"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/Pill";
import { SplitText } from "@/components/ui/SplitText";
import { StatusBar } from "@/components/layout/StatusBar";
import { CoordinatesHUD } from "@/components/layout/CoordinatesHUD";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { site } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fadeText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const liftText = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden pt-32 pb-20 lg:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ willChange: "transform" }}
      >
        <div className="absolute inset-0 lg:left-[22%]">
          <VideoLoop
            src="/video/hero.mp4"
            position="right center"
            className="h-full w-full"
            preload="auto"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 130% 110% at 70% 45%, transparent 0%, transparent 60%, var(--color-bg) 96%)",
          }}
        />

        <div
          className="absolute inset-y-0 left-0 hidden lg:block lg:w-1/2"
          style={{
            background:
              "linear-gradient(to right, var(--color-bg) 0%, rgba(7,7,10,0.85) 38%, rgba(7,7,10,0.35) 65%, transparent 100%)",
          }}
        />
      </div>

      <motion.div
        style={{ opacity: fadeText, y: liftText }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-[var(--color-accent)] uppercase"
        >
          <span aria-hidden>{"//"}</span>
          <span>{site.role}</span>
          <span aria-hidden>{"//"}</span>
        </motion.div>

        <h1 className="text-balance font-serif text-[clamp(56px,9vw,140px)] leading-[0.95] tracking-tight font-light text-[var(--color-fg)]">
          <span className="block overflow-hidden">
            <SplitText text="Building" delay={0.6} staggerChildren={0.08} />
          </span>
          <span className="block overflow-hidden">
            <SplitText text="thoughtful" delay={0.8} staggerChildren={0.06} />
          </span>
          <span className="block overflow-hidden">
            <span className="font-serif-italic text-[var(--color-accent)]">
              <SplitText text="digital systems." delay={1.05} staggerChildren={0.05} />
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="text-pretty max-w-md text-base leading-relaxed text-[var(--color-fg-dim)] lg:col-span-5"
          >
            Engineer and builder of ZAI. Founder of Anteroom Studio, where I
            build AI tools for markets, geopolitics, and the macro forces that
            shape the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4 lg:col-span-7 lg:items-end"
          >
            <Button href="/contact" variant="primary" icon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}>
              Let's Connect
            </Button>
            <Button href="/resume.pdf" variant="ghost" icon={<Download className="h-3.5 w-3.5" strokeWidth={1.5} />} external>
              View Resume
            </Button>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-end gap-6 lg:mt-auto lg:grid-cols-2 lg:pt-12">
          <StatusPill label={site.status.label} />

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <StatusBar />
            <CoordinatesHUD />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-[var(--color-muted)] uppercase">
          Scroll
        </span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-[var(--color-accent)] to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

