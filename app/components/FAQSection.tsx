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
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
