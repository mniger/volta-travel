import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip Calculator — Volta | Estimate Your Italy Trip",
  description: "Get a ballpark estimate for your Italian dream trip. Select destinations, travelers, and experience level to see pricing.",
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
