import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../../components/FooterSection";
import PageViewTracker from "../../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/rent/toronto";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Toronto Rental Guide 2026 | Neighbourhoods, Prices & Transit | KeyToGTA.ca";
const description =
  "Renting in Toronto proper? Compare Downtown, Midtown, East End, Etobicoke and West End rents, transit, and vibe - plus how to avoid the rental scams targeting newcomers.";

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
    type: "article",
    locale: "en_CA",
    images: [
      {
        url: `${siteUrl}/hero-condo.jpg`,
        width: 1200,
        height: 630,
        alt: "Toronto neighbourhood rental guide",
      },
    ],
  },
};

const heroFactRows = [
  { label: "Most affordable right now", status: "Downtown / Parkdale" },
  { label: "Fastest-rising area", status: "Etobicoke" },
  { label: "Priciest pocket", status: "Riverdale" },
];

const heroBadges = [
  "5 neighbourhoods compared",
  "Report month on every figure",
  "Rental scam safety",
  "Transit at a glance",
];

const comparisonRows = [
  {
    area: "Downtown Core (Financial/Entertainment District)",
    rent: "$2,096",
    asOf: "Jan 2026 (liv.rent)",
    trend: "Down ~10% year-over-year, still softening",
    bestFor: "Walk-to-work professionals - currently the most affordable of this group, not the priciest",
  },
  {
    area: "Midtown (Yonge-Eglinton, Davisville)",
    rent: "$2,125",
    asOf: "Aug 2026 (Zumper)",
    trend: "Down 3% year-over-year",
    bestFor: "More space, same subway line, gently softening market",
  },
  {
    area: "East End - Riverdale",
    rent: "$2,586",
    asOf: "Aug 2026 (Zumper)",
    trend: "Up slightly year-over-year",
    bestFor: "Character and patio culture - but you're now paying a premium for it, not a discount",
  },
  {
    area: "East End - East Danforth",
    rent: "$2,409",
    asOf: "Aug 2026 (Zumper)",
    trend: "Down ~6.6% year-over-year",
    bestFor: "Same vibe, noticeably cheaper than Riverdale's core",
  },
  {
    area: "Etobicoke",
    rent: "$2,176",
    asOf: "May 2026 (liv.rent)",
    trend: "Up ~7% since January - the fastest-rising area in this comparison",
    bestFor: "Renters chasing more space in newer buildings; no longer the budget pick it once was",
  },
  {
    area: "West End - Parkdale",
    rent: "$1,974",
    asOf: "Aug 2026 (Zumper)",
    trend: "Flat month-over-month",
    bestFor: "Best value this close to the core, right now",
  },
  {
    area: "West End - Liberty Village",
    rent: "$2,500",
    asOf: "Aug 2026 (Zumper)",
    trend: "Down slightly month-over-month",
    bestFor: "Newer condos and nightlife - priced like it",
  },
];

const scamCases = [
  {
    title: "Toronto Police Service - North York (June 2026)",
    detail:
      "A Thornhill woman was arrested after advertising apartments near Yonge and Finch on an online platform, specifically targeting international students. Victims paid deposits without ever viewing the units in person or meeting her - and once payment went through, she stopped responding. It later came out she wasn't authorized to rent out the units at all. Police believe there may be additional victims they haven't yet identified.",
  },
  {
    title: "Peel Regional Police - Brampton (charged July 2026)",
    detail:
      "A 27-year-old woman was charged with 38 counts of fraud over $5,000 and one count of obstructing police, accused of defrauding 17 tenants of more than $60,000 between May 2025 and February 2026. Victims signed lease agreements and paid first and last month's rent - some after already moving out of their previous homes - only to discover on move-in day that the units were never actually available.",
  },
];

