import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/persian-newcomer-neighbourhoods-gta";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Persian Newcomer Neighbourhoods in the GTA (2026) | KeyToGTA.ca";
const description =
  "Where Toronto's Persian-speaking community is concentrated across the GTA, and what that means for choosing a rental neighbourhood in North York, Richmond Hill, Vaughan, Markham, or Scarborough.";

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
        alt: "GTA neighbourhoods for Persian-speaking newcomers",
      },
    ],
  },
};

const heroBadges = [
  "North York core",
  "Richmond Hill growth",
  "Vaughan subway access",
  "Markham & Scarborough",
];

const areaSections = [
  {
    name: "North York (Willowdale / Yonge-Finch)",
    tag: "Historic core",
    href: "/rent/north-york",
    linkLabel: "North York rental guide",
    description:
      "The historic core of the community, anchored by the Toronto Iranian Plaza near Finch and Steeles - decades-old and dense with Persian restaurants, bakeries, grocers, and services. This is the most established option for community infrastructure.",
  },
  {
    name: "Richmond Hill",
    tag: "Fastest-growing",
    href: "/rent/richmond-hill",
    linkLabel: "Richmond Hill rental guide",
    description:
      "The fastest-growing pocket of the community over the last 15-20 years, with newer housing stock and more space than North York, plus its own concentration of Persian businesses along Yonge Street.",
  },
  {
    name: "Vaughan",
    tag: "Subway access",
    href: "/rent/vaughan",
    linkLabel: "Vaughan rental guide",
    description:
      "A growing Persian-Canadian community, often noted for its business and industrial-sector employment base. Vaughan is also the one area on this list with genuine subway access, at Vaughan Metropolitan Centre - a real differentiator if commuting into Toronto matters to you.",
  },
  {
    name: "Markham",
    tag: "Quieter, smaller",
    href: "/rent/markham",
    linkLabel: "Markham rental guide",
    description:
      "A smaller but present Persian-Canadian community, generally quieter than North York or Richmond Hill, and well-served by GO Transit and VIVA bus rapid transit rather than subway.",
  },
  {
    name: "Scarborough",
    tag: "Outside the corridor",
    href: "/rent/scarborough",
    linkLabel: "Scarborough rental guide",
    description:
      "Sits outside the traditional Yonge-corridor concentration this community has historically grown along, so it's a more diverse, general-newcomer option than a specifically Persian-concentrated one - worth including for renters prioritizing affordability and transit access over proximity to this particular community.",
  },
];

