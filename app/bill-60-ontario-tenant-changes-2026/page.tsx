import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/bill-60-ontario-tenant-changes-2026";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Bill 60 Ontario Tenant Changes 2026: What's In Force Now | KeyToGTA.ca";
const description =
  "Bill 60 changes are rolling out in stages. See exactly what's in force now vs. later for GTA renters - N4 notices, LTB reviews, N12 compensation, and what hasn't changed.";

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
        alt: "Bill 60 Ontario tenant changes guide for GTA renters",
      },
    ],
  },
};

const heroBadges = [
  "In force since July 1, 2026",
  "Takes effect Sept 21, 2026",
  "What hasn't changed",
  "Not legal advice",
];

const comparisonInForce = [
  { label: "LTB order review deadline", value: "30 days -> 15 days" },
  { label: "Arrears repayment plans", value: "Informal plans -> Mandatory LTB Payment Agreement Form" },
];

const comparisonLater = [
  { label: "N4 non-payment notice period", value: "14 days -> 7 days" },
  { label: "N12 personal-use compensation", value: "Always owed -> Waived with 120+ days' notice" },
];

const detailSections = [
  {
    id: "ltb-review",
    tag: "In force since July 1, 2026",
    title: "LTB order review deadline",
    was: "If you believed an LTB order had a serious error, you had 30 days from receiving it to ask the LTB to review its own order.",
    becomes: "That window is now 15 days. This is the only deadline that changed here - the review process itself works the same way.",
    doText: "Mark the deadline the day you receive any LTB order. If you think there's a mistake, don't wait to look into it - 15 days goes fast. Request a review directly through tribunalsontario.ca.",
  },
  {
    id: "n4-notice",
    tag: "Takes effect September 21, 2026",
    title: "N4 non-payment notice period",
    was: "An N4 notice for unpaid rent gives a termination date at least 14 days after the notice is given, before the landlord can apply to the LTB.",
    becomes: "For N4 notices served on or after September 21, 2026, that minimum drops to 7 days. Notices served before that date still follow the 14-day rule.",
    doText: "If you fall behind on rent, don't assume you have two weeks - check the actual date on your N4 and confirm which rule applies based on when it was served. Acting the same day you receive it is the safest habit either way.",
  },
  {
    id: "n12-compensation",
    tag: "Takes effect September 21, 2026",
    title: "N12 personal-use compensation and the notice waiver",
    was: "For a landlord (or a close family member) to end your tenancy for their own use, they must give at least 60 days' notice and pay one month's rent in compensation, or offer another acceptable unit - regardless of how much notice they give.",
    becomes: "Starting September 21, 2026, that compensation is waived if the landlord gives at least 120 days' notice, with a termination date that falls on the last day of a rental period or the end of a fixed term. Give less than 120 days, and compensation is still owed.",
    doText: "Do the date math yourself. Count from the day you received the notice to the termination date - if it's under 120 days, you're still owed compensation. This calculation is worth getting a second opinion on, from the LTB or a tenant legal clinic, not just this page.",
  },
];

const n13Note =
  "N13 notices (demolition, major renovation, or conversion to non-residential use) are a separate framework from N12. The 120-day compensation waiver above is specific to N12; I could not confirm that N13 compensation is waived the same way. If you've received an N13, treat compensation as still owed unless you confirm otherwise with the LTB.";

const arrearsSection = {
  was: "Repayment plans for rent arrears were often arranged informally - a letter, an email, or a verbal agreement between landlord and tenant.",
  becomes: "Since July 1, 2026, any formal repayment plan filed with the LTB under section 206 of the Residential Tenancies Act must use the Board's official Payment Agreement Form. Separately, the bill includes a rule that would require tenants to pay at least 50% of claimed arrears before raising repair or maintenance issues at the same hearing - but that specific rule has not been proclaimed yet and has no confirmed effective date.",
  doText: "If a landlord offers you a repayment plan, insist on the official LTB form, not an email or a verbal understanding. And don't assume the 50% arrears rule applies yet - it hasn't taken effect as of this writing.",
};

const unchangedItems = [
  {
    title: "Fixed-term leases still convert to month-to-month",
    detail:
      "An earlier proposal would have ended this automatic conversion. It was withdrawn before Bill 60 passed, after pushback from tenant advocates. When your fixed-term lease ends, it still automatically continues month-to-month on the same terms unless you or your landlord end it properly.",
  },
  {
    title: "Repairs and maintenance obligations",
    detail:
      "Landlords are still required to keep your unit in a reasonable state of repair. Bill 60 doesn't touch this.",
  },
  {
    title: "Heat and utilities rules",
    detail:
      "Minimum heat requirements and utility obligations are unchanged.",
  },
  {
    title: "Entry and privacy rules",
    detail:
      "24 hours' written notice and the 8am-8pm entry window still apply, unchanged. See our full breakdown in the tenant rights guide.",
    href: "/ontario-tenant-rights-gta",
    linkLabel: "Ontario tenant rights guide",
  },
  {
    title: "Illegal deposits are still illegal",
    detail:
      "Security, damage, and pet deposits remain illegal in Ontario. Only last month's rent and a refundable key deposit are allowed - also unchanged. Full detail in the tenant rights guide.",
    href: "/ontario-tenant-rights-gta",
    linkLabel: "Ontario tenant rights guide",
  },
  {
    title: "Appeal to the Divisional Court",
    detail:
      "This is a different process from the 15-day LTB review above. Appealing an LTB order to the Divisional Court, on a question of law, is still 30 days - Bill 60 didn't touch this deadline.",
  },
];

