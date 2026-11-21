import type { Metadata } from "next";
import { BookOpen, HandHeart, Handshake, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { images, site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the family behind the Christopher Foundation and the mission that drives us.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Awareness first",
    text: "The cheapest treatment is catching a problem early. Knowledge is where every recovery starts.",
  },
  {
    icon: HandHeart,
    title: "Care without cost",
    text: "Poverty should never decide who gets treated. Our camps, checks and support are free.",
  },
  {
    icon: Handshake,
    title: "Connected care",
    text: "We work with local PHCs, doctors and health workers so care continues after we leave.",
  },
  {
    icon: BookOpen,
    title: "Education & engineering",
    text: "We use what we know, from medicine to mechanical engineering, to solve real problems in villages.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A family that turned a health scare into a mission."
        intro="The Christopher Foundation is a family-led organisation working to give rural India the awareness, medicine and support it deserves."
        image={images.community}
        imageLabel="Community photo"
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="Better health starts with knowing."
              intro={site.motto}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted">
                We saw it in our own family. When Christopher’s undiagnosed diabetes led to an
                angioplasty, we realised how many people across India live with silent conditions,
                and how many wait until the last minute to see a doctor. So we go to them: we raise
                awareness, run free medical camps, and make sure each person is connected to a local
                Primary Health Centre that can keep caring for them.
              </p>
            </Reveal>
          </div>
          <Reveal x={40} y={0} className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15">
            <Photo src={images.medicalCamp} alt="Doctors at a free medical camp" label="Medical camp photo" sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What guides us" title="Our values" center />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <StaggerItem
                key={title}
                className="rounded-3xl bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-light text-coral">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet our team"
          intro="Three people from one family, each bringing a different skill to the same goal."
        />
        <div className="mt-16 space-y-16 sm:space-y-24">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`grid items-center gap-8 md:grid-cols-[0.8fr_1fr] md:gap-16 ${
                i % 2 ? "md:[&>*:first-child]:order-2 md:grid-cols-[1fr_0.8fr]" : ""
              }`}
            >
              <Reveal x={i % 2 ? 40 : -40} y={0} className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
                <Photo src={m.image} alt={m.name} label={m.name} sizes="(min-width: 768px) 40vw, 100vw" />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">{m.role}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">{m.name}</h3>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{m.bio}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
