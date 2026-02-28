import { CheckCircle2, Users, CalendarClock, Heart, TrendingUp, Car, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import PageNameSection from "@/components/PageNameSection";
import SiteFooter from "@/components/SiteFooter";

/* ── Why Work With Us ── */
const benefits = [
  {
    title: "Supportive Team Environment",
    text: "You will work alongside experienced instructors who are happy to share advice, trade routes, and help you grow. We look out for each other.",
    icon: Users,
  },
  {
    title: "Flexible Scheduling",
    text: "We understand that life does not always fit neatly into a nine-to-five schedule. We work with you to build a timetable that suits your availability.",
    icon: CalendarClock,
  },
  {
    title: "Meaningful Work",
    text: "Helping someone pass their road test or overcome driving anxiety is genuinely rewarding. You will see the difference you make every day.",
    icon: Heart,
  },
  {
    title: "Professional Growth",
    text: "Whether you are an experienced instructor or just starting out, we provide ongoing mentorship, training opportunities, and room to develop your career.",
    icon: TrendingUp,
  },
  {
    title: "Modern Training Vehicles",
    text: "Our fleet is well maintained and equipped with dual controls. You will always have a reliable, clean vehicle to work with.",
    icon: Car,
  },
];

/* ── Hiring Process Steps ── */
const hiringSteps = [
  {
    step: "01",
    title: "Submit Your Application",
    text: "Send us your resume and a brief introduction by email. Let us know about your driving experience, any teaching background, and what interests you about the role.",
  },
  {
    step: "02",
    title: "Initial Conversation",
    text: "We will set up a short phone or video call to learn more about you, answer your questions, and make sure the opportunity is a good fit on both sides.",
  },
  {
    step: "03",
    title: "In-Person Meeting",
    text: "If things look like a good match, we will invite you in for a face-to-face conversation. This is a chance for you to meet the team and see how we operate.",
  },
  {
    step: "04",
    title: "Observation or Trial Session",
    text: "For instructor roles, we arrange a short in-car session so we can see your teaching approach and driving style. For trainees, this step focuses on your learning potential.",
  },
  {
    step: "05",
    title: "Offer and Onboarding",
    text: "If everything aligns, we will extend an offer and walk you through our onboarding process. We make sure you feel prepared and supported from day one.",
  },
];

const Careers = () => (
  <main className="bg-white text-[#202121]">
    {/* ─── 1. Hero Section ─── */}
    <PageNameSection
      eyebrow="Join Our Team"
      title={<span className="text-white">Help People Drive with Confidence</span>}
      description="We are looking for patient, reliable people who want to make a real difference by teaching safe driving skills in their community."
      backgroundImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=2200&q=80"
    />

    {/* ─── 2. Why Work With Us ─── */}
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Benefits</p>
      <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
        Why Work With Us
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
        We have built a workplace where instructors feel valued, supported, and genuinely enjoy coming to work.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#1d52a1]">
              <benefit.icon size={22} />
            </span>
            <h3 className="mt-5 text-2xl font-black text-slate-900">{benefit.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>

    {/* ─── 3. Who We're Looking For ─── */}
    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Ideal Candidates</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Who We're Looking For</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              We are always interested in hearing from people who care about road safety and enjoy working with others.
              Whether you are a licensed instructor ready for your next opportunity or someone considering a career
              change into driver education, we would like to hear from you.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Patient, calm, and clear communicator",
                "Valid BC Class 5 driver's licence with a clean driving record",
                "Comfortable working with students of all ages and experience levels",
                "Reliable and punctual with a strong sense of responsibility",
                "Willing to work flexible hours, including evenings and weekends",
                "Genuinely passionate about helping people learn and grow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-slate-700">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#1d52a1]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=1400&q=80"
              alt="Driving instructor working with student"
              className="h-[320px] w-full object-cover sm:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>

    {/* ─── 4. Open Positions ─── */}
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Positions</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Open Positions
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          We are currently looking to fill the following roles. If you see something that fits, we encourage you to
          apply.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Driving Instructor */}
          <article className="relative flex h-full flex-col rounded-3xl border-2 border-[#1d52a1] bg-white p-6 shadow-md sm:p-8">
            <span className="absolute -top-3 left-6 rounded-full bg-[#E6242A] px-3 py-1 text-xs font-bold text-white">
              Now Hiring
            </span>
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">Driving Instructor</h3>
            <p className="mt-1 text-sm font-semibold text-[#1d52a1]">ICBC Licensed</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Join our team as a fully licensed driving instructor. You will deliver in-car lessons, prepare students
              for their road tests, and help them develop safe habits that last a lifetime.
            </p>

            <div className="mt-5">
              <p className="text-sm font-black uppercase tracking-wide text-[#1d52a1]">Responsibilities</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Deliver structured in-car driving lessons",
                  "Prepare students for ICBC road tests",
                  "Provide clear, constructive feedback after each session",
                  "Maintain accurate lesson records and progress notes",
                  "Keep training vehicles clean and in good condition",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-[#1d52a1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-black uppercase tracking-wide text-[#1d52a1]">Requirements</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Valid ICBC Driving Instructor licence",
                  "Clean driving record",
                  "Strong communication and interpersonal skills",
                  "Ability to stay calm under pressure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-[#E6242A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:careers@shanayasdrivingschool.ca?subject=Application%20-%20Driving%20Instructor"
              className="mt-6 inline-flex w-fit rounded-full bg-[#E6242A] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
            >
              Apply for This Role
            </a>
          </article>

          {/* Instructor Trainee */}
          <article className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">Instructor Trainee</h3>
            <p className="mt-1 text-sm font-semibold text-[#1d52a1]">Career Transition Opportunity</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If you are considering a career change into driver education, this is a great place to start. We provide
              hands-on mentorship and support as you work towards earning your ICBC instructor licence.
            </p>

            <div className="mt-5">
              <p className="text-sm font-black uppercase tracking-wide text-[#1d52a1]">What You'll Do</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Shadow experienced instructors during lessons",
                  "Learn our teaching methods and curriculum structure",
                  "Gradually take on supervised teaching responsibilities",
                  "Prepare for the ICBC instructor licensing process",
                  "Receive regular feedback and coaching from senior staff",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-[#1d52a1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-black uppercase tracking-wide text-[#1d52a1]">What We Look For</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Valid BC Class 5 licence with a clean record",
                  "Genuine interest in teaching and road safety",
                  "Patience, reliability, and a positive attitude",
                  "Willingness to commit to the training programme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-[#E6242A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:careers@shanayasdrivingschool.ca?subject=Application%20-%20Instructor%20Trainee"
              className="mt-6 inline-flex w-fit rounded-full bg-[#1d52a1] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#17C584]"
            >
              Apply for This Role
            </a>
          </article>
        </div>
      </div>
    </section>

    {/* ─── 5. What It's Like Working Here ─── */}
    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaboration"
              className="h-[320px] w-full object-cover sm:h-[380px]"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Life at Shanaya's</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">What It's Like Working Here</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Our instructors work with a wide range of students — nervous beginners, newcomers to Canada learning BC
              roads for the first time, experienced drivers brushing up on their skills, and teens preparing for their
              first road test.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              No two days are the same, and that variety is part of what makes this work interesting. You will build
              genuine connections with your students and take pride in watching them progress. The team here is
              supportive, the schedule is flexible, and the work genuinely matters.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We keep things straightforward — clear communication, fair expectations, and a focus on doing good work.
              If that sounds like the kind of place you would like to be, we would be glad to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 6. Hiring Process ─── */}
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Process</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Our Hiring Process
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          We keep our hiring process simple and respectful of your time. Here is what to expect.
        </p>

        <div className="relative mt-12">
          {/* Vertical line connector */}
          <div className="absolute left-[22px] top-0 hidden h-full w-0.5 bg-[#1d52a1]/20 md:block" />

          <div className="space-y-8">
            {hiringSteps.map((step, index) => (
              <div key={step.step} className="relative flex items-start gap-6">
                {/* Step number circle */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d52a1] text-sm font-black text-white">
                  {step.step}
                </div>
                <div className="rounded-3xl bg-[#F2F2F2] p-6 sm:p-8 flex-1">
                  <h3 className="text-xl font-black text-slate-900 sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ─── 7. Apply Section ─── */}
    <section className="bg-[#F2F2F2] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Apply</p>
        <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
          Ready to Apply?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
          Send your resume and a short introduction to the email address below. Tell us a bit about yourself, your
          driving experience, and why you are interested in joining Shanaya's Driving School. We review every
          application and will be in touch.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#1d52a1]/30 bg-white px-6 py-4 text-lg font-bold text-[#1d52a1]">
          <Mail size={20} />
          careers@shanayasdrivingschool.ca
        </div>

        <div className="mt-6">
          <a
            href="mailto:careers@shanayasdrivingschool.ca?subject=Career%20Application%20-%20Shanaya's%20Driving%20School"
            className="inline-flex rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>

    {/* ─── 8. Equal Opportunity Statement ─── */}
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Equal Opportunity Employer</p>
          <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">Everyone Is Welcome Here</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Shanaya's Driving School is committed to building an inclusive workplace. We welcome applications from
            people of all backgrounds, identities, and experiences. What matters most to us is your character, your
            willingness to learn, and the care you bring to your work.
          </p>
        </div>
      </div>
    </section>

    {/* ─── 9. Final CTA ─── */}
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="rounded-[34px] bg-[#202121] p-8 text-white sm:p-10 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Not sure yet?</p>
        <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-tight">
          Have questions before you <span className="text-[#E6242A]">apply</span>?
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
          If you are interested but not quite ready to apply, feel free to reach out. We are happy to answer questions
          about the role, our training process, or what a typical day looks like. No pressure at all.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
          >
            Contact Us
          </Link>
          <a
            href="mailto:careers@shanayasdrivingschool.ca?subject=Question%20About%20Careers"
            className="rounded-full border-2 border-[#E6242A] bg-transparent px-8 py-3 text-sm font-bold text-[#E6242A] transition-colors hover:bg-[#E6242A] hover:text-white"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
);

export default Careers;
