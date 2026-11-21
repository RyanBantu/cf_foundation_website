import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-saffron px-6 py-14 text-ink sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Help a village get checked before it’s too late.
            </h2>
            <p className="mt-4 max-w-xl text-ink/75">
              Volunteer at a camp, sponsor medicines for a family, or help us build an affordable
              bionic limb. Every bit of help reaches someone directly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Link
              href="/get-involved#donate"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Support our work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/get-involved#volunteer"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/80 px-7 py-3.5 font-semibold transition hover:bg-ink/5"
            >
              Become a volunteer
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
