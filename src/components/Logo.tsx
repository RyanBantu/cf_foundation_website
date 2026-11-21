export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <circle cx="20" cy="20" r="19" className="fill-saffron" />
        <path
          d="M20 30.5s-9-5.6-9-12.1A5 5 0 0 1 20 15.7a5 5 0 0 1 9 2.7c0 6.5-9 12.1-9 12.1Z"
          className="fill-ink"
        />
        <path d="M18.6 18.6h2.8v2.2h2.2v2.8h-2.2v2.2h-2.8v-2.2h-2.2v-2.8h2.2z" className="fill-saffron" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-lg font-semibold tracking-tight">Christopher</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] opacity-70">
          Foundation
        </span>
      </span>
    </span>
  );
}
