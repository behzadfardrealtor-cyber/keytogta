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
  isSubmittingMatchingOptions: boolean;
  matchingOptionsStatus: string;
  mounted: boolean;
  onBack: () => void;
  onContinue: (e: FormEvent<HTMLFormElement>) => void;
  onRequestMatchingOptions: () => void | Promise<void>;
  resultPreview: ApprovalReport["strength"];
  scorePreview: number;
  scoreStyle: ScoreStyle;
  showReport: boolean;
  status: string;
  step: 1 | 2;
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

function getFieldControlClassName(hasError = false) {
  return `rounded-2xl border bg-white p-4 font-normal ${
    hasError ? "border-red-500" : "border-[#17313A]/15"
  }`;
}

function getScorePreviewClassName(score: number) {
  if (score >= 85) return "mt-3 text-4xl font-bold text-green-700";
  if (score >= 70) return "mt-3 text-4xl font-bold text-amber-700";
  if (score >= 50) return "mt-3 text-4xl font-bold text-amber-800";
  return "mt-3 text-4xl font-bold text-red-700";
}

function getStatusClassName(status: string) {
  const isErrorStatus =
    status.toLowerCase().includes("wrong") ||
    status.toLowerCase().includes("required") ||
    status.toLowerCase().includes("fix");

  return isErrorStatus
    ? "mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800"
    : "mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800";
}

