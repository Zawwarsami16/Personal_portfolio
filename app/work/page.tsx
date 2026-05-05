import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CaseCard } from "@/components/work/CaseCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { caseStudies } from "./_data";

export const metadata: Metadata = pageMetadata(
  "Work",
  "Selected work by Zawwar Sami — products, AI tooling, internal platforms, and open source.",
);

export default function WorkPage() {
  return (
    <>
      <PageHero
        tag="Work"
        title="Things I've"
        italic="shipped lately."
        description="A selection of recent work across product, AI, internal tooling, and open source. Each project earned its place by being shipped and used by real people."
      />

      <section className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05} amount={0.1}>
              <CaseCard study={study} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
