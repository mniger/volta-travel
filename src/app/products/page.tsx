"use client";

import { motion } from "framer-motion";
import { MapPin, Wine, Sun, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Nav, Footer } from "@/components/nav";

const products = [
  {
    id: "rome",
    icon: MapPin,
    title: "Rome Like a Local",
    subtitle: "5-Day Self-Guided City Guide",
    price: "$197",
    description:
      "Everything a Roman would tell you if you were friends. 30+ tested restaurants, golden hours for every attraction, neighborhood-by-neighborhood breakdown, and the 5 things nobody tells you about Rome.",
    features: [
      "5-day optimized itinerary with timing",
      "30+ restaurants & bars (tested personally)",
      "Neighborhood maps: Trastevere, Monti, Testaccio, Pigneto",
      "Golden hours — when to visit to avoid crowds",
      "10 unforgettable free experiences",
      "Practical tips: transport, SIM, tipping, dress codes",
    ],
    bestFor: "First-timers & repeat visitors who want the real Rome",
  },
  {
    id: "amalfi",
    icon: Sun,
    title: "The Ultimate Amalfi Coast",
    subtitle: "7-Day Complete Guide",
    price: "$247",
    description:
      "The difference between a tourist trip and a transformative one. Secret beaches, the ferry schedule decoded, where locals actually eat, and 10 sunset spots ranked from good to life-changing.",
    features: [
      "7-day itinerary: Amalfi, Positano, Ravello, Capri",
      "25+ restaurants: tourist views vs local gems",
      "Complete transport guide: ferries, buses, boats",
      "Secret beaches only locals know",
      "Budget planner: real costs for every scenario",
      "Top 10 sunset spots ranked",
    ],
    bestFor: "Couples, honeymooners & anyone obsessed with the coast",
  },
  {
    id: "tuscany",
    icon: Wine,
    title: "The Tuscany Food & Wine Bible",
    subtitle: "The Definitive Culinary Guide",
    price: "$297",
    description:
      "More than a guide — it's a culinary education. 5 themed itineraries, 40+ wineries, the trattorias Tuscans actually frequent, and a complete seasonal eating calendar so you taste the right thing at the right time.",
    features: [
      "5 themed food routes: Chianti, Val d'Orcia, Coast, Florence, Truffle Country",
      "40+ wineries with booking details & must-try wines",
      "Local trattorias the tourists never find",
      "Market guide: days, hours, what to buy",
      "Seasonal eating calendar",
      "Tuscan wine glossary (finally understand Brunello vs Chianti)",
    ],
    bestFor: "Food lovers, wine enthusiasts & culinary travelers",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      <section className="pt-32 pb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-warm-dark"
        >
          Digital Guides
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-serif text-5xl tracking-tight text-charcoal md:text-6xl"
        >
          Italy in your pocket
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-charcoal/60"
        >
          Not ready for a fully custom trip? Start with our insider guides —
          crafted from years of experience and deep local knowledge.
        </motion.p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="space-y-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-warm/10 bg-white/60 backdrop-blur-sm"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-warm/10 p-3">
                      <p.icon className="h-6 w-6 text-warm-dark" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl text-charcoal">
                        {p.title}
                      </h2>
                      <p className="text-sm text-charcoal/50">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl text-charcoal">{p.price}</p>
                    <p className="text-xs text-charcoal/40">Instant download</p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-charcoal/70">
                  {p.description}
                </p>

                <div className="mt-6">
                  <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-warm-dark">
                    What&apos;s Inside
                  </h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-charcoal/60">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-warm/10 pt-6">
                  <div className="flex items-center gap-2 text-sm text-charcoal/50">
                    <Star className="h-4 w-4 fill-warm text-warm" />
                    Best for: {p.bestFor}
                  </div>
                  <a
                    href={`mailto:hello@volta.travel?subject=Purchase: ${p.title}&body=I'd like to purchase ${p.title} (${p.price}).`}
                    className="group flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-cream transition-all hover:bg-navy"
                  >
                    Get This Guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-warm/20 bg-warm/5 p-8 text-center md:p-12"
        >
          <h3 className="font-serif text-2xl text-charcoal">
            Want the full experience?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-charcoal/60">
            Our guides are great for independent travelers. But if you want
            every detail handled — hotels, transfers, private experiences,
            24/7 support — let us design your perfect trip.
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium text-cream transition-all hover:bg-navy"
          >
            Design My Custom Trip
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
