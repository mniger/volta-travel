"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Utensils,
  Mountain,
  Wine,
  Compass,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Nav, Footer } from "@/components/nav";

const experiences = [
  {
    id: "honeymoon",
    icon: Heart,
    title: "Honeymoon & Romance",
    subtitle: "Rome & Amalfi Coast",
    duration: "7 nights",
    price: "From $4,500 pp",
    bestSeason: "Apr–Jun, Sep–Oct",
    heroDescription:
      "A love letter written in sunsets, shared plates, and stolen moments. From rooftop dinners overlooking the Colosseum to private boat rides along the world's most romantic coastline.",
    highlights: [
      "Private rooftop dinner in Rome with panoramic city views",
      "Sunset boat tour along the Amalfi Coast — just the two of you",
      "Couples cooking class in a cliffside lemon grove",
      "Wine tasting in a 16th-century cellar beneath Montepulciano",
      "Spa day with Mediterranean Sea views",
      "Personal concierge for restaurant reservations and surprises",
    ],
    included: [
      "3 nights boutique hotel in Rome (Monti or Trastevere)",
      "3 nights sea-view hotel on the Amalfi Coast",
      "All private transfers and high-speed train",
      "Private guided tours of Colosseum, Vatican, Amalfi",
      "Welcome aperitivo and farewell dinner",
      "24/7 local concierge support",
    ],
    color: "terracotta",
  },
  {
    id: "culinary",
    icon: Utensils,
    title: "Culinary Immersion",
    subtitle: "Tuscany, Campania or Emilia-Romagna",
    duration: "5 nights",
    price: "From $3,500 pp",
    bestSeason: "Mar–Nov",
    heroDescription:
      "Italy doesn't have a cuisine — it has twenty. Dive hands-first into the traditions that shaped the world's most beloved food culture. Cook with nonnas, forage with chefs, and taste things that will ruin every restaurant back home.",
    highlights: [
      "Morning market tour with a local chef — pick your ingredients",
      "Hands-on pasta making with a third-generation nonna",
      "Private wine estate visit with vertical tasting and lunch",
      "Olive oil harvest experience at a family frantoio",
      "Artisan chocolate or gelato laboratory",
      "Farewell dinner at a Michelin-starred or historic trattoria",
    ],
    included: [
      "5 nights in a charming agriturismo or boutique hotel",
      "All food experiences and cooking classes",
      "Wine and olive oil tastings",
      "Private transfers between experiences",
      "Curated restaurant list for free evenings",
      "Recipe booklet to recreate dishes at home",
    ],
    color: "warm",
  },
  {
    id: "quiet-italy",
    icon: Mountain,
    title: "Quiet Italy",
    subtitle: "Langhe, Lake Orta & Bergamo Alta",
    duration: "8 nights",
    price: "From $5,000 pp",
    bestSeason: "Apr–Jun, Sep–Nov",
    heroDescription:
      "Forget everything you think you know about Italy. No crowds, no selfie sticks, no tourist menus. Just rolling hills, ancient villages where time forgot to move forward, and the kind of silence that heals something you didn't know was broken.",
    highlights: [
      "Private wine cellar experience in the Langhe with a Barolo producer",
      "Dawn walk through medieval Bergamo Alta — before anyone else wakes",
      "Dinner in a restored 17th-century cascina with farm-to-table menu",
      "Boat ride on Lake Orta to the mystical Isola San Giulio",
      "Artisan workshop visit — watchmaker, leather craftsman, or weaver",
      "Starlit dinner in a vineyard with zero light pollution",
    ],
    included: [
      "8 nights in hand-selected boutique properties",
      "All private transfers with knowledgeable local drivers",
      "Curated experiences as listed",
      "Daily breakfast and 4 special dinners",
      "Personal itinerary with hidden gems and local tips",
      "24/7 concierge support",
    ],
    color: "sage",
  },
  {
    id: "heritage",
    icon: Wine,
    title: "Heritage Journey",
    subtitle: "Trace Your Italian Roots",
    duration: "10 nights",
    price: "From $6,000 pp",
    bestSeason: "Year-round",
    heroDescription:
      "80 million people worldwide have Italian roots. This journey is for every one of them. We'll find your ancestral village, retrieve your family records, and — if we're lucky — introduce you to cousins you never knew you had. Bring tissues.",
    highlights: [
      "Pre-trip genealogical research to trace your family line",
      "Visit to your ancestral comune — meet the mayor, see the records",
      "Cooking class featuring your family's regional recipes",
      "Walking tour of your ancestor's neighborhood and landmarks",
      "Potential meeting with distant relatives (we make introductions)",
      "Professional photography of your heritage journey moments",
    ],
    included: [
      "10 nights across 2-3 regions (tailored to your ancestry)",
      "Genealogical research and document retrieval",
      "All ground transportation",
      "Local guides and translators",
      "Welcome dinner and heritage celebration dinner",
      "Personalized family history booklet",
      "24/7 concierge support",
    ],
    color: "warm-dark",
  },
  {
    id: "family",
    icon: Compass,
    title: "Family Adventure",
    subtitle: "Rome, Tuscany & Amalfi Coast",
    duration: "10 nights",
    price: "From $3,000 pp",
    bestSeason: "Jun–Jul, Sep",
    heroDescription:
      "The trip your kids will still talk about at Thanksgiving twenty years from now. Gladiator school in Rome, pasta-making in Tuscany, boat rides in Capri — plus enough gelato to fuel it all. Designed for families who believe the best classroom has no walls.",
    highlights: [
      "Gladiator training school at the Colosseum",
      "Family cooking class — kids make their own pizza and pasta",
      "Vespa sidecar tour through the Tuscan countryside (adults)",
      "Boat day to Capri with swimming and snorkeling",
      "Gelato-making workshop with a master gelatiere",
      "Treasure hunt through Florence's Renaissance streets",
    ],
    included: [
      "10 nights in family-friendly accommodations with pools",
      "All kid-friendly guided tours and experiences",
      "Private transfers (car seats provided)",
      "High-speed train tickets",
      "Emergency kit with Italian SIM, snack pack, activity book",
      "24/7 family concierge (we handle the logistics, you make memories)",
    ],
    color: "sage",
  },
  {
    id: "longevity",
    icon: Sparkles,
    title: "Longevity Retreat",
    subtitle: "Sardinia's Blue Zone",
    duration: "14 nights",
    price: "From $8,000 pp",
    bestSeason: "Apr–Jun, Sep–Nov",
    heroDescription:
      "In Sardinia's Blue Zone, people don't just live longer — they live better. This isn't a spa vacation. It's a science-backed immersion into the Mediterranean lifestyle that produces more centenarians per capita than anywhere on Earth. You'll leave different than you arrived.",
    highlights: [
      "Blue Zone village visits — meet centenarians and their families",
      "Mediterranean diet program with a local nutritionist",
      "Circadian rhythm reset — sunrise hikes, digital detox protocols",
      "Daily movement: coastal walks, swimming, gentle yoga",
      "Traditional Sardinian cooking with ancient grain varieties",
      "Wellness consultations with local longevity practitioners",
    ],
    included: [
      "14 nights in a curated Sardinian retreat property",
      "Full wellness and nutrition program",
      "All experiences and workshops",
      "Guided excursions to Blue Zone communities",
      "Pre and post-trip health assessment framework",
      "Take-home longevity lifestyle guide",
      "Airport transfers and local transportation",
    ],
    color: "terracotta",
  },
];

