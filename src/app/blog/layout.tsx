import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Volta | Italy Travel Stories & Tips",
  description: "Insider knowledge, travel tips, and stories from 200+ luxury trips across Italy. Destinations, food, culture, and planning guides.",
  openGraph: {
    title: "Journal — Volta Travel",
    description: "Stories and insider tips from 200+ Italian journeys.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
