import Link from "next/link";
import { ArrowRight, Droplet, Gauge, HeartPulse, Megaphone, Stethoscope, Hospital, Cog } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { programs } from "@/lib/programs";
import { images, team } from "@/lib/site";

const ticker = [
  "Medical awareness",
  "Free medical camps",
  "Anaemia screening",
  "Blood pressure checks",
  "Diabetes testing",
  "PHC connection",
  "Affordable bionics",
];

const conditions = [
  {
    icon: Droplet,
    title: "Anaemia",
    text: "Very common, especially among women and children. It causes constant tiredness and weakness, and people often just put up with it.",
  },
  {
    icon: Gauge,
    title: "High blood pressure",
    text: "Called the silent killer for a reason. It usually has no symptoms until it causes a heart attack or stroke.",
  },
  {
    icon: HeartPulse,
    title: "Diabetes",
    text: "Unchecked blood sugar slowly damages the heart, eyes, kidneys and nerves, often for years before anyone notices.",
  },
];

const steps = [
  { icon: Megaphone, title: "Aware", text: "We teach communities the warning signs and healthy habits." },
  { icon: Stethoscope, title: "Screen", text: "Free checks for anaemia, blood pressure and sugar." },
  { icon: HeartPulse, title: "Treat", text: "Doctors treat on the spot, and we provide medicines for those who can't afford them." },
  { icon: Hospital, title: "Connect", text: "Every patient is linked to their local PHC for ongoing care." },
];

const programIcons = [Megaphone, Stethoscope, Cog];

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Ticker */}
      <div className="overflow-hidden border-y border-ink/10 bg-sand py-5" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl italic text-ink/70 sm:text-2xl">
              {t}
              <span className="h-2 w-2 rounded-full bg-saffron" />
            </span>
          ))}
        </div>
      </div>

      {/* The problem */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why we exist"
            title="Too many people find out too late."
            intro="In much of India, people only go to the hospital when an illness becomes an emergency. Anaemia, high blood pressure and diabetes go undiagnosed for years. Even after a diagnosis, poverty means many families can't afford the medicines."
          />
          <Stagger className="grid gap-4">
            {conditions.map(({ icon: Icon, title, text }) => (
              <StaggerItem
                key={title}
                className="group flex gap-5 rounded-3xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5 sm:p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-light text-teal transition group-hover:bg-teal group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Programs */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="dot-pattern pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="What we do" title="Three ways we bring care closer." light />
            <Reveal>
              <Link href="/programs" className="group inline-flex items-center gap-2 font-semibold text-saffron">
                Explore all programs
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => {
              const Icon = programIcons[i];
              return (
                <StaggerItem key={p.id}>
                  <Link
                    href={`/programs#${p.id}`}
                    className="group block h-full overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition duration-500 hover:-translate-y-2 hover:bg-white/10"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 transition duration-700 group-hover:scale-105">
                        <Photo src={p.image} alt={p.title} label={p.title} sizes="(min-width: 768px) 33vw, 100vw" />
                      </div>
                      <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-saffron text-ink">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="font-display text-sm text-saffron">{p.number}</p>
                      <h3 className="mt-1 font-display text-2xl font-semibold leading-snug">{p.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">{p.short}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Story teaser */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal x={-40} y={0} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20">
              <Photo src={images.christopher} alt="Christopher Stanley Bantu" label="Christopher Stanley Bantu" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="animate-float absolute -bottom-6 -right-2 max-w-[15rem] rounded-2xl bg-saffron p-5 text-ink shadow-xl sm:-right-6">
              <p className="font-display text-lg font-semibold leading-snug">Undiagnosed diabetes. Everyday diet. An angioplasty.</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Where it began"
              title="Christopher’s story is the reason we exist."
              intro="Our founder, Christopher Stanley Bantu, lived with diabetes for years without a proper diagnosis. Combined with everyday eating habits, it led to heart trouble and an angioplasty. His recovery showed us how many people across India are walking the same path without knowing it."
            />
            <Reveal delay={0.15}>
              <Link
                href="/stories"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5"
              >
                Read the full story
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="From awareness to lasting care."
            intro="We don't hold one camp and leave. Every person we meet goes through the same four steps."
            center
          />
          <Stagger className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-ink/15 lg:block" aria-hidden />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <StaggerItem key={title} className="relative text-center">
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white shadow-lg shadow-teal/30 ring-8 ring-sand">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-teal">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team preview */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our family" title="The people behind the foundation." />
          <Reveal>
            <Link href="/about" className="group inline-flex items-center gap-2 font-semibold text-teal">
              Meet the team <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <StaggerItem key={m.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <div className="absolute inset-0 transition duration-700 group-hover:scale-105">
                  <Photo src={m.image} alt={m.name} label={m.name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-20 text-white">
                  <h3 className="font-display text-2xl font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-saffron">{m.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand />
    </>
  );
}
