import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseCarousel from "@/components/WhyChooseCarousel";
import { FlipWords } from "@/components/ui/flip-words";

type StatItem = {
  label: string;
  value: number;
  suffix: string;
  detail: string;
};

type Program = {
  title: string;
  description: string;
  highlights: string[];
  cta: string;
};

type Advantage = {
  title: string;
  text: string;
  image: string;
};

const trustStats: StatItem[] = [
  {
    label: "Students Trained",
    value: 2500,
    suffix: "+",
    detail: "Local learners coached through structured, practical road lessons.",
  },
  {
    label: "First-Time Pass Rate",
    value: 89,
    suffix: "%",
    detail: "Consistent outcomes through focused road test preparation.",
  },
  {
    label: "Years of Experience",
    value: 12,
    suffix: "+",
    detail: "Experienced instructors with calm, student-first teaching methods.",
  },
  {
    label: "Licensed & Insured",
    value: 100,
    suffix: "%",
    detail: "All lessons delivered in certified, insured dual-control vehicles.",
  },
];

const programs: Program[] = [
  {
    title: "Beginner Program",
    description: "A step-by-step plan for new drivers to build confidence safely.",
    highlights: [
      "Core driving fundamentals",
      "Parking and lane-change practice",
      "City and residential routes",
      "Progress tracking each session",
    ],
    cta: "/courses",
  },
  {
    title: "Road Test Package",
    description: "Focused prep for students who want a calm and confident test day.",
    highlights: [
      "Mock test route sessions",
      "Road test evaluation checklist",
      "Last-minute confidence drills",
      "Test-day readiness strategy",
    ],
    cta: "/packages",
  },
  {
    title: "Refresher Lessons",
    description: "For returning drivers who want to sharpen skills with guidance.",
    highlights: [
      "Defensive driving refresh",
      "Parking and merging confidence",
      "Busy-intersection practice",
      "Flexible lesson pacing",
    ],
    cta: "/courses",
  },
];

