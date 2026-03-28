import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Guides — Volta | Italy Travel Guides",
  description:
    "Insider Italy travel guides from experts who've curated 200+ trips. Rome, Amalfi Coast, Tuscany Food & Wine. Instant download.",
  openGraph: {
    title: "Digital Guides — Volta Travel",
    description: "Italy insider guides. Instant download. From $197.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
