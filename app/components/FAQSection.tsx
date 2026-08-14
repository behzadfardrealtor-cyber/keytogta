import Link from "next/link";

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
    href: "/cheapest-areas-to-rent-gta",
    linkLabel: "See how these areas compare on affordability",
  },
  {
    question: "Do you help buyers too?",
    answer:
      "Yes. Buyer support can include budget, pre-approval, down payment, preferred area, property type, shortlist, showings, and offer strategy.",
  },
  {
    question: "What are my rights as a tenant in Ontario?",
    answer:
      "Rent increases, deposits, and landlord entry are all covered by provincial rules - including the 2026 rent increase guideline and which units are exempt from it.",
    href: "/ontario-tenant-rights-gta",
    linkLabel: "Read the full Ontario tenant rights guide",
  },
  {
    question: "Do you have guides for specific GTA communities?",
    answer:
      "Yes - for example, if you're part of Toronto's Persian-speaking community, my guide to Persian newcomer neighbourhoods breaks down where that community is concentrated across the GTA and what it means for choosing a rental area.",
    href: "/persian-newcomer-neighbourhoods-gta",
    linkLabel: "Read the Persian newcomer neighbourhoods guide",
  },
  {
    question: "What's the difference between a guarantor and a co-signer?",
    answer:
      "A co-signer is named directly on the lease with liability from day one; a guarantor signs a separate agreement and is only liable if the tenant defaults. Landlords in the GTA ask for either when income, credit, or rental history alone doesn't clear their bar.",
    href: "/guarantor-vs-cosigner-ontario-rentals",
    linkLabel: "See the full guarantor vs. co-signer guide",
  },
];

export default function FAQSection() {
  return (
      <section id="faq" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#E8E4DD]/95 p-8 text-[#17313A] shadow-[0_18px_60px_rgba(23,49,58,.08)] backdrop-blur-sm md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            FAQ
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Common rental questions</h2>

          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white/72 p-5">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-[#17313A]/72">{faq.answer}</p>
                {faq.href && (
                  <Link
                    href={faq.href}
                    className="mt-2 inline-block text-sm font-semibold text-[#2F6F6B] underline underline-offset-2 hover:text-[#17313A]"
                  >
                    {faq.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
