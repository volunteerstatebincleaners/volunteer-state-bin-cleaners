import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://volunteerstatecleaners.com"),

  title: {
    default: "Volunteer State Cleaners | Middle Tennessee",
    template: "%s | Volunteer State Cleaners",
  },

  description:
    "Volunteer State Cleaners provides professional trash bin cleaning, pressure washing, and exterior cleaning for homes, HOAs, apartments, and businesses throughout Middle Tennessee.",

  keywords: [
    "Volunteer State Cleaners",
    "bin cleaning",
    "trash bin cleaning",
    "trash can cleaning",
    "garbage can cleaning",
    "pressure washing",
    "exterior cleaning",
    "commercial pressure washing",
    "residential pressure washing",
    "HOA bin cleaning",
    "dumpster cleaning",
    "sidewalk pressure washing",
    "driveway pressure washing",
    "Middle Tennessee",
    "Nashville",
    "Murfreesboro",
    "Franklin",
    "Hendersonville",
    "Gallatin",
    "Mt Juliet",
    "Lebanon",
  ],

  openGraph: {
    title: "Volunteer State Cleaners | Middle Tennessee",
    description:
      "Professional bin cleaning, pressure washing, and exterior cleaning throughout Middle Tennessee.",
    url: "https://volunteerstatecleaners.com",
    siteName: "Volunteer State Cleaners",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Volunteer State Cleaners | Middle Tennessee",
    description:
      "Professional bin cleaning, pressure washing, and exterior cleaning throughout Middle Tennessee.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
