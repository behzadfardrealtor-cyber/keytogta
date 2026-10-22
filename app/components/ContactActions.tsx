"use client";

import { trackEvent } from "../lib/analytics";

export default function ContactActions({ placement }: { placement: "contact_section" | "readiness_form" }) {
  function trackContact(method: "email" | "phone") {
    // An intent click is not a delivered or qualified lead. No contact details
    // or form values belong in this analytics event.
    trackEvent("contact_click", { contact_method: method, placement });
  }

  const className = "inline-flex min-h-12 items-center justify-center rounded-xl border border-[#2F6F6B]/40 bg-white px-4 py-3 text-center text-sm font-semibold text-[#17313A] hover:bg-[#DCE8E3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]";

  return (
    <div className="flex flex-wrap gap-3">
      <a href="mailto:behzadfard.realtor@gmail.com?subject=GTA%20rental%20inquiry" onClick={() => trackContact("email")} className={className}>
        Email Behzad
      </a>
      <a href="tel:+16477081144" onClick={() => trackContact("phone")} className={className}>
        Call 647-708-1144
      </a>
    </div>
  );
}
