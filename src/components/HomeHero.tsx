"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Stethoscope } from "lucide-react";
import { Photo } from "./Photo";
import { images, site } from "@/lib/site";

const words = ["A", "better", "future,", "one", "village", "at", "a", "time."];

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      <motion.div className="absolute inset-0 -z-10 scale-110" style={{ y: imageY }}>
        <Photo src={images.hero} alt="Christopher Foundation medical camp in a village" label="Hero photo" priority />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 to-transparent" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:px-8"
      >
        <motion.p
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Stethoscope className="h-3.5 w-3.5 text-saffron" aria-hidden />
          Free medical camps · Awareness · Affordable bionics
        </motion.p>

        <h1 className="mt-6 max-w-5xl font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className={`inline-block ${w === "village" ? "italic text-saffron" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
                {" "}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {site.motto}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="/programs"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-7 py-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-saffron/30"
          >
            See our work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/stories"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/15"
          >
            Read Christopher’s story
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
