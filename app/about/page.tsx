import type { Metadata } from "next";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import { BROKERAGE_NAME } from "../lib/site-config";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/about";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "About Key to GTA | KeyToGTA.ca";
const description =
  "Key to GTA is built by Behzad Fard, a licensed Ontario real estate agent with 5+ years in the GTA rental market. Research-driven guidance, not a call centre.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "KeyToGTA.ca",
    type: "profile",
    locale: "en_CA",
  },
};

const differentiators = [
  {
    label: "Research, not filler",
    detail:
      "Every area guide and content page on this site cites real, current sources - liv.rent and Zumper rent data, CMHC vacancy figures, TRREB market stats, Statistics Canada demographic data, and Ontario's Residential Tenancies Act and Human Rights Code - instead of generic rental advice that could apply to any city.",
  },
  {
    label: "The Rental Readiness tool",
    detail:
      "A free tool that reviews your budget, income, credit, and document strength before you spend time on showings or submit an application.",
  },
  {
    label: "A real person, not a call centre",
    detail:
      "Key to GTA is a one-person operation. When you submit a Rental Readiness request, I review it personally - not a script, not a resold lead.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "About Key to GTA",
    description,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    mainEntity: {
      "@id": `${pageUrl}#person`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${pageUrl}#person`,
    name: "Behzad Fard",
    jobTitle: "Real Estate Agent",
    url: pageUrl,
    worksFor: {
      "@type": "Organization",
      name: BROKERAGE_NAME,
    },
    description:
      "Licensed real estate agent in Ontario with 5+ years working in the GTA market, backed by " +
      BROKERAGE_NAME +
      "'s real-time market data and a technology-driven approach to pricing, timing, and negotiation.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-[#E8E4DD] px-6 py-5">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2F6F6B]/20 bg-[#DCE8E3] text-base font-bold text-[#17313A] shadow-[inset_0_1px_0_rgba(255,255,255,0.80),0_12px_28px_rgba(23,49,58,0.08)]">
              K
            </span>
            <span className="text-base font-semibold tracking-tight text-[#17313A]">
              Key to GTA
            </span>
          </Link>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            About
          </p>
          <h1 className="text-3xl font-black tracking-tight md:text-5xl">
            About Key to GTA
          </h1>

          <p className="mt-8 max-w-3xl leading-8 text-[#17313A]/72">
            Key to GTA is a rental and real estate guidance site for the
            GTA, built to give renters and newcomers clear, research-backed
            information before they apply - not just another listings
            aggregator. Every guide on this site is connected to a real
            service: the Rental Readiness tool, and direct contact with a
            licensed agent, not a call centre or a resold lead.
          </p>

          <div className="mt-12 rounded-[2rem] border border-[#E8E4DD] bg-white p-8 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
            <div className="flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#2F6F6B]/20 bg-[#DCE8E3] text-xl font-bold text-[#2F6F6B]">
                BF
              </span>
              <div>
                <h2 className="text-2xl font-bold">Behzad Fard</h2>
                <p className="mt-1 text-sm text-[#17313A]/68">
                  Licensed Real Estate Agent, Ontario
                </p>
              </div>
            </div>
            <h3 className="mt-5 text-xl font-bold text-[#2F6F6B]">
              I don&apos;t guess. I work with data.
            </h3>
            <p className="mt-3 leading-7 text-[#17313A]/72">
              Real estate decisions are too important to run on gut
              feeling. Whether you&apos;re renting your first place or buying
              your first home, the difference between a good decision and
              an expensive mistake usually comes down to information - and
              most people simply don&apos;t have access to it. That&apos;s the gap I
              close.
            </p>
            <p className="mt-4 leading-7 text-[#17313A]/72">
              My approach is built on market data and modern tools. Backed
              by {BROKERAGE_NAME}, I work with real-time market
              intelligence that most independent agents can&apos;t reach - live
              pricing trends, rent
              ranges, neighbourhood demand, and application patterns. I
              read that data so you don&apos;t have to, and I turn it into
              clear, practical advice: what a property is really worth,
              when to move, where the leverage is, and where the risk
              hides.
            </p>
            <p className="mt-4 leading-7 text-[#17313A]/72">
              But data is only half the job. I explain things in plain
              language, I never rush a client, and I tell the truth even
              when it costs me the deal. My job isn&apos;t to close fast - it&apos;s
              to make sure that months later, you still know exactly why
              your decision made sense.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-bold md:text-3xl">
            How this site is different
          </h2>

          <div className="mt-6 grid gap-4">
            {differentiators.map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6 shadow-[0_18px_50px_rgba(23,49,58,.06)]"
              >
                <h3 className="text-lg font-bold text-[#2F6F6B]">
                  {item.label}
                </h3>
                <p className="mt-2 leading-7 text-[#17313A]/72">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#rental-match"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
            >
              Check My Rental Readiness
            </Link>
          </div>

          <p className="mt-12 max-w-3xl text-xs leading-6 text-[#17313A]/68">
            Behzad Fard is a licensed real estate agent in the Province of
            Ontario, brokered by {BROKERAGE_NAME}. This site provides
            general information only and is not a substitute for legal,
            financial, or immigration advice.
          </p>
        </div>
      </section>

      <FooterSection variant="light" />
    </main>
  );
}
