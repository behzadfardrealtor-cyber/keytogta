"use client";

import { useState } from "react";
import { trackEvent } from "../lib/analytics";

// Separate Apps Script Web App, deployed independently from the main rental
// inquiry pipeline. It only appends rows to the "Email Subscribers" tab in
// the same spreadsheet - see LESSONS.md for the setup walkthrough.
const EMAIL_GATE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwjBSPBy2OGu0y4S79BIs_hAQqMd4nKOV7-T4lZjP21ODbdvIZDvZdTjh7Kv88fdGvqWw/exec";

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
  description = "Enter your email and we'll send the download instantly - a printable PDF checklist you can bring to viewings and use while preparing your application.",
  ctaLabel = "Get the Free Checklist",
}: EmailGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      email: trimmedEmail,
      name: name.trim(),
      sourcePage: source,
      utmParams: getUtmParams(),
    };

    try {
      await fetch(EMAIL_GATE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      trackEvent("generate_lead_magnet", { source_page: source });
      triggerDownload(pdfUrl, pdfFilename);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your request. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-[#2F6F6B]/25 bg-[#DCE8E3] p-8 text-center md:p-10">
        <p className="text-2xl font-bold text-[#17313A]">Check your downloads</p>
        <p className="mt-3 leading-7 text-[#17313A]/72">
          Your checklist should have opened or downloaded automatically. If
          you don&apos;t see it, check your browser&apos;s download bar or
          Downloads folder.
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

      <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (optional)"
          className="min-w-0 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-4 text-[#17313A] placeholder:text-[#17313A]/45"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          className="min-w-0 rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-4 text-[#17313A] placeholder:text-[#17313A]/45"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-2xl bg-[#2F6F6B] px-6 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#17313A] disabled:opacity-60 sm:whitespace-nowrap"
        >
          {status === "submitting" ? "Sending..." : ctaLabel}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-red-600">{errorMessage}</p>
      )}

      <p className="mt-4 text-xs leading-5 text-[#17313A]/60">
        We&apos;ll only use your email to send this checklist and occasional
        GTA rental guidance. No spam.
      </p>
    </div>
  );
}
