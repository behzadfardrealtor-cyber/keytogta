import type { Metadata } from "next";
import Link from "next/link";
import FooterSection from "../components/FooterSection";

const pageUrl = "https://www.keytogta.ca/rental-guides";

export const metadata: Metadata = {
  title: "Toronto Renting Tips & GTA Rental Guides | Key to GTA",
  description:
    "Start with practical Toronto renting tips on timing, total costs, condo checks, documents, and lease basics. Explore GTA area and tenant-rights guides.",
  alternates: {
    canonical: pageUrl,
  },
};

const guideGroups = [
  {
    title: "Prepare Your Rental Application",
    description:
      "Build a clearer application package before you book showings or apply.",
    guides: [
      {
        href: "/rental-documents/checklist-ontario",
        title: "Ontario Rental Application Document Checklist",
        description:
          "See the documents landlords commonly ask for before they review a rental application.",
      },
      {
        href: "/fa/rental-documents-toronto",
        title: "مدارک لازم برای اجاره خانه در تورنتو | راهنمای فارسی",
        description:
          "A Persian-language checklist for Toronto condo and house applications, including options for newcomers without Canadian credit.",
      },
      {
        href: "/proof-of-funds-rental-application-ontario",
        title: "Proof of Funds for an Ontario Rental Application",
        description:
          "Compare a bank letter with a statement and prepare financial records more carefully.",
      },
      {
        href: "/renting-condo-toronto-before-signing-lease",
        title: "Renting a Condo in Toronto Before Signing",
        description:
          "Check the lease, condo rules, move-in process, deposits, and application risks before you commit.",
      },
      {
        href: "/credit-score-rental-application-gta",
        title: "Credit Score for GTA Rental Applications",
        description:
          "Understand how credit fits into rental screening and what else can support your file.",
      },
      {
        href: "/rent-toronto-without-canadian-credit",
        title: "Rent in Toronto Without Canadian Credit",
        description:
          "Plan the documents and proof that can help explain a limited Canadian credit history.",
      },
      {
        href: "/guarantor-vs-cosigner-ontario-rentals",
        title: "Guarantor vs. Co-Signer for Ontario Rentals",
        description:
          "Compare two common ways renters strengthen an application when extra support is needed.",
      },
      {
        href: "/newcomer-rental-help-gta",
        title: "Newcomer Rental Help in the GTA",
        description:
          "Review practical first steps for newcomers preparing to rent across the GTA.",
      },
    ],
  },
  {
    title: "Choose a GTA Area",
    description:
      "Compare Toronto and GTA communities by fit, commute, rental stock, and next steps.",
    guides: [
      {
        href: "/rent/toronto",
        title: "Toronto Rental Guide",
        description:
          "Compare major Toronto rental pockets before narrowing your search inside the city.",
      },
      {
        href: "/rent/north-york",
        title: "North York Rental Guide",
        description:
          "Review subway access, condo areas, and practical trade-offs in North York.",
      },
      {
        href: "/rent/vaughan",
        title: "Vaughan Rental Guide",
        description:
          "Learn how Vaughan rentals compare for transit, newer condos, parking, and space.",
      },
      {
        href: "/rent/markham",
        title: "Markham Rental Guide",
        description:
          "Explore Markham rental areas including Downtown Markham, Unionville, and Cornell.",
      },
      {
        href: "/rent/scarborough",
        title: "Scarborough Rental Guide",
        description:
          "Compare Scarborough rental pockets for value, transit access, and everyday practicality.",
      },
      {
        href: "/rent/richmond-hill",
        title: "Richmond Hill Rental Guide",
        description:
          "Review Richmond Hill rental trade-offs for quieter communities, transit, and parking.",
      },
      {
        href: "/persian-newcomer-neighbourhoods-gta",
        title: "Persian Newcomer Neighbourhoods in the GTA",
        description:
          "Compare GTA areas with established Persian-speaking community connections.",
      },
    ],
  },
  {
    title: "Know Your Tenant Rights",
    description:
      "Use these guides to understand common Ontario rental rules before you make decisions.",
    guides: [
      {
        href: "/ontario-tenant-rights-gta",
        title: "Ontario Tenant Rights for GTA Renters",
        description:
          "Review core rules for rent increases, deposits, landlord entry, and rental applications.",
      },
      {
        href: "/n12-eviction-notice-ontario-guide",
        title: "N12 Eviction Notice Ontario Guide",
        description:
          "Understand what an N12 notice is and what renters should check before responding.",
      },
      {
        href: "/bill-60-ontario-tenant-changes-2026",
        title: "Bill 60 Ontario Tenant Changes",
        description:
          "Track which 2026 tenant-rule changes are in force and which still need confirmation.",
      },
    ],
  },
];

