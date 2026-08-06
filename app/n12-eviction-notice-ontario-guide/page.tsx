import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FooterSection from "../components/FooterSection";
import PageViewTracker from "../components/PageViewTracker";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/n12-eviction-notice-ontario-guide";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "N12 Eviction Notice Ontario: Landlord's Own Use Guide (2026) | KeyToGTA.ca";
const description =
  "What is an N12 notice, who qualifies as a landlord's 'own use,' current compensation rules, and what to do if you suspect bad faith - with official LTB sourcing.";

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
        alt: "GTA apartment building affected by an N12 landlord's-own-use eviction notice",
      },
    ],
  },
};

const heroFactRows = [
  { label: "Minimum notice", status: "60 days" },
  { label: "Standard compensation", status: "1 month's rent" },
  { label: "Minimum occupancy", status: "1 year" },
];

const heroBadges = [
  "Narrow family definition",
  "Bad faith = T5 claim",
  "12-month filing window",
  "Up to 12 months' rent in remedies",
];

const qualifyingCards = [
  {
    label: "Who qualifies",
    detail:
      "The landlord themselves, the landlord's spouse, the landlord's child, the landlord's parent, the landlord's spouse's child, the landlord's spouse's parent, or a caregiver for any of the people on this list.",
  },
  {
    label: "Who doesn't qualify",
    detail:
      "Siblings, extended family (grandparents, aunts, uncles, cousins, in-laws beyond a spouse's child or parent), friends or roommates of the landlord, and any corporation or numbered company - a corporate landlord cannot use an N12 for \"personal\" use at all.",
  },
];

const t5Steps = [
  "File a Form T5 - Tenant Application for Compensation for Landlord's Bad Faith Notice to End a Tenancy - with the LTB. This is a separate application from anything related to the original N12 eviction itself.",
  "You have up to 12 months after you moved out to file, so acting quickly isn't a barrier if you're still gathering evidence.",
  "Evidence that helps: the unit being re-listed for rent, sold instead of occupied, or occupied by someone who doesn't match the notice's named qualifying family member, especially within that first year.",
  "If the LTB finds bad faith, remedies can include an order for the landlord to pay compensation up to 12 months' rent, on top of any administrative penalties the LTB imposes separately.",
];

