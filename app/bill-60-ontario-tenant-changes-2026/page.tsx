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
  "See the Ontario tenant changes in force since July and September 2026: N4 notices, LTB reviews, N12 compensation, arrears hearings, and what has not changed.";

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
  "In force since Sept 21, 2026",
  "What hasn't changed",
  "Not legal advice",
];

const comparisonInForce = [
  { label: "LTB order review", value: "15 days from issuance for orders issued on/after July 1" },
  { label: "Section 206 payment agreements", value: "LTB Payment Agreement Form required" },
];

const comparisonSeptember = [
  { label: "N4 notices given on/after September 21", value: "At least 7 days' notice" },
  { label: "Section 48 N12 landlord-own-use", value: "Compensation exception for qualifying 120-day notices" },
  { label: "Section 82 issues at arrears hearings", value: "New payment condition for applications filed on/after September 21" },
];

const detailSections = [
  {
    id: "ltb-review",
    tag: "In force since July 1, 2026",
    title: "LTB order review deadline",
    was: "For LTB orders issued before July 1, 2026, the review-request deadline is 30 days from issuance, subject to the LTB's procedural rules.",
    becomes: "For orders issued on or after July 1, 2026, the deadline is 15 days from the day the order was issued.",
    doText: "Check the issue date on your order promptly. The LTB's Review of an Order guideline explains the grounds, filing requirements and deadline rules.",
  },
  {
    id: "n4-notice",
    tag: "In force since September 21, 2026",
    title: "N4 non-payment notice period",
    was: "For N4 notices given before September 21, 2026, the minimum was 7 days for daily or weekly rent and 14 days for monthly or yearly rent.",
    becomes: "For N4 notices given on or after September 21, 2026, the termination date must be at least 7 days after the notice is given. The notice alone does not evict a tenant; the landlord must apply to the LTB for an eviction order.",
    doText: "Check when and how the N4 was given. Do not count the day it was given; mail or courier service can add days. Use the LTB's N4 form and instructions to check the termination date.",
  },
  {
    id: "n12-compensation",
    tag: "In force since September 21, 2026",
    title: "N12 personal-use compensation and the notice waiver",
    was: "For N12 notices under section 48 given before September 21, 2026, the landlord owes one month's rent in compensation or another rental unit acceptable to the tenant, regardless of notice length.",
    becomes: "For section 48 landlord-own-use N12 notices given on or after September 21, 2026, no compensation or alternative unit is required if the notice gives at least 120 days and the termination date is the last day of a fixed term or rental period. Otherwise the compensation rule remains; purchaser-own-use N12 notices under section 49 are not exempt.",
    doText: "Check the notice date, reason and termination date. Where compensation is required, it must be paid or the acceptable unit offered by the termination date. Ask the LTB or a tenant legal clinic about a notice you have received.",
  },
];

const n13Note =
  "N13 notices for demolition, major repairs or conversion follow separate rules. The section 48 N12 compensation exception does not apply to N13 notices; check the N13 rules for your circumstances.";

