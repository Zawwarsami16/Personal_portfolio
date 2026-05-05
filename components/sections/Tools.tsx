"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/Pill";
import { fadeUp, stagger } from "@/lib/motion";
import { TechIcon, type TechName } from "@/components/ui/TechIcon";

const tools: { name: string; icon: TechName }[] = [
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Next.js", icon: "next" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "node" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Supabase", icon: "supabase" },
  { name: "Docker", icon: "docker" },
  { name: "GitHub", icon: "github" },
];

export function Tools() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-6 py-12 lg:px-12 lg:py-20">
      <Reveal>
        <SectionTag label="Tools I work with" />
      </Reveal>

      <motion.ul
        variants={stagger(0.1, 0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-5 lg:grid-cols-10"
      >
        {tools.map((t) => (
          <motion.li
            key={t.name}
            variants={fadeUp}
            className="group flex flex-col items-center justify-center gap-3 bg-[var(--color-bg)] px-3 py-7 transition-colors hover:bg-[var(--color-surface)]"
            data-cursor="hover"
          >
            <span className="relative flex h-12 w-12 items-center justify-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-soft)] text-[var(--color-accent)] transition-all group-hover:border-[var(--color-accent)]/40 group-hover:shadow-[0_0_24px_var(--color-accent-glow)]">
              <TechIcon name={t.icon} className="h-5 w-5" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-fg-dim)] uppercase">
              {t.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
