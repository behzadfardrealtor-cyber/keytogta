import type { Metadata } from "next";
import Link from "next/link";
import FooterSection from "../../components/FooterSection";

const pageUrl = "https://www.keytogta.ca/fa/rental-documents-toronto";
const title = "مدارک لازم برای اجاره خانه و کاندو در تورنتو | Key to GTA";
const description =
  "راهنمای فارسی مدارک اجاره خانه و کاندو در تورنتو: نامه اشتغال، فیش حقوقی، کردیت ریپورت، مدرک توان مالی و راهکار تازه‌واردان بدون کردیت کانادایی.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "KeyToGTA.ca",
    type: "article",
    locale: "fa_CA",
    images: [{
      url: "https://www.keytogta.ca/hero-condo.jpg",
      width: 1200,
      height: 630,
      alt: "راهنمای فارسی مدارک اجاره کاندو در تورنتو",
    }],
  },
};

const documents = [
  {
    name: "مدرک شناسایی",
    english: "Government-issued ID",
    detail: "مدرک معتبر با نامی که در فرم درخواست می‌نویسید آماده کنید. نوع مدرک پذیرفته‌شده را برای همان ملک بپرسید.",
  },
  {
    name: "نامه اشتغال یا پیشنهاد کار",
    english: "Employment letter / Job offer",
    detail: "نامه تازه با عنوان شغلی، وضعیت استخدام و راه تماس کارفرما تهیه کنید. اگر تازه استخدام شده‌اید، پیشنهاد کار می‌تواند وضعیت شما را توضیح دهد.",
  },
  {
    name: "مدرک درآمد",
    english: "Pay stubs / Income records",
    detail: "فیش‌های حقوقی اخیر یا، برای کار آزاد، اسناد مرتبط مانند قرارداد، فاکتور یا نامه حسابدار را بر اساس درخواست مشخص ارائه دهید.",
  },
  {
    name: "گزارش اعتباری",
    english: "Credit report",
    detail: "اگر سابقه اعتباری کانادایی دارید، گزارش به‌روز و قابل بررسی آماده کنید. نداشتن سابقه کانادایی با داشتن سابقه بد یکسان نیست.",
  },
  {
    name: "مدرک توان مالی، در صورت درخواست",
    english: "Proof of funds",
    detail: "بپرسید چه چیزی باید تأیید شود. گاهی نامه بانک یا تأیید موجودی بدون نمایش همه تراکنش‌ها پاسخ مناسب‌تری است.",
  },
  {
    name: "معرف و سابقه اجاره، اگر دارید",
    english: "References / Rental history",
    detail: "اطلاعات تماس معرف را با اجازه او آماده کنید. اگر تازه‌وارد هستید، درباره پذیرفته‌شدن معرفی‌نامه موجر قبلی در خارج از کانادا سؤال کنید.",
  },
];

const faqs = [
  {
    question: "برای اجاره خانه در تورنتو چه مدارکی لازم است؟",
    answer: "فهرست واحدی برای همه آگهی‌ها وجود ندارد. معمولاً فرم درخواست، مدرک شناسایی و اطلاعات مرتبط با درآمد، اعتبار یا سابقه اجاره بررسی می‌شود. قبل از فرستادن مدارک حساس، فهرست و دلیل درخواست را برای همان ملک تأیید کنید.",
  },
  {
    question: "بدون کردیت کانادایی می‌توانم برای کاندو درخواست بدهم؟",
    answer: "بله، می‌توانید درخواست بدهید. نبود سابقه اعتباری کانادایی به‌خودی‌خود سابقه منفی نیست. پیشنهاد کار، اسناد درآمد، تأییدیه پس‌انداز و معرفی‌نامه مرتبط می‌توانند وضعیت شما را روشن‌تر کنند؛ پذیرش به شرایط درخواست بستگی دارد.",
  },
  {
    question: "آیا باید شماره SIN یا گردش کامل حساب را بفرستم؟",
    answer: "شماره بیمه اجتماعی را به‌طور پیش‌فرض در بسته مدارک قرار ندهید. اگر اطلاعات بانکی خواسته شد، بپرسید کدام بخش‌ها لازم است و آیا مدرک کم‌جزئیات‌تر پذیرفته می‌شود. عدد یا تاریخ سند را تغییر ندهید.",
  },
  {
    question: "آیا درآمد باید سه برابر اجاره باشد؟",
    answer: "چنین شرط ثابتی برای همه متقاضیان وجود ندارد. راهنمای حقوق بشر انتاریو استفاده از حد ثابت نسبت اجاره به درآمد را برای اجاره‌های معمولی نامناسب می‌داند. مدارک واقعی درآمد و دیگر اطلاعات مرتبط را برای بررسی همان درخواست آماده کنید.",
  },
];

