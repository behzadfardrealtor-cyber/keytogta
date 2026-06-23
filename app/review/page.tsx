import type { Metadata } from "next";

const GOOGLE_REVIEW_LINK = "https://PASTE_YOUR_GOOGLE_REVIEW_LINK_HERE";
const WHATSAPP_REVIEW_NOTIFICATION_LINK =
  "https://wa.me/16470000000?text=Hi%20Behzad%2C%20I%20posted%20my%20review.";

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
    <main className="relative isolate flex h-[100svh] min-h-[100svh] items-center justify-center overflow-hidden bg-[#050816] px-4 py-4 text-[#f8fafc]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_88%_8%,rgba(214,179,106,0.26),transparent_34%),radial-gradient(ellipse_at_10%_88%,rgba(72,111,205,0.24),transparent_38%),radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.06),transparent_32%),linear-gradient(145deg,#050816_0%,#0b1020_48%,#05070f_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle_at_14px_18px,rgba(248,250,252,0.48)_1px,transparent_1.4px)] [background-size:52px_52px]" />

      <section
        aria-labelledby="review-heading"
        className="relative h-[calc(100svh-32px)] max-h-[680px] w-full max-w-[1180px] overflow-hidden rounded-[28px] border border-[#d6b36a]/25 bg-[#070e1b]/82 px-6 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.58),0_0_42px_rgba(214,179,106,0.14),0_0_38px_rgba(72,111,205,0.20),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-7"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(214,179,106,0.14),transparent_26%),radial-gradient(circle_at_12%_90%,rgba(72,111,205,0.15),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))]" />
        <img
          alt="Behzad Fard"
          className="pointer-events-none absolute bottom-0 right-2 z-0 hidden h-[78%] max-w-none object-contain object-right-bottom opacity-80 grayscale contrast-125 brightness-90 lg:block"
          src="/behzad-review-bg.jpg"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] bg-[linear-gradient(90deg,rgba(7,14,27,0.96)_0%,rgba(7,14,27,0.72)_34%,rgba(7,14,27,0.18)_70%,rgba(7,14,27,0)_100%)] lg:block" />
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-40 w-[48%] bg-[linear-gradient(0deg,rgba(7,14,27,0.92),rgba(7,14,27,0))] lg:block" />

        <div className="relative z-20 flex h-full min-h-0 flex-col lg:w-[58%]">
          <header className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6b36a]/25 bg-white/[0.06] text-base font-bold text-[#f0c76a] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_22px_rgba(214,179,106,0.14)]">
                K
              </span>
              <span className="text-base font-semibold tracking-tight text-white">
                Key to GTA
              </span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-[#e2e8f0] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span aria-hidden="true" className="text-[#f0c76a]">
                ⭐
              </span>
              Client Feedback
            </span>
          </header>

          <div className="mt-6 max-w-2xl lg:mt-7">
            <h1
              id="review-heading"
              className="text-[clamp(2.25rem,9vw,3.2rem)] font-semibold leading-[0.96] tracking-tight text-white lg:text-5xl xl:text-6xl"
            >
              Thank you for trusting{" "}
              <span className="bg-gradient-to-br from-[#fff0b8] via-[#f0c76a] to-[#9f7436] bg-clip-text text-transparent">
                Behzad Fard
              </span>
            </h1>
            <p className="mt-4 max-w-[38rem] text-sm leading-6 text-[#d9e2ef] sm:text-base lg:text-[1.02rem]">
              Your feedback helps other GTA renters and newcomers make more
              confident rental decisions. Key to GTA helps renters understand
              realistic areas, prepare stronger applications, and move forward
              with a smarter rental plan.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f0c76a] px-5 text-sm font-bold text-[#09111d] shadow-[0_0_34px_rgba(240,199,106,0.36)] transition hover:bg-[#ffd978] hover:shadow-[0_0_46px_rgba(240,199,106,0.48)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0c76a]"
              href={GOOGLE_REVIEW_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true">⭐</span>
              Leave a Google Review
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#486fcd]/20 bg-white/[0.055] px-5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(72,111,205,0.12)] transition hover:border-[#d6b36a]/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b36a]"
              href={WHATSAPP_REVIEW_NOTIFICATION_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <span aria-hidden="true">✓</span>
              I posted my review
            </a>
          </div>

          <div className="mt-5 min-h-0">
            <p className="border-t border-white/10 pt-3 text-center text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#f0c76a]/90">
              REVIEW GUIDE
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {reviewCards.map((card) => (
                <article
                  className="h-[88px] rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_34px_rgba(0,0,0,0.18)]"
                  key={card.number}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold leading-none text-[#f0c76a]">
                      {card.number}
                    </span>
                    <h2 className="text-sm font-bold text-white">{card.title}</h2>
                  </div>
                  <p className="mt-1.5 text-[0.78rem] leading-4 text-[#cbd5e1]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <footer className="mt-auto flex flex-col items-center justify-center gap-1.5 pt-4 text-center text-sm text-[#d9e2ef] sm:flex-row">
            <span className="text-[#f0c76a]" aria-hidden="true">
              👥
            </span>
            <p>
              Know someone looking for a rental in the GTA?{" "}
              <span className="hidden text-white/30 sm:inline">| </span>
              <span className="font-semibold text-[#f0c76a]">
                Share KeyToGTA.ca
              </span>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
