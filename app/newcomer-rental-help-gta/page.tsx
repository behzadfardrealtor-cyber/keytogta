import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/newcomer-rental-help-gta";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Newcomer Rental Help in the GTA (2026) | KeyToGTA.ca";
const description =
  "Newcomers can rent in the GTA without Canadian credit or rental history. See what matters by status - student, work permit, PR, refugee claimant - plus how to spot rental scams.";

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
        alt: "Newcomer rental help for the GTA",
      },
    ],
  },
};

const heroBadges = [
  "Student, work permit, or PR",
  "No Canadian credit needed",
  "Scam red flags",
  "Settlement support",
];

const newcomerTypes = [
  {
    label: "International students",
    detail:
      "Lead with your acceptance or enrollment letter and proof of funds. Most students don't have Canadian income yet, so a bank statement or GIC confirmation showing you can cover rent typically carries more weight than anything else. A parent or sponsor co-signing from abroad, even without a Canadian address, can also strengthen the file if a landlord asks for a guarantor.",
  },
  {
    label: "Work permit holders",
    detail:
      "Your job offer or employer letter is usually the strongest document, especially if you're just starting and don't have pay stubs yet. Once you're working, add recent pay stubs and, if your job offer required one, your LMIA reference number. Between offers or waiting on your first paycheque, bank statements showing savings can bridge the gap until you have income history to show.",
  },
  {
    label: "Permanent residents",
    detail:
      "Your application looks closer to a \"standard\" Canadian rental application, but in the first several months you're still commonly missing Canadian credit history or a local rental history, even with steady income. The same alternatives covered in our credit score guide's no-credit-history section apply here: bank statements, an employer letter, landlord references, a guarantor, or a rent-reporting tradeline started early.",
  },
  {
    label: "Refugee claimants / protected persons",
    detail:
      "Settlement worker support is available through local settlement agencies, and some claimants may qualify for transitional housing support - the specifics depend on your situation, so it's worth connecting directly with a settlement agency rather than relying on general guidance here. They can help with both the application itself and understanding what support you're eligible for.",
  },
];

const scamRedFlags = [
  "Being asked to pay by e-transfer, wire transfer, or cryptocurrency before signing anything or meeting in person - the single most common red flag in rental scam reports.",
  "A landlord who won't meet in person or won't show the unit. Excuses like being \"out of the country\" were common during the pandemic; by 2026, in-person showings are standard again, so this excuse alone is a warning sign.",
  "Being asked to pay several months of rent upfront beyond first and last month. Under Ontario's Residential Tenancies Act, a landlord cannot legally require more than one month's rent as a deposit (applied to your last month) plus a refundable key deposit, on top of first month's rent - a tenant can offer more voluntarily, but a landlord asking for it is a red flag, not normal practice. In one widely discussed case, a self-described newcomer was asked for close to $11,000 covering first, last, and four additional months upfront; other renters and a Toronto broker who saw the post flagged it immediately as a scam pattern, not a legitimate request.",
  "Listing photos that show up identically across other platforms or under different contact names - a quick reverse image search can confirm this before you go further.",
  "A price significantly below the going rate for the area. Compare against sourced rent ranges on our GTA area guides before assuming a deal is real.",
  "A landlord who asks for very little information about you. Legitimate landlords almost always want references, proof of income, or a credit check - a suspiciously easy process is itself a warning sign.",
];

const reportingResources = [
  "Toronto Police Service - online reporting for fraud under $5,000",
  "Canadian Anti-Fraud Centre",
  "Legal Aid Ontario / Community Legal Clinics",
  "CLEO's tenant-law guides",
];

