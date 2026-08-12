export default function ContactSection() {
  return (
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E8E4DD] bg-white p-8 shadow-[0_18px_60px_rgba(23,49,58,.08)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
                Contact
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Need help finding a rental?</h2>
              <p className="mt-5 max-w-2xl leading-8 text-[#17313A]/70">
                Send your rental details and I'll help you understand your options, documents, and next steps.
              </p>
            </div>

            <div className="rounded-2xl bg-[#DCE8E3] p-6">
              <p className="text-sm text-[#17313A]/55">Email</p>
              <p className="mt-2 break-all text-xl font-bold">behzadfard.realtor@gmail.com</p>

              <a
                href="#rental-match"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#2F6F6B] px-6 py-4 font-semibold text-white transition hover:bg-[#17313A]"
              >
                Get My Rental Shortlist
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
