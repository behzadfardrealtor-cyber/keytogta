"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { trackEvent } from "../lib/analytics";
import { submitLead } from "../lib/submit-lead";

// Separate Apps Script Web App, deployed independently from the main rental
// inquiry pipeline. It only appends rows to the "Email Subscribers" tab in
// the same spreadsheet - see LESSONS.md for the setup walkthrough.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

function getUtmParams(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const present = UTM_KEYS.filter((key) => params.get(key));
  if (present.length === 0) return "";
  return present.map((key) => `${key}=${params.get(key)}`).join("&");
}

function triggerDownload(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

type EmailGateProps = {
  source: string;
  pdfUrl: string;
  pdfFilename: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
};

export default function EmailGate({
  source,
  pdfUrl,
  pdfFilename,
  heading = "Get the free Ontario rental documents checklist",
  description = "Download a printable PDF checklist for your rental application. You can also choose to receive occasional GTA rental guidance by email.",
  ctaLabel = "Subscribe for rental guidance",
}: EmailGateProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Enter a valid email address.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setErrorMessage("Check the email consent box to subscribe, or download the PDF directly.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      email: trimmedEmail,
      name: name.trim(),
      sourcePage: source,
      utmParams: getUtmParams(),
      consent: true,
    };

    try {
      await submitLead("email_subscriber", payload);
    } catch {
      setStatus("error");
      setErrorMessage("We could not confirm your signup. You can still download the checklist below.");
      return;
    }

    trackEvent("generate_lead_magnet", { source_page: source });
    setStatus("success");
    try {
      triggerDownload(pdfUrl, pdfFilename);
    } catch {
      // The success state includes a direct PDF link if automatic download fails.
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-[#2F6F6B]/25 bg-[#DCE8E3] p-8 text-center md:p-10">
        <p className="text-2xl font-bold text-[#17313A]">You&apos;re subscribed</p>
        <p className="mt-3 leading-7 text-[#17313A]/72">
          Your checklist should have downloaded. If it didn&apos;t, you can{" "}
          <a href={pdfUrl} download={pdfFilename} className="font-semibold underline">download the PDF here</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8 shadow-[0_18px_50px_rgba(23,49,58,.06)] md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F6B]">
        Free Download
      </p>
      <h2 className="mt-3 text-2xl font-bold text-[#17313A] md:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-2xl leading-7 text-[#17313A]/72">{description}</p>

      <a
        href={pdfUrl}
        download={pdfFilename}
        className="mt-6 inline-flex rounded-2xl bg-[#2F6F6B] px-6 py-4 font-bold text-white hover:bg-[#17313A]"
      >
        Download the free PDF
      </a>

      <h3 className="mt-9 text-lg font-bold text-[#17313A]">Want occasional rental guidance by email?</h3>
      <p className="mt-2 text-sm text-[#17313A]/70">This signup is optional. The PDF is available above without an email address.</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
        <input
          type="text"
          disabled={!mounted || status === "submitting"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (optional)"
          className="min-w-0 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-4 text-[#17313A] placeholder:text-[#17313A]/45"
        />
        <input
          type="email"
          disabled={!mounted || status === "submitting"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          className="min-w-0 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-4 text-[#17313A] placeholder:text-[#17313A]/45"
        />
        <label className="flex items-start gap-3 text-sm leading-6 text-[#17313A]/75 sm:col-span-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={!mounted || status === "submitting"}
            className="mt-1.5 h-4 w-4 shrink-0 accent-[#2F6F6B]"
          />
          <span>Yes, I want occasional GTA rental guidance by email from Behzad Fard at Key to GTA. I can unsubscribe by replying or emailing Behzad. See the <Link href="/privacy" className="underline">Privacy Policy</Link>.</span>
        </label>
        <button
          type="submit"
          disabled={!mounted || status === "submitting"}
          className="rounded-2xl border border-[#2F6F6B] px-6 py-4 font-bold text-[#2F6F6B] transition hover:bg-[#DCE8E3] disabled:opacity-60 sm:col-span-3 sm:justify-self-start"
        >
          {!mounted ? "Loading..." : status === "submitting" ? "Subscribing..." : ctaLabel}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-red-600">
          {errorMessage}{" "}
          {errorMessage.includes("could not confirm") && (
            <a className="underline" href={pdfUrl} download={pdfFilename}>Download the PDF</a>
          )}
        </p>
      )}

    </div>
  );
}
