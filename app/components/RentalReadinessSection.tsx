"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createLeadId, trackEvent } from "../lib/analytics";
import {
  calculateApprovalReport,
  initialRentalForm,
  normalizeCanadianPhone,
  type RentalForm,
  validateRentalForm,
} from "../rental-readiness";
import RentalReadinessForm from "./RentalReadinessForm";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8VRgDe26w8oqqwIHMCXbtawTyDFueBsi3iZogL_Kxu5qZ9ZQUHnOnRQeEXQsflN6B/exec";

function getScoreStyle(score: number) {
  if (score >= 85) {
    return {
      label: "Strong Position",
      simpleLabel: "Strong Position",
      tone: "green",
      badge: "bg-green-500",
      border: "border-green-300/30",
      bar: "bg-green-500",
      glow: "shadow-green-900/20",
      message: "Your profile looks competitive for a focused rental search.",
    };
  }

  if (score >= 70) {
    return {
      label: "Review Recommended",
      simpleLabel: "Review Recommended",
      tone: "yellow",
      badge: "bg-yellow-500",
      border: "border-yellow-300/30",
      bar: "bg-yellow-500",
      glow: "shadow-yellow-900/20",
      message: "Your profile may work, but some details should be reviewed first.",
    };
  }

  return {
    label: "Needs Improvement",
    simpleLabel: "Needs Improvement",
    tone: "red",
    badge: "bg-red-500",
    border: "border-red-300/30",
    bar: "bg-red-500",
    glow: "shadow-red-900/20",
    message: "Your profile may need improvement before applying.",
  };
}

