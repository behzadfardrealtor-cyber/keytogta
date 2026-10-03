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
      "Recent pay stubs may help document current income and payment consistency. Check how many, if any, are requested for the specific application.",
    tip: "If you are self-employed, use invoices, accountant letters, NOAs, or business bank statements instead.",
  },
  {
    title: "Credit report",
    detail:
      "A full Canadian credit report can provide context about your name, date, score, accounts, and payment history.",
    tip: "Ask which report or format, if any, is requested for the application.",
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
      "A rental application may request contact information, income details, references, and consent for checks. Requirements vary by landlord and application.",
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
      "No. A guarantor may be requested depending on the application and landlord. If one is requested, they may need to provide relevant supporting information.",
  },
  {
    question: "What does the Rental Readiness tool check?",
    answer:
      "It helps you review rent target, income, credit, documents, move-in timing, and application preparation before you spend time on showings or submit an offer.",
  },
  {
    question: "How much income do I need to rent an apartment in the GTA?",
    answer:
      "There is no universal income multiple for renting in the GTA. Compare rent with your income and other expenses for your own budget, and prepare accurate income information if requested.",
  },
  {
    question: "What is a good rent-to-income ratio for renting in the GTA?",
    answer:
      "There is no universal ratio that determines whether an Ontario rental application will be accepted. Use your income and other expenses to set a personal budget; a fixed rent-to-income cutoff is not an appropriate screening rule for ordinary rentals.",
  },
  {
    question: "What credit score do I need to rent an apartment in Toronto?",
    answer:
      "Ontario has no legal minimum rental credit score. A credit check may be part of an application, but practices vary, and limited Canadian credit history is not the same as bad credit.",
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
      "For ordinary non-subsidized rentals, Ontario Human Rights Commission guidance says landlords should not apply a fixed rent-to-income cutoff such as 30%. You can compare rent with your income for personal budgeting, but that ratio is not a landlord approval rule. Income information may be requested and considered under Ontario's rental-housing rules alongside available credit or rental-history information.",
  },
  {
    question: "What credit score do you need to rent in the GTA?",
    answer: (
      <>
        There&apos;s no legal minimum credit score in Ontario. A landlord may
        request a credit check, but practices vary. See our{" "}
        <Link
          href="/credit-score-rental-application-gta"
          className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
        >
          full credit score guide
        </Link>{" "}
        for preparation steps, including what to do if your Canadian credit
        history is limited.
      </>
    ),
  },
  {
    question: "How competitive is the GTA rental market in 2026?",
    answer: (
      <>
        Less than the headlines suggest — GTA rental supply has grown faster
        than demand since 2025, giving renters more negotiating room than in
        2022–2023, though well-priced units in strong locations still move
        fast. See{" "}
        <Link
          href="/cheapest-areas-to-rent-gta"
          className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
        >
          current GTA rent data
        </Link>{" "}
        for the latest pricing by area.
      </>
    ),
  },
  {
    question: "What documents are commonly requested for a rental application?",
    answer:
      "Common supporting documents may include an employment letter or signed job offer, recent pay stubs, a credit report or consent for a credit check, rental references, and relevant bank statements. Self-employed applicants may be asked for a Notice of Assessment, invoices or contracts, or bank records. Requirements vary by landlord and application. A landlord cannot legally require your SIN on a rental application.",
  },
  {
    question: "Can you rent in the GTA without Canadian credit history?",
    answer:
      "Yes. If your Canadian credit history is limited, an employment or offer letter, relevant bank statements, rental references, or information about a guarantor may help provide context. You can explain what credit information is unavailable and offer relevant supporting documents. Requirements vary by landlord and application.",
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
    dateModified: "2026-10-03",
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
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <PageViewTracker eventName="checklist_view" />
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
            <a href="#income" className="hover:text-[#17313A]">
              Income
            </a>
            <a href="#checklist" className="hover:text-[#17313A]">
              Checklist
            </a>
            <a href="#newcomers" className="hover:text-[#17313A]">
              Newcomers
            </a>
            <a href="#mistakes" className="hover:text-[#17313A]">
              Mistakes
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
              Rental documents checklist Ontario renters can use before applying (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              Preparing a rental application is not about sending the most paperwork.
              It is about organizing relevant documents before they are requested.
              This guide is built for
              GTA renters, students, families, professionals, and newcomers who
              want to rent a condo or apartment in Ontario.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#checklist"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                View Checklist
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              General information only, not legal advice. Rental requirements can
              vary by landlord, property manager, listing brokerage, and building.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white p-3 shadow-[0_18px_50px_rgba(23,49,58,.08)] lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA condo building for Ontario rental document preparation"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6F6B]">
                Application-ready package
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Clean documents, clearer offer.
              </p>

              <div className="mt-4 grid gap-2">
                {heroPackageRows.map((item) => (
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
                {heroPackageBadges.map((badge) => (
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
              What income do you need to rent in the GTA?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/85">
              There is no single income multiple that determines whether you
              can rent in the GTA. Compare monthly rent with your income and
              other expenses for your own budget. The{" "}
              <a
                href="https://www.ohrc.on.ca/en/writing-fair-rental-housing-ad-fact-sheet"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Ontario Human Rights Commission&apos;s rental-housing guidance
              </a>{" "}
              says landlords should not use a fixed rent-to-income cutoff for
              ordinary rentals. Prepare accurate income information and any
              available rental references or credit information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F6F6B]">
              Goal
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Make the landlord&apos;s review easier
            </h2>
            <p className="mt-3 leading-7 text-[#17313A]/72">
              A clean application tells a simple story: who you are, how rent will
              be paid, when you can move, and why the file is low friction.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F6F6B]">
              Ontario note
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Credit history is only one part
            </h2>
            <p className="mt-3 leading-7 text-[#17313A]/72">
              Ontario human rights guidance says rental history, credit references,
              credit checks, and income information may be requested, but lack of
              rental or credit history should not be treated negatively by itself.
              For the rules that apply after you sign a lease - rent increases,
              deposits, and entry notice - see our{" "}
              <Link
                href="/ontario-tenant-rights-gta"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Ontario tenant rights guide
              </Link>
              .
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F6F6B]">
              Privacy
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Share enough, not everything
            </h2>
            <p className="mt-3 leading-7 text-[#17313A]/72">
              Redact account numbers, protect your SIN, and send documents through
              trusted channels. A strong package should also be a careful one.
            </p>
          </div>
        </div>
      </section>

      <section id="income" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Income &amp; Budget
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            How do you budget for rent in the GTA?
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Start with your take-home income and regular expenses, then consider
            rent, utilities, transportation, insurance, and moving costs. Leave
            room for savings and unexpected expenses. This is personal budget
            planning, not a landlord screening formula.
          </p>

          <div className="mt-6 max-w-3xl rounded-[2rem] border border-[#2F6F6B]/25 bg-white p-6">
            <p className="leading-7 text-[#17313A]/85">
              Application requirements vary. A landlord may request recent pay
              stubs or other information to document income; check what is
              requested for the specific rental.
            </p>
          </div>
        </div>
      </section>

      <section id="market-qa" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
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
                className="rounded-[2rem] bg-[#F7F7F2] p-6"
              >
                <h3 className="text-xl font-bold">{item.question}</h3>
                <p className="mt-3 leading-7 text-[#17313A]/72">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="checklist" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Practical Checklist
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Common supporting documents for renting a condo or apartment in Ontario
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            You may not need every item for every rental, but these are the
            examples of supporting documents for identity, income, credit, or
            rental history. Requirements vary by landlord and application.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checklistItems.map((item, index) => (
              <article key={item.title} className="rounded-[2rem] bg-white p-6">
                <p className="text-sm font-semibold text-[#2F6F6B]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#17313A]/72">{item.detail}</p>
                <p className="mt-4 rounded-2xl bg-[#F7F7F2] p-4 text-sm font-semibold leading-6 text-[#17313A]/85">
                  Tip: {item.tip}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newcomers" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
              Newcomer Strategy
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Tips if you have no Canadian credit history
            </h2>
            <p className="mt-5 leading-8 text-[#17313A]/72">
              Newcomers settle across the GTA in different ways: some explore
              rentals in Toronto, others browse{" "}
              <Link
                href="/rent/north-york"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                North York listings
              </Link>{" "}
              for subway access, check what&apos;s{" "}
              <Link
                href="/rent/vaughan"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                available in Vaughan
              </Link>{" "}
              for newer buildings, compare{" "}
              <Link
                href="/rent/markham"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Markham rental options
              </Link>{" "}
              near York Region, look at{" "}
              <Link
                href="/rent/richmond-hill"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Richmond Hill homes for rent
              </Link>{" "}
              in quieter communities, or search{" "}
              <Link
                href="/rent/scarborough"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Scarborough apartments
              </Link>{" "}
              for better value. Wherever you land, the key is to replace
              uncertainty with clear supporting proof.
            </p>
            <p className="mt-4 leading-8 text-[#17313A]/72">
              For a deeper look at what changes by status - student, work
              permit holder, permanent resident, or protected person - plus
              how to spot rental scams, see our{" "}
              <Link
                href="/newcomer-rental-help-gta"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
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
                className="flex gap-4 rounded-[2rem] bg-[#F7F7F2] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2F6F6B] font-bold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#17313A]/72">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mistakes" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Avoidable Mistakes
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Common rental application mistakes GTA renters make
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6"
              >
                <p className="leading-7 text-[#17313A]/72">{mistake}</p>
              </div>
            ))}
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
              Want to know if your rental package is ready?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Use the Key to GTA Rental Readiness tool to review budget, income,
              credit information, move-in timing, and documents before you submit
              an application.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#17313A] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DCE8E3]">
              Free readiness check
            </p>
            <p className="mt-3 leading-7 text-white/75">
              Review the information you have and identify documents to prepare
              next.
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
            Rental documents checklist Ontario FAQ
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

      <section id="checklist-download" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-4xl">
          <EmailGate
            source="checklist-ontario"
            pdfUrl="/pdfs/keytogta-rental-document-checklist.pdf"
            pdfFilename="keytogta-rental-document-checklist.pdf"
          />
        </div>
      </section>

      <FooterSection variant="light" />
    </main>
  );
}