const nonNegotiables = [
  "Never send money before seeing the unit in person (or via a live video walkthrough with someone you trust).",
  "Be wary of any landlord or agent who won't meet you at the property.",
  "Ask to see the building's status certificate before signing anything for a condo unit - this is exactly the kind of document review a licensed agent should be doing on your behalf, not something you should be reading alone for the first time.",
  "If a deal feels rushed, that's the point - slow down.",
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Toronto Rental Guide 2026",
    description,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    about: [
      { "@type": "Thing", name: "Toronto rental neighbourhoods" },
      { "@type": "Thing", name: "renting in Toronto 2026" },
      { "@type": "Thing", name: "Toronto rental scams" },
    ],
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    mainEntity: {
      "@id": `${pageUrl}#article`,
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
        name: "Toronto Rental Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Renting in Toronto: A Neighbourhood-by-Neighbourhood Guide (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Toronto rental neighbourhoods",
    keywords: [
      "renting in Toronto",
      "Toronto neighbourhood rental guide",
      "Toronto rental scams",
      "Downtown Toronto rent",
      "Etobicoke rent",
    ],
    author: {
      "@type": "Organization",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "KeyToGTA.ca",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/keytogta-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
  },
];

export default function TorontoRentalGuidePage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <PageViewTracker eventName="toronto_rental_guide_view" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className="sticky top-0 z-50 border-b border-[#E8E4DD] bg-white/88 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2F6F6B]/20 bg-[#DCE8E3] text-base font-bold text-[#17313A] shadow-[inset_0_1px_0_rgba(255,255,255,0.80),0_12px_28px_rgba(23,49,58,0.08)]">
              K
            </span>
            <span className="text-base font-semibold tracking-tight text-[#17313A]">
              Key to GTA
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#17313A]/72 md:flex">
            <a href="#compare" className="hover:text-[#17313A]">
              Compare
            </a>
            <a href="#downtown" className="hover:text-[#17313A]">
              Neighbourhoods
            </a>
            <a href="#scams" className="hover:text-[#17313A]">
              Scam Safety
            </a>
          </nav>

          <Link
            href="/#rental-match"
            className="rounded-full bg-[#2F6F6B] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(47,111,107,.20)] transition hover:scale-[1.03] hover:bg-[#17313A]"
          >
            Get My Rental Shortlist
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-8 md:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(247,247,242,0.94)_0%,rgba(255,255,255,0.86)_48%,rgba(220,232,227,0.68)_100%)]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#2F6F6B] md:text-sm">
              GTA Rental Guide
            </p>
            <h1 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight md:text-[2.85rem] lg:text-[3rem]">
              Renting in Toronto: a neighbourhood-by-neighbourhood guide (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              Toronto proper isn&apos;t one neighbourhood. It&apos;s a patchwork
              of very different pockets: the glass towers of the Financial
              District, the walk-up apartments of the Danforth, the family
              streets of Etobicoke. Picking the right one matters as much as
              picking the right unit.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Get My Rental Shortlist
              </Link>
              <a
                href="#compare"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                Compare Neighbourhoods
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              Rent figures below come from liv.rent&apos;s Ontario Rent Report
              (municipality-level) and Zumper&apos;s neighbourhood-level data,
              dated August 2026 unless noted. Rents shift monthly - the date
              next to each figure tells you how current it is.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white shadow-[0_18px_50px_rgba(23,49,58,.08)] lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-t-[2rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="Toronto condo building for rent"
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6F6B]">
                2026 Toronto snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Know which pocket fits your budget.
              </p>

              <div className="mt-4 grid gap-2">
                {heroFactRows.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] px-3 py-2.5"
                  >
                    <span className="text-sm font-semibold text-[#17313A]/78">
                      {item.label}
                    </span>
                    <span className="rounded-full bg-[#2F6F6B]/12 px-3 py-1 text-xs font-bold text-[#2F6F6B]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#E8E4DD] bg-[#F7F7F2] px-3 py-1.5 text-xs font-semibold text-[#17313A]/68"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="direct-answer" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#2F6F6B]/25 bg-[#DCE8E3] p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
              Direct Answer
            </p>
            <h2 className="max-w-4xl text-3xl font-bold md:text-4xl">
              &quot;GTA&quot; and &quot;Toronto&quot; are not the same search
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/85">
              If you&apos;ve been looking at rental guides for{" "}
              <Link
                href="/rent/markham"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Markham
              </Link>
              ,{" "}
              <Link
                href="/rent/vaughan"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Vaughan
              </Link>
              , or{" "}
              <Link
                href="/rent/richmond-hill"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Richmond Hill
              </Link>{" "}
              and still haven&apos;t found what you need, that&apos;s because
              those are 905-area suburbs - separate cities that border
              Toronto but aren&apos;t Toronto. If you specifically want to
              live inside the city of Toronto itself - walking distance to
              the subway, a short ride to downtown, inside the 416 - this
              guide is for you. If affordability matters more than staying
              inside Toronto proper,{" "}
              <Link
                href="/cheapest-areas-to-rent-gta"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                see how all five covered GTA areas compare on price
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="compare" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Compare
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Toronto neighbourhoods at a glance
          </h2>

          <div className="mt-10 hidden overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F7F7F2] text-sm font-semibold uppercase tracking-[0.08em] text-[#2F6F6B]">
                  <th className="px-6 py-4">Neighbourhood</th>
                  <th className="px-6 py-4">Avg. 1-Bed</th>
                  <th className="px-6 py-4">As of</th>
                  <th className="px-6 py-4">Trend</th>
                  <th className="px-6 py-4">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.area}
                    className="border-t border-[#E8E4DD] text-[#17313A]/78"
                  >
                    <td className="px-6 py-4 font-semibold">{row.area}</td>
                    <td className="px-6 py-4">{row.rent}</td>
                    <td className="px-6 py-4 text-sm text-[#17313A]/60">
                      {row.asOf}
                    </td>
                    <td className="px-6 py-4 text-sm">{row.trend}</td>
                    <td className="px-6 py-4 text-sm">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.area}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-5 shadow-[0_18px_50px_rgba(23,49,58,.06)]"
              >
                <p className="text-lg font-bold text-[#2F6F6B]">{row.area}</p>
                <p className="mt-2 text-xl font-bold text-[#17313A]">{row.rent}</p>
                <p className="mt-1 text-sm text-[#17313A]/60">As of {row.asOf}</p>
                <p className="mt-2 leading-6 text-[#17313A]/72">{row.trend}</p>
                <p className="mt-2 text-sm text-[#17313A]/68">{row.bestFor}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            Figures above come from liv.rent&apos;s Ontario Rent Report
            (municipality-level: Downtown Toronto, Etobicoke) and
            Zumper&apos;s neighbourhood-level data (Midtown, East End, West
            End - liv.rent doesn&apos;t break these out individually).
          </p>
        </div>
      </section>

      <section id="downtown" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Downtown Core
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Financial District &amp; Entertainment District
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            This is what most people picture when they say &quot;downtown
            Toronto&quot; - the CN Tower skyline, glass condo towers, and the
            shortest possible commute if you work in the city centre.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">What you&apos;re paying for</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Proximity - and right now, that&apos;s costing you less than
                you&apos;d think. A one-bedroom averaged $2,096 a month as of
                January 2026, down roughly 10% year-over-year, with declines
                continuing through the spring. A wave of investor-owned
                condos hitting the rental market has pushed supply up faster
                than demand downtown, which is good news if you&apos;re
                renting here right now - this is currently one of the more
                affordable areas on this list, not the most expensive.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Transit</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                You&apos;re almost always within walking distance of Line 1,
                and Union Station puts the rest of the city and the GO
                network within reach.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Trade-off</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Smaller units for the money, and building quality varies -
                older purpose-built rentals tend to have more predictable
                management, while newer investor-owned condos can have less
                consistent maintenance since your landlord isn&apos;t always
                local.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="midtown" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Midtown
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Yonge-Eglinton &amp; Davisville
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Locals sometimes call this stretch &quot;Young and Eligible&quot;
            - it&apos;s grown into a second downtown over the last decade,
            with the density of the core but a slightly more residential
            feel.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">What you&apos;re paying for</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                The same Line 1 subway access as downtown, in a market
                that&apos;s cooling gently - a one-bedroom averaged $2,125 a
                month as of August 2026, down about 3% from a year earlier.
              </p>
            </article>
            <article className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Transit</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Direct access to Line 1 (Yonge-University), roughly 25
                minutes to Union Station.
              </p>
            </article>
            <article className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Good to know</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                This area is dense with restaurants and cafés, so
                you&apos;re not sacrificing convenience for a quieter street
                and a softening market.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="east-end" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            East End
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Danforth &amp; Riverdale
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            If you want character - older brick homes, independent shops, a
            genuine neighbourhood feel - this is where a lot of renters end
            up staying long-term instead of moving every year. Just budget
            accordingly: this is currently one of the priciest pockets in
            this comparison, not a discount alternative to downtown.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">What you&apos;re paying for</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Riverdale itself averaged $2,586 for a one-bedroom as of
                August 2026 - above every other area on this list. If
                that&apos;s outside your budget, East Danforth (a short walk
                or streetcar ride further east) runs noticeably cheaper,
                averaging $2,409 across unit types and down about 6.6%
                year-over-year - worth checking if you want the vibe without
                Riverdale&apos;s core pricing.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Transit</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Line 2 (Bloor-Danforth) runs straight through, connecting you
                to downtown in well under 30 minutes.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Trade-off</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Older buildings sometimes mean no in-suite laundry or
                parking, so ask directly before booking a viewing - and
                don&apos;t assume this area is the &quot;affordable&quot;
                option anymore.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="etobicoke" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Etobicoke
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Toronto&apos;s western edge
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Currently the fastest-moving rental market in this comparison -
            not the value play it&apos;s sometimes assumed to be.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">What you&apos;re paying for</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                A one-bedroom averaged $2,176 as of May 2026 - the highest
                rent-per-square-foot of any area measured in the GTA that
                month - and prices are climbing fast, up roughly 7% since
                January alone. If you&apos;re comparing Etobicoke to downtown
                on old assumptions about which is cheaper, check current
                listings before you commit; that gap has narrowed or
                reversed.
              </p>
            </article>
            <article className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Transit</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Line 2 reaches the eastern part of Etobicoke; further west,
                you&apos;re more likely relying on buses or a car for the
                last stretch.
              </p>
            </article>
            <article className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Best for</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Renters prioritizing newer buildings and more space per unit
                who are comfortable with a longer subway ride - just verify
                today&apos;s price against your budget rather than a
                reputation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="west-end" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            West End
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Parkdale &amp; Liberty Village
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            These two neighbourhoods sit minutes apart but are no longer
            priced alike - worth treating as two separate decisions, not one
            &quot;West End&quot; bucket.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">What you&apos;re paying for</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Parkdale is currently the most affordable neighbourhood in
                this entire comparison - a one-bedroom averaged $1,974 as of
                August 2026, flat month-over-month. Liberty Village, by
                contrast, averaged $2,500 the same month - newer buildings,
                closer to the Exhibition GO stop, and priced accordingly.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Transit</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Streetcar lines run frequently along Queen and King through
                both areas; Liberty Village also has GO Transit&apos;s
                Exhibition stop for quick access west.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold text-[#2F6F6B]">Good to know</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                If budget is the deciding factor, Parkdale is the clearer
                pick right now. If you want newer construction and don&apos;t
                mind paying for it, Liberty Village delivers that at a real
                premium over its neighbour.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="scams" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Before You Sign
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Before you sign anything: the scam risk is real
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            This part isn&apos;t optional reading. Toronto&apos;s rental
            market moves fast, and that speed is exactly what scammers count
            on - especially with newcomers who aren&apos;t yet familiar with
            how Canadian leasing works. These aren&apos;t hypothetical
            warnings - both cases below resulted in real charges in 2026.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {scamCases.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6"
              >
                <h3 className="text-xl font-bold text-[#17313A]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#17313A]/72">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#2F6F6B]/25 bg-white p-8 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
            <h3 className="text-xl font-bold text-[#2F6F6B]">
              A few non-negotiables
            </h3>
            <ul className="mt-5 space-y-3">
              {nonNegotiables.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#17313A]/85">
                  <span className="text-[#2F6F6B]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-[#17313A]/68">
            This is the difference between finding a listing on your own and
            having someone verify it for you. A licensed agent reviewing the
            paperwork, confirming the landlord is who they say they are, and
            walking the unit with you isn&apos;t a luxury - in a market with
            real, recently-charged cases like these, it&apos;s the actual
            value of working with a real person instead of scrolling
            listings alone.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
              Next Step
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to look at real units instead of guessing?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Tell me your budget, your must-haves, and which of these
              neighbourhoods you&apos;re leaning toward - I&apos;ll pull
              together a shortlist that actually fits, verify the listings
              are real, and walk you through it.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#17313A] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DCE8E3]">
              Free readiness check
            </p>
            <p className="mt-3 leading-7 text-white/75">
              It takes a few minutes and gives you a clearer view of where
              your budget actually lands in Toronto proper, and what to
              prepare next.
            </p>
            <Link
              href="/#rental-match"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#2F6F6B] px-6 py-4 text-center font-bold text-white transition hover:bg-[#DCE8E3] hover:text-[#17313A]"
            >
              Get My Rental Shortlist
            </Link>
          </div>
        </div>
      </section>

      <FooterSection variant="light" />
    </main>
  );
}
