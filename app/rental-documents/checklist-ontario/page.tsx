import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EmailGate from "../../components/EmailGate";
import FooterSection from "../../components/FooterSection";
import PageViewTracker from "../../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/rental-documents/checklist-ontario";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Rental Documents Checklist Ontario (2026) | KeyToGTA.ca";
const description =
  "A practical Ontario rental documents checklist for GTA renters and newcomers: ID, employment letter, pay stubs, credit report, proof of funds and tips.";

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
        alt: "GTA condo rental document preparation",
      },
    ],
  },
};

const checklistItems = [
  {
    title: "Government ID",
    detail:
      "Have a clear copy of valid government-issued ID, such as a passport, driver's licence, Ontario photo card, PR card, or other accepted identification.",
    tip: "Make sure your name matches the application, employment letter, and credit report.",
  },
  {
    title: "Employment letter",
    detail:
      "Ask your employer for a recent letter showing your role, start date, employment status, and income or salary. It should include company contact details.",
    tip: "New job offers can still help when paired with proof of funds and a clear move-in plan.",
  },
  {
    title: "Recent pay stubs",
    detail:
      "Prepare your most recent pay stubs, usually two or three, so the landlord can see current income and payment consistency.",
    tip: "If you are self-employed, use invoices, accountant letters, NOAs, or business bank statements instead.",
  },
  {
    title: "Credit report",
    detail:
      "A full Canadian credit report is often stronger than a screenshot because it shows your name, date, score, accounts, and payment history.",
    tip: "Equifax is commonly requested in Ontario rental applications, but ask what format is preferred.",
  },
  {
    title: "Proof of funds",
    detail:
      "Bank statements, savings confirmation, or a bank letter can show that you can cover deposits, first rent payments, and moving costs.",
    tip: "Redact full account numbers and unrelated transactions before sharing.",
  },
  {
    title: "Rental application",
    detail:
      "Most landlords or listing brokerages will ask for a completed rental application with your contact information, income, references, and consent details.",
    tip: "Do not leave blanks that create doubt. If something does not apply, explain it briefly.",
  },
  {
    title: "Reference letter",
    detail:
      "A short professional, employer, or community reference can help explain reliability, communication style, and stability.",
    tip: "Use references who can reply quickly if contacted.",
  },
  {
    title: "Landlord reference",
    detail:
      "If you have rented before, prepare your previous landlord's contact information or a letter confirming rent payment history and tenancy conduct.",
    tip: "Newcomers can provide international landlord references when Canadian rental history is not available.",
  },
  {
    title: "Guarantor documents if needed",
    detail:
      "A guarantor may need to provide ID, proof of income, a credit report, and signed consent. This is common when income, credit, or local history is thin.",
    tip: "Use a guarantor only when they are ready to provide complete documents quickly.",
  },
];

const newcomerTips = [
  "Prepare an employer offer letter, bank letter, or proof of savings if you have just arrived or just started work in Canada.",
  "Include an international credit report, overseas landlord reference, or bank reference if Canadian credit history is limited.",
  "Write a short cover note that explains your move-in date, work situation, who will live in the unit, and why the rent is affordable for you.",
  "If using a guarantor, prepare their full package before viewing units so your application is not delayed.",
  "Protect privacy: avoid volunteering your Social Insurance Number, and ask why any sensitive information is needed before sharing it.",
];

const mistakes = [
  "Waiting until after a viewing to order a credit report or ask for an employment letter.",
  "Submitting screenshots that do not show your name, date, source, or full context.",
  "Applying for units far above the budget supported by your income and proof of funds.",
  "Sending documents with mismatched names, outdated addresses, or missing pages.",
  "Assuming no Canadian credit history does not need explanation.",
  "Providing a guarantor name without the guarantor's income, credit, and consent documents ready.",
  "Transferring money before confirming the listing, written acceptance, lease terms, and payment instructions.",
];

