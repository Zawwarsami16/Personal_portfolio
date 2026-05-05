"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/Pill";
import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[1440px] px-6 py-28 lg:px-12 lg:py-40"
    >
      <Reveal>
        <SectionTag label="About me" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-balance font-serif text-[clamp(36px,5vw,80px)] leading-[1.05] tracking-tight font-light text-[var(--color-fg)] lg:col-span-7"
        >
          I build with{" "}
          <span className="font-serif-italic text-[var(--color-accent)]">clarity</span>,
          <br className="hidden md:block" /> engineer with{" "}
          <span className="font-serif-italic text-[var(--color-accent)]">purpose</span>,
          <br className="hidden md:block" /> and ship with{" "}
          <span className="font-serif-italic text-[var(--color-accent)]">care</span>.
        </motion.h2>

        <motion.div
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 text-base leading-relaxed text-[var(--color-fg-dim)] lg:col-span-5"
        >
          <motion.p variants={fadeUp}>
            I'm an engineer working at the intersection of AI and markets. I
            build reasoning systems and tools that compress decades of macro
            and geopolitical signal into something a single operator can act on.
          </motion.p>
          <motion.p variants={fadeUp}>
            Anteroom Studio (founded 2019) is the home for that work — and
            ZAI is the long-running project I'm building inside it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
