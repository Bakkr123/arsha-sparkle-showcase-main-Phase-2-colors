import { Banknote, Check, CheckCircle2, CreditCard, Smartphone, Wallet } from "lucide-react";
import PageNameSection from "@/components/PageNameSection";
import SiteFooter from "@/components/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type PricingPackage = {
  id: string;
  title: string;
  description: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const pricingPackages: PricingPackage[] = [
  {
    id: "beginner",
    title: "Beginner Package",
    description: "Structured lessons for first-time learners building confidence from day one.",
    price: "$499",
    note: "10 lessons - Safety-first progression",
    features: [
      "10 one-on-one in-car lessons",
      "Dual-control vehicle included",
      "Road sign and rule coaching",
      "Progress tracker after each week",
    ],  
    cta: "Choose Plan",
    popular: true,
  },
  {
    id: "road-test",
    title: "Road Test Package",
    description: "Focused prep for students who want to pass confidently on test day.",
    price: "$239",
    note: "2 prep lessons + road test support",
    features: [
      "Mock test route practice",
      "Road test car rental included",
      "Warm-up lesson before test",
      "Instructor feedback checklist",
    ],
    cta: "Book Now",
  },
  {
    id: "refresher",
    title: "Refresher Course",
    description: "Great for returning drivers who need calm practice and confidence rebuilding.",
    price: "$219",
    note: "4 lessons - Flexible pacing",
    features: [
      "4 one-on-one practical sessions",
      "Parking and lane change drills",
      "Defensive driving refresh",
      "City and residential route practice",
    ],
    cta: "Choose Plan",
  },
  {
    id: "single",
    title: "Single Lesson",
    description: "A practical standalone lesson for targeted skill improvement.",
    price: "$69",
    note: "Per lesson - 60 minutes",
    features: [
      "Private in-car coaching",
      "Pick one focus skill per class",
      "Dual-control vehicle included",
      "Quick end-of-class feedback",
    ],
    cta: "Book Now",
  },
];

const comparisonRows: Array<{ feature: string; values: Array<boolean | string> }> = [
  { feature: "One-on-one instruction", values: [true, true, true, true] },
  { feature: "Dual-control vehicles", values: [true, true, true, true] },
  { feature: "Road test route practice", values: [true, true, true, false] },
  { feature: "Road test day car rental", values: [false, true, false, false] },
  { feature: "Progress checklist", values: [true, true, true, false] },
  { feature: "Flexible scheduling", values: [true, true, true, true] },
];

const addOns = [
  {
    title: "Extra Lesson",
    price: "$65",
    text: "Add focused driving time to strengthen specific skills before your next step.",
  },
  {
    title: "Road Test Car Rental",
    price: "$95",
    text: "Use our insured dual-control vehicle on test day with instructor guidance.",
  },
  {
    title: "Emergency Booking",
    price: "$40",
    text: "Priority scheduling for urgent road test preparation when slots are limited.",
  },
  {
    title: "Weekend Option",
    price: "$20",
    text: "Book selected Saturday or Sunday lesson slots based on instructor availability.",
  },
];

const paymentOptions = [
  { title: "Debit / Credit", icon: CreditCard },
  { title: "E-Transfer", icon: Smartphone },
  { title: "Cash", icon: Banknote },
];

const packageHeroBackground =
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=2100&q=80";

const pricingFaqs = [
  {
    question: "Are there any hidden fees in these packages?",
    answer:
      "No. Pricing is transparent. Any optional cost, such as add-ons, is shown before you confirm booking.",
  },
  {
    question: "Can I switch packages after starting?",
    answer:
      "Yes. If your needs change, we can move you to a better-fit package and adjust billing based on completed lessons.",
  },
  {
    question: "Do packages include vehicle use for lessons?",
    answer:
      "Yes. All listed lesson packages include use of our dual-control insured training vehicles.",
  },
  {
    question: "Is payment required in full upfront?",
    answer:
      "You can pay in full or use available split-payment options for selected packages.",
  },
  {
    question: "What if I need to reschedule a class?",
    answer:
      "Rescheduling is available with prior notice. We keep the process simple so students can continue smoothly.",
  },
];

const renderComparisonValue = (value: boolean | string) => {
  if (typeof value === "string") {
    return <span className="text-xs font-semibold text-slate-700 sm:text-sm">{value}</span>;
  }

  if (value) {
    return <Check className="mx-auto h-4 w-4 text-[#1d52a1] sm:h-5 sm:w-5" />;
  }

  return <span className="text-slate-400">-</span>;
};

