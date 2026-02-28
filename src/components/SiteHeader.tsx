import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type SiteHeaderProps = {
  tone?: "light" | "dark";
  className?: string;
};

const logoUrl = "/logos/Driving School Logo Vertical - white.png";

const socials = [
  {
    href: "https://www.facebook.com/bananascreative",
    icon: "https://cdn.prod.website-files.com/61eb193158d123ab7619e628/61ef0713ab9b8c98eae28850_facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/bananascreative/",
    icon: "https://cdn.prod.website-files.com/61eb193158d123ab7619e628/6699912ec3374c03096a6766_instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@bananascreative",
    icon: "https://cdn.prod.website-files.com/61eb193158d123ab7619e628/6699912efb80cfaa4fb5e8a0_youtube.svg",
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@bananascreative",
    icon: "https://cdn.prod.website-files.com/61eb193158d123ab7619e628/6699912e2feb344590a2fab6_tiktok.svg",
    label: "TikTok",
  },
];

const navItems = [
  { label: "Packages", href: "/packages" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Newcomers Guide", href: "/newcomers-guide" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* Persist pill position across re-mounts so it can animate from previous location */
let _savedPill = { left: 0, width: 0, opacity: 0 };

const SiteHeader = ({ tone = "light", className = "" }: SiteHeaderProps) => {
  const location = useLocation();
  const textClass = tone === "light" ? "text-white" : "text-slate-900";
  const currentPath = location.pathname;

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState(_savedPill);
  const hasInitRef = useRef(false);

  const activeIndex = navItems.findIndex(
    (item) => !item.href.includes("#") && currentPath === item.href,
  );

  useEffect(() => {
    const el = linkRefs.current[activeIndex];
    const nav = navRef.current;
    if (!el || !nav) {
      setPill((prev) => ({ ...prev, opacity: 0 }));
      _savedPill = { ..._savedPill, opacity: 0 };
      return;
    }

    const measure = () => {
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const newPill = {
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      };

      if (!hasInitRef.current) {
        /* First render: skip transition, start at previous saved position then animate */
        hasInitRef.current = true;
        /* Force a layout read so the browser paints at the saved position first */
        requestAnimationFrame(() => {
          setPill(newPill);
          _savedPill = newPill;
        });
      } else {
        setPill(newPill);
        _savedPill = newPill;
      }
    };

    /* Small delay to let refs settle after mount */
    requestAnimationFrame(measure);
  }, [activeIndex, currentPath]);

  return (
    <header className={`flex items-center justify-between py-4 md:py-5 ${className}`}>
      <a href="/" className="w-[120px] shrink-0 md:w-[140px] lg:w-[160px]">
        <img src={logoUrl} alt="Shanaya's Driving School" className="w-full" />
      </a>

      <nav
        ref={navRef}
        className={`relative hidden items-center gap-0.5 text-sm font-medium lg:flex xl:gap-1.5 xl:text-base ${textClass}`}
      >
        {/* Animated pill background */}
        <span
          className="pointer-events-none absolute rounded-full bg-white transition-all duration-300 ease-in-out"
          style={{
            left: pill.left,
            width: pill.width,
            height: "36px",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: pill.opacity,
          }}
        />

        {navItems.map((item, index) => {
          const isActive = !item.href.includes("#") && currentPath === item.href;
          const linkClass = isActive
            ? "relative z-10 rounded-full px-4 py-2 text-[#E6242A] transition-colors duration-300"
            : `relative z-10 rounded-full px-4 py-2 transition-colors duration-300 ${textClass}`;

          return item.href.includes("#") ? (
            <a
              key={item.label}
              href={item.href}
              ref={(el) => { linkRefs.current[index] = el; }}
              className={linkClass}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              ref={(el) => { linkRefs.current[index] = el; }}
              className={linkClass}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <Link
          to="/apply"
          className="rounded-full bg-[#E6242A] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#C41E23]"
        >
          Apply Now
        </Link>
        <div className="hidden items-center gap-2 lg:flex ml-8">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1d52a1] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1d52a1] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://wa.me/12505423673" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1d52a1] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" aria-label="WhatsApp">
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
