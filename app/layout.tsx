import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Volunteer State Bin Cleaners | Trash Bin Cleaning in Middle Tennessee",
  description:
    "Professional residential and commercial trash bin cleaning serving Nashville, Murfreesboro, Franklin, Hendersonville, Gallatin, Mt. Juliet, Lebanon, Brentwood, Smyrna and surrounding Middle Tennessee.",
  keywords: [
    "Trash Bin Cleaning",
    "Trash Can Cleaning",
    "Garbage Bin Cleaning",
    "Commercial Dumpster Cleaning",
    "Trash Bin Sanitizing",
    "Nashville Trash Bin Cleaning",
    "Murfreesboro Trash Bin Cleaning",
    "Franklin Trash Bin Cleaning",
    "Gallatin Trash Bin Cleaning",
    "Hendersonville Trash Bin Cleaning",
    "Mt Juliet Trash Bin Cleaning",
    "Lebanon Trash Bin Cleaning",
    "Brentwood Trash Bin Cleaning",
    "Smyrna Trash Bin Cleaning"
  ],
  authors: [
    {
      name: "Volunteer State Bin Cleaners",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Volunteer State Bin Cleaners",
    description:
      "Professional trash bin cleaning throughout Middle Tennessee.",
    url: "https://volunteerstatebincleaners.com",
    siteName: "Volunteer State Bin Cleaners",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer State Bin Cleaners",
    description:
      "Professional residential and commercial trash bin cleaning.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Volunteer State Bin Cleaners",
    url: "https://volunteerstatebincleaners.com",
    image: "https://volunteerstatebincleaners.com/logo.png",
    telephone: "+1-931-213-0332",
    email: "info@volunteerstatebincleaners.com",
    priceRange: "$$",
    areaServed: [
      "Nashville",
      "Murfreesboro",
      "Franklin",
      "Gallatin",
      "Hendersonville",
      "Mt. Juliet",
      "Lebanon",
      "Brentwood",
      "Smyrna",
      "Cookeville"
    ]
  };
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness),
          }}
        />
        {children}
      </body>
    </html>
  );
}
