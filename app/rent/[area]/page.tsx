import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FooterSection from "../../components/FooterSection";
import PageViewTracker from "../../components/PageViewTracker";

type NeighbourhoodDetail = {
  name: string;
  description: string;
};

type AreaPageData = {
  name: string;
  title: string;
  priceRange: string;
  intro: string;
  areas?: string[];
  rentDetail?: string;
  rentSource?: string;
  neighbourhoods?: NeighbourhoodDetail[];
  gettingAround?: string;
  schoolsNote?: string;
};

const areaPages: Record<string, AreaPageData> = {
  "north-york": {
    name: "North York",
    title: "North York Condo Rentals",
    priceRange: "$1,950 - $2,150",
    intro:
      "North York is one of the GTA's most active rental markets - strong subway access, a wide mix of condo stock, and everyday shopping and services close by in most pockets.",
    rentDetail:
      "One-bedroom units in North York currently run roughly $1,950 to $2,150 a month. liv.rent's Ontario Rent Report (January 2026) put the Toronto-wide unfurnished one-bedroom average at $1,993/month, with North York down 3.66% that month, while Zumper's May 2026 data showed a North York-area average of roughly $2,044/month. Rents here move month to month, so treat this as a planning range, not a fixed number. Under the common 30%-of-income guideline, this level of rent implies a gross household income of roughly $78,000 to $86,000 a year.",
    rentSource:
      "Sources: liv.rent Ontario Rent Report (January 2026); Zumper (May 2026). Figures are monthly averages that change regularly - treat as directional, not exact.",
    neighbourhoods: [
      {
        name: "Willowdale",
        description:
          "Modern condos alongside detached homes, right on the subway at Yonge and Finch. A common choice for young professionals and families who want quick subway access without downtown pricing.",
      },
      {
        name: "Bayview Village",
        description:
          "Quieter and more upscale, close to some of the city's top-rated schools and to North York General Hospital. Suits families who want a calmer setting without giving up transit access.",
      },
      {
        name: "Yonge & Sheppard",
        description:
          "The most urban, high-rise stretch of North York, sitting where TTC Line 1 meets Line 4. The pick for renters who want nightlife, restaurants, and the shortest possible subway ride downtown.",
      },
      {
        name: "Newtonbrook",
        description:
          "Straddles Yonge Street between Finch and Steeles, sitting directly on Line 1 with Finch Station at its southern edge. One-bedrooms here typically run $1,600 to $1,900 a month - the more affordable end of North York while still being subway-accessible.",
      },
    ],
    gettingAround:
      "North York is anchored by three subway stations - North York Centre, Sheppard-Yonge, and Finch - all on Line 1. Finch Station also connects to York Region Transit and GO buses, which matters if you work outside downtown Toronto or commute north into York Region.",
    // TODO: verify current school reputation/ranking claims against TDSB or Fraser
    // Institute before publishing - not independently sourced as of this draft.
    schoolsNote:
      "Earl Haig Secondary School, near Yonge and Finch, is one of the more commonly cited draws for renters with older kids considering this part of North York.",
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const page = areaPages[area as keyof typeof areaPages];

  if (!page) {
    return {};
  }

  const title = page.title + " | Key to GTA";
  const description =
    page.intro + " Estimated rental range: " + page.priceRange + ".";

  return {
    title,
    description,
  };
}

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
      <PageViewTracker eventName="area_guide_view" params={{ area_name: page.name }} />
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

          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/50">
            Before you apply, see our{" "}
            <Link
              href="/rental-documents/checklist-ontario"
              className="text-[#F5C979] underline underline-offset-2 hover:text-[#F8DCA6]"
            >
              Ontario rental application checklist
            </Link>{" "}
            for the documents landlords typically expect.
          </p>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Estimated Rental Range
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#F5EBDD]">
              {page.priceRange}
            </h2>
          </div>

          {page.rentDetail && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold">What you'll actually pay</h2>
              <p className="mt-3 max-w-3xl leading-7 text-white/70">
                {page.rentDetail}
              </p>
              {page.rentSource && (
                <p className="mt-3 max-w-3xl text-xs leading-5 text-white/40">
                  {page.rentSource}
                </p>
              )}
            </div>
          )}

          {page.neighbourhoods ? (
            <div className="mt-10">
              <h2 className="text-2xl font-bold">Neighbourhoods to know</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {page.neighbourhoods.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <h3 className="font-bold text-[#F5EBDD]">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            page.areas && (
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
            )
          )}

          {page.gettingAround && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold">Getting around</h2>
              <p className="mt-3 max-w-3xl leading-7 text-white/70">
                {page.gettingAround}
              </p>
            </div>
          )}

          {page.schoolsNote && (
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/60">
              {page.schoolsNote}
            </p>
          )}

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

      <FooterSection />
    </main>
  );
}