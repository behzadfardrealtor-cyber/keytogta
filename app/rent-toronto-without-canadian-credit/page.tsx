import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/rent-toronto-without-canadian-credit";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Renting in Toronto Without Canadian Credit History (2026) | KeyToGTA.ca";
const description =
  "No Canadian credit isn't bad credit. The legal difference between required and voluntary prepaid rent in Ontario, and what actually works instead.";

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
        alt: "GTA apartment building for renters without Canadian credit history",
      },
    ],
  },
};

const heroFactRows = [
  { label: "Required prepaid rent", status: "Illegal beyond 1 month" },
  { label: "Voluntary prepaid rent", status: "Legal (Corvers v. Bumbia)" },
  { label: "No credit history", status: "Not bad credit" },
];

const heroBadges = [
  "RTA s.106 deposit cap",
  "Required vs. voluntary",
  "OHRC-protected",
  "Landlord can't relabel it",
];

const situationCards = [
  {
    label: "Have a job",
    detail:
      "Pay stubs and a recent employment letter usually carry most of the weight here - two to three pay stubs plus a letter confirming role, start date, and income is often enough on its own.",
  },
  {
    label: "Job offer, not started yet",
    detail:
      "Lead with the signed offer letter. Pair it with a few months of bank statements to bridge the gap until you have pay stubs to show.",
  },
  {
    label: "No job yet",
    detail:
      "Proof of funds does the heavy lifting - bank statements showing you can cover several months of rent are usually the strongest single document you can bring.",
  },
  {
    label: "Student",
    detail:
      "An acceptance or enrollment letter plus proof of funds (or a GIC) typically covers it; a parent or sponsor co-signing from abroad can strengthen the file further if a guarantor is requested.",
  },
];

const otherGuideLinks = [
  {
    text: "Need a guarantor? See our",
    linkLabel: "guarantor vs. co-signer guide",
    href: "/guarantor-vs-cosigner-ontario-rentals",
    suffix:
      "for the legal difference between the two and what each one is actually liable for.",
  },
  {
    text: "Want the full list of documents landlords typically ask for? See our",
    linkLabel: "Ontario rental application checklist",
    href: "/rental-documents/checklist-ontario",
    suffix: ".",
  },
  {
    text: "Wondering what credit score actually gets you approved? See our",
    linkLabel: "credit score guide",
    href: "/credit-score-rental-application-gta",
    suffix: "for the benchmarks by landlord type.",
  },
  {
    text: "Working out what changes by your immigration status, or how to avoid rental scams? See our",
    linkLabel: "newcomer rental help guide",
    href: "/newcomer-rental-help-gta",
    suffix: ".",
  },
];