const faqs = [
  {
    question: "Can I rent in the GTA without Canadian credit or rental history?",
    answer:
      "Yes. Landlords are expected to weigh your complete application - income proof, references, and documentation - rather than treating missing Canadian credit or rental history as an automatic disqualifier. Under Ontario's Human Rights Code, a thin or missing credit file alone cannot be the sole reason for rejection.",
  },
  {
    question: "What's different about renting as an international student vs. a work permit holder?",
    answer:
      "Students typically lead with an acceptance letter and proof of funds since most don't have Canadian income yet, sometimes with a sponsor co-signing from abroad. Work permit holders typically lead with a job offer or employer letter, adding pay stubs once available. Both can use bank statements to bridge any income-history gap.",
  },
  {
    question: "Is it legal for a landlord to ask for several months of rent upfront?",
    answer:
      "No. Under Ontario's Residential Tenancies Act, the maximum a landlord can require upfront is one month's rent as a deposit (applied to your last month) plus a refundable key deposit, on top of your first month's rent. A landlord cannot legally require more than that, though a tenant can choose to offer more voluntarily. Requests for several extra months upfront are a common red flag, not standard practice.",
  },
  {
    question: "How do I know if a rental listing is a scam?",
    answer:
      "Watch for requests to pay by e-transfer, wire, or crypto before signing anything or meeting in person; landlords who won't meet or show the unit; listing photos that show up identically across other platforms or contacts; prices well below the going rate for the area; and landlords who ask for almost no information about you, since legitimate landlords usually want references or a credit check.",
  },
  {
    question: "What should I do if I think I've been scammed?",
    answer:
      "Stop payment and communication immediately, and report it. Toronto Police Service accepts online reports for fraud under $5,000, and the Canadian Anti-Fraud Centre tracks patterns nationally. Legal Aid Ontario and local Community Legal Clinics can advise on next steps if you've already paid or signed something.",
  },
  {
    question: "Do I need a guarantor as a newcomer?",
    answer:
      "Not always. A guarantor typically helps when your income, credit, or rental history alone doesn't reassure a landlord - common for students with no Canadian income, or anyone very early in establishing a credit file. Strong bank statements, an employer letter, or solid references can sometimes be enough on their own.",
  },
  {
    question: "What documents matter most if I don't have Canadian income yet?",
    answer:
      "Bank statements showing you can cover several months of rent typically carry the most weight, followed by an employer letter or acceptance/enrollment letter confirming your situation, and a guarantor if the rest of the file still falls short.",
  },
  {
    question: "Where can I get help if a landlord won't give me a proper lease?",
    answer:
      "Ontario landlords must provide the province's Standard Lease Form in writing if a tenant asks, within 21 days - and a tenant can legally withhold rent if they don't. CLEO's tenant-law guides and Legal Aid Ontario / Community Legal Clinics can help if a landlord isn't cooperating.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Newcomer Rental Help in the GTA (2026)",
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
        name: "newcomer rental help GTA",
      },
      {
        "@type": "Thing",
        name: "renting without Canadian credit history",
      },
      {
        "@type": "Thing",
        name: "rental scam prevention Ontario",
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
        name: "Newcomer Rental Help in the GTA",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Newcomer Rental Help in the GTA (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Newcomer rental guidance",
    keywords: [
      "newcomer rental help GTA",
      "renting without Canadian credit history",
      "international student rental Ontario",
      "rental scam prevention GTA",
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

export default function NewcomerRentalHelpPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <PageViewTracker eventName="newcomer_help_view" />
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
            <a href="#by-status" className="hover:text-white">
              By Status
            </a>
            <a href="#scams" className="hover:text-white">
              Avoid Scams
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
              Newcomer rental help for the GTA: renting without Canadian history, and how to avoid scams (2026)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              You don't need Canadian credit or rental history to rent in the
              GTA - you need the right proof for your situation, and to know
              what a real rental listing looks like versus a scam. This guide
              covers what changes by newcomer status, and the scam patterns
              that disproportionately target people new to the GTA.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#F5C979] px-8 py-4 text-center font-extrabold text-[#070A12] shadow-[0_0_45px_rgba(245,201,121,.30)] transition hover:scale-[1.03]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#by-status"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Find My Situation
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/52">
              General information only, not legal or immigration advice.
              Requirements vary by landlord, and settlement support varies by
              individual circumstances.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.04))] p-3 shadow-2xl lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="Newcomer rental help for the GTA"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">
                Built for newcomers
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                No Canadian history? Still workable.
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
              Can newcomers rent in the GTA without Canadian credit history?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/85">
              Yes. Newcomers can rent in the GTA without Canadian credit
              history or rental history - landlords just weigh other proof
              instead: income or funds documentation, a guarantor,
              references, and a complete, honest application. What counts as
              "enough" varies by your status (student, work permit holder,
              permanent resident, or protected person - see below) and by
              the type of landlord you're applying to. For the full list of
              documents landlords typically ask for, see our{" "}
              <Link
                href="/rental-documents/checklist-ontario"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                Ontario rental application checklist
              </Link>
              ; for how credit score and income benchmarks work by landlord
              type, see our{" "}
              <Link
                href="/credit-score-rental-application-gta"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                credit score guide
              </Link>
              . This page focuses on what's different by newcomer status,
              plus how to avoid the rental scams that disproportionately
              target people new to the GTA.
            </p>
          </div>
        </div>
      </section>

      <section id="by-status" className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            By Newcomer Status
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What matters most for your situation
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
            Requirements genuinely differ depending on your status in
            Canada. Here's what tends to carry the most weight for each.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {newcomerTypes.map((item) => (
              <article
                key={item.label}
                className="rounded-[2rem] bg-black/5 p-6"
              >
                <h3 className="text-xl font-bold">{item.label}</h3>
                <p className="mt-3 leading-7 text-[#3D352D]">{item.detail}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl leading-7 text-[#3D352D]">
            If transit access matters most while you get settled, our{" "}
            <Link
              href="/rent/vaughan"
              className="text-[#6E6254] underline underline-offset-2 hover:text-[#070A12]"
            >
              Vaughan rental guide
            </Link>{" "}
            covers the GTA's only direct-subway option outside Toronto.
          </p>
        </div>
      </section>

      <section id="scams" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Rental Scam Prevention
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Newcomers are disproportionately targeted - know the pattern
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            Toronto Police received more than 380 reports of rental scams in
            2024, and agencies including the RCMP have issued repeated
            public warnings about the pattern. Scammers disproportionately
            target newcomers and international students, assuming less
            familiarity with local rental norms. Knowing what to watch for
            is the best protection.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {scamRedFlags.map((flag, index) => (
              <div
                key={flag}
                className="flex gap-4 rounded-[2rem] border border-white/12 bg-white/[0.06] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5C979] font-bold text-[#070A12]">
                  {index + 1}
                </span>
                <p className="leading-7 text-white/72">{flag}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/12 bg-white/[0.06] p-8">
            <h3 className="text-xl font-bold">Legal protections worth knowing</h3>
            <p className="mt-3 leading-7 text-white/70">
              Ontario landlords must provide the province's Standard Lease
              Form in writing if a tenant asks for it, within 21 days - if
              they don't, a tenant can legally withhold rent until they
              receive it. For buildings with three or more units, Toronto's
              Landlord Registry can help you verify a landlord's identity
              before sending any money.
            </p>
          </div>

          <div className="mt-6 rounded-[2rem] border border-[#F5C979]/30 bg-[#F5C979]/10 p-8">
            <h3 className="text-xl font-bold">If you think you've been scammed</h3>
            <ul className="mt-4 grid gap-2">
              {reportingResources.map((resource) => (
                <li
                  key={resource}
                  className="rounded-2xl bg-white/[0.06] px-4 py-3 text-white/85"
                >
                  {resource}
                </li>
              ))}
            </ul>
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
              Want to know how your application looks right now?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
              Use the Key to GTA Rental Readiness tool to review your
              income, documents, and application strength before you submit
              an application.
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
            Newcomer rental help FAQ
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
