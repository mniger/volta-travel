"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Nav, Footer } from "@/components/nav";

const posts = [
  {
    slug: "quiet-italy-beyond-tourist-trail",
    title: "Quiet Italy: 10 Destinations Beyond the Tourist Trail",
    excerpt: "Forget Rome-Florence-Venice. The real Italy is in the borghi, the hills, and the coastlines that most travelers never discover. Here are 10 places that will change how you see this country.",
    readTime: "8 min",
    category: "Destinations",
    date: "2026-03-25",
  },
  {
    slug: "ai-travel-planning-future",
    title: "How AI Is Changing Luxury Travel Planning (And Why It Matters)",
    excerpt: "The luxury travel industry hasn't changed in 30 years. AI is about to change everything — from proposal speed to personalization depth. Here's what the future looks like.",
    readTime: "6 min",
    category: "Industry",
    date: "2026-03-20",
  },
  {
    slug: "italy-honeymoon-guide-2026",
    title: "The Complete Italy Honeymoon Guide for 2026",
    excerpt: "Planning an Italy honeymoon? From the best time to visit to the most romantic experiences, here's everything you need to know — written by an expert with years of Italian travel experience.",
    readTime: "12 min",
    category: "Planning",
    date: "2026-03-15",
  },
  {
    slug: "italian-food-mistakes-tourists-make",
    title: "7 Italian Food Mistakes Every Tourist Makes (And What to Do Instead)",
    excerpt: "Cappuccino after lunch. Chicken on pasta. Alfredo sauce. If you've done any of these in Italy, don't worry — but read this before your next trip.",
    readTime: "5 min",
    category: "Culture",
    date: "2026-03-10",
  },
  {
    slug: "heritage-travel-italy-roots",
    title: "Heritage Travel: How to Trace Your Italian Roots",
    excerpt: "80 million people worldwide have Italian ancestry. If you're one of them, a heritage journey could be the most meaningful trip of your life. Here's how to plan one.",
    readTime: "10 min",
    category: "Heritage",
    date: "2026-03-05",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      <section className="pt-32 pb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-warm-dark"
        >
          Journal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-serif text-5xl tracking-tight text-charcoal md:text-6xl"
        >
          Stories from Italy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-charcoal/60"
        >
          Insider knowledge, travel tips, and stories from years of Italian travel expertise.
        </motion.p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-6">
          {posts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer rounded-2xl border border-warm/10 bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-warm/30 hover:bg-white hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/40">
                <span className="rounded-full bg-warm/10 px-3 py-1 font-medium text-warm-dark">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-2xl text-charcoal group-hover:text-warm-dark transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-warm-dark group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-warm/20 bg-warm/5 p-8 text-center">
          <h3 className="font-serif text-xl text-charcoal">Ready to experience Italy?</h3>
          <p className="mt-2 text-sm text-charcoal/60">Get a free personalized itinerary in 24 hours. No commitment.</p>
          <a
            href="/#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-3 text-sm font-medium text-cream hover:bg-navy transition-colors"
          >
            Get Your Free Itinerary <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
