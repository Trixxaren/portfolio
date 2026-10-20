import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Content stays visible without animation support. Each section enters once.
export default function MotionEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set();
    let observer;
    function stop() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }
    if (!preference.matches && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            observer.unobserve(target);
            if (typeof target.animate !== "function") return;
            const animation = target.animate(
              [
                { opacity: 0, transform: "translateY(22px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
            );
            animations.add(animation);
            animation.finished
              .then(() => animations.delete(animation))
              .catch(() => {});
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(
          ".project-card, .about-grid, .approach-grid, .contact-grid, .detail-overview, .detail-section",
        )
        .forEach((element) => observer.observe(element));
    }
    preference.addEventListener("change", stop);
    return () => {
      stop();
      preference.removeEventListener("change", stop);
    };
  }, [pathname]);
  return null;
}