const faqs = [
  {
    question: "What is an N12 notice?",
    answer:
      "An N12 is the notice a landlord uses to end a tenancy so they, or one specific qualifying family member, can move into the unit themselves for at least a year. It requires at least 60 days' notice and, right now, one month's compensation or a comparable unit - regardless of how much notice is given.",
  },
  {
    question: "Can my landlord evict me to sell the property?",
    answer:
      "No - not with an N12. Selling a property isn't valid N12 grounds on its own. The only way a sale connects to an N12 is if the purchaser is an individual (not a corporation) who genuinely intends to move in themselves or a qualifying family member, using the same narrow family definition and one-year minimum occupancy that applies to any other N12.",
  },
  {
    question: "What if my landlord doesn't actually move in?",
    answer:
      "That's the core bad-faith scenario the LTB's T5 process exists for. If the landlord or named family member doesn't move in and stay for at least a year - or the unit gets re-rented, sold, or occupied by someone who doesn't qualify - you can file a Form T5 within 12 months of moving out. If the LTB finds bad faith, remedies can include compensation up to 12 months' rent plus administrative penalties.",
  },
  {
    question: "How much compensation am I owed?",
    answer:
      "Right now, one month's rent or a comparable unit, regardless of how much notice you were given - due by the termination date, and the LTB won't order your eviction until it's paid. A Bill 60 change would exempt landlords who give at least 120 days' notice from this requirement, but it isn't in force yet as of this writing; confirm current status at tribunalsontario.ca before assuming which rule applies to your notice.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "N12 Eviction Notice Ontario: Landlord's Own Use Guide (2026)",
    description,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "KeyToGTA.ca",
      url: siteUrl,
    },
    about: [
      { "@type": "Thing", name: "N12 eviction notice Ontario" },
      { "@type": "Thing", name: "landlord's own use eviction" },
      { "@type": "Thing", name: "LTB T5 bad faith application" },
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
        name: "N12 Eviction Notice Ontario: Landlord's Own Use Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: "N12 Eviction Notice Ontario: Landlord's Own Use Guide (2026)",
    description,
    image: `${siteUrl}/hero-condo.jpg`,
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Ontario tenant rights",
    keywords: [
      "N12 eviction notice Ontario",
      "landlord own use eviction",
      "N12 compensation Ontario",
      "T5 bad faith eviction LTB",
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

export default function N12EvictionNoticeGuidePage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <PageViewTracker eventName="n12_eviction_view" />
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
            <a href="#what-is-n12" className="hover:text-white">
              What Is N12
            </a>
            <a href="#qualifying-family" className="hover:text-white">
              Family Members
            </a>
            <a href="#compensation" className="hover:text-white">
              Compensation
            </a>
            <a href="#bad-faith" className="hover:text-white">
              Bad Faith
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
              N12 eviction notices in Ontario: landlord&apos;s own use, explained
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              An N12 notice lets a landlord end a tenancy so they, or one
              specific family member, can move into the unit themselves. It
              comes with real rules most tenants aren&apos;t told about: a
              narrow definition of which family members actually qualify, a
              minimum notice period, and a compensation requirement the
              landlord has to satisfy before the LTB will even issue an
              eviction order.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#F5C979] px-8 py-4 text-center font-extrabold text-[#070A12] shadow-[0_0_45px_rgba(245,201,121,.30)] transition hover:scale-[1.03]"
              >
                Check My Rental Readiness
              </Link>
              <a
                href="#what-is-n12"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
              >
                See How It Works
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/52">
              General information only, not legal advice. If you&apos;ve
              received an active N12, the timeline matters - talk to a
              paralegal, a lawyer, or the Landlord and Tenant Board directly
              before you act on anything here.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.04))] p-3 shadow-2xl lg:justify-self-end">
            <div className="relative h-40 overflow-hidden rounded-[1.5rem] md:h-44 lg:h-40">
              <Image
                src="/hero-condo.jpg"
                alt="GTA apartment building affected by an N12 landlord's-own-use eviction notice"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/35 via-transparent to-transparent" />
            </div>

            <div className="p-3 pt-4 md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">
                N12 snapshot
              </p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Know the rules before you respond.
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
              What is an N12 notice and when can a landlord use it?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/85">
              An N12 is the notice of termination a landlord uses to end a
              tenancy for their own use, or for the use of one specific
              qualifying family member (see below) - not for renovations,
              not for selling the unit outright, and not for any reason short
              of genuinely intending to occupy it. The landlord or qualifying
              family member must intend to live in the unit for at least one
              year, and has to give at least 60 days&apos; notice, with the
              termination date falling on the last day of a rental period or
              the end of a fixed term. Right now, every N12 - regardless of
              notice length - requires the landlord to compensate the tenant
              one month&apos;s rent or offer a comparable unit, due by the
              termination date; the LTB won&apos;t issue an eviction order
              until that&apos;s paid. A Bill 60 change to that compensation
              rule is coming but isn&apos;t in force yet - covered in full
              below.
            </p>
          </div>
        </div>
      </section>

      <section id="what-is-n12" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            What Is N12
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What is an N12, and when can a landlord actually use one?
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/70">
            An N12 (Notice to End your Tenancy Because the Landlord Wants to
            Use the Unit) is specific to one situation: someone connected to
            the landlord genuinely intends to move into the unit themselves.
            It&apos;s not a tool for general renovations, unit conversions,
            or demolition - those go through a different notice, an N13,
            with its own separate rules and its own separate compensation
            framework. If your notice cites construction, repairs, or a
            change of use rather than someone actually moving in, you likely
            received the wrong form, or a form that doesn&apos;t match the
            stated reason.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The occupancy has to be genuine, not a formality. The landlord or
            qualifying family member has to actually intend to live in the
            unit for at least one year. A landlord can&apos;t legally serve
            an N12, get the tenant to move out, and then re-list the unit
            for rent at a higher price within that year - that&apos;s
            exactly the bad-faith pattern the T5 process (covered below)
            exists to catch. Minimum notice is 60 days, and the termination
            date on the notice has to land on the last day of a rental
            period (for month-to-month tenancies) or the end of the fixed
            term in a lease.
          </p>
        </div>
      </section>

      <section id="qualifying-family" className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            Family Members
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Who actually counts as a qualifying family member?
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {qualifyingCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[2rem] bg-black/5 p-6"
              >
                <h3 className="text-xl font-bold">{card.label}</h3>
                <p className="mt-3 leading-7 text-[#3D352D]">
                  {card.detail}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-[#6E6254]">
            This list is narrower than most tenants - and some landlords -
            assume. If your N12 names anyone outside this list, it
            doesn&apos;t meet the legal requirement, and that&apos;s worth
            raising directly, ideally with a paralegal or through the LTB.
          </p>
        </div>
      </section>

      <section id="compensation" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Compensation
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What compensation is a landlord required to pay?
          </h2>

          <div className="mt-8 max-w-3xl rounded-[2rem] border border-[#F5C979]/30 bg-[#F5C979]/10 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5C979]">
              Current rule
            </p>
            <p className="mt-3 leading-7 text-white/85">
              Right now, every N12 comes with the same compensation
              requirement, no matter how much notice the landlord gives: one
              month&apos;s rent, or another rental unit acceptable to the
              tenant, due by the termination date on the notice. Per the
              Landlord and Tenant Board&apos;s own Interpretation Guideline
              12, the LTB will not issue an order ending the tenancy unless
              the landlord has satisfied this obligation first.
            </p>
          </div>

          <div className="mt-6 max-w-3xl rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
              Coming, not yet in force
            </p>
            <p className="mt-3 leading-7 text-white/70">
              Bill 60 introduces an exception to this: a landlord who gives
              at least 120 days&apos; notice - instead of the 60-day minimum
              - would no longer owe the one-month compensation, as long as
              the termination date still falls on the last day of a rental
              period or the end of a fixed term. This is not in force yet.
              The date most commonly cited for it to take effect is{" "}
              <strong>September 21, 2026</strong>, based on legal-clinic and
              industry sources tracking the rollout - Tribunals Ontario&apos;s
              own operational update (June 30, 2026) confirms only
              &quot;September 2026&quot; generally, without naming a specific
              day or naming the N12 provision directly. If you&apos;re
              dealing with an active N12 anywhere near that date, confirm
              the current status directly at{" "}
              <a
                href="https://tribunalsontario.ca/ltb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                tribunalsontario.ca
              </a>{" "}
              before assuming which rule applies - see our{" "}
              <Link
                href="/bill-60-ontario-tenant-changes-2026"
                className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
              >
                Bill 60 tenant changes guide
              </Link>{" "}
              for the fuller staged-rollout picture.
            </p>
          </div>
        </div>
      </section>

      <section id="bad-faith" className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            Bad Faith
          </p>
          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            What if you suspect your landlord isn&apos;t acting in good faith?
          </h2>

          <div className="mt-10 grid gap-4">
            {t5Steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[2rem] bg-black/5 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#070A12] font-bold text-[#F5EBDD]">
                  {index + 1}
                </span>
                <p className="leading-7 text-[#3D352D]">{step}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl leading-7 text-[#3D352D]">
            For the broader rules landlords have to follow beyond eviction
            notices - deposits, entry, rent increases - see our{" "}
            <Link
              href="/ontario-tenant-rights-gta"
              className="text-[#6E6254] underline underline-offset-2 hover:text-[#070A12]"
            >
              Ontario tenant rights guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F5EBDD] px-6 py-20 text-[#070A12]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
              Next Step
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Know where you stand before you respond
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#3D352D]">
              Whether you&apos;re weighing whether to challenge an N12 or
              just want a clearer picture of your rights as a tenant, see
              our{" "}
              <Link
                href="/ontario-tenant-rights-gta"
                className="text-[#6E6254] underline underline-offset-2 hover:text-[#070A12]"
              >
                Ontario tenant rights guide
              </Link>{" "}
              for the rules that apply beyond eviction notices, or use the
              Key to GTA Rental Readiness tool if this notice means
              you&apos;re already planning your next rental.
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
            N12 eviction notice FAQ
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/50">
            General information only, not legal advice - if you&apos;ve
            received an active N12, talk to a paralegal, a lawyer, or the
            Landlord and Tenant Board directly.
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
