import type { Metadata } from "next";
import Link from "next/link";
import FooterSection from "../components/FooterSection";

const title = "Privacy Policy | Key to GTA";
const description =
  "How Key to GTA collects, uses, and protects information from visitors and rental applicants.";

export const metadata: Metadata = {
  title,
  description,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <header className="border-b border-white/12 px-6 py-5">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5C979]/25 bg-white/[0.06] text-base font-bold text-[#F5C979]">
              K
            </span>
            <span className="text-base font-semibold tracking-tight text-white">
              Key to GTA
            </span>
          </Link>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Legal
          </p>
          <h1 className="text-3xl font-black tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/50">Last updated: July 2026</p>

          <p className="mt-8 max-w-3xl leading-8 text-white/72">
            This policy explains what information Key to GTA collects when
            you visit keytogta.ca, why we collect it, and how it is used. By
            using this site, you agree to the collection and use of
            information as described below.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Information we collect</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-white/72">
            <li>
              Usage data collected automatically through Google Analytics and
              Microsoft Clarity, such as pages visited, time on site, device
              and browser type, approximate location, and how you interact
              with the page (including session recordings and heatmaps via
              Microsoft Clarity).
            </li>
            <li>
              Information you provide directly, such as when you submit the
              Rental Readiness form or the matching rental options button.
              This can include your name, email, phone number, and details
              about your rental search, budget, and timeline.
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold">How we use this information</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/72">
            We use analytics data to understand how visitors use this site so
            we can improve it. Information submitted through our forms is
            used to review your rental profile, follow up with relevant
            options, and provide the services requested. Form submissions are
            sent to our team for review and are not sold to third parties.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Analytics and cookies</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/72">
            This site uses Google Analytics and Microsoft Clarity, both of
            which may set cookies or use similar technology in your browser
            to collect usage information. These tools are operated by Google
            and Microsoft under their own privacy policies. You can opt out
            of Google Analytics tracking using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            , or adjust cookie settings directly in your browser.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Data retention</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/72">
            We keep form submissions for as long as reasonably needed to
            follow up on your rental search and to maintain accurate records.
            Analytics data is retained according to the default retention
            settings of Google Analytics and Microsoft Clarity.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Your choices</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/72">
            You can browse this site without submitting the Rental Readiness
            form. If you have submitted information and would like it
            removed or corrected, contact us using the details below.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Contact</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/72">
            Questions about this policy or your information can be sent to{" "}
            <a
              href="mailto:behzadfard.realtor@gmail.com"
              className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
            >
              behzadfard.realtor@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
