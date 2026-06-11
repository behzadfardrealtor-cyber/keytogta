import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Key to GTA",
  description: "Rental and real estate guidance across the GTA.",
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