import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/ontario-tenant-rights-gta";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Ontario Tenant Rights Guide for GTA Renters (2026) | KeyToGTA.ca";
const description =
  "Know your rights as an Ontario tenant: the 2026 rent increase guideline, which units are rent-controlled, illegal deposits, landlord entry rules, and when to contact the LTB.";

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
        alt: "Ontario tenant rights guide for GTA renters",
      },
    ],
  },
};

const heroFactRows = [
  { label: "2026 rent increase guideline", status: "2.1%" },
  { label: "Security deposits", status: "Illegal" },
  { label: "Landlord entry notice", status: "24 hrs" },
];

const heroBadges = [
  "Rent-controlled vs exempt",
  "Last month's rent only",
  "8am-8pm entry window",
  "90-day increase notice",
];

const rentControlCards = [
  {
    label: "First occupied on or before Nov 15, 2018",
    status: "Rent-controlled",
    detail:
      "Your unit falls under Ontario's standard rent control rules. Any rent increase is capped at the annual guideline - 2.1% for 2026 - unless the landlord gets LTB approval for an above-guideline increase.",
  },
  {
    label: "First occupied after Nov 15, 2018",
    status: "Exempt from the cap",
    detail:
      "Your unit is exempt from the guideline cap. The landlord can raise rent by any amount, but still needs to follow the same 90-day written notice rule and can only increase rent once every 12 months.",
  },
];

const depositFacts = [
  {
    title: "What's legal",
    detail:
      "The only deposit a landlord can collect is last month's rent, equal to one month's rent, applied strictly to the final month of the tenancy. A refundable key deposit is also allowed, capped at the actual cost of replacing the key or fob.",
  },
  {
    title: "What's illegal",
    detail:
      "Security deposits, damage deposits, and pet deposits are all illegal in Ontario. A landlord cannot use the last month's rent deposit for cleaning, repairs, or damage - only for the last month's rent itself.",
  },
  {
    title: "Interest you're owed",
    detail:
      "Landlords must pay interest on the last month's rent deposit every 12 months, on the tenancy's anniversary. The rate equals the rent increase guideline for that specific year - recalculated annually, not fixed at move-in. For a tenancy anniversary falling in 2026, that rate is 2.1%.",
  },
];

const unpaidInterestSteps = [
  "Deduct the unpaid interest directly from an upcoming rent payment - this is a legal deduction under the Residential Tenancies Act, 2006, not a missed payment. Include a note with the payment explaining the deduction and the amount.",
  "File a Form T1 - Tenant Application for a Rebate of Money the Landlord Owes with the LTB, citing money the landlord owes under the Residential Tenancies Act.",
  "Contact the Rental Housing Enforcement Unit (RHEU) at 1-888-772-9277 - filing a complaint is free, and the RHEU investigates breaches of the Residential Tenancies Act, including unpaid deposit interest.",
];

const entryRules = [
  {
    title: "24 hours' written notice",
    detail:
      "Your landlord must give written notice at least 24 hours before entering, stating the date, time, and reason for entry.",
  },
  {
    title: "8am - 8pm window",
    detail:
      "Entry can only happen between 8am and 8pm, at the time stated in the notice.",
  },
  {
    title: "Emergency exception",
    detail:
      "No notice is required if there's an emergency - genuine danger to people or property, such as a fire or a burst pipe.",
  },
];

const ltbReasons = [
  "Your landlord gave an illegal rent increase - short notice, the wrong form, or more than once in 12 months.",
  "Your landlord hasn't paid interest owed on your last month's rent deposit.",
  "Your landlord is asking for an illegal security, damage, or pet deposit.",
  "Your landlord entered your unit without proper notice or outside the 8am-8pm window.",
  "Your landlord isn't keeping the unit in a reasonable state of repair.",
];

