"use client";

import { motion } from "framer-motion";
import { Photo } from "./Photo";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageLabel?: string;
};

export function PageHero({ eyebrow, title, intro, image, imageLabel }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
      {image && (
        <div className="absolute inset-0 -z-10 opacity-35">
          <Photo src={image} alt="" label={imageLabel} priority />
        </div>
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
      <div className="dot-pattern absolute inset-0 -z-10" />
      <motion.div
        className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-saffron/25 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
