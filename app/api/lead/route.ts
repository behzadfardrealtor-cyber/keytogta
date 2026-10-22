// The browser cannot inspect an Apps Script response because its web app does
// not return CORS headers. This same-origin route checks the actual response.
const LEAD_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby8VRgDe26w8oqqwIHMCXbtawTyDFueBsi3iZogL_Kxu5qZ9ZQUHnOnRQeEXQsflN6B/exec";
const SUBSCRIBER_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwjBSPBy2OGu0y4S79BIs_hAQqMd4nKOV7-T4lZjP21ODbdvIZDvZdTjh7Kv88fdGvqWw/exec";

export const runtime = "nodejs";

const responseHeaders = { "Cache-Control": "no-store" };

function failure(status: number) {
  return Response.json({ success: false }, { status, headers: responseHeaders });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return failure(403);

  if (Number(request.headers.get("content-length")) > 12000) return failure(413);

  let data: unknown;
  try {
    const body = await request.text();
    if (body.length > 12000) return failure(413);
    data = JSON.parse(body);
  } catch {
    return failure(400);
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) return failure(400);
  const { kind, payload } = data as { kind?: unknown; payload?: unknown };
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return failure(400);

  const fields = payload as Record<string, unknown>;
  const isInquiry = kind === "rental_inquiry";
  const isLead = kind === "rental_readiness" || kind === "matching_options" || isInquiry;
  const isSubscriber = kind === "email_subscriber";
  if (!isLead && !isSubscriber) return failure(400);

  if (isLead && !["leadId", "name"].every(
    (key) => typeof fields[key] === "string" && (fields[key] as string).trim().length > 0
  )) return failure(400);
  if (isInquiry) {
    const email = typeof fields.email === "string" ? fields.email.trim() : "";
    const phone = typeof fields.phone === "string" ? fields.phone.trim() : "";
    if (!email && !phone) return failure(400);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return failure(400);
    if (phone && (phone.replace(/\D/g, "").length < 7 || phone.replace(/\D/g, "").length > 15)) return failure(400);
    if (!["area", "moveIn", "propertyType"].every(
      (key) => typeof fields[key] === "string" && (fields[key] as string).trim().length > 0
    )) return failure(400);
    if (["name", "email", "phone", "area", "moveIn", "propertyType", "budget", "bedrooms", "parking", "question"].some(
      (key) => typeof fields[key] === "string" && (fields[key] as string).length > 500
    )) return failure(400);
  } else if (isLead && !["phone", "email"].every(
    (key) => typeof fields[key] === "string" && (fields[key] as string).trim().length > 0
  )) return failure(400);
  if (isSubscriber && (typeof fields.email !== "string" || !fields.email.includes("@") || fields.consent !== true)) {
    return failure(400);
  }

  try {
    const upstream = await fetch(isLead ? LEAD_SCRIPT_URL : SUBSCRIBER_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(20000),
    });
    if (!upstream.ok) return failure(502);

    const result: unknown = await upstream.json();
    if (!result || typeof result !== "object") return failure(502);
    const acknowledgement = result as { success?: unknown; status?: unknown };
    if ((isLead && acknowledgement.success !== true) ||
        (isSubscriber && acknowledgement.status !== "success")) {
      return failure(502);
    }

    return Response.json({ success: true }, { headers: responseHeaders });
  } catch {
    // A timeout may occur after the script has saved a row. The caller must
    // show an unconfirmed state instead of claiming delivery or auto-retrying.
    return failure(502);
  }
}
