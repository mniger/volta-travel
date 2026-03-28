import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Travel Advisors — Volta | Italy DMC Partner",
  description:
    "Partner with Volta for your Italy trips. 24-hour bespoke proposals, 700+ vetted partners, transparent pricing, full commission protection.",
  openGraph: {
    title: "For Travel Advisors — Volta Travel",
    description:
      "Your Italy ground partner that actually delivers. 24h proposals, transparent pricing.",
  },
};

export default function AdvisorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
