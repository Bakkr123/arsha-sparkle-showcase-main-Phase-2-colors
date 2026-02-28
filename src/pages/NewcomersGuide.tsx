import { CheckCircle2, ExternalLink, FileText, MapPin, Globe, Languages, CalendarCheck, ClipboardList, CreditCard, ArrowRightLeft, Search, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import PageNameSection from "@/components/PageNameSection";
import SiteFooter from "@/components/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ── Steps to transfer license ── */
const transferSteps = [
  {
    step: "01",
    title: "Determine Eligibility",
    icon: Search,
    text: "If you have recently moved to British Columbia, you are required to get a BC driver's licence within 90 days of becoming a resident. Some exceptions apply depending on your visa type or residency status, so it is worth confirming your specific situation before starting the process.",
  },
  {
    step: "02",
    title: "Prepare Your Documents",
    icon: ClipboardList,
    text: "You will need valid government-issued identification, your current or most recent driver's licence from your home country, and documentation proving your driving experience. If your licence is not in English or French, you may need a certified translation. Having everything ready before your appointment saves time.",
  },
  {
    step: "03",
    title: "Book an ICBC Appointment",
    icon: CalendarCheck,
    text: "Visit the ICBC website or call their office to book an appointment at your nearest driver licensing location. Walk-ins may be available, but booking ahead is recommended to avoid long wait times, especially during busy periods.",
  },
  {
    step: "04",
    title: "Complete Required Tests",
    icon: BookOpen,
    text: "If your licence is from a country with a reciprocal agreement with BC, you may be able to exchange it directly without any testing. Otherwise, you will need to pass a knowledge test, a road test, or both depending on your driving experience and the country your licence was issued in.",
  },
  {
    step: "05",
    title: "Pay Licensing Fees",
    icon: CreditCard,
    text: "ICBC charges fees for knowledge tests, road tests, and licence issuance. Fees vary depending on the type of licence and any testing required. It is a good idea to check the current fee schedule on the ICBC website before your visit so there are no surprises.",
  },
  {
    step: "06",
    title: "Exchange Your Previous Licence",
    icon: ArrowRightLeft,
    text: "In most cases, you will be asked to surrender your existing foreign licence when you receive your BC licence. ICBC keeps the surrendered licence on file. If you need your original licence returned for any reason, you should ask about this at the time of your appointment.",
  },
];

/* ── FAQ questions ── */
const newcomerFaqs = [
  {
    question: "How long can you drive in BC with a foreign licence?",
    answer:
      "Visitors to BC can drive using a valid foreign licence for up to six months. If you become a BC resident, you have 90 days to obtain a BC driver's licence. After that period, driving with a foreign licence is no longer valid.",
  },
  {
    question: "Can newcomers get a driver's licence in Canada?",
    answer:
      "Yes. Newcomers to Canada can apply for a BC driver's licence regardless of their immigration status, as long as they meet ICBC requirements. This includes providing valid identification, proof of residency, and completing any required tests.",
  },
  {
    question: "Which countries qualify for licence exchange?",
    answer:
      "BC has reciprocal agreements with several countries and jurisdictions, including the United States, United Kingdom, Australia, Japan, South Korea, Germany, France, and others. Drivers from these regions can often exchange their licence without taking a road test. The full list is available on the ICBC website.",
  },
  {
    question: "How do I transfer my licence to BC?",
    answer:
      "Start by booking an appointment at an ICBC driver licensing office. Bring your current licence, valid ID, and proof of driving experience. Depending on your home country, you may exchange your licence directly or need to pass one or more tests before receiving your BC licence.",
  },
  {
    question: "Do I need to take a road test?",
    answer:
      "It depends on where your licence was issued. If your country has a reciprocal agreement with BC, you may not need a road test. If testing is required, ICBC will let you know which tests apply based on your experience and documentation.",
  },
];

/* ── Why driver training matters ── */
const trainingReasons = [
  {
    title: "BC Road Rules May Differ",
    text: "Traffic laws, signage, and right-of-way rules in British Columbia may be different from what you are used to. Understanding local road rules helps you drive safely and avoid common mistakes that could lead to fines or collisions.",
  },
  {
    title: "Weather and Road Conditions",
    text: "BC roads can include rain, fog, snow, and winding mountain routes depending on where you live. Getting familiar with how to handle these conditions safely is an important part of driving here, especially if you come from a warmer or drier climate.",
  },
  {
    title: "Building Driving Confidence",
    text: "Driving in a new country can feel unfamiliar even if you have years of experience. Practising with a local instructor helps you get comfortable with BC intersections, highway merging, roundabouts, and the flow of local traffic.",
  },
  {
    title: "Test Preparation Benefits",
    text: "If you need to take a knowledge or road test, professional lessons give you focused preparation. Instructors know what ICBC examiners look for and can help you correct habits that might not match BC driving standards.",
  },
];

/* ── Newcomer course cards ── */
const newcomerCourses = [
  {
    title: "New to Canada — Three 90-Minute Lessons Package",
    description:
      "A structured set of three lessons designed to help experienced international drivers adapt to BC roads. Covers local traffic laws, road signs, defensive driving techniques, and common test routes.",
    locations: ["Victoria", "Langford / Westshore", "Nanaimo", "Duncan", "Kelowna"],
    featured: false,
  },
  {
    title: "New to Canada — 90-Minute Driving Lesson",
    description:
      "A single personalised session for newcomers who want focused practice on specific skills. Ideal for reviewing BC road rules, building confidence at intersections, or preparing for an upcoming road test.",
    locations: ["Victoria", "Langford / Westshore", "Nanaimo", "Duncan", "Kelowna"],
    featured: true,
  },
];

/* ── ICBC fees ── */
const icbcFees = [
  { item: "5-Year Licence Renewal", fee: "$75" },
  { item: "Knowledge Test", fee: "$15" },
  { item: "Class 5 / 7 Road Test", fee: "$50" },
  { item: "Commercial Road Test", fee: "$100" },
];

/* ── Resources ── */
const resources = [
  {
    title: "Practice Knowledge Test",
    description: "Try ICBC's free online practice test to prepare for the real exam.",
    href: "https://practice.icbc.ca",
    icon: FileText,
  },
  {
    title: "Book ICBC Appointment",
    description: "Schedule your licence appointment at a nearby ICBC office.",
    href: "https://www.icbc.com/driver-licensing/visit-dl-office",
    icon: CalendarCheck,
  },
  {
    title: "Find ICBC Office",
    description: "Locate the nearest ICBC driver licensing office in your area.",
    href: "https://www.icbc.com/driver-licensing/visit-dl-office/Pages/office-locations.aspx",
    icon: MapPin,
  },
  {
    title: "Accepted ID List",
    description: "Review which identification documents ICBC accepts.",
    href: "https://www.icbc.com/driver-licensing/getting-licensed/Pages/Accepted-ID.aspx",
    icon: Globe,
  },
  {
    title: "ICBC Language Services",
    description: "Learn about translation and language support options available.",
    href: "https://www.icbc.com/about-icbc/contact-us/Pages/language-services.aspx",
    icon: Languages,
  },
];

const NewcomersGuide = () => (
  <main className="bg-white text-[#202121]">
    {/* ─── 1. Hero Section ─── */}
    <PageNameSection
      eyebrow="ICBC Information Guide"
      title={<span className="text-white">Driver's Licensing Guide for Newcomers to BC</span>}
      description="Everything you need to know about transferring your driver's licence and starting to drive confidently in British Columbia."
      backgroundImage="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=2200&q=80"
    />

    {/* ─── 2. Intro Content Block ─── */}
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Welcome to British Columbia</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Moving to BC comes with new driving rules</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            If you have recently arrived in British Columbia, one of the first things you will need to sort out is your
            driver's licence. The process can feel overwhelming at first, especially when the rules, documentation, and
            testing requirements differ from what you are used to back home.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            This guide is here to walk you through each step in plain language. Whether you are transferring an existing
            licence or starting fresh, we want to make the process as clear and stress-free as possible. Think of it as
            friendly advice from a local instructor who has helped hundreds of newcomers get comfortable on BC roads.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px]">
          <img
            src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1400&q=80"
            alt="Scenic BC road with mountains"
            className="h-[320px] w-full object-cover sm:h-[380px]"
          />
        </div>
      </div>
    </section>

    {/* ─── 3. Steps to Transfer Your Licence ─── */}
    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">The Process</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Steps to Transfer Your Driver's Licence to BC
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          Follow these steps to get your BC driver's licence. The process is straightforward once you know what to
          expect.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transferSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#1d52a1]">
                  <step.icon size={20} />
                </span>
                <p className="text-sm font-black uppercase tracking-wide text-[#E6242A]">Step {step.step}</p>
              </div>
              <h3 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 4. Common Questions from Newcomers ─── */}
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Questions</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Common Questions from Newcomers
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          Clear answers to the questions we hear most often from newcomers getting their BC licence.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-2 shadow-sm sm:px-8">
          <Accordion type="single" collapsible className="w-full">
            {newcomerFaqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`newcomer-faq-${index}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline sm:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

    {/* ─── 5. Why Driver Training Matters ─── */}
    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Training</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Why Driver Training Matters
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          Even experienced drivers benefit from local guidance when adjusting to a new country's roads and driving culture.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {trainingReasons.map((reason) => (
            <div key={reason.title} className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F5C518] text-[#202121]">
                <CheckCircle2 size={24} />
              </span>
              <div>
                <h3 className="text-xl font-black text-[#202121] sm:text-2xl">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 6. Newcomer Courses ─── */}
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Lessons</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Driving Lessons for Newcomers
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          We offer specialised lessons designed for drivers who are new to Canada. These sessions focus on helping you
          adapt quickly to BC driving standards and feel confident on local roads.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {newcomerCourses.map((course) => (
            <article
              key={course.title}
              className={`relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm sm:p-8 ${
                course.featured ? "border-2 border-[#1d52a1] shadow-md" : "border border-slate-200"
              }`}
            >
              {course.featured ? (
                <span className="absolute -top-3 left-6 rounded-full bg-[#E6242A] px-3 py-1 text-xs font-bold text-white">
                  Popular Choice
                </span>
              ) : null}

              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">{course.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{course.description}</p>

              <div className="mt-5">
                <p className="text-sm font-black uppercase tracking-wide text-[#1d52a1]">Available Locations</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.locations.map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                    >
                      <MapPin size={12} /> {loc}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/courses"
                className={`mt-6 inline-flex w-fit rounded-full px-7 py-3 text-sm font-bold text-white transition-colors ${
                  course.featured
                    ? "bg-[#E6242A] hover:bg-[#C41E23]"
                    : "bg-[#1d52a1] hover:bg-[#17C584]"
                }`}
              >
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 7. ICBC Fees Section ─── */}
    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Fees</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          ICBC Driver's Licence Fees in British Columbia
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          Below are common fees you may encounter during the licensing process. These are approximate and subject to
          change.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full bg-white text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-700 lg:px-6">
                  Fee Item
                </th>
                <th className="px-5 py-4 text-right text-xs font-black uppercase tracking-wide text-slate-700 lg:px-6">
                  Approximate Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {icbcFees.map((row, index) => (
                <tr key={row.item} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                  <td className="px-5 py-5 text-base font-semibold text-slate-900 lg:px-6">{row.item}</td>
                  <td className="px-5 py-5 text-right text-base font-black text-[#1d52a1] lg:px-6">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-[#1d52a1]/30 bg-white p-5 text-center">
          <p className="text-base font-semibold text-slate-700 sm:text-lg">
            Fees can change without notice. We recommend verifying current fees directly on the{" "}
            <a
              href="https://www.icbc.com/driver-licensing/fees"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#1d52a1] underline hover:text-[#E6242A]"
            >
              ICBC website
            </a>{" "}
            before your appointment.
          </p>
        </div>
      </div>
    </section>

    {/* ─── 8. Helpful Resources ─── */}
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Resources</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Helpful Resources for Newcomers
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          Quick links to official ICBC pages and tools that can help you prepare.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#1d52a1]">
                <resource.icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-black text-slate-900">{resource.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{resource.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#1d52a1] transition-colors group-hover:text-[#E6242A]">
                Visit resource <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 9. Final CTA ─── */}
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="rounded-[34px] bg-[#202121] p-8 text-white sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Get started today</p>
        <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-tight">
          New to BC and unsure where to <span className="text-[#e6242a]">start</span>?
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
          Speak with our instructors for guidance on licensing, training, and preparing for BC roads. We are here to
          help you feel confident and ready.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/packages"
            className="rounded-full border-2 border-[#E6242A] bg-transparent px-8 py-3 text-sm font-bold text-[#E6242A] transition-colors hover:bg-[#E6242A] hover:text-white"
          >
            Book a Lesson
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
);

export default NewcomersGuide;
