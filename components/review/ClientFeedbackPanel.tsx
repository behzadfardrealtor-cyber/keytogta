import type { ReactNode } from "react";

const GOOGLE_REVIEW_LINK = "https://g.page/r/CT0t57nXoY6rEAI/review";
const WHATSAPP_REVIEW_NOTIFICATION_LINK =
  "https://wa.me/16470000000?text=Hi%20Behzad%2C%20I%20posted%20my%20review.";
const PORTRAIT_SRC = "/behzad-review-bg.jpg";

type IconProps = {
  className?: string;
};

function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 2.9 6.2 6.7.8-4.9 4.6 1.3 6.6-6-3.3-5.9 3.3 1.2-6.6L2.4 9l6.7-.8L12 2Z" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function KeyHouseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m3.5 11 8.5-7 8.5 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M6.5 10.2V20h11v-9.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.7 15.2a3 3 0 1 1 2.1 2.9L10 20H8v-2h-2v-2h2.2a3 3 0 0 1 1.5-.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SpeechIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 6.5h14v9H9l-4 3v-12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function HouseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m4 11 8-6.5L20 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M6.5 10.5V20h11v-9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ThumbIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.5 20H5a1.5 1.5 0 0 1-1.5-1.5V12A1.5 1.5 0 0 1 5 10.5h2.5V20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M7.5 11 11 4.8c.7-1.2 2.5-.7 2.5.7v3.3H18a2 2 0 0 1 2 2.3l-1 6.8a2.5 2.5 0 0 1-2.5 2.1h-9V11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function UsersIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3.5 20a6 6 0 0 1 12 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M15.5 11.7a3 3 0 1 0-.8-5.9M17 14.2A5 5 0 0 1 20.5 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ReviewHeaderBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#f0c76a]/20 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-[#f8fafc]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] sm:px-4">
      <StarIcon className="h-3.5 w-3.5 text-[#f0c76a]" />
      Client Feedback
    </span>
  );
}

function CTAButton({
  children,
  href,
  icon,
  variant,
}: {
  children: ReactNode;
  href: string;
  icon: ReactNode;
  variant: "primary" | "secondary";
}) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:min-w-[210px] sm:px-6";
  const variantClasses =
    variant === "primary"
      ? "bg-[#f0c76a] text-[#08101c] shadow-[0_0_36px_rgba(240,199,106,0.38)] hover:bg-[#ffd978] hover:shadow-[0_0_48px_rgba(240,199,106,0.48)] focus-visible:outline-[#f0c76a]"
      : "border border-white/16 bg-white/[0.06] text-[#f8fafc] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(240,199,106,0.08)] hover:border-[#f0c76a]/45 hover:bg-white/[0.09] focus-visible:outline-[#d6b36a]";

  return (
    <a className={`${baseClasses} ${variantClasses}`} href={href} rel="noreferrer" target="_blank">
      {icon}
      {children}
    </a>
  );
}

