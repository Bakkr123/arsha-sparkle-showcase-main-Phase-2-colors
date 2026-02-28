import { useState } from "react";
import { CheckCircle2, User, Car, BookOpen, Calendar, ChevronRight, ChevronLeft, ClipboardList, Clock, CalendarCheck } from "lucide-react";
import PageNameSection from "@/components/PageNameSection";
import SiteFooter from "@/components/SiteFooter";

/* ── Types ── */
type FormData = {
  /* Step 1 – Student Info */
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  /* Step 2 – Driving Status */
  licenceType: string;
  hasLearnerPermit: string;
  previousExperience: string;
  /* Step 3 – Lesson Preferences */
  packageInterest: string;
  preferredSchedule: string;
  pickupArea: string;
  specialRequests: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  licenceType: "",
  hasLearnerPermit: "",
  previousExperience: "",
  packageInterest: "",
  preferredSchedule: "",
  pickupArea: "",
  specialRequests: "",
};

/* ── Step definitions ── */
const steps = [
  { label: "Student Info", icon: User },
  { label: "Driving Status", icon: Car },
  { label: "Lesson Preferences", icon: BookOpen },
  { label: "Schedule", icon: Calendar },
];

/* ── How-it-works cards ── */
const howItWorks = [
  {
    icon: ClipboardList,
    title: "Fill Out Your Details",
    text: "Provide your personal information, driving status, and lesson preferences so we can match you with the right program.",
  },
  {
    icon: Clock,
    title: "Pick a Time Slot",
    text: "Choose a convenient date and time through our scheduling tool. Weekday and selected weekend slots available.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm & Start",
    text: "You will receive a confirmation email with next steps. Our team will reach out to finalise your lesson plan.",
  },
];

