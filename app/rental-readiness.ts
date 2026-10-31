export type RentalForm = {
  name: string;
  phone: string;
  email: string;
  area: string;
  otherArea: string;
  moveIn: string;
  budget: string;
  income: string;
  credit: string;
  parking: string;
  applicants: string;
  paystubs: string;
  jobLetter: string;
  creditReport: string;
};

export type ApprovalReport = {
  strength: "Profile Preview";
  displayStrength: string;
  priority: "High" | "Medium" | "Review";
  score: number;
  rentToIncomeRatio: number | null;
  rentRatioLabel: string;
  recommendedRentRange: string;
  explanation: string;
  nextAction: string;
  helpfulSteps: string[];
  missingDocuments: string[];
  strengths: string[];
  concerns: string[];
  userFriendlySummary: string;
  reassuringNote: string;
};

export const initialRentalForm: RentalForm = {
  name: "",
  phone: "",
  email: "",
  area: "North York",
  otherArea: "",
  moveIn: "0-30 days",
  budget: "",
  income: "",
  credit: "",
  parking: "Not asked",
  applicants: "Not asked",
  paystubs: "Not sure yet",
  jobLetter: "Not asked",
  creditReport: "Not sure yet",
};

const canadianAreaCodes = new Set([
  "204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365",
  "367", "368", "382", "403", "416", "418", "431", "437", "438", "450", "468",
  "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613",
  "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782",
  "807", "819", "825", "867", "873", "879", "902", "905",
]);

const blockedEmailDomains = new Set([
  "example.com",
  "test.com",
  "fake.com",
  "invalid.com",
  "mailinator.com",
  "yopmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
]);

const commonEmailTypos: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmail.con": "gmail.com",
  "hotnail.com": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "outlook.con": "outlook.com",
  "yaho.com": "yahoo.com",
  "yahoo.con": "yahoo.com",
};

export function normalizeCanadianPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

function isLikelyFakePhone(phone: string) {
  const digits = normalizeCanadianPhone(phone);

  if (digits.length !== 10) return true;
  if (/^(\d)\1{9}$/.test(digits)) return true;
  if (digits === "1234567890" || digits === "0123456789") return true;

  const areaCode = digits.slice(0, 3);
  const exchange = digits.slice(3, 6);
  const lineNumber = digits.slice(6);

  if (!canadianAreaCodes.has(areaCode)) return true;
  if (areaCode[0] === "0" || areaCode[0] === "1") return true;
  if (exchange[0] === "0" || exchange[0] === "1") return true;

  // Reject obvious placeholder-style numbers.
  if (/^(\d)\1{2}/.test(areaCode) && /^(\d)\1{2}/.test(exchange)) return true;
  if (/^(\d)\1{3}$/.test(lineNumber)) return true;
  if (digits.includes("000000") || digits.includes("111111") || digits.includes("999999")) return true;

  return false;
}

function isLikelyFakeEmail(email: string) {
  const cleanEmail = email.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailPattern.test(cleanEmail)) {
    return "Enter a valid email address.";
  }

  const [localPart, domain] = cleanEmail.split("@");

  if (commonEmailTypos[domain]) {
    return `Did you mean ${localPart}@${commonEmailTypos[domain]}?`;
  }

  if (blockedEmailDomains.has(domain)) {
    return "Please use a real personal email address.";
  }

  if (
    ["test", "fake", "abc", "abcd", "asdf", "qwerty", "none", "noemail", "sample", "temp", "demo"].includes(
      localPart
    )
  ) {
    return "Please use your real email address.";
  }

  if (/^(\w)\1{4,}$/.test(localPart)) {
    return "Please use a real email address.";
  }

  if (localPart.length < 3) {
    return "Email address looks too short.";
  }

  return "";
}

export function validateRentalForm(form: RentalForm) {
  const errors: Record<string, string> = {};

  if (!form.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (isLikelyFakePhone(form.phone)) {
    errors.phone = "Enter a real Canadian phone number with a valid area code.";
  }

  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else {
    const emailError = isLikelyFakeEmail(form.email);
    if (emailError) errors.email = emailError;
  }

  if (form.area === "Other GTA area" && !form.otherArea.trim()) {
    errors.otherArea = "Tell us which GTA area you prefer.";
  }

  if (!form.budget.trim()) {
    errors.budget = "Monthly budget is required.";
  } else if (Number(form.budget) <= 0) {
    errors.budget = "Enter a valid monthly rent amount.";
  }

  if (form.income.trim() && (!Number.isFinite(Number(form.income)) || Number(form.income) <= 0)) {
    errors.income = "Enter a valid monthly income amount.";
  }

  if (form.credit.trim() && (!Number.isFinite(Number(form.credit)) || Number(form.credit) < 300 || Number(form.credit) > 900)) {
    errors.credit = "Enter a credit score between 300 and 900.";
  }

  return errors;
}

export function calculateApprovalReport(form: RentalForm): ApprovalReport {
  const missingDocuments = [
    form.paystubs !== "Yes" ? "Recent pay stubs or other available income proof" : "",
    form.creditReport !== "Yes" ? "Credit information, if available" : "",
  ].filter(Boolean);
  const readyCount = 2 - missingDocuments.length;
  const score = Math.round((readyCount / 2) * 100);
  const strength: ApprovalReport["strength"] = "Profile Preview";
  const explanation = readyCount === 2
    ? "You have indicated that two common supporting documents are ready. Behzad can review your situation and the specific listing with you."
    : "This is a document preparation checklist. You can still ask Behzad for help while you gather what is available.";
  return {
    strength,
    displayStrength: readyCount === 2 ? "Documents ready to discuss" : "Documents to prepare",
    priority: "Review",
    score,
    rentToIncomeRatio: null,
    rentRatioLabel: `${readyCount} of 2 document items marked ready. This does not measure your chance of rental approval.`,
    recommendedRentRange: "Discuss your budget for each listing",
    explanation,
    nextAction: "Review the renter's search, available documents, and the listing personally.",
    helpfulSteps: [
      ...missingDocuments.map((document) => `Prepare ${document} if available.`),
      "Ask what documents the particular landlord needs before sharing sensitive records.",
      "Discuss your preferred area, timing, and budget with Behzad.",
    ],
    missingDocuments,
    strengths: readyCount ? [`${readyCount} document item${readyCount === 1 ? " is" : "s are"} ready to discuss.`] : [],
    concerns: missingDocuments.length ? ["Some supporting documents may still need preparation."] : [],
    userFriendlySummary: "Your document preparation snapshot is ready.",
    reassuringNote: "No score, income ratio, or document checklist guarantees approval. A missing Canadian credit file is not a negative credit record.",
  };
}