const faqs = [
  {
    question: "Is Bill 60 in effect yet?",
    answer:
      "Partly. Some provisions have been in force since July 1, 2026 - the shorter LTB order review deadline and the mandatory Payment Agreement Form. Others, including the shorter N4 notice period and the N12 compensation waiver, aren't in force yet and are scheduled for September 21, 2026.",
  },
  {
    question: "How many days do I have to pay rent before eviction now?",
    answer:
      "As of this writing, still 14 days under an N4 notice. That drops to 7 days for N4 notices served on or after September 21, 2026. Check the date on your specific notice - the rule that applies is whichever was in force when the notice was served, not when you're reading this.",
  },
  {
    question: "Does my fixed-term lease still become month-to-month?",
    answer:
      "Yes. An earlier proposal to end this was dropped before Bill 60 passed. When your fixed-term lease ends, it still automatically continues month-to-month on the same terms unless you or your landlord end it through a proper legal process.",
  },
  {
    question: "How long do I have to appeal an LTB decision?",
    answer:
      "Depends which process you mean. Asking the LTB to review its own order: 15 days, shortened from 30 as of July 1, 2026. Appealing to the Divisional Court on a question of law: still 30 days, unchanged by Bill 60. These are two different processes with two different clocks - don't confuse them.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Bill 60 Ontario Tenant Changes 2026: What's In Force Now",
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
        name: "Bill 60 Ontario",
      },
      {
        "@type": "Thing",
        name: "Fighting Delays Building Faster Act 2025",
      },
      {
        "@type": "Thing",
        name: "Ontario tenant rights 2026",
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
        name: "Bill 60 Ontario Tenant Changes 2026",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "Bill 60 Ontario Tenant Changes 2026: What's In Force Now",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-07-31",
    dateModified: "2026-07-31",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario tenant rights",
    keywords: [
      "Bill 60 Ontario",
      "Fighting Delays Building Faster Act 2025",
      "N4 notice period Ontario",
      "N12 compensation Ontario",
      "LTB order review deadline",
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

export default function Bill60OntarioTenantChangesPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <PageViewTracker eventName="bill_60_view" />
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
            <a href="#comparison" className="hover:text-[#17313A]">
              In Force vs. Later
            </a>
            <a href="#n4-notice" className="hover:text-[#17313A]">
              N4 Notice
            </a>
            <a href="#unchanged" className="hover:text-[#17313A]">
              Not Changed
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
              Bill 60: what&apos;s actually changed for Ontario tenants (and what
              hasn&apos;t)
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#17313A]/72 md:text-lg">
              Bill 60&apos;s changes to the Residential Tenancies Act are rolling
              out in stages, not all at once - and most coverage doesn&apos;t make
              that clear. This guide separates what&apos;s already in force from
              what&apos;s still coming, and corrects at least one change that
              gets reported as active when it isn&apos;t.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#comparison"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#2F6F6B]/28 px-7 py-4 text-center font-semibold text-[#17313A] transition hover:bg-[#DCE8E3]"
              >
                See What&apos;s In Force
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17313A]/68">
              General information only, not legal advice. If you&apos;re in an
              active dispute with your landlord, contact the Landlord and
              Tenant Board (LTB) directly.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white p-3 shadow-[0_18px_50px_rgba(23,49,58,.08)] lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA apartment building affected by Bill 60 tenant law changes"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6F6B]">
                Staged rollout
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Two dates. Not everything moves at once.
              </p>

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
              Is Bill 60 in effect, and what does it change?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/85">
              Bill 60 - the Fighting Delays, Building Faster Act, 2025 -
              received Royal Assent on November 27, 2025, but its changes to
              the Residential Tenancies Act are being brought into force in
              stages. As of this writing, one set of changes has been in
              force since July 1, 2026: a shorter LTB order review deadline
              (30 days down to 15) and a mandatory Payment Agreement Form for
              arrears repayment plans. A second set - a shorter N4
              non-payment notice period (14 days down to 7) and a waiver of
              N12 personal-use compensation when a landlord gives 120+ days&apos;
              notice - is scheduled for September 21, 2026, and is not in
              force yet. Some things widely reported as changing did not
              make it into the final bill: fixed-term leases still
              automatically become month-to-month, unchanged.
            </p>
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            The Staged Rollout
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            In force now vs. takes effect later
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            This is the distinction most coverage of Bill 60 gets wrong.
            Here&apos;s exactly what&apos;s active today and what isn&apos;t yet.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                In force since July 1, 2026
              </p>
              <div className="mt-4 grid gap-3">
                {comparisonInForce.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white p-4">
                    <p className="text-sm font-bold text-[#17313A]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#17313A]/72">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                Takes effect September 21, 2026
              </p>
              <div className="mt-4 grid gap-3">
                {comparisonLater.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white p-4">
                    <p className="text-sm font-bold text-[#17313A]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#17313A]/72">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            The specific date of September 21, 2026 is confirmed by legal
            clinic and industry sources tracking the rollout; Tribunals
            Ontario&apos;s own operational update confirms &quot;September 2026&quot;
            without spelling out the exact day on that page. Given how close
            this date is, confirm current status at{" "}
            <a
              href="https://tribunalsontario.ca/ltb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              tribunalsontario.ca
            </a>{" "}
            before relying on it for a specific notice or deadline.
          </p>
        </div>
      </section>

      <section id="ltb-review" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          {detailSections.map((section) => (
            <div key={section.id} id={section.id} className="mb-16 last:mb-0">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
                {section.tag}
              </p>
              <h2 className="max-w-4xl text-3xl font-bold md:text-4xl">
                {section.title}
              </h2>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17313A]/50">
                    What it was
                  </p>
                  <p className="mt-2 leading-7 text-[#17313A]/72">{section.was}</p>
                </div>
                <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17313A]/50">
                    What it becomes
                  </p>
                  <p className="mt-2 leading-7 text-[#17313A]/72">
                    {section.becomes}
                  </p>
                </div>
                <div className="rounded-[2rem] border border-[#2F6F6B]/25 bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                    What to do
                  </p>
                  <p className="mt-2 leading-7 text-[#17313A]/85">
                    {section.doText}
                  </p>
                </div>
              </div>

              {section.id === "n12-compensation" && (
                <>
                  <p className="mt-4 max-w-3xl rounded-2xl border border-[#E8E4DD] bg-white/70 p-5 text-sm leading-6 text-[#17313A]/60">
                    {n13Note}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-[#17313A]/60">
                    For the full breakdown of N12 rules - who actually
                    qualifies as a family member, the current compensation
                    requirement, and what to do if you suspect bad faith -
                    see our{" "}
                    <Link
                      href="/n12-eviction-notice-ontario-guide"
                      className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                    >
                      N12 eviction notice guide
                    </Link>
                    .
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="arrears" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            In Force (Partly) Since July 1, 2026
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Payment agreements and arrears hearings
          </h2>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                What it was
              </p>
              <p className="mt-2 leading-7 text-[#17313A]/72">
                {arrearsSection.was}
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                What it becomes
              </p>
              <p className="mt-2 leading-7 text-[#17313A]/72">
                {arrearsSection.becomes}
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17313A]/68">
                What to do
              </p>
              <p className="mt-2 leading-7 text-[#17313A]/72">
                {arrearsSection.doText}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl leading-7 text-[#17313A]/72">
            Once you know where things stand, our{" "}
            <Link
              href="/rental-documents/checklist-ontario"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              Ontario rental application checklist
            </Link>{" "}
            covers the documents landlords typically expect if you&apos;re
            applying for a new place.
          </p>
        </div>
      </section>

      <section id="unchanged" className="bg-[#DCE8E3] px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            What Has NOT Changed
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Don&apos;t panic-assume every protection is gone
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            Bill 60 is narrower than a lot of the coverage around it
            suggests. Here&apos;s what&apos;s still exactly the same.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {unchangedItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#17313A]/72">
                  {item.detail}
                  {item.href && (
                    <>
                      {" "}
                      <Link
                        href={item.href}
                        className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                      >
                        {item.linkLabel}
                      </Link>
                      .
                    </>
                  )}
                </p>
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
              Got a notice and not sure what applies to you?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
              A search engine can tell you the rule. It can&apos;t look at your
              actual notice, check the date it was served against the date a
              rule took effect, and tell you whether it really applies to
              your situation. That&apos;s worth a real conversation before you
              act on anything.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#17313A] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DCE8E3]">
              Free readiness check
            </p>
            <p className="mt-3 leading-7 text-white/75">
              Use the Key to GTA Rental Readiness tool to review your
              situation, or reach out directly if you&apos;re dealing with a
              notice and want a second opinion before you respond.
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
            Bill 60 tenant changes FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            General information only, not legal advice - for an active
            dispute, contact the LTB directly.
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
