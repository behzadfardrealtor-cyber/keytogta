export default function ContactSection() {
  return (
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
                Contact
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Need help finding a rental?</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                Send your rental details and I'll help you understand your options, documents, and next steps.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.07] p-6">
              <p className="text-sm text-white/50">Email</p>
              <p className="mt-2 break-all text-xl font-bold">behzad.fard@property.ca</p>

              <a
                href="#rental-match"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#F5EBDD] px-6 py-4 font-semibold text-[#070A12]"
              >
                Start Rental Readiness
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