export default function RentalGuidesPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
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
            href="/#rental-inquiry"
            className="rounded-full bg-[#2F6F6B] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(47,111,107,.20)] transition hover:scale-[1.03] hover:bg-[#17313A]"
          >
            Request Rental Options
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-16 md:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(47,111,107,0.14),transparent_30%),linear-gradient(140deg,rgba(255,255,255,0.78)_0%,rgba(247,247,242,0.92)_48%,rgba(220,232,227,0.72)_100%)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Rental Guides
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Toronto Renting Tips and GTA Rental Guides
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#17313A]/72">
            Start with the decisions that matter in a Toronto condo or house
            search, then choose a detailed guide for your area, application,
            or tenant rights. Behzad can discuss possible rental options after
            reviewing your search needs.
          </p>
        </div>
      </section>

      <section aria-labelledby="toronto-rental-tips" className="px-6 pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E8E4DD] bg-white p-6 shadow-[0_18px_50px_rgba(23,49,58,.06)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2F6F6B]">Start here</p>
          <h2 id="toronto-rental-tips" className="mt-3 text-2xl font-bold md:text-4xl">
            Five practical tips for renting in Toronto
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#17313A]/70">
            These steps help you narrow a condo or house search before you spend time on showings or send private documents.
          </p>
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            <li className="rounded-2xl bg-[#F7F7F2] p-5">
              <h3 className="text-lg font-bold">1. Start with your move-in date and commute</h3>
              <p className="mt-2 leading-7 text-[#17313A]/72">Compare areas now, then check current availability near the date you can actually move. A listing available today may not suit a much later start date. Use the <Link className="font-semibold text-[#2F6F6B] underline underline-offset-2" href="/rent/toronto">Toronto area guide</Link> to narrow your search.</p>
            </li>
            <li className="rounded-2xl bg-[#F7F7F2] p-5">
              <h3 className="text-lg font-bold">2. Budget beyond the advertised rent</h3>
              <p className="mt-2 leading-7 text-[#17313A]/72">Ask which utilities, parking, and other recurring costs are included. Compare the total with your commute and space needs before deciding that one area is more affordable.</p>
            </li>
            <li className="rounded-2xl bg-[#F7F7F2] p-5">
              <h3 className="text-lg font-bold">3. Check the unit and the building</h3>
              <p className="mt-2 leading-7 text-[#17313A]/72">At a viewing, ask about the condition of the unit, what is included, and any condo rules or move-in booking requirements. The <Link className="font-semibold text-[#2F6F6B] underline underline-offset-2" href="/renting-condo-toronto-before-signing-lease">Toronto condo guide</Link> has a closer look.</p>
            </li>
            <li className="rounded-2xl bg-[#F7F7F2] p-5">
              <h3 className="text-lg font-bold">4. Prepare documents without oversharing</h3>
              <p className="mt-2 leading-7 text-[#17313A]/72">Organize your application, income proof, and credit information, but confirm who is receiving sensitive records and why before sending them. Use the <Link className="font-semibold text-[#2F6F6B] underline underline-offset-2" href="/rental-documents/checklist-ontario">Ontario rental document checklist</Link>.</p>
            </li>
            <li className="rounded-2xl bg-[#F7F7F2] p-5 md:col-span-2">
              <h3 className="text-lg font-bold">5. Read the lease and verify payment details</h3>
              <p className="mt-2 max-w-4xl leading-7 text-[#17313A]/72">Check the written lease, included services, deposit terms, and the identity of the person receiving payment before transferring money. Review <Link className="font-semibold text-[#2F6F6B] underline underline-offset-2" href="/ontario-tenant-rights-gta">Ontario tenant rights</Link> and the <a className="font-semibold text-[#2F6F6B] underline underline-offset-2" href="https://www.ontario.ca/page/guide-ontarios-standard-lease">Ontario standard lease guide</a>.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10">
          {guideGroups.map((group) => (
            <section key={group.title} aria-labelledby={group.title.replaceAll(" ", "-").toLowerCase()}>
              <div className="mb-5 max-w-3xl">
                <h2
                  id={group.title.replaceAll(" ", "-").toLowerCase()}
                  className="text-2xl font-bold md:text-3xl"
                >
                  {group.title}
                </h2>
                <p className="mt-2 leading-7 text-[#17313A]/68">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.guides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group rounded-[2rem] border border-[#E8E4DD] bg-white p-6 shadow-[0_18px_50px_rgba(23,49,58,.06)] transition hover:-translate-y-1 hover:border-[#2F6F6B]/25 hover:shadow-[0_24px_65px_rgba(23,49,58,.10)]"
                  >
                    <h3 className="text-lg font-bold text-[#17313A] transition group-hover:text-[#2F6F6B]">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#17313A]/68">
                      {guide.description}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-[#2F6F6B]">
                      Read the guide
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#2F6F6B]/20 bg-[#DCE8E3] p-8 text-[#17313A] md:p-10">
          <h2 className="max-w-3xl text-2xl font-bold md:text-4xl">
            Need a condo or house rental shortlist that fits your situation?
          </h2>
          <Link
            href="/#rental-inquiry"
            className="mt-6 inline-flex min-h-14 items-center justify-center rounded-full bg-[#2F6F6B] px-8 py-4 text-center font-extrabold text-white shadow-[0_18px_38px_rgba(47,111,107,.24)] ring-1 ring-[#2F6F6B]/20 transition hover:scale-[1.03] hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]"
          >
            Tell Behzad What You Need
          </Link>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#17313A]/72">
            Share your area and move-in timing to start a conversation. No credit score or documents are needed for the first request. For a detailed preparation review, use the <Link href="/#rental-match" className="font-semibold underline underline-offset-2">Rental Readiness tool</Link>.
          </p>
        </div>
      </section>

      <FooterSection variant="light" />
    </main>
  );
}
