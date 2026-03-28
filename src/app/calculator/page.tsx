"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import { Nav, Footer } from "@/components/nav";

const regions = [
  { id: "rome", name: "Rome", nights: 3, hotelPerNight: 350, transport: 150, experiences: 400 },
  { id: "amalfi", name: "Amalfi Coast", nights: 4, hotelPerNight: 400, transport: 300, experiences: 500 },
  { id: "tuscany", name: "Tuscany", nights: 4, hotelPerNight: 300, transport: 250, experiences: 450 },
  { id: "venice", name: "Venice", nights: 2, hotelPerNight: 380, transport: 200, experiences: 300 },
  { id: "como", name: "Lake Como", nights: 3, hotelPerNight: 450, transport: 200, experiences: 350 },
  { id: "sicily", name: "Sicily", nights: 5, hotelPerNight: 250, transport: 300, experiences: 400 },
  { id: "puglia", name: "Puglia", nights: 4, hotelPerNight: 220, transport: 250, experiences: 350 },
  { id: "sardinia", name: "Sardinia", nights: 5, hotelPerNight: 350, transport: 250, experiences: 500 },
];

export default function CalculatorPage() {
  const [selected, setSelected] = useState<string[]>(["rome", "amalfi"]);
  const [pax, setPax] = useState(2);
  const [tier, setTier] = useState<"comfort" | "premium" | "luxury">("premium");

  const tierMultiplier = { comfort: 0.7, premium: 1.0, luxury: 1.6 };
  const mult = tierMultiplier[tier];

  const selectedRegions = regions.filter((r) => selected.includes(r.id));
  const totalNights = selectedRegions.reduce((sum, r) => sum + r.nights, 0);
  const hotelTotal = selectedRegions.reduce((sum, r) => sum + r.hotelPerNight * r.nights * mult, 0);
  const transportTotal = selectedRegions.reduce((sum, r) => sum + r.transport * mult, 0) + (selectedRegions.length > 1 ? 200 * (selectedRegions.length - 1) : 0);
  const experienceTotal = selectedRegions.reduce((sum, r) => sum + r.experiences * mult, 0);
  const totalPP = Math.round((hotelTotal + transportTotal + experienceTotal) / 50) * 50;
  const totalTrip = totalPP * pax;

  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      <section className="pt-32 pb-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-warm-dark">Trip Calculator</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-charcoal md:text-5xl">
            How much does Italy cost?
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-charcoal/60">
            Get a ballpark estimate for your Italian dream trip. These are starting prices — every trip is fully customizable.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Controls */}
          <div className="space-y-8">
            {/* Destinations */}
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-charcoal/50">Destinations</h3>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelected(prev =>
                      prev.includes(r.id) ? prev.filter(id => id !== r.id) : [...prev, r.id]
                    )}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      selected.includes(r.id)
                        ? "border-warm bg-warm/10 text-warm-dark font-medium"
                        : "border-warm/20 text-charcoal/50 hover:border-warm/40"
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Travelers */}
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-charcoal/50">Travelers</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPax(n)}
                    className={`h-10 w-10 rounded-full border text-sm transition-all ${
                      pax === n
                        ? "border-warm bg-warm/10 text-warm-dark font-medium"
                        : "border-warm/20 text-charcoal/50 hover:border-warm/40"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Tier */}
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-charcoal/50">Experience Level</h3>
              <div className="flex gap-2">
                {(["comfort", "premium", "luxury"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`flex-1 rounded-xl border py-3 text-sm capitalize transition-all ${
                      tier === t
                        ? "border-warm bg-warm/10 text-warm-dark font-medium"
                        : "border-warm/20 text-charcoal/50 hover:border-warm/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-charcoal/40">
                {tier === "comfort" && "Charming 3-4★ hotels, shared experiences"}
                {tier === "premium" && "Boutique 4-5★ hotels, semi-private experiences"}
                {tier === "luxury" && "Top 5★ hotels, fully private experiences"}
              </p>
            </div>
          </div>

          {/* Result */}
          <motion.div
            key={`${selected.join()}-${pax}-${tier}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-warm/20 bg-white/80 p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-warm-dark">
              <Calculator className="h-4 w-4" />
              Estimate
            </div>

            {selectedRegions.length === 0 ? (
              <p className="mt-8 text-center text-charcoal/40">Select at least one destination</p>
            ) : (
              <>
                <div className="mt-6 text-center">
                  <p className="font-serif text-5xl text-charcoal">
                    ${totalPP.toLocaleString()}
                  </p>
                  <p className="mt-1 text-sm text-warm-dark">per person</p>
                  <p className="mt-4 text-sm text-charcoal/40">
                    Total for {pax} traveler{pax > 1 ? "s" : ""}: ${totalTrip.toLocaleString()}
                  </p>
                </div>

                <div className="mt-8 space-y-3 border-t border-warm/10 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Destinations</span>
                    <span className="font-medium">{selectedRegions.map(r => r.name).join(", ")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Nights</span>
                    <span className="font-medium">{totalNights}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Accommodations</span>
                    <span className="font-medium">${Math.round(hotelTotal).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Transport</span>
                    <span className="font-medium">${Math.round(transportTotal).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Experiences</span>
                    <span className="font-medium">${Math.round(experienceTotal).toLocaleString()}</span>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs text-charcoal/40">
                  Estimates based on {tier} tier. Actual prices may vary by season and availability.
                </p>

                <a
                  href="/#contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal py-3.5 text-sm font-medium text-cream transition-all hover:bg-navy"
                >
                  Get an Exact Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
