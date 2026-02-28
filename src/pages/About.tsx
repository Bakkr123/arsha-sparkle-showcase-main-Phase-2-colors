import PageNameSection from "@/components/PageNameSection";
import SiteFooter from "@/components/SiteFooter";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const values = [
  {
    title: "Clarity Over Noise",
    text: "We simplify complex marketing decisions into clear systems your team can execute consistently.",
  },
  {
    title: "Design With Purpose",
    text: "Every visual choice is tied to trust, memorability, and conversion for home service businesses.",
  },
  {
    title: "Results First",
    text: "We focus on measurable outcomes: better lead quality, stronger positioning, and faster growth.",
  },
];

const stats = [
  { value: "350+", label: "Projects delivered" },
  { value: "120+", label: "Brand systems built" },
  { value: "9+", label: "Years of experience" },
  { value: "98%", label: "Client satisfaction" },
];

const milestones = [
  {
    year: "2017",
    title: "Foundation",
    text: "We started with one goal: make local service brands look and sound world-class.",
  },
  {
    year: "2020",
    title: "Growth",
    text: "Expanded into full-funnel web and campaign delivery for contractors and trades.",
  },
  {
    year: "2024",
    title: "Scale",
    text: "Built repeatable systems to help teams scale branding and marketing without chaos.",
  },
];

const teamMembers = [
  {
    name: "Sergio Rivera",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kaitlyn Moore",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Daniel Brooks",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

const aboutFaqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We primarily serve home service businesses including HVAC, plumbing, electrical, construction, and related contractor teams.",
  },
  {
    question: "Do you only design or also help with implementation?",
    answer:
      "We do both. We create strategy and design, then help execute websites, campaigns, and rollout plans so nothing stalls after approvals.",
  },
  {
    question: "Can your team work with our existing brand assets?",
    answer:
      "Yes. We can optimize and extend your current brand system, or rebuild specific elements while preserving what already works.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "We begin with a discovery session, align on goals and audience, then map deliverables, milestones, and the rollout sequence.",
  },
];

const About = () => (
  <main className="bg-white text-[#202121]">
    <PageNameSection
      eyebrow="Meet The Team Behind Bananas Creative"
      title={<span className="text-white">About us</span>}
      description="We build memorable branding, high-converting websites, and practical marketing systems for home service companies."
      backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80"
    />

    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Who We Are</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">A creative growth partner for service brands</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            We work with contractors, HVAC, plumbing, and local service businesses to shape stronger identities and convert
            attention into qualified leads.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our process combines strategy, design, and implementation so your brand feels consistent everywhere your
            customers see you.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Team workshop"
            className="h-[320px] w-full object-cover sm:h-[380px]"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="group rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50/80"
          >
            <p
              className="font-black leading-none text-[#E6242A] transition-all duration-300 group-hover:scale-105 group-hover:text-[#C41E23]"
              style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
            >
              {stat.value}
            </p>
            <h3 className="mt-3 text-lg font-black text-[#202121]">{stat.label}</h3>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Our Values</p>
        <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">How We Work</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h4 className="text-3xl font-black text-slate-900">{value.title}</h4>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Our Journey</p>
        <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Where We Came From</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-black uppercase tracking-wide text-[#E6242A]">{milestone.year}</p>
              <h4 className="mt-3 text-3xl font-black text-slate-900">{milestone.title}</h4>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">{milestone.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Our Team</p>
        <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">People Behind The Work</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <img src={member.image} alt={member.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-3xl font-black text-slate-900">{member.name}</h4>
                <p className="mt-2 text-lg font-semibold text-[#E6242A]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid items-center gap-10 rounded-[36px] bg-[#202121] p-6 text-white sm:p-8 md:grid-cols-[1fr_0.9fr] md:p-10 lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Our Promise</p>
          <h3 className="mt-3 text-[clamp(2rem,4.2vw,3.5rem)] font-black leading-tight">
            Strategy that <span className="text-[#ffffff]">looks good</span> and performs.
          </h3>
          <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
            We don&apos;t ship generic visuals. We build tailored systems that make your brand easier to trust and easier to
            choose.
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
            alt="Team collaboration"
            className="h-[260px] w-full object-cover sm:h-[320px]"
          />
        </div>
      </div>
    </section>

    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Safety</p>
        <h3 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Safety & Certification</h3>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          We maintain strict standards so clients and learners feel protected, confident, and supported at every step.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Licensed instructors",
            "Government approved",
            "Dual-control vehicles",
            "Insured vehicles",
          ].map((item) => (
            <article key={item} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-2xl font-black text-[#1d52a1]">✓</p>
              <h4 className="mt-3 text-xl font-black text-slate-900">{item}</h4>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#1d52a1]/30 bg-white p-5 text-center">
          <p className="text-base font-semibold text-slate-700 sm:text-lg">
            These safeguards are in place to reduce fear and make the full learning process feel safe and reliable.
          </p>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
);

export default About;
