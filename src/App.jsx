import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Homescreen";
import MotionEffects from "./Pages/Home/MotionEffects";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Pages/Home/Footer";
import ThankYou from "./Pages/Home/ThankYou";
import ProjectDetail from "./Pages/Home/ProjectDetail";
import { projects } from "./data/projects";

function PageEffects({ language }) {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);
  useEffect(() => {
    document.documentElement.lang = language;
    const project = projects.find(
      (item) => pathname === "/projects/" + item.slug,
    );
    const isHome = pathname === "/";
    const title = project
      ? project.title + " — Robin Vikström"
      : isHome
        ? language === "sv"
          ? "Robin Vikström — Affär, produkt & AI"
          : "Robin Vikström — Business, product & AI"
        : pathname === "/thank-you"
          ? language === "sv"
            ? "Tack — Robin Vikström"
            : "Thank you — Robin Vikström"
          : "404 — Robin Vikström";
    const description = project
      ? project[language].summary
      : language === "sv"
        ? "Personlig portfolio av Robin Vikström. Sales Manager som utforskar affär, produkt, AI och teknik genom egna projekt."
        : "Robin Vikström’s personal portfolio. A Sales Manager exploring business, product, AI, and technology through personal projects.";
    document.title = title;
    for (const [selector, content] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      [
        'meta[property="og:url"]',
        "https://robinvikstrom.netlify.app" + pathname,
      ],
    ])
      document.querySelector(selector)?.setAttribute("content", content);
  }, [language, pathname]);
  useEffect(() => {
    const initial = firstRender.current;
    firstRender.current = false;
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          target.scrollIntoView();
        }
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        if (!initial)
          document.getElementById("main")?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("portfolio-language") === "en" ? "en" : "sv";
    } catch {
      return "sv";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Storage is optional. */
    }
  }, [language]);
  return (
    <BrowserRouter>
      <PageEffects language={language} />
      <MotionEffects />
      <Navbar
        language={language}
        toggleLanguage={() =>
          setLanguage((current) => (current === "sv" ? "en" : "sv"))
        }
      />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route
            path="/projects/solvigo-sales-os"
            element={<Navigate to="/projects/sales-os" replace />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail language={language} />}
          />
          <Route path="/thank-you" element={<ThankYou language={language} />} />
          <Route path="*" element={<ThankYou language={language} notFound />} />
        </Routes>
      </main>
      <Footer language={language} />
    </BrowserRouter>
  );
}
