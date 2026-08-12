import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/cheapest-areas-to-rent-gta";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Cheapest Areas to Rent in the GTA (2026 Comparison) | KeyToGTA.ca";
const description =
  "A verified, dated comparison of rent across North York, Markham, Scarborough, Vaughan, Richmond Hill, plus Oshawa, Brampton and Ajax - and an honest answer on what $1,000-$1,500 actually gets you.";

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
        alt: "GTA rental buildings across price points",
      },
    ],
  },
};

const heroFactRows = [
  { label: "Cheapest of the 5 covered areas", status: "Shifts monthly" },
  { label: "Under $1,000 apartment", status: "Not realistic" },
  { label: "Cheapest GTA-wide (Oshawa)", status: "~$1,587/mo" },
];

const heroBadges = [
  "5 covered areas compared",
  "Oshawa / Brampton / Ajax",
  "Negotiating at renewal",
  "Report month on every figure",
];

const coveredAreas = [
  {
    name: "North York",
    range: "$1,950 - $2,150",
    asOf: "Jan 2026 (liv.rent) / May 2026 (Zumper)",
    note: "Currently at the low end of this group.",
    href: "/rent/north-york",
    linkLabel: "Full North York guide",
  },
  {
    name: "Markham",
    range: "$1,950 - $2,100",
    asOf: "Apr 2026 (liv.rent)",
    note: "One-bedroom rents fell 12.5% year-over-year - the steepest decline in Ontario that month.",
    href: "/rent/markham",
    linkLabel: "Full Markham guide",
  },
  {
    name: "Scarborough",
    range: "$1,850 - $1,900 (1BR)",
    asOf: "Aug 3, 2026 (TREB/PropTx MLS via REALM)",
    note: "Now the cheapest 1-bedroom condo rent of the five - the 'mid-pack' read from earlier in 2026 no longer holds.",
    href: "/rent/scarborough",
    linkLabel: "Full Scarborough guide",
  },
  {
    name: "Vaughan",
    range: "$2,000 - $2,900",
    asOf: "Current listings",
    note: "Currently among the higher end of this group.",
    href: "/rent/vaughan",
    linkLabel: "Full Vaughan guide",
  },
  {
    name: "Richmond Hill",
    range: "$2,000 - $3,000",
    asOf: "Current listings",
    note: "Currently the highest ceiling of the five.",
    href: "/rent/richmond-hill",
    linkLabel: "Full Richmond Hill guide",
  },
];

const outsideAreas = [
  {
    name: "Oshawa",
    range: "~$1,587 - $1,603",
    asOf: "Apr / May 2026 (liv.rent)",
    note: "Currently the least expensive municipality in liv.rent's Ontario Rent Reports.",
  },
  {
    name: "Brampton",
    range: "~$1,779",
    asOf: "Apr 2026 (liv.rent)",
    note: "Down 10.8% year-over-year, with the lowest rent-per-square-foot in Ontario.",
  },
  {
    name: "Ajax",
    range: "~$1,834",
    asOf: "Jun 2026 (liv.rent National Rent Report)",
    note: "Down 13.2% year-over-year - the biggest one-month drop in Canada that month. But Ajax spiked sharply just months earlier, so treat this as a snapshot, not a steady trend.",
  },
];

