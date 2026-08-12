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
  if (score >= 85) return "bg-green-600";
  if (score >= 70) return "bg-amber-500";
  if (score >= 50) return "bg-amber-600";
  return "bg-red-600";
}

function renderCTAButton({
  full = true,
  isSubmittingMatchingOptions,
  onRequestMatchingOptions,
}: {
  full?: boolean;
  isSubmittingMatchingOptions: boolean;
  onRequestMatchingOptions: () => void | Promise<void>;
}) {
  return (
    <button
      type="button"
      onClick={onRequestMatchingOptions}
      disabled={isSubmittingMatchingOptions}
      className={`rounded-2xl bg-[#2F6F6B] px-6 py-4 text-center font-black text-white shadow-lg transition hover:bg-[#17313A] disabled:opacity-60 ${
        full ? "w-full" : ""
      }`}
    >
      {isSubmittingMatchingOptions ? "Sending..." : "Yes, send me matching rental options"}
    </button>
  );
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
  const matchingOptionsStatusClassName = matchingOptionsStatus.toLowerCase().includes("wrong")
    ? "mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium leading-6 text-red-800"
    : "mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium leading-6 text-green-800";

  const strengths =
    approvalReport.strengths.length > 0
      ? approvalReport.strengths
      : ["Some strengths may appear after more details are reviewed."];

  const concerns =
    approvalReport.concerns.length > 0
      ? approvalReport.concerns
      : ["No major concern detected from the information provided."];

  return (
    <div className="mt-6">
      {/* SUMMARY — everything essential, zero scroll required */}
      <div className="rounded-[1.75rem] border border-[#E8E4DD] bg-white p-6 shadow-xl ring-1 ring-[#E8E4DD]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F6B]">
          Your Rental Readiness
        </p>

        <h3 className="mt-2 text-3xl font-black leading-tight text-[#17313A]">
          {scoreStyle.label}
        </h3>

        <div className="mt-4">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E8E4DD]">
            <div
              className={`h-full rounded-full ${meterColor} transition-all`}
              style={{ width: meterWidth }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#17313A]/58">
            <span>Just starting</span>
            <span>Ready to apply</span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#17313A]/72">
          {approvalReport.rentRatioLabel}
        </p>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#DCE8E3] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2F6F6B]">
            Comfort range
          </p>
          <p className="text-base font-black text-[#17313A]">
            {approvalReport.recommendedRentRange}
          </p>
        </div>

        <div className="mt-5">
          {renderCTAButton({ isSubmittingMatchingOptions, onRequestMatchingOptions })}
        </div>
      </div>

      {/* SCROLL HINT */}
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#17313A]/58">
        See the full breakdown ↓
      </p>

      {/* DETAIL — collapsed by default, opt-in */}
      <div className="mt-3 divide-y divide-[#E8E4DD] overflow-hidden rounded-[1.75rem] border border-[#E8E4DD] bg-white shadow-xl ring-1 ring-[#E8E4DD]">
        {/* What this means */}
        <div>
          <button
            type="button"
            onClick={() => toggle("meaning")}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-base font-bold text-[#17313A]">What this means</span>
            <span
              className={`text-xl font-bold text-[#2F6F6B] transition-transform ${
                openSection === "meaning" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openSection === "meaning" && (
            <div className="px-6 pb-6">
              <p className="text-lg font-bold text-[#17313A]">
                {approvalReport.userFriendlySummary}
              </p>
              <p className="mt-3 leading-7 text-[#17313A]/72">{approvalReport.explanation}</p>
              <p className="mt-4 rounded-xl bg-[#DCE8E3] p-3 text-sm font-semibold leading-6 text-[#17313A]">
                {approvalReport.reassuringNote}
              </p>
              <p className="mt-4 text-xs leading-5 text-[#17313A]/62">
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
            <span className="text-base font-bold text-[#17313A]">
              Positive signs &amp; what to improve
            </span>
            <span
              className={`text-xl font-bold text-[#2F6F6B] transition-transform ${
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
            <span className="text-base font-bold text-[#17313A]">Smart next steps</span>
            <span
              className={`text-xl font-bold text-[#2F6F6B] transition-transform ${
                openSection === "steps" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openSection === "steps" && (
            <div className="px-6 pb-6">
              <ul className="grid gap-2 text-sm leading-6 text-[#17313A]/72">
                {approvalReport.helpfulSteps.slice(0, 4).map((step) => (
                  <li key={step} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F6F6B]"
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
            <span className="text-base font-bold text-[#17313A]">
              Documents that usually help
            </span>
            <span
              className={`text-xl font-bold text-[#2F6F6B] transition-transform ${
                openSection === "documents" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openSection === "documents" && (
            <div className="px-6 pb-6">
              {approvalReport.missingDocuments.length > 0 ? (
                <ul className="grid gap-2 text-sm leading-6 text-[#17313A]/72">
                  {approvalReport.missingDocuments.map((doc) => (
                    <li key={doc} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                      />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-6 text-[#17313A]/72">
                  Government ID, recent pay stubs, full Equifax report, and proof of funds when
                  needed. Extra documents can be reviewed later.
                </p>
              )}
              <p className="mt-4 text-xs leading-5 text-[#17313A]/60">
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
        className="mt-4 inline-flex rounded-2xl border border-[#17313A]/12 px-5 py-4 text-center font-bold text-[#17313A] hover:bg-[#DCE8E3]"
      >
        Compare GTA Areas
      </a>

      {matchingOptionsStatus && (
        <p className={matchingOptionsStatusClassName}>
          {matchingOptionsStatus}
        </p>
      )}

      {/* STICKY — always in reach while scrolling the detail sections */}
      <div className="sticky bottom-4 z-20 mt-6">
        <div className="rounded-2xl bg-[#DCE8E3] p-1 shadow-2xl">
          {renderCTAButton({ isSubmittingMatchingOptions, onRequestMatchingOptions })}
        </div>
        <p className="mt-2 text-center text-[0.7rem] font-semibold text-[#17313A]/62">
          No pressure — this is only a planning request, not a rental application.
        </p>
      </div>
    </div>
  );
}
