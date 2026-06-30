"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbg8YRGDp26w8oqqqWHIMCXbtawrTYDFueB8si3IZogL_Kxu5q292OUHhonRqeEXQsf1N68/exec";
const GOOGLE_REVIEW_URL = "https://g.page/r/CT0t57nXoY6rEAI/review";

type RentalForm = {
  name: string;
  phone: string;
  email: string;
  area: string;
  moveIn: string;
  budget: string;
  income: string;
  credit: string;
  parking: string;
  applicants: string;
  paystubs: string;
  jobLetter: string;
  creditReport: string;
};

const areaLinks = [
  {
    name: "North York",
    href: "/rent/north-york",
    description: "Subway access, condo lifestyle, Bayview Village, Finch, Sheppard.",
    image: "/north-york.jpg",
    tag: "Best for TTC access",
    rent: "$2,200 - $3,200+",
    score: "92",
  },
  {
    name: "Vaughan",
    href: "/rent/vaughan",
    description: "VMC, newer condos, parking, Highway 400/407 access.",
    image: "/vaughan.jpg",
    tag: "Best for newer condos",
    rent: "$2,300 - $3,400+",
    score: "88",
  },
  {
    name: "Richmond Hill",
    href: "/rent/richmond-hill",
    description: "Quiet communities, parking, family-friendly rental options.",
    image: "/richmond-hill.jpg",
    tag: "Best for quiet living",
    rent: "$2,300 - $3,500+",
    score: "84",
  },
  {
    name: "Markham",
    href: "/rent/markham",
    description: "Downtown Markham, Unionville, newer buildings, York Region access.",
    image: "/markham.jpg",
    tag: "Best for lifestyle balance",
    rent: "$2,300 - $3,500+",
    score: "86",
  },
  {
    name: "Scarborough",
    href: "/rent/scarborough",
    description: "Value-focused options, transit access, practical GTA rentals.",
    image: "/scarborough.jpg",
    tag: "Best for value options",
    rent: "$2,000 - $3,000+",
    score: "82",
  },
];

const reviews = [
  {
    name: "Pearlhassan STR",
    area: "Google Review",
    quote:
      "Working with Behzad was an absolute pleasure. He was incredibly thorough, patient, and proactive, and made the process feel simple and well-organized.",
    initials: "P",
  },
  {
    name: "Niloo Farahani",
    area: "Google Review",
    quote:
      "He is very professional, polite, attentive, and responsive. He gave me accurate information and, with great patience and care, found a suitable home for me.",
    initials: "N",
  },
  {
    name: "Nicole Falogme",
    area: "Google Review",
    quote:
      "Behzad is very helpful and accommodating. He is very knowledgeable and always there to guide you through the journey of finding a rental home.",
    initials: "NF",
  },
  {
    name: "J D",
    area: "Google Review",
    quote:
      "Great agent, 100% effort and quick response time. He genuinely cares about helping.",
    initials: "JD",
  },
  {
    name: "Anish Vijayanadhan",
    area: "Google Review",
    quote:
      "I had an excellent experience working with Behzad throughout my condo search. He took the time to understand my budget and preferred location.",
    initials: "AV",
  },
];

const faqs = [
  {
    question: "Do I need documents before viewing?",
    answer:
      "Not always, but having your application, ID, pay stubs, employment letter, and Equifax report ready helps you move faster when the right unit appears.",
  },
  {
    question: "Why review my profile first?",
    answer:
      "It helps avoid wasting time on units where the landlord may not approve the application based on income, credit, move-in date, or missing documents.",
  },
  {
    question: "Can you help in different GTA areas?",
    answer:
      "Yes. I can help compare areas like North York, Vaughan, Richmond Hill, Markham, and Scarborough based on budget, parking, transit, and lifestyle.",
  },
  {
    question: "Do you help buyers too?",
    answer:
      "Yes. Buyer support can include budget, pre-approval, down payment, preferred area, property type, shortlist, showings, and offer strategy.",
  },
];

function FieldLabel({
  label,
  children,
  wide = false,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={`grid gap-2 text-sm font-semibold ${wide ? "md:col-span-2" : ""}`}>
      {label}
      {children}
    </label>
  );
}

