import type { Metadata } from "next";
import Link from "next/link";

const GOOGLE_REVIEW_LINK = "https://g.page/r/CTOtf7AXoY6rEAI/review";
const SHARE_URL = "https://www.keytogta.ca";
const SHARE_TEXT = "Looking for a rental in the GTA? Check out Key to GTA";
const SHARE_BUTTON_SCRIPT = `
(function () {
  var btn = document.getElementById("share-keytogta-button");
  if (!btn) return;
  var defaultLabel = btn.textContent;
  btn.addEventListener("click", function () {
    var shareUrl = "${SHARE_URL}";
    var shareText = "${SHARE_TEXT}";
    if (navigator.share) {
      navigator.share({ text: shareText, url: shareUrl }).catch(function () {});
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(function () {
        btn.textContent = "Link copied";
        setTimeout(function () {
          btn.textContent = defaultLabel;
        }, 2000);
      });
    }
  });
})();
`;

const reviewCards = [
  {
    number: "01",
    title: "Experience",
    text: "What was your experience working with Behzad?",
  },
  {
    number: "02",
    title: "Help",
    text: "How did he help during the rental or home search?",
  },
  {
    number: "03",
    title: "Recommend",
    text: "Would you recommend him to others?",
  },
];

export const metadata: Metadata = {
  title: "Leave a Review | Key to GTA",
  description:
    "Share feedback about your rental or real estate experience with Behzad Fard and Key to GTA.",
};

export default function ReviewPage() {
  return (
    <main className="relative isolate flex h-[100svh] min-h-[100svh] items-center justify-center overflow-hidden bg-[#050816] px-4 py-1.5 text-[#f8fafc] sm:py-3">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_88%_8%,rgba(214,179,106,0.26),transparent_34%),radial-gradient(ellipse_at_10%_88%,rgba(72,111,205,0.24),transparent_38%),radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.06),transparent_32%),linear-gradient(145deg,#050816_0%,#0b1020_48%,#05070f_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle_at_14px_18px,rgba(248,250,252,0.48)_1px,transparent_1.4px)] [background-size:52px_52px]" />

      <section
        aria-labelledby="review-heading"
        className="relative h-[calc(100svh-12px)] max-h-[680px] w-full max-w-[1180px] overflow-hidden rounded-[28px] border border-[#d6b36a]/25 bg-[#070e1b]/82 px-4 py-2.5 shadow-[0_28px_90px_rgba(0,0,0,0.58),0_0_42px_rgba(214,179,106,0.14),0_0_38px_rgba(72,111,205,0.20),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl sm:h-[calc(100svh-24px)] sm:px-6 sm:py-4 lg:px-10 lg:py-5"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(214,179,106,0.14),transparent_26%),radial-gradient(circle_at_12%_90%,rgba(72,111,205,0.15),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))]" />

        <div className="relative z-20 flex h-full min-h-0 flex-col overflow-y-auto lg:w-[58%]">
          <header className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#d6b36a]/25 bg-white/[0.06] text-sm font-bold text-[#f0c76a] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_22px_rgba(214,179,106,0.14)] sm:h-10 sm:w-10 sm:text-base">
                K
              </span>
              <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
                Key to GTA
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-[0.65rem] font-semibold text-[#e2e8f0] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
              <span aria-hidden="true" className="text-[#f0c76a]">
                ⭐
              </span>
              Client Feedback
            </span>
          </header>

          <div className="mt-1.5 max-w-2xl sm:mt-2.5 lg:mt-3">
            <div
              aria-hidden="true"
              className="mb-0.5 flex items-center gap-1 text-base leading-none text-[#f0c76a] sm:mb-1 sm:text-xl"
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <h1
              id="review-heading"
              className="text-[1.4rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[clamp(1.7rem,6vw,2.5rem)] sm:leading-[0.98] lg:text-4xl xl:text-5xl"
            >
              Thank you for trusting{" "}
              <span className="bg-gradient-to-br from-[#fff0b8] via-[#f0c76a] to-[#9f7436] bg-clip-text text-transparent">
                Behzad Fard
              </span>
            </h1>
            <p className="mt-1 max-w-[38rem] text-xs leading-4 text-[#d9e2ef] sm:mt-1.5 sm:text-sm sm:leading-5 lg:text-[0.95rem]">
              Your feedback helps other GTA renters and newcomers make more
              confident rental decisions. Key to GTA helps renters understand
              realistic areas, prepare stronger applications, and move forward
              with a smarter rental plan.
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:mt-3 sm:flex-row sm:gap-4">
            <a
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-[#f0c76a] px-6 text-sm font-bold text-[#09111d] shadow-[0_0_34px_rgba(240,199,106,0.36)] transition hover:bg-[#ffd978] hover:shadow-[0_0_46px_rgba(240,199,106,0.48)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0c76a] sm:h-10 sm:px-7"
              href={GOOGLE_REVIEW_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true">⭐</span>
              Leave a Google Review
            </a>
          </div>

          <div className="mt-2 shrink-0 sm:mt-3">
            <p className="border-t border-white/10 pt-1 text-center text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#f0c76a]/90 sm:pt-1.5 sm:text-[0.68rem] sm:tracking-[0.3em]">
              REVIEW GUIDE
            </p>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:mt-2 sm:grid-cols-3 sm:gap-2">
              {reviewCards.map((card) => (
                <article
                  className="h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_34px_rgba(0,0,0,0.18)] first:col-span-2 sm:h-16 sm:px-2.5 sm:py-1.5 sm:first:col-span-1"
                  key={card.number}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold leading-none text-[#f0c76a] sm:text-lg">
                      {card.number}
                    </span>
                    <h2 className="text-xs font-bold text-white sm:text-sm">{card.title}</h2>
                  </div>
                  <p className="mt-0.5 text-[0.66rem] leading-[0.95rem] text-[#cbd5e1] sm:mt-1 sm:text-[0.78rem] sm:leading-4">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <footer className="mt-1.5 flex shrink-0 flex-col items-center justify-center gap-1 pt-1 text-center text-[0.7rem] text-[#d9e2ef] sm:mt-2 sm:pt-1.5 sm:text-xs">
            <span className="text-[#f0c76a]" aria-hidden="true">
              👥
            </span>
            <p>
              Know someone looking for a rental in the GTA?{" "}
              <span className="hidden text-white/30 sm:inline">| </span>
              <button
                className="inline-block font-semibold text-[#f0c76a] underline decoration-[#f0c76a]/40 underline-offset-2 transition hover:scale-105 hover:text-[#ffd978] hover:drop-shadow-[0_0_10px_rgba(240,199,106,0.45)]"
                id="share-keytogta-button"
                type="button"
              >
                Share KeyToGTA.ca
              </button>
            </p>
          </footer>

          <p className="mt-1 shrink-0 text-center text-[0.55rem] leading-tight text-white/35 sm:text-[0.6rem]">
            We use Google Analytics and Microsoft Clarity to improve this site. See our{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-white/55">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{ __html: SHARE_BUTTON_SCRIPT }}
        suppressHydrationWarning
      />
    </main>
  );
}
