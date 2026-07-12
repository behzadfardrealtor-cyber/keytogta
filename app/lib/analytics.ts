declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }
  // Call window.gtag() when it exists - once gtag.js finishes loading, it
  // replaces window.gtag with its live processor and stops watching the raw
  // dataLayer array (it only does a one-time backlog scan of the array during
  // its own load). Pushing straight to dataLayer after that point is silently
  // dropped and never reaches GA4. Only fall back to a raw push for the brief
  // window before the inline init script has even defined the gtag() shim -
  // that early push still gets swept up in gtag.js's one-time backlog scan.
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", eventName, params]);
  }
}

export function createLeadId(): string {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
}