const Packages = () => (
  <main className="bg-white text-[#202121]">
    <PageNameSection
      eyebrow="Clear and practical lesson plans"
      title={<span className="text-white">Pricing</span>}
      description="Transparent driving lesson packages designed for confidence, safety, and steady progress."
      backgroundImage={packageHeroBackground}
      minHeightClassName="min-h-[460px] md:min-h-[540px]"
      contentLayout="center"
    />

    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Pricing</p>
      <h1 className="mx-auto mt-2 max-w-4xl text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
        Simple, Transparent Driving Lesson Pricing
      </h1>
      <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
        Choose a plan based on your current driving level and schedule. Every package follows a structured learning path
        with practical coaching, clear milestones, and a safety-first approach.
      </p>
    </section>

    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Plans</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Packages</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {pricingPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ${
                pkg.popular ? "border-2 border-[#1d52a1] shadow-md" : "border border-slate-200"
              }`}
            >
              {pkg.popular ? (
                <span className="absolute -top-3 left-6 rounded-full bg-[#E6242A] px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              ) : null}

              <h3 className="text-3xl font-black text-slate-900">{pkg.title}</h3>
              <p className="mt-3 min-h-[52px] text-sm leading-relaxed text-slate-600">{pkg.description}</p>

              <div className="mt-5">
                <p className="text-4xl font-black text-slate-900">{pkg.price}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">{pkg.note}</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1d52a1]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-6 rounded-full px-7 py-3 text-sm font-bold transition-colors ${
                  pkg.popular ? "bg-[#E6242A] text-white hover:bg-[#C41E23]" : "bg-[#1d52a1] text-white hover:bg-[#17C584]"
                }`}
              >
                {pkg.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Compare</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Comparison Table</h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full bg-white text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-4 text-xs font-black uppercase tracking-wide text-slate-700 sm:px-5">Feature</th>
                  {pricingPackages.map((pkg) => (
                    <th key={pkg.id} className="px-4 py-4 text-xs font-black uppercase tracking-wide text-slate-700 sm:px-5">
                      {pkg.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-800 sm:px-5">{row.feature}</td>
                    {row.values.map((value, valueIndex) => (
                      <td key={`${row.feature}-${valueIndex}`} className="px-4 py-4 text-center sm:px-5">
                        {renderComparisonValue(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Extras</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Add-Ons</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {addOns.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                <p className="text-xl font-black text-[#E6242A]">{item.price}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          Add-ons are delivered based on instructor availability.
        </p>
      </div>
    </section>

    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-5xl font-black text-gray-300/80 sm:text-6xl">Payments</p>
        <h2 className="text-3xl font-black text-[#1d52a1] sm:text-4xl">Payment Options</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Pay in the method that works best for you. We keep payment options flexible and straightforward.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 mx-auto max-w-lg">
          {paymentOptions.map((option) => (
            <div key={option.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <option.icon className="mx-auto h-6 w-6 text-[#1d52a1]" />
              <p className="mt-2 text-sm font-semibold text-slate-700">{option.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[34px] bg-[#202121] p-8 text-white sm:p-10 lg:p-12"
          style={{
            backgroundImage: "url('/installment-cta-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay to keep text readable over any background image */}
          <div className="absolute inset-0 rounded-[34px] bg-[#202121]/75" />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Flexible payments</p>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-tight">
              Pay in <span className="text-[#e6242a]">installments</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
              Split your package cost into manageable payments. Ask our team to set up a plan that works for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="/contact"
                className="rounded-full border-2 border-[#E6242A] bg-transparent px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E6242A]"
              >
                Ask About Installments
              </a>
              <a
                href="tel:+17808856885"
                className="rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl">FAQs</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl">Pricing FAQ</h2>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-2 shadow-sm sm:px-8">
          <Accordion type="single" collapsible className="w-full">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`pricing-faq-${index}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline sm:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="rounded-[34px] bg-[#202121] p-8 text-white sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Start with confidence</p>
        <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-tight">
          Book your first <span className="text-[#e6242a]">driving lesson</span>
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
          Pick the package that matches your current level and let our instructors guide you step by step.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <button
            type="button"
            className="rounded-full border-2 border-[#E6242A] bg-transparent px-8 py-3 text-sm font-bold text-[#E6242A] transition-colors hover:bg-[#E6242A] hover:text-white"
          >
            Book First Lesson
          </button>
          <a
            href="tel:+17808856885"
            className="rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
);

export default Packages;

