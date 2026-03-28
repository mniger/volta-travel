import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signature Experiences — Volta | Luxury Italy Travel",
  description:
    "Six curated ways to experience Italy: Honeymoon, Culinary Immersion, Quiet Italy, Heritage Journey, Family Adventure, and Longevity Retreat. AI-designed, expert-perfected.",
  openGraph: {
    title: "Signature Experiences — Volta Travel",
    description: "Six curated ways to fall in love with Italy.",
  },
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
