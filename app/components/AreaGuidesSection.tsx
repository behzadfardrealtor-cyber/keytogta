import Link from "next/link";
import { areaLinks } from "../home-page-data";
import ImageWithFallback from "./ImageWithFallback";

export default function AreaGuidesSection() {
  return (
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

            <div className="rounded-[2rem] border border-white/12 bg-white/[0.045] p-6">
              <p className="leading-8 text-white/65">
                Compare lifestyle, budget, transit, parking, and approval strategy before you waste time on showings.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/[0.07] p-4">
                  <p className="text-xl">📍</p>
                  <p className="mt-2 text-sm font-bold">Local fit</p>
                </div>
                <div className="rounded-2xl bg-white/[0.07] p-4">
                  <p className="text-xl">💰</p>
                  <p className="mt-2 text-sm font-bold">Budget range</p>
                </div>
                <div className="rounded-2xl bg-white/[0.07] p-4">
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
                className="area-card group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06]"
              >
                <div className="relative h-44 bg-gradient-to-br from-white/10 to-[#D8C7AA]/10">
                  <ImageWithFallback
                    src={area.image}
                    alt={`${area.name} rental area`}
                    fill
                    sizes="(min-width: 768px) 20vw, 100vw"
                    className="object-cover opacity-85 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
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

                  <div className="mt-3 rounded-2xl border border-white/12 bg-white/[0.045] p-3">
                    <p className="text-xs text-white/55">Estimated rental range</p>
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

          <div className="mt-8 rounded-[2rem] border border-white/12 bg-white/[0.045] p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C979]">
                  Next step
                </p>
                <p className="mt-2 text-white/65">
                  Not sure which area fits your budget and approval strength?
                  Start with the Rental Readiness tool, or review our{" "}
                  <Link
                    href="/rental-documents/checklist-ontario"
                    className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
                  >
                    Ontario rental application checklist
                  </Link>{" "}
                  to see what documents you'll need.
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
  );
}
