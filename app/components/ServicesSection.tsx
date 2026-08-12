export default function ServicesSection() {
  return (
    <>
      <section id="process" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#E8E4DD] p-8 text-[#17313A] shadow-[0_18px_60px_rgba(23,49,58,.08)] md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Process
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">A cleaner way to search for rentals</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-6">
              <p className="mb-4 text-sm font-semibold text-[#2F6F6B]">Step 01</p>
              <h3 className="text-xl font-bold">Profile first</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Move-in date, budget, income, credit, and key document readiness are reviewed before booking viewings.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 p-6">
              <p className="mb-4 text-sm font-semibold text-[#2F6F6B]">Step 02</p>
              <h3 className="text-xl font-bold">Realistic shortlist</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Options are filtered based on what can actually work for your profile, not just what looks good online.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 p-6">
              <p className="mb-4 text-sm font-semibold text-[#2F6F6B]">Step 03</p>
              <h3 className="text-xl font-bold">Stronger application</h3>
              <p className="mt-3 leading-7 text-[#17313A]/72">
                Pay stubs, Equifax, ID, proof of funds when needed, and offer strategy are prepared before submitting to the landlord.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Services
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Support for renters, buyers, and newcomers</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-7 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
              <h3 className="text-2xl font-bold">Rental Readiness</h3>
              <p className="mt-4 leading-7 text-[#17313A]/68">
                Review budget, area, move-in timeline, documents, and approval strength before applying.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-7 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
              <h3 className="text-2xl font-bold">Buyer Consultation</h3>
              <p className="mt-4 leading-7 text-[#17313A]/68">
                Discuss pre-approval, down payment, target area, property type, shortlist, and offer strategy.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-7 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
              <h3 className="text-2xl font-bold">Newcomer Guidance</h3>
              <p className="mt-4 leading-7 text-[#17313A]/68">
                Understand documents, landlord expectations, area options, and realistic next steps in the GTA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
