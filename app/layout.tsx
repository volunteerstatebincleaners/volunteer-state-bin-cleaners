import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Volunteer State Cleaners | Bin Cleaning & Exterior Cleaning in Middle Tennessee",
  description:
    "Professional bin cleaning, pressure washing, and exterior cleaning for homes, HOAs, apartments, and businesses throughout Middle Tennessee.",
  keywords: [
    "Volunteer State Cleaners",
    "trash bin cleaning",
    "garbage can cleaning",
    "bin cleaning",
    "trash can cleaning",
    "pressure washing",
    "exterior cleaning",
    "Middle Tennessee",
    "Nashville",
    "Mt Juliet",
    "Lebanon",
    "Murfreesboro",
    "Franklin",
    "Hendersonville",
    "Gallatin",
    "HOA bin cleaning",
  ],
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
