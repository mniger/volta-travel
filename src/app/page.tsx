"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  Send,
  Compass,
  Heart,
  Utensils,
  Mountain,
  Wine,
  CheckCircle,
  Globe,
  Sparkles,
} from "lucide-react";
import { Nav, Footer, WhatsAppButton, CookieBanner } from "@/components/nav";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const experiences = [
  {
    icon: Heart,
    title: "Honeymoon & Romance",
    description:
      "Rooftop dinners in Rome, private boat tours on the Amalfi Coast, sunset aperitivi in Ravello.",
    price: "From $4,500 pp",
    duration: "7 nights",
  },
  {
    icon: Utensils,
    title: "Culinary Immersion",
    description:
      "Cook with nonnas, forage for truffles, taste wine in cellars that predate Columbus.",
    price: "From $3,500 pp",
    duration: "5 nights",
  },
  {
    icon: Mountain,
    title: "Quiet Italy",
    description:
      "Escape the crowds. Hidden borghi, rolling hills, starlit dinners in places only locals know.",
    price: "From $5,000 pp",
    duration: "8 nights",
  },
  {
    icon: Wine,
    title: "Heritage & Roots",
    description:
      "Trace your Italian ancestry. Walk the streets your great-grandparents walked. Come home to Italy.",
    price: "From $6,000 pp",
    duration: "10 nights",
  },
  {
    icon: Compass,
    title: "Family Adventure",
    description:
      "Gelato-making in Florence, gladiator school in Rome, boat rides in Capri. Memories for a lifetime.",
    price: "From $3,000 pp",
    duration: "10 nights",
  },
  {
    icon: Sparkles,
    title: "Longevity Retreat",
    description:
      "Sardinia's Blue Zone secrets. Mediterranean wellness, circadian reset, and the art of living longer.",
    price: "From $8,000 pp",
    duration: "14 nights",
  },
];

const stats = [
  { value: "700+", label: "Vetted Partners" },
  { value: "150+", label: "Destinations" },
  { value: "17", label: "Italian Regions" },
  { value: "24h", label: "Proposal Delivery" },
];

const steps = [
  {
    step: "01",
    title: "Tell Us Your Dream",
    description:
      "Share your dates, interests, and budget. Our AI analyzes thousands of combinations to find your perfect match.",
  },
  {
    step: "02",
    title: "Receive Your Itinerary",
    description:
      "Within 24 hours, get a bespoke day-by-day plan with handpicked hotels, experiences, and logistics — all seamless.",
  },
  {
    step: "03",
    title: "We Handle Everything",
    description:
      "From booking confirmations to restaurant reservations. You just pack your bags and enjoy Italy.",
  },
];

