import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MotionEffects from "./components/MotionEffects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MessagePage from "./components/MessagePage";
import ProjectDetail from "./components/ProjectDetail";
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
  const [motionPaused, setMotionPaused] = useState(() => {
    try { return localStorage.getItem("portfolio-motion") === "paused"; }
    catch { return false; }
  });
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
  useEffect(() => {
    document.documentElement.dataset.motion = motionPaused ? "paused" : "active";
    try { localStorage.setItem("portfolio-motion", motionPaused ? "paused" : "active"); }
    catch { /* Storage is optional. */ }
  }, [motionPaused]);
  return (
    <BrowserRouter>
      <PageEffects language={language} />
      <MotionEffects paused={motionPaused} />
      <Navbar
        language={language}
        toggleLanguage={() =>
          setLanguage((current) => (current === "sv" ? "en" : "sv"))
        }
      />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home language={language} motionPaused={motionPaused} toggleMotion={() => setMotionPaused(current => !current)} />} />
          <Route
            path="/projects/solvigo-sales-os"
            element={<Navigate to="/projects/sales-os" replace />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail language={language} />}
          />
          <Route path="/thank-you" element={<MessagePage language={language} />} />
          <Route path="*" element={<MessagePage language={language} notFound />} />
        </Routes>
      </main>
      <Footer language={language} />
    </BrowserRouter>
  );
}
