"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createLeadId, trackEvent } from "../lib/analytics";
import { submitLead } from "../lib/submit-lead";
import { getConfirmedLead, leadSessionEvent, rememberConfirmedLead } from "../lib/lead-session";
import {
  calculateApprovalReport,
  initialRentalForm,
  normalizeCanadianPhone,
  type RentalForm,
  validateRentalForm,
} from "../rental-readiness";
import RentalReadinessForm from "./RentalReadinessForm";

function getScoreStyle(score: number) {
  if (score === 100) {
    return {
      label: "Documents ready to discuss",
      simpleLabel: "Documents ready",
      tone: "green",
      badge: "bg-green-600",
      border: "border-green-300/30",
      bar: "bg-green-600",
      glow: "shadow-green-900/20",
      message: "You marked both document items ready.",
    };
  }

  if (score >= 50) {
    return {
      label: "One document item to prepare",
      simpleLabel: "One item to prepare",
      tone: "amber",
      badge: "bg-amber-500",
      border: "border-amber-300/30",
      bar: "bg-amber-500",
      glow: "shadow-amber-900/20",
      message: "You can still discuss your rental search now.",
    };
  }

  return {
    label: "Start your document checklist",
    simpleLabel: "Start your checklist",
    tone: "amber",
    badge: "bg-amber-500",
    border: "border-amber-300/30",
    bar: "bg-amber-500",
    glow: "shadow-amber-900/20",
    message: "You can still ask for help while preparing documents.",
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
  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [submittedReport, setSubmittedReport] = useState<ReturnType<typeof calculateApprovalReport> | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [matchingOptionsStatus, setMatchingOptionsStatus] = useState("");
  const isSubmittingMatchingOptions = false;
  const [leadId, setLeadId] = useState<string | null>(null);
  const [leadDeliveryConfirmed, setLeadDeliveryConfirmed] = useState(false);
  const [existingReference, setExistingReference] = useState<string | null>(null);

  useEffect(() => {
    const refresh = () => setExistingReference(getConfirmedLead());
    refresh();
    window.addEventListener(leadSessionEvent, refresh);
    return () => window.removeEventListener(leadSessionEvent, refresh);
  }, []);

  const [form, setForm] = useState<RentalForm>(initialRentalForm);
  const [debouncedForm, setDebouncedForm] = useState<RentalForm>(initialRentalForm);
  const hasFiredFormStart = useRef(false);
  const isRentalReadinessSubmissionActive = useRef(false);
  const trackedGenerateLeadKeys = useRef<Set<string>>(new Set());

  function trackGenerateLeadOnce(
    leadType: "rental_readiness" | "matching_options",
    leadSource: "readiness_form" | "matching_options",
    currentLeadId: string
  ) {
    const trackingKey = `${leadType}:${currentLeadId}`;
    if (trackedGenerateLeadKeys.current.has(trackingKey)) return;

    trackedGenerateLeadKeys.current.add(trackingKey);
    trackEvent("generate_lead", {
      lead_source: leadSource,
      lead_type: leadType,
      lead_id: currentLeadId,
    });
  }

  function updateField(field: keyof RentalForm, value: string) {
    if (!hasFiredFormStart.current) {
      hasFiredFormStart.current = true;
      trackEvent("form_start", { form_name: "rental_readiness" });
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setShowReport(false);
    setStatus("");
    setMatchingOptionsStatus("");
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

  const visibleReport = showReport && submittedReport ? submittedReport : approvalReport;
  const scorePreview = visibleReport.score;
  const resultPreview = visibleReport.displayStrength;
  const scoreStyle = getScoreStyle(scorePreview);

  function handleContinue(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");

    // Reuse the existing validator, but only surface the Step 1 fields'
    // errors here - budget/income/credit don't exist on the page yet, so
    // they'd always "fail" at this point. The full check still runs again
    // at final submit, unchanged.
    const errors = validateRentalForm(form);
    const step1Errors: Record<string, string> = {};
    if (errors.name) step1Errors.name = errors.name;
    if (errors.phone) step1Errors.phone = errors.phone;
    if (errors.email) step1Errors.email = errors.email;
    if (errors.otherArea) step1Errors.otherArea = errors.otherArea;

    if (Object.keys(step1Errors).length > 0) {
      setFieldErrors(step1Errors);
      trackEvent("form_validation_error", { form_name: "rental_readiness", form_step: 1, invalid_fields: Object.keys(step1Errors).join(",") });
      return;
    }

    setFieldErrors({});
    setStep(2);
    trackEvent("form_step_complete", { form_name: "rental_readiness", form_step: 1 });
  }

  function handleBack() {
    setFieldErrors({});
    setStatus("");
    setStep(1);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (showReport || isRentalReadinessSubmissionActive.current) return;
    const previous = getConfirmedLead();
    if (previous) {
      setExistingReference(previous);
      setStatus(`Your rental request is already recorded under reference ${previous}. Email Behzad to add details instead of sending another form.`);
      return;
    }
    setStatus("");

    const errors = validateRentalForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setShowReport(false);
      setStatus("Please complete the required fields before getting your report.");
      trackEvent("form_validation_error", { form_name: "rental_readiness", form_step: 2, invalid_fields: Object.keys(errors).join(",") });
      return;
    }

    setFieldErrors({});
    if (isRentalReadinessSubmissionActive.current) return;

    isRentalReadinessSubmissionActive.current = true;
    setIsSubmitting(true);

    const phoneDigits = normalizeCanadianPhone(form.phone);
    const newLeadId = createLeadId();
    setLeadId(newLeadId);
    setLeadDeliveryConfirmed(false);
    setMatchingOptionsStatus("");
    // Recompute from the live form (not the debounced preview value) so the
    // submitted payload always reflects exactly what's in the fields right
    // now, regardless of the 300ms preview lag.
    const submittedReport = calculateApprovalReport(form);
    setSubmittedReport(submittedReport);

    const payload = {
      ...form,
      area: form.area === "Other GTA area" ? form.otherArea.trim() : form.area,
      normalizedPhone: phoneDigits,
      leadId: newLeadId,
      leadSource: "Key to GTA Website",
      clientType: "Renter",
      matchType: "Rental Document Readiness Checklist",
      internalScore: "",
      score: "",
      result: `Document checklist: ${submittedReport.score / 50} of 2 marked ready`,
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
      notes: "Document readiness checklist; no automated screening or approval score",
      status: "New Lead",
      followUpStage: "Initial",
    };

    try {
      trackEvent("form_submit_attempt", { form_name: "rental_readiness" });
      await submitLead("rental_readiness", payload);

      setLeadDeliveryConfirmed(true);
      rememberConfirmedLead(newLeadId);
      trackGenerateLeadOnce("rental_readiness", "readiness_form", newLeadId);
      setShowReport(true);
      setStatus("Your report is ready below. Your information was also sent to Behzad for review.");
    } catch {
      trackEvent("form_delivery_unconfirmed", { form_name: "rental_readiness" });
      setShowReport(true);
      setStatus(`Your report is ready below, but we could not confirm delivery to Behzad. Please email him your reference ${newLeadId} rather than submitting the form again.`);
    } finally {
      isRentalReadinessSubmissionActive.current = false;
      setIsSubmitting(false);
    }
  }

  function handleRequestMatchingOptions() {
    if (!leadDeliveryConfirmed || !leadId) return;
    window.location.href = `mailto:behzadfard.realtor@gmail.com?subject=Rental%20options%20${encodeURIComponent(leadId)}`;
  }

  return (
    <>
      <RentalReadinessForm
        approvalReport={visibleReport}
        canRequestMatchingOptions={leadDeliveryConfirmed}
        fieldErrors={fieldErrors}
        form={form}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isSubmittingMatchingOptions={isSubmittingMatchingOptions}
        matchingOptionsStatus={matchingOptionsStatus}
        mounted={mounted}
        onBack={handleBack}
        onContinue={handleContinue}
        onRequestMatchingOptions={handleRequestMatchingOptions}
        resultPreview={resultPreview}
        scorePreview={scorePreview}
        scoreStyle={scoreStyle}
        showReport={showReport}
        status={status}
        existingReference={existingReference}
        step={step}
        updateField={updateField}
      />

    </>
  );
}
