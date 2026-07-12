import Link from "next/link";

export default function FooterSection() {
  return (
      <footer className="border-t border-white/12 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Key to GTA. Rental and buyer guidance across the GTA.</p>
          <p>Built for renters, buyers, and newcomers looking for a clearer next step.</p>
        </div>
        <div className="mx-auto mt-4 max-w-7xl text-xs leading-relaxed text-white/55">
          <p>
            We use analytics tools including Google Analytics and Microsoft Clarity to see how visitors use this site, so we can improve it. By using this site, you agree to this data collection. See our{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-white/60">
              Privacy Policy
            </Link>{" "}
            for details.{" "}
            <Link href="/about" className="underline underline-offset-2 hover:text-white/60">
              About Key to GTA
            </Link>
            .
          </p>
        </div>
      </footer>
  );
}