function ReviewGuideCard({
  icon,
  number,
  prompt,
  title,
}: {
  icon: ReactNode;
  number: string;
  prompt: string;
  title: string;
}) {
  return (
    <article className="group h-full min-h-[128px] rounded-2xl border border-white/12 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_18px_42px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-[#f0c76a]/35 hover:bg-white/[0.085] xl:min-h-[136px] xl:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl font-semibold leading-none text-[#f0c76a]/90">
          {number}
        </span>
        <span className="rounded-full border border-[#f0c76a]/20 bg-[#f0c76a]/10 p-2 text-[#f0c76a]">
          {icon}
        </span>
      </div>
      <h3 className="mt-3 text-sm font-bold text-[#f8fafc]">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-5 text-[#cbd5e1]">
        {prompt}
      </p>
    </article>
  );
}

export default function ClientFeedbackPanel() {
  return (
    <section
      aria-labelledby="review-heading"
      className="relative grid w-full max-w-7xl grid-rows-[minmax(0,1fr)_auto_auto] overflow-hidden rounded-[2rem] border border-[#d6b36a]/25 bg-[#07101a]/78 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.55),0_0_55px_rgba(240,199,106,0.12),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md sm:rounded-[2.25rem] sm:p-7 lg:h-[min(820px,calc(100svh-48px))] lg:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(240,199,106,0.15),transparent_28%),radial-gradient(circle_at_8%_90%,rgba(72,111,205,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.016))]" />

      <div className="relative z-10 grid min-h-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(290px,0.62fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(330px,0.66fr)] xl:gap-10">
        <div>
          <header className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0c76a]/28 bg-[#f0c76a]/10 text-[#f0c76a] shadow-[0_0_28px_rgba(240,199,106,0.12)]">
                <KeyHouseIcon />
              </span>
              <span className="text-base font-semibold text-[#f8fafc] sm:text-lg">
                Key to GTA
              </span>
            </div>
            <ReviewHeaderBadge />
          </header>

          <div className="mt-8 max-w-2xl sm:mt-10 lg:mt-7">
            <h1
              id="review-heading"
              className="text-[clamp(2.35rem,7vw,4.4rem)] font-semibold leading-[0.98] tracking-tight text-[#f8fafc] sm:text-[clamp(3rem,5vw,4.8rem)] lg:text-[clamp(2.7rem,3.65vw,3.55rem)] xl:text-6xl"
            >
              Thank you for trusting{" "}
              <span className="bg-gradient-to-br from-[#fff3bd] via-[#f0c76a] to-[#9f7436] bg-clip-text text-[1.06em] text-transparent">
                Behzad Fard
              </span>
            </h1>
            <p className="mt-5 max-w-[36rem] text-base leading-7 text-[#d9e2ef] sm:text-lg lg:mt-5 lg:text-base lg:leading-7 xl:text-lg">
              Your feedback helps other GTA renters and newcomers make more
              confident rental decisions. Key to GTA helps renters understand
              realistic areas, prepare stronger applications, and move forward
              with a smarter rental plan.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-5 lg:mt-7 lg:gap-6">
            <CTAButton href={GOOGLE_REVIEW_LINK} icon={<StarIcon />} variant="primary">
              Leave a Google Review
            </CTAButton>
            <CTAButton
              href={WHATSAPP_REVIEW_NOTIFICATION_LINK}
              icon={<CheckIcon />}
              variant="secondary"
            >
              I posted my review
            </CTAButton>
          </div>
        </div>

        <aside
          className="relative min-h-48 overflow-hidden sm:min-h-56 lg:min-h-[380px] xl:min-h-[410px]"
          aria-label="Behzad Fard portrait"
        >
          <img
            alt="Behzad Fard"
            className="pointer-events-none absolute bottom-0 right-0 z-0 h-[92%] max-w-none object-contain object-right-bottom opacity-36 grayscale contrast-125 brightness-90 sm:opacity-44 lg:h-[96%] lg:opacity-72"
            src={PORTRAIT_SRC}
          />
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,16,26,0.98)_0%,rgba(7,16,26,0.6)_34%,rgba(7,16,26,0.16)_68%,rgba(7,16,26,0.02)_100%)]" />
          <p className="absolute bottom-6 right-2 z-10 rounded-full border border-[#f0c76a]/18 bg-[#07101a]/64 px-4 py-2 text-sm text-[#f0c76a] shadow-[0_0_28px_rgba(240,199,106,0.10)] backdrop-blur-sm">
            A few sentences is perfect
          </p>
        </aside>
      </div>

      <div className="relative z-10 mt-8 lg:mt-8 xl:mt-10">
        <p className="mb-4 border-t border-white/10 pt-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.32em] text-[#f0c76a]/90">
          REVIEW GUIDE
        </p>
        <div className="grid gap-4 sm:grid-cols-3 lg:gap-5 xl:gap-6">
          <ReviewGuideCard
            icon={<SpeechIcon />}
            number="01"
            prompt="What was your experience working with Behzad?"
            title="Experience"
          />
          <ReviewGuideCard
            icon={<HouseIcon />}
            number="02"
            prompt="How did he help during the rental or home search?"
            title="Help"
          />
          <ReviewGuideCard
            icon={<ThumbIcon />}
            number="03"
            prompt="Would you recommend him to others?"
            title="Recommend"
          />
        </div>
      </div>

      <footer className="relative z-10 mt-5 flex flex-col items-center justify-center gap-2 text-center text-sm text-[#d9e2ef] sm:flex-row lg:mt-6">
        <UsersIcon className="h-4 w-4 text-[#f0c76a]" />
        <p>
          Know someone looking for a rental in the GTA?{" "}
          <span className="font-semibold text-[#f0c76a]">Share KeyToGTA.ca</span>
        </p>
      </footer>
    </section>
  );
}
