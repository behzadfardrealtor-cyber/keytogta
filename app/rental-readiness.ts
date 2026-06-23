export type RentalForm = {
  name: string;
  phone: string;
  email: string;
  area: string;
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
  strength: "Strong Match" | "Good Match" | "Needs Review" | "Review First" | "Profile Preview";
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
  moveIn: "0-30 days",
  budget: "",
  income: "",
  credit: "",
  parking: "Not asked",
  applicants: "Not asked",
  paystubs: "Yes",
  jobLetter: "Not asked",
  creditReport: "Yes",
};

function formatCurrency(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "$0";
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

function roundToNearest50(value: number) {
  return Math.round(value / 50) * 50;
}

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

  if (!form.budget.trim()) {
    errors.budget = "Monthly budget is required.";
  } else if (Number(form.budget) <= 0) {
    errors.budget = "Enter a valid monthly rent amount.";
  }

  if (!form.income.trim()) {
    errors.income = "Monthly household income is required.";
  } else if (Number(form.income) <= 0) {
    errors.income = "Enter a valid monthly income amount.";
  }

  if (!form.credit.trim()) {
    errors.credit = "Credit score is required.";
  } else if (Number(form.credit) < 300 || Number(form.credit) > 900) {
    errors.credit = "Enter a credit score between 300 and 900.";
  }

  return errors;
}

