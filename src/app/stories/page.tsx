import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Christopher's Story",
  description:
    "How undiagnosed diabetes and everyday diet habits led our founder to an angioplasty, and why that started the Christopher Foundation.",
};

const chapters = [
  {
    label: "The silent years",
    title: "Nothing felt wrong.",
    text: "Like millions of people in India, Christopher Stanley Bantu didn't feel ill. He was busy, he ate the food he'd always eaten, and there was no reason to see a doctor. Underneath, diabetes was quietly developing, and no one had checked for it.",
  },
  {
    label: "The warning",
    title: "Habits add up.",
    text: "Undiagnosed diabetes and everyday diet habits put steady strain on his heart. By the time the symptoms were impossible to ignore, his arteries were already narrowing.",
  },
  {
    label: "The turning point",
    title: "An angioplasty.",
    text: "Christopher needed an angioplasty to restore blood flow to his heart. He was fortunate to get timely treatment. We knew many families in villages would not have that chance, or could not afford it.",
  },
  {
    label: "The promise",
    title: "Never again, for anyone.",
    text: "Out of that experience came the Christopher Foundation: a promise to help people find out sooner, get treated without worrying about cost, and stay connected to doctors near home.",
  },
];

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Christopher's story"
        title="It began with one family’s wake-up call."
        intro="Our founder’s health scare showed us what happens when illness goes unnoticed, and how easily it can be prevented."
        image={images.story}
        imageLabel="Story photo"
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20">
              <Photo src={images.christopher} alt="Christopher Stanley Bantu" label="Christopher Stanley Bantu" sizes="(min-width: 1024px) 45vw, 100vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-24 text-white">
                <p className="font-display text-2xl font-semibold">Christopher Stanley Bantu</p>
                <p className="text-sm text-saffron">Founder & Managing Director</p>
              </div>
            </Reveal>
          </div>

          <ol className="relative border-l-2 border-teal/20 pl-8 sm:pl-12">
            {chapters.map((c, i) => (
              <Reveal as="li" key={c.label} className="relative pb-14 last:pb-0" delay={i * 0.05}>
                <span className="absolute -left-[calc(2rem+9px)] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-saffron ring-4 ring-cream sm:-left-[calc(3rem+9px)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">{c.label}</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{c.title}</h2>
                <p className="mt-4 leading-relaxed text-muted sm:text-lg">{c.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-teal py-24 text-white sm:py-32">
        <div className="dot-pattern pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-3xl font-medium leading-snug sm:text-5xl">
              “Many people in India never get diagnosed. They don’t go to the hospital until the last
              minute. <span className="italic text-saffron">We want to change that.</span>”
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              The Christopher Foundation
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          eyebrow="What we learned"
          title="A simple check could have changed everything."
          intro="A blood sugar test takes minutes. A blood pressure check takes less. These small checks catch problems years before they become emergencies, and that's why every one of our camps starts with screening and awareness."
          center
        />
      </section>

      <CtaBand />
    </>
  );
}