const arrearsSection = {
  was: "Before July 1, 2026, the LTB Payment Agreement Form was not mandatory for repayment agreements under section 206. The new section 82 payment condition did not apply to arrears applications filed before September 21, 2026.",
  becomes: "Since July 1, the LTB Payment Agreement Form is required for repayment agreements under section 206. For a landlord's arrears application filed on or after September 21, a tenant raising other section 82 issues at the hearing must pay at least half the claimed arrears directly to the landlord at least 7 days before the hearing, and give the landlord and LTB a description of the issues and supporting evidence by that deadline. The requirements cannot be waived except where required by the Human Rights Code.",
  doText: "Check the application filing date. Keep a receipt for any payment and follow the LTB's issue and evidence instructions. This condition is for raising other section 82 issues; it does not prevent you from attending the hearing or disputing the rent amount claimed.",
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
      "Yes, the changes covered here took effect in stages. The shorter LTB order review deadline and section 206 Payment Agreement Form requirement began July 1, 2026. The shorter N4 notice period, qualifying section 48 N12 compensation exception, and section 82 arrears-hearing condition took effect September 21, 2026.",
  },
  {
    question: "How long is an N4 notice period now?",
    answer:
      "An N4 given on or after September 21, 2026 must allow at least 7 days. For earlier N4 notices, the minimum was 7 days for daily or weekly rent and 14 days for monthly or yearly rent. Exclude the day the notice was given and account for the service method. An N4 does not itself evict you; the landlord must apply to the LTB for an eviction order.",
  },
  {
    question: "Does my fixed-term lease still become month-to-month?",
    answer:
      "Yes. An earlier proposal to end this was dropped before Bill 60 passed. When your fixed-term lease ends, it still automatically continues month-to-month on the same terms unless you or your landlord end it through a proper legal process.",
  },
  {
    question: "How long do I have to appeal an LTB decision?",
    answer:
      "These are different processes. An LTB review request is generally due within 15 days of issuance for an order issued on or after July 1, 2026, or 30 days for an earlier order, subject to LTB procedural rules. An appeal to Divisional Court on a question of law has a separate 30-day deadline. Check the applicable rules promptly.",
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
    dateModified: "2026-10-06",
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
              Bill 60&apos;s tenant-law changes took effect in stages on July 1
              and September 21, 2026. This guide explains which dates and
              notice types matter for N4 notices, N12 compensation, arrears
              hearings and LTB order reviews.
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
                Two effective dates. Check which rule applies.
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
              stages. Since July 1, 2026, the LTB review-request deadline is
              15 days from issuance for new orders, and section 206 repayment
              agreements require the LTB Payment Agreement Form. Since
              September 21, 2026, new N4 notices require at least 7 days,
              qualifying landlord-own-use N12 notices can be exempt from
              compensation, and a new condition applies when tenants raise
              other issues at certain arrears hearings. These rules depend
              on the notice or application date; fixed-term tenancies still
              continue month-to-month unless properly ended.
            </p>
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Effective Dates
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What took effect, and when
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#17313A]/72">
            The applicable rule can depend on when an order was issued, a
            notice was given, or an application was filed.
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
                In force since September 21, 2026
              </p>
              <div className="mt-4 grid gap-3">
                {comparisonSeptember.map((item) => (
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
            Tribunals Ontario confirms the September 21 effective date in its{" "}
            <a
              href="https://tribunalsontario.ca/2026/09/21/ltb-operational-update-legislative-changes-at-the-landlord-and-tenant-board-effective-september-21-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              September 21, 2026 operational update
            </a>.
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
                    Previous rule
                  </p>
                  <p className="mt-2 leading-7 text-[#17313A]/72">{section.was}</p>
                </div>
                <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17313A]/50">
                    Current rule
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

              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#17313A]/68">
                Official guidance: {section.id === "ltb-review" ? (
                  <a href="https://tribunalsontario.ca/documents/ltb/Interpretation%20Guidelines/08%20-%20Review%20of%20an%20Order.html" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
                    LTB Guideline 8 on reviewing an order
                  </a>
                ) : section.id === "n4-notice" ? (
                  <a href="https://tribunalsontario.ca/documents/ltb/Notices%20of%20Termination%20%26%20Instructions/N4_Instructions.html" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
                    LTB N4 notice instructions and date calculation
                  </a>
                ) : (
                  <a href="https://tribunalsontario.ca/documents/ltb/Interpretation%20Guidelines/12%20-%20Eviction%20for%20Personal%20Use.html" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
                    LTB Guideline 12 on N12 compensation
                  </a>
                )}.
              </p>

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
            July and September 2026 Changes
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Payment agreements and arrears hearings
          </h2>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                Previous rule
              </p>
              <p className="mt-2 leading-7 text-[#17313A]/72">
                {arrearsSection.was}
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#F7F7F2] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                Current rule
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

          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            See the LTB&apos;s {" "}
            <a href="https://tribunalsontario.ca/documents/ltb/Brochures/Issues%20a%20Tenant%20Can%20Raise%20at%20a%20Hearing%20about%20a%20Landlords%20Application%20for%20Non%20Payment%20of%20Rent.html" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
              guide to section 82 issues at an arrears hearing
            </a>{" "}
            and its {" "}
            <a href="https://tribunalsontario.ca/2026/06/30/ltb-operational-update-legislative-changes-at-the-ltb/" className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]">
              July 1 payment agreement update
            </a>.
          </p>

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
