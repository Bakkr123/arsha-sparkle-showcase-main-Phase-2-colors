import { ReactNode, useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type PageNameSectionProps = {
  title: ReactNode;
  eyebrow: string;
  description: string;
  backgroundImage: string;
  showOverlay?: boolean;
  overlayGradient?: string;
  waveColor?: string;
  minHeightClassName?: string;
  contentLayout?: "center" | "left";
  contentClassName?: string;
};

const PageNameSection = ({
  title,
  eyebrow,
  description,
  backgroundImage,
  showOverlay = true,
  overlayGradient = "linear-gradient(180deg,rgba(0,0,0,0.50) 0%,rgba(0,0,0,0.50) 100%)",
  waveColor = "#1d52a1",
  minHeightClassName = "min-h-[520px] md:min-h-[600px]",
  contentLayout = "center",
  contentClassName = "",
}: PageNameSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
  <section
    className={`relative left-1/2 isolate w-screen -translate-x-1/2 overflow-hidden text-white ${minHeightClassName}`}
  >
    <div className="absolute inset-0 z-0">
      {/* Shimmer placeholder while image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-[length:200%_100%]" style={{ animation: "shimmer 1.5s ease-in-out infinite" }} />
      )}
      <img
        src={backgroundImage}
        alt=""
        className={`h-full w-full object-cover transition-opacity duration-700 ease-out ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
    {showOverlay ? <div className="absolute inset-0 z-10 bg-black/70" /> : null}

    <div
      className="relative z-30 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <SiteHeader tone="light" />

      <div
        className={`flex min-h-[340px] items-center pb-24 pt-8 md:min-h-[420px] md:pb-32 ${
          contentLayout === "left" ? "justify-start text-left" : "justify-center text-center"
        } ${contentClassName}`}
      >
        <div className={contentLayout === "left" ? "max-w-3xl" : "max-w-4xl"}>
          <p className="text-[clamp(1rem,1.15vw,1.3rem)] font-semibold text-slate-100">{eyebrow}</p>
          <h1 className="mt-4 text-[clamp(2.2rem,4.2vw,3.8rem)] font-black leading-[1.05] text-[#1d52a1]">{title}</h1>
          <p
            className={`mt-5 max-w-4xl text-[clamp(1.15rem,1.8vw,2rem)] leading-[1.35] text-slate-100 ${
              contentLayout === "left" ? "" : "mx-auto"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[80px] md:h-[100px] lg:h-[120px]">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden className="h-full w-full">
        <path
          fill={waveColor}
          d="M0,40 A2400,2400 0 0,0 1440,40 L1440,200 L0,200 Z"
        />
        <path
          fill="#ffffff"
          d="M0,80 A2400,2400 0 0,0 1440,80 L1440,200 L0,200 Z"
        />
      </svg>
    </div>
  </section>
  );
};

export default PageNameSection;