const advantages: Advantage[] = [
  {
    title: "Patient Instructors",
    text: "Supportive coaching that keeps lessons calm, clear, and confidence-building.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dual-Control Vehicles",
    text: "Certified training cars designed for safer learning at every skill level.",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Flexible Scheduling",
    text: "Weekday and selected weekend options to match student availability.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Knowledge Test Preparation",
    text: "Practical mock-test routines based on common local road test criteria.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Physical Location",
    text: "Our driving school is located in a safe, accessible area with easy parking and clear signage.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Multi Language Support",
    text: "Our instructors are fluent in both English and French to support all students.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

const processSteps = [
  {
  step: "01",
  title: "Welcome & Assessment",
  lead: "Your journey begins with a friendly introduction where we get to know you and understand your driving experience and goals.",
  detail:
    "If you are new to driving, we guide you through the basics. If you already have experience, we begin with a short assessment drive to understand your strengths and areas for improvement. This helps us create a lesson plan that matches your comfort level and builds confidence from the start. Ruley believes every great driver begins with a strong foundation.",
  image: "/process/our-process-1.svg",
},
{
  step: "02",
  title: "Skill Building Lessons",
  lead: "This is where real progress begins through structured lessons designed to help you feel comfortable behind the wheel.",
  detail:
    "You will learn essential driving skills including vehicle control, safe observation habits, smooth braking, parking techniques, and lane changes. Each lesson builds naturally on the previous one so learning feels steady and stress free while your confidence grows with every session.",
  image: "/process/our-process-2.svg",
},
{
  step: "03",
  title: "Real Road Experience",
  lead: "Once the fundamentals are strong, we guide you into real traffic situations to develop practical driving confidence.",
  detail:
    "Students practice city driving, intersections, lane positioning, and defensive driving techniques in real road environments. Our dual control vehicles allow instructors to support you whenever needed, ensuring every lesson remains safe, calm, and encouraging.",
  image: "/process/our-process-3.svg",
},
{
  step: "04",
  title: "Mock Road Test Preparation",
  lead: "Before your actual test, we simulate the road test experience so you know exactly what to expect.",
  detail:
    "You will complete mock test routes based on real examination standards while receiving clear feedback from your instructor. This step helps remove uncertainty, improve weak areas, and build the confidence needed to perform calmly on test day. Ruley reminds students that practice builds confidence.",
  image: "/process/our-process-4.svg",
},
{
  step: "05",
  title: "Test Day Confidence",
  lead: "The final step prepares you mentally and practically so you arrive ready and confident for your driving test.",
  detail:
    "We review key driving skills, common test mistakes, and helpful strategies to keep you calm and focused. By test day, you understand what examiners expect and feel fully prepared to succeed. Our goal is simple. Help you drive into your test with confidence and leave with your license.",
  image: "/process/our-process-5.svg",
},
];

const instructors = [
  {
    name: "Daniel Reed",
    credential: "Licensed Instructor - 10 Years Experience",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Maya Collins",
    credential: "Road Test Specialist - 8 Years Experience",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Alex Kim",
    credential: "Defensive Driving Coach - 7 Years Experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

const safetyPoints = [
  "Licensed instructors",
  "Government approved",
  "Dual-control vehicles",
  "Fully insured",
];

const serviceAreas = ["Edmonton", "St. Albert", "Sherwood Park", "Leduc", "Spruce Grove", "Fort Saskatchewan"];

const studentReviews = [
  {
    quote:
      "I was nervous before starting, but my instructor explained everything clearly and kept each lesson calm and practical.",
    name: "Alyssa P.",
    business: "Student - Edmonton",
  },
  {
    quote:
      "The road test prep was exactly what I needed. Mock tests helped me understand where to improve and I passed first try.",
    name: "Rahim K.",
    business: "Student - Sherwood Park",
  },
  {
    quote:
      "Flexible scheduling made it easy to fit lessons around work. The teaching approach felt patient and very structured.",
    name: "Daniel M.",
    business: "Student - St. Albert",
  },
  {
    quote:
      "Great communication from booking to final lesson. I felt prepared and confident on my test day.",
    name: "Jaspreet S.",
    business: "Student - Leduc",
  },
];

const heroAssets = {
  monkey:
    "https://cdn.prod.website-files.com/61eb193158d123ab7619e628/61ef0b0f1f0cd1d36345ac13_home-hero-monkey.svg",
  videoPoster:
    "https://cdn.prod.website-files.com/61eb193158d123ab7619e628%2F66bd147e637e39af6c0a49d2_hero-poster-00001.jpg",
  videoMp4:
    "https://cdn.prod.website-files.com/61eb193158d123ab7619e628%2F66bd147e637e39af6c0a49d2_hero-transcode.mp4",
  videoWebm:
    "https://cdn.prod.website-files.com/61eb193158d123ab7619e628%2F66bd147e637e39af6c0a49d2_hero-transcode.webm",
};

const Index = () => {
  const [isTrustVisible, setIsTrustVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<number[]>(trustStats.map(() => 0));
  const [visibleProcessRows, setVisibleProcessRows] = useState<boolean[]>(processSteps.map(() => false));
  const trustSectionRef = useRef<HTMLElement | null>(null);
  const processRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const trustHasAnimatedRef = useRef(false);

  useEffect(() => {
    const sectionNode = trustSectionRef.current;
    if (!sectionNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsTrustVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(sectionNode);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isTrustVisible || trustHasAnimatedRef.current) return;

    trustHasAnimatedRef.current = true;
    const targets = trustStats.map((item) => item.value);
    const duration = 1400;
    const start = performance.now();
    let rafId = 0;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats(targets.map((target) => Math.round(target * eased)));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, [isTrustVisible]);

  useEffect(() => {
    const handleReveal = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number((entry.target as HTMLDivElement).dataset.index ?? -1);
        if (index < 0) return;

        setVisibleProcessRows((current) => {
          if (current[index]) return current;
          const next = [...current];
          next[index] = true;
          return next;
        });

        observer.unobserve(entry.target);
      });
    };

    const observer = new IntersectionObserver(handleReveal, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    processRowRefs.current.forEach((rowNode) => {
      if (rowNode) observer.observe(rowNode);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#ffffff] text-[#202121]">
      <section
        className="relative left-1/2 isolate min-h-[760px] w-screen -translate-x-1/2 overflow-hidden text-white md:min-h-[860px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline poster={heroAssets.videoPoster} className="h-full w-full object-cover">
            <source src={heroAssets.videoMp4} type="video/mp4" />
            <source src={heroAssets.videoWebm} type="video/webm" />
          </video>
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(67deg,rgba(0,0,0,0.68),rgba(113,113,113,0.55))]" />

        <div className="relative z-30 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SiteHeader tone="light" />

          <div className="grid min-h-[620px] items-end gap-8 pb-36 pt-10 lg:min-h-[700px] lg:items-center lg:pb-44">
            <div className="mx-auto w-full text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wider md:text-[13px]">
                Branding and Marketing Services for Home Service Businesses
              </p>
              <h1 className="mt-3 text-[clamp(2.2rem,5.5vw,4.5rem)] font-extrabold leading-[1.15] tracking-tight">
                We build<FlipWords words={["Websites", "Logos", "Brands", "Marketing"]} className="text-[#1d52a1]" duration={3000} />
                <br className="hidden sm:block" />
                worth going BANANAS for
              </h1>
              <p className="mx-auto mt-4 max-w-[560px] text-[clamp(1rem,1.6vw,1.4rem)] leading-[1.4]">
                Expert Design and Marketing Tools built to grow HVAC, Plumbing & Home Service businesses.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
                <button className="rounded-full bg-[#1d52a1] px-6 py-2 text-[clamp(0.85rem,1.2vw,1.1rem)] font-medium text-white md:px-8 md:py-2.5">
                  See our work
                </button>
                <button className="rounded-full bg-[#E6242A] px-6 py-2 text-[clamp(0.85rem,1.2vw,1.1rem)] font-medium text-white md:px-8 md:py-2.5">
                  Contact us
                </button>
              </div>
              <img
                src={heroAssets.monkey}
                alt="Bananas Creative mascot"
                className="pointer-events-none mx-auto mt-8 w-[260px] sm:w-[320px] lg:hidden"
              />
            </div>

            {/* <div className="relative hidden h-full lg:block">
              <img
                src={heroAssets.monkey}
                alt="Bananas Creative mascot"
                className="pointer-events-none absolute bottom-[68px] right-[-36px] z-40 w-[clamp(340px,35vw,560px)] max-w-none"
              />
            </div> */}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-px z-20 h-[170px] md:h-[235px] lg:h-[300px]">
          <svg
            viewBox="0 0 1280 300"
            preserveAspectRatio="none"
            aria-hidden
            className="absolute inset-0 h-full w-full"
          >
            <path
              fill="#1d52a1"
              d="M0,142.8c0,0,106.5,75.3,300.8,75.3s379.9-161,547-203.2C1040.8-33.9,1147.7,45,1280,142.8v139.8H0V142.8z"
            />
            <path
              fill="#E6242A"
              d="M1280,171.3c0,0-47.1,1.2-106.7-34.3c-27.4-16.3-66.8-49.2-130.7-49.2c-101.1,0-222.2,87.1-319.6,116.6c-183.4,55.5-300.8,35.3-375.6-12.3c-141.4-90-233.3-50.9-264.4-37.2c-41,18.1-83,16.4-83,16.4v122.3l1280-1V171.3z"
            />
            <path
              fill="#FFFFFF"
              d="M1280,213.5V300H0v-86.5c0,0,190.7,57.2,341.2,45.4c178.3-14,225.4-66.5,359.4-121.4c59.8-24.5,97.3-34.4,146.9-37.3c49.1-2.8,77.4,5.4,130.8,20.4c119.1,33.4,206.1,70.3,285.5,89.4C1269.2,211.4,1274.6,212.5,1280,213.5z"
            />
          </svg>
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#ffffff]" />
        </div>
      </section>

      <section ref={trustSectionRef} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Trust</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Local Results That Build Confidence</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, index) => (
            <article
              key={stat.label}
              className="group rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50/80"
            >
              <p
                className="font-black leading-none text-[#E6242A] transition-all duration-300 group-hover:scale-105 group-hover:text-[#C41E23]"
                style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
              >
                {animatedStats[index].toLocaleString()}
                {stat.suffix}
              </p>
              <h3 className="mt-3 text-lg font-black text-[#202121]">{stat.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Why Us</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Why Choose Us</h2>
          <div className="mt-10">
            <WhyChooseCarousel items={advantages} />
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F2F2F2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Programs</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
            Driving Programs Designed for Every Stage
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            Each program follows a structured format focused on safe decision-making, practical road skills, and clear progress.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="flex h-full flex-col rounded-3xl bg-gradient-to-b from-[#F2F2F2] from-30% via-[#e8edf5] via-70% to-[#d0ddef] p-6 shadow-[0_16px_34px_rgba(14,30,64,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(29,82,161,0.18)]"
              >
                <h3 className="text-3xl font-black text-[#202121]">{program.title}</h3>
                <p className="mt-3 min-h-[56px] text-base leading-relaxed text-slate-600">{program.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {program.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1d52a1]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={program.cta}
                  className="mt-6 inline-flex w-fit rounded-full bg-[#E6242A] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
                >
                  View Program
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/courses"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#1d52a1] px-10 py-3.5 text-base font-bold leading-none text-[#ffffff] transition-colors hover:bg-[#001b42]"
            >
              View all courses
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Safety</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Safety & Certification</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            Every lesson follows certified standards so students feel protected and supported throughout training.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {safetyPoints.map((point) => (
              <article key={point} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <CheckCircle2 className="mx-auto h-6 w-6 text-[#1d52a1]" />
                <h3 className="mt-3 text-xl font-black text-slate-900">{point}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F2F2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Our process</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">This is how we do it</h2>

          <div className="relative mt-16">
            {processSteps.map((step, index) => {
              const textOnRight = index % 2 === 0;
              const numberTone = index % 2 === 0 ? "text-[#1d52a1]/30" : "text-[#E6242A]/20";
              const isLast = index === processSteps.length - 1;
              const isVisible = visibleProcessRows[index];

              return (
                <div
                  key={step.step}
                  ref={(node) => {
                    processRowRefs.current[index] = node;
                  }}
                  data-index={index}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(48px)",
                    transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                  }}
                >
                  {/* ===== Desktop: 3-col grid ===== */}
                  <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr auto 1fr", gap: "3rem", alignItems: "center", padding: "1.5rem 0" }}>
                    {/* Col 1 */}
                    <div>
                      {!textOnRight && (
                        <div className="relative pt-12 text-right">
                          <span className={`pointer-events-none absolute top-0 right-0 text-7xl font-black leading-none select-none ${numberTone}`}>
                            {step.step}
                          </span>
                          <h3 className="relative text-3xl font-black leading-tight text-slate-800">{step.title}</h3>
                          <p className="mt-3 text-base font-bold leading-snug text-slate-700">{step.lead}</p>
                          <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.detail}</p>
                        </div>
                      )}
                    </div>

                    {/* Col 2 — image */}
                    <div style={{ width: "280px", height: "280px" }} className="flex-shrink-0">
                      <img src={step.image} alt={step.title} className="h-full w-full object-contain" />
                    </div>

                    {/* Col 3 */}
                    <div>
                      {textOnRight && (
                        <div className="relative pt-12 text-left">
                          <span className={`pointer-events-none absolute top-0 left-0 text-7xl font-black leading-none select-none ${numberTone}`}>
                            {step.step}
                          </span>
                          <h3 className="relative text-3xl font-black leading-tight text-slate-800">{step.title}</h3>
                          <p className="mt-3 text-base font-bold leading-snug text-slate-700">{step.lead}</p>
                          <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.detail}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ===== Mobile: stacked ===== */}
                  <div className="flex flex-col items-center gap-4 py-6 md:hidden">
                    <div className="h-56 w-56 sm:h-64 sm:w-64">
                      <img src={step.image} alt={step.title} className="h-full w-full object-contain" />
                    </div>
                    <div className="relative w-full max-w-md pt-12 text-left">
                      <span className={`pointer-events-none absolute top-0 left-0 text-7xl font-black leading-none select-none ${numberTone}`}>
                        {step.step}
                      </span>
                      <h3 className="relative text-2xl font-black leading-tight text-slate-800">{step.title}</h3>
                      <p className="mt-3 text-base font-bold leading-snug text-slate-700">{step.lead}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.detail}</p>
                    </div>
                  </div>

                  {/* Connector */}
                  {!isLast && (
                    <div className="hidden md:flex justify-center">
                      <div style={{ height: "64px", width: "3px" }} className="bg-slate-300/60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructors section — hidden, not removed */}
      <section className="bg-white py-16 sm:py-20" style={{ display: "none" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Instructors</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Meet the Instructors</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {instructors.map((instructor) => (
              <article key={instructor.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={instructor.image} alt={instructor.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-3xl font-black text-slate-900">{instructor.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-600">{instructor.credential}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/about"
              className="rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
            >
              Meet Full Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">The Plan</p>
          <p className="mt-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#1d52a1] sm:text-sm">
            Professional Driving Education for Every Learner
          </p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
            The ingredients for <span className="text-[#1d52a1]">Success</span>
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
                title: "Patient Instructors",
                text: "Every lesson is led by a calm, experienced instructor who adapts to your pace and builds your confidence behind the wheel.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>
                ),
                title: "Structured Curriculum",
                text: "A clear, step-by-step program that covers fundamentals, road safety, and test preparation so nothing is left to chance.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ),
                title: "Flexible Scheduling",
                text: "Book lessons around your schedule with weekday and weekend availability designed to fit students and working professionals.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                ),
                title: "Road Test Readiness",
                text: "Mock tests and targeted practice sessions designed to prepare you for test day with confidence and calm.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-5 p-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F5C518] text-[#202121]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-xl font-black text-[#202121] sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection title="What our students are saying" reviews={studentReviews} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Local</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Service Area</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            Proudly serving Edmonton and surrounding communities with practical, local road training.
          </p>

          <div className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
              <iframe
                title="Driving school service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.263636375451!2d-123.52076622307371!3d48.451470971279875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f0d12a28feb31%3A0x7844eb9adc8db1de!2s2770%20Leigh%20Rd%20%23124%2C%20Victoria%2C%20BC%20V9B%204G2%2C%20Canada!5e0!3m2!1sen!2s!4v1772209932126!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[400px] w-full rounded-2xl border-0 sm:h-[480px] lg:h-[540px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-[34px] bg-[#202121] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Ready to begin?</p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-tight">
            Start your first <span className="text-[#e6242a]">driving lesson</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
            Book a package that fits your stage and get clear, calm instruction designed to build confidence on the road.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/packages"
              className="rounded-full border-2 border-[#E6242A] bg-transparent px-8 py-3 text-sm font-bold text-[#E6242A] transition-colors hover:bg-[#E6242A] hover:text-white"
            >
              Book a Lesson
            </Link>
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
};

export default Index;


