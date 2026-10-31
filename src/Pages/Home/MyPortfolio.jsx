import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { projects, projectStatus } from "../../data/projects";
import { copy } from "../../data/copy";
import ProjectCover from "./ProjectCover";
export default function MyPortfolio({ language }) {
  const sv = language === "sv";
  const t = copy[language];
  const [showAll, setShowAll] = useState(false);
  const grid = useRef(null);
  const toggle = useRef(null);
  const animation = useRef(null);
  const animating = useRef(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  useEffect(() => () => cancelAnimationFrame(animation.current), []);

  function toggleProjects() {
    if (animating.current) return;
    const expanding = !showAll;
    const element = grid.current;
    const startHeight = element.getBoundingClientRect().height;
    const startScroll = window.scrollY;
    const buttonTop = toggle.current.getBoundingClientRect().top;
    animating.current = true;

    if (expanding) flushSync(() => setShowAll(true));
    window.scrollTo({ top: startScroll, behavior: "instant" });
    const bounds = element.getBoundingClientRect();
    const layout = getComputedStyle(element);
    const cards = [...element.children];
    // Layout offsets also support featured cards that span multiple columns.
    const collapsedHeight = Math.max(...cards.slice(0, 6).map(card => card.offsetTop + card.offsetHeight));
    const endHeight = expanding
      ? bounds.height
      : collapsedHeight;
    const headerHeight = document.querySelector(".site-header").getBoundingClientRect().height;
    // Reveal the first extra card; on collapse keep the button in the same
    // viewport position while the list and scroll position shrink together.
    const targetScroll = expanding
      ? bounds.top + cards[6].offsetTop + startScroll - headerHeight - 24
      : startScroll + endHeight - startHeight;
    const endScroll = Math.max(0, expanding
      ? targetScroll
      : targetScroll + Math.min(0, buttonTop - headerHeight - 24));
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 480;
    element.style.overflow = "clip";
    // Fixed tracks prevent CSS Grid from squeezing cards during the reveal.
    element.style.gridTemplateRows = layout.gridTemplateRows;
    element.style.height = `${startHeight}px`;
    const started = performance.now();

    function frame(now) {
      const progress = duration ? Math.min(1, (now - started) / duration) : 1;
      const eased = 1 - Math.pow(1 - progress, 3);
      element.style.height = `${startHeight + (endHeight - startHeight) * eased}px`;
      window.scrollTo({ top: startScroll + (endScroll - startScroll) * eased, behavior: "instant" });
      if (progress < 1) {
        animation.current = requestAnimationFrame(frame);
      } else {
        if (!expanding) flushSync(() => setShowAll(false));
        element.style.height = "";
        element.style.overflow = "";
        element.style.gridTemplateRows = "";
        animating.current = false;
      }
    }
    animation.current = requestAnimationFrame(frame);
  }
  return (
    <section className="work-section container" id="MyPortfolio">
      <p className="eyebrow section-label">01 / {t.workEyebrow}</p>
      <div className="section-title-row">
        <h2>
          {sv
            ? "Från idé till fungerande projekt"
            : "From idea to working project"}
        </h2>
      </div>
      <p className="section-intro">
        {sv
          ? "Egna projekt. Läs om problemet, lösningen och min roll i varje bygge."
          : "Personal projects. Explore the problem, the solution, and my role in each build."}
      </p>
      <div className="project-grid" id="portfolio-projects" ref={grid}>
        {visibleProjects.map((project, index) => (
          <article className={"project-card" + (project.slug === "sales-os" ? " project-featured" : "")} key={project.slug}>
            <Link
              className="project-card-link"
              to={"/projects/" + project.slug}
              aria-label={(sv ? "Läs om " : "Explore ") + project.title}
            >
              <ProjectCover project={project} language={language} />
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className="project-index">{project.slug === "sales-os" ? t.featuredCase : String(index + 1).padStart(2, "0")}</span>
                  <span className={"status status-" + project.status}>
                    {projectStatus[language][project.status]}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project[language].summary}</p>
                <ul className="tags">
                  {(Array.isArray(project.tags)
                    ? project.tags
                    : project.tags[language]
                  ).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="project-read">
                  {sv ? "Läs om projektet" : "Explore the project"}

                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      {projects.length > 6 && (
        <div className="project-more">
          <button
            type="button"
            className="button button-secondary"
            aria-controls="portfolio-projects"
            aria-expanded={showAll}
            ref={toggle}
            onClick={toggleProjects}
          >
            {showAll
              ? sv ? "Visa färre projekt" : "Show fewer projects"
              : sv ? "Se fler projekt" : "Show more projects"}
            {showAll ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
          </button>
        </div>
      )}
    </section>
  );
}
