import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Smooth scroll to top on route change (link clicks)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // On page load/refresh: let browser restore scroll position, then animate to top
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    const attemptScroll = () => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Try after DOM is ready and again after full load for heavier pages
    const timer1 = setTimeout(attemptScroll, 150);
    const timer2 = setTimeout(attemptScroll, 500);

    window.addEventListener("load", () => {
      setTimeout(attemptScroll, 100);
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return null;
};

export default ScrollToTop;
