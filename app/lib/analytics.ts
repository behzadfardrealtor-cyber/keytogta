declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
}

export function createLeadId(): string {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
}
