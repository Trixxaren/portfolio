import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiPause, FiPlay } from "react-icons/fi";
import { filmCopy, studioCopy } from "../data/copy";
import { projects, projectStatus } from "../data/projects";
import "../styles/project-film.css";

const scenes = ["sales-os", "hittarecept", "quizmaster"].map(slug =>
  projects.find(project => project.slug === slug),
);
const motionQuery = "(min-width: 900px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)";
const stickyTop = 92;
const clamp = value => Math.max(0, Math.min(1, value));
const smoothstep = value => {
  const bounded = clamp(value);
  return bounded * bounded * (3 - 2 * bounded);
};

function subscribeToMotion(callback) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function motionAvailable() {
  return window.matchMedia(motionQuery).matches;
}

function paintFrames(runway, frames, progress, selectedIndex) {
  const isStatic = selectedIndex !== undefined;
  const opening = isStatic ? 1 : smoothstep(progress / 0.25);
  runway.style.setProperty("--film-progress", isStatic ? (selectedIndex + 1) / scenes.length : progress);
  runway.style.setProperty("--film-scale", 0.95 + opening * 0.05);
  runway.style.setProperty("--film-tilt", `${(1 - opening) * 4}deg`);

  frames.forEach((frame, index) => {
    if (!frame) return;
    const fadeIn = index === 0 ? 1 : smoothstep((progress - index / scenes.length + 0.035) / 0.07);
    const fadeOut = index === scenes.length - 1 ? 1 : 1 - smoothstep((progress - (index + 1) / scenes.length + 0.035) / 0.07);
    frame.style.opacity = isStatic ? Number(index === selectedIndex) : fadeIn * fadeOut;
  });
}

export default function ProjectFilm({ language, paused = false, toggleMotion }) {
  const t = filmCopy[language];
  const s = studioCopy[language];
  const runwayRef = useRef(null);
  const stickyRef = useRef(null);
  const frameRefs = useRef([]);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const canAnimate = useSyncExternalStore(subscribeToMotion, motionAvailable, () => false);
  const scrollEnabled = canAnimate && !paused;
  const activeProject = scenes[activeIndex];

  useEffect(() => {
    const runway = runwayRef.current;
    const sticky = stickyRef.current;
    if (!runway || !sticky) return undefined;

    if (!scrollEnabled) {
      paintFrames(runway, frameRefs.current, 0, activeRef.current);
      return undefined;
    }

    let animationFrame = 0;
    const update = () => {
      animationFrame = 0;
      const bounds = runway.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - sticky.offsetHeight);
      const progress = clamp((stickyTop - bounds.top) / distance);
      const nextIndex = Math.min(scenes.length - 1, Math.floor(progress * scenes.length));
      paintFrames(runway, frameRefs.current, progress);
      if (activeRef.current !== nextIndex) {
        activeRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };
    const scheduleUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(runway);
    resizeObserver.observe(sticky);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, [scrollEnabled]);

  function chooseScene(index) {
    activeRef.current = index;
    setActiveIndex(index);
    const runway = runwayRef.current;
    const sticky = stickyRef.current;
    if (!scrollEnabled) {
      paintFrames(runway, frameRefs.current, 0, index);
      return;
    }

    const bounds = runway.getBoundingClientRect();
    const distance = Math.max(1, bounds.height - sticky.offsetHeight);
    const progress = (index + 0.35) / scenes.length;
    window.scrollTo({
      top: window.scrollY + bounds.top - stickyTop + distance * progress,
      behavior: "instant",
    });
  }

  return <section className="project-film container" aria-labelledby="project-film-label">
    <div className="film-entry">
      <h2 id="project-film-label">{t.label}</h2>
      <div className="film-entry-actions">
        <button type="button" className="film-motion-toggle" onClick={toggleMotion} aria-pressed={paused}>
          {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
          {paused ? s.enableMotion : s.reduceMotion}
        </button>
        <a href="#MyPortfolio">{t.skip}<FiArrowDown aria-hidden="true" /></a>
      </div>
    </div>
    <div className="film-runway" ref={runwayRef} data-scroll={scrollEnabled} data-scene={activeProject.slug}>
      <div className="film-sticky" ref={stickyRef}>
        <div className="film-stage">
          <div className="film-window" id="project-film-screen">
            {scenes.map((project, index) => <img
              key={project.slug}
              ref={element => { frameRefs.current[index] = element; }}
              className="film-frame"
              src={project.screenshots[0].src}
              alt={index === activeIndex ? project.screenshots[0][language] : ""}
              aria-hidden={index !== activeIndex}
              width="1600"
              height="1000"
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
            />)}
          </div>
        </div>
        <div className="film-caption">
          <div className="film-caption-writing">
            <div className="film-caption-title">
              <h3>{t.sceneLabels[activeIndex]}</h3>
              <span className="film-status">{projectStatus[language][activeProject.status]}</span>
              {activeProject.slug === "sales-os" && <span className="film-demo">{t.demoData}</span>}
            </div>
            <p>{t.sceneDescriptions[activeIndex]}</p>
          </div>
          <Link to={`/projects/${activeProject.slug}`} className="film-project-link" aria-label={`${t.viewProject}: ${activeProject.title}`}>
            {t.viewProject}<FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="film-controls">
          <div className="film-chapters" role="group" aria-label={t.chooseScene}>
            {scenes.map((project, index) => <button
              key={project.slug}
              className="film-chapter"
              type="button"
              aria-pressed={index === activeIndex}
              aria-controls="project-film-screen"
              onClick={() => chooseScene(index)}
              style={{ "--chapter": index }}
            >
              <span className="film-chapter-track" aria-hidden="true" />
              <span>{project.title}</span>
            </button>)}
          </div>
          {scrollEnabled && <p className="film-scroll-hint">{t.scrollHint}<FiArrowDown aria-hidden="true" /></p>}
        </div>
      </div>
    </div>
  </section>;
}
