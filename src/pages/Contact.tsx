import { useState } from "react";
import { Mail, MapPin, Phone, Headphones, Newspaper, Briefcase } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ── "Reach Us Out Directly" cards ── */
const reachCards = [
  {
    icon: Headphones,
    title: "Help & Support",
    text: "Have a question about lessons, scheduling, or your current package? Our support team is ready to help.",
    link: "mailto:book@drivingschoolbc.ca",
    linkLabel: "Get support",
  },
  {
    icon: Newspaper,
    title: "Press & Media",
    text: "For media inquiries, partnerships, or press-related requests, reach out to our communications team.",
    link: "mailto:book@drivingschoolbc.ca",
    linkLabel: "Media enquiries",
  },
  {
    icon: Briefcase,
    title: "Sales & Enquiries",
    text: "Interested in group bookings, corporate driver training, or custom packages? Let's discuss your needs.",
    link: "mailto:book@drivingschoolbc.ca",
    linkLabel: "Talk to sales",
  },
];

/* ── Locations ── */
const locations = [
  {
    name: "Langford",
    address: "Unit 123, 2770 Leigh Rd, Langford, BC V9B 4G1",
    description: "Our main office and primary training hub, centrally located in the Westshore area.",
  },
  {
    name: "Colwood",
    address: "Colwood, BC",
    description: "Serving Colwood residents with convenient lesson pickups and local route practice.",
  },
  {
    name: "Victoria",
    address: "Victoria, BC",
    description: "Lessons available across Greater Victoria with flexible scheduling for city routes.",
  },
  {
    name: "Sooke",
    address: "Sooke, BC",
    description: "Rural and highway driving practice for students in the Sooke region.",
  },
  {
    name: "Metchosin",
    address: "Metchosin, BC",
    description: "Calm rural roads ideal for building early driving confidence and fundamentals.",
  },
];