export default function RentalReadinessSection() {
  // Guards against a form-hydration race: RentalReadinessSection is loaded via
  // dynamic() as a separate client chunk, so the SSR'd <form> can be visible
  // and even appear interactive before its onSubmit handler is actually wired
  // up. Submitting in that window falls through to the browser's native form
  // submission (no action/method set), which just reloads the page and
  // silently drops the lead. Keep the submit button disabled until this
  // component has actually mounted client-side, which only happens once
  // hydration for this chunk has completed.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [matchingOptionsStatus, setMatchingOptionsStatus] = useState("");
  const [isSubmittingMatchingOptions, setIsSubmittingMatchingOptions] = useState(false);
  const [leadId, setLeadId] = useState<string | null>(null);

  const [form, setForm] = useState<RentalForm>(initialRentalForm);
  const [debouncedForm, setDebouncedForm] = useState<RentalForm>(initialRentalForm);
  const hasFiredFormStart = useRef(false);

  function updateField(field: keyof RentalForm, value: string) {
    if (!hasFiredFormStart.current) {
      hasFiredFormStart.current = true;
      trackEvent("form_start");
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setShowReport(false);
    setStatus("");
  }

  // Debounce the live score preview so typing doesn't trigger a
  // recalculation on every keystroke - the score display lags 300ms
  // behind the fields, but the fields themselves update immediately.
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedForm(form), 300);
    return () => clearTimeout(timeout);
  }, [form]);

  const approvalReport = useMemo(
    () => calculateApprovalReport(debouncedForm),
    [debouncedForm]
  );

  const scorePreview = approvalReport.score;
  const resultPreview = approvalReport.strength;
  const scoreStyle = getScoreStyle(scorePreview);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");

    const errors = validateRentalForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setShowReport(false);
      setStatus("Please complete the required fields before getting your report.");
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    const phoneDigits = normalizeCanadianPhone(form.phone);
    const newLeadId = createLeadId();
    // Recompute from the live form (not the debounced preview value) so the
    // submitted payload always reflects exactly what's in the fields right
    // now, regardless of the 300ms preview lag.
    const submittedReport = calculateApprovalReport(form);

    const payload = {
      ...form,
      normalizedPhone: phoneDigits,
      leadId: newLeadId,
      leadSource: "Key to GTA Website",
      clientType: "Renter",
      matchType: "Rental Approval Strength Report",
      internalScore: String(submittedReport.score),
      score: String(submittedReport.score),
      result: submittedReport.strength,
      displayResult: submittedReport.displayStrength,
      priority: submittedReport.priority,
      rentToIncomeRatio: submittedReport.rentToIncomeRatio
        ? `${submittedReport.rentToIncomeRatio}%`
        : "",
      typicalComfortRange: submittedReport.recommendedRentRange,
      recommendedRentRange: submittedReport.recommendedRentRange,
      approvalExplanation: submittedReport.explanation,
      userFriendlySummary: submittedReport.userFriendlySummary,
      strengths: submittedReport.strengths.join(", "),
      concerns: submittedReport.concerns.join(", "),
      missingDocuments: submittedReport.missingDocuments.join(", "),
      nextAction: submittedReport.nextAction,
      notes: "Website approval strength lead",
      status: "New Lead",
      followUpStage: "Initial",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setLeadId(newLeadId);
      trackEvent("generate_lead", { lead_source: "readiness_form", lead_id: newLeadId });
      setShowReport(true);
      setStatus("Your report is ready below. Your information was also sent to Behzad for review.");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleRequestMatchingOptions() {
    setMatchingOptionsStatus("");
    setIsSubmittingMatchingOptions(true);

    const phoneDigits = normalizeCanadianPhone(form.phone);
    const matchingLeadId = leadId ?? createLeadId();
    // Same freshness reasoning as handleSubmit - don't rely on the
    // debounced preview value for the submitted payload.
    const submittedReport = calculateApprovalReport(form);

    const payload = {
      ...form,
      normalizedPhone: phoneDigits,
      leadId: matchingLeadId,
      leadSource: "Key to GTA Website",
      clientType: "Renter",
      matchType: "Rental Approval Strength Report",
      internalScore: String(submittedReport.score),
      score: String(submittedReport.score),
      result: submittedReport.strength,
      displayResult: submittedReport.displayStrength,
      priority: submittedReport.priority,
      rentToIncomeRatio: submittedReport.rentToIncomeRatio
        ? `${submittedReport.rentToIncomeRatio}%`
        : "",
      typicalComfortRange: submittedReport.recommendedRentRange,
      recommendedRentRange: submittedReport.recommendedRentRange,
      approvalExplanation: submittedReport.explanation,
      userFriendlySummary: submittedReport.userFriendlySummary,
      strengths: submittedReport.strengths.join(", "),
      concerns: submittedReport.concerns.join(", "),
      missingDocuments: submittedReport.missingDocuments.join(", "),
      nextAction: "Send shortlist / contact quickly",
      notes: "Requested matching rental options after readiness check",
      status: "New Lead",
      followUpStage: "Initial",
      requestType: "Matching Rental Options",
      matchingOptionsRequested: true,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      trackEvent("generate_lead", { lead_source: "matching_options", lead_id: matchingLeadId });
      setMatchingOptionsStatus(
        "Thanks - your request was sent to Behzad. He'll review your profile and send realistic rental options that match your search criteria."
      );
    } catch {
      setMatchingOptionsStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmittingMatchingOptions(false);
    }
  }

  return (
    <>
      <RentalReadinessForm
        approvalReport={approvalReport}
        fieldErrors={fieldErrors}
        form={form}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isSubmittingMatchingOptions={isSubmittingMatchingOptions}
        matchingOptionsStatus={matchingOptionsStatus}
        mounted={mounted}
        onRequestMatchingOptions={handleRequestMatchingOptions}
        resultPreview={resultPreview}
        scorePreview={scorePreview}
        scoreStyle={scoreStyle}
        showReport={showReport}
        status={status}
        updateField={updateField}
      />

      {!showReport && (
        <a
          href="#rental-match"
          className="fixed bottom-5 left-5 right-5 z-50 rounded-2xl bg-[#F5C979] px-6 py-4 text-center font-semibold text-[#070A12] shadow-2xl md:hidden"
        >
          Get My Rental Shortlist
        </a>
      )}
    </>
  );
}
