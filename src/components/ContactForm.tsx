"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { site } from "@/lib/site";

const interests = ["Donate", "Volunteer", "Partner", "Request a medical camp", "Bionic limb enquiry"];

/**
 * Opens the visitor's email app with the message pre-filled.
 * Swap this for a form service or API route when you have one.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${data.get("interest")} - ${data.get("name")}`;
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")}\nPhone: ${data.get("phone") || "-"}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-saffron focus:bg-white/10";

  return (
    <div className="relative rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-80 flex-col items-center justify-center text-center"
          >
            <CheckCircle2 className="h-14 w-14 text-saffron" aria-hidden />
            <h3 className="mt-4 font-display text-2xl font-semibold">Thank you!</h3>
            <p className="mt-2 max-w-sm text-white/70">
              Your email app should have opened with your message. Just press send and we’ll be in touch.
            </p>
            <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-saffron underline">
              Write another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm">
                <span className="text-white/70">Your name</span>
                <input name="name" required className={field} placeholder="Full name" autoComplete="name" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="text-white/70">Phone (optional)</span>
                <input name="phone" type="tel" className={field} placeholder="+91" autoComplete="tel" />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm">
              <span className="text-white/70">I’d like to…</span>
              <select name="interest" className={`${field} appearance-none`} defaultValue={interests[0]}>
                {interests.map((i) => (
                  <option key={i} className="text-ink">
                    {i}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="text-white/70">Message</span>
              <textarea name="message" required rows={5} className={field} placeholder="How can we work together?" />
            </label>
            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-7 py-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-saffron/20"
            >
              Send message
              <Send className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
