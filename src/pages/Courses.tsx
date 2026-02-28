import { useEffect, useState } from "react";
import { BookOpen, CheckCircle2, Clock3 } from "lucide-react";
import PageNameSection from "@/components/PageNameSection";
import SiteFooter from "@/components/SiteFooter";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Course = {
  title: string;
  level: string;
  duration: string;
  description: string;
  highlights: string[];
  tone: string;
  image: string;
};

const courses: Course[] = [
  {
    title: "Brand Strategy Bootcamp",
    level: "Beginner",
    duration: "6 Weeks",
    description: "Build a clear, memorable brand system for service businesses.",
    highlights: ["Positioning", "Messaging", "Visual Identity", "Brand Story"],
    tone: "bg-[#1d52a1]",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "High-Converting Websites",
    level: "Intermediate",
    duration: "8 Weeks",
    description: "Design and launch websites that turn traffic into qualified leads.",
    highlights: ["Landing Pages", "Copy Blocks", "Lead Funnels", "Mobile UX"],
    tone: "bg-gray-200",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Local Growth Marketing",
    level: "Advanced",
    duration: "10 Weeks",
    description: "Run practical campaigns that drive calls, quotes, and booked jobs.",
    highlights: ["Ad Strategy", "Content Engine", "Retargeting", "Optimization"],
    tone: "bg-[#202121] text-white",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Vehicle Wrap Mastery",
    level: "Intermediate",
    duration: "5 Weeks",
    description: "Plan, design, and deliver wraps that stand out in local markets.",
    highlights: ["Wrap Concepts", "Material Prep", "Print Files", "Install Strategy"],
    tone: "bg-gray-200",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Social Content Systems",
    level: "Beginner",
    duration: "4 Weeks",
    description: "Build repeatable weekly social content with a clear brand voice.",
    highlights: ["Content Pillars", "Hooks", "Reels Flow", "Weekly Scheduling"],
    tone: "bg-[#1d52a1]",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Local SEO Accelerator",
    level: "Advanced",
    duration: "7 Weeks",
    description: "Increase local visibility and inbound leads from high-intent searches.",
    highlights: ["Google Profile", "Service Pages", "Citations", "Review Engine"],
    tone: "bg-[#202121] text-white",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
  },
];

const learningPath = [
  {
    title: "Pick Your Track",
    text: "Choose branding, websites, or marketing based on your business stage.",
  },
  {
    title: "Build Weekly",
    text: "Complete guided lessons with practical assignments for immediate implementation.",
  },
  {
    title: "Launch With Feedback",
    text: "Ship your assets with live review sessions and clear next-step direction.",
  },
];

const courseFaqs = [
  {
    question: "Who are these courses best suited for?",
    answer:
      "These courses are built for contractors, home service business owners, and in-house teams who need practical branding, web, and marketing systems.",
  },
  {
    question: "Do I need design or marketing experience before joining?",
    answer:
      "No prior experience is required for beginner tracks. Each course starts with fundamentals and moves into practical implementation.",
  },
  {
    question: "How much time should I plan per week?",
    answer:
      "Most learners allocate 3-5 hours weekly for lessons and assignments. Advanced tracks may require more depending on project depth.",
  },
  {
    question: "Will I get templates and resources?",
    answer:
      "Yes. You get worksheets, strategy templates, and implementation checklists that you can apply directly in your business workflow.",
  },
  {
    question: "Can I enroll in more than one course?",
    answer:
      "Yes. Many teams start with one core track and then add a second course once the first system is implemented.",
  },
];

