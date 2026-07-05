import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer State Bin Cleaners | Trash Bin Cleaning in Middle Tennessee",
  description:
    "Professional trash bin cleaning for homes, HOAs, apartments, and businesses throughout Middle Tennessee.",
  keywords: [
    "trash bin cleaning",
    "garbage can cleaning",
    "bin cleaning",
    "trash can cleaning",
    "Middle Tennessee",
    "Nashville",
    "Mt Juliet",
    "Lebanon",
    "Murfreesboro",
    "HOA bin cleaning",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}