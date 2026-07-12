import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Key to GTA",
  description: "Rental and real estate guidance across the GTA.",
};

const CLARITY_PROJECT_ID = "xixi2ztu0j";

const CLARITY_SCRIPT =
  "(function(c,l,a,r,i,t,y){" +
  "c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};" +
  "t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i+\"?ref=npm\";" +
  "y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);" +
  "})(window, document, \"clarity\", \"script\", \"" + CLARITY_PROJECT_ID + "\");";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y998E1RMJ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y998E1RMJ9');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {CLARITY_SCRIPT}
        </Script>
      </body>
    </html>
  );
}