const incomeGuide = [
  { rent: "$1,800", income: "$4,500", annual: "$54,000" },
  { rent: "$2,000", income: "$5,000", annual: "$60,000" },
  { rent: "$2,500", income: "$6,250", annual: "$75,000" },
  { rent: "$3,000", income: "$7,500", annual: "$90,000" },
  { rent: "$3,500", income: "$8,750", annual: "$105,000" },
];

const heroPackageRows = [
  { label: "Government ID", status: "Ready" },
  { label: "Income proof", status: "Ready" },
  { label: "Credit report", status: "Review" },
];

const heroPackageBadges = [
  "Proof of funds",
  "References",
  "Application",
  "Guarantor if needed",
];

const faqs = [
  {
    question: "Do I need every document before booking a viewing?",
    answer:
      "Usually no. But in competitive GTA rental markets, you should have the core package ready before you submit an offer so you can move quickly when the right unit appears.",
  },
  {
    question: "What if I have no Canadian credit history?",
    answer:
      "A lack of Canadian credit history is common for newcomers. Strengthen the file with proof of income, proof of funds, international credit or bank references, landlord references, and a guarantor if appropriate.",
  },
  {
    question: "Can a landlord ask for income and credit information in Ontario?",
    answer:
      "Landlords commonly review income, rental history, credit references, and credit checks. Ontario human rights guidance says lack of rental or credit history should not be viewed negatively by itself.",
  },
  {
    question: "Should I include my Social Insurance Number?",
    answer:
      "Do not include your SIN in a standard rental package by default. If someone asks for it, ask why it is needed, how it will be used, and whether another identifier or your own credit report can work.",
  },
  {
    question: "Is a guarantor always required?",
    answer:
      "No. A guarantor is usually considered when income, credit, rental history, or local documentation is weak. If you need one, the guarantor should be ready with complete documents.",
  },
  {
    question: "What does the Rental Readiness tool check?",
    answer:
      "It helps you review rent target, income, credit, documents, move-in timing, and application strength before you spend time on showings or submit an offer.",
  },
  {
    question: "How much income do I need to rent an apartment in the GTA?",
    answer:
      "Many GTA landlords look for a gross monthly income of roughly 2.5 to 3 times the rent. For a $2,000 unit that is about $5,000 per month, or around $60,000 per year. A lower income near $4,000 can still work with no monthly debt, strong savings, or proof of funds. Requirements vary by landlord.",
  },
  {
    question: "What is a good rent-to-income ratio for renting in the GTA?",
    answer:
      "Most landlords look for rent at or below 30–35% of gross monthly income, but this cannot legally be the only reason for rejection under Ontario's Human Rights Code.",
  },
  {
    question: "What credit score do I need to rent an apartment in Toronto?",
    answer:
      "There's no legal minimum. Property management companies often expect 700+; private landlords are frequently flexible from 600–660 with strong supporting documents.",
  },
  {
    question: "Do I need a guarantor to rent in the GTA?",
    answer:
      "Only if your income, credit, or rental history alone doesn't reassure the landlord. It's common for newcomers, students, and self-employed applicants, not a universal requirement.",
  },
  {
    question: "Is the GTA rental market still competitive in 2026?",
    answer:
      "Less than in 2022–2023. GTA rental vacancy hit 3.0% in 2025 and rents have fallen across most unit types in early 2026, giving renters more leverage — though well-priced units in top locations still move fast.",
  },
  {
    question: "Can a landlord reject me for having no Canadian credit history?",
    answer:
      "Ontario's Human Rights Code says a lack of credit history alone shouldn't count against you — landlords must weigh income, references, and employment together.",
  },
];

