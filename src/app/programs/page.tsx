import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { programs } from "@/lib/programs";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Medical awareness camps, free medical camps with PHC connection, and affordable bionics for people with amputations.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Awareness. Treatment. Engineering."
        intro="Three programs with one aim: no one should go undiagnosed or untreated because they live far away or can't afford care."
        image={images.awareness}
        imageLabel="Awareness camp photo"
      />

      {/* Jump links */}
      <nav className="sticky top-18 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md lg:top-20" aria-label="Programs">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {programs.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="shrink-0 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition hover:border-teal hover:bg-teal hover:text-white"
            >
              {p.number} · {p.title}
            </a>
          ))}
        </div>
      </nav>

      {programs.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`scroll-mt-36 py-20 sm:py-28 ${i % 2 ? "bg-sand" : ""}`}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <Reveal
              x={i % 2 ? 40 : -40}
              y={0}
              className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15 ${i % 2 ? "lg:order-2" : ""}`}
            >
              <Photo src={p.image} alt={p.title} label={p.title} sizes="(min-width: 1024px) 50vw, 100vw" />
              <span className="absolute left-6 top-6 font-display text-6xl font-semibold text-white/90 drop-shadow-lg">
                {p.number}
              </span>
            </Reveal>
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Program {p.number}</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {p.title}
                </h2>
              </Reveal>
              {p.body.map((para, j) => (
                <Reveal key={j} delay={0.05 * (j + 1)}>
                  <p className="mt-5 leading-relaxed text-muted sm:text-lg">{para}</p>
                </Reveal>
              ))}
              <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
                {p.points.map((pt) => (
                  <StaggerItem key={pt} className="flex gap-3 rounded-2xl bg-white p-4 text-sm shadow-sm ring-1 ring-ink/5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {pt}
                  </StaggerItem>
                ))}
              </Stagger>
              {p.id === "bionics" && (
                <Reveal delay={0.2}>
                  <Link
                    href="/get-involved#contact"
                    className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Know someone who needs a limb? Contact us
                  </Link>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
