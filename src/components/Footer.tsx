import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{site.motto}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm text-white/75 transition hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">Reach us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Serving rural communities across {site.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>Awareness · Medicine · Education · Engineering</p>
        </div>
      </div>
    </footer>
  );
}