/* ── FAQs ── */
const contactFaqs = [
  {
    question: "How do I book my first driving lesson?",
    answer:
      "You can book your first lesson by calling us, sending an email, or filling out the contact form on this page. We will match you with a suitable instructor and schedule.",
  },
  {
    question: "What areas do you provide lessons in?",
    answer:
      "We serve Langford, Colwood, Victoria, Sooke, and Metchosin. Pickup locations can be arranged based on your area.",
  },
  {
    question: "Do you offer lessons on weekends?",
    answer:
      "Yes. We offer selected weekend slots to accommodate students with weekday commitments. Availability may vary, so booking early is recommended.",
  },
  {
    question: "Can I reschedule or cancel a lesson?",
    answer:
      "Yes. We ask for at least 24 hours notice for cancellations or reschedules. Late cancellations may be subject to a fee.",
  },
  {
    question: "What should I bring to my first lesson?",
    answer:
      "Bring your valid learner's permit (L licence), comfortable footwear, and any glasses or contacts required for driving. Our instructor will handle the rest.",
  },
  {
    question: "Do you provide the car for road tests?",
    answer:
      "Yes. Our Road Test Package includes use of our insured dual-control vehicle on test day, along with a warm-up lesson beforehand.",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white text-[#202121]">
      {/* ─── 1. Hero / Page Header ─── */}
      <section className="relative left-1/2 isolate w-screen -translate-x-1/2 text-white min-h-[520px] md:min-h-[600px]" style={{ overflow: 'clip', overflowClipMargin: 'unset' }}>
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2200&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div
          className="relative z-30 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <SiteHeader tone="light" />

          <div className="flex min-h-[340px] flex-col items-center justify-end gap-2 pb-24 pt-8 text-center md:min-h-[420px] md:flex-row md:gap-4 md:pb-0 md:text-left">
            {/* Left – PNG Image (transparent bg) */}
            <div className="relative flex shrink-0 items-end justify-center self-end">
              <img
                src="/logos/contact-hero.png"
                alt="Ruley - Shanaya's Driving School mascot"
                className="w-auto object-contain drop-shadow-2xl max-h-[420px] sm:max-h-[500px] md:max-h-[620px] md:-translate-y-[20px]"
              />
            </div>

            {/* Right – Text */}
            <div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4rem)] font-black leading-[1.08]">
                <span className="text-[#F5C518]">Let's talk about<br />your driving lessons</span>
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[1.5] text-slate-300 md:mx-0">
                We're happy to assess your learning needs, and help you choose the right program to get you road-ready with confidence.
              </p>

            </div>
          </div>
        </div>

        {/* Wave curve */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[80px] md:h-[100px] lg:h-[120px]">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden className="h-full w-full">
            <path fill="#1d52a1" d="M0,40 A2400,2400 0 0,0 1440,40 L1440,200 L0,200 Z" />
            <path fill="#ffffff" d="M0,80 A2400,2400 0 0,0 1440,80 L1440,200 L0,200 Z" />
          </svg>
        </div>
      </section>

      {/* ─── 3. Contact Details + Form (side by side) ─── */}
      <section className="bg-[#F2F2F2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Connect</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            Get in touch with our ICBC licensed instructors. We’re happy to guide you, assess your learning needs, and help you choose the right program to get you road-ready with confidence.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left column – contact info cards */}
            <div className="space-y-4">
              <a
                href="mailto:book@drivingschoolbc.ca"
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#202121]">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-xl font-black text-slate-900">Email</span>
                  <span className="mt-1 block text-sm font-semibold text-slate-700">book@drivingschoolbc.ca</span>
                  <span className="mt-2 block text-sm text-slate-500">Average reply: under 24 hours</span>
                </span>
              </a>

              <a
                href="tel:+12505423673"
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#202121]">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xl font-black text-slate-900">Phone</span>
                  <span className="mt-1 block text-sm font-semibold text-slate-700">+1 (250) 542-3673</span>
                  <span className="mt-2 block text-sm text-slate-500">Mon – Sat, 8:00 AM – 6:00 PM</span>
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=2770+Leigh+Rd,+Langford,+BC+V9B+4G1"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#202121]">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-xl font-black text-slate-900">Our Office</span>
                  <span className="mt-1 block text-sm font-semibold text-slate-700">
                    Unit 123, 2770 Leigh Rd, Langford, British Columbia V9B 4G1
                  </span>
                  <span className="mt-2 block text-sm text-slate-500">By appointment · Free parking available</span>
                </span>
              </a>
            </div>

            {/* Right column – form */}
            <div className="rounded-[30px] border border-[#E0E0E0] bg-white p-6 sm:p-8">
              <h3 className="text-3xl font-black text-slate-900">Send a Message</h3>
              <p className="mt-3 max-w-xl text-base text-slate-600 sm:text-lg">
                Tell us about your goals and we will get back to you with a personalised recommendation.
              </p>

              <div className="mt-5">
                {submitted ? (
                  <div className="rounded-2xl border border-[#1d52a1]/30 bg-[#F2F2F2] p-6 text-center">
                    <p className="text-2xl font-black text-slate-900">Thanks, we got your message!</p>
                    <p className="mt-2 text-slate-600">Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="First name"
                        required
                        className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition-colors focus:border-[#1d52a1]"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        required
                        className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition-colors focus:border-[#1d52a1]"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition-colors focus:border-[#1d52a1]"
                    />
                    <textarea
                      placeholder="Your message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition-colors focus:border-[#1d52a1]"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-[#E6242A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
                    >
                      Get In Touch
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Reach Us Out Directly ─── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Support</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Reach Us Out Directly</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            Choose the department that best matches your enquiry and we will route you to the right team.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reachCards.map((card) => (
              <a
                key={card.title}
                href={card.link}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#202121]">
                  <card.icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-black text-slate-900">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.text}</p>
                <span className="mt-5 inline-block text-sm font-bold text-[#1d52a1] transition-colors group-hover:text-[#E6242A]">
                  {card.linkLabel} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Locations ─── */}
      <section className="bg-[#F2F2F2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Local</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">Our Locations</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 sm:text-lg">
            We proudly serve students across the Greater Victoria and Westshore region.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <article
                key={loc.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1d52a1]/15 text-[#202121]">
                  <MapPin size={18} />
                </span>
                <h3 className="mt-4 text-xl font-black text-slate-900">{loc.name}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-700">{loc.address}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{loc.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <iframe
              title="Our office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.263636375451!2d-123.52076622307371!3d48.451470971279875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f0d12a28feb31%3A0x7844eb9adc8db1de!2s2770%20Leigh%20Rd%20%23124%2C%20Victoria%2C%20BC%20V9B%204G2%2C%20Canada!5e0!3m2!1sen!2s!4v1772209932126!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[350px] w-full rounded-2xl border-0 sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ─── 8. FAQs ─── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-center text-5xl font-black text-gray-300/80 sm:text-6xl md:text-7xl">Questions</p>
          <h2 className="text-center text-3xl font-black text-[#1d52a1] sm:text-4xl md:text-5xl">FAQs</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600 sm:text-lg">
            Find answers to the most common questions about our driving lessons and booking process.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-2 shadow-sm sm:px-8">
            <Accordion type="single" collapsible className="w-full">
              {contactFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`contact-faq-${index}`} className="border-slate-200">
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

      <SiteFooter />
    </main>
  );
};

export default Contact;
