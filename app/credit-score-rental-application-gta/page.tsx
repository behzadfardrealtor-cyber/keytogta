import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/credit-score-rental-application-gta";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "What Credit Score Do You Need to Rent in the GTA? (2026) | KeyToGTA.ca";
const description =
  "No legal minimum in Ontario, but real GTA landlords look for 680+ (property managers) or 600+ (private landlords), plus 6 ways to fix a thin file.";

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
        alt: "GTA rental application and credit score review",
      },
    ],
  },
};

const heroScoreRows = [
  { label: "Property management", status: "680-700+" },
  { label: "Private landlord", status: "600-660" },
  { label: "No credit history", status: "Still workable" },
];

const heroBadges = [
  "Income + credit together",
  "Guarantor route",
  "No-credit strategy",
  "Human Rights Code",
];

const benchmarkCards = [
  {
    label: "Property management / REIT landlords",
    range: "680-700+",
    detail:
      "Larger portfolio landlords (CAPREIT, Minto, and similar Boardwalk-style operators) commonly run automated screening with a fixed cutoff. There's usually little room to negotiate below their line, so the score itself carries more weight here.",
  },
  {
    label: "Private landlords / small buildings",
    range: "600-660",
    detail:
      "Smaller landlords more often review the file manually. A score in this range is frequently workable when it's paired with strong income proof, solid references, or a guarantor - the human reviewing the file has more discretion than a screening algorithm does.",
  },
];

const noCreditSteps = [
  "Three to six months of bank statements showing you can consistently cover rent - often the single most persuasive substitute for a thin credit file.",
  "An employer letter confirming your role, start date, and income, ideally on company letterhead.",
  "References from a previous landlord, including international landlords if you're new to Canada - a clear payment history matters more than where it happened.",
  "A guarantor with strong income and credit, used when the rest of the file still falls short on its own.",
  "Having the first month's rent plus a lawful last-month rent deposit ready and clearly documented. A landlord cannot legally demand extra months as a deposit, but showing the funds are available can still strengthen the file.",
  "Starting a rent-reporting tradeline months before you apply. A service that reports your on-time rent payments to Equifax can turn a thin file into a scoreable one by the time you're ready to apply.",
];

