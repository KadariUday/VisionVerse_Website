import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "VISION VERSE24 — IDEAS. CODE. IMPACT. | Digital Development Agency",
    template: "%s | VISION VERSE24",
  },
  description:
    "Vision Verse24 is a premier digital development agency providing professional websites, AI solutions, portfolio websites, and college projects at student and business-friendly rates.",
  keywords: [
    "Vision Verse24",
    "Web Development Hyderabad",
    "Student Portfolio Website ₹499",
    "Resume Website ₹299",
    "College Projects ₹699",
    "Business Websites ₹1500",
    "Next.js Development Agency",
    "AI Solutions",
    "Kadari Uday",
    "SR Jewellery Collections",
    "Institute of Aeronautical Engineering",
  ],
  authors: [{ name: "Kadari Uday", url: "https://github.com/KadariUday" }],
  creator: "Vision Verse24",
  publisher: "Vision Verse24",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "VISION VERSE24 — IDEAS. CODE. IMPACT.",
    description:
      "Transforming ideas into powerful digital experiences. Professional websites, AI applications, portfolios, and academic projects.",
    siteName: "VISION VERSE24",
    images: [
      {
        url: "/images/logo-badge.jpg",
        width: 1200,
        height: 630,
        alt: "VISION VERSE24 — Digital Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VISION VERSE24 — IDEAS. CODE. IMPACT.",
    description:
      "Professional websites, AI applications, student portfolios, and college projects.",
    images: ["/images/logo-badge.jpg"],
    creator: "@vision_verse24",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "VISION VERSE24",
    image: `${siteConfig.url}/images/logo-badge.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.owner.phone,
    email: siteConfig.owner.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500001",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.5983,
      longitude: 78.4283,
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.github,
      siteConfig.socials.portfolio,
    ],
    priceRange: "₹199 - ₹5000",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0C0D0E] text-[#F7F6F2] font-sans min-h-screen flex flex-col antialiased selection:bg-[#F59E0B] selection:text-black overflow-x-hidden w-full">
        <Navbar />
        <main className="flex-grow w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
