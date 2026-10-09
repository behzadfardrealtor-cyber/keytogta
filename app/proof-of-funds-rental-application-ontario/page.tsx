import type { Metadata } from "next";
import Link from "next/link";
import FooterSection from "../components/FooterSection";

const siteUrl = "https://www.keytogta.ca";
const pagePath = "/proof-of-funds-rental-application-ontario";
const pageUrl = `${siteUrl}${pagePath}`;
const title = "Proof of Funds for an Ontario Rental Application | KeyToGTA.ca";
const description =
  "Need to show savings for an Ontario rental application? Compare bank letters and statements, learn what to keep visible, and protect private financial details.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
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
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rental Guides",
        item: `${siteUrl}/rental-guides`,
      },
      { "@type": "ListItem", position: 3, name: "Proof of Funds", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Proof of Funds for an Ontario Rental Application",
    description,
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "KeyToGTA.ca", url: siteUrl },
    publisher: { "@type": "Organization", name: "KeyToGTA.ca", url: siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  },
];

const linkClass =
  "font-semibold text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]";

export default function ProofOfFundsRentalApplicationPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-[#E8E4DD] bg-white px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Key to GTA
          </Link>
          <Link href="/rental-guides" className={linkClass}>
            Rental Guides
          </Link>
        </div>
      </header>

      <section className="border-b border-[#E8E4DD] bg-[#DCE8E3] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-5 text-sm text-[#17313A]/70" aria-label="Breadcrumb">
            <Link href="/rental-guides" className={linkClass}>
              Rental Guides
            </Link>{" "}
            / Proof of funds
          </nav>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#2F6F6B]">
            Ontario rental applications
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Proof of funds for an Ontario rental application: what to show safely
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#17313A]/80">
            A landlord asks to see your savings. Do you need a full bank statement,
            or could a shorter document answer the question? Here is a practical
            way to prepare a useful file while limiting what you share.
          </p>
          <p className="mt-5 text-sm text-[#17313A]/70">
            General renter information, not legal advice. Requests vary by
            application; confirm the purpose before sending financial records.
          </p>
        </div>
      </section>

      <article className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-14 leading-8 text-[#17313A]/80">
          <section aria-labelledby="short-answer">
            <h2 id="short-answer" className="text-3xl font-bold text-[#17313A]">
              The short answer
            </h2>
            <p className="mt-5">
              Proof of funds is evidence of money available to you, usually a
              bank letter or a relevant part of a recent statement. It can add
              context if you have a new job, self-employment income, or limited
              Canadian credit history. It is not a universal document that every
              Ontario applicant must supply, and no balance guarantees acceptance.
            </p>
            <p className="mt-4">
              First ask what the landlord needs to verify: ongoing income,
              savings, or both. An employment letter and pay stubs describe
              income; a balance confirmation describes funds already available.
              Our{" "}
              <Link href="/rental-documents/checklist-ontario" className={linkClass}>
                Ontario rental document checklist
              </Link>{" "}
              covers the rest of the application package.
            </p>
          </section>

          <section aria-labelledby="document-options">
            <h2 id="document-options" className="text-3xl font-bold text-[#17313A]">
              Which document answers the request?
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-6">
                <h3 className="text-xl font-bold text-[#17313A]">Bank letter or balance confirmation</h3>
                <p className="mt-3">
                  Ask your institution whether it can issue a dated letter with
                  your name and the relevant available balance. It may answer a
                  savings question without exposing individual transactions.
                  Check whether the recipient will accept this format.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-6">
                <h3 className="text-xl font-bold text-[#17313A]">Recent bank statement</h3>
                <p className="mt-3">
                  A statement may show the account holder, date, and balance,
                  but also purchases, transfers, and account numbers. Ask which
                  period and details are relevant before sharing it.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-6">
                <h3 className="text-xl font-bold text-[#17313A]">Employment or income documents</h3>
                <p className="mt-3">
                  A signed offer, employer letter, or recent pay stubs can
                  explain earnings. They are useful when the question is how
                  rent will be paid regularly, even though they do not show a
                  savings balance.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-6">
                <h3 className="text-xl font-bold text-[#17313A]">Self-employment records</h3>
                <p className="mt-3">
                  Relevant invoices, contracts, an accountant letter, or a
                  Notice of Assessment may explain variable income. Choose
                  records that answer the actual question without sending an
                  entire financial history by default.
                </p>
              </div>
            </div>
            <p className="mt-5">
              Ontario human rights guidance says rental history, credit
              information, and income information must be considered under its
              screening rules; a fixed rent-to-income cutoff is not an
              appropriate rule for ordinary rentals. There is no universal
              &ldquo;three times the rent&rdquo; test. See the{" "}
              <a href="https://www.ohrc.on.ca/en/policy-human-rights-and-rental-housing" className={linkClass}>
                Ontario Human Rights Commission policy
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="privacy-steps">
            <h2 id="privacy-steps" className="text-3xl font-bold text-[#17313A]">
              How to share less while keeping the document useful
            </h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6">
              <li>Ask what fact needs confirmation and whether a bank letter will work.</li>
              <li>
                If a statement is necessary, agree on the relevant period and
                whether unrelated transactions and most account digits can be
                covered. Keep the name, date, institution, and balance visible
                when those facts are being verified.
              </li>
              <li>
                Never change a balance, date, or transaction to misrepresent
                the record. If a redaction removes context the recipient needs,
                offer a different authentic document.
              </li>
              <li>
                Verify the listing and recipient. Ask for a secure way to send
                the document, who will see it, and what happens to it if your
                application is unsuccessful.
              </li>
              <li>Keep a copy of the version sent and a record of the recipient.</li>
            </ol>
            <p className="mt-5">
              The{" "}
              <a href="https://www.priv.gc.ca/en/privacy-topics/landlords-and-tenants/privacy-in-the-landlord-and-tenant-relationship/" className={linkClass}>
                Office of the Privacy Commissioner of Canada
              </a>{" "}
              says applicants can ask why sensitive records are requested and
              suggest a less intrusive alternative. Its{" "}
              <a href="https://www.priv.gc.ca/en/privacy-topics/landlords-and-tenants/02_05_d_66_tips/" className={linkClass}>
                rental housing privacy tips
              </a>{" "}
              address limiting collection, protecting records, and disposing of
              information when it is no longer needed.
            </p>
          </section>

          <section aria-labelledby="sample-message" className="rounded-3xl bg-[#DCE8E3] p-6 md:p-8">
            <h2 id="sample-message" className="text-2xl font-bold text-[#17313A]">
              A message you can send
            </h2>
            <blockquote className="mt-4 border-l-4 border-[#2F6F6B] pl-5 italic">
              &ldquo;I can provide a dated bank letter confirming my available
              balance. Would that meet the proof-of-funds request? If you need a
              statement instead, please let me know which dates and details are
              needed and whether I may cover unrelated transactions and most
              account digits.&rdquo;
            </blockquote>
          </section>

          <section aria-labelledby="newcomers">
            <h2 id="newcomers" className="text-3xl font-bold text-[#17313A]">
              New to Canada or working for yourself?
            </h2>
            <p className="mt-5">
              A limited Canadian credit file is not the same as a poor payment
              history. Explain briefly what information you do have: a job
              offer, verifiable income, savings confirmation, rental reference,
              or other relevant evidence. Offer documents suited to your
              circumstances rather than a large bundle of unrelated records.
            </p>
            <p className="mt-4">
              See our{" "}
              <Link href="/rent-toronto-without-canadian-credit" className={linkClass}>
                guide to renting without Canadian credit
              </Link>{" "}
              for a fuller application plan. A guarantor is a separate option,
              with obligations that should be read carefully; it is not an
              automatic requirement for newcomers.
            </p>
          </section>

          <section aria-labelledby="money-transfer">
            <h2 id="money-transfer" className="text-3xl font-bold text-[#17313A]">
              Showing funds is different from paying a deposit
            </h2>
            <p className="mt-5">
              A request to verify savings does not require you to transfer
              money to &ldquo;prove&rdquo; your balance. Check the listing, the
              people involved, the written agreement, and the payment details
              before paying. Ontario&apos;s rent deposit rules are a separate
              question; the{" "}
              <a href="https://tribunalsontario.ca/documents/ltb/Brochures/Information%20for%20New%20Tenants.html" className={linkClass}>
                Landlord and Tenant Board guide for new tenants
              </a>{" "}
              explains how a last-rent deposit may be used.
            </p>
          </section>

          <section aria-labelledby="questions">
            <h2 id="questions" className="text-3xl font-bold text-[#17313A]">
              Common questions
            </h2>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-[#17313A]">Must I send a full bank statement?</h3>
                <p className="mt-2">
                  A full statement is not a universal Ontario rental
                  requirement. Ask whether a bank letter or a relevant,
                  appropriately redacted statement will meet the request.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17313A]">Is there a minimum savings balance?</h3>
                <p className="mt-2">
                  There is no single balance that guarantees approval. Present
                  accurate evidence and ask how it fits with the other
                  information in your application.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17313A]">Should I include my SIN?</h3>
                <p className="mt-2">
                  Do not include it by default. The Privacy Commissioner says
                  a SIN is not needed for a basic rental credit check and
                  advises applicants to ask why it is requested.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-[#E8E4DD] bg-[#F7F7F2] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#17313A]">
              Prepare your rental file
            </h2>
            <p className="mt-3">
              Use the{" "}
              <Link href="/rental-documents/checklist-ontario" className={linkClass}>
                Ontario document checklist
              </Link>{" "}
              to organize the rest of your application. If you are considering
              a GTA condo or house rental, Key to GTA can help you review your
              document preparation and options.
            </p>
            <Link
              href="/#rental-match"
              className="mt-6 inline-flex rounded-full bg-[#2F6F6B] px-6 py-3 font-bold text-white hover:bg-[#17313A]"
            >
              Review My Rental Options
            </Link>
          </section>
        </div>
      </article>
      <FooterSection />
    </main>
  );
}
