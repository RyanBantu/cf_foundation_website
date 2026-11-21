import type { Metadata } from "next";
import { Building2, HandHeart, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer, donate or partner with the Christopher Foundation.",
};

const ways = [
  {
    id: "donate",
    icon: HandHeart,
    title: "Donate",
    text: "Fund medicines for families who can't afford them, supplies for a medical camp, or parts for an affordable bionic limb.",
    cta: "Ask how to donate",
  },
  {
    id: "volunteer",
    icon: Users,
    title: "Volunteer",
    text: "Doctors, nurses, engineers, students and anyone who wants to help: join us at an awareness or medical camp.",
    cta: "Sign up to volunteer",
  },
  {
    id: "partner",
    icon: Building2,
    title: "Partner",
    text: "Hospitals, PHCs, companies and NGOs: work with us to reach more villages and keep people in care.",
    cta: "Start a partnership",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Bring care to the people who need it most."
        intro="Whether you give time, skills or funds, you help someone get diagnosed, treated and supported."
        image={images.community}
        imageLabel="Community photo"
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading eyebrow="Ways to help" title="Choose how you’d like to help." center />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {ways.map(({ id, icon: Icon, title, text, cta }) => (
            <StaggerItem key={id}>
              <div
                id={id}
                className="group flex h-full scroll-mt-28 flex-col rounded-3xl bg-white p-8 ring-1 ring-ink/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white transition duration-500 group-hover:rotate-6 group-hover:bg-saffron group-hover:text-ink">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{text}</p>
                <a
                  href={`#contact`}
                  className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold transition hover:bg-ink hover:text-white"
                >
                  {cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="contact" className="scroll-mt-20 bg-ink py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s talk."
              intro="Tell us how you’d like to help, or about someone who needs a medical camp or a bionic limb. We’ll get back to you."
              light
            />
            <Reveal delay={0.1}>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-block break-all font-display text-xl text-saffron underline-offset-4 hover:underline sm:text-2xl"
              >
                {site.email}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
