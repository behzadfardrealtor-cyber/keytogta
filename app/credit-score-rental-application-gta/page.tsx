import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/credit-score-rental-application-gta";
const pageUrl = `${siteUrl}${pagePath}`;
const headline = "What credit score do you need to rent in Ontario?";
const title = "What Credit Score Do You Need to Rent in Ontario? | Key to GTA";
const description =
  "Ontario has no legal minimum rental credit score. Learn how credit checks fit into a GTA rental application and how to prepare if your Canadian credit history is limited.";

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
  { label: "Legal minimum score", status: "None" },
  { label: "Credit checks", status: "May be requested" },
  { label: "No Canadian history", status: "Not bad credit" },
];

const heroBadges = [
  "Credit report",
  "Rental history",
  "References",
  "Ontario rules",
];

const reviewCards = [
  {
    label: "If you have Canadian credit history",
    range: "Review your report",
    detail:
      "Check your report for errors before applying. A landlord may request permission for a credit check, but there is no Ontario-wide minimum rental score.",
  },
  {
    label: "If you have little or no Canadian credit history",
    range: "Add context",
    detail:
      "Explain the gap and offer available rental references or other relevant information. A missing Canadian credit file is not the same as a poor credit record.",
  },
];

const noCreditSteps = [
  "Check any Canadian credit report you have for errors before sharing it or consenting to a check.",
  "Gather rental references and payment history you can document, including references from outside Canada if available.",
  "Prepare relevant income information and other supporting documents you are comfortable sharing when requested.",
  "If a guarantor is relevant to your situation, ask what the arrangement would require before agreeing to it.",
  "Explain a limited Canadian credit history clearly; it is not the same as a negative credit record.",
];

