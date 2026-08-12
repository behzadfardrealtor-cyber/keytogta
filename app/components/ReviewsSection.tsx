"use client";

import { useEffect, useState } from "react";
import { reviews } from "../home-page-data";

const GOOGLE_REVIEW_URL = "https://g.page/r/CT0t57nXoY6rEAI/review";

export default function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const featuredReview = reviews[activeReview];
  const secondaryReviews = [
    reviews[(activeReview + 1) % reviews.length],
    reviews[(activeReview + 2) % reviews.length],
  ];

  return (
    <div className="relative mx-auto mt-8 grid max-w-7xl gap-4 lg:grid-cols-[1.4fr_1fr]">
      <div className="glass-card rounded-[2rem] p-5">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-bold">Real Google Reviews</h2>
          <p className="font-semibold text-[#2F6F6B]">5-star feedback</p>
          <p className="text-sm text-[#17313A]/56">Verified client reviews</p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded-full border border-[#2F6F6B]/30 px-4 py-2 text-sm text-[#2F6F6B] hover:bg-[#DCE8E3]"
          >
            Google Reviews →
          </a>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            key={featuredReview.name}
            className="review-featured rounded-[1.75rem] border border-[#2F6F6B]/20 bg-gradient-to-br from-white to-[#DCE8E3]/55 p-6 shadow-[0_22px_55px_rgba(23,49,58,.08)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[#2F6F6B]">★★★★★</p>
              <span className="rounded-full border border-[#2F6F6B]/20 bg-[#DCE8E3] px-3 py-1 text-xs font-semibold text-[#2F6F6B]">
                Verified Google Review
              </span>
            </div>

            <p className="mt-5 text-lg leading-8 text-[#17313A]/82">
              &quot;{featuredReview.quote}&quot;
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2F6F6B] text-base font-black text-white">
                {featuredReview.initials}
              </div>
              <div>
                <p className="text-lg font-bold">{featuredReview.name}</p>
                <p className="text-sm text-[#17313A]/58">{featuredReview.area}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {secondaryReviews.map((review) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveReview(reviews.findIndex((item) => item.name === review.name))}
                className="review-mini rounded-[1.5rem] border border-[#E8E4DD] bg-white p-5 text-left"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-[#2F6F6B]">★★★★★</p>
                  <span className="text-xs text-[#17313A]/55">Next</span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#17313A]/66">
                  &quot;{review.quote}&quot;
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCE8E3] text-xs font-bold text-[#2F6F6B]">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-[#17313A]/55">{review.area}</p>
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
              className="flex items-center justify-center p-2"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  activeReview === index ? "w-8 bg-[#2F6F6B]" : "w-2 bg-[#17313A]/25"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <div className="glass-card rounded-[2rem] p-5 text-center">
          <h3 className="text-2xl font-black text-[#2F6F6B]">5+</h3>
          <p className="font-semibold">GTA Area Guides</p>
          <p className="mt-2 text-xs text-[#17313A]/56">Local area guides for renters comparing budget, transit, and lifestyle.</p>
        </div>
        <div className="glass-card rounded-[2rem] p-5 text-center">
          <h3 className="text-2xl font-black text-[#2F6F6B]">Instant</h3>
          <p className="font-semibold">Fast Follow-Up</p>
          <p className="mt-2 text-xs text-[#17313A]/56">Quick review and next-step guidance after form submission.</p>
        </div>
      </div>
    </div>
  );
}