const faqs = [
  {
    question: "What's the cheapest place to rent in Ontario under $1,000?",
    answer:
      "Honestly, a normal private apartment for under $1,000 a month doesn't exist in the GTA or the wider markets we track right now - the lowest verified one-bedroom average anywhere in this comparison is around $1,587 in Oshawa. Listings claiming $1,000 or less are usually a single room in a shared house, not a self-contained unit. If $1,000 is a hard ceiling, look at shared housing, a room rental, or splitting a unit with a roommate rather than searching for a standalone apartment at that price.",
  },
  {
    question: "Are there affordable condos for rent in Toronto and the GTA?",
    answer:
      "\"Affordable\" is relative. Across North York, Markham, and Scarborough, realistic current one-bedroom condo pricing runs $1,850 to $2,150 a month. That's meaningfully below Vaughan or Richmond Hill's current ceilings, but it's not a $1,000-$1,500 budget - see the comparison table above for exact ranges and report months.",
  },
  {
    question: "What are cheap rent condos in the GTA right now?",
    answer:
      "No single area is reliably \"the cheap one\" anymore - Markham had the steepest rent decline in Ontario as of April 2026 and now sits at the low end alongside North York, reversing the pattern from earlier in the year. Check the dated comparison table on this page rather than relying on an area's older reputation.",
  },
  {
    question: "Is it cheaper to rent a condo near North York?",
    answer:
      "Relatively, yes, as of the most recent reporting - North York currently runs $1,950 to $2,150 a month (liv.rent, January 2026; Zumper, May 2026), among the lower end of the five areas we cover. See our full North York rental guide for neighbourhood-level detail.",
  },
  {
    question: "What are Scarborough condos for rent like on price?",
    answer:
      "Currently $1,850 to $1,900 a month for a 1-bedroom condo, based on active TREB/PropTx MLS listings via REALM (licensed agent access, August 3, 2026) - the cheapest of the five areas we cover right now, reversing the \"mid-pack\" estimate this page previously used. See our full Scarborough rental guide for a neighbourhood breakdown.",
  },
  {
    question: "Is Oshawa or Brampton cheaper than Scarborough or Markham?",
    answer:
      "Yes, currently and by a meaningful margin - roughly $350 to $450 a month less on a one-bedroom, based on liv.rent's April and May 2026 reports. We don't have hands-on, in-market experience helping renters in Oshawa or Brampton the way we do in our five covered areas, so treat these figures as directional research, not a recommendation.",
  },
  {
    question: "Should I rent further from Toronto to save money?",
    answer:
      "It's a real trade-off, not a simple yes. You'll likely pay less in rent further out, but you should weigh a longer or costlier commute, and less hands-on local guidance from us outside our five covered areas. If commute time matters, check GO Transit schedules before rent alone decides it.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Cheapest Areas to Rent in the GTA (2026 Comparison)",
    description,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    about: [
      { "@type": "Thing", name: "cheapest areas to rent in the GTA" },
      { "@type": "Thing", name: "affordable condos for rent Toronto" },
      { "@type": "Thing", name: "GTA rent comparison 2026" },
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
        name: "Cheapest Areas to Rent in the GTA",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Cheapest Areas to Rent in the GTA (2026 Comparison)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-08-01",
    dateModified: "2026-08-01",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "GTA rent comparison",
    keywords: [
      "cheapest areas to rent in the GTA",
      "affordable condos for rent Toronto",
      "cheap rent condos GTA",
      "rent condo near North York",
      "condos for rent Scarborough",
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

export default function CheapestAreasToRentGTAPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <PageViewTracker eventName="cheapest_areas_view" />
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
            <a href="#outside-areas" className="hover:text-[#17313A]">
              Oshawa &amp; Brampton
            </a>
            <a href="#budget" className="hover:text-[#17313A]">
              Under $1,000?
            </a>
            <a href="#negotiating" className="hover:text-[#17313A]">
              Negotiating
            </a>
            <a href="#faq" className="hover:text-[#17313A]">
              FAQ
            </a>
          </nav>

          <Link
            href="/#rental-match"
            className="rounded-full bg-[#2F6F6B] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(47,111,107,.20)] transition hover:scale-[1.03] hover:bg-[#17313A]"
          >
            Check Readiness
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
              Which GTA area is cheapest to rent in? North York, Markham,
              Scarborough, Vaughan &amp; Richmond Hill compared (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              Rent in the GTA doesn&apos;t sit still. The area that was
              cheapest six months ago isn&apos;t necessarily cheapest now.
              Here&apos;s what these five markets actually cost today, what
              Oshawa, Brampton, and Ajax cost by comparison, and what your
              budget really gets you.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#compare"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                Compare the Five Areas
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              Figures below are pulled from liv.rent&apos;s Ontario Rent
              Reports (January-June 2026) and current listing data. Every
              number has its report month next to it - rents shift enough
              month to month that an undated figure isn&apos;t worth much.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white p-3 shadow-[0_18px_50px_rgba(23,49,58,.08)] lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA rental buildings across different price points"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6F6B]">
                2026 rent snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Know which number is actually current.
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
              Is one of these five areas reliably the cheapest?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/85">
              Not right now - and treating it that way would be misleading.
              As of April 2026, Markham posted the steepest one-bedroom rent
              decline in Ontario (-12.5% year-over-year, liv.rent), and
              currently sits at the low end of this group alongside North
              York. A few months earlier it was the priciest of the five.
              Scarborough - long assumed to be the budget pick, then
              corrected to &quot;mid-pack&quot; earlier this year - is
              actually the cheapest of the five once you use current MLS
              listing data instead of a stale citywide estimate.
              The honest answer: compare current listings in the specific
              neighbourhood you want, not last year&apos;s reputation for
              that area.
            </p>
          </div>
        </div>
      </section>

      <section id="compare" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Compare
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What five GTA areas actually cost right now
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            One-bedroom ranges, with the report month next to each so you can
            judge how current it is.
          </p>

          <div className="mt-10 hidden overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F7F7F2] text-sm font-semibold uppercase tracking-[0.08em] text-[#2F6F6B]">
                  <th className="px-6 py-4">Area</th>
                  <th className="px-6 py-4">Current range</th>
                  <th className="px-6 py-4">As of</th>
                  <th className="px-6 py-4">Note</th>
                </tr>
              </thead>
              <tbody>
                {coveredAreas.map((area) => (
                  <tr
                    key={area.name}
                    className="border-t border-[#E8E4DD] text-[#17313A]/78"
                  >
                    <td className="px-6 py-4 font-semibold">
                      <Link
                        href={area.href}
                        className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                      >
                        {area.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">{area.range}</td>
                    <td className="px-6 py-4 text-sm text-[#17313A]/60">
                      {area.asOf}
                    </td>
                    <td className="px-6 py-4 text-sm">{area.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {coveredAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-5"
              >
                <p className="text-lg font-bold text-[#2F6F6B]">
                  {area.name}
                </p>
                <p className="mt-2 text-xl font-bold text-[#17313A]">
                  {area.range}
                </p>
                <p className="mt-1 text-sm text-[#17313A]/60">
                  As of {area.asOf}
                </p>
                <p className="mt-2 leading-6 text-[#17313A]/72">{area.note}</p>
                <Link
                  href={area.href}
                  className="mt-3 inline-block text-sm font-semibold text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  {area.linkLabel} &rarr;
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-[#17313A]/68">
            Notice Scarborough now sits at the bottom alongside North York
            and Markham, not in the middle of the pack as earlier 2026
            figures suggested - rankings here have shifted more than once
            this year, which is exactly why every figure above has a date
            next to it.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Why It Moves
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Why &quot;cheapest&quot; keeps changing
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            GTA-wide, supply has grown faster than demand. CMHC reported the
            region&apos;s purpose-built rental vacancy rate rose to 3.0% in
            2025 - the highest since the pandemic - and TRREB recorded a 6%
            year-over-year jump in condo units listed for rent in Q1 2026,
            with average rents down 4.1% for one-bedrooms and 3.2% for
            two-bedrooms over the same period. When supply moves that fast, a
            single area&apos;s ranking can flip in a few report cycles.
            That&apos;s exactly what happened to Markham.
          </p>
          <div className="mt-6 max-w-3xl rounded-[2rem] bg-[#F7F7F2] p-6">
            <p className="leading-7 text-[#17313A]/72">
              <span className="font-bold">Do:</span> re-check current
              listings before assuming an area&apos;s old reputation still
              holds - what was true about Scarborough or Markham a year ago
              may not be true this month.
            </p>
          </div>
        </div>
      </section>

      <section id="outside-areas" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Outside Our Covered Areas
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            If you&apos;re open to looking outside these five areas
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Full transparency: if raw affordability is your main goal,
            Oshawa, Brampton, and Ajax currently rent for meaningfully less
            than any of the five areas above. I want to be upfront that I
            don&apos;t have hands-on, in-market experience helping renters in
            these specific cities the way I do in North York, Markham,
            Scarborough, Vaughan, and Richmond Hill - so treat what follows as
            directional information to help you decide where to widen your
            search, not a recommendation from someone who knows these markets
            closely.
          </p>

          <div className="mt-10 hidden overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F7F7F2] text-sm font-semibold uppercase tracking-[0.08em] text-[#2F6F6B]">
                  <th className="px-6 py-4">Area</th>
                  <th className="px-6 py-4">Current 1BR average</th>
                  <th className="px-6 py-4">As of</th>
                  <th className="px-6 py-4">Note</th>
                </tr>
              </thead>
              <tbody>
                {outsideAreas.map((area) => (
                  <tr
                    key={area.name}
                    className="border-t border-[#E8E4DD] text-[#17313A]/78"
                  >
                    <td className="px-6 py-4 font-semibold">{area.name}</td>
                    <td className="px-6 py-4">{area.range}</td>
                    <td className="px-6 py-4 text-sm text-[#17313A]/60">
                      {area.asOf}
                    </td>
                    <td className="px-6 py-4 text-sm">{area.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {outsideAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-5"
              >
                <p className="text-lg font-bold text-[#2F6F6B]">
                  {area.name}
                </p>
                <p className="mt-2 text-xl font-bold text-[#17313A]">
                  {area.range}
                </p>
                <p className="mt-1 text-sm text-[#17313A]/60">
                  As of {area.asOf}
                </p>
                <p className="mt-2 leading-6 text-[#17313A]/72">{area.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-[#17313A]/68">
            These numbers move fast, and I haven&apos;t walked these
            buildings or neighbourhoods personally. If you&apos;re seriously
            considering one, verify current listings yourself on Rentals.ca
            or liv.rent&apos;s live listings, and budget extra time to
            research the specific area rather than assuming it works like the
            GTA markets covered on this site.
          </p>

          <div className="mt-6 max-w-3xl rounded-[2rem] border border-[#2F6F6B]/25 bg-white p-6">
            <p className="leading-7 text-[#17313A]/85">
              <span className="font-bold">Do:</span> if commute time matters,
              check GO Transit schedules from these areas before rent alone
              decides it - the commute cost and time can offset the rent
              savings.
            </p>
          </div>
        </div>
      </section>

      <section id="budget" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Budget Reality Check
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What can you actually get for $1,000 or $1,500?
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold">Under $1,000</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Not a normal private apartment in any of these areas - the
                cheapest current one-bedroom averages we can verify sit
                around $1,587 (Oshawa). If $1,000 is your ceiling, the
                realistic paths are a shared house or roommate arrangement, a
                room rental, or a basement unit in an older, non-condo
                building - not a self-contained condo.
              </p>
            </article>
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <h3 className="text-xl font-bold">Around $1,500</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Tight, but more realistic - usually a basement apartment in
                an older building, a bachelor or studio outside the newer
                condo stock, or splitting a two-bedroom condo with a roommate
                so your per-person cost lands in that range, even though the
                unit itself rents for $2,000+. A full private one-bedroom
                condo at $1,500 in any of our five covered areas would
                currently be priced below market in most buildings.
              </p>
            </article>
          </div>

          <div className="mt-6 max-w-3xl rounded-[2rem] bg-[#F7F7F2] p-6">
            <p className="leading-7 text-[#17313A]/72">
              <span className="font-bold">Do:</span> if $1,500 is your real
              ceiling, search shared-unit and basement-unit listings
              specifically rather than standard condo listings.
            </p>
          </div>
        </div>
      </section>

      <section id="negotiating" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Renewal Strategy
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Negotiating rent at renewal in today&apos;s market
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            This works differently depending on who owns your unit. If
            you&apos;re renting an individually-owned condo or a house, the
            landlord is usually one person carrying a mortgage on that
            specific unit - and with rents down across most of these markets,
            there&apos;s more room than in 2022-2023 to ask for a smaller
            increase, or to hold flat, especially if you can point to
            comparable current listings in your own building. Ontario&apos;s
            2026 rent increase guideline caps increases at 2.1% for
            rent-controlled units, which gives you a concrete number to
            negotiate from - see our{" "}
            <Link
              href="/ontario-tenant-rights-gta"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              Ontario tenant rights guide
            </Link>{" "}
            for how that guideline actually applies.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-[#17313A]/72">
            If you&apos;re in a large purpose-built rental building with an
            in-house leasing office, this is a different conversation -
            pricing and incentives are usually set centrally across the whole
            building, not negotiated unit by unit, and an individual leasing
            agent typically has little room to deviate. Your leverage there
            is comparing against other buildings, not negotiating harder with
            this one.
          </p>

          <div className="mt-6 max-w-3xl rounded-[2rem] border border-[#2F6F6B]/25 bg-white p-6">
            <p className="leading-7 text-[#17313A]/85">
              <span className="font-bold">Do:</span> before your renewal
              conversation, pull two or three current comparable listings in
              your own building or complex - that&apos;s the strongest
              evidence you can bring, and it&apos;s evidence a landlord
              can&apos;t easily dispute.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
              Next Step
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Comparables change monthly - know which one&apos;s actually
              current
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Before you commit anywhere in North York, Markham, Scarborough,
              Vaughan, or Richmond Hill - or weighing Scarborough against
              Oshawa - use the Key to GTA Rental Readiness tool to check your
              target rent against what&apos;s actually available right now,
              not a listing that&apos;s been sitting cached for months.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#17313A] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DCE8E3]">
              Free readiness check
            </p>
            <p className="mt-3 leading-7 text-white/75">
              It takes a few minutes and gives you a clearer view of where
              your budget actually lands, and what to prepare next.
            </p>
            <Link
              href="/#rental-match"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#2F6F6B] px-6 py-4 text-center font-bold text-white transition hover:bg-[#DCE8E3] hover:text-[#17313A]"
            >
              Start Rental Readiness
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            FAQ
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Cheapest areas to rent in the GTA - FAQ
          </h2>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#17313A]/72">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection variant="light" />
    </main>
  );
}
