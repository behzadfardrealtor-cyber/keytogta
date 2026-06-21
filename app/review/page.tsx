import type { Metadata } from "next";

const GOOGLE_REVIEW_LINK = "GOOGLE_REVIEW_LINK_HERE";
const WHATSAPP_REVIEW_NOTIFICATION_LINK =
  "https://wa.me/16470000000?text=Hi%20Behzad%2C%20I%20posted%20my%20review.";

const reviewPrompts = [
  {
    number: "01",
    label: "Experience",
    prompt: "What was your experience working with Behzad?",
  },
  {
    number: "02",
    label: "Help",
    prompt: "How did he help during the rental or home search?",
  },
  {
    number: "03",
    label: "Recommend",
    prompt: "Would you recommend him to others?",
  },
];

export const metadata: Metadata = {
  title: "Leave a Review | Key to GTA",
  description:
    "Share feedback about your rental or real estate experience with Behzad Fard and Key to GTA.",
};

export default function ReviewPage() {
  return (
    <main className="relative isolate h-[100svh] min-h-[100svh] overflow-hidden bg-[#03060c] px-3 py-3 text-white sm:px-4 sm:py-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(67,120,255,0.14),transparent_30%),radial-gradient(circle_at_84%_8%,rgba(243,198,119,0.12),transparent_25%),linear-gradient(145deg,#03060c_0%,#07101d_48%,#090b12_100%)]" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-[#3d76ff]/9 blur-2xl" />
      <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-[#f3c677]/8 blur-2xl" />

      <div className="mx-auto flex h-full w-full max-w-[1180px] items-center justify-center">
        <section className="relative grid h-[calc(100svh-24px)] max-h-[720px] w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-y-auto overflow-x-hidden rounded-[32px] border border-[#f3c677]/20 bg-[#07101a]/78 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.5),0_0_46px_rgba(83,135,255,0.08),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[6px] sm:h-[calc(100svh-32px)] sm:rounded-[36px] sm:p-5 lg:overflow-hidden lg:p-6 xl:p-7">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_84%_14%,rgba(243,198,119,0.1),transparent_26%),radial-gradient(circle_at_8%_88%,rgba(92,145,255,0.1),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.014))]" />
          <div
            className="absolute inset-y-0 right-0 -z-10 w-full opacity-30 grayscale contrast-125 brightness-75 sm:opacity-38 lg:opacity-46"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(7,16,26,0.96),rgba(7,16,26,0.56) 45%,rgba(7,16,26,0.18) 74%,rgba(7,16,26,0.22)),url('/behzad-review-bg.jpg')",
              backgroundPosition: "right top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 92%",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-[#07101a]/20" />

          <header className="relative z-10 flex items-center justify-between gap-3">
            <a className="flex min-w-0 items-center" href="/" aria-label="Key to GTA">
              <img
                alt="Key to GTA logo"
                className="h-10 w-auto bg-transparent object-contain mix-blend-normal sm:h-11 lg:h-14"
                src="/keytogta-logo.png"
              />
            </a>
            <span className="rounded-full border border-[#f3c677]/16 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/76 sm:px-4 sm:py-2 sm:text-sm">
              Client Feedback
            </span>
          </header>

          <div className="relative z-10 grid min-h-0 gap-4 pt-4 sm:pt-5 lg:grid-cols-[1fr_0.74fr] lg:items-center">
            <div className="max-w-2xl">
              <h1 className="text-[clamp(2rem,9vw,2.8rem)] font-semibold leading-[0.95] text-white sm:text-[clamp(2.2rem,4vw,3.8rem)]">
                Thank you for trusting{" "}
                <span className="text-[#f3c677]">Behzad Fard</span>
              </h1>
              <p className="mt-3 max-w-xl text-base leading-6 text-white/80 sm:text-[1.05rem] sm:leading-7 lg:max-w-lg">
                Your feedback helps other GTA renters and newcomers make more
                confident rental decisions.
              </p>

              <p className="mt-2.5 max-w-xl text-sm leading-6 text-white/72 sm:text-[0.95rem] sm:leading-6 lg:max-w-lg">
                Key to GTA helps renters understand realistic areas, prepare
                stronger applications, and move forward with a smarter rental
                plan.
              </p>

              <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:flex-row sm:gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[#f3c677] px-6 py-3 text-sm font-bold text-[#11100b] shadow-[0_18px_46px_rgba(243,198,119,0.2)] transition hover:bg-[#ffd98d] sm:px-6 sm:text-[0.95rem]"
                  href={GOOGLE_REVIEW_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
                  Leave a Google Review
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f3c677]/55 hover:text-[#f8d99b] sm:px-6 sm:text-[0.95rem]"
                  href={WHATSAPP_REVIEW_NOTIFICATION_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
                  I posted my review
                </a>
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true" />
          </div>

          <div className="relative z-10 mt-4 sm:mt-5">
            <p className="mb-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#f3c677]/86">
              Review Guide
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              {reviewPrompts.map((item) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-2.5 sm:p-3"
                  key={item.number}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#f3c677]">
                      {item.number}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.82rem] leading-5 text-white/72 sm:text-sm">
                    {item.prompt}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2.5 flex flex-col items-center justify-center gap-1.5 text-center text-sm leading-6 text-white/72 sm:flex-row sm:gap-2">
              <p>Know someone looking for a rental in the GTA?</p>
              <span className="hidden text-white/28 sm:inline">|</span>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#f3c677]/24 bg-[#f3c677]/10 px-3.5 py-1.5 text-xs font-bold text-[#f8d99b] transition hover:bg-[#f3c677]/16 hover:text-[#ffd98d]"
                href="https://keytogta.ca"
                rel="noreferrer"
                target="_blank"
              >
                Share KeyToGTA.ca
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
