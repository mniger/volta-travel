"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Shield,
  Zap,
  Users,
  Globe,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { Footer, Nav } from "@/components/nav";

const benefits = [
  {
    icon: Zap,
    title: "24-Hour Proposals",
    description:
      "Send us a client request today, receive a complete bespoke itinerary tomorrow. AI-designed, expert-perfected. Your clients stay excited, you close faster.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "See every cost line item. No hidden markups, no mystery fees. You always know exactly what your client is paying for — and so do they, if you choose.",
  },
  {
    icon: Shield,
    title: "Commission Protected",
    description:
      "Your relationship, your client, your commission. We never go around you. Period. We're your behind-the-scenes Italy team, not your competition.",
  },
  {
    icon: Users,
    title: "700+ Vetted Partners",
    description:
      "Every hotel, guide, driver, and experience in our network has been personally tested. We don't just list partners — we know the owner's name and the best room in the house.",
  },
  {
    icon: Globe,
    title: "17 Regions Covered",
    description:
      "From the Amalfi Coast to the Dolomites, Sicily to Lake Como. Wherever your clients want to go in Italy, we have trusted partners on the ground.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Optimization",
    description:
      "Our technology analyzes seasonal availability, pricing patterns, and thousands of combinations to find the optimal itinerary — better value, better experience, every time.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Send Us the Brief",
    description:
      "Client name, dates, interests, budget, special requests. Email or form — whatever works for you. The more details, the more personalized the result.",
  },
  {
    step: "2",
    title: "We Design in 24h",
    description:
      "Our AI analyzes the perfect combination of destinations, hotels, and experiences. Our Italy expert reviews, refines, and adds the human magic. You get a complete, client-ready proposal.",
  },
  {
    step: "3",
    title: "You Present & Close",
    description:
      "Forward the proposal to your client. Need adjustments? We iterate in hours, not days. Once confirmed, we handle all bookings and logistics.",
  },
  {
    step: "4",
    title: "We Execute Flawlessly",
    description:
      "Confirmations, restaurant reservations, transfer coordination, last-minute changes — we handle it all. Your client gets 24/7 on-ground support throughout their trip.",
  },
];

const faqs = [
  {
    q: "What's your commission structure?",
    a: "We protect your full commission. Our pricing is transparent — you see the net rate and the client rate. Standard advisor commission applies on all bookings.",
  },
  {
    q: "How quickly can you turn around a proposal?",
    a: "24 hours for a complete bespoke itinerary. Revisions typically within 4-6 hours. We know speed matters when clients are excited.",
  },
  {
    q: "Do you work with specific hotel brands?",
    a: "We work with 700+ independently vetted partners, from 5-star luxury to charming boutique properties. We select based on quality and client fit, not chain affiliation.",
  },
  {
    q: "What regions do you cover?",
    a: "All 17 Italian regions. Our strongest coverage is in Campania (Amalfi, Capri), Lazio (Rome), Tuscany, Sicily, Puglia, Veneto (Venice), Lombardy (Lake Como), and Sardinia.",
  },
  {
    q: "What makes you different from other Italy DMCs?",
    a: "Speed (AI-powered proposals in 24h), transparency (full cost visibility), and curation over aggregation (700 vetted partners, not 10,000 untested ones). We also offer unique niche experiences: longevity retreats, heritage journeys, and Quiet Italy itineraries.",
  },
  {
    q: "Can I send you a test request?",
    a: "Absolutely. Send us any client scenario — real or hypothetical — and we'll deliver a full proposal within 24 hours, free of charge. No strings attached.",
  },
];

export default function AdvisorsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav cta="Partner With Us" ctaHref="mailto:hello@volta.travel?subject=Partnership Inquiry" />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-warm-dark"
        >
          For Travel Advisors
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-serif text-5xl tracking-tight text-charcoal md:text-6xl"
        >
          Your Italy partner
          <br />
          <span className="italic text-warm-dark">that actually delivers</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-charcoal/60 text-lg"
        >
          Bespoke proposals in 24 hours. Transparent pricing. 700+ vetted
          partners. We make you look like a hero to your clients.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          href="mailto:hello@volta.travel?subject=Test Request — Free Sample Itinerary"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-cream transition-all hover:bg-navy hover:scale-105"
        >
          Send a Test Request — It&apos;s Free
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-warm/10 bg-white/60 p-8 backdrop-blur-sm"
            >
              <b.icon className="h-7 w-7 text-warm-dark" />
              <h3 className="mt-4 font-serif text-lg text-charcoal">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center font-serif text-3xl md:text-4xl">
            How working with us looks
          </h2>
          <div className="mt-12 space-y-8">
            {howItWorks.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-warm/30 font-serif text-lg text-warm-light">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-serif text-xl">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/60">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl text-charcoal md:text-4xl">
          Common questions
        </h2>
        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-warm/10 bg-white/60 p-6"
            >
              <h3 className="font-serif text-lg text-charcoal">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-warm/15 bg-white/40 py-16 text-center">
        <h2 className="font-serif text-3xl text-charcoal">
          Ready to try us?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-charcoal/60">
          Send us any client request — real or hypothetical. We&apos;ll deliver a
          full bespoke proposal within 24 hours, completely free.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@volta.travel?subject=Test Request — Free Sample Itinerary"
            className="flex items-center gap-2 rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium text-cream transition-all hover:bg-navy"
          >
            <CheckCircle className="h-4 w-4" />
            Send a Free Test Request
          </a>
          <Link
            href="/experiences"
            className="flex items-center gap-2 rounded-full border border-charcoal/20 px-8 py-3.5 text-sm font-medium text-charcoal transition-all hover:border-charcoal/40"
          >
            View Our Experiences
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
