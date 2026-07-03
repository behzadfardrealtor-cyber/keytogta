"use client";

import { useState } from "react";
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

type SectionId = "meaning" | "signs" | "steps" | "documents";

function getMeterColor(score: number) {
  if (score >= 85) return "bg-green-500";
  if (score >= 70) return "bg-lime-500";
  if (score >= 50) return "bg-amber-500";
  return "bg-red-500";
}

export default function ReadinessReport({
  approvalReport,
  isSubmittingMatchingOptions,
  matchingOptionsStatus,
  onRequestMatchingOptions,
  scoreStyle,
}: ReadinessReportProps) {
  const [openSection, setOpenSection] = useState<SectionId | null>(null);

  const toggle = (id: SectionId) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  const meterColor = getMeterColor(approvalReport.score);
  const meterWidth = `${Math.max(4, Math.min(100, approvalReport.score))}%`;

  const strengths =
    approvalReport.strengths.length > 0
      ? approvalReport.strengths
      : ["Some strengths may appear after more details are reviewed."];

  const concerns =
    approvalReport.concerns.length > 0
      ? approvalReport.concerns
      : ["No major concern detected from the information provided."];

  const CTAButton = ({ full = true }: { full?: boolean }) => (
    <button
      type="button"
      onClick={onRequestMatchingOptions}
      disabled={isSubmittingMatchingOptions}
      className={`rounded-2xl bg-[#070A12] px-6 py-4 text-center font-black text-[#F5C979] shadow-lg transition hover:bg-black disabled:opacity-60 ${
        full ? "w-full" : ""
      }`}
    >
      {isSubmittingMatchingOptions ? "Sending..." : "Yes, send me matching rental options"}
    </button>
  );

  return (
    <div className="mt-6">
      {/* SUMMARY — everything essential, zero scroll required */}
      <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-xl ring-1 ring-black/5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E6254]">
          Your Rental Readiness
        </p>

        <h3 className="mt-2 text-3xl font-black leading-tight text-[#070A12]">
          {scoreStyle.label}
        </h3>

        <div className="mt-4">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
            <div
              className={`h-full rounded-full ${meterColor} transition-all`}
              style={{ width: meterWidth }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#6E6254]">
            <span>Just starting</span>
            <span>Ready to apply</span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#3D352D]">
          {approvalReport.rentRatioLabel}
        </p>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-black/[0.04] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6E6254]">
            Comfort range
          </p>
          <p className="text-base font-black text-[#070A12]">
            {approvalReport.recommendedRentRange}
          </p>
        </div>

        <div className="mt-5">
          <CTAButton />
        </div>
      </div>

      {/* SCROLL HINT */}
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#6E6254]">
        See the full breakdown ↓
      </p>

      {/* DETAIL — collapsed by default, opt-in */}
      <div className="mt-3 divide-y divide-black/10 overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-xl ring-1 ring-black/5">
        {/* What this means */}
        <div>
          <button
            type="button"
            onClick={() => toggle("meaning")}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-base font-bold text-[#070A12]">What this means</span>
            <span
              className={`text-xl font-bold text-[#D8A94F] transition-transform ${
                openSection === "meaning" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openSection === "meaning" && (
            <div className="px-6 pb-6">
              <p className="text-lg font-bold text-[#070A12]">
                {approvalReport.userFriendlySummary}
              </p>
              <p className="mt-3 leading-7 text-[#3D352D]">{approvalReport.explanation}</p>
              <p className="mt-4 rounded-xl bg-[#F5EBDD] p-3 text-sm font-semibold leading-6 text-[#4A4035]">
                {approvalReport.reassuringNote}
              </p>
              <p className="mt-4 text-xs leading-5 text-[#6E6254]">
                This is a comfort range, not a hard limit. Many applicants rent above this range
                when credit, income stability, savings, or co-applicants are strong. This is a
                planning snapshot, not a pass/fail decision.
              </p>
            </div>
          )}
        </div>

        {/* Positive signs & what to improve */}
        <div>
          <button
            type="button"
            onClick={() => toggle("signs")}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-base font-bold text-[#070A12]">
              Positive signs &amp; what to improve
            </span>
            <span
              className={`text-xl font-bold text-[#D8A94F] transition-transform ${
                openSection === "signs" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openSection === "signs" && (
            <div className="grid gap-4 px-6 pb-6 md:grid-cols-2">
              <div className="rounded-2xl bg-green-50 p-4">
                <p className="font-bold text-green-900">Positive signs</p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-green-900/80">
                  {strengths.slice(0, 4).map((item) => (
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
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="font-bold text-amber-950">What to improve</p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-amber-950/80">
                  {concerns.slice(0, 4).map((item) => (
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
          )}
        </div>

        {/* Smart next steps */}
        <div>
          <button
            type="button"
            onClick={() => toggle("steps")}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-base font-bold text-[#070A12]">Smart next steps</span>
            <span
              className={`text-xl font-bold text-[#D8A94F] transition-transform ${
                openSection === "steps" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openSection === "steps" && (
            <div className="px-6 pb-6">
              <ul className="grid gap-2 text-sm leading-6 text-[#3D352D]">
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
          )}
        </div>

        {/* Documents & important note */}
        <div>
          <button
            type="button"
            onClick={() => toggle("documents")}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-base font-bold text-[#070A12]">
              Documents that usually help
            </span>
            <span
              className={`text-xl font-bold text-[#D8A94F] transition-transform ${
                openSection === "documents" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openSection === "documents" && (
            <div className="px-6 pb-6">
              {approvalReport.missingDocuments.length > 0 ? (
                <ul className="grid gap-2 text-sm leading-6 text-[#3D352D]">
                  {approvalReport.missingDocuments.map((doc) => (
                    <li key={doc} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8A94F]"
                      />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-6 text-[#3D352D]">
                  Government ID, recent pay stubs, full Equifax report, and proof of funds when
                  needed. Extra documents can be reviewed later.
                </p>
              )}
              <p className="mt-4 text-xs leading-5 text-black/60">
                This tool is an estimate, not a guarantee. Final approval depends on the
                landlord, listing agent, complete application, supporting documents, and current
                market competition.
              </p>
            </div>
          )}
        </div>
      </div>

      <a
        href="#areas"
        className="mt-4 inline-flex rounded-2xl border border-black/10 px-5 py-4 text-center font-bold text-[#070A12]"
      >
        Compare GTA Areas
      </a>

      {matchingOptionsStatus && (
        <p className="mt-4 rounded-2xl bg-black/[0.04] p-4 text-sm font-medium leading-6 text-[#3D352D]">
          {matchingOptionsStatus}
        </p>
      )}

      {/* STICKY — always in reach while scrolling the detail sections */}
      <div className="sticky bottom-4 z-20 mt-6">
        <div className="rounded-2xl bg-[#F5C979] p-1 shadow-2xl">
          <CTAButton />
        </div>
        <p className="mt-2 text-center text-[0.7rem] font-semibold text-[#6E6254]">
          No pressure — this is only a planning request, not a rental application.
        </p>
      </div>
    </div>
  );
}