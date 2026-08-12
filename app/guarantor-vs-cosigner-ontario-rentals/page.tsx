import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/guarantor-vs-cosigner-ontario-rentals";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Guarantor vs. Co-Signer for Ontario Rentals (2026) | KeyToGTA.ca";
const description =
  "What's the real difference between a guarantor and a co-signer in Ontario? Liability, required documents, and what to do if you don't have either.";

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
        url: `${siteUrl}/guarantor-lease-signing.jpg`,
        width: 1200,
        height: 630,
        alt: "Close-up of a tenant signing a lease document held on a clipboard by another person",
      },
    ],
  },
};

const heroFactRows = [
  { label: "Co-signer liability", status: "From day one" },
  { label: "Guarantor liability", status: "Only if tenant defaults" },
  { label: "Typical guarantee term", status: "12 months" },
];

const heroBadges = [
  "Named on the lease vs. separate agreement",
  "Same documents as primary tenant",
  "Human Rights Code applies",
  "Paid guarantor alternative",
];

const comparisonCards = [
  {
    label: "Co-signer",
    status: "Liability starts day one",
    detail:
      "A co-signer signs the lease directly, as a named party to the agreement itself. That means a landlord can pursue a co-signer for unpaid rent or damages the same way they'd pursue the primary tenant - immediately, not as a backup plan. No default has to happen first.",
  },
  {
    label: "Guarantor",
    status: "Liability only on default",
    detail:
      "A guarantor signs a separate agreement, not the lease. Their liability is contingent - it only activates if the tenant fails to pay rent or breaches the lease. In practice, this is the far more common arrangement in the GTA rental market, since it's a lower-commitment ask for whoever's backing the application.",
  },
];

const documentSteps = [
  "Government-issued ID.",
  "Proof of income - pay stubs, an employment letter, or a Notice of Assessment for self-employed guarantors.",
  "A credit report, or consent to a credit check.",
  "Sometimes recent bank statements, especially if the guarantor's income is inconsistent month to month.",
];

const noGuarantorOptions = [
  {
    title: "A paid professional guarantor service",
    detail:
      "Typically 5-10% of the annual rent as a one-time fee. Used specifically by applicants who don't have anyone able or willing to personally backstop the lease.",
  },
  {
    title: "A co-tenant or roommate with stronger income or credit",
    detail:
      "Added to the lease directly rather than as a guarantor - this changes the application's numbers rather than adding a third party's liability to the mix.",
  },
  {
    title: "Building independent Canadian credit history first",
    detail:
      "So the application clears the landlord's bar on its own, without needing a guarantor at all.",
  },
];

