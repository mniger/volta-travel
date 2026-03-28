import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Volta — AI-Curated Luxury Travel in Italy",
    template: "%s | Volta Travel",
  },
  description:
    "Experience Italy like never before. Every journey is designed with AI precision and perfected by experts with 700+ vetted partners across all of Italy.",
  keywords: [
    "luxury travel Italy",
    "custom Italy trip",
    "bespoke Italy travel",
    "AI travel planning",
    "Italy honeymoon",
    "Italy food tour",
    "Amalfi Coast trip",
    "Tuscany travel",
    "Italy DMC",
    "Italy travel planner",
    "custom Italy itinerary",
  ],
  metadataBase: new URL("https://volta.travel"),
  openGraph: {
    title: "Volta — AI-Curated Luxury Travel in Italy",
    description:
      "Every journey designed with AI precision. Perfected by experts. 700+ vetted partners. 150+ curated destinations.",
    type: "website",
    locale: "en_US",
    siteName: "Volta Travel",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Volta — AI-Curated Luxury Travel in Italy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volta — AI-Curated Luxury Travel in Italy",
    description: "AI-designed, expert-perfected Italian journeys. 200+ trips curated. 150+ destinations.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://volta.travel" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Volta Travel",
  description: "AI-Curated Luxury Travel in Italy",
  url: "https://volta.travel",
  email: "hello@volta.travel",
  areaServed: { "@type": "Country", name: "Italy" },
  serviceType: ["Luxury Travel", "Custom Itineraries", "DMC", "Travel Planning"],
  knowsAbout: ["Italy Travel", "Luxury Hotels", "Italian Cuisine", "Wine Tours", "Cultural Experiences"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Analytics: Replace with Plausible or Google Analytics when ready */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
