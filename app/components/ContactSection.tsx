import ContactActions from "./ContactActions";

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
                Tell me your preferred area, budget, and move-in timing. I&apos;ll help you discuss condo and house rental options and what to prepare next. You can start with a question.
              </p>
            </div>

            <div className="rounded-2xl bg-[#DCE8E3] p-6">
              <p className="text-sm text-[#17313A]/55">Email</p>
              <a href="mailto:behzadfard.realtor@gmail.com" className="mt-2 block break-all text-lg font-bold underline underline-offset-4">behzadfard.realtor@gmail.com</a>
              <p className="mb-4 mt-4 text-sm leading-6">No Canadian credit history or Canadian phone number yet? Email me directly. Please do not attach ID, bank statements, or credit reports to your first inquiry.</p>
              <ContactActions placement="contact_section" />

              <a
                href="#rental-inquiry"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#2F6F6B] px-6 py-4 font-semibold text-white transition hover:bg-[#17313A]"
              >
                Send a rental request
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
