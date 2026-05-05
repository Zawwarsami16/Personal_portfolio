import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zawwarsami.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zawwar Sami — Full-Stack Engineer",
    template: "%s · Zawwar Sami",
  },
  description:
    "Engineer and builder of ZAI. Founder of Anteroom Studio. Building AI systems for markets, geopolitics, and the macro forces that shape the world.",
  applicationName: "Zawwar Sami",
  authors: [{ name: "Zawwar Sami" }],
  creator: "Zawwar Sami",
  keywords: [
    "Zawwar Sami",
    "Anteroom Studio",
    "ZAI",
    "engineer",
    "AI",
    "macro markets",
    "Mississauga",
    "Canada",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    siteName: "Zawwar Sami",
    title: "Zawwar Sami — Full-Stack Engineer",
    description: "Building thoughtful digital systems.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zawwar Sami — Full-Stack Engineer",
    description: "Building thoughtful digital systems.",
    creator: "@Kh4nZawwar",
  },
  robots: { index: true, follow: true },
};

export function pageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}
