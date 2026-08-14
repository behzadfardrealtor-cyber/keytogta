"use client";

import { useEffect, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

const HERO_IMAGES = [
  {
    src: "/hero-condo.jpg",
    alt: "GTA condo living",
    objectPosition: "center",
  },
  {
    src: "/hero-toronto-aerial.jpg",
    alt: "Aerial view of downtown Toronto skyline at sunset",
    objectPosition: "72% 38%",
  },
  {
    src: "/hero-towers-fog.jpg",
    alt: "Toronto towers rising into fog",
    objectPosition: "center 35%",
  },
];

const DISPLAY_MS = 5500;

export default function HeroImageSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, DISPLAY_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {HERO_IMAGES.map((image, index) => (
        <ImageWithFallback
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          fetchPriority={index === 0 ? "high" : "auto"}
          sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
          style={{ objectPosition: image.objectPosition }}
          className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
            index === activeIndex ? "opacity-90" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((image, index) => (
          <span
            key={image.src}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeIndex ? "w-6 bg-[#2F6F6B]" : "w-2 bg-white/65"
            }`}
          />
        ))}
      </div>
    </>
  );
}
