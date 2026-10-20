import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MotionEffects({ paused }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set();
    let observer;
    function stop() {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }
    function start() {
      stop();
      if (paused || preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          const animation = target.animate?.([
            { opacity: 0, transform: "translateY(12px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 400, easing: "cubic-bezier(.16,1,.3,1)" });
          if (!animation) return;
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation)).catch(() => {});
        });
      }, { threshold: 0.08 });
      document.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    }
    start();
    preference.addEventListener("change", start);
    return () => { stop(); preference.removeEventListener("change", start); };
  }, [pathname, paused]);
  return null;
}