const CourseCard = ({ course }: { course: Course }) => {
  const isBlue = course.tone.includes("202121");

  return (
    <article className={`group flex min-h-[560px] flex-col overflow-hidden rounded-3xl shadow-sm ${course.tone}`}>
      <div className="overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p
          className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1 text-xs font-bold ${
            isBlue ? "bg-white/20 text-white" : "bg-white text-[#E6242A]"
          }`}
        >
          <BookOpen size={14} /> {course.level}
        </p>
        <h4 className={`mt-4 text-3xl font-black leading-tight sm:text-4xl ${isBlue ? "text-white" : "text-[#202121]"}`}>
          {course.title}
        </h4>
        <p className={`mt-3 text-base ${isBlue ? "text-white/90" : "text-slate-700"}`}>{course.description}</p>
        <ul className={`mt-5 space-y-2 text-base ${isBlue ? "text-white/95" : "text-slate-700"}`}>
          {course.highlights.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} /> {item}
            </li>
          ))}
        </ul>
        <p className={`mt-auto inline-flex items-center gap-2 pt-6 text-xl font-bold ${isBlue ? "text-white" : "text-[#202121]"}`}>
          <Clock3 size={16} /> {course.duration}
        </p>
      </div>
    </article>
  );
};

const Courses = () => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : false,
  );
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const visibleCourseCount = isDesktop ? 3 : 2;
  const primaryCourses = courses.slice(0, visibleCourseCount);
  const extraCourses = courses.slice(visibleCourseCount);

  return (
    <main className="bg-[#ffffff] text-[#202121]">
      <PageNameSection
        eyebrow="Our all inclusive Courses"
        title={<span className="text-white">Choose your course path</span>}
        description="We have practical programs for branding, websites, and growth marketing based on your current business stage."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=80"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">The Program</p>
        <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Pick Your Learning Path</h3>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          Each course is designed to be practical, implementation-first, and aligned to real business growth metrics.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {primaryCourses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        <div className="relative mt-6">
          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              showAllCourses ? "max-h-[2200px] opacity-100" : "max-h-[145px] opacity-100"
            }`}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {extraCourses.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </div>

          {!showAllCourses ? (
            <>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" aria-hidden />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" aria-hidden />
            </>
          ) : null}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllCourses((current) => !current)}
            className="rounded-full bg-[#E6242A] px-10 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#C41E23] hover:shadow-[0_10px_25px_rgba(230,36,42,0.35)]"
          >
            {showAllCourses ? "View less" : "View more"}
          </button>
        </div>
      </section>

      <section className="bg-[#F2F2F2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">The Flow</p>
          <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">How You Progress</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {learningPath.map((step, index) => (
              <article key={step.title} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-black uppercase tracking-wide text-[#E6242A]">Step {index + 1}</p>
                <h4 className="mt-3 text-3xl font-black text-slate-900">{step.title}</h4>
                <p className="mt-3 text-lg text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">All Courses</p>
          <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Course Overview Table</h3>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            A quick breakdown of each course, including level, duration, and core focus so you can pick the best fit.
          </p>

          <div className="mt-8 grid gap-4 md:hidden">
            {courses.map((course) => (
              <article key={course.title} className="rounded-2xl border border-slate-200 p-5">
                <h4 className="text-2xl font-black text-slate-900">{course.title}</h4>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">{course.level}</span>
                  <span className="rounded-full bg-[#1d52a1]/10 px-3 py-1 font-semibold text-[#202121]">{course.duration}</span>
                </div>
                <p className="mt-3 text-slate-700">{course.description}</p>
                <p className="mt-3 text-sm text-slate-600">{course.highlights.slice(0, 3).join(", ")}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden overflow-x-auto rounded-3xl border border-slate-200 shadow-sm md:block">
            <table className="min-w-full bg-white text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-700 lg:px-6">Course</th>
                  <th className="px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-700 lg:px-6">Level</th>
                  <th className="px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-700 lg:px-6">Duration</th>
                  <th className="px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-700 lg:px-6">Description</th>
                  <th className="px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-700 lg:px-6">Main Topics</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course.title} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="px-5 py-5 text-base font-bold text-slate-900 lg:px-6">{course.title}</td>
                    <td className="px-5 py-5 text-sm text-slate-700 lg:px-6">{course.level}</td>
                    <td className="px-5 py-5 text-sm text-slate-700 lg:px-6">{course.duration}</td>
                    <td className="px-5 py-5 text-sm text-slate-700 lg:px-6">{course.description}</td>
                    <td className="px-5 py-5 text-sm text-slate-700 lg:px-6">{course.highlights.slice(0, 3).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl">FAQs</p>
          <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl">Frequently Asked Questions</h3>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            Quick answers to common questions before you enroll.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-2 shadow-sm sm:px-8">
            <Accordion type="single" collapsible className="w-full">
              {courseFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-slate-200">
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
        <div className="grid items-center overflow-hidden rounded-[36px] bg-[#202121] text-white md:grid-cols-[1fr_0.95fr]">
          <div className="p-6 sm:p-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Ready To Start?</p>
            <h3 className="mt-3 text-[clamp(2rem,4.4vw,3.75rem)] font-black leading-tight">
              Learn the <span className="text-[#ffffff
            ]">exact systems</span> we use.
            </h3>
            <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
              Join the next cohort and build assets you can deploy immediately in your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <button className="w-full rounded-full bg-[#1d52a1] px-8 py-3 text-sm font-bold text-white sm:w-auto">
                Enroll Now
              </button>
              <button className="w-full rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white sm:w-auto">
                Talk to Advisor
              </button>
            </div>
          </div>
          <div className="relative flex h-full justify-end self-stretch">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
              alt="Students learning together"
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Courses;
