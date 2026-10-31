"use client";

import type { FormEvent, ReactNode } from "react";
import type { ApprovalReport, RentalForm } from "../rental-readiness";
import ReadinessReport from "./ReadinessReport";
import ContactActions from "./ContactActions";

type ScoreStyle = {
  label: string;
  border: string;
  glow: string;
  message: string;
};

type RentalReadinessFormProps = {
  approvalReport: ApprovalReport;
  canRequestMatchingOptions: boolean;
  fieldErrors: Record<string, string>;
  existingReference: string | null;
  form: RentalForm;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void | Promise<void>;
  isSubmitting: boolean;
  isSubmittingMatchingOptions: boolean;
  matchingOptionsStatus: string;
  mounted: boolean;
  onBack: () => void;
  onContinue: (e: FormEvent<HTMLFormElement>) => void;
  onRequestMatchingOptions: () => void | Promise<void>;
  resultPreview: string;
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
  return score === 100 ? "mt-3 text-4xl font-bold text-green-700" : "mt-3 text-4xl font-bold text-amber-800";
}

function getStatusClassName(status: string) {
  const isErrorStatus =
    status.toLowerCase().includes("wrong") ||
    status.toLowerCase().includes("could not confirm") ||
    status.toLowerCase().includes("required") ||
    status.toLowerCase().includes("fix");

  return isErrorStatus
    ? "mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800"
    : "mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800";
}

