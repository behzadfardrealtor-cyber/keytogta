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
  canRequestMatchingOptions: boolean;
  isSubmittingMatchingOptions: boolean;
  matchingOptionsStatus: string;
  onRequestMatchingOptions: () => void | Promise<void>;
  scoreStyle: ScoreStyle;
};

type SectionId = "meaning" | "signs" | "steps" | "documents";

function getMeterColor(score: number) {
  return score === 100 ? "bg-green-600" : "bg-amber-600";
}

function renderCTAButton({
  full = true,
  disabled = false,
  isSubmittingMatchingOptions,
  onRequestMatchingOptions,
}: {
  full?: boolean;
  disabled?: boolean;
  isSubmittingMatchingOptions: boolean;
  onRequestMatchingOptions: () => void | Promise<void>;
}) {
  return (
    <button
      type="button"
      onClick={onRequestMatchingOptions}
      disabled={isSubmittingMatchingOptions || disabled}
      className={`rounded-2xl bg-[#2F6F6B] px-6 py-4 text-center font-black text-white shadow-lg transition hover:bg-[#17313A] disabled:opacity-60 ${
        full ? "w-full" : ""
      }`}
    >
      {isSubmittingMatchingOptions ? "Opening email..." : "Email Behzad about rental options"}
    </button>
  );
}

export default function ReadinessReport({
  approvalReport,
  canRequestMatchingOptions,
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
  const meterWidth = `${Math.max(0, Math.min(100, approvalReport.score))}%`;
  const matchingOptionsStatusClassName = matchingOptionsStatus.toLowerCase().includes("could not confirm")
    ? "mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium leading-6 text-red-800"
    : "mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium leading-6 text-green-800";

  const strengths =
    approvalReport.strengths.length > 0
      ? approvalReport.strengths
      : ["Some strengths may appear after more details are reviewed."];

  const concerns =
    approvalReport.concerns.length > 0
      ? approvalReport.concerns
      : ["No remaining checklist items marked missing."];

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
            <span>Start preparing</span>
            <span>2 items ready</span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#17313A]/72">
          {approvalReport.rentRatioLabel}
        </p>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#DCE8E3] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2F6F6B]">
            Budget discussion
          </p>
          <p className="text-base font-black text-[#17313A]">
            {approvalReport.recommendedRentRange}
          </p>
        </div>

        <div className="mt-5">
          {canRequestMatchingOptions && <p className="mb-3 text-sm leading-6 text-[#17313A]/70">Your readiness request is already recorded. Email Behzad with your reference if you want to add rental preferences; no second CRM request is created.</p>}
          {canRequestMatchingOptions && renderCTAButton({ isSubmittingMatchingOptions, disabled: Boolean(matchingOptionsStatus), onRequestMatchingOptions })}
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
                This checklist only tracks the documents you marked ready. Income, credit, and
                a numeric ratio do not determine a landlord&apos;s decision or your place in a lead queue.
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
                  Ask what the specific application requires before sharing ID, income proof,
                  credit information, or bank records. Do not upload documents here.
                </p>
              )}
              <p className="mt-4 text-xs leading-5 text-[#17313A]/60">
                This is a preparation checklist, not an approval prediction. The landlord reviews
                each application and available information in its context.
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
          {matchingOptionsStatus.toLowerCase().includes("could not confirm") && (
            <> <a className="underline" href="mailto:behzadfard.realtor@gmail.com?subject=Rental%20options%20delivery">Email Behzad</a></>
          )}
        </p>
      )}

      {/* STICKY — always in reach while scrolling the detail sections */}
      {canRequestMatchingOptions && (
        <div className="sticky bottom-4 z-20 mt-6">
          <div className="rounded-2xl bg-[#DCE8E3] p-1 shadow-2xl">
            {renderCTAButton({ isSubmittingMatchingOptions, disabled: Boolean(matchingOptionsStatus), onRequestMatchingOptions })}
          </div>
          <p className="mt-2 text-center text-[0.7rem] font-semibold text-[#17313A]/62">
            Opens your email app; send the message to add details to your existing request.
          </p>
        </div>
      )}
    </div>
  );
}
