import Link from "next/link";
import { notFound } from "next/navigation";

const areaPages = {
  "north-york": {
    name: "North York",
    title: "North York Condo Rentals",
    priceRange: "$2,200 - $3,200+",
    intro:
      "North York is one of the most active rental markets in the GTA, especially for renters who want TTC access, newer condos, shopping, and a balanced lifestyle.",
    areas: ["Yonge & Finch", "North York Centre", "Bayview Village", "Fairview Mall"],
  },
  vaughan: {
    name: "Vaughan",
    title: "Vaughan Condo Rentals",
    priceRange: "$2,300 - $3,400+",
    intro:
      "Vaughan is a strong option for renters who want newer buildings, more space, parking options, and access to Highway 400, 407, and VMC subway.",
    areas: ["VMC", "Maple", "Concord", "Woodbridge"],
  },
  "richmond-hill": {
    name: "Richmond Hill",
    title: "Richmond Hill Rentals",
    priceRange: "$2,300 - $3,500+",
    intro:
      "Richmond Hill is popular for renters who want quieter communities, parking, more space, and access to York Region.",
    areas: ["Yonge Street Corridor", "Langstaff", "Bayview Hill", "Oak Ridges"],
  },
  markham: {
    name: "Markham",
    title: "Markham Condo Rentals",
    priceRange: "$2,300 - $3,400+",
    intro:
      "Markham is a strong rental market for renters looking for newer condos, clean communities, schools, and York Region access.",
    areas: ["Downtown Markham", "Unionville", "Markham Centre", "Cornell"],
  },
  scarborough: {
    name: "Scarborough",
    title: "Scarborough Rentals",
    priceRange: "$2,000 - $3,100+",
    intro:
      "Scarborough can offer more flexible rental options compared to central Toronto, especially for renters looking for value.",
    areas: ["Scarborough Town Centre", "Kennedy", "Agincourt", "Guildwood"],
  },
};

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const page = areaPages[area as keyof typeof areaPages];

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Key to GTA
          </Link>

          <Link
            href="/#rental-match"
            className="rounded-full bg-[#F5EBDD] px-5 py-3 text-sm font-semibold text-[#070A12]"
          >
            Check Rental Match
          </Link>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D8C7AA]">
            GTA Rental Guide
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {page.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {page.intro}
          </p>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Estimated Rental Range
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#F5EBDD]">
              {page.priceRange}
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {page.areas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-white/80"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/#rental-match"
              className="inline-flex rounded-2xl bg-[#F5EBDD] px-6 py-4 font-semibold text-[#070A12]"
            >
              Start Rental Match
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}