export function calculateApprovalReport(form: RentalForm): ApprovalReport {
  const rent = Number(form.budget || 0);
  const income = Number(form.income || 0);
  const credit = Number(form.credit || 0);

  const rentToIncomeRatio =
    rent > 0 && income > 0 ? Math.round((rent / income) * 100) : null;

  const incomeMultiple = rent > 0 && income > 0 ? income / rent : 0;

  const missingDocuments = [
    form.paystubs !== "Yes" ? "Recent pay stubs" : "",
    form.creditReport !== "Yes" ? "Full Equifax credit report" : "",
  ].filter(Boolean);

  const documentsReady = missingDocuments.length === 0;

  let score = 25;

  if (credit >= 760) score += 25;
  else if (credit >= 700) score += 20;
  else if (credit >= 660) score += 12;
  else if (credit >= 620) score += 6;

  if (incomeMultiple >= 3) score += 30;
  else if (incomeMultiple >= 2.5) score += 24;
  else if (incomeMultiple >= 2.2) score += 16;
  else if (incomeMultiple >= 2) score += 9;
  else if (rent > 0 && income > 0) score += 3;

  if (form.paystubs === "Yes") score += 7;
  if (form.creditReport === "Yes") score += 7;

  if (form.moveIn === "30-60 days") score += 2;
  if (form.moveIn === "60+ days") score += 1;

  score = Math.max(0, Math.min(score, 100));

  // Keep the score aligned with real-world rental risk.
  // A strong credit score and complete documents help, but if the rent is high
  // compared to income, the final score should still show "review needed".
  if (rentToIncomeRatio !== null) {
    if (rentToIncomeRatio >= 45) score = Math.min(score, 62);
    else if (rentToIncomeRatio >= 41) score = Math.min(score, 74);
    else if (rentToIncomeRatio >= 38) score = Math.min(score, 82);
  }

  if (missingDocuments.length >= 2) score = Math.min(score, 68);
  if (credit > 0 && credit < 620) score = Math.min(score, 58);

  const recommendedRentRange =
    income > 0
      ? `${formatCurrency(roundToNearest50(income * 0.35))} - ${formatCurrency(
          roundToNearest50(income * 0.42)
        )}`
      : "Enter income to estimate";

  if (!rent || !income || !credit) {
    return {
      strength: "Profile Preview",
      displayStrength: "Profile Preview",
      priority: "Review",
      score,
      rentToIncomeRatio,
      rentRatioLabel: "Complete rent, income, and credit to see a stronger estimate.",
      recommendedRentRange,
      explanation:
        "Complete your rent target, monthly household income, credit score, and document status to receive a more useful rental readiness estimate.",
      nextAction:
        "Fill in the missing details, then submit the form so Behzad can review your rental profile.",
      helpfulSteps: [
        "Add your monthly rent target.",
        "Add your total monthly household income.",
        "Add your approximate credit score.",
      ],
      missingDocuments,
      strengths: [],
      concerns: ["Important information is still missing."],
      userFriendlySummary:
        "Complete the form to receive a clearer rental readiness estimate before you book viewings or submit an offer.",
      reassuringNote:
        "This is a planning tool, not a final approval decision.",
    };
  }

  let strength: ApprovalReport["strength"] = "Needs Review";

  if (credit >= 720 && rentToIncomeRatio !== null && rentToIncomeRatio <= 35 && documentsReady) {
    strength = "Strong Match";
  } else if (
    credit >= 700 &&
    rentToIncomeRatio !== null &&
    rentToIncomeRatio <= 40 &&
    missingDocuments.length <= 1
  ) {
    strength = "Good Match";
  } else if (
    (rentToIncomeRatio !== null && rentToIncomeRatio >= 45) ||
    credit < 620 ||
    incomeMultiple < 2 ||
    missingDocuments.length >= 2
  ) {
    strength = "Review First";
  }

  const priority: ApprovalReport["priority"] =
    strength === "Strong Match" ? "High" : strength === "Good Match" ? "Medium" : "Review";

  const ratioText =
    rentToIncomeRatio !== null
      ? `Your target rent is about ${rentToIncomeRatio}% of your monthly household income.`
      : "Your rent-to-income ratio could not be calculated yet.";

  const strengths = [
    credit >= 700 ? "Credit score appears competitive." : "",
    documentsReady ? "Key documents appear ready." : "",
    incomeMultiple >= 2.5 ? "Income is reasonably aligned with the rent target." : "",
    form.moveIn !== "0-30 days" ? "Move-in timeline gives more time to prepare." : "",
  ].filter(Boolean);

  const concerns = [
    rentToIncomeRatio !== null && rentToIncomeRatio > 40
      ? "The rent target is above the safer income range many landlords prefer."
      : "",
    credit > 0 && credit < 700 ? "Credit may need extra context or stronger supporting documents." : "",
    missingDocuments.length > 0 ? `Documents to prepare: ${missingDocuments.join(", ")}.` : "",
    incomeMultiple > 0 && incomeMultiple < 2.5 ? "The monthly income may feel tight for this rent range." : "",
  ].filter(Boolean);

  const displayStrengthMap: Record<ApprovalReport["strength"], string> = {
    "Strong Match": "Strong Match",
    "Good Match": "Good Match",
    "Needs Review": "Needs Strategy",
    "Review First": "Review First",
    "Profile Preview": "Profile Preview",
  };

  const explanationMap: Record<ApprovalReport["strength"], string> = {
    "Strong Match":
      "Based on the information provided, your profile appears competitive for many GTA rental applications. A focused shortlist and complete document package would be the next smart step.",
    "Good Match":
      "Your profile looks workable. The right listing, complete documents, and a clean application package can make a big difference before submitting an offer.",
    "Needs Review":
      "Your profile may still be workable, but the rent target is a little high compared to monthly household income. A better strategy, stronger documents, proof of savings, or a stronger co-applicant may improve your chances.",
    "Review First":
      "It is better to review your profile before applying. The rent target, income, credit, or missing documents may make approval harder without a stronger strategy.",
    "Profile Preview":
      "Complete your details to receive a more useful rental readiness estimate.",
  };

  const userFriendlySummaryMap: Record<ApprovalReport["strength"], string> = {
    "Strong Match":
      "Good news \u2014 your profile looks ready for a targeted rental search.",
    "Good Match":
      "You may be close \u2014 the next step is choosing realistic listings and preparing documents properly.",
    "Needs Review":
      "You may still have options, but you should adjust the strategy before booking too many viewings.",
    "Review First":
      "Before applying, it is worth reviewing your profile so you avoid weak offers and wasted time.",
    "Profile Preview":
      "Complete the form to get your report.",
  };

  const reassuringNoteMap: Record<ApprovalReport["strength"], string> = {
    "Strong Match":
      "This does not guarantee approval, but it suggests your starting point is competitive.",
    "Good Match":
      "A good package can still compete well, especially when the unit and rent range fit your profile.",
    "Needs Review":
      "This is not a rejection. It simply means your application may need a smarter strategy, a better rent range, or stronger supporting documents.",
    "Review First":
      "This does not mean you cannot rent. It means you should avoid applying blindly and build a stronger plan first.",
    "Profile Preview":
      "This is a planning tool, not a final approval decision.",
  };

  const helpfulSteps = [
    rentToIncomeRatio !== null && rentToIncomeRatio > 40
      ? `Use ${recommendedRentRange} as a comfort range, but higher rent may still work with stronger documents, savings, or a stronger co-applicant.`
      : "Keep your rent target aligned with your monthly household income.",
    credit < 700
      ? "Prepare a full Equifax report and be ready to explain your credit situation clearly."
      : "Keep your full Equifax report ready for the application package.",
    ...missingDocuments.map((doc) => `Prepare ${doc}.`),
    "Ask Behzad to review your profile and send realistic rental options that fit your situation.",
  ];

  return {
    strength,
    displayStrength: displayStrengthMap[strength],
    priority,
    score,
    rentToIncomeRatio,
    rentRatioLabel: ratioText,
    recommendedRentRange,
    explanation: explanationMap[strength],
    nextAction:
      strength === "Strong Match"
        ? "Contact quickly and prepare a targeted shortlist or viewing options."
        : "Review the profile first, then recommend realistic rental options.",
    helpfulSteps,
    missingDocuments,
    strengths,
    concerns,
    userFriendlySummary: userFriendlySummaryMap[strength],
    reassuringNote: reassuringNoteMap[strength],
  };
}
