// Store only an opaque reference for this browser session, never contact details.
const key = "keytogta_confirmed_rental_request";
export const leadSessionEvent = "keytogta:lead-confirmed";

export function getConfirmedLead(): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

export function rememberConfirmedLead(reference: string) {
  try {
    window.sessionStorage.setItem(key, reference);
  } catch {
    // The current page can still show its success state if storage is blocked.
  }
  window.dispatchEvent(new Event(leadSessionEvent));
}
