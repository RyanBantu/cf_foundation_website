import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  light,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-saffron" : "text-teal"}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
