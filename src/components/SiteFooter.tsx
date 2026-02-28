import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";

const SiteFooter = () => (
  <footer id="contact" className="relative mt-8 overflow-hidden bg-[#1d52a1] pb-10 pt-52">
    {/* Organic wave shape at top — matches reference curve */}
    <div className="absolute inset-x-0 -top-px z-10">
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden className="block w-full" style={{ height: "180px" }}>
        <path
          fill="#ffffff"
          d="M0,80 C120,130 280,190 500,190 C720,190 860,100 1060,80 C1200,66 1340,90 1440,110 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
    <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4 text-white">
      <div>
        <a href="/" className="inline-block w-[120px] md:w-[140px]">
          <img src="/logos/Driving School Logo Vertical - white.png" alt="Shanaya's Driving School" className="w-full" />
        </a>
        <p className="mt-6 text-sm font-semibold text-white/90">
          Professional driving education in Langford and the Greater Victoria region.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#202121] text-white">
            <Facebook size={14} />
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#202121] text-white">
            <Instagram size={14} />
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#202121] text-white">
            <Youtube size={14} />
          </span>
        </div>
      </div>

      <div>
        <p className="mb-4 text-sm font-bold uppercase text-white/70">Menu</p>
        <ul className="space-y-2 font-semibold text-white">
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/#packages">Packages</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/newcomers-guide">Newcomers Guide</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/apply">Book Lessons</a>
          </li>
        </ul>
      </div>

      <div>
        <p className="mb-4 text-sm font-bold uppercase text-white/70">Office</p>
        <p className="flex items-start gap-2 font-semibold text-white">
          <MapPin size={16} className="mt-1" /> 10531 170 St NW, Edmonton, AB
        </p>
      </div>

      <div>
        <p className="mb-4 text-sm font-bold uppercase text-white/70">Call us now!</p>
        <p className="flex items-center gap-2 text-lg font-black text-[#E6242A]">
          <Phone size={16} /> 780-885-6885
        </p>
      </div>
    </div>
    <p className="relative mt-12 text-center text-xs font-semibold text-white/60">
      Copyright © 2026 Shanaya's Driving School. All rights reserved.
    </p>
  </footer>
);

export default SiteFooter;

