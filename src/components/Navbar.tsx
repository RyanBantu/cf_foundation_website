"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock page scroll and allow Esc to close while the menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-cream/90 text-ink shadow-[0_1px_0_rgba(15,42,46,0.08)] backdrop-blur-md" : "text-white"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="relative z-50" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-100"
                  style={{ opacity: active ? 1 : 0.8 }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${solid ? "bg-ink/8" : "bg-white/15"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/get-involved#donate"
            className="hidden items-center gap-2 rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-saffron/30 sm:inline-flex"
          >
            <Heart className="h-4 w-4" aria-hidden /> Support us
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-current/20 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <motion.span
                className="absolute left-0 block h-0.5 w-5 rounded bg-current"
                animate={open ? { top: 6, rotate: 45 } : { top: 0, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-current"
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 block h-0.5 w-5 rounded bg-current"
                animate={open ? { top: 6, rotate: -45 } : { top: 12, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-ink text-white lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.25rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.25rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.25rem)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="dot-pattern pointer-events-none absolute inset-0" />
            <div className="relative flex min-h-full flex-col px-6 pb-10 pt-28">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl sm:text-4xl ${
                        pathname === item.href ? "text-saffron" : ""
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight className="h-6 w-6 opacity-40 transition group-hover:rotate-45 group-hover:opacity-100" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-auto pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/get-involved#donate"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-6 py-4 font-semibold text-ink"
                >
                  <Heart className="h-5 w-5" aria-hidden /> Support our work
                </Link>
                <p className="mt-6 text-center text-sm text-white/50">{site.tagline}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
