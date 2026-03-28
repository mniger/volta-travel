"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav({ cta = "Plan Your Trip", ctaHref = "/#contact" }: { cta?: string; ctaHref?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-cream/80 backdrop-blur-md border-b border-warm/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-wide text-charcoal">
          Volta
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/experiences" className="text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors">
            Experiences
          </Link>
          <Link href="/blog" className="text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors">
            Journal
          </Link>
          <Link href="/advisors" className="text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors">
            For Advisors
          </Link>
          <Link
            href={ctaHref}
            className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-medium text-cream transition-all hover:bg-navy hover:scale-105"
          >
            {cta}
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-warm/10 bg-cream px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/experiences" onClick={() => setOpen(false)} className="text-sm text-charcoal/70">Experiences</Link>
            <Link href="/products" onClick={() => setOpen(false)} className="text-sm text-charcoal/70">Guides</Link>
            <Link href="/calculator" onClick={() => setOpen(false)} className="text-sm text-charcoal/70">Calculator</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="text-sm text-charcoal/70">Journal</Link>
            <Link href="/advisors" onClick={() => setOpen(false)} className="text-sm text-charcoal/70">For Advisors</Link>
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="rounded-full bg-charcoal px-6 py-3 text-center text-sm font-medium text-cream"
            >
              {cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export function WhatsAppButton({ phone = "" }: { phone?: string }) {
  // Hide if no phone configured
  if (!phone) return null;
  return (
    <a
      href={`https://wa.me/${phone}?text=Hi%20Volta!%20I'm%20interested%20in%20planning%20an%20Italy%20trip.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export function CookieBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm/10 bg-cream/95 backdrop-blur-md p-4 md:p-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-xs text-charcoal/60 md:text-sm">
          We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setDismissed(true)}
            className="rounded-full bg-charcoal px-5 py-2 text-xs font-medium text-cream transition-colors hover:bg-navy"
          >
            Accept
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="rounded-full border border-charcoal/20 px-5 py-2 text-xs font-medium text-charcoal/60 transition-colors hover:border-charcoal/40"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-warm/15 bg-charcoal py-16 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl tracking-wide">Volta</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/50">
              AI-Curated Luxury Travel in Italy. Every journey designed with precision and perfected by experts.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cream/30">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/50">
              <Link href="/experiences" className="hover:text-cream transition-colors">Experiences</Link>
              <Link href="/products" className="hover:text-cream transition-colors">Travel Guides</Link>
              <Link href="/calculator" className="hover:text-cream transition-colors">Trip Calculator</Link>
              <Link href="/blog" className="hover:text-cream transition-colors">Journal</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cream/30">Company</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/50">
              <Link href="/advisors" className="hover:text-cream transition-colors">For Advisors</Link>
              <Link href="/#contact" className="hover:text-cream transition-colors">Contact</Link>
              <a href="mailto:hello@volta.travel" className="hover:text-cream transition-colors">hello@volta.travel</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/30">&copy; {new Date().getFullYear()} Volta Travel. All rights reserved.</p>
          <p className="text-xs text-cream/30">Designed with AI in Italy</p>
        </div>
      </div>
    </footer>
  );
}