const faqs = [
  {
    question: "Is there a legal minimum credit score to rent in Ontario?",
    answer:
      "No. Ontario has no legally mandated minimum credit score for tenants. Each landlord or property manager sets their own threshold, which is why requirements vary so much between a large management company and a private landlord.",
  },
  {
    question: "Can a landlord reject me just for having no credit history?",
    answer:
      "Not solely for that reason. Under Ontario's Human Rights Code, a lack of credit history alone cannot be the sole basis for rejecting an application. Landlords are expected to weigh the complete picture - income, references, rental history - not just a missing score. If you believe you were rejected purely for a thin credit file, you can file a complaint with the Human Rights Tribunal of Ontario.",
  },
  {
    question: "What credit score do I actually need in the GTA?",
    answer:
      "It depends on who you're renting from. Property-management-run buildings and larger portfolio landlords commonly expect 680-700+, often through automated screening. Private landlords and smaller buildings are typically more flexible, with 600-660 often workable alongside strong income proof or a guarantor.",
  },
  {
    question: "Does a landlord credit check hurt my score?",
    answer:
      "It depends on how the check is run. A self-provided report or soft tenant-screening check may not affect your score, while a hard inquiry can have a small, short-lived impact. Before consenting, ask the landlord or screening platform whether the pull is soft or hard.",
  },
  {
    question: "What if my income is fine but my credit is weak (or vice versa)?",
    answer:
      "This is the most common rejection pattern in a competitive GTA market: fixing only one side rarely saves an application. Most landlords use income at or above roughly three times the rent as a parallel threshold to credit score - if either number is weak on its own, it usually needs to be offset by strength elsewhere, such as a guarantor, larger proof of funds, or strong references.",
  },
  {
    question: "What's the fastest way to build credit before applying?",
    answer:
      "Rent-reporting services that report your on-time rent payments to Equifax can start converting a thin file into a scoreable one within a few months. Paired with a secured credit card or a small credit product used lightly and paid on time, this is generally faster than waiting out a thin file passively.",
  },
  {
    question: "Do private landlords check credit differently than property management companies?",
    answer:
      "Yes. Larger property managers tend to run automated screening software with a fixed cutoff and little flexibility. Private landlords and small buildings more often review the file manually and weigh income, references, and communication alongside the score, which usually means more room to make your case.",
  },
  {
    question: "What is a guarantor and when do I need one?",
    answer:
      "A guarantor is someone who agrees to cover rent if you can't, usually required to show their own income and credit. You'll typically need one when your credit is thin or weak, your income doesn't comfortably clear the landlord's threshold, or you have no Canadian rental history yet.",
  },
  {
    question: "Is the GTA rental market still competitive for renters with average credit in 2026?",
    answer:
      "Less than in 2022-2023. CMHC reported GTA rental vacancy rose to 3.0% in 2025, the highest since the pandemic, giving renters with average credit more room to negotiate than in recent years - though the strongest, best-documented files still move fastest on well-priced units.",
  },
  {
    question: "How do I prove I can afford rent if I don't have Canadian credit history yet?",
    answer:
      "Lead with three to six months of bank statements showing you can cover rent, an employer letter confirming income, and references from a previous landlord if you have one. A guarantor with strong credit and income can round out the file if those alone aren't enough.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Credit Score for Rental Applications in the GTA (2026)",
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
        name: "credit score rental application GTA",
      },
      {
        "@type": "Thing",
        name: "Ontario rental credit check",
      },
      {
        "@type": "Thing",
        name: "no credit history rental Ontario",
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
        name: "Credit Score for Rental Applications in the GTA",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Credit Score for Rental Applications in the GTA (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario rental applications",
    keywords: [
      "credit score rental application GTA",
      "Ontario rental credit check",
      "no credit history rental Ontario",
      "GTA landlord credit requirements",
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

export default function CreditScoreRentalApplicationPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <PageViewTracker eventName="credit_score_view" />
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
            <a href="#benchmarks" className="hover:text-[#17313A]">
              Benchmarks
            </a>
            <a href="#legal" className="hover:text-[#17313A]">
              Legal Rights
            </a>
            <a href="#no-credit" className="hover:text-[#17313A]">
              No Credit
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
              Credit score for rental applications in the GTA: what actually gets you approved (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              A weak credit score alone rarely sinks a GTA rental application
              - it&apos;s a weak score combined with a thin income-to-rent ratio
              that does. This guide breaks down the credit score benchmarks
              GTA landlords actually use in 2026, your legal protections
              under Ontario&apos;s Human Rights Code, and practical ways to
              strengthen a thin or no-credit-history file before you apply.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#benchmarks"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                View Benchmarks
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              General information only, not legal advice. Credit requirements
              vary by landlord, property manager, listing brokerage, and
              building.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white p-3 shadow-[0_18px_50px_rgba(23,49,58,.08)] lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA condo building for rental credit score review"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6F6B]">
                Credit score snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                No legal minimum, real benchmarks.
              </p>

              <div className="mt-4 grid gap-2">
                {heroScoreRows.map((item) => (
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
              What credit score do you need to rent in the GTA?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/85">
              There is no legal minimum credit score required to rent in
              Ontario - landlords set their own bar, and it varies sharply by
              landlord type. Property-management-run buildings and larger
              portfolio landlords (the CAPREIT, Minto, and Boardwalk-style
              operators) commonly run automated screening and expect scores
              in the 680-700+ range, often with little room to negotiate
              below that line. Private landlords and small buildings tend to
              be more flexible - a score in the 600-660 range is often
              workable if it&apos;s paired with strong income proof, solid
              references, or a guarantor. Neither number is a legal
              requirement; it reflects what each type of landlord has
              learned to screen for. Source: TenantPay&apos;s 2026 rental credit
              guide; TheRentalMarket.ca (March 2026). What actually sinks
              most applications isn&apos;t a weak credit score on its own - it&apos;s
              a weak score paired with a thin income-to-rent ratio, which is
              the real story below.
            </p>
          </div>
        </div>
      </section>

      <section id="rejection-driver" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
              The #1 Rejection Driver
            </p>
            <h2 className="max-w-4xl text-3xl font-bold md:text-4xl">
              It&apos;s rarely credit score alone - it&apos;s credit and income together
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              In a competitive GTA market, the most common real-world
              rejection reason isn&apos;t a low credit score by itself. It&apos;s a
              low income-to-rent ratio showing up at the same time as thin
              or weak credit. Most landlords use gross monthly income at or
              above roughly three times the rent as a parallel threshold to
              credit score, running both checks side by side rather than one
              instead of the other.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-[#17313A]/72">
              That means fixing only one side of the equation rarely saves an
              application. A 720 credit score won&apos;t offset an income that
              barely covers rent, and a strong income won&apos;t fully offset a
              thin or damaged credit file on its own. Both need to look
              solid together - which is why a guarantor, extra proof of
              funds, or strong references often matter more than chasing a
              slightly higher score in isolation.
            </p>
          </div>
        </div>
      </section>

      <section id="benchmarks" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            2026 Benchmarks
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Credit score benchmarks by landlord type
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            These aren&apos;t legal thresholds - they&apos;re the practical ranges
            landlords in the GTA commonly screen for, based on how they
            review applications.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benchmarkCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[2rem] bg-[#F7F7F2] p-6"
              >
                <h3 className="text-xl font-bold">{card.label}</h3>
                <p className="mt-2 text-4xl font-bold text-[#2F6F6B]">
                  {card.range}
                </p>
                <p className="mt-3 leading-7 text-[#17313A]/72">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="legal" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Legal Protection
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Ontario&apos;s Human Rights Code protects thin credit files
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            A lack of credit history alone cannot be the sole reason a
            landlord rejects your application under Ontario&apos;s Human Rights
            Code. Landlords must weigh the complete application - income,
            references, and rental history - rather than treating a missing
            or thin credit file as an automatic disqualifier. If you believe
            you were rejected solely for having no credit file, you can file
            a complaint with the Human Rights Tribunal of Ontario.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-[#17313A]/72">
            In practice, this protection doesn&apos;t guarantee approval - it
            means you have a legal basis to ask a landlord to consider your
            full file when credit history alone is the stated objection, and
            it&apos;s why a well-documented application matters as much as the
            number itself.
          </p>
        </div>
      </section>

      <section id="market" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2F6F6B]">
              2026 Market Context
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Why credit requirements have tightened since the pandemic
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#17313A]/72">
              CMHC reported the GTA&apos;s purpose-built rental vacancy rate rose
              to 3.0% in 2025, the highest since the pandemic. That extra
              supply gives renters more negotiating room overall, but it has
              also pushed landlords toward more consistent screening - fixed
              credit cutoffs and income ratios instead of the case-by-case
              flexibility common during the tighter pandemic-era market. See
              our{" "}
              <Link
                href="/rental-documents/checklist-ontario"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                GTA rental documents checklist
              </Link>{" "}
              for the full 2026 market picture.
            </p>
          </div>
        </div>
      </section>

      <section id="no-credit" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            No Credit History
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Renting with a thin or no Canadian credit file
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Newcomers and renters early in their credit journey can still
            put together a strong application. These are the most effective
            alternatives, roughly in order of impact.
          </p>

          <div className="mt-10 grid gap-4">
            {noCreditSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[2rem] bg-[#F7F7F2] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17313A] font-bold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#17313A]/72">{step}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl leading-7 text-[#17313A]/72">
            If North York is on your shortlist, see our{" "}
            <Link
              href="/rent/north-york"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              North York rental guide
            </Link>{" "}
            for local rent benchmarks and neighbourhood breakdowns.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-[#17313A]/72">
            If you&apos;re a student, work permit holder, or newcomer working out
            what applies to your specific situation - and how to avoid
            rental scams along the way - see our{" "}
            <Link
              href="/newcomer-rental-help-gta"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              newcomer rental help guide
            </Link>
            .
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-[#17313A]/72">
            If a guarantor is part of the plan, see our{" "}
            <Link
              href="/guarantor-vs-cosigner-ontario-rentals"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              guarantor vs. co-signer guide
            </Link>{" "}
            for the legal difference between the two and what each one is
            actually liable for.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-[#17313A]/72">
            And remember: no Canadian credit history isn&apos;t the same as
            bad credit. See our{" "}
            <Link
              href="/rent-toronto-without-canadian-credit"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              guide to renting without Canadian credit history
            </Link>{" "}
            for what&apos;s legally protected, and the prepaid-rent rules
            worth knowing before you offer anything upfront.
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
              Want to know if your credit and income look strong together?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Use the Key to GTA Rental Readiness tool to review your credit,
              income-to-rent ratio, documents, and application strength
              before you submit an application.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#17313A] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DCE8E3]">
              Free readiness check
            </p>
            <p className="mt-3 leading-7 text-white/75">
              It takes a few minutes and gives you a clearer view of where
              your application is strong, what may need work, and what to
              prepare next.
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
            Credit score and rental applications FAQ
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