export default function RentalReadinessForm({
  approvalReport,
  canRequestMatchingOptions,
  fieldErrors,
  existingReference,
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
    <section id="rental-match" className="scroll-mt-24 px-6 pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8 shadow-[0_18px_50px_rgba(23,49,58,.06)]">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
            Option 2 · Optional readiness report
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Check your rental readiness in detail</h2>

          <p className="mt-5 leading-8 text-[#17313A]/70">
            Use this two-step tool to organize your rental search and supporting documents. Income and credit are optional context for a personal discussion. The checklist does not predict approval.
          </p>
          <p className="mt-4 text-sm leading-6 text-[#17313A]/70">Already sent the short request? You do not need to fill this in for Behzad to contact you. If you just want to start a conversation, <a href="#rental-inquiry" className="font-semibold text-[#2F6F6B] underline underline-offset-2">use the short request</a>.</p>

          <div className="mt-8 rounded-2xl bg-[#DCE8E3] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#17313A]/75">Rental planning preview</p>
            {form.budget.trim() ? (
              <>
                <p className={scorePreviewClassName}>{scorePreview === 100 ? "2 of 2" : scorePreview === 50 ? "1 of 2" : "0 of 2"}</p>
                <p className="mt-2 text-[#17313A]/70">{resultPreview}</p>
              </>
            ) : (
              <p className="mt-3 text-2xl font-semibold text-[#17313A]/55">
                Add your budget to start the checklist
              </p>
            )}
            <p className="mt-3 text-sm leading-6 text-[#17313A]/58">
              {approvalReport.rentRatioLabel}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#2F6F6B]">
              Budget discussion
            </p>
            <p className="mt-1 font-semibold text-[#17313A]/85">
              {approvalReport.recommendedRentRange}
            </p>
            <p className="mt-2 text-xs leading-5 text-[#17313A]/58">
              This is not an approval estimate or a landlord screening rule.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-5">
            <h3 className="font-bold">Documents that usually help</h3>
            <p className="mt-3 text-sm leading-6 text-[#17313A]/62">
              Depending on the listing, ID and available income or financial documents may help. Ask which documents are needed before sharing sensitive records.
            </p>
          </div>
        </div>

        <form
          noValidate
          onSubmit={step === 1 ? onContinue : handleSubmit}
          aria-label="Rental search request"
          className="order-first rounded-[2rem] bg-white p-6 text-[#17313A] shadow-[0_18px_60px_rgba(23,49,58,.10)] md:p-8 lg:order-last"
        >
          <h3 className="mb-3 text-2xl font-bold">Get a detailed readiness report</h3>
          {existingReference && !showReport && (
            <p role="status" className="mb-4 rounded-2xl border border-[#C9D8D1] bg-[#F7F7F2] p-4 text-sm leading-6">
              Your rental request is already recorded under reference {existingReference}. You can review the checklist, but please <a className="font-semibold underline" href={`mailto:behzadfard.realtor@gmail.com?subject=Rental%20request%20${encodeURIComponent(existingReference)}`}>email Behzad</a> to add details instead of submitting a second request.
            </p>
          )}
          <p className="mb-4 text-sm leading-6 text-[#17313A]/80">
            This two-step form asks for contact details, your budget, and document readiness. Income and credit are optional. Behzad uses your submission to review your request and contact you. No document uploads are needed. <a href="/privacy" className="font-semibold underline underline-offset-2">Privacy Policy</a>
          </p>
          <div className="mb-6 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-4">
            <p className="mb-3 text-sm leading-6">No Canadian credit history or Canadian phone number, or prefer to ask a question first? Contact Behzad directly. Please do not send sensitive documents with your first inquiry.</p>
            <ContactActions placement="readiness_form" />
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F6F6B]">
            Step {step} of 2
          </p>
          <p className="mb-4 text-sm text-[#17313A]/80">Income and credit are optional; contact details and budget are required for this report.</p>

          {Object.keys(fieldErrors).length > 0 && (
            <div role="alert" className="mb-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
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

          <fieldset disabled={showReport} className="grid min-w-0 gap-4 md:grid-cols-2">
            {step === 1 ? (
              <>
                <FieldLabel label="Full Name">
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.name))}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(fieldErrors.name)}
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                  {fieldErrors.name && <p className="text-xs font-semibold text-red-600">{fieldErrors.name}</p>}
                </FieldLabel>

                <FieldLabel label="Phone Number">
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.phone))}
                    placeholder="416 555 1234"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(fieldErrors.phone)}
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                  {fieldErrors.phone && <p className="text-xs font-semibold text-red-600">{fieldErrors.phone}</p>}
                </FieldLabel>

                <FieldLabel label="Email Address" wide>
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.email))}
                    placeholder="you@email.com"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    aria-invalid={Boolean(fieldErrors.email)}
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
                    <option>Toronto</option>
                    <option>Vaughan</option>
                    <option>Richmond Hill</option>
                    <option>Markham</option>
                    <option>Scarborough</option>
                    <option>Other GTA area</option>
                  </select>
                </FieldLabel>

                {form.area === "Other GTA area" && (
                  <FieldLabel label="Which GTA area?" wide>
                    <input
                      className={getFieldControlClassName(Boolean(fieldErrors.otherArea))}
                      placeholder="For example: Mississauga or Etobicoke"
                      maxLength={80}
                      value={form.otherArea}
                      onChange={(e) => updateField("otherArea", e.target.value)}
                    />
                    {fieldErrors.otherArea && <p className="text-xs font-semibold text-red-600">{fieldErrors.otherArea}</p>}
                  </FieldLabel>
                )}

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

                <FieldLabel label="Monthly household income (optional)">
                  <input
                    className={getFieldControlClassName(Boolean(fieldErrors.income))}
                    type="number" inputMode="numeric" placeholder="Example: 7500"
                    value={form.income}
                    onChange={(e) => updateField("income", e.target.value)}
                  />
                  {fieldErrors.income && <p className="text-xs font-semibold text-red-600">{fieldErrors.income}</p>}
                </FieldLabel>

                <FieldLabel label="Credit score (optional)">
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
                    <option>Not sure yet</option>
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
                    <option>Not sure yet</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </FieldLabel>

                <button
                  type="submit"
                  disabled={isSubmitting || !mounted || Boolean(existingReference)}
                  className="rounded-2xl bg-[#2F6F6B] px-6 py-4 font-semibold text-white transition hover:bg-[#17313A] disabled:opacity-60 md:col-span-2"
                >
                  {!mounted ? "Loading..." : isSubmitting ? "Sending..." : "Get my readiness report"}
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
          </fieldset>

          {showReport && <p className="mt-4 text-sm font-semibold text-[#17313A]/75">This report is based on the details you submitted. {canRequestMatchingOptions ? "Your request has already been sent; there is no need to submit it again." : "Delivery could not be confirmed. Use the email link below and include your reference."}</p>}

          {status && (
              <p role="status" aria-live="polite" className={statusClassName}>
              {status}
              {status.toLowerCase().includes("could not confirm") && (
                <> <a className="underline" href="mailto:behzadfard.realtor@gmail.com?subject=Rental%20inquiry%20delivery">Email Behzad</a></>
              )}
            </p>
          )}

          {showReport && (
            <ReadinessReport
              approvalReport={approvalReport}
              canRequestMatchingOptions={canRequestMatchingOptions}
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
