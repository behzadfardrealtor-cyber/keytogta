import type { Metadata } from "next";
import Link from "next/link";
import AreaGuidesSection from "./components/AreaGuidesSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import ImageWithFallback from "./components/ImageWithFallback";
import { LazyRentalReadinessSection, LazyReviewsSection } from "./components/LazySections";
import ServicesSection from "./components/ServicesSection";

const GOOGLE_REVIEW_URL = "https://g.page/r/CT0t57nXoY6rEAI/review";

export const metadata: Metadata = {
  title: "Key to GTA | GTA Rental Shortlist & Rental Readiness Tool",
  description:
    "Get a curated GTA rental shortlist and check your Rental Readiness score before you apply. Compare North York, Vaughan, Richmond Hill, Markham, and Scarborough.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070A12] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/hero-skyline-bg.jpg')] bg-cover bg-center opacity-48"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_14%,rgba(245,201,121,0.20),transparent_30%),linear-gradient(90deg,rgba(7,10,18,0.82)_0%,rgba(7,10,18,0.68)_42%,rgba(7,10,18,0.52)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-1/2 bg-gradient-to-t from-[#070A12]/82 via-[#070A12]/52 to-transparent"
      />
      <div className="relative z-10">
      <style>{`
        .premium-bg {
          background:
            radial-gradient(circle at 18% 10%, rgba(245,201,121,.16), transparent 28rem),
            radial-gradient(circle at 82% 16%, rgba(76,119,147,.20), transparent 30rem),
            radial-gradient(circle at 50% 88%, rgba(245,201,121,.10), transparent 34rem),
            linear-gradient(135deg, #07111F 0%, #0B1728 38%, #111827 66%, #241B14 100%);
          position: relative;
        }
        .premium-bg:before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(circle at 50% 20%, black, transparent 75%);
        }
        .premium-bg:after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,255,255,.08), transparent 20rem),
            linear-gradient(180deg, transparent, rgba(0,0,0,.18));
          mix-blend-mode: screen;
          opacity: .55;
        }
        .premium-bg > * {
          position: relative;
          z-index: 1;
        }
        .soft-section {
          background:
            radial-gradient(circle at top left, rgba(245,201,121,.08), transparent 24rem),
            rgba(255,255,255,.035);
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatSide {
          0%, 100% { transform: translateX(0px) rotate(-2deg); }
          50% { transform: translateX(10px) rotate(2deg); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: .55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes reviewFadeUp {
          0% { opacity: 0; transform: translateY(16px) scale(.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .review-featured {
          animation: reviewFadeUp .65s ease both;
        }
        .review-mini {
          transition: transform .25s ease, background .25s ease, border-color .25s ease;
        }
        .review-mini:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,.08);
          border-color: rgba(245,201,121,.35);
        }
        @keyframes glowLine {
          0% { transform: translateX(-100%); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .float-slow { animation: floatSlow 5s ease-in-out infinite; }
        .float-side { animation: floatSide 6s ease-in-out infinite; }
        .soft-pulse { animation: softPulse 3s ease-in-out infinite; }

        @keyframes areaFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(.4deg); }
        }
        @keyframes areaGlow {
          0%, 100% { opacity: .55; }
          50% { opacity: 1; }
        }
        .area-card {
          transition: transform .35s ease, border-color .35s ease, background .35s ease, box-shadow .35s ease;
        }
        .area-card:hover {
          transform: translateY(-10px);
          border-color: rgba(245,201,121,.45);
          background: rgba(255,255,255,.085);
          box-shadow: 0 26px 80px rgba(0,0,0,.32), 0 0 45px rgba(245,201,121,.10);
        }
        .area-card:nth-child(1) { animation: areaFloat 6s ease-in-out infinite; }
        .area-card:nth-child(2) { animation: areaFloat 6.8s ease-in-out infinite; }
        .area-card:nth-child(3) { animation: areaFloat 7.4s ease-in-out infinite; }
        .area-card:nth-child(4) { animation: areaFloat 6.4s ease-in-out infinite; }
        .area-card:nth-child(5) { animation: areaFloat 7.1s ease-in-out infinite; }
        .area-glow { animation: areaGlow 3.5s ease-in-out infinite; }

        .glass-card {
          background:
            linear-gradient(145deg, rgba(255,255,255,.105), rgba(255,255,255,.04)),
            radial-gradient(circle at top left, rgba(245,201,121,.08), transparent 18rem);
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: 0 24px 80px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.08);
        }
        .shine {
          position: relative;
          overflow: hidden;
        }
        .shine:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 45%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent);
          animation: glowLine 5.5s ease-in-out infinite;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/12 bg-[#09111F]/78 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5C979]/25 bg-white/[0.06] text-base font-bold text-[#F5C979] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_22px_rgba(245,201,121,0.14)]">
              K
            </span>
            <span className="text-base font-semibold tracking-tight text-white">
              Key to GTA
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="#areas" className="hover:text-white">Areas</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#rental-match" className="hover:text-white">Rental Readiness</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="#rental-match"
            className="rounded-full bg-[#F5C979] px-6 py-3 text-sm font-semibold text-[#070A12] shadow-[0_0_35px_rgba(245,201,121,.22)] transition hover:scale-[1.03]"
          >
            Start →
          </a>
        </div>
      </header>

      <section className="relative px-6 pb-8 pt-4 md:pb-8 md:pt-5">
        <div className="absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-transparent via-[#F5C979]/35 to-transparent" />
        <div className="absolute left-[-12rem] top-0 h-[35rem] w-[35rem] rounded-full bg-[#D8C7AA]/14 blur-3xl" />
        <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[#4C7793]/18 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[20%] h-[26rem] w-[26rem] rounded-full bg-[#F5C979]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              <span className="text-[#F5C979]">🔑</span>
              CURATED GTA RENTALS - LICENSED AGENT
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              Stop scrolling. Get a GTA rental shortlist{" "}
              <span className="bg-gradient-to-r from-[#F8DCA6] to-[#D8A94F] bg-clip-text text-transparent">
                that actually fits.
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-6 text-white/70 md:text-lg">
              Tell us what you're looking for. The Key to GTA team hand-picks rentals that fit you and sends them over, so you don't have to search the whole market yourself. You pick, we do the legwork.
            </p>

            <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#rental-match"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#F5C979] px-8 py-4 text-center text-base font-extrabold text-[#070A12] shadow-[0_0_45px_rgba(245,201,121,.38)] ring-1 ring-[#F8DCA6]/70 transition hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5C979] sm:w-auto"
              >
                Get My Rental Shortlist →
              </a>

              <a
                href="#areas"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
              >
                📍 Explore Areas
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C979]">01</p>
                <h2 className="mt-2 font-bold">Profile Review</h2>
                <p className="text-sm text-white/55">Know where you stand</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C979]">02</p>
                <h2 className="mt-2 font-bold">Area Plan</h2>
                <p className="text-sm text-white/55">Focus on realistic areas</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C979]">03</p>
                <h2 className="mt-2 font-bold">Application Path</h2>
                <p className="text-sm text-white/55">Prepare before applying</p>
              </div>
            </div>

            <div className="glass-card mt-3 hidden rounded-2xl p-4 lg:grid lg:grid-cols-3 lg:gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">Private</p>
                <p className="mt-1 text-sm font-semibold text-white">Readiness clarity</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">Focused</p>
                <p className="mt-1 text-sm font-semibold text-white">GTA area strategy</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C979]">Prepared</p>
                <p className="mt-1 text-sm font-semibold text-white">Application path</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative">
              <div className="float-slow relative h-[19rem] w-full overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] shadow-2xl md:h-[22rem] lg:h-[18rem] xl:h-[20rem] 2xl:h-[22rem]">
                <ImageWithFallback
                  src="/hero-condo.jpg"
                  alt="GTA condo living"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-2xl bg-[#101827]/86 px-5 py-4 shadow-xl backdrop-blur">
                  <p className="text-sm text-white/60">⭐ Curated for</p>
                  <p className="font-bold">You</p>
                </div>

                <div className="absolute bottom-5 left-5 rounded-2xl bg-[#101827]/86 p-5 shadow-xl backdrop-blur">
                  <h3 className="text-xl font-bold">🏢 GTA Condo Living</h3>
                  <p className="mt-1 text-sm text-white/60">Find the right fit in the right area.</p>
                </div>

                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                  <span className="h-2 w-6 rounded-full bg-[#F5C979]" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                </div>
              </div>

              <div className="float-side absolute -bottom-5 right-[-1rem] rounded-2xl border border-[#F5C979]/35 bg-[#241B14]/90 p-4 shadow-[0_0_45px_rgba(245,201,121,.22)] backdrop-blur">
                <p className="font-bold">Rental plan note</p>
                <p className="text-sm text-white/60">Shortlist after profile review</p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6 text-center lg:flex lg:items-center lg:gap-4 lg:p-4 lg:text-left 2xl:block 2xl:p-6 2xl:text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-[#F5C979]/60 bg-white/[0.08] lg:mx-0 lg:h-20 lg:w-20 lg:shrink-0 2xl:mx-auto 2xl:h-28 2xl:w-28">
                <ImageWithFallback
                  src="/behzad.jpg"
                  alt="Behzad Fard"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mt-4 text-2xl font-bold text-[#F5C979] lg:mt-0 2xl:mt-4">Behzad Fard</h3>
                <p className="text-sm text-white/65">Founder & Real Estate Advisor</p>
                <p className="mt-3 text-sm leading-6 text-white/58 lg:mt-1 2xl:mt-3">
                  Helping newcomers and tenants make confident rental decisions across the GTA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <LazyReviewsSection />
      </section>

      <AreaGuidesSection />

      <ServicesSection />

      <LazyRentalReadinessSection />

      <FAQSection />

      <ContactSection />

      <FooterSection />
          </div>
</main>
  );
}