const faqs = [
  {
    question: "What is the difference between a guarantor and a co-signer in Ontario?",
    answer:
      "A co-signer is named directly on the lease and shares liability with the tenant from day one - a landlord can pursue them for unpaid rent or damages immediately, with no default required first. A guarantor signs a separate agreement, not the lease itself, and is only liable if the tenant actually defaults. Landlords and listings in the GTA often use the two words interchangeably, but the specific document being signed - lease vs. separate agreement - is what actually determines which one applies.",
  },
  {
    question: "Can a landlord in Ontario require a guarantor?",
    answer:
      "Yes. Ontario law doesn't prohibit a landlord from asking for a guarantor or co-signer, and it's a common request when a tenant's income, credit, or rental history alone doesn't clear the landlord's bar. What a landlord can't do is use that requirement to discriminate against a protected ground under the Human Rights Code - for example, requiring a guarantor specifically because an applicant is a newcomer or receives social assistance, rather than because of their actual income or credit file.",
  },
  {
    question: "Does a guarantor agreement expire when the lease renews?",
    answer:
      "It depends entirely on the specific wording of the agreement, not on a fixed rule. Guarantee agreements typically cover the lease's initial term - commonly 12 months in the GTA - but some are written to extend automatically into a renewal or month-to-month period, and some aren't. Both the tenant and the guarantor should read the exact wording before signing, since assuming either way can be a costly mistake.",
  },
  {
    question: "What if I don't have anyone who can be my guarantor?",
    answer:
      "You've still got real options: a paid professional guarantor service (typically 5-10% of annual rent), adding a co-tenant or roommate with stronger income or credit directly to the lease instead of as a guarantor, or building independent Canadian credit history and income proof before you apply so the application clears the bar on its own.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Guarantor vs. Co-Signer for Ontario Rentals (2026)",
    description,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    about: [
      { "@type": "Thing", name: "guarantor vs co-signer Ontario" },
      { "@type": "Thing", name: "rental co-signer liability" },
      { "@type": "Thing", name: "GTA rental guarantor requirements" },
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
        name: "Guarantor vs. Co-Signer for Ontario Rentals",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Guarantor vs. Co-Signer for Ontario Rentals (2026)",
    description,
    image: `${siteUrl}/guarantor-lease-signing.jpg`,
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario rental applications",
    keywords: [
      "guarantor vs co-signer Ontario",
      "rental guarantor Ontario",
      "co-signer lease Ontario",
      "GTA rental guarantor requirements",
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

export default function GuarantorVsCosignerPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <PageViewTracker eventName="guarantor_cosigner_view" />
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
            <a href="#legal-difference" className="hover:text-[#17313A]">
              Legal Difference
            </a>
            <a href="#landlord-requirement" className="hover:text-[#17313A]">
              Landlord Rules
            </a>
            <a href="#documents" className="hover:text-[#17313A]">
              Documents
            </a>
            <a href="#no-guarantor" className="hover:text-[#17313A]">
              No Guarantor
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
              Guarantor vs. co-signer for Ontario rentals: what&apos;s actually different
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              Landlords use &quot;guarantor&quot; and &quot;co-signer&quot;
              almost interchangeably, but they create very different legal
              exposure - for the person signing, and for how a rental
              application should be structured. This guide covers the real
              distinction, when Ontario landlords can ask for one, what
              documents they&apos;ll need, and what to do if you don&apos;t
              have anyone who can act as either.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#legal-difference"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                See the Difference
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              General information only, not legal advice. Guarantor and
              co-signer agreements vary by landlord and by the exact wording
              of the agreement - read yours carefully, or get legal advice if
              anything is unclear.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white p-3 shadow-[0_18px_50px_rgba(23,49,58,.08)] lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/guarantor-lease-signing.jpg"
                alt="Close-up of a tenant signing a lease document held on a clipboard by another person"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6F6B]">
                Guarantor vs. co-signer snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Same word, two very different documents.
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
              What&apos;s the difference between a guarantor and a co-signer in Ontario?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/85">
              A co-signer is named directly on the lease, alongside the
              tenant - which means their liability for rent and damages
              starts on day one, the same as the tenant&apos;s. A guarantor
              signs a separate agreement instead of the lease itself, so
              their liability is contingent: it only activates if the tenant
              actually defaults. Landlords and listings in the GTA often use
              the two words as if they mean the same thing, but the specific
              document being signed is what actually determines which one
              applies - not the label on the request. Both are asked for the
              same underlying reason: the tenant&apos;s income, credit, or
              rental history alone didn&apos;t clear the landlord&apos;s bar,
              and both are typically asked to provide the same supporting
              documents as the primary tenant.
            </p>
          </div>
        </div>
      </section>

      <section id="legal-difference" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Legal Difference
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Co-signer vs. guarantor: the legal difference
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {comparisonCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6"
              >
                <h3 className="text-xl font-bold">{card.label}</h3>
                <p className="mt-2 text-lg font-bold text-[#2F6F6B]">
                  {card.status}
                </p>
                <p className="mt-3 leading-7 text-[#17313A]/72">{card.detail}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            In everyday conversation, GTA landlords and listings often use
            &quot;guarantor&quot; and &quot;co-signer&quot; interchangeably -
            but the paperwork determines which one actually applies, not the
            label a landlord uses. If you&apos;re being asked to add someone
            to a rental file, confirm which document they&apos;re actually
            signing before assuming the lighter, contingent-liability version
            is the one on the table.
          </p>
        </div>
      </section>

      <section id="landlord-requirement" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Landlord Rules
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Can a landlord in Ontario require one?
          </h2>

          <div className="mt-10 max-w-3xl rounded-[2rem] bg-[#F7F7F2] p-6 md:p-8">
            <p className="leading-7 text-[#17313A]/72">
              Ontario law doesn&apos;t prohibit a landlord from asking for a
              guarantor or co-signer - it&apos;s a common request when a
              tenant&apos;s income, credit history, or rental history alone
              doesn&apos;t clear the landlord&apos;s bar, and it&apos;s
              frequently used for students, newcomers, and applicants early
              in their credit journey.
            </p>
            <p className="mt-4 leading-7 text-[#17313A]/72">
              What a landlord can&apos;t do is use the guarantor requirement
              to discriminate against a protected ground under Ontario&apos;s
              Human Rights Code - for example, requiring a guarantor
              specifically because an applicant is a newcomer or receives
              social assistance, rather than because of their actual income
              or credit file. For the full picture of what landlords can and
              can&apos;t screen for, see our{" "}
              <Link
                href="/ontario-tenant-rights-gta"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Ontario tenant rights guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="documents" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Documents
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What documents will my guarantor or co-signer need?
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Landlords generally ask a guarantor or co-signer for the same
            documentation as the primary tenant - the file needs to prove
            they can actually cover the rent if it comes to that, not just
            that they&apos;re willing to sign.
          </p>

          <ul className="mt-8 max-w-3xl space-y-2">
            {documentSteps.map((step) => (
              <li key={step} className="flex gap-3 leading-7 text-[#17313A]/72">
                <span className="text-[#2F6F6B]">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-3xl leading-7 text-[#17313A]/72">
            See our{" "}
            <Link
              href="/rental-documents/checklist-ontario"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              Ontario rental application checklist
            </Link>{" "}
            for the full list landlords typically expect, and our{" "}
            <Link
              href="/credit-score-rental-application-gta"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              credit score guide
            </Link>{" "}
            for the benchmarks landlords screen a guarantor&apos;s credit
            against.
          </p>
        </div>
      </section>

      <section id="renewal" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Renewals
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Does the guarantee end when the lease renews?
          </h2>

          <div className="mt-10 max-w-3xl rounded-[2rem] bg-[#F7F7F2] p-6 md:p-8">
            <p className="leading-7 text-[#17313A]/72">
              Typically, a guarantor or co-signer agreement covers the
              lease&apos;s initial term - commonly 12 months in the GTA.
              Whether it extends into a renewal or month-to-month period
              after that depends entirely on the exact wording of the
              agreement, not on a fixed rule: some guarantees are written to
              continue automatically, and some aren&apos;t.
            </p>
            <p className="mt-4 leading-7 text-[#17313A]/72">
              This is worth reading carefully on both sides before signing -
              a guarantor who assumes their commitment ends after a year
              could be surprised to find it renews automatically, and a
              tenant relying on that guarantee could be surprised to find it
              didn&apos;t.
            </p>
          </div>
        </div>
      </section>

      <section id="no-guarantor" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            No Guarantor Available
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            No guarantor available? Here&apos;s what else works
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {noGuarantorOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#2F6F6B]">
                  {option.title}
                </h3>
                <p className="mt-3 leading-7 text-[#17313A]/72">
                  {option.detail}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-[#17313A]/72">
            See our{" "}
            <Link
              href="/credit-score-rental-application-gta"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              credit score guide
            </Link>{" "}
            for the fastest ways to build a strong file without a guarantor.
            If a thin or missing Canadian credit file is the real issue, see
            our{" "}
            <Link
              href="/rent-toronto-without-canadian-credit"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              guide to renting without Canadian credit history
            </Link>{" "}
            for what actually works instead of a guarantor.
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
              Applying with a guarantor or co-signer?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              Once you know which one applies to your situation, see our{" "}
              <Link
                href="/rental-documents/checklist-ontario"
                className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
              >
                Ontario rental application checklist
              </Link>{" "}
              for the documents landlords typically expect, or use the Key to
              GTA Rental Readiness tool to review your full file before you
              apply.
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
            Guarantor vs. co-signer FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            General information only, not legal advice - agreements vary by
            landlord and by the specific wording used.
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
