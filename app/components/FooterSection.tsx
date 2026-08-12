import Link from "next/link";

type FooterSectionProps = {
  variant?: "dark" | "light";
};

export default function FooterSection({ variant = "dark" }: FooterSectionProps) {
  const isLight = variant === "light";
  const footerClassName = isLight
    ? "border-t border-[#E8E4DD] px-6 py-8"
    : "border-t border-white/12 px-6 py-8";
  const primaryTextClassName = isLight
    ? "mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#17313A]/58 md:flex-row md:items-center md:justify-between"
    : "mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between";
  const secondaryTextClassName = isLight
    ? "mx-auto mt-3 max-w-7xl text-sm text-[#17313A]/58"
    : "mx-auto mt-3 max-w-7xl text-sm text-white/50";
  const disclosureClassName = isLight
    ? "mx-auto mt-4 max-w-7xl text-xs leading-relaxed text-[#17313A]/62"
    : "mx-auto mt-4 max-w-7xl text-xs leading-relaxed text-white/55";
  const linkClassName = isLight
    ? "underline underline-offset-2 hover:text-[#2F6F6B]"
    : "underline underline-offset-2 hover:text-white/60";

  return (
      <footer className={footerClassName}>
        <div className={primaryTextClassName}>
          <p>© 2026 Key to GTA. Rental and buyer guidance across the GTA.</p>
          <p>Built for renters, buyers, and newcomers looking for a clearer next step.</p>
        </div>
        <p className={secondaryTextClassName}>
          Behzad Fard, Real Estate Agent, brokered by Property.ca Inc., Brokerage.
        </p>
        <div className={disclosureClassName}>
          <p>
            I use analytics tools including Google Analytics and Microsoft Clarity to see how visitors use this site, so I can improve it. By using this site, you agree to this data collection. See my{" "}
            <Link href="/privacy" className={linkClassName}>
              Privacy Policy
            </Link>{" "}
            for details.{" "}
            <Link href="/about" className={linkClassName}>
              About Key to GTA
            </Link>
            .
          </p>
        </div>
      </footer>
  );
}
