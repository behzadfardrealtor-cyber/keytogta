export async function submitLead(kind: "rental_readiness" | "matching_options" | "email_subscriber", payload: object) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, payload }),
  });

  if (!response.ok) throw new Error("Delivery could not be confirmed");
  const result: unknown = await response.json();
  if (!result || typeof result !== "object" || (result as { success?: unknown }).success !== true) {
    throw new Error("Delivery could not be confirmed");
  }
}