const faqs = [
  {
    question: "Where is Toronto's Persian community concentrated?",
    answer:
      "Along the Yonge Street corridor, from around Finch and Steeles in Willowdale (North York) north through Thornhill and into Richmond Hill - an area sometimes called \"Tehranto\" or \"Little Persia,\" historically anchored by the Toronto Iranian Plaza.",
  },
  {
    question: "Is North York or Richmond Hill better for a Persian newcomer?",
    answer:
      "It depends what you're optimizing for. North York (Willowdale) has the most established, decades-old community infrastructure. Richmond Hill has grown fastest over the last 15-20 years and generally offers newer housing and more space, though it's further from the historic core.",
  },
  {
    question: "Are there Persian-speaking services in Vaughan or Markham?",
    answer:
      "Yes, though the concentration is lighter than North York or Richmond Hill. Vaughan has a growing community often tied to business and industrial-sector work, while Markham's Persian-Canadian community is smaller and quieter.",
  },
  {
    question: "Is Scarborough part of the Persian community corridor?",
    answer:
      "Not really - Scarborough sits outside the traditional Yonge Street concentration this community has grown along. It's a reasonable option for affordability and transit access generally, but not a specifically Persian-concentrated area the way North York or Richmond Hill are.",
  },
  {
    question: "Should I prioritize community proximity or rent price when choosing a neighbourhood?",
    answer:
      "That's a real trade-off, not a settled question. Areas closer to established Persian community infrastructure tend to cost more or offer less space for the price than areas further from that corridor. Neither choice is wrong - it depends how much community proximity is worth to you versus budget or space.",
  },
  {
    question: "What is the Toronto Iranian Plaza?",
    answer:
      "A long-standing commercial plaza near Finch and Steeles in Willowdale (North York), dense with Persian restaurants, bakeries, grocers, and services - historically the anchor point of the community in Toronto.",
  },
  {
    question: "Do I need Canadian credit history to rent in these areas?",
    answer:
      "No - the same rules apply here as anywhere in the GTA. See our newcomer rental help guide for what changes by status, and our Ontario rental application checklist for the documents landlords typically ask for.",
  },
  {
    question: "How much does it cost to rent along the Yonge corridor vs. elsewhere in the GTA?",
    answer:
      "It varies by area - see each area guide's sourced rent range (North York, Richmond Hill, Vaughan, Markham) for current figures, since they change month to month and by neighbourhood within each area.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Persian Newcomer Neighbourhoods in the GTA (2026)",
    description,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    about: [
      {
        "@type": "Thing",
        name: "Persian community GTA neighbourhoods",
      },
      {
        "@type": "Thing",
        name: "Tehranto Yonge Street corridor",
      },
      {
        "@type": "Thing",
        name: "Iranian Canadian rental neighbourhoods",
      },
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
        name: "Persian Newcomer Neighbourhoods in the GTA",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Persian Newcomer Neighbourhoods in the GTA (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Newcomer rental guidance",
    keywords: [
      "Persian community GTA neighbourhoods",
      "Tehranto Toronto",
      "Little Persia Toronto",
      "Iranian Canadian rental neighbourhoods GTA",
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
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
];

export default function PersianNewcomerNeighbourhoodsPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <PageViewTracker eventName="persian_neighbourhoods_view" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/12 bg-[#09111F]/85 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5C979]/25 bg-white/[0.06] text-base font-bold text-[#F5C979] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_22px_rgba(245,201,121,0.14)]">
              K
            </span>
            <span className="text-base font-semibold tracking-tight text-white">
              Key to GTA
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="#by-area" className="hover:text-white">
              By Area
            </a>
            <a href="#trade-offs" className="hover:text-white">
              Trade-offs
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <Link
            href="/#rental-match"
            className="rounded-full bg-[#F5C979] px-5 py-3 text-sm font-semibold text-[#070A12] shadow-[0_0_35px_rgba(245,201,121,.22)] transition hover:scale-[1.03]"
          >
            Check Readiness
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-8 md:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,10,18,0.98)_0%,rgba(7,10,18,0.82)_48%,rgba(36,27,20,0.72)_100%)]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D8C7AA] md:text-sm">
              GTA Rental Guide
            </p>
            <h1 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight md:text-[2.85rem] lg:text-[3rem]">
              Persian newcomer neighbourhoods in the GTA: where the community is concentrated (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Toronto's Persian-Canadian community is concentrated along a
              specific stretch of the GTA - not spread evenly across the
              region. This guide maps out where that community lives today,
              what each area actually offers, and how to weigh community
              proximity against rent and space when choosing your first
              neighbourhood.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#F5C979] px-8 py-4 text-center font-extrabold text-[#070A12] shadow-[0_0_45px_rgba(245,201,121,.30)] transition hover:scale-[1.03]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#by-area"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Compare Areas
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/52">
              General information only. This is about rental and settlement
              geography, not a ranking of communities.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.04))] p-3 shadow-2xl lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA neighbourhoods for Persian-speaking newcomers"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">
                The Yonge corridor
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                One corridor, five real options.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/62"
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
          <div className="rounded-[2rem] border border-[#F5C979]/30 bg-[#F5C979]/10 p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#F5C979]">
              Direct Answer
            </p>
            <h2 className="max-w-4xl text-3xl font-bold md:text-4xl">
              Where do Persian-speaking newcomers tend to settle in the GTA, and why does it matter for renting?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/85">
              Toronto's Persian-Canadian community is concentrated along a
              specific corridor: Yonge Street, running from around Finch and
              Steeles in Willowdale (North York) north through Thornhill and
              into Richmond Hill. This area is sometimes referred to
              informally as "Tehranto" or "Little Persia," anchored
              historically by the Toronto Iranian Plaza near Finch and
              Steeles. Over the past 15-20 years, the community has expanded
              further north along the same corridor into Richmond Hill,
              driven partly by newer housing stock and more space -
              Statistics Canada mother-tongue data cited by the Globe and
              Mail shows Richmond Hill's Persian/Farsi mother-tongue
              population grew roughly 44%, from about 10,865 to 15,690,
              between census periods. Vaughan and Markham also have
              meaningful Persian-Canadian populations. For a newcomer
              choosing a first rental, this matters because proximity to
              this corridor generally means more Farsi-speaking services,
              Persian grocers and restaurants, and established community
              infrastructure - though it's one factor among several, not the
              only one worth weighing.
            </p>
          </div>
        </div>
      </section>

      <section id="by-area" className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            By Area
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            How each area fits this community
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
            The same 5 areas covered across this site map directly onto the
            community's actual geography, from the historic core to areas
            further from it.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {areaSections.map((area) => (
              <article key={area.href} className="rounded-[2rem] bg-black/5 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6E6254]">
                  {area.tag}
                </p>
                <h3 className="mt-2 text-xl font-bold">{area.name}</h3>
                <p className="mt-3 leading-7 text-[#3D352D]">
                  {area.description} See our{" "}
                  <Link
                    href={area.href}
                    className="text-[#6E6254] underline underline-offset-2 hover:text-[#070A12]"
                  >
                    {area.linkLabel}
                  </Link>{" "}
                  for sourced rent ranges and neighbourhood detail.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trade-offs" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            A Real Trade-off
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Community proximity vs. rent and space
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            Renting closer to established community infrastructure -
            Persian grocers, bakeries, restaurants, religious and cultural
            centres, Farsi-speaking services - usually means paying more, or
            getting less space for the same budget, than renting further
            from that corridor. That's a genuine trade-off, not a hidden
            catch: some renters value being a short walk from familiar
            grocers and being able to run daily errands in Farsi enough to
            pay for it; others would rather optimize purely for rent and
            commute, and treat community proximity as an occasional drive
            rather than a daily convenience. Both are reasonable choices -
            what matters is making the trade-off deliberately, rather than
            defaulting into a higher rent without weighing what it's
            actually buying you.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Once you've picked an area, see our{" "}
            <Link
              href="/rental-documents/checklist-ontario"
              className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
            >
              Ontario rental application checklist
            </Link>{" "}
            for the documents landlords typically expect, and our{" "}
            <Link
              href="/newcomer-rental-help-gta"
              className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
            >
              newcomer rental help guide
            </Link>{" "}
            for what changes by status - student, work permit holder,
            permanent resident - plus how to avoid rental scams.
          </p>
        </div>
      </section>

      <section className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
              Next Step
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to see how your application looks?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
              Use the Key to GTA Rental Readiness tool to review your
              budget, income, documents, and application strength before
              you submit an application in any of these areas.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#070A12] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C979]">
              Free readiness check
            </p>
            <p className="mt-3 leading-7 text-white/70">
              It takes a few minutes and gives you a clearer view of where
              your application is strong, what may need work, and what to
              prepare next.
            </p>
            <Link
              href="/#rental-match"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#F5C979] px-6 py-4 text-center font-bold text-[#070A12]"
            >
              Start Rental Readiness
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            FAQ
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Persian newcomer neighbourhoods FAQ
          </h2>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-white/70">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
