"use client";

import type { FormEvent, ReactNode } from "react";
import type { ApprovalReport, RentalForm } from "../rental-readiness";
import ReadinessReport from "./ReadinessReport";

type ScoreStyle = {
  label: string;
  border: string;
  glow: string;
  message: string;
};

type RentalReadinessFormProps = {
  approvalReport: ApprovalReport;
  fieldErrors: Record<string, string>;
  form: RentalForm;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void | Promise<void>;
  isSubmitting: boolean;
  resultPreview: ApprovalReport["strength"];
  scorePreview: number;
  scoreStyle: ScoreStyle;
  showReport: boolean;
  status: string;
  updateField: (field: keyof RentalForm, value: string) => void;
};

function FieldLabel({
  label,
  children,
  wide = false,
}: {
  label: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={`grid gap-2 text-sm font-semibold ${wide ? "md:col-span-2" : ""}`}>
      {label}
      {children}
    </label>
  );
}

export default function RentalReadinessForm({
  approvalReport,
  fieldErrors,
  form,
  handleSubmit,
  isSubmitting,
  resultPreview,
  scorePreview,
  scoreStyle,
  showReport,
  status,
  updateField,
}: RentalReadinessFormProps) {
  return (
    <section id="rental-match" className="px-6 pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D8C7AA]">
            Rental Readiness
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Check your approval strength</h2>

          <p className="mt-5 leading-8 text-white/70">
            Answer a few key questions to understand your rental readiness before booking viewings or submitting offers.
          </p>

          <div className="mt-8 rounded-2xl bg-white/[0.07] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Approval Strength Preview</p>
            <p className="mt-3 text-4xl font-bold text-[#F5EBDD]">{scorePreview}/100</p>
            <p className="mt-2 text-white/70">{resultPreview}</p>
            <p className="mt-3 text-sm leading-6 text-white/55">
              {approvalReport.rentRatioLabel}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#D8C7AA]">
              Suggested rent range
            </p>
            <p className="mt-1 font-semibold text-white/85">
              {approvalReport.recommendedRentRange}
            </p>
            <p className="mt-2 text-xs leading-5 text-white/45">
              Comfort range only â€” not a maximum rent.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-white/12 bg-white/[0.04] p-5">
            <h3 className="font-bold">Documents that usually help</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Government ID, recent pay stubs, full Equifax report, and proof of funds when needed. Extra documents can be reviewed later.
            </p>
          </div>
        </div>

        <form noValidate onSubmit={handleSubmit} className="rounded-[2rem] bg-[#F5EBDD] p-6 text-[#070A12] md:p-8">
          {Object.keys(fieldErrors).length > 0 && (
            <div className="mb-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
              <p className="font-bold">Please fix these fields before getting your report:</p>
              <ul className="mt-2 grid gap-1">
                {Object.values(fieldErrors).map((error) => (
                  <li key={error}>â€¢ {error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <FieldLabel label="Full Name">
              <input
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
              {fieldErrors.name && <p className="text-xs font-semibold text-red-600">{fieldErrors.name}</p>}
            </FieldLabel>

            <FieldLabel label="Phone Number">
              <input
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                placeholder="416 555 1234"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              {fieldErrors.phone && <p className="text-xs font-semibold text-red-600">{fieldErrors.phone}</p>}
            </FieldLabel>

            <FieldLabel label="Email Address" wide>
              <input
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              {fieldErrors.email && <p className="text-xs font-semibold text-red-600">{fieldErrors.email}</p>}
            </FieldLabel>

            <FieldLabel label="Preferred Area">
              <select
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                value={form.area}
                onChange={(e) => updateField("area", e.target.value)}
              >
                <option>North York</option>
                <option>Vaughan</option>
                <option>Richmond Hill</option>
                <option>Markham</option>
                <option>Scarborough</option>
              </select>
            </FieldLabel>

            <FieldLabel label="Move-in Timeline">
              <select
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                value={form.moveIn}
                onChange={(e) => updateField("moveIn", e.target.value)}
              >
                <option>0-30 days</option>
                <option>30-60 days</option>
                <option>60+ days</option>
              </select>
            </FieldLabel>

            <FieldLabel label="Monthly Budget">
              <input
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                type="number" inputMode="numeric" placeholder="Example: 2800"
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
              />
              {fieldErrors.budget && <p className="text-xs font-semibold text-red-600">{fieldErrors.budget}</p>}
            </FieldLabel>

            <FieldLabel label="Monthly Income">
              <input
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                type="number" inputMode="numeric" placeholder="Example: 7500"
                value={form.income}
                onChange={(e) => updateField("income", e.target.value)}
              />
              {fieldErrors.income && <p className="text-xs font-semibold text-red-600">{fieldErrors.income}</p>}
            </FieldLabel>

            <FieldLabel label="Credit Score">
              <input
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                type="number" inputMode="numeric" placeholder="Example: 720"
                value={form.credit}
                onChange={(e) => updateField("credit", e.target.value)}
              />
              {fieldErrors.credit && <p className="text-xs font-semibold text-red-600">{fieldErrors.credit}</p>}
            </FieldLabel>



            <FieldLabel label="Pay Stubs Ready?">
              <select
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                value={form.paystubs}
                onChange={(e) => updateField("paystubs", e.target.value)}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </FieldLabel>


            <FieldLabel label="Equifax Report Ready?">
              <select
                className="rounded-2xl border border-black/10 bg-white p-4 font-normal"
                value={form.creditReport}
                onChange={(e) => updateField("creditReport", e.target.value)}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </FieldLabel>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-2xl bg-[#070A12] px-6 py-4 font-semibold text-white disabled:opacity-60 md:col-span-2"
            >
              {isSubmitting ? "Sending..." : "Get My Rental Plan"}
            </button>
          </div>

          {status && (
            <p className="mt-5 rounded-2xl bg-black/5 p-4 text-sm font-medium">
              {status}
            </p>
          )}

          {showReport && (
            <ReadinessReport
              approvalReport={approvalReport}
              scoreStyle={scoreStyle}
            />
          )}
        </form>
      </div>
    </section>
  );
}