const colorMap: Record<string, string> = {
  terracotta: "bg-terracotta/10 text-terracotta",
  warm: "bg-warm/10 text-warm-dark",
  sage: "bg-sage/10 text-sage",
  "warm-dark": "bg-warm-dark/10 text-warm-dark",
};

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-warm-dark"
        >
          Signature Experiences
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-serif text-5xl tracking-tight text-charcoal md:text-6xl"
        >
          Six ways to fall in love
          <br />
          <span className="italic text-warm-dark">with Italy</span>
        </motion.h1>
      </section>

      {/* Experience Cards */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              id={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-warm/10 bg-white/60 p-8 backdrop-blur-sm md:p-12"
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className={`rounded-xl p-3 ${colorMap[exp.color] || "bg-warm/10 text-warm-dark"}`}>
                  <exp.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-3xl text-charcoal">
                    {exp.title}
                  </h2>
                  <p className="mt-1 text-sm text-charcoal/50">
                    {exp.subtitle}
                  </p>
                </div>
                <div className="flex gap-4 text-xs text-charcoal/50">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" /> {exp.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {exp.bestSeason}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
                {exp.heroDescription}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-warm-dark">
                    Highlights
                  </h3>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-charcoal/60"
                      >
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warm" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-warm-dark">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2.5">
                    {exp.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-charcoal/60"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-warm/10 pt-6">
                <p className="text-sm text-charcoal/40">
                  Every itinerary is fully customizable
                </p>
                <a
                  href="/#contact"
                  className="group flex items-center gap-2 rounded-full bg-charcoal px-6 py-2.5 text-sm font-medium text-cream transition-all hover:bg-navy"
                >
                  Start Planning
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
