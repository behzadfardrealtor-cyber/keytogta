import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Key to GTA",
  description: "Rental and real estate guidance across the GTA.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: "Behzad Fard - Key to GTA",
      url: "https://keytogta.ca",
      email: "behzadfardrealtor@gmail.com",
      areaServed: [
        "North York",
        "Richmond Hill",
        "Thornhill",
        "Scarborough",
        "Markham",
        "Mississauga",
        "Etobicoke",
      ],
      description:
        "Renter readiness checks and curated MLS rental shortlists for tenants across the Greater Toronto Area, matched to each renter's budget and needs.",
    },
    {
      "@type": "WebSite",
      name: "Key to GTA",
      url: "https://keytogta.ca",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}