export default function RentalReadinessForm({
  approvalReport,
  fieldErrors,
  form,
  handleSubmit,
  isSubmitting,
  isSubmittingMatchingOptions,
  matchingOptionsStatus,
  mounted,
  onBack,
  onContinue,
  onRequestMatchingOptions,
  resultPreview,
  scorePreview,
  scoreStyle,
  showReport,
  status,
  step,
  updateField,
}: RentalReadinessFormProps) {
  const scorePreviewClassName = getScorePreviewClassName(scorePreview);
  const statusClassName = getStatusClassName(status);

  return (
    <section id="rental-match" className="px-6 pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Rental Readiness
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Check your approval strength</h2>

          <p className="mt-5 leading-8 text-[#17313A]/70">
            Answer a few key questions to understand your rental readiness before booking viewings or submitting offers.
          </p>

          <div className="mt-8 rounded-2xl bg-[#DCE8E3] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#17313A]/55">Approval Strength Preview</p>
            {form.income.trim() && form.credit.trim() ? (
              <>
                <p className={scorePreviewClassName}>{scorePreview}/100</p>
                <p className="mt-2 text-[#17313A]/70">{resultPreview}</p>
              </>
            ) : (
              <p className="mt-3 text-2xl font-semibold text-[#17313A]/55">
                Complete the form to see your score
              </p>
            )}
            <p className="mt-3 text-sm leading-6 text-[#17313A]/58">
              {approvalReport.rentRatioLabel}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#2F6F6B]">
              Suggested rent range
            </p>
            <p className="mt-1 font-semibold text-[#17313A]/85">
              {approvalReport.recommendedRentRange}
            </p>
            <p className="mt-2 text-xs leading-5 text-[#17313A]/58">
              Comfort range only - not a maximum rent.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-5">
            <h3 className="font-bold">Documents that usually help</h3>
            <p className="mt-3 text-sm leading-6 text-[#17313A]/62">
              Government ID, recent pay stubs, full Equifax report, and proof of funds when needed. Extra documents can be reviewed later.
            </p>
          </div>
        </div>

        <form
          noValidate
          onSubmit={step === 1 ? onContinue : handleSubmit}
          className="rounded-[2rem] bg-white p-6 text-[#17313A] shadow-[0_18px_60px_rgba(23,49,58,.10)] md:p-8"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F6F6B]">
            Step {step} of 2
          </p>

          {Object.keys(fieldErrors).length > 0 && (
            <div className="mb-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
              <p className="font-bold">Please fix these fields before getting your report:</p>
              <ul className="mt-2 grid gap-1">
                {Object.values(fieldErrors).map((error) => (
                  <li key={error} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                    />
                    <span>{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {step === 1 ? (
              <>
                <FieldLabel label="Full Name">
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.name))}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                  {fieldErrors.name && <p className="text-xs font-semibold text-red-600">{fieldErrors.name}</p>}
                </FieldLabel>

                <FieldLabel label="Phone Number">
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.phone))}
                    placeholder="416 555 1234"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                  {fieldErrors.phone && <p className="text-xs font-semibold text-red-600">{fieldErrors.phone}</p>}
                </FieldLabel>

                <FieldLabel label="Email Address" wide>
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.email))}
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                  {fieldErrors.email && <p className="text-xs font-semibold text-red-600">{fieldErrors.email}</p>}
                </FieldLabel>

                <FieldLabel label="Preferred Area" wide>
                  <select
                    className={getFieldControlClassName()}
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

                <button
                  type="submit"
                  disabled={!mounted}
                  className="rounded-2xl bg-[#2F6F6B] px-6 py-4 font-semibold text-white transition hover:bg-[#17313A] disabled:opacity-60 md:col-span-2"
                >
                  {!mounted ? "Loading..." : "Continue"}
                </button>
              </>
            ) : (
              <>
                <FieldLabel label="Move-in Timeline">
                  <select
                    className={getFieldControlClassName()}
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
                    className={getFieldControlClassName(Boolean(fieldErrors.budget))}
                    type="number" inputMode="numeric" placeholder="Example: 2800"
                    value={form.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                  />
                  {fieldErrors.budget && <p className="text-xs font-semibold text-red-600">{fieldErrors.budget}</p>}
                </FieldLabel>

                <FieldLabel label="Monthly Income">
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.income))}
                    type="number" inputMode="numeric" placeholder="Example: 7500"
                    value={form.income}
                    onChange={(e) => updateField("income", e.target.value)}
                  />
                  {fieldErrors.income && <p className="text-xs font-semibold text-red-600">{fieldErrors.income}</p>}
                </FieldLabel>

                <FieldLabel label="Credit Score">
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.credit))}
                    type="number" inputMode="numeric" placeholder="Example: 720"
                    value={form.credit}
                    onChange={(e) => updateField("credit", e.target.value)}
                  />
                  {fieldErrors.credit && <p className="text-xs font-semibold text-red-600">{fieldErrors.credit}</p>}
                </FieldLabel>

                <FieldLabel label="Pay Stubs Ready?">
                  <select
                    className={getFieldControlClassName()}
                    value={form.paystubs}
                    onChange={(e) => updateField("paystubs", e.target.value)}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </FieldLabel>

                <FieldLabel label="Equifax Report Ready?">
                  <select
                    className={getFieldControlClassName()}
                    value={form.creditReport}
                    onChange={(e) => updateField("creditReport", e.target.value)}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </FieldLabel>

                <button
                  type="submit"
                  disabled={isSubmitting || !mounted}
                  className="rounded-2xl bg-[#2F6F6B] px-6 py-4 font-semibold text-white transition hover:bg-[#17313A] disabled:opacity-60 md:col-span-2"
                >
                  {!mounted ? "Loading..." : isSubmitting ? "Sending..." : "Get My Rental Shortlist"}
                </button>

                <button
                  type="button"
                  onClick={onBack}
                  className="justify-self-start text-sm font-semibold text-[#17313A]/70 underline underline-offset-2 hover:text-[#17313A] md:col-span-2"
                >
                  ← Back
                </button>
              </>
            )}
          </div>

          {status && (
              <p className={statusClassName}>
              {status}
            </p>
          )}

          {showReport && (
            <ReadinessReport
              approvalReport={approvalReport}
              isSubmittingMatchingOptions={isSubmittingMatchingOptions}
              matchingOptionsStatus={matchingOptionsStatus}
              onRequestMatchingOptions={onRequestMatchingOptions}
              scoreStyle={scoreStyle}
            />
          )}
        </form>
      </div>
    </section>
  );
}