const faqs = [
  {
    question: "Is it legal for a landlord to require more than one month's rent upfront?",
    answer:
      "No. Under RTA s.106, a landlord can only require a rent deposit of up to one month's rent, applied to your last month of tenancy. A landlord who requires more than that as a condition of renting to you - whether they call it a deposit, prepaid rent, or anything else - is asking for something the Act doesn't allow.",
  },
  {
    question: "Can I voluntarily offer more rent upfront to strengthen my application?",
    answer:
      "Yes. Ontario courts have upheld a tenant's own, unprompted offer of prepaid rent beyond one month as legal (Corvers v. Bumbia, 2014 ONSC 985), because the payment wasn't required by the landlord. This is a legitimate option if you have the funds and choose to offer it - but it should genuinely be your choice, not something you feel pressured into.",
  },
  {
    question: "How do I know if \"voluntary\" prepaid rent is actually required?",
    answer:
      "Ask yourself who brought it up first, and what happens if you say no. If a landlord asks for it, implies your application won't be considered without it, or presents it as a condition of getting the unit, it's required, not voluntary, regardless of what it's called on paper - and courts and the LTB have consistently rejected the \"voluntary\" label in situations like that.",
  },
  {
    question: "Does having no Canadian credit history count against me legally?",
    answer:
      "It shouldn't. The Ontario Human Rights Commission's own policy states that newcomers generally won't have Canadian rental, employment, or credit history, and that landlords should not reject applications on that basis alone. A landlord can still ask for other proof - income documentation, references, a guarantor - but a thin or missing credit file by itself isn't a legal reason to turn you down.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Renting in Toronto Without Canadian Credit History (2026)",
    description,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    about: [
      { "@type": "Thing", name: "renting without Canadian credit history" },
      { "@type": "Thing", name: "prepaid rent Ontario legal" },
      { "@type": "Thing", name: "RTA rent deposit rules" },
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
        name: "Renting in Toronto Without Canadian Credit History",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Renting in Toronto Without Canadian Credit History (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario rental applications",
    keywords: [
      "renting without Canadian credit history",
      "prepaid rent Ontario legal",
      "Corvers v Bumbia",
      "RTA rent deposit rules",
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

export default function RentWithoutCanadianCreditPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <PageViewTracker eventName="no_canadian_credit_view" />
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
            <a href="#legal-distinction" className="hover:text-[#17313A]">
              Prepaid Rent Rules
            </a>
            <a href="#which-situation" className="hover:text-[#17313A]">
              Your Situation
            </a>
            <a href="#where-to-go" className="hover:text-[#17313A]">
              More Resources
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
              Renting in Toronto without Canadian credit history
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              A thin or missing Canadian credit file is a data gap, not a red
              flag - and it&apos;s specifically protected under
              Ontario&apos;s Human Rights Code. This guide covers the one
              part of the &quot;no credit history&quot; conversation that&apos;s
              genuinely new here: the legal line between prepaid rent a
              landlord can require (capped at one month) and prepaid rent a
              tenant can voluntarily offer (no cap, but only if it&apos;s
              actually voluntary).
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#legal-distinction"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                See the Legal Rules
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              General information only, not legal advice. If a landlord is
              pressuring you to prepay rent as a condition of the lease,
              that&apos;s worth a second opinion from a paralegal, a tenant
              legal clinic, or the LTB before you pay anything.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white p-3 shadow-[0_18px_50px_rgba(23,49,58,.08)] lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA apartment building for renters without Canadian credit history"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6F6B]">
                No credit history snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                A gap in data, not a mark against you.
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
              What&apos;s the difference between required and voluntary
              prepaid rent in Ontario?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/85">
              Under the Residential Tenancies Act, a landlord can only
              require a rent deposit of up to one month&apos;s rent, applied
              to your final month of tenancy (RTA s.106) - anything beyond
              that, if a landlord is requiring it as a condition of renting
              to you, is illegal. But a tenant can legally choose to
              voluntarily offer more. In Corvers v. Bumbia, 2014 ONSC 985,
              the Ontario Divisional Court upheld a tenant&apos;s offer of
              $90,000 (12 months&apos; rent) upfront as legal, specifically
              because the landlord hadn&apos;t required it - the tenant
              offered it unprompted to strengthen her application after an
              initial refusal. The distinction that matters is who
              initiated it and whether it was actually a condition of the
              lease, not the dollar amount. And courts and the LTB have
              consistently rejected the &quot;voluntary&quot; defense
              whenever a tenant can show a landlord actually required the
              payment - a landlord can&apos;t relabel a requirement as a
              request just by calling it voluntary.
            </p>
          </div>
        </div>
      </section>

      <section id="legal-distinction" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Prepaid Rent Rules
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What a landlord can require vs. what you can voluntarily offer
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Ontario&apos;s Residential Tenancies Act caps what a landlord can
            require: a rent deposit of up to one month&apos;s rent, collected
            on or before you sign the lease, applied only to your last month
            of tenancy, with mandatory annual interest (RTA s.106). A
            landlord who requires more than that as a condition of the lease
            - two months, six months, a year - is asking for something the
            Act doesn&apos;t allow, full stop.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-[#17313A]/72">
            What the Act doesn&apos;t prohibit is a tenant choosing to offer
            more, on their own initiative. In Corvers v. Bumbia, 2014 ONSC
            985, a tenant whose application had already been refused over
            immigration-status concerns offered $90,000 - a full
            year&apos;s rent - unprompted, to demonstrate she could reliably
            pay. The Ontario Divisional Court upheld the tribunal&apos;s
            finding that this was voluntary, and therefore didn&apos;t
            violate the RTA&apos;s deposit cap, because the landlord
            hadn&apos;t required it.
          </p>

          <div className="mt-8 max-w-3xl rounded-[2rem] border border-[#2F6F6B]/25 bg-white p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
              This is not a landlord playbook
            </p>
            <p className="mt-3 leading-7 text-[#17313A]/85">
              Courts and the LTB have consistently rejected the
              &quot;voluntary&quot; defense whenever a tenant can show the
              payment was actually a condition of getting the unit - being
              told you need to pay extra months to be considered is a
              requirement, no matter what word is used for it. Corvers
              turned on very specific facts: the tenant offered it after
              being told no, without being asked. If a landlord is asking,
              hinting, or implying you need to prepay beyond one
              month&apos;s rent to be approved, that&apos;s not voluntary,
              and you don&apos;t have to pay it.
            </p>
          </div>

          <div className="mt-6 max-w-3xl rounded-[2rem] border border-[#E8E4DD] bg-white/70 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17313A]/50">
              A separate category: security and damage deposits
            </p>
            <p className="mt-3 leading-7 text-[#17313A]/72">
              This voluntary/required distinction is specific to{" "}
              <strong>prepaid rent</strong>, which the Act treats as a
              permitted payment type with a cap. Security deposits, damage
              deposits, and pet deposits are a different category entirely,
              and remain illegal in Ontario no matter who offers them or why
              - there&apos;s no &quot;voluntary&quot; version of a damage
              deposit. See our{" "}
              <Link
                href="/ontario-tenant-rights-gta"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Ontario tenant rights guide
              </Link>{" "}
              for the full breakdown of what&apos;s legal to charge.
            </p>
          </div>
        </div>
      </section>

      <section id="which-situation" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Your Situation
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Which situation are you in?
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {situationCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[2rem] bg-[#F7F7F2] p-6"
              >
                <h3 className="text-xl font-bold">{card.label}</h3>
                <p className="mt-3 leading-7 text-[#17313A]/72">
                  {card.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="where-to-go" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            More Resources
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Where to go for the rest
          </h2>

          <ul className="mt-8 max-w-3xl space-y-4">
            {otherGuideLinks.map((item) => (
              <li key={item.href} className="flex gap-3 leading-7 text-[#17313A]/72">
                <span className="text-[#2F6F6B]">•</span>
                <span>
                  {item.text}{" "}
                  <Link
                    href={item.href}
                    className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                  >
                    {item.linkLabel}
                  </Link>{" "}
                  {item.suffix}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
              Next Step
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to put your file together?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Use the Key to GTA Rental Readiness tool to review your
              income, documents, and application strength before you apply -
              no Canadian credit history required to get a clear picture of
              where you stand.
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
            Renting without Canadian credit history FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            General information only, not legal advice - if a landlord is
            pressuring you to prepay rent, talk to a paralegal, a tenant
            legal clinic, or the LTB directly.
          </p>

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
