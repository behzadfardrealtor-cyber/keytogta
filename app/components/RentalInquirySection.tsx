"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createLeadId, trackEvent } from "../lib/analytics";
import { submitLead } from "../lib/submit-lead";

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  area: string;
  otherArea: string;
  moveIn: string;
  propertyType: string;
  budget: string;
  bedrooms: string;
  parking: string;
  question: string;
};

const initialInquiry: Inquiry = {
  name: "", email: "", phone: "", area: "", otherArea: "", moveIn: "",
  propertyType: "", budget: "", bedrooms: "", parking: "", question: "",
};

function validateInquiry(form: Inquiry) {
  const errors: Record<string, string> = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!form.email.trim() && !form.phone.trim()) errors.contact = "Enter an email or a phone number so Behzad can reply.";
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errors.email = "Enter a valid email address.";
  const digits = form.phone.replace(/\D/g, "");
  if (form.phone.trim() && (digits.length < 7 || digits.length > 15)) errors.phone = "Enter a phone number with 7 to 15 digits, including the country code if needed.";
  if (!form.area) errors.area = "Choose a preferred area.";
  if (form.area === "Other GTA area" && !form.otherArea.trim()) errors.otherArea = "Tell Behzad which GTA area you prefer.";
  if (!form.moveIn) errors.moveIn = "Choose your move-in timing.";
  if (!form.propertyType) errors.propertyType = "Choose a property type.";
  if (form.budget && (!Number.isFinite(Number(form.budget)) || Number(form.budget) <= 0)) errors.budget = "Enter a positive monthly budget or leave it blank.";
  return errors;
}

const control = "mt-2 min-h-12 w-full rounded-xl border border-[#C9D8D1] bg-white px-4 py-3 text-base text-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6F6B]";

