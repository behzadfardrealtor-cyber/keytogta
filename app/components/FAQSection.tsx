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
];

export default function FAQSection() {
  return (
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
                {faq.href && (
                  <Link
                    href={faq.href}
                    className="mt-2 inline-block text-sm font-semibold text-[#6E6254] underline underline-offset-2 hover:text-[#070A12]"
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