const marketQnA = [
  {
    question: "Is the 30% rent-to-income rule actually legal in Ontario?",
    answer:
      "No — not as a sole basis for rejection. Ontario's Human Rights Code (s. 21(3)) allows landlords to consider income information, credit checks, credit references, and rental history, but a Board of Inquiry ruling upheld by the Ontario Superior Court found that using rent-to-income ratios or minimum income criteria as the sole reason to reject an applicant is indirect discrimination. In practice, most landlords still use it as an informal screening tool — expect to see it on applications — but if your ratio falls short, you have a legal basis to ask the landlord to consider your complete file: savings, guarantor, employment stability, and rental references. The Ontario Human Rights Commission has flagged that automatically requiring a co-signer from low-income applicants can itself create a discriminatory barrier, so this cuts both ways.",
  },
  {
    question: "What credit score do you need to rent in the GTA?",
    answer:
      "There's no legal minimum credit score in Ontario. In practice, property management companies in Toronto and the GTA typically look for 700+, while independent landlords are often flexible with 600–660 if the rest of the application is strong. Equifax and TransUnion scores can differ by 40+ points for the same person, so check both before applying. A score below 660 doesn't disqualify you — it just shifts what you need to bring: a larger upfront deposit (Ontario law caps this at first and last month's rent), a guarantor, or a written explanation paired with proof of savings. Under the Human Rights Code, a thin or missing credit file (common for newcomers) cannot legally be held against you on its own.",
  },
  {
    question: "How competitive is the GTA rental market in 2026?",
    answer:
      "Less than the headlines suggest. CMHC reported the GTA's purpose-built rental vacancy rate rose to 3.0% in 2025 — the highest since the pandemic. TRREB recorded 24,012 condo apartment units listed for rent in Q1 2026, up 6% year-over-year, while average one-bedroom rents fell 4.1% to $2,246 and two-bedroom rents fell 3.2% to $2,939 over the same period. Supply has grown faster than demand, driven by record purpose-built rental completions and condo owners renting out units they can't sell profitably. This doesn't mean every unit is easy to get — well-priced units in strong locations still draw multiple applicants — but it does mean 2026 renters generally have more negotiating room and landlords are more open to working with a complete, well-documented application than in 2022–2023.",
  },
  {
    question: "What documents actually get a rental application approved?",
    answer:
      "In order of practical weight: (1) a signed job offer letter or employment letter on company letterhead stating title, start date, and salary; (2) two to three recent pay stubs; (3) a credit report or signed consent for a credit check; (4) a previous landlord reference confirming on-time payment; (5) three to six months of bank statements, especially for newcomers or self-employed applicants without a Canadian credit file. Self-employed applicants should substitute a Notice of Assessment, invoices/contracts, and averaged bank deposits for pay stubs. A landlord cannot legally require your SIN on a rental application — only your full name, address, and date of birth are needed for a credit check.",
  },
  {
    question: "Can you rent in the GTA without Canadian credit history?",
    answer:
      "Yes. Thin or empty credit files are common and expected for newcomers — most experienced GTA landlords know how to evaluate around them. The two documents that carry the most weight are a signed employment offer letter and three to six months of bank statements showing savings equivalent to several months' rent. Add a Canadian guarantor if available, or a reference from an international landlord or employer if not. Being upfront about limited Canadian credit history, rather than leaving gaps in the application, generally works in your favour — landlords read a complete, transparent file faster than a partial one they have to chase down.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Rental Documents Checklist Ontario (2026)",
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
        name: "rental documents checklist Ontario",
      },
      {
        "@type": "Thing",
        name: "GTA rental applications",
      },
      {
        "@type": "Thing",
        name: "newcomer rental documents",
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
        name: "Rental Documents Checklist Ontario",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Rental Documents Checklist Ontario (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-07-05",
    dateModified: "2026-07-05",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario rental documents",
    keywords: [
      "rental documents checklist Ontario",
      "Ontario rental application documents",
      "GTA rental documents",
      "newcomer rental checklist",
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

export default function OntarioRentalDocumentsChecklistPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <PageViewTracker eventName="checklist_view" />
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
            <a href="#income" className="hover:text-white">
              Income
            </a>
            <a href="#checklist" className="hover:text-white">
              Checklist
            </a>
            <a href="#newcomers" className="hover:text-white">
              Newcomers
            </a>
            <a href="#mistakes" className="hover:text-white">
              Mistakes
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
              Rental documents checklist Ontario renters can use before applying (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              A strong rental application is not about sending the most paperwork.
              It is about sending the right documents, clearly organized, before
              the landlord has to chase missing details. This guide is built for
              GTA renters, students, families, professionals, and newcomers who
              want to rent a condo or apartment in Ontario.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#F5C979] px-8 py-4 text-center font-extrabold text-[#070A12] shadow-[0_0_45px_rgba(245,201,121,.30)] transition hover:scale-[1.03]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#checklist"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
              >
                View Checklist
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/52">
              General information only, not legal advice. Rental requirements can
              vary by landlord, property manager, listing brokerage, and building.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.04))] p-3 shadow-2xl lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA condo building for Ontario rental document preparation"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">
                Application-ready package
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Clean documents, clearer offer.
              </p>

              <div className="mt-4 grid gap-2">
                {heroPackageRows.map((item) => (
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
                {heroPackageBadges.map((badge) => (
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
              What income do you need to rent in the GTA?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/85">
              Most GTA landlords use a 30–35% rent-to-income guideline,
              sometimes stated as "40x monthly rent" in annual income. For a
              $2,000/month unit, that works out to roughly $60,000–$72,000 in
              gross annual income. But this is a landlord preference, not a
              legal requirement — Ontario's Human Rights Code prohibits
              landlords from rejecting an application based on a
              rent-to-income ratio alone. A landlord must weigh your full
              picture: income, credit, and rental history together. That
              means a strong reference letter, a stable job letter, or a
              guarantor can offset an income ratio that falls short. In 2026,
              GTA rental supply has grown faster than demand, so landlords
              increasingly weigh the complete application rather than a
              single cutoff number.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C979]">
              Goal
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Make the landlord's review easier
            </h2>
            <p className="mt-3 leading-7 text-white/65">
              A clean application tells a simple story: who you are, how rent will
              be paid, when you can move, and why the file is low friction.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C979]">
              Ontario note
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Credit history is only one part
            </h2>
            <p className="mt-3 leading-7 text-white/65">
              Ontario human rights guidance says rental history, credit references,
              credit checks, and income information may be requested, but lack of
              rental or credit history should not be treated negatively by itself.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C979]">
              Privacy
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Share enough, not everything
            </h2>
            <p className="mt-3 leading-7 text-white/65">
              Redact account numbers, protect your SIN, and send documents through
              trusted channels. A strong package should also be a careful one.
            </p>
          </div>
        </div>
      </section>

      <section id="income" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Income &amp; Budget
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            How much income do you usually need to rent in the GTA?
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            As a general guideline, many GTA landlords look for a gross monthly
            household income of about 2.5 to 3 times the monthly rent. For a
            $2,000 rental, that is roughly $5,000 per month, or about $60,000
            per year. A lower income near $4,000 per month can still work when
            the applicant has no car loan or monthly debt payments, has strong
            savings, or can show proof of funds. Every landlord is different, so
            treat these as planning targets, not strict rules.
          </p>

          <div className="mt-10 hidden overflow-hidden rounded-[2rem] border border-white/12 md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.06] text-sm font-semibold uppercase tracking-[0.08em] text-[#F5C979]">
                  <th className="px-6 py-4">Monthly rent</th>
                  <th className="px-6 py-4">
                    Typical monthly income (about 2.5x)
                  </th>
                  <th className="px-6 py-4">Approx. annual income</th>
                </tr>
              </thead>
              <tbody>
                {incomeGuide.map((row) => (
                  <tr
                    key={row.rent}
                    className="border-t border-white/10 text-white/78"
                  >
                    <td className="px-6 py-4 font-semibold">{row.rent}</td>
                    <td className="px-6 py-4">{row.income}</td>
                    <td className="px-6 py-4">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {incomeGuide.map((row) => (
              <div
                key={row.rent}
                className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-5"
              >
                <p className="text-lg font-bold text-[#F5C979]">{row.rent} rent</p>
                <p className="mt-2 leading-7 text-white/72">
                  Typical monthly income (about 2.5x): {row.income}
                </p>
                <p className="mt-1 leading-7 text-white/72">
                  Approx. annual income: {row.annual}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-white/52">
            These are common planning ranges, not guarantees. Strong savings, a
            co-applicant, or a guarantor can change what a landlord will accept.
          </p>

          <div className="mt-6 max-w-3xl rounded-[2rem] border border-[#F5C979]/30 bg-[#F5C979]/10 p-6">
            <p className="leading-7 text-white/85">
              In competitive, well-priced listings in strong locations, a
              unit can still receive 2 to 3 applications at once, so the
              strongest, best-organized file usually wins. Most landlords ask
              for about 2 recent pay stubs, sometimes 3.
            </p>
          </div>
        </div>
      </section>

      <section id="market-qa" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            GTA Market &amp; Eligibility (2026)
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What renters are actually asking about income, credit, and the
            2026 market
          </h2>

          <div className="mt-10 grid gap-4">
            {marketQnA.map((item) => (
              <article
                key={item.question}
                className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-bold">{item.question}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="checklist" className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            Practical Checklist
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Documents usually needed to rent a condo or apartment in Ontario
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
            You may not need every item for every rental, but these are the
            documents most often used to help landlords assess identity, income,
            credit, rental history, and overall application strength.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checklistItems.map((item, index) => (
              <article key={item.title} className="rounded-[2rem] bg-black/5 p-6">
                <p className="text-sm font-semibold text-[#6E6254]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#3D352D]">{item.detail}</p>
                <p className="mt-4 rounded-2xl bg-white/55 p-4 text-sm font-semibold leading-6 text-[#4A3D2E]">
                  Tip: {item.tip}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newcomers" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
              Newcomer Strategy
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Tips if you have no Canadian credit history
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              Newcomers settle across the GTA in different ways: some explore
              rentals in Toronto, others browse{" "}
              <Link
                href="/rent/north-york"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                North York listings
              </Link>{" "}
              for subway access, check what's{" "}
              <Link
                href="/rent/vaughan"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                available in Vaughan
              </Link>{" "}
              for newer buildings, compare{" "}
              <Link
                href="/rent/markham"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                Markham rental options
              </Link>{" "}
              near York Region, look at{" "}
              <Link
                href="/rent/richmond-hill"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                Richmond Hill homes for rent
              </Link>{" "}
              in quieter communities, or search{" "}
              <Link
                href="/rent/scarborough"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                Scarborough apartments
              </Link>{" "}
              for better value. Wherever you land, the key is to replace
              uncertainty with clear supporting proof.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              For a deeper look at what changes by status - student, work
              permit holder, permanent resident, or protected person - plus
              how to spot rental scams, see our{" "}
              <Link
                href="/newcomer-rental-help-gta"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                newcomer rental help guide
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-4">
            {newcomerTips.map((tip, index) => (
              <div
                key={tip}
                className="flex gap-4 rounded-[2rem] border border-white/12 bg-white/[0.06] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5C979] font-bold text-[#070A12]">
                  {index + 1}
                </span>
                <p className="leading-7 text-white/72">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mistakes" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Avoidable Mistakes
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Common rental application mistakes GTA renters make
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6"
              >
                <p className="leading-7 text-white/72">{mistake}</p>
              </div>
            ))}
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
              Want to know if your rental package is ready?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
              Use the Key to GTA Rental Readiness tool to review budget, income,
              credit, move-in timing, and document strength before you submit an
              application.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#070A12] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C979]">
              Free readiness check
            </p>
            <p className="mt-3 leading-7 text-white/70">
              It takes a few minutes and gives you a clearer view of where your
              application is strong, what may need work, and what to prepare next.
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
            Rental documents checklist Ontario FAQ
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

      <section id="checklist-download" className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <EmailGate
            source="checklist-ontario"
            pdfUrl="/pdfs/keytogta-rental-document-checklist.pdf"
            pdfFilename="keytogta-rental-document-checklist.pdf"
          />
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