export default function Home() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const [form, setForm] = useState<RentalForm>({
    name: "",
    phone: "",
    email: "",
    area: "North York",
    moveIn: "0-30 days",
    budget: "",
    income: "",
    credit: "",
    parking: "Yes",
    applicants: "1",
    paystubs: "Yes",
    jobLetter: "Yes",
    creditReport: "Yes",
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  function updateField(field: keyof RentalForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const scorePreview = useMemo(() => {
    const budget = Number(form.budget || 0);
    const income = Number(form.income || 0);
    const credit = Number(form.credit || 0);

    let score = 50;

    if (credit >= 760) score += 20;
    else if (credit >= 700) score += 15;
    else if (credit >= 650) score += 8;

    if (budget > 0 && income >= budget * 3) score += 20;
    else if (budget > 0 && income >= budget * 2.5) score += 15;
    else if (budget > 0 && income >= budget * 2) score += 8;

    if (form.paystubs === "Yes") score += 5;
    if (form.jobLetter === "Yes") score += 5;
    if (form.creditReport === "Yes") score += 5;
    if (form.parking === "Yes") score += 3;

    return Math.min(score, 100);
  }, [form]);

  const resultPreview =
    scorePreview >= 82
      ? "Strong Match"
      : scorePreview >= 65
        ? "Good Match"
        : "Needs Review";

  const featuredReview = reviews[activeReview];
  const secondaryReviews = [
    reviews[(activeReview + 1) % reviews.length],
    reviews[(activeReview + 2) % reviews.length],
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    const payload = {
      ...form,
      leadSource: "Key to GTA Website",
      clientType: "Renter",
      matchType: "Rental Match",
      score: String(scorePreview),
      result: resultPreview,
      priority: scorePreview >= 82 ? "High" : scorePreview >= 65 ? "Medium" : "Review",
      nextAction:
        scorePreview >= 82
          ? "Strong profile. Contact quickly and prepare shortlist/viewing options."
          : "Review details before booking viewings.",
      notes: "Website rental match lead",
      status: "New Lead",
      followUpStage: "Initial",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("Your rental match request was received. Behzad will review it and follow up.");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="premium-bg min-h-screen overflow-hidden text-white">
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

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09111F]/78 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Key <span className="font-normal text-white/70">to</span>{" "}
            <span className="text-[#D8C7AA]">GTA</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="#areas" className="hover:text-white">Areas</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#rental-match" className="hover:text-white">Rental Match</a>
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

      <section className="relative px-6 pb-10 pt-10 md:pb-16 md:pt-16">
        <div className="absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-transparent via-[#F5C979]/35 to-transparent" />
        <div className="absolute left-[-12rem] top-0 h-[35rem] w-[35rem] rounded-full bg-[#D8C7AA]/14 blur-3xl" />
        <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[#4C7793]/18 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[20%] h-[26rem] w-[26rem] rounded-full bg-[#F5C979]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="pt-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              <span className="text-[#F5C979]">🔑</span>
              GTA Rental Decision Assistant
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl">
              Find realistic rental options before{" "}
              <span className="bg-gradient-to-r from-[#F8DCA6] to-[#D8A94F] bg-clip-text text-transparent">
                wasting time on viewings.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              A smarter way to search in the GTA: profile review, document readiness,
              realistic area guidance, and fast lead follow-up through a connected CRM system.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#rental-match"
                className="rounded-full bg-[#F5C979] px-7 py-4 text-center font-bold text-[#070A12] shadow-[0_0_35px_rgba(245,201,121,.25)] transition hover:scale-[1.03]"
              >
                Check My Rental Match →
              </a>

              <a
                href="#areas"
                className="rounded-full border border-white/18 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
              >
                📍 Explore Areas
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-[#F5C979]">🌐</p>
                <h3 className="mt-2 font-bold">Newcomer-friendly</h3>
                <p className="text-sm text-white/55">Guidance you can trust</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-[#F5C979]">⚡</p>
                <h3 className="mt-2 font-bold">Fast response</h3>
                <p className="text-sm text-white/55">We act quickly</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="text-[#F5C979]">📊</p>
                <h3 className="mt-2 font-bold">Data-driven</h3>
                <p className="text-sm text-white/55">Real insights, real results</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.6fr]">
            <div className="relative">
              <div className="float-slow relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] shadow-2xl">
                <img
                  src="/hero-condo.jpg"
                  alt="GTA condo living"
                  className="h-[29rem] w-full object-cover opacity-90"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
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
                <p className="font-bold">👥 Priority Matches</p>
                <p className="text-sm text-white/60">New leads matched in real-time</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="glass-card rounded-[2rem] p-5">
                <h3 className="text-lg font-bold">Real Estate Workflow</h3>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-white/65">
                  <div className="rounded-2xl bg-white/[0.07] p-3">
                    <p className="text-2xl">📄</p>
                    <p className="mt-2">Profile Review</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.07] p-3">
                    <p className="text-2xl">✅</p>
                    <p className="mt-2">Docs Ready</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.07] p-3">
                    <p className="text-2xl">🎯</p>
                    <p className="mt-2">Area Match</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  <span className="soft-pulse mr-2 inline-block h-2 w-2 rounded-full bg-green-400" />
                  Connected CRM
                </p>
              </div>

              <div className="glass-card shine rounded-[2rem] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5C979]">
                  Smart Lead System
                </p>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs text-white/50">Website form</p>
                    <h3 className="text-xl font-bold">Rental Match</h3>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs text-white/50">CRM</p>
                    <h3 className="text-xl font-bold">Google Sheet ✓</h3>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs text-white/50">Instant alert</p>
                    <h3 className="text-xl font-bold">Telegram Alerts</h3>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-6 text-center">
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-[#F5C979]/60 bg-white/[0.08]">
                  <img
                    src="/behzad.jpg"
                    alt="Behzad Fard"
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#F5C979]">Behzad Fard</h3>
                <p className="text-sm text-white/65">Founder & Real Estate Advisor</p>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  Helping newcomers and tenants make confident rental decisions across the GTA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-8 grid max-w-7xl gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass-card rounded-[2rem] p-5">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-bold">⭐ Real Google Reviews</h2>
              <p className="font-semibold text-[#F5C979]">5-star feedback</p>
              <p className="text-sm text-white/55">verified client reviews</p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="ml-auto rounded-full border border-[#F5C979]/30 px-4 py-2 text-sm text-[#F5C979] hover:bg-[#F5C979]/10"
              >
                Google Reviews →
              </a>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div
                key={featuredReview.name}
                className="review-featured rounded-[1.75rem] border border-[#F5C979]/25 bg-gradient-to-br from-white/[0.09] to-white/[0.035] p-6 shadow-[0_0_55px_rgba(245,201,121,.10)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[#F5C979]">★★★★★</p>
                  <span className="rounded-full border border-[#F5C979]/25 bg-[#F5C979]/10 px-3 py-1 text-xs font-semibold text-[#F5C979]">
                    Verified Google Review
                  </span>
                </div>

                <p className="mt-5 text-lg leading-8 text-white/82">
                  “{featuredReview.quote}”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5C979] text-base font-black text-[#070A12]">
                    {featuredReview.initials}
                  </div>
                  <div>
                    <p className="text-lg font-bold">{featuredReview.name}</p>
                    <p className="text-sm text-white/45">{featuredReview.area}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {secondaryReviews.map((review) => (
                  <button
                    key={review.name}
                    type="button"
                    onClick={() => setActiveReview(reviews.findIndex((item) => item.name === review.name))}
                    className="review-mini rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 text-left"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-[#F5C979]">★★★★★</p>
                      <span className="text-xs text-white/35">Next</span>
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/65">
                      “{review.quote}”
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-[#F5C979]">
                        {review.initials}
                      </div>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-white/40">{review.area}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  aria-label={`Show review ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    activeReview === index ? "w-8 bg-[#F5C979]" : "w-2 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            <div className="glass-card rounded-[2rem] p-5 text-center">
              <p className="text-3xl text-[#F5C979]">🌐</p>
              <h3 className="mt-3 text-2xl font-black text-[#F5C979]">5+</h3>
              <p className="font-semibold">GTA Area Guides</p>
              <p className="mt-2 text-xs text-white/55">Local insights that help renters decide smarter.</p>
            </div>
            <div className="glass-card rounded-[2rem] p-5 text-center">
              <p className="text-3xl text-[#F5C979]">⚡</p>
              <h3 className="mt-3 text-2xl font-black text-[#F5C979]">Instant</h3>
              <p className="font-semibold">Telegram Alerts</p>
              <p className="mt-2 text-xs text-white/55">Be first to know about new rental matches.</p>
            </div>
            <div className="glass-card rounded-[2rem] p-5 text-center">
              <p className="text-3xl text-[#F5C979]">📈</p>
              <h3 className="mt-3 text-2xl font-black text-[#F5C979]">CRM</h3>
              <p className="font-semibold">Tracking</p>
              <p className="mt-2 text-xs text-white/55">Every lead tracked. Every follow-up matters.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="relative px-6 pb-24">
        <div className="absolute left-[-18rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[#F5C979]/10 blur-3xl" />
        <div className="absolute right-[-16rem] bottom-10 h-[26rem] w-[26rem] rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#F5C979]/25 bg-[#F5C979]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F5C979]">
                Interactive Area Guide
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
                Area Guides
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Match your profile with the right GTA area.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <p className="leading-8 text-white/65">
                Compare lifestyle, budget, transit, parking, and approval strategy before you waste time on showings.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-xl">📍</p>
                  <p className="mt-2 text-sm font-bold">Local fit</p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-xl">💰</p>
                  <p className="mt-2 text-sm font-bold">Budget range</p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-xl">✅</p>
                  <p className="mt-2 text-sm font-bold">Approval strategy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {areaLinks.map((area, index) => (
              <Link
                key={area.href}
                href={area.href}
                className="area-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]"
              >
                <div className="relative h-44 bg-gradient-to-br from-white/10 to-[#D8C7AA]/10">
                  <img
                    src={area.image}
                    alt={`${area.name} rental area`}
                    className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/20 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#09111F]/80 px-3 py-1 text-xs font-bold backdrop-blur">
                    0{index + 1}
                  </div>

                  <div className="area-glow absolute right-4 top-4 rounded-full border border-[#F5C979]/30 bg-[#F5C979]/15 px-3 py-1 text-xs font-bold text-[#F5C979] backdrop-blur">
                    Score {area.score}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5C979]">
                      {area.tag}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-black">{area.name}</h3>

                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                    <p className="text-xs text-white/45">Estimated rental range</p>
                    <p className="mt-1 font-bold text-[#F5C979]">{area.rent}</p>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/65">{area.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-semibold text-[#F5EBDD]">View guide</p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5C979] text-[#070A12] transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C979]">
                  Next step
                </p>
                <p className="mt-2 text-white/65">
                  Not sure which area fits your budget and approval strength? Start with the Rental Match tool.
                </p>
              </div>

              <a
                href="#rental-match"
                className="rounded-full bg-[#F5C979] px-6 py-3 text-center font-bold text-[#070A12]"
              >
                Check My Area Match →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#F5EBDD] p-8 text-[#070A12] md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            Process
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">A cleaner way to search for rentals</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-black/5 p-6">
              <p className="mb-4 text-sm font-semibold text-[#6E6254]">Step 01</p>
              <h3 className="text-xl font-bold">Profile first</h3>
              <p className="mt-3 leading-7 text-[#3D352D]">
                Move-in date, budget, income, credit, parking, occupants, and document readiness are reviewed before wasting time.
              </p>
            </div>

            <div className="rounded-2xl bg-black/5 p-6">
              <p className="mb-4 text-sm font-semibold text-[#6E6254]">Step 02</p>
              <h3 className="text-xl font-bold">Realistic shortlist</h3>
              <p className="mt-3 leading-7 text-[#3D352D]">
                Options are filtered based on what can actually work for your profile, not just what looks good online.
              </p>
            </div>

            <div className="rounded-2xl bg-black/5 p-6">
              <p className="mb-4 text-sm font-semibold text-[#6E6254]">Step 03</p>
              <h3 className="text-xl font-bold">Stronger application</h3>
              <p className="mt-3 leading-7 text-[#3D352D]">
                Pay stubs, job letter, Equifax, ID, and offer strategy are prepared before submitting to the landlord.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Services
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Support for renters, buyers, and newcomers</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
              <h3 className="text-2xl font-bold">Rental Match</h3>
              <p className="mt-4 leading-7 text-white/65">
                Review budget, area, move-in timeline, documents, and approval strength before applying.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
              <h3 className="text-2xl font-bold">Buyer Consultation</h3>
              <p className="mt-4 leading-7 text-white/65">
                Discuss pre-approval, down payment, target area, property type, shortlist, and offer strategy.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
              <h3 className="text-2xl font-bold">Newcomer Guidance</h3>
              <p className="mt-4 leading-7 text-white/65">
                Understand documents, landlord expectations, area options, and realistic next steps in the GTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="rental-match" className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
              Rental Match
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">Check your rental match</h2>

            <p className="mt-5 leading-8 text-white/70">
              Fill this out and I’ll review your profile before we move forward with listings, viewings, or application strategy.
            </p>

            <div className="mt-8 rounded-2xl bg-white/[0.06] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Live Preview</p>
              <p className="mt-3 text-4xl font-bold text-[#F5EBDD]">{scorePreview}/100</p>
              <p className="mt-2 text-white/70">{resultPreview}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-bold">Documents that usually help</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Rental application, government ID, 2-3 pay stubs, employment letter, full Equifax report, and proof of funds when needed.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-[#F5EBDD] p-6 text-[#070A12] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <FieldLabel label="Full Name">
                <input
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </FieldLabel>

              <FieldLabel label="Phone Number">
                <input
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </FieldLabel>

              <FieldLabel label="Email Address" wide>
                <input
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </FieldLabel>

              <FieldLabel label="Preferred Area">
                <select
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  value={form.area}
                  onChange={(e) => updateField("area", e.target.value)}
                >
                  <option>North York</option>
                  <option>Vaughan</option>
                  <option>Richmond Hill</option>
                  <option>Markham</option>
                  <option>Scarborough</option>
                </select>
              </FieldLabel>

              <FieldLabel label="Move-in Timeline">
                <select
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  value={form.moveIn}
                  onChange={(e) => updateField("moveIn", e.target.value)}
                >
                  <option>0-30 days</option>
                  <option>30-60 days</option>
                  <option>60+ days</option>
                </select>
              </FieldLabel>

              <FieldLabel label="Monthly Budget">
                <input
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  placeholder="Example: 2800"
                  value={form.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                />
              </FieldLabel>

              <FieldLabel label="Monthly Income">
                <input
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  placeholder="Example: 7500"
                  value={form.income}
                  onChange={(e) => updateField("income", e.target.value)}
                />
              </FieldLabel>

              <FieldLabel label="Credit Score">
                <input
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  placeholder="Example: 720"
                  value={form.credit}
                  onChange={(e) => updateField("credit", e.target.value)}
                />
              </FieldLabel>

              <FieldLabel label="Parking Needed?">
                <select
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  value={form.parking}
                  onChange={(e) => updateField("parking", e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </FieldLabel>

              <FieldLabel label="Number of Applicants">
                <select
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  value={form.applicants}
                  onChange={(e) => updateField("applicants", e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>
              </FieldLabel>

              <FieldLabel label="Pay Stubs Ready?">
                <select
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  value={form.paystubs}
                  onChange={(e) => updateField("paystubs", e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </FieldLabel>

              <FieldLabel label="Job Letter Ready?">
                <select
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  value={form.jobLetter}
                  onChange={(e) => updateField("jobLetter", e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </FieldLabel>

              <FieldLabel label="Equifax Report Ready?">
                <select
                  className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                  value={form.creditReport}
                  onChange={(e) => updateField("creditReport", e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </FieldLabel>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-2xl bg-[#070A12] px-6 py-4 font-semibold text-white disabled:opacity-60 md:col-span-2"
              >
                {isSubmitting ? "Sending..." : "Check My Rental Match"}
              </button>
            </div>

            {status && (
              <p className="mt-5 rounded-2xl bg-black/5 p-4 text-sm font-medium">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="faq" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#F5EBDD] p-8 text-[#070A12] md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6E6254]">
            FAQ
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Common rental questions</h2>

          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-black/5 p-5">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-[#3D352D]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
                Contact
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Need help finding a rental?</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                Send your rental details and I’ll help you understand your options, documents, and next steps.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-6">
              <p className="text-sm text-white/50">Email</p>
              <p className="mt-2 break-all text-xl font-bold">behzadfard.realtor@gmail.com</p>

              <a
                href="#rental-match"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#F5EBDD] px-6 py-4 font-semibold text-[#070A12]"
              >
                Start Rental Match
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Key to GTA. Rental and buyer guidance across the GTA.</p>
          <p>Built for renters, buyers, and newcomers looking for a clearer next step.</p>
        </div>
      </footer>

      <a
        href="#rental-match"
        className="fixed bottom-5 left-5 right-5 z-50 rounded-2xl bg-[#F5C979] px-6 py-4 text-center font-semibold text-[#070A12] shadow-2xl md:hidden"
      >
        Check My Rental Match
      </a>
    </main>
  );
}
