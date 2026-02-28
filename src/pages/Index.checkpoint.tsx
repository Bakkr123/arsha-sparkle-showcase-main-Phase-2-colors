// Checkpoint: 2026-02-28
// This is a snapshot of the main hero section and supporting content for reference.

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

// ...existing code for types, data, and assets...

const IndexCheckpoint = () => {
  // ...existing code for hooks and logic...
  return (
    <main className="bg-[#ffffff] text-[#202121]">
      <section
        className="relative left-1/2 isolate min-h-[760px] w-screen -translate-x-1/2 overflow-hidden text-white md:min-h-[860px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* ...existing video and overlay code... */}
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
              {/* ...existing buttons and mascot image... */}
            </div>
            {/* ...existing right column code... */}
          </div>
        </div>
        {/* ...existing SVG and section code... */}
      </section>
      {/* ...existing sections for Trust, Why Us, Programs, Safety, Process, Instructors, The Plan, Testimonials, Service Area, Call to Action, Footer... */}
    </main>
  );
};

export default IndexCheckpoint;