/* ── Shared input class ── */
const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition-colors focus:border-[#1d52a1]";

const selectClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition-colors focus:border-[#1d52a1] appearance-none";

/* ─────────────────────────────────────────── */
/*  Apply Page                                 */
/* ─────────────────────────────────────────── */

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  /* ── Step validation ── */
  const isStep1Valid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "";

  const isStep2Valid =
    formData.licenceType !== "" &&
    formData.hasLearnerPermit !== "" &&
    formData.previousExperience !== "";

  const isStep3Valid =
    formData.packageInterest !== "" &&
    formData.preferredSchedule !== "" &&
    formData.pickupArea !== "";

  const canProceed = [isStep1Valid, isStep2Valid, isStep3Valid, true];

  const handleNext = () => {
    if (currentStep < steps.length - 1 && canProceed[currentStep]) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ────────────────── Render ────────────────── */

  return (
    <main className="bg-white text-[#202121]">
      {/* ─── 1. Hero ─── */}
      <PageNameSection
        eyebrow="Start your journey with confidence"
        title={<span className="text-white">Book Your Lessons</span>}
        description="Complete the form below and schedule your first driving lesson. We will match you with the right instructor and program."
        backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2200&q=80"
      />

      {/* ─── 2. How It Works ─── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Steps</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            Booking your first lesson is quick and straightforward. Here is how the process works.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((card, index) => (
              <article
                key={card.title}
                className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#1d52a1]">
                  <card.icon size={26} />
                </span>
                <span className="mt-3 text-sm font-black uppercase tracking-wider text-[#E6242A]">
                  Step {index + 1}
                </span>
                <h3 className="mt-3 text-xl font-black text-slate-900">{card.title}</h3>
                <p className="mt-3 text-center text-sm leading-relaxed text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Multi-Step Form ─── */}
      <section className="bg-[#F2F2F2] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Apply</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">
            Book Your Driving Lessons
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600 sm:text-lg">
            Fill in each step below. All information stays private and is only used to match you with the right program.
          </p>

          {submitted ? (
            /* ── Confirmation ── */
            <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-[#1d52a1]/30 bg-white p-8 text-center shadow-sm sm:p-10">
              <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#1d52a1]">
                <CheckCircle2 size={34} />
              </span>
              <h3 className="mt-5 text-3xl font-black text-slate-900">Booking Received!</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Thank you, <strong>{formData.firstName}</strong>. We have received your application and will reach out to{" "}
                <strong>{formData.email}</strong> within 24 hours with your confirmed lesson details.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                If you need to make changes, call us at{" "}
                <a href="tel:+12505423673" className="font-semibold text-[#1d52a1]">
                  +1 (250) 542-3673
                </a>
              </p>
              <a
                href="/"
                className="mt-8 inline-block rounded-full bg-[#1d52a1] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#17408a]"
              >
                Back to Home
              </a>
            </div>
          ) : (
            <div className="mt-10">
              {/* ── Progress Indicator ── */}
              <div className="mb-8 flex items-center justify-center">
                <div className="flex items-center gap-0">
                  {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isCompleted = index < currentStep;
                    const isActive = index === currentStep;
                    const isUpcoming = index > currentStep;

                    return (
                      <div key={step.label} className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            /* Only allow going back to completed steps */
                            if (index < currentStep) setCurrentStep(index);
                          }}
                          className={`flex flex-col items-center gap-1.5 px-2 sm:px-3 ${
                            index < currentStep ? "cursor-pointer" : "cursor-default"
                          }`}
                          disabled={isUpcoming}
                        >
                          <span
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 sm:h-12 sm:w-12 ${
                              isCompleted
                                ? "bg-[#1d52a1] text-white"
                                : isActive
                                ? "border-2 border-[#1d52a1] bg-white text-[#1d52a1]"
                                : "border-2 border-slate-300 bg-white text-slate-400"
                            }`}
                          >
                            {isCompleted ? <CheckCircle2 size={18} /> : <StepIcon size={18} />}
                          </span>
                          <span
                            className={`hidden text-xs font-semibold sm:block ${
                              isActive ? "text-[#1d52a1]" : isCompleted ? "text-slate-700" : "text-slate-400"
                            }`}
                          >
                            {step.label}
                          </span>
                        </button>

                        {index < steps.length - 1 && (
                          <div
                            className={`mx-1 h-0.5 w-6 sm:mx-2 sm:w-10 ${
                              index < currentStep ? "bg-[#1d52a1]" : "bg-slate-300"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ── Form Card ── */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                {/* Step 1 – Student Info */}
                {currentStep === 0 && (
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Student Information</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Tell us who you are so we can create your student profile.
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">First Name *</label>
                          <input
                            type="text"
                            placeholder="e.g. Sarah"
                            required
                            value={formData.firstName}
                            onChange={(e) => update("firstName", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Last Name *</label>
                          <input
                            type="text"
                            placeholder="e.g. Johnson"
                            required
                            value={formData.lastName}
                            onChange={(e) => update("lastName", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">Email Address *</label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">Phone Number *</label>
                          <input
                            type="tel"
                            placeholder="+1 (250) 000-0000"
                            required
                            value={formData.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => update("dateOfBirth", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 – Driving Status */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Driving Status</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Help us understand where you are in your driving journey.
                    </p>
                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          What licence are you working towards? *
                        </label>
                        <select
                          value={formData.licenceType}
                          onChange={(e) => update("licenceType", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select an option</option>
                          <option value="class-7l">Class 7L (Learner)</option>
                          <option value="class-7n">Class 7N (Novice / N)</option>
                          <option value="class-5">Class 5 (Full Licence)</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Do you have your Learner's Permit (L)? *
                        </label>
                        <select
                          value={formData.hasLearnerPermit}
                          onChange={(e) => update("hasLearnerPermit", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes, I have my L</option>
                          <option value="no">No, I still need to get it</option>
                          <option value="n-licence">I already have my N</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Previous Driving Experience *
                        </label>
                        <select
                          value={formData.previousExperience}
                          onChange={(e) => update("previousExperience", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select an option</option>
                          <option value="none">No experience – complete beginner</option>
                          <option value="some">Some experience – practised with family/friends</option>
                          <option value="moderate">Moderate – taken a few lessons before</option>
                          <option value="experienced">Experienced – just need road test prep</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 – Lesson Preferences */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Lesson Preferences</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Let us know what works best for you so we can build your ideal lesson plan.
                    </p>
                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Which package are you interested in? *
                        </label>
                        <select
                          value={formData.packageInterest}
                          onChange={(e) => update("packageInterest", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select a package</option>
                          <option value="single">Single Lesson</option>
                          <option value="starter">Starter Package (5 lessons)</option>
                          <option value="standard">Standard Package (10 lessons)</option>
                          <option value="complete">Complete Package (15+ lessons)</option>
                          <option value="road-test">Road Test Preparation</option>
                          <option value="not-sure">Not sure – help me choose</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Preferred Schedule *
                        </label>
                        <select
                          value={formData.preferredSchedule}
                          onChange={(e) => update("preferredSchedule", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select your preference</option>
                          <option value="weekday-morning">Weekday Mornings</option>
                          <option value="weekday-afternoon">Weekday Afternoons</option>
                          <option value="weekday-evening">Weekday Evenings</option>
                          <option value="weekend">Weekends</option>
                          <option value="flexible">Flexible / Open to any time</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Preferred Pickup Area *
                        </label>
                        <select
                          value={formData.pickupArea}
                          onChange={(e) => update("pickupArea", e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select an area</option>
                          <option value="langford">Langford</option>
                          <option value="colwood">Colwood</option>
                          <option value="victoria">Victoria</option>
                          <option value="sooke">Sooke</option>
                          <option value="metchosin">Metchosin</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                          Special Requests or Notes
                        </label>
                        <textarea
                          placeholder="e.g. I prefer a female instructor, I have anxiety about highway driving, etc."
                          rows={4}
                          value={formData.specialRequests}
                          onChange={(e) => update("specialRequests", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition-colors focus:border-[#1d52a1]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4 – Schedule */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Schedule Your First Lesson</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Almost there! Review your information below, then confirm your booking.
                    </p>

                    {/* Summary review */}
                    <div className="mt-6 space-y-3">
                      <div className="rounded-2xl border border-slate-200 bg-[#F2F2F2] p-5">
                        <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Your Details</p>
                        <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                          <p>
                            <span className="font-semibold text-slate-900">Name:</span> {formData.firstName}{" "}
                            {formData.lastName}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Email:</span> {formData.email}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Phone:</span> {formData.phone}
                          </p>
                          {formData.dateOfBirth && (
                            <p>
                              <span className="font-semibold text-slate-900">DOB:</span> {formData.dateOfBirth}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-[#F2F2F2] p-5">
                        <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Driving Status</p>
                        <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                          <p>
                            <span className="font-semibold text-slate-900">Licence Goal:</span>{" "}
                            {formData.licenceType}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Learner Permit:</span>{" "}
                            {formData.hasLearnerPermit}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Experience:</span>{" "}
                            {formData.previousExperience}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-[#F2F2F2] p-5">
                        <p className="text-sm font-black uppercase tracking-wider text-[#E6242A]">Preferences</p>
                        <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                          <p>
                            <span className="font-semibold text-slate-900">Package:</span>{" "}
                            {formData.packageInterest}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Schedule:</span>{" "}
                            {formData.preferredSchedule}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Area:</span> {formData.pickupArea}
                          </p>
                          {formData.specialRequests && (
                            <p className="sm:col-span-2">
                              <span className="font-semibold text-slate-900">Notes:</span>{" "}
                              {formData.specialRequests}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Calendly Embed Placeholder */}
                    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <div className="bg-[#1d52a1]/5 px-5 py-3">
                        <p className="text-sm font-bold text-[#1d52a1]">
                          <Calendar size={16} className="mr-2 inline-block" />
                          Select a Date & Time
                        </p>
                      </div>
                      <div className="flex min-h-[320px] items-center justify-center p-6">
                        <div className="text-center">
                          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#1d52a1]">
                            <CalendarCheck size={26} />
                          </span>
                          <p className="mt-4 text-lg font-black text-slate-900">Scheduling Coming Soon</p>
                          <p className="mt-2 max-w-sm text-sm text-slate-500">
                            Online scheduling will be available here. For now, submit your booking and our team will
                            contact you to confirm a time slot.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Navigation Buttons ── */}
                <div className="mt-8 flex items-center justify-between">
                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-[#1d52a1] hover:text-[#1d52a1]"
                    >
                      <ChevronLeft size={16} />
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {currentStep < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceed[currentStep]}
                      className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold text-white transition-colors ${
                        canProceed[currentStep]
                          ? "bg-[#1d52a1] hover:bg-[#17408a]"
                          : "cursor-not-allowed bg-slate-300"
                      }`}
                    >
                      Next
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── 4. Need Help CTA ─── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-[34px] bg-[#202121] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">Need assistance?</p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-tight">
            Not sure where to <span className="text-[#e6242a]">start?</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
            If you are unsure which package is right for you or have questions about the booking process, our team is
            happy to help. Reach out and we will guide you to the right program.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="/contact"
              className="rounded-full border-2 border-[#E6242A] bg-transparent px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E6242A]"
            >
              Contact Us
            </a>
            <a
              href="tel:+12505423673"
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

export default Apply;
