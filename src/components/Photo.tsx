"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Shown on the placeholder until the real photo is added. */
  label?: string;
};

/**
 * Fills its (relatively positioned) parent with a photo.
 * If the file is missing, shows a branded placeholder so the layout never breaks.
 */
export function Photo({ src, alt, className = "", sizes = "100vw", priority, label }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-teal via-teal-dark to-ink text-white/70 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="dot-pattern absolute inset-0" />
        <ImageIcon className="relative h-8 w-8" aria-hidden />
        <span className="relative px-4 text-center text-xs font-medium uppercase tracking-widest">
          {label ?? alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
