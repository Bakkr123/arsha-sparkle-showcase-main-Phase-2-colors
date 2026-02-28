import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TestimonialsSection from "@/components/TestimonialsSection";

const serviceCards = [
  {
    id: "websites",
    title: "Websites",
    tone: "bg-gray-200",
    description: "Simple, conversion-ready websites for home service businesses.",
    items: ["Website Design", "Website Navigation", "Website Content", "SEO"],
  },
  {
    id: "branding",
    title: "Branding",
    tone: "bg-[#1d52a1]",
    description: "Build a brand customers remember and trust instantly.",
    items: ["Logo Design", "Character Creation", "Naming", "Tagline", "Colors", "Message"],
  },
  {
    id: "print",
    title: "Print",
    tone: "bg-gray-200",
    description: "High-impact print assets for local visibility and recall.",
    items: ["Wall Graphics", "Window Graphics", "Business Cards", "Brochures", "Mail Outs"],
  },
  {
    id: "marketing",
    title: "Marketing",
    tone: "bg-[#202121] text-white",
    description: "Data-backed campaigns that turn attention into leads.",
    items: ["Research", "Strategy", "Ad Campaign Creation", "Social Media", "Copy"],
  },
  {
    id: "vehicle-wraps",
    title: "Vehicle Wraps",
    tone: "bg-gray-200",
    description: "Turn every drive into a moving billboard for your brand.",
    items: ["Design Mockups", "Partial Wraps", "Full Wraps", "Install Planning", "Print Coordination"],
  },
];

