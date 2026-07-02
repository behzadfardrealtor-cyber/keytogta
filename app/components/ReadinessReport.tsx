"use client";

import type { ApprovalReport } from "../rental-readiness";

type ScoreStyle = {
  label: string;
  border: string;
  glow: string;
  message: string;
};

type ReadinessReportProps = {
  approvalReport: ApprovalReport;
  isSubmittingMatchingOptions: boolean;
  matchingOptionsStatus: string;
  onRequestMatchingOptions: () => void | Promise<void>;
  scoreStyle: ScoreStyle;
};

export default function ReadinessReport({
  approvalReport,
  isSubmittingMatchingOptions,
  matchingOptionsStatus,
  onRequestMatchingOptions,
  scoreStyle,
}: ReadinessReportProps) {
  return (
    <div className="mt-6 rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-xl ring-1 ring-black/5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E6254]">
            Your Rental Readiness
          </p>
          <h3 className="mt-2 text-3xl font-black text-[#070A12]">
            {approvalReport.displayStrength}
          </h3>
          <p className="mt-2 text-sm font-medium text-[#6E6254]">
            Based on the details you entered
          </p>
        </div>

        <div
          className={`min-w-[240px] rounded-2xl border ${scoreStyle.border} bg-[#070A12] px-5 py-5 text-white shadow-2xl ${scoreStyle.glow}`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Approval outlook
          </p>

          <p className="mt-3 text-2xl font-black leading-tight">
            {scoreStyle.label}
          </p>

          <p className="mt-3 text-sm leading-6 text-white/65">
            {scoreStyle.message}
          </p>

          <div className="mt-4 rounded-2xl bg-white/[0.07] p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Internal readiness
            </p>
            <p className="mt-1 text-sm font-semibold text-white/80">
              Used to guide your plan - not shown as a pass/fail score.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-black/[0.04] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6E6254]">
            Rent-to-Income
          </p>
          <p className="mt-2 text-sm leading-6 text-[#3D352D]">
            {approvalReport.rentRatioLabel}
          </p>
        </div>

        <div className="rounded-2xl bg-black/[0.04] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6E6254]">
            Typical Comfort Range
          </p>
          <p className="mt-2 text-lg font-bold text-[#070A12]">
            {approvalReport.recommendedRentRange}
          </p>
          <p className="mt-2 text-xs leading-5 text-[#6E6254]">
            This is a comfort range, not a hard limit. Many applicants rent above this range when credit, income stability, savings, or co-applicants are strong.
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-black/[0.03] p-4 text-sm leading-6 text-[#4A4035]">
        <span className="font-bold">How to read this:</span> this is a planning snapshot, not a pass/fail decision. The goal is to help you choose realistic listings and prepare a stronger application package.
      </div>

      <div className="mt-5 rounded-2xl border border-[#D8C7AA]/60 bg-gradient-to-br from-[#F5EBDD] to-white p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6E6254]">
          What this means
        </p>
        <p className="mt-2 text-lg font-bold text-[#070A12]">
          {approvalReport.userFriendlySummary}
        </p>
        <p className="mt-3 leading-7 text-[#3D352D]">
          {approvalReport.explanation}
        </p>
        <p className="mt-4 rounded-xl bg-white/70 p-3 text-sm font-semibold leading-6 text-[#4A4035]">
          {approvalReport.reassuringNote}
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-green-50 p-5">
          <p className="font-bold text-green-900">Positive signs</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-green-900/80">
            {(approvalReport.strengths.length > 0
              ? approvalReport.strengths
              : ["Some strengths may appear after more details are reviewed."]
            ).slice(0, 4).map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-green-600"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-amber-50 p-5">
          <p className="font-bold text-amber-950">What to improve</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-amber-950/80">
            {(approvalReport.concerns.length > 0
              ? approvalReport.concerns
              : ["No major concern detected from the information provided."]
            ).slice(0, 4).map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[#F5EBDD] p-5">
        <p className="font-bold text-[#070A12]">Smart next steps</p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#3D352D]">
          {approvalReport.helpfulSteps.slice(0, 4).map((step) => (
            <li key={step} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8A94F]"
              />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 rounded-2xl border border-black/10 bg-[#070A12] p-5 text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F5C979]">
              Rental options request
            </p>
            <p className="mt-2 text-lg font-bold leading-7 text-white">
              Want current rental options that fit your profile?
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Based on your budget, preferred area, income range, credit range, and move-in date, Behzad can send you realistic GTA rental listings currently available in the market.
            </p>
            <p className="mt-2 text-xs font-semibold leading-5 text-white/50">
              No pressure - this is only a planning request, not a rental application.
            </p>
          </div>

          <button
            type="button"
            onClick={onRequestMatchingOptions}
            disabled={isSubmittingMatchingOptions}
            className="w-full rounded-2xl bg-[#F5C979] px-6 py-4 text-center font-black text-[#070A12] disabled:opacity-60 md:w-auto md:whitespace-nowrap"
          >
            {isSubmittingMatchingOptions ? "Sending..." : "Yes, send me matching rental options"}
          </button>
        </div>

        {matchingOptionsStatus && (
          <p className="mt-4 rounded-2xl bg-white/[0.07] p-4 text-sm font-medium leading-6 text-white/85">
            {matchingOptionsStatus}
          </p>
        )}
      </div>

      <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.04] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6E6254]">
          Important note
        </p>
        <p className="mt-2 text-xs leading-5 text-black/60">
          This tool is an estimate, not a guarantee. Final approval depends on the landlord,
          listing agent, complete application, supporting documents, and current market competition.
        </p>
      </div>

      <a
        href="#areas"
        className="mt-4 inline-flex rounded-2xl border border-black/10 px-5 py-4 text-center font-bold text-[#070A12]"
      >
        Compare GTA Areas
      </a>
    </div>
  );
}