export default function RentalInquirySection() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState<Inquiry>(initialInquiry);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [unconfirmed, setUnconfirmed] = useState(false);
  const [reference, setReference] = useState("");
  const started = useRef(false);
  const active = useRef(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  function update(field: keyof Inquiry, value: string) {
    if (!started.current) {
      started.current = true;
      trackEvent("form_start", { form_name: "rental_inquiry" });
    }
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => {
      const next = { ...previous };
      delete next[field];
      if (field === "email" || field === "phone") delete next.contact;
      return next;
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (active.current || sent || unconfirmed) return;
    const nextErrors = validateInquiry(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      trackEvent("form_validation_error", { form_name: "rental_inquiry" });
      return;
    }

    setErrors({});
    active.current = true;
    setSending(true);
    const leadId = createLeadId();
    setReference(leadId);
    const area = form.area === "Other GTA area" ? form.otherArea.trim() : form.area;
    const notes = [
      `Property type: ${form.propertyType}`,
      form.bedrooms ? `Bedrooms: ${form.bedrooms}` : "",
      form.parking ? `Parking: ${form.parking}` : "",
      form.question.trim() ? `Question: ${form.question.trim()}` : "",
    ].filter(Boolean).join(" | ");
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      normalizedPhone: form.phone.replace(/\D/g, ""),
      area,
      moveIn: form.moveIn,
      propertyType: form.propertyType,
      bedrooms: form.bedrooms,
      parking: form.parking || "Not specified",
      budget: form.budget,
      question: form.question.trim(),
      income: "", credit: "", paystubs: "Not asked", creditReport: "Not asked", jobLetter: "Not asked", applicants: "Not asked",
      leadId,
      leadSource: "Key to GTA Website",
      clientType: "Renter",
      matchType: "Rental Inquiry",
      score: "", result: "Pending personal review", priority: "Review",
      nextAction: "Review search preferences and contact renter",
      notes,
      status: "New Lead", followUpStage: "Initial",
      requestType: "Rental Inquiry",
      sourceUrl: window.location.origin + window.location.pathname,
    };

    try {
      trackEvent("form_submit_attempt", { form_name: "rental_inquiry" });
      await submitLead("rental_inquiry", payload);
      setSent(true);
      trackEvent("generate_lead", { lead_source: "inquiry_form", lead_type: "rental_inquiry", lead_id: leadId });
    } catch {
      setUnconfirmed(true);
      trackEvent("form_delivery_unconfirmed", { form_name: "rental_inquiry" });
    } finally {
      active.current = false;
      setSending(false);
    }
  }

  return (
    <section id="rental-inquiry" className="scroll-mt-24 px-6 pb-24 pt-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#E8E4DD] bg-[#DCE8E3]/85 p-6 shadow-[0_20px_60px_rgba(23,49,58,.08)] md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F6B]">Start your rental search</p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Tell Behzad what you need</h2>
          <p className="mt-5 leading-7 text-[#17313A]/80">Share your area, timing, and the kind of condo or house you want. Behzad will review your request personally and discuss possible next steps with you.</p>
          <p className="mt-4 text-sm leading-6 text-[#17313A]/80">No credit score, income details, or document uploads are needed to start. An international phone number is welcome, and you can use email instead.</p>
          <a href="#rental-match" className="mt-6 inline-block font-semibold text-[#246860] underline underline-offset-4">Want a detailed rental readiness report? Use the two-step tool.</a>
        </div>

        <div className="rounded-[1.5rem] bg-white p-5 shadow-sm md:p-8">
          {sent ? (
            <div role="status" className="rounded-2xl border border-green-300 bg-green-50 p-5 text-green-900">
              <h3 className="text-xl font-bold">Your request was sent to Behzad.</h3>
              <p className="mt-2">He can review your search and contact you using the details you provided. Your reference is {reference}.</p>
            </div>
          ) : unconfirmed ? (
            <div role="alert" className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
              <h3 className="text-xl font-bold">We could not confirm delivery.</h3>
              <p className="mt-2">Please email Behzad with reference {reference} rather than sending this form again.</p>
              <a className="mt-3 inline-block font-semibold underline" href={`mailto:behzadfard.realtor@gmail.com?subject=Rental%20inquiry%20${encodeURIComponent(reference)}`}>Email Behzad</a>
            </div>
          ) : (
            <form noValidate onSubmit={submit} aria-label="Short rental inquiry">
              <p className="text-sm text-[#17313A]/75">Fields marked * are required. Provide at least one way to reply.</p>
              {Object.keys(errors).length > 0 && (
                <div role="alert" className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
                  <p className="font-bold">Please check:</p>
                  <ul className="mt-1 list-disc pl-5">{Object.values(errors).map((message) => <li key={message}>{message}</li>)}</ul>
                </div>
              )}
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-semibold">Name *
                  <input className={control} autoComplete="name" required maxLength={100} value={form.name} aria-invalid={Boolean(errors.name)} onChange={(e) => update("name", e.target.value)} />
                </label>
                <label className="block text-sm font-semibold">Preferred area *
                  <select className={control} required value={form.area} aria-invalid={Boolean(errors.area)} onChange={(e) => update("area", e.target.value)}>
                    <option value="">Choose an area</option>
                    {["North York", "Toronto", "Vaughan", "Richmond Hill", "Markham", "Scarborough", "Other GTA area"].map((area) => <option key={area}>{area}</option>)}
                  </select>
                </label>
                {form.area === "Other GTA area" && <label className="block text-sm font-semibold md:col-span-2">Which area? *
                  <input className={control} maxLength={80} value={form.otherArea} aria-invalid={Boolean(errors.otherArea)} onChange={(e) => update("otherArea", e.target.value)} />
                </label>}
                <label className="block text-sm font-semibold">Move-in timing *
                  <select className={control} required value={form.moveIn} aria-invalid={Boolean(errors.moveIn)} onChange={(e) => update("moveIn", e.target.value)}>
                    <option value="">Choose a timeline</option>
                    <option>Within 30 days</option><option>In 1–2 months</option><option>Later / just exploring</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold">Property type *
                  <select className={control} required value={form.propertyType} aria-invalid={Boolean(errors.propertyType)} onChange={(e) => update("propertyType", e.target.value)}>
                    <option value="">Choose a type</option><option>Condo</option><option>House</option><option>Either</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold">Email
                  <input className={control} type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={150} value={form.email} aria-invalid={Boolean(errors.email || errors.contact)} onChange={(e) => update("email", e.target.value)} />
                </label>
                <label className="block text-sm font-semibold">Phone (including international)
                  <input className={control} type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="+1 647 555 1234" value={form.phone} aria-invalid={Boolean(errors.phone || errors.contact)} onChange={(e) => update("phone", e.target.value)} />
                </label>
                <label className="block text-sm font-semibold">Max monthly rent (CAD)
                  <input className={control} type="number" inputMode="numeric" min="1" placeholder="Optional" value={form.budget} aria-invalid={Boolean(errors.budget)} onChange={(e) => update("budget", e.target.value)} />
                </label>
                <label className="block text-sm font-semibold">Bedrooms
                  <select className={control} value={form.bedrooms} onChange={(e) => update("bedrooms", e.target.value)}>
                    <option value="">Not sure yet</option><option>Studio</option><option>1</option><option>2</option><option>3+</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold md:col-span-2">Parking
                  <select className={control} value={form.parking} onChange={(e) => update("parking", e.target.value)}>
                    <option value="">No preference yet</option><option>Needed</option><option>Not needed</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold md:col-span-2">Anything else Behzad should know?
                  <textarea className={control} rows={3} maxLength={300} value={form.question} onChange={(e) => update("question", e.target.value)} placeholder="A question about your search, timing, or documents" />
                </label>
              </div>
              <p className="mt-5 text-sm leading-6 text-[#17313A]/70">Behzad uses these details to review and reply to your rental request. This does not subscribe you to marketing. Please don&apos;t include ID, bank statements, or credit reports. <a href="/privacy" className="font-semibold underline underline-offset-2">Privacy Policy</a></p>
              <button type="submit" disabled={!mounted || sending} className="mt-5 min-h-14 w-full rounded-2xl bg-[#2F6F6B] px-6 py-4 text-base font-bold text-white hover:bg-[#17313A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B] disabled:opacity-60">
                {!mounted ? "Loading..." : sending ? "Sending..." : "Send my rental request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