const articles = [
  {
    title: "Digital Brand Guidelines for Contractors",
    text: "Learn how digital consistency helps home service brands stay memorable and trustworthy.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Digital Marketing for Home Service Businesses",
    text: "Practical marketing systems that help businesses capture more leads in 2026.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Why Mascots Work for Service Branding",
    text: "Mascots can build familiarity and improve recall for local service companies.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
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
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [swipeStartX, setSwipeStartX] = useState<number | null>(null);
  const totalServiceSlides = serviceCards.length;
  const desktopServiceCards = [...serviceCards, ...serviceCards];
  const desktopServiceSlideWidth = 252;

  const goToServiceSlide = (index: number) => {
    const normalized = (index + totalServiceSlides) % totalServiceSlides;
    setActiveServiceSlide(normalized);
  };

  const goToPreviousServiceSlide = () => goToServiceSlide(activeServiceSlide - 1);
  const goToNextServiceSlide = () => goToServiceSlide(activeServiceSlide + 1);

  const handleSwipeStart = (clientX: number) => {
    setSwipeStartX(clientX);
  };

  const handleSwipeEnd = (clientX: number) => {
    if (swipeStartX === null) return;
    const distance = clientX - swipeStartX;
    const threshold = 50;

    if (Math.abs(distance) > threshold) {
      if (distance < 0) goToNextServiceSlide();
      if (distance > 0) goToPreviousServiceSlide();
    }

    setSwipeStartX(null);
  };

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

        <div className="grid min-h-[620px] items-end gap-8 pb-36 pt-10 lg:min-h-[700px] lg:grid-cols-[1fr_0.82fr] lg:items-center lg:pb-44">
          <div className="max-w-[700px]">
            <h1 className="text-[13px] font-semibold md:text-[15px]">
              Branding and Marketing Services for Home Service Businesses
            </h1>
            <div className="mt-3 text-[clamp(3rem,8vw,6.6rem)] font-bold leading-[0.95] text-[#1d52a1]">Websites|</div>
            <h2 className="mt-2 text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.02]">
              to really GO <br /> BANANAS for
            </h2>
            <p className="mt-5 max-w-[760px] text-[clamp(1.35rem,2.2vw,2.2rem)] leading-[1.3]">
              Expert Design and Marketing Tools built to grow HVAC, Plumbing & Home Service businesses.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 md:gap-4">
              <button className="rounded-full bg-[#1d52a1] px-7 py-2.5 text-[clamp(1rem,1.7vw,2rem)] font-medium text-[#202121] md:px-9 md:py-3">
                See our work
              </button>
              <button className="rounded-full bg-[#E6242A] px-7 py-2.5 text-[clamp(1rem,1.7vw,2rem)] font-medium text-white md:px-9 md:py-3">
                Contact us
              </button>
            </div>
            <img
              src={heroAssets.monkey}
              alt="Bananas Creative mascot"
              className="pointer-events-none mx-auto mt-8 w-[260px] sm:w-[320px] lg:hidden"
            />
          </div>

          <div className="relative hidden h-full lg:block">
            <img
              src={heroAssets.monkey}
              alt="Bananas Creative mascot"
              className="pointer-events-none absolute bottom-[68px] right-[-36px] z-40 w-[clamp(340px,35vw,560px)] max-w-none"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-px z-20 h-[170px] md:h-[235px] lg:h-[300px]">
        <svg
          viewBox="0 0 1280 300"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="heroWaveBlue" x1="640" y1="285.5229" x2="640" y2="73.3379" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1d52a1" />
                <stop offset="1" stopColor="#5FF7BD" />
              </linearGradient>
              <linearGradient id="heroWaveYellow" x1="640" y1="295.5567" x2="640" y2="163.6771" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#E6242A" />
                <stop offset="1" stopColor="#1d52a1" />
            </linearGradient>
          </defs>

          <path
            fill="url(#heroWaveBlue)"
            d="M0,142.8c0,0,106.5,75.3,300.8,75.3s379.9-161,547-203.2C1040.8-33.9,1147.7,45,1280,142.8v139.8H0V142.8z"
          />
          <path
            fill="url(#heroWaveYellow)"
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

    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
      <p className="text-7xl font-black text-gray-300/80">The Project</p>
      <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-700">
        You know that building your contracting business revolves around getting a potential customer&apos;s attention.
        We know how to grab that attention.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1562141961-62d9b6df3524?auto=format&fit=crop&w=1200&q=80"
          alt="Before vehicle"
          className="h-64 w-full rounded-3xl object-cover shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1553678324-f84674bd16b7?auto=format&fit=crop&w=1200&q=80"
          alt="After vehicle"
          className="h-64 w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
    </section>

    <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 md:grid-cols-2">
      <div>
        <h3 className="text-5xl font-black text-[#E6242A]">Award & Recognition</h3>
        <p className="mt-4 max-w-md leading-relaxed text-slate-700">
          We are proud to be recognized as the best graphic design team in Edmonton by the Canadian Choice Awards.
        </p>
      </div>
      <div className="rounded-2xl border-2 border-[#1d52a1] bg-white p-5 text-center">
        <p className="text-sm font-bold uppercase text-slate-500">Canadian Choice Award</p>
        <p className="text-7xl font-black text-[#1d52a1]">2025</p>
        <p className="font-bold text-slate-700">Bananas Creative</p>
      </div>
    </section>

    <section id="about" className="bg-[#F2F2F2] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-7xl font-black text-gray-300/80">The Plan</p>
        <p className="mt-2 text-center text-lg font-black uppercase tracking-wide text-[#E6242A]">
          Branding & Marketing For Home Service Businesses
        </p>
        <h3 className="text-center text-5xl font-black text-[#E6242A]">The ingredients for Banana BREAD</h3>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {[
            "A Stand Out Brand",
            "A Converting Website",
            "Attention - Getting Wraps",
            "A Targeted Message",
          ].map((item) => (
            <article key={item} className="flex gap-4">
              <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1d52a1] font-black text-[#202121]">
                *
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#202121]">{item}</h4>
                <p className="mt-2 text-slate-600">
                  We build a simple but effective message and visual system to drive stronger lead quality.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-[#202121] p-5 shadow-2xl">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
              alt="Video preview"
              className="h-72 w-full object-cover opacity-70"
            />
            <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#202121]">
              <Play size={24} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-center text-7xl font-black text-gray-300/80">The Tools</p>
      <h3 className="text-center text-5xl font-black text-[#E6242A]">We Shake it Up with our Ripe Services</h3>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
        We know your business requires more than just a great brand. You need the tools to get your name out there.
      </p>
      <div
        className="relative mx-auto mt-12 max-w-[1140px] select-none"
        onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleSwipeStart(e.clientX)}
        onMouseUp={(e) => handleSwipeEnd(e.clientX)}
        onMouseLeave={() => setSwipeStartX(null)}
      >
        <div className="pointer-events-none absolute -top-10 left-4 z-0 h-12 w-12 rounded-full border-4 border-[#1d52a1]/40" />
        <div className="pointer-events-none absolute -top-6 right-16 z-0 h-8 w-8 rotate-12 rounded-md bg-[#1d52a1]/40" />
        <div
          className="pointer-events-none absolute -top-8 right-1/3 z-0 h-12 w-12 bg-[#1d52a1]/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
        <div className="pointer-events-none absolute top-14 right-6 z-0 h-7 w-20 rounded-full border border-slate-400/60" />

        <div className="relative z-10 overflow-hidden pb-2 pt-4 lg:hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeServiceSlide * 100}%)` }}
          >
            {serviceCards.map((card) => {
              const isMarketing = card.title === "Marketing";

              return (
                <div key={card.id} className="flex w-full shrink-0 justify-center px-2 py-2">
                  <article
                    className={`flex h-[540px] w-[min(94vw,460px)] flex-col rounded-3xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_34px_rgba(0,0,0,0.18)] ${card.tone}`}
                  >
                    <div className="text-3xl" aria-hidden>
                      *
                    </div>
                    <h4 className={`mt-4 text-4xl font-black ${isMarketing ? "text-white" : "text-[#202121]"}`}>
                      {card.title}
                    </h4>
                    <p className={`mt-2 min-h-[52px] text-sm ${isMarketing ? "text-white/90" : "text-slate-700/90"}`}>
                      {card.description}
                    </p>
                    <ul className={`mt-4 min-h-[190px] space-y-1 ${isMarketing ? "text-white/95" : "text-slate-700"}`}>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <button className="mt-auto rounded-full bg-white px-7 py-2 text-sm font-bold text-[#E6242A]">MORE</button>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 hidden overflow-hidden pb-2 pt-4 lg:block">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeServiceSlide * desktopServiceSlideWidth}px)` }}
          >
            {desktopServiceCards.map((card, index) => {
              const isMarketing = card.title === "Marketing";

              return (
                <div key={`${card.id}-${index}`} className="w-[252px] shrink-0 px-3 py-2">
                  <article
                    className={`flex h-[540px] w-full flex-col rounded-3xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_34px_rgba(0,0,0,0.18)] ${card.tone}`}
                  >
                    <div className="text-3xl" aria-hidden>
                      *
                    </div>
                    <h4 className={`mt-4 text-4xl font-black ${isMarketing ? "text-white" : "text-[#202121]"}`}>
                      {card.title}
                    </h4>
                    <p className={`mt-2 min-h-[52px] text-sm ${isMarketing ? "text-white/90" : "text-slate-700/90"}`}>
                      {card.description}
                    </p>
                    <ul className={`mt-4 min-h-[190px] space-y-1 ${isMarketing ? "text-white/95" : "text-slate-700"}`}>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <button className="mt-auto rounded-full bg-white px-7 py-2 text-sm font-bold text-[#E6242A]">MORE</button>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous service"
            onClick={goToPreviousServiceSlide}
            className="grid h-11 w-20 place-items-center rounded-full bg-[#202121] text-white transition-colors hover:bg-[#1a1a1a]"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {serviceCards.map((card, index) => (
              <button
                key={card.id}
                type="button"
                aria-label={`Go to ${card.title}`}
                onClick={() => goToServiceSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeServiceSlide ? "w-10 bg-[#E6242A]" : "w-4 bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next service"
            onClick={goToNextServiceSlide}
            className="grid h-11 w-20 place-items-center rounded-full bg-[#202121] text-white transition-colors hover:bg-[#1a1a1a]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl space-y-20 px-4 py-8 sm:px-6">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-5xl font-black text-[#E6242A]">Vehicle Wraps</h3>
          <p className="mt-4 max-w-md text-slate-700">
            From design to print and installation, we do it all. Partial and full wraps available.
          </p>
          <button className="mt-8 rounded-full bg-[#1d52a1] px-8 py-3 text-sm font-bold text-[#202121]">
            Learn more
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
          alt="Vehicle wrap"
          className="h-72 w-full rounded-[40px] object-cover shadow-xl"
        />
      </div>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-5xl font-black text-[#202121]">Testimonials</h3>
          <p className="mt-4 max-w-md text-slate-700">
            See what stands out from the crowd branding has done for one of our clients.
          </p>
          <button className="mt-8 rounded-full bg-[#1d52a1] px-8 py-3 text-sm font-bold text-[#202121]">
            Contact us
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
            alt="Video testimonial"
            className="h-80 w-full rounded-[999px] object-cover"
          />
          <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#202121]">
            <Play size={24} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="py-8 text-center">
        <p className="text-7xl font-black text-gray-300/80">Our process</p>
        <h3 className="text-5xl font-black text-[#E6242A]">This is how we do it</h3>
      </div>
    </section>

    <TestimonialsSection />

    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-center text-7xl font-black text-gray-300/80">Latest Articles</p>
      <h3 className="text-center text-5xl font-black text-[#E6242A]">Bold Ideas. Ripe Designs.</h3>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src={article.image} alt={article.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h4 className="text-3xl font-black text-[#202121]">{article.title}</h4>
              <p className="mt-3 text-slate-600">{article.text}</p>
              <button className="mt-5 rounded-full bg-[#E6242A] px-6 py-2 text-sm font-bold text-white">Read more</button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 grid items-center gap-10 rounded-[40px] bg-[#F2F2F2] p-8 md:grid-cols-2">
        <div>
          <h3 className="text-6xl font-black text-[#202121]">
            Get our <br />
            <span className="text-[#1d52a1]">Courses Now!</span>
          </h3>
          <p className="mt-4 text-slate-600">We&apos;re here to help!</p>
          <button className="mt-8 rounded-full bg-[#1d52a1] px-8 py-3 text-sm font-bold text-[#202121]">
            Contact us
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1545165375-7c1c55f76a86?auto=format&fit=crop&w=1200&q=80"
          alt="Billboard"
          className="h-80 w-full rounded-[40px] object-cover"
        />
      </div>
    </section>

    <SiteFooter />
  </main>
  );
};

export default Index;