const faqs = [
  {
    question: "Is there a legal minimum credit score to rent in Ontario?",
    answer:
      "No. Ontario law does not set a universal minimum rental credit score. A landlord may request a credit check with your permission, and practices vary, but a number alone is not a legal requirement.",
  },
  {
    question: "Can a landlord reject me just for having no credit history?",
    answer:
      "Ontario Human Rights Commission guidance says a missing credit history should not be treated as a bad credit rating or used to dismiss an application automatically. Other available information, such as rental history and references, should be considered.",
  },
  {
    question: "What credit score do I actually need in the GTA?",
    answer:
      "There is no reliable GTA-wide cutoff. Ask what information the landlord requests, check your credit report for errors, and prepare available rental history and references. A credit score can be one part of a broader review.",
  },
  {
    question: "Does a landlord credit check hurt my score?",
    answer:
      "It depends on the type of inquiry. Checking your own report does not affect your score; some third-party checks may. Before consenting, ask the landlord or screening provider what type of check they will run.",
  },
  {
    question: "What if my income is fine but my credit is weak (or vice versa)?",
    answer:
      "Prepare accurate supporting information and ask what the landlord needs to review your application. Ontario rules generally require income information to be requested and considered alongside available credit or rental-history information; a fixed rent-to-income cutoff is not an appropriate screening rule for ordinary rentals.",
  },
  {
    question: "What's the fastest way to build credit before applying?",
    answer:
      "There is no guaranteed quick fix. Check your report for errors and review Government of Canada guidance on credit. If your Canadian history is limited, prepare other relevant information rather than waiting for a particular score.",
  },
  {
    question: "Do private landlords check credit differently than property management companies?",
    answer:
      "Practices vary by landlord and application. Ask whether a credit check is required and what other information can be considered. Do not assume a company or a private owner uses a particular score cutoff.",
  },
  {
    question: "What is a guarantor and when do I need one?",
    answer:
      "A guarantor agrees to be responsible if the tenant cannot meet the rent obligation. It may be discussed when an applicant has limited credit or rental history, but it is not automatically required. Ask about the terms before anyone agrees to guarantee a lease.",
  },
  {
    question: "What does the 2025 GTA rental vacancy rate tell me about credit checks?",
    answer:
      "CMHC reported that the GTA purpose-built apartment vacancy rate reached 3.0% in 2025. That market-wide figure does not establish any credit-score rule or predict whether a particular condo or house application will be accepted.",
  },
  {
    question: "How do I prove I can afford rent if I don't have Canadian credit history yet?",
    answer:
      "Offer available income information and rental references, including references from outside Canada if relevant. Ask what the landlord needs and share only appropriate supporting documents. A missing Canadian credit file should not be treated as bad credit.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
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
        name: "Credit Score for Renting in Ontario",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline,
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-07-08",
    dateModified: "2026-10-03",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario rental applications",
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
            <a href="#credit-review" className="hover:text-[#17313A]">
              What Matters
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
              {headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              Ontario has no legal minimum rental credit score. Learn how a
              credit check may fit into a GTA application, what Ontario&apos;s
              rental-housing rules say about income information, and how to
              prepare when you have limited Canadian credit history.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#credit-review"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                What Matters
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              General information only, not legal advice. Application
              requirements vary by landlord and property.
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
                Application snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                No legal minimum credit score.
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
              Ontario law does not set a universal minimum score for renting.
              A landlord may ask for permission to check credit, and credit
              can be one part of an application review. Practices differ,
              so ask what information is needed for the specific rental.
              The{" "}
              <a href="https://www.ohrc.on.ca/en/policy-human-rights-and-rental-housing/v-identifying-discrimination-rental-housing" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
                Ontario Human Rights Commission&apos;s rental-housing policy
              </a>{" "}
              explains how credit, rental history, and income information
              should be considered.
            </p>
          </div>
        </div>
      </section>

      <section id="rejection-driver" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
              Application Review
            </p>
            <h2 className="max-w-4xl text-3xl font-bold md:text-4xl">
              How credit and income information may be considered
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Under{" "}
              <a href="https://www.ontario.ca/laws/regulation/980290" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
                Ontario Regulation 290/98
              </a>
              , a landlord generally may request income information only
              when also requesting permitted credit or rental-history
              information. When that other information is obtained, income
              must be considered together with it. The regulation has a
              specific exception for some rent-geared-to-income housing.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-[#17313A]/72">
              The OHRC says ordinary non-subsidized rentals should not use
              a fixed rent-to-income cutoff, such as 30%, to screen out
              applicants. You can compare rent with your income for your
              own budget, but that calculation is not a lawful landlord
              approval threshold.
            </p>
          </div>
        </div>
      </section>

      <section id="credit-review" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Credit Review
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What to check before you apply
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            There is no verified credit-score cutoff that applies across GTA
            rentals. These steps can help you prepare without assuming a
            particular landlord&apos;s screening practice.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviewCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[2rem] bg-[#F7F7F2] p-6"
              >
                <h3 className="text-xl font-bold">{card.label}</h3>
                <p className="mt-2 text-2xl font-bold text-[#2F6F6B]">
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
            Limited credit history is not bad credit
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            The{" "}
            <a href="https://www.ohrc.on.ca/en/writing-fair-rental-housing-ad-fact-sheet" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
              OHRC&apos;s fair rental housing guidance
            </a>{" "}
            says a missing rental or credit history should not be treated
            as a bad history. This matters for newcomers and others who
            have not yet built a Canadian credit file. Available references
            and other relevant information should be considered.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-[#17313A]/72">
            Credit checks may still be requested with your permission.
            If you are concerned about how your application was assessed,
            consult an appropriate housing or human-rights resource for
            advice about your circumstances.
          </p>
        </div>
      </section>

      <section id="market" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2F6F6B]">
              2025 Market Context
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              What the vacancy figure can and cannot tell you
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#17313A]/72">
              The{" "}
              <a href="https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/rental-market-reports-major-centres" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
                CMHC 2025 Rental Market Report
              </a>{" "}
              found that the GTA purpose-built apartment vacancy rate reached
              3.0%. That figure describes a market segment, not a credit or
              income screening rule for a particular condo or house. For
              application documents, see our{" "}
              <Link
                href="/rental-documents/checklist-ontario"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                GTA rental documents checklist
              </Link>.
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
            Newcomers and renters early in their credit journey can prepare
            relevant information even without an established Canadian score.
            What is useful varies by landlord and by your circumstances.
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

          <p className="mt-6 max-w-3xl leading-7 text-[#17313A]/72">
            The Government of Canada explains how to{" "}
            <a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-report-score-basics.html" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
              read and check a credit report
            </a>{" "}
            and how credit information can affect renting. Their{" "}
            <a href="https://www.canada.ca/en/financial-consumer-agency/services/renting-first-apartment.html" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
              guide to renting an apartment or house
            </a>{" "}
            also covers credit reports and common rental costs.
          </p>

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
              Need help preparing a GTA rental shortlist?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Use the Key to GTA Rental Readiness tool to review your rent
              target, available documents, and next steps before you apply.
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