const linkClass =
  "font-semibold text-[#2F6F6B] underline decoration-[#2F6F6B]/45 underline-offset-4 hover:text-[#17313A]";

export default function PersianRentalDocumentsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#17313A]">
      <main lang="fa" dir="rtl" style={{ fontFamily: "Tahoma, Arial, sans-serif" }}>
        <header className="border-b border-[#E8E4DD] bg-white px-6 py-5">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <Link href="/" dir="ltr" className="font-bold text-[#17313A]">Key to GTA</Link>
            <nav aria-label="راهنماهای سایت" className="flex flex-wrap gap-5 text-sm">
              <Link href="/rental-guides" className={linkClass}>همه راهنماها</Link>
              <Link href="/rental-documents/checklist-ontario" lang="en" dir="ltr" className={linkClass}>English checklist</Link>
            </nav>
          </div>
        </header>

        <section className="bg-[linear-gradient(135deg,#DCE8E3,#F7F7F2_60%,#fff)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold text-[#2F6F6B]">راهنمای فارسی اجاره در تورنتو و منطقه بزرگ تورنتو</p>
            <h1 className="mt-4 text-3xl font-black leading-[1.6] md:text-5xl">
              مدارک لازم برای اجاره خانه و کاندو در تورنتو
            </h1>
            <p className="mt-6 text-lg leading-9 text-[#17313A]/80">
              پیش از بازدید یا ثبت درخواست اجاره، یک بسته مدارک مرتب آماده کنید.
              اینجا نام فارسی و انگلیسی مدارک، گزینه‌های تازه‌واردان و پرسش‌های
              مهم پیش از امضای اجاره‌نامه را یک‌جا می‌بینید.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#17313A]/65">
              این متن اطلاعات عمومی است. مدارک درخواستی هر موجر و ساختمان متفاوت است
              و هیچ بسته‌ای پذیرش درخواست را تضمین نمی‌کند.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/#rental-match" className="inline-flex min-h-14 items-center rounded-full bg-[#2F6F6B] px-7 py-3 font-bold text-white hover:bg-[#17313A]">
                بررسی شرایط اجاره من
              </Link>
              <a href="mailto:behzadfard.realtor@gmail.com?subject=Persian%20rental%20inquiry" className={linkClass}>
                سؤال دارید؟ به بهزاد ایمیل بزنید
              </a>
            </div>
            <p className="mt-3 text-sm text-[#17313A]/60">فرم بررسی شرایط در حال حاضر به زبان انگلیسی است.</p>
          </div>
        </section>

        <article className="bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl space-y-14 text-base leading-9">
            <section aria-labelledby="quick-answer">
              <h2 id="quick-answer" className="text-2xl font-bold md:text-3xl">جواب کوتاه: برای درخواست اجاره چه چیزهایی آماده کنم؟</h2>
              <p className="mt-4">
                معمولاً مدرک شناسایی، اطلاعات شغل و درآمد، گزارش اعتباری در صورت
                وجود، و راه تماس معرف یا موجر قبلی نقطه شروع خوبی است. مدارک مالی
                و مدارک ضامن را وقتی آماده کنید که به درخواست شما مربوط می‌شوند.
                نام و تاریخ باید در فایل‌ها خوانا و با فرم درخواست هماهنگ باشد.
                راهنمای کامل‌تر را در{" "}
                <Link href="/rental-documents/checklist-ontario" className={linkClass}>چک‌لیست انگلیسی مدارک اجاره انتاریو</Link>{" "}
                ببینید.
              </p>
            </section>

            <section aria-labelledby="documents">
              <h2 id="documents" className="text-2xl font-bold md:text-3xl">چک‌لیست مدارک اجاره کاندو در تورنتو</h2>
              <p className="mt-4">نام انگلیسی کنار هر مدرک کمک می‌کند درخواست آگهی، کارگزار یا مدیر ساختمان را دقیق‌تر متوجه شوید.</p>
              <div className="mt-7 grid gap-4">
                {documents.map((item) => (
                  <div key={item.english} className="rounded-2xl border border-[#E8E4DD] bg-[#F7F7F2] p-5 md:p-6">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p lang="en" dir="ltr" className="mt-1 text-left text-sm font-semibold text-[#2F6F6B]">{item.english}</p>
                    <p className="mt-2 text-[#17313A]/80">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">برای تفاوت نامه بانک و صورت‌حساب، <Link href="/proof-of-funds-rental-application-ontario" className={linkClass}>راهنمای مدرک توان مالی</Link> را بخوانید.</p>
            </section>

            <section aria-labelledby="newcomers">
              <h2 id="newcomers" className="text-2xl font-bold md:text-3xl">تازه‌وارد هستید و کردیت کانادایی ندارید؟</h2>
              <p className="mt-4">
                نبود سابقه اعتباری کانادایی را در یک جمله روشن توضیح دهید. سپس
                آنچه واقعاً دارید ارائه کنید: نامه پیشنهاد کار، مدرک درآمد،
                تأییدیه موجودی پس‌انداز، سابقه اجاره خارج از کانادا یا معرف قابل
                تماس. اگر موجر درباره ضامن پرسید، پیش از معرفی کسی، تعهدات و مدارک
                مورد نیاز او را بررسی کنید. از ارائه مدارک بی‌ربط یا وعده‌های
                غیرواقعی پرهیز کنید.
              </p>
              <p className="mt-4">
                طبق راهنمای کمیسیون حقوق بشر انتاریو، نبود سابقه اجاره یا اعتبار
                نباید به‌تنهایی علیه متقاضی تفسیر شود. راهنمای{" "}
                <Link href="/rent-toronto-without-canadian-credit" className={linkClass}>اجاره در تورنتو بدون کردیت کانادایی</Link>{" "}
                گزینه‌های تکمیلی دارد.
              </p>
            </section>

            <section aria-labelledby="condo">
              <h2 id="condo" className="text-2xl font-bold md:text-3xl">پیش از اجاره کاندو، این پرسش‌ها را هم بپرسید</h2>
              <ul className="mt-5 list-disc space-y-3 pr-6">
                <li>چه کسی مالک یا نماینده مجاز است و قرارداد را چه کسی امضا می‌کند؟</li>
                <li>قوانین ساختمان درباره اسباب‌کشی، رزرو آسانسور، پارکینگ و انباری چیست؟</li>
                <li>کدام هزینه‌ها داخل اجاره است و کدام خدمات جداگانه پرداخت می‌شود؟</li>
                <li>فرم‌ها و شرایط ساختمان را چه زمانی باید دریافت و بررسی کنید؟</li>
              </ul>
              <p className="mt-4">
                <Link href="/renting-condo-toronto-before-signing-lease" className={linkClass}>راهنمای پیش از امضای اجاره کاندو</Link>{" "}
                و مرجع رسمی کاندو در انتاریو جزئیات بیشتری دارند.
              </p>
            </section>

            <section aria-labelledby="privacy">
              <h2 id="privacy" className="text-2xl font-bold md:text-3xl">مدارک را امن و به‌اندازه به اشتراک بگذارید</h2>
              <ol className="mt-5 list-decimal space-y-3 pr-6">
                <li>ابتدا آگهی، هویت دریافت‌کننده و دلیل درخواست هر مدرک را بررسی کنید.</li>
                <li>برای اطلاعات بانکی بپرسید نامه بانک یا نسخه‌ای با بخش‌های نامرتبط پوشانده‌شده پذیرفته می‌شود یا نه.</li>
                <li>نام، تاریخ و اطلاعات مورد نیاز را نگه دارید؛ مانده حساب یا واقعیت سند را تغییر ندهید.</li>
                <li>شماره بیمه اجتماعی (SIN) را به‌طور پیش‌فرض ارسال نکنید و راه امن ارسال فایل را بپرسید.</li>
                <li>پیش از انتقال پول، شرایط کتبی قرارداد و اطلاعات پرداخت را بررسی کنید.</li>
              </ol>
              <p className="mt-4">دفتر کمیسر حریم خصوصی کانادا توصیه می‌کند درباره دلیل درخواست اطلاعات حساس سؤال کنید و در صورت امکان مدرک کم‌جزئیات‌تری پیشنهاد دهید.</p>
            </section>

            <section aria-labelledby="sample" className="rounded-3xl bg-[#DCE8E3] p-6 md:p-8">
              <h2 id="sample" className="text-2xl font-bold">نمونه پیام برای هماهنگی مدارک</h2>
              <p className="mt-3">
                «برای این واحد مدارک شناسایی، اشتغال و درآمدم را آماده کرده‌ام.
                لطفاً بفرمایید دقیقاً کدام مدارک مالی و اعتباری برای بررسی درخواست
                لازم است، چگونه باید امن ارسال شوند و آیا نامه بانک به‌جای گردش
                کامل حساب پذیرفته می‌شود؟»
              </p>
              <p lang="en" dir="ltr" className="mt-5 rounded-2xl bg-white/75 p-4 text-left text-sm leading-7">
                I have my ID, employment and income documents ready. Could you
                confirm which financial and credit documents are needed for this
                application, how to send them securely, and whether a bank letter
                can be accepted instead of a full statement?
              </p>
            </section>

            <section aria-labelledby="faq">
              <h2 id="faq" className="text-2xl font-bold md:text-3xl">پرسش‌های پرتکرار درباره مدارک اجاره در تورنتو</h2>
              <div className="mt-6 space-y-6">
                {faqs.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-lg font-bold">{item.question}</h3>
                    <p className="mt-2 text-[#17313A]/80">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="sources" className="border-t border-[#E8E4DD] pt-8 text-sm">
              <h2 id="sources" className="text-xl font-bold">منابع رسمی</h2>
              <ul className="mt-4 list-disc space-y-2 pr-6">
                <li><a className={linkClass} href="https://www.ohrc.on.ca/en/policy-human-rights-and-rental-housing">کمیسیون حقوق بشر انتاریو: حقوق بشر و اجاره مسکن</a></li>
                <li><a className={linkClass} href="https://www.priv.gc.ca/en/privacy-topics/landlords-and-tenants/privacy-in-the-landlord-and-tenant-relationship/">دفتر کمیسر حریم خصوصی کانادا: اطلاعات مستأجر و موجر</a></li>
                <li><a className={linkClass} href="https://tribunalsontario.ca/documents/ltb/Brochures/Information%20for%20New%20Tenants.html">هیئت موجر و مستأجر انتاریو: راهنمای مستأجر جدید</a></li>
                <li><a className={linkClass} href="https://www.condoauthorityontario.ca/before-you-buy-or-rent-a-condo/leasing-a-condo/">مرجع کاندوی انتاریو: اجاره کاندو</a></li>
              </ul>
            </section>

            <section className="rounded-3xl border border-[#2F6F6B]/20 bg-[#F7F7F2] p-6 md:p-8">
              <h2 className="text-2xl font-bold">دنبال کاندو یا خانه در GTA هستید؟</h2>
              <p className="mt-3">بودجه، منطقه مورد نظر و زمان جابه‌جایی‌تان را ثبت کنید تا بهزاد بتواند شرایط شما و گزینه‌های متناسب را بررسی کند.</p>
              <Link href="/#rental-match" className="mt-6 inline-flex min-h-14 items-center rounded-full bg-[#2F6F6B] px-7 py-3 font-bold text-white hover:bg-[#17313A]">شروع بررسی اجاره</Link>
              <p className="mt-4 text-sm text-[#17313A]/65">ترجیح می‌دهید فارسی توضیح دهید؟ <a href="mailto:behzadfard.realtor@gmail.com?subject=Persian%20rental%20inquiry" className={linkClass}>ایمیل مستقیم به بهزاد</a></p>
            </section>
          </div>
        </article>
      </main>
      <FooterSection variant="light" />
    </div>
  );
}
