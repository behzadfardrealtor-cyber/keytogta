import Link from "next/link";
import { areaLinks } from "../home-page-data";
import ImageWithFallback from "./ImageWithFallback";

export default function AreaGuidesSection() {
  return (
      <section id="areas" className="relative px-6 pb-24">
        <div className="absolute left-[-18rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[#DCE8E3]/70 blur-3xl" />
        <div className="absolute right-[-16rem] bottom-10 h-[26rem] w-[26rem] rounded-full bg-white/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#2F6F6B]/20 bg-[#DCE8E3] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F6B]">
                Interactive Area Guide
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
                Area Guides
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Match your profile with the right GTA area.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-[#E8E4DD] bg-white/82 p-6 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
              <p className="leading-8 text-[#17313A]/68">
                Compare lifestyle, budget, transit, parking, and approval strategy before you waste time on showings.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#DCE8E3] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F6F6B]">01</p>
                  <p className="mt-2 text-sm font-bold">Local fit</p>
                </div>
                <div className="rounded-2xl bg-[#DCE8E3] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F6F6B]">02</p>
                  <p className="mt-2 text-sm font-bold">Budget range</p>
                </div>
                <div className="rounded-2xl bg-[#DCE8E3] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F6F6B]">03</p>
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
                className="area-card group relative overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white"
              >
                <div className="relative h-44 bg-gradient-to-br from-white to-[#DCE8E3]">
                  <ImageWithFallback
                    src={area.image}
                    alt={`${area.name} rental area`}
                    fill
                    quality={60}
                    sizes="(min-width: 768px) 20vw, 100vw"
                    className="object-cover opacity-85 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17313A]/88 via-[#17313A]/18 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/88 px-3 py-1 text-xs font-bold text-[#17313A] backdrop-blur">
                    0{index + 1}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                      {area.tag}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-black">{area.name}</h3>

                  <div className="mt-3 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-3">
                    <p className="text-xs text-[#17313A]/56">Estimated rental range</p>
                    <p className="mt-1 font-bold text-[#2F6F6B]">{area.rent}</p>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#17313A]/66">{area.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-semibold text-[#17313A]">View guide</p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F6F6B] text-white transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#E8E4DD] bg-white/86 p-5 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2F6F6B]">
                  Next step
                </p>
                <p className="mt-2 text-[#17313A]/66">
                  Not sure which area fits your budget and approval strength?
                  Start with the Rental Readiness tool, or review my{" "}
                  <Link
                    href="/rental-documents/checklist-ontario"
                    className="text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                  >
                    Ontario rental application checklist
                  </Link>{" "}
                  to see what documents you'll need.
                </p>
              </div>

              <a
                href="#rental-match"
                className="rounded-full bg-[#2F6F6B] px-6 py-3 text-center font-bold text-white transition hover:bg-[#17313A]"
              >
                Get My Rental Shortlist →
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