const faqs = [
  {
    question: "What is the rent increase guideline in Ontario in 2026?",
    answer:
      "2.1% - the maximum a landlord can raise rent on a rent-controlled unit in 2026 without LTB approval for an above-guideline increase. It applies only to units first occupied on or before November 15, 2018; newer units are exempt from the cap, though the landlord still needs 90 days' written notice.",
  },
  {
    question: "Is my apartment rent controlled?",
    answer:
      "It depends when the unit was first occupied for residential use. If it was on or before November 15, 2018, it's rent-controlled and increases are capped at the annual guideline. If it was after that date, it's exempt from the cap - your landlord can raise rent by any amount, but still needs 90 days' written notice and can only do it once every 12 months.",
  },
  {
    question: "Can my landlord ask for a security deposit in Ontario?",
    answer:
      "No. Security, damage, and pet deposits are all illegal in Ontario. The only deposit a landlord can legally collect is last month's rent, plus a refundable key deposit capped at the actual cost of replacing the key or fob.",
  },
  {
    question: "How much notice does my landlord need to enter my unit?",
    answer:
      "At least 24 hours' written notice stating the date, time, and reason for entry, and the visit has to fall between 8am and 8pm. The only exception is a genuine emergency, like a fire or burst pipe, where no notice is required.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Ontario Tenant Rights Guide for GTA Renters (2026)",
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
        name: "Ontario tenant rights",
      },
      {
        "@type": "Thing",
        name: "rent increase guideline Ontario",
      },
      {
        "@type": "Thing",
        name: "Landlord and Tenant Board",
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
        name: "Ontario Tenant Rights Guide for GTA Renters",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Ontario Tenant Rights Guide for GTA Renters (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario tenant rights",
    keywords: [
      "Ontario tenant rights",
      "rent increase guideline Ontario 2026",
      "Landlord and Tenant Board",
      "rent-controlled unit Ontario",
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

export default function OntarioTenantRightsPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <PageViewTracker eventName="tenant_rights_view" />
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
            <a href="#rent-increase" className="hover:text-white">
              Rent Increases
            </a>
            <a href="#rent-control" className="hover:text-white">
              Rent Control
            </a>
            <a href="#deposits" className="hover:text-white">
              Deposits
            </a>
            <a href="#entry-rules" className="hover:text-white">
              Entry Rules
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
              Ontario tenant rights every GTA renter should know (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Rent increases, deposits, and landlord entry are the three
              areas GTA renters ask about most - and the three areas where
              most confusion happens. This guide covers the 2026 Ontario
              tenant rights renters actually need: the current rent increase
              guideline, which units are rent-controlled, what deposits are
              legal, entry notice rules, and when it's time to bring in the
              Landlord and Tenant Board.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#F5C979] px-8 py-4 text-center font-extrabold text-[#070A12] shadow-[0_0_45px_rgba(245,201,121,.30)] transition hover:scale-[1.03]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#rent-increase"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
              >
                View Rent Rules
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/52">
              General information only, not legal advice. Rules can change
              and individual situations vary - if you're in an active
              dispute with your landlord, contact the Landlord and Tenant
              Board (LTB) directly.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.04))] p-3 shadow-2xl lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA apartment building covered by Ontario tenant rights rules"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">
                2026 tenant rights snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Know the rules before there's a problem.
              </p>

              <div className="mt-4 grid gap-2">
                {heroFactRows.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-2.5"
                  >
                    <span className="text-sm font-semibold text-white/78">
                      {item.label}
                    </span>
                    <span className="rounded-full bg-[#F5C979]/16 px-3 py-1 text-xs font-bold text-[#F5C979]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

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
              What are your tenant rights in Ontario right now?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/85">
              For 2026, the Ontario rent increase guideline is 2.1% - the
              maximum a rent-controlled landlord can raise rent without LTB
              approval. Whether that cap applies to you depends on when your
              unit was first occupied: on or before November 15, 2018, and
              you're rent-controlled; after that date, and your unit is
              exempt from the cap, though the landlord still needs to follow
              the same notice rules. Deposits are simple: only last month's
              rent and a refundable key deposit are legal - security, damage,
              and pet deposits are not. Entry requires 24 hours' written
              notice and has to happen between 8am and 8pm, except in a
              genuine emergency. Any rent increase needs at least 90 days'
              written notice on the correct LTB form. If a landlord breaks
              any of these rules, the Landlord and Tenant Board is where you
              go to fix it.
            </p>
          </div>
        </div>
      </section>

      <section id="rent-increase" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Rent Increases
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            The 2026 Ontario rent increase guideline
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            2.1% is the maximum a landlord can raise rent on a rent-controlled
            unit in 2026 without applying to the LTB for an above-guideline
            increase. It's a ceiling, not an entitlement - a landlord can
            increase rent by less than the guideline, or not raise it at all.
            The guideline is set annually by the Ontario government and
            changes most years, so it's worth checking the current figure
            before assuming last year's number still applies.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The guideline amount doesn't change how notice works - your
            landlord still needs to give at least 90 days' written notice on
            the correct LTB form before any increase takes effect, covered in
            full below.
          </p>
        </div>
      </section>

      <section id="rent-control" className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            Rent Control
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Is your apartment a rent-controlled unit?
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
            Most renters don't know this distinction exists - it comes down
            to a single date. When your unit was first occupied for
            residential purposes determines whether the 2.1% guideline caps
            your rent increases at all.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {rentControlCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[2rem] bg-black/5 p-6"
              >
                <h3 className="text-xl font-bold">{card.label}</h3>
                <p className="mt-2 text-2xl font-bold text-[#6E6254]">
                  {card.status}
                </p>
                <p className="mt-3 leading-7 text-[#3D352D]">{card.detail}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#6E6254]">
            "Exempt" doesn't mean notice-free - an exempt landlord still needs
            90 days' written notice and can only raise rent once every 12
            months, using Form N2 instead of the standard Form N1. If you're
            not sure which applies to you, check your lease start date or the
            building's completion date, or ask your landlord directly which
            form they'd use.
          </p>
        </div>
      </section>

      <section id="deposits" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Deposits
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What's actually legal to charge in Ontario
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {depositFacts.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#F5C979]/30 bg-[#F5C979]/10 p-8">
            <h3 className="text-xl font-bold text-[#F5C979]">
              If your landlord doesn't pay the interest owed
            </h3>
            <div className="mt-5 grid gap-4">
              {unpaidInterestSteps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5C979] font-bold text-[#070A12]">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-white/85">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="entry-rules" className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            Entry Rules
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Landlord entry rules in Ontario
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {entryRules.map((item) => (
              <article key={item.title} className="rounded-[2rem] bg-black/5 p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#3D352D]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="notice-requirements" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Rent Increase Notice
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Notice requirements for any rent increase
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            Regardless of whether your unit is rent-controlled or exempt,
            every rent increase needs at least 90 clear days' written notice,
            and can only happen once every 12 months. Rent-controlled units
            use Form N1 - Notice of Rent Increase; exempt units use Form N2.
            Both forms exist for a reason: they give you time to plan and a
            paper trail if something's wrong.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            A rent increase that comes with less than 90 days' notice, skips
            the correct form, or happens more than once in 12 months is an
            illegal rent increase - you're not required to pay it, and you
            can dispute it with the LTB.
          </p>
        </div>
      </section>

      <section id="ltb" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C979]">
              Dispute Resolution
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              What is the Landlord and Tenant Board (LTB)?
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-white/65">
              The LTB is Ontario's tribunal for resolving landlord and tenant
              disputes under the Residential Tenancies Act, 2006. Either a
              landlord or a tenant can file an application; most cases go
              through mediation first, and move to an adjudication hearing if
              mediation doesn't resolve things.
            </p>
            <p className="mt-4 max-w-3xl text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              A tenant might file with the LTB if:
            </p>
            <ul className="mt-3 max-w-3xl space-y-2">
              {ltbReasons.map((reason) => (
                <li
                  key={reason}
                  className="flex gap-3 leading-7 text-white/70"
                >
                  <span className="text-[#F5C979]">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/50">
              Some LTB processes and eviction notice rules are changing under
              Bill 60, in stages - see our{" "}
              <Link
                href="/bill-60-ontario-tenant-changes-2026"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                Bill 60 tenant changes guide
              </Link>{" "}
              for exactly what's in force now versus what's still coming. If
              you've received an N12 for landlord's own use, see our{" "}
              <Link
                href="/n12-eviction-notice-ontario-guide"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                N12 eviction notice guide
              </Link>{" "}
              for the compensation rules, qualifying family members, and what
              to do if you suspect bad faith.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
              Next Step
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Applying for your next rental?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
              Once you know your rights as a tenant, see our{" "}
              <Link
                href="/rental-documents/checklist-ontario"
                className="text-[#6E6254] underline underline-offset-2 hover:text-[#070A12]"
              >
                Ontario rental application checklist
              </Link>{" "}
              for the documents landlords typically expect - or if you're
              applying with a guarantor or co-signer, see our{" "}
              <Link
                href="/guarantor-vs-cosigner-ontario-rentals"
                className="text-[#6E6254] underline underline-offset-2 hover:text-[#070A12]"
              >
                guide to how they differ
              </Link>{" "}
              - or use the Key to GTA Rental Readiness tool to review your
              budget, income, and documents before you apply.
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
            Ontario tenant rights FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/50">
            General information only, not legal advice - for an active
            dispute, contact the LTB or the Rental Housing Enforcement Unit
            directly.
          </p>

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
