import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTag } from "@/components/ui/Pill";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center lg:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(220,38,38,0.30) 0%, transparent 60%)",
        }}
      />
      <SectionTag label="Signal lost" />
      <h1 className="mt-8 max-w-3xl text-balance font-serif text-[clamp(72px,12vw,200px)] leading-[0.95] font-light tracking-tight text-[var(--color-fg)]">
        4<span className="font-serif-italic text-[var(--color-accent)]">0</span>4
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-fg-dim)]">
        That page drifted out of orbit. Let&apos;s steer back to something solid.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href="/" variant="primary" icon={<ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />}>
          Back to home
        </Button>
        <Link
          href="/work"
          data-cursor="hover"
          className="font-mono text-[11px] tracking-[0.3em] text-[var(--color-fg-dim)] uppercase transition-colors hover:text-[var(--color-accent)]"
        >
          Browse work →
        </Link>
      </div>
    </section>
  );
}
