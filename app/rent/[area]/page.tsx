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
    priceRange: "$2,000 - $2,900",
    intro:
      "Vaughan is one of the few GTA municipalities outside Toronto with direct subway access, alongside newer condo stock, more space, parking options, and easy reach to Highways 400 and 407.",
    rentDetail:
      "One-bedroom units in Vaughan currently run roughly $2,000 to $2,900 a month, based on current liv.rent listing data. Rents move regularly, so treat this as a planning range, not a fixed number.",
    rentSource:
      "Source: liv.rent current listing data. Figures are monthly averages that change regularly - treat as directional, not exact.",
    neighbourhoods: [
      {
        name: "VMC (Vaughan Metropolitan Centre)",
        description:
          "Home to Vaughan Metropolitan Centre Station, a real TTC Line 1 subway terminus - about 45 minutes to Union Station, 5 minutes to York University. Vaughan is one of only two municipalities outside Toronto with direct subway access. Dense new-construction condos make up Vaughan's planned downtown core. Best fit for renters who want direct subway access without living in Toronto proper.",
      },
      {
        name: "Maple",
        description:
          "An established residential community with its own GO station (Maple GO, Barrie line). Good fit for renters who want a quieter, family-oriented area with a direct GO commute option.",
      },
      {
        name: "Concord",
        description:
          "A mix of industrial/commercial and newer residential development, close to Highways 400 and 407 and closer to the Toronto border than VMC. Good fit for renters prioritizing highway access and proximity to the city line.",
      },
      {
        name: "Woodbridge",
        description:
          "Vaughan's older, more established suburban core, with a historic village centre. More car-dependent and further from subway or GO access. Good fit for renters wanting a quieter, more traditional suburban feel.",
      },
    ],
    gettingAround:
      "Vaughan has genuinely good subway access, unlike most of the GTA outside Toronto. Vaughan Metropolitan Centre (VMC) Station, opened in December 2017, is a real terminus of TTC Line 1 (Yonge-University) - about 45 minutes to Union Station and 5 minutes to York University station. Vaughan is one of only two municipalities outside Toronto with direct subway access. VMC also connects to York Region Transit's VIVA bus rapid transit along the Highway 7 Rapidway and to Brampton's Zum. GO Transit's Barrie line serves Vaughan as well, with Rutherford GO and Vaughan Metropolitan Centre GO stations running to Union Station.",
  },
  "richmond-hill": {
    name: "Richmond Hill",
    title: "Richmond Hill Rentals",
    priceRange: "$2,000 - $3,000",
    intro:
      "Richmond Hill is popular with renters who want quieter communities, parking, and more space, with GO Transit and VIVA bus rapid transit connections into York Region and Toronto.",
    rentDetail:
      "One-bedroom units in Richmond Hill currently run roughly $2,000 to $3,000 a month, based on current liv.rent listing data. Rents move regularly, so treat this as a planning range, not a fixed number.",
    rentSource:
      "Source: liv.rent current listing data. Figures are monthly averages that change regularly - treat as directional, not exact.",
    neighbourhoods: [
      {
        name: "Yonge Street Corridor",
        description:
          "The main VIVA bus rapid transit spine through Richmond Hill, with denser mixed-use development and the closest access to the eventual (2030s) subway extension route. Good fit for renters who want the best current bus rapid transit access.",
      },
      {
        name: "Langstaff",
        description:
          "Centred on the GO station area - Richmond Hill/Langstaff GO on the GO Transit Richmond Hill line - with a mix of low- and high-rise development near Highway 407. Good fit for renters who want a direct GO Train commute option.",
      },
      {
        name: "Bayview Hill",
        description:
          "A quieter, established residential area with larger homes and less focus on transit. Good fit for renters prioritizing a calmer setting over transit access.",
      },
      {
        name: "Oak Ridges",
        description:
          "Richmond Hill's northern, more suburban and semi-rural edge, closer to the Oak Ridges Moraine greenbelt and more car-dependent. Good fit for renters wanting more green space and a quieter, lower-density feel.",
      },
    ],
    gettingAround:
      "Richmond Hill is not currently on the subway. The Yonge North Subway Extension - extending TTC Line 1 north from Finch Station into Richmond Hill, with new stations including one near Langstaff GO - is still in the procurement and planning stage as of early 2026, with an opening date in the 2030s. It does not exist yet. Today, Richmond Hill is served by York Region Transit's VIVA bus rapid transit along Yonge Street, connecting to TTC Line 1 at Finch Station by bus, and by GO Transit's Richmond Hill line, with Langstaff and Richmond Hill GO stations.",
  },
  markham: {
    name: "Markham",
    title: "Markham Condo Rentals",
    priceRange: "$1,950 - $2,100",
    intro:
      "Markham is one of York Region's most active rental markets, with a wide mix of newer condo stock, strong GO Transit and VIVA bus rapid transit connections, and easy access to Highways 404 and 407.",
    rentDetail:
      "One-bedroom units in Markham currently average roughly $1,950 to $2,100 a month. Markham saw the largest year-over-year rent decline of any GTA market in the past year: liv.rent's Ontario Rent Report (April 2026) recorded one-bedroom rents falling from $2,295/month in April 2025 to $2,007/month in April 2026 - a 12.5% drop. That's good news if you're renting here now, and it means the older $2,300-$3,400+ range previously shown on this page was overstated relative to the current market. Rents move month to month, so treat this as a planning range, not a fixed number.",
    rentSource:
      "Source: liv.rent Ontario Rent Report (April 2026). Figures are monthly averages that change regularly - treat as directional, not exact.",
    neighbourhoods: [
      {
        name: "Downtown Markham",
        description:
          "One of the largest planned mixed-use urban centres of its kind in Canada, with dense, modern condo towers. Served by VIVA bus rapid transit stops at Warden, Enterprise, and Unionville. Good fit for renters who want an urban, walkable, newer-construction feel without being in Toronto proper.",
      },
      {
        name: "Unionville",
        description:
          "A historic Main Street heritage district with a GO Station on the Stouffville line, mixing older character homes with newer condos nearby. Good fit for renters who want small-town charm with a reliable GO commute option.",
      },
      {
        name: "Cornell",
        description:
          "A master-planned \"New Urbanism\" community built starting in 1999, with a walkable street grid and its own transit terminal connecting to YRT/VIVA, close to Highway 407. Good fit for families wanting a self-contained, walkable suburb.",
      },
      {
        name: "Markham Centre",
        description:
          "The broader urban-core area overlapping with Unionville and Downtown Markham's development zone - a similar profile to Downtown Markham, slightly more residential-leaning.",
      },
    ],
    gettingAround:
      "Markham isn't on the subway. It's served by GO Transit's Stouffville line (Unionville and Mount Joy stations, roughly 55-60 minutes to Union Station), York Region Transit's VIVA bus rapid transit (Blue, Purple, Pink, and Green lines running along Yonge Street and Highway 7), and bus connections to TTC Line 1 at Finch Station - there's no direct subway line into Markham. Highways 404 and 407 are the main road links to the rest of the GTA.",
    // TODO: verify current Fraser Institute / TDSB / YRDSB school rankings before
    // publishing - not independently confirmed as of this draft, framed cautiously
    // pending verification.
    schoolsNote:
      "Markham's school zones, including the area around Cornell, have generally performed above the provincial median in third-party rankings such as the Fraser Institute's, though exact current standings should be checked directly.",
  },
  scarborough: {
    name: "Scarborough",
    title: "Scarborough Rentals",
    priceRange: "$2,000 - $2,500",
    intro:
      "Scarborough is one of the GTA's most practical rental markets - established communities, GO Transit and bus rapid transit access, and generally lower rents than central Toronto for renters prioritizing value.",
    rentDetail:
      "One-bedroom units in Scarborough currently run roughly $2,000 to $2,500 a month, based on current liv.rent listing data. That brings the top end of this page's range down from the old $3,000-$3,100+ ceiling, which was overstated relative to today's market - the same kind of correction made on the Markham page. Rents move regularly, so treat this as a planning range, not a fixed number.",
    rentSource:
      "Source: liv.rent current listing data. Figures are monthly averages that change regularly - treat as directional, not exact.",
    neighbourhoods: [
      {
        name: "Kennedy",
        description:
          "Anchored by Kennedy Station, the area's real rapid-transit hub - Line 2 subway, GO Transit's Stouffville line, and the Eglinton Crosstown LRT all meet here. Good fit for renters who want the most reliable transit connection into central Toronto.",
      },
      {
        name: "Scarborough Town Centre",
        description:
          "Scarborough's main shopping and civic hub, with dense newer condo development. Currently reached by bus pending the Scarborough Busway (opening fall 2026) and the longer-term subway extension (targeted for 2033). Good fit for renters who want an urban, amenity-dense feel and are comfortable with bus-based transit for now.",
      },
      {
        name: "Agincourt",
        description:
          "An established, diverse residential community with its own GO station on the Stouffville line. Good fit for renters who want a quieter, family-oriented area with a direct GO commute option.",
      },
      {
        name: "Guildwood",
        description:
          "A quieter, more residential pocket near the Scarborough Bluffs and Lake Ontario, served by Guildwood GO Station on the Lakeshore East line. Good fit for renters who want green space and lake proximity over urban density.",
      },
    ],
    gettingAround:
      "Scarborough's old rapid-transit line, Line 3 (the Scarborough RT), was permanently shut down in 2023 after a derailment and has not been replaced by rail yet - don't expect subway access directly at Scarborough Town Centre. Kennedy Station is the real rapid-transit anchor for the area, connecting to Line 2 (Bloor-Danforth) subway, GO Transit's Stouffville line, and the Eglinton Crosstown LRT. Scarborough Town Centre itself is currently reached by replacement bus service, with a dedicated Scarborough Busway - a proper bus corridor from Kennedy Station cutting the trip to about 15 minutes - scheduled to open fall 2026. The full subway extension (Line 2 East Extension, permanently replacing Line 3) has been delayed to 2033. Guildwood and Agincourt are each served by their own GO station, on the Lakeshore East and Stouffville lines respectively.",
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