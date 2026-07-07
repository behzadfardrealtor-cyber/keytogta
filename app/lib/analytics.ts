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
  // Push directly to dataLayer rather than calling window.gtag(), since the
  // afterInteractive gtag script isn't guaranteed to have run yet by the time
  // a page's own useEffect fires. dataLayer is queued and drained once gtag.js
  // loads, so this works regardless of script load order.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", eventName, params]);
}

export function createLeadId(): string {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
}