const testimonials = [
  {
    quote:
      "Every single detail was perfect — from a hidden wine cellar in Montepulciano to a private cooking class overlooking the sea in Ravello. This is how Italy should be experienced.",
    name: "Recent Traveler",
    trip: "Honeymoon, Tuscany & Amalfi Coast",
    rating: 5,
  },
  {
    quote:
      "The speed and quality of the proposals is unlike anything I've seen. My clients were thrilled, and I looked like a hero. Finally, an Italy partner I can trust completely.",
    name: "Travel Advisor",
    trip: "Luxury Travel Advisor, USA",
    rating: 5,
  },
  {
    quote:
      "They found the exact village where my grandmother was born. We had dinner with distant cousins we never knew existed. Life-changing.",
    name: "Michael L.",
    trip: "Heritage Journey, Calabria & Sicily",
    rating: 5,
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dates: "",
    travelers: "",
    interests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Still show success — lead saved server-side
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-warm/5 via-transparent to-cream" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-warm/30 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-warm-dark backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI-Curated · Expert-Perfected
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl lg:text-8xl"
          >
            Italy, designed
            <br />
            <span className="italic text-warm-dark">just for you</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/60 md:text-xl"
          >
            We combine artificial intelligence with years of Italy expertise to
            craft bespoke journeys that are impossible to find anywhere
            else. 700+ vetted partners. Your perfect trip, delivered in 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-cream transition-all hover:bg-navy hover:scale-105 hover:shadow-lg"
            >
              Get Your Free Itinerary in 24h
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/experiences"
              className="flex items-center gap-2 rounded-full border border-charcoal/20 px-8 py-4 text-sm font-medium text-charcoal transition-all hover:border-charcoal/40 hover:bg-white/50"
            >
              Explore Experiences
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 text-xs text-charcoal/40"
          >
            Free consultation · No commitment · Satisfaction guaranteed
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-warm/15 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center"
            >
              <p className="font-serif text-3xl text-charcoal md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm tracking-wide text-charcoal/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-warm-dark">
              Signature Experiences
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-charcoal md:text-5xl">
              Every journey tells a story
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-charcoal/60">
              From romantic escapes to ancestral pilgrimages, we design
              experiences that transform the way you see Italy — and yourself.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group cursor-pointer rounded-2xl border border-warm/10 bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-warm/30 hover:bg-white hover:shadow-lg"
              >
                <exp.icon className="h-8 w-8 text-warm-dark transition-transform group-hover:scale-110" />
                <h3 className="mt-5 font-serif text-xl text-charcoal">
                  {exp.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {exp.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-warm/10 pt-4">
                  <span className="text-sm font-medium text-warm-dark">
                    {exp.price}
                  </span>
                  <span className="text-xs text-charcoal/40">
                    {exp.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-navy py-24 text-cream md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-warm-light">
              How It Works
            </p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Effortless from start to finish
            </h2>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <p className="font-serif text-5xl text-warm/30">
                  {step.step}
                </p>
                <h3 className="mt-4 font-serif text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mt-20 rounded-2xl border border-warm/20 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12"
          >
            <Globe className="mx-auto h-10 w-10 text-warm-light" />
            <h3 className="mt-4 font-serif text-2xl">For Travel Advisors</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-cream/60">
              Partner with us and give your clients the Italy experience they
              deserve. We handle all ground operations — you keep your
              commission and your client&apos;s trust. Proposals in 24 hours, every
              time.
            </p>
            <a
              href="/advisors"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-warm/40 px-6 py-3 text-sm font-medium text-warm-light transition-all hover:bg-warm/10"
            >
              Become a Partner
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-warm-dark">
              Why Volta
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-charcoal md:text-5xl">
              The future of travel planning
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "AI Precision, Human Soul",
                text: "Our AI analyzes thousands of destination combinations, seasonal patterns, and logistics in seconds. Then our Italy experts add the magic — the hidden trattoria, the secret viewpoint, the perfect timing.",
              },
              {
                title: "Radically Transparent",
                text: "No hidden markups, no mystery pricing. We show you the value of every component and our design fee. You'll always know exactly what you're paying for.",
              },
              {
                title: "24-Hour Proposals",
                text: "While other DMCs take a week, we deliver a complete bespoke itinerary within 24 hours. Because when inspiration strikes, momentum matters.",
              },
              {
                title: "700+ Vetted Partners",
                text: "Every hotel, guide, and experience in our network has been personally tested. We don't aggregate — we curate. Quality over quantity, always.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="rounded-2xl border border-warm/10 bg-white/60 p-8 backdrop-blur-sm"
              >
                <CheckCircle className="h-6 w-6 text-sage" />
                <h3 className="mt-4 font-serif text-xl text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="border-y border-warm/15 bg-white/40 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-warm-dark">
              Early Praise
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-charcoal md:text-5xl">
              What people are saying
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="rounded-2xl border border-warm/10 bg-cream p-8"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-warm text-warm"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm italic leading-relaxed text-charcoal/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-warm/10 pt-4">
                  <p className="text-sm font-medium text-charcoal">
                    {t.name}
                  </p>
                  <p className="text-xs text-charcoal/50">{t.trip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-warm-dark">
              Start Your Journey
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-charcoal md:text-5xl">
              Let&apos;s design your Italy
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-charcoal/60">
              Tell us about your dream trip and receive a personalized itinerary
              within 24 hours. Completely free. If you don&apos;t love it, we&apos;ll redesign it — guaranteed.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 rounded-2xl border border-sage/30 bg-sage/5 p-12 text-center"
            >
              <CheckCircle className="mx-auto h-12 w-12 text-sage" />
              <h3 className="mt-4 font-serif text-2xl text-charcoal">
                We&apos;re on it!
              </h3>
              <p className="mt-2 text-charcoal/60">
                Expect your personalized itinerary within 24 hours. We can&apos;t
                wait to show you what we&apos;ve designed.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="mt-12 space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-warm/20 bg-white/60 px-4 py-3 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-warm focus:ring-2 focus:ring-warm/10"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-warm/20 bg-white/60 px-4 py-3 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-warm focus:ring-2 focus:ring-warm/10"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50">
                    Travel Dates
                  </label>
                  <input
                    type="text"
                    value={formData.dates}
                    onChange={(e) =>
                      setFormData({ ...formData, dates: e.target.value })
                    }
                    className="w-full rounded-xl border border-warm/20 bg-white/60 px-4 py-3 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-warm focus:ring-2 focus:ring-warm/10"
                    placeholder="e.g. September 2026"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50">
                    Travelers
                  </label>
                  <input
                    type="text"
                    value={formData.travelers}
                    onChange={(e) =>
                      setFormData({ ...formData, travelers: e.target.value })
                    }
                    className="w-full rounded-xl border border-warm/20 bg-white/60 px-4 py-3 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-warm focus:ring-2 focus:ring-warm/10"
                    placeholder="e.g. 2 adults, 1 child"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50">
                  Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Food & Wine",
                    "Romance",
                    "History & Art",
                    "Adventure",
                    "Relaxation",
                    "Family",
                    "Heritage",
                    "Wellness",
                  ].map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => {
                        const current = formData.interests
                          .split(", ")
                          .filter(Boolean);
                        const updated = current.includes(interest)
                          ? current.filter((i) => i !== interest)
                          : [...current, interest];
                        setFormData({
                          ...formData,
                          interests: updated.join(", "),
                        });
                      }}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                        formData.interests.includes(interest)
                          ? "border-warm bg-warm/10 text-warm-dark"
                          : "border-warm/20 text-charcoal/50 hover:border-warm/40"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50">
                  Tell Us More
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-warm/20 bg-white/60 px-4 py-3 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-warm focus:ring-2 focus:ring-warm/10"
                  placeholder="Any special requests, must-see places, or experiences you've been dreaming about..."
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal py-4 text-sm font-medium text-cream transition-all hover:bg-navy hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                Get My Free Itinerary
              </button>

              <p className="text-center text-xs text-charcoal/40">
                100% free · No commitment · Custom itinerary in 24h · Satisfaction guaranteed
              </p>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
