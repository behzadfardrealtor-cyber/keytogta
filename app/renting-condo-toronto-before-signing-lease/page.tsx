import type { Metadata } from "next";
import Link from "next/link";
import FooterSection from "../components/FooterSection";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/renting-condo-toronto-before-signing-lease";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Renting a Condo in Toronto: What to Check Before You Sign";
const description =
  "Before signing a Toronto condo lease, check the lease, condo rules, parking, utilities, deposits, move-in procedures, and application risks.";

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
  },
};

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
      { "@type": "Thing", name: "Toronto condo rental lease review" },
      { "@type": "Thing", name: "Ontario standard lease" },
      { "@type": "Thing", name: "condo rules for renters" },
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
        name: "Rental Guides",
        item: `${siteUrl}/rental-guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${pageUrl}#article`,
    headline: title,
    description,
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    articleSection: "Toronto rental applications",
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
];

const officialResources = [
  {
    href: "https://www.ontario.ca/page/guide-ontarios-standard-lease",
    label: "Ontario guide to the standard lease",
    description:
      "Use this to understand the standard lease form and what should be listed in it.",
  },
  {
    href: "https://tribunalsontario.ca/documents/ltb/Brochures/Guide%20to%20RTA%20(English).html",
    label: "Landlord and Tenant Board guide to the Residential Tenancies Act",
    description:
      "Use this for official high-level guidance on leases, deposits, rent, repairs, entry, and ending a tenancy.",
  },
  {
    href: "https://www.condoauthorityontario.ca/before-you-buy-or-rent-a-condo/leasing-a-condo/",
    label: "Condominium Authority of Ontario guide to leasing a condo",
    description:
      "Use this for condo-specific renter, owner, landlord, and condo-corporation responsibilities.",
  },
  {
    href: "https://www.ohrc.on.ca/en/policy-human-rights-and-rental-housing/v-identifying-discrimination-rental-housing",
    label: "Ontario Human Rights Commission rental housing policy",
    description:
      "Use this to understand how human rights rules can affect rental screening and housing access.",
  },
];

export default function RentingCondoBeforeSigningPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
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

          <Link
            href="/#rental-match"
            className="rounded-full bg-[#2F6F6B] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(47,111,107,.20)] transition hover:scale-[1.03] hover:bg-[#17313A]"
          >
            Get My Rental Shortlist
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-8 md:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(247,247,242,0.94)_0%,rgba(255,255,255,0.86)_48%,rgba(220,232,227,0.68)_100%)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-6 text-sm font-semibold text-[#17313A]/62">
            <Link
              href="/rental-guides"
              className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
            >
              Rental Guides
            </Link>{" "}
            / Toronto condo lease checklist
          </nav>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#2F6F6B] md:text-sm">
            Toronto Rental Guide
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight md:text-[2.85rem] lg:text-[3rem]">
            Renting a Condo in Toronto: What to Check Before You Sign
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#17313A]/72 md:text-lg">
            This guide is for renters who have found a specific Toronto condo
            and need to decide whether it actually fits before signing. It is
            not a listings page and it does not promise approval or
            availability. Use it to check the lease, the building rules, the
            move-in process, and the application risks before you commit.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#17313A]/68">
            General information only, not legal advice. Condo rules and
            procedures vary by building and condo corporation, so confirm the
            written requirements for the specific unit you are considering.
          </p>
        </div>
      </section>

      <article className="bg-white px-6 py-20 text-[#17313A]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-4xl">
            <section id="confirm-what-you-are-renting">
              <h2 className="text-3xl font-bold md:text-4xl">
                First, confirm what you are renting
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                A Toronto condo rental is usually an individually owned unit
                inside a condominium corporation. That is different from a
                purpose-built apartment where the whole building is operated by
                one landlord, and different again from renting a house or
                basement. The practical difference is that your lease is with
                the landlord, but the building can also have condo rules that
                affect daily life.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                Before you compare the unit against other options, confirm the
                exact unit number, who the landlord is, what is included, who
                manages the property day to day, and whether the building has
                rules or procedures that matter to you. If you are still
                comparing locations, start with the{" "}
                <Link
                  href="/rent/toronto"
                  className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  Toronto rental guide
                </Link>{" "}
                and the broader{" "}
                <Link
                  href="/rental-guides"
                  className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  GTA rental guides hub
                </Link>
                .
              </p>
            </section>

            <section id="standard-lease" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                Check the Ontario standard lease
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                For most private residential rentals in Ontario, the standard
                lease is the starting point. Read it before signing and check
                that the rent, rental period, parties, address, included
                services, deposits, utilities, parking, and any additional
                terms match what you were told.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                The lease should make the basics clear enough that you are not
                relying on text-message promises. If something important was
                part of your decision, ask to have it reflected properly before
                you sign.
              </p>

              <h3 className="mt-8 text-2xl font-bold">
                Parking, locker, utilities, and included services
              </h3>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                Check whether the rental includes a parking spot, locker,
                internet, heat, hydro, water, gas, air conditioning, appliances,
                window coverings, or building amenities. For parking and
                lockers, ask for the exact spot or locker number if one is
                assigned. For utilities, ask which accounts you must open and
                which costs stay with the landlord or condo fees.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                These details matter because two condos with the same monthly
                rent can have very different real costs once parking and
                utilities are included. This is also where a tailored shortlist
                can help you compare units based on actual fit, not just rent.
              </p>

              <h3 className="mt-8 text-2xl font-bold">
                Extra terms that do not override tenant rights
              </h3>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                Additional lease terms can clarify responsibilities, but they
                do not override Ontario tenant protections. If a clause appears
                to waive a legal right, add a charge that sounds unusual, or
                make you responsible for something unclear, pause and check it
                against official guidance or get legal advice before signing.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                For a broader renter-focused summary, read the{" "}
                <Link
                  href="/ontario-tenant-rights-gta"
                  className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  Ontario tenant rights guide
                </Link>
                .
              </p>
            </section>

            <section id="condo-rules" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                Ask for the condo rules before you commit
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                Condo rules are building-specific. One corporation may have
                detailed rules about pets, smoking, noise, balcony use,
                short-term rentals, amenity bookings, parking, deliveries, or
                elevator reservations; another may handle the same issues
                differently. Do not assume a rule from one Toronto condo applies
                to another building.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                Ask to see the rules and any renter package before you commit.
                Ask your agent what documents are available and what they can
                help you understand before you sign. Do not assume you are
                automatically entitled to every condo document an owner can
                access, and do not treat a missing document as proof of a
                problem without checking the context.
              </p>
            </section>

            <section id="move-in-logistics" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                Check move-in logistics
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                A condo move-in can involve building management, elevator
                booking, security, fobs, keys, utility setup, vehicle
                registration, tenant insurance, and amenity access. The exact
                process varies by building and condo corporation, so ask the
                building or management about its process and any applicable
                written requirements.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                Confirm timing before you sign, especially if you need a
                specific move-in date. A lease start date is not always the
                same thing as an elevator booking, key pickup appointment, or
                management registration being complete.
              </p>
            </section>

            <section id="landlord-and-listing-basics" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                Check the landlord and listing basics
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                Before signing or sending money, confirm who you are dealing
                with, how the lease will be signed, how keys will be delivered,
                and how the landlord or property manager will handle repairs
                after move-in. If something feels rushed, inconsistent, or
                disconnected from the actual unit, slow down.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                A good rental decision is not only about the unit. It also
                depends on whether the listing details, lease details, and
                handoff process line up. If you are comparing several options,
                keep notes on what each landlord actually confirmed in writing.
              </p>
            </section>

            <section id="allowed-deposits" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                Know which deposits are allowed
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                At a high level, a monthly rent deposit in Ontario cannot
                exceed one month and is for the last rental period, not damage.
                Security deposits, damage deposits, and pet deposits raise
                different concerns and should be checked against official
                Ontario guidance before you pay.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                Condo buildings may also have their own registration or move-in
                process. Do not assume what applies. Ask the building or
                management about the written process for your specific move-in,
                and keep separate track of what the landlord is asking for
                under the lease.
              </p>
            </section>

            <section id="screening-credit-guarantor" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                Screening, credit, and guarantor requests
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                Landlords often review income documentation, employment,
                credit, references, move-in timing, occupants, and documents.
                No single income ratio should be treated as an approval rule,
                and having no Canadian credit history is not the same thing as
                having bad credit.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                If credit or documents are the weak point, read the{" "}
                <Link
                  href="/credit-score-rental-application-gta"
                  className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  GTA rental credit score guide
                </Link>
                , the{" "}
                <Link
                  href="/rent-toronto-without-canadian-credit"
                  className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  guide to renting without Canadian credit history
                </Link>
                , and the{" "}
                <Link
                  href="/rental-documents/checklist-ontario"
                  className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  Ontario rental application checklist
                </Link>
                . If a landlord asks for another person to support the file,
                compare the difference in the{" "}
                <Link
                  href="/guarantor-vs-cosigner-ontario-rentals"
                  className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                >
                  guarantor vs. co-signer guide
                </Link>
                .
              </p>
            </section>

            <section id="when-it-may-not-fit" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                When this condo may not fit your situation
              </h2>
              <p className="mt-5 leading-8 text-[#17313A]/72">
                A condo can look right online and still be the wrong fit once
                you check the building rules, parking, commute, utilities,
                move-in timing, document expectations, or landlord process. If
                the lease start date is awkward, the parking is unclear, the
                rules conflict with how you live, or the application asks for
                support you do not have, it may be better to compare other
                options before committing.
              </p>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                That does not mean the unit is bad. It means the fit is
                incomplete. For condo and house renters, the stronger path is
                usually to compare a shortlist of realistic options rather than
                forcing one listing to work.
              </p>
            </section>

            <section id="official-resources" className="mt-14 rounded-[2rem] border border-[#E8E4DD] bg-[#F7F7F2] p-6 md:p-8">
              <h2 className="text-3xl font-bold md:text-4xl">
                Official resources
              </h2>
              <p className="mt-4 leading-8 text-[#17313A]/72">
                Use these official sources to check the underlying rules. They
                are linked here so you can verify the details directly.
              </p>
              <ul className="mt-6 grid gap-4">
                {officialResources.map((resource) => (
                  <li key={resource.href} className="rounded-2xl bg-white p-5">
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                    >
                      {resource.label}
                    </a>
                    <p className="mt-2 text-sm leading-6 text-[#17313A]/68">
                      {resource.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="help-comparing-options" className="mt-14">
              <h2 className="text-3xl font-bold md:text-4xl">
                Need help comparing this condo against other options?
              </h2>
              <div className="mt-5 rounded-[2rem] bg-[#DCE8E3] p-6 md:p-8">
                <p className="max-w-3xl leading-8 text-[#17313A]/85">
                  Found a condo or house rental and not sure if it fits? Get a
                  tailored rental shortlist and application guidance from
                  Behzad Fard.
                </p>
                <Link
                  href="/#rental-match"
                  className="mt-6 inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
                >
                  Get My Rental Shortlist
                </Link>
              </div>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[2rem] border border-[#E8E4DD] bg-[#F7F7F2] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
                In this guide
              </p>
              <nav className="mt-4 grid gap-3 text-sm text-[#17313A]/68">
                <a href="#standard-lease" className="hover:text-[#2F6F6B]">
                  Standard lease
                </a>
                <a href="#condo-rules" className="hover:text-[#2F6F6B]">
                  Condo rules
                </a>
                <a href="#move-in-logistics" className="hover:text-[#2F6F6B]">
                  Move-in logistics
                </a>
                <a href="#allowed-deposits" className="hover:text-[#2F6F6B]">
                  Deposits
                </a>
                <a
                  href="#screening-credit-guarantor"
                  className="hover:text-[#2F6F6B]"
                >
                  Screening
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </article>

      <FooterSection variant="light" />
    </main>
  );
}
