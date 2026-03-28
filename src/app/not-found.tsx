import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-serif text-8xl text-warm/30">404</p>
      <h1 className="mt-4 font-serif text-3xl text-charcoal">
        This page wandered off the map
      </h1>
      <p className="mt-3 max-w-md text-charcoal/60">
        Even in Italy, not all paths lead somewhere. Let us guide you back.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-cream hover:bg-navy transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/experiences"
          className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal hover:border-charcoal/40 transition-colors"
        >
          Explore Experiences
        </Link>
      </div>
    </div>
  );
}
