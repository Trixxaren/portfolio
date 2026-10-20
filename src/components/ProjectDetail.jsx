import { Link, useParams } from "react-router-dom";
import { FiArrowDown, FiArrowLeft, FiArrowUpRight, FiGithub, FiPlus } from "react-icons/fi";
import { projects, projectStatus } from "../data/projects";
import { copy, detailCopy } from "../data/copy";
import ScreenshotGallery from "./ScreenshotGallery";
import "../styles/project-detail.css";

function ContentList({ items, className = "" }) {
  return (
    <ul className={`case-numbered-list ${className}`}>
      {items.map(([title, description]) => (
        <li key={title}>
          <div><h3>{title}</h3><p>{description}</p></div>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail({ language }) {
  const { slug } = useParams();
  const orderedProjects = [projects.find((item) => item.slug === "sales-os"), ...projects.filter((item) => item.slug !== "sales-os")];
  const projectIndex = orderedProjects.findIndex((project) => project.slug === slug);
  const project = orderedProjects[projectIndex];
  const labels = detailCopy[language];

  if (!project) {
    return (
      <div className="case-missing container">
        <p className="eyebrow">404</p>
        <h1>{copy[language].notFound}</h1>
        <p>{copy[language].notFoundText}</p>
        <Link className="button button-primary" to="/#MyPortfolio">{labels.back}<FiArrowUpRight aria-hidden="true" /></Link>
      </div>
    );
  }

  const t = project[language];
  const concept = project.status === "concept";
  const nextProject = orderedProjects[(projectIndex + 1) % orderedProjects.length];
  const projectType = concept ? labels.concept : project.kind === "case" ? "Case" : labels.project;
  const sections = [
    { id: "overview", label: labels.overview, show: true },
    { id: "role", label: labels.role, show: Boolean(t.role) },
    { id: "capabilities", label: labels.capabilitiesShort, show: t.capabilities?.length },
    { id: "technology", label: concept ? labels.conceptTech : labels.tech, show: t.technology?.length },
    { id: "architecture", label: concept ? labels.conceptArchitecture : labels.architecture, show: t.architecture?.length },
    { id: "agents", label: labels.agentsShort, show: t.agents?.length },
    { id: "analytics", label: labels.analytics, show: Boolean(t.analytics) },
    { id: "decisions", label: labels.decisions, show: t.decisions?.length },
    { id: "learning", label: labels.learning, show: t.learning?.length },
    { id: "next", label: concept ? labels.conceptNext : labels.next, show: Boolean(t.next) },
  ].filter((section) => section.show);

  return (
    <article className={`case-page case-page-${project.cover}`}>
      <header className="case-header container">
        <div className="case-topline">
          <Link className="case-back" to="/#MyPortfolio"><FiArrowLeft aria-hidden="true" />{labels.back}</Link>
        </div>
        <div className="case-title-row" data-reveal>
          <p className="eyebrow case-type">{projectType}</p>
          <h1>{project.title}</h1>
          <span className={`status status-${project.status}`}>{projectStatus[language][project.status]}</span>
        </div>
        <div className="case-intro-row" data-reveal>
          <p className="case-summary">{t.summary}</p>
          <div className="case-intro-meta">
            <ul className="case-tags" aria-label={concept ? labels.conceptTech : labels.tech}>{(Array.isArray(project.tags) ? project.tags : project.tags[language]).map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="case-actions">
              {project.demo && <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">{labels.demo}<FiArrowUpRight aria-hidden="true" /></a>}
              {project.github && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" />GitHub<FiArrowUpRight aria-hidden="true" /></a>}
              {!project.demo && project.screenshots?.length > 0 && <a className="text-link" href="#screenshots">{labels.viewScreenshots}<FiArrowDown aria-hidden="true" /></a>}
            </div>
          </div>
        </div>
        {concept && <p className="case-concept-notice"><span aria-hidden="true">◇</span>{labels.conceptNotice}</p>}
      </header>

      {project.screenshots?.length > 0 && (
        <section className="case-gallery-section" id="screenshots" aria-label={labels.screenshots} data-reveal>
          <div className="container">
            <div className="case-gallery-label"><h2>{labels.screenshots}</h2></div>
            <ScreenshotGallery key={project.slug} images={project.screenshots} language={language} projectTitle={project.title} />
          </div>
        </section>
      )}

      <div className="case-body container">
        <aside className="case-aside">
          <nav className="case-index" aria-label={labels.onThisPage}>
            <p className="eyebrow">{labels.onThisPage}</p>
            <ol>{sections.map((section) => <li key={section.id}><a href={`#case-${section.id}`}>{section.label}</a></li>)}</ol>
            <Link className="case-contact-link" to="/#Contact">{labels.talk}<FiArrowUpRight aria-hidden="true" /></Link>
          </nav>
        </aside>
        <div className="case-content">
          <section className="case-section case-overview" id="case-overview" data-reveal>
            {t.problem && <div><h2>{labels.problem}</h2><p>{t.problem}</p></div>}
            {t.solution && <div className="case-solution"><h2>{concept ? labels.conceptSolution : labels.solution}</h2><p>{t.solution}</p></div>}
          </section>

          {t.role && <section className="case-section case-role" id="case-role" data-reveal><h2>{labels.role}</h2><p>{t.role}</p></section>}

          {t.capabilities?.length > 0 && (
            <section className="case-section" id="case-capabilities" data-reveal>
              <h2>{labels.capabilities}</h2>
              <div className="case-capabilities">{t.capabilities.map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
            </section>
          )}

          {t.technology?.length > 0 && <section className="case-section" id="case-technology" data-reveal><h2>{concept ? labels.conceptTech : labels.tech}</h2><ul className="case-technology-list">{t.technology.map((item) => <li key={item}>{item}</li>)}</ul></section>}

          {t.architecture?.length > 0 && <section className="case-section" id="case-architecture" data-reveal><h2>{concept ? labels.conceptArchitecture : labels.architecture}</h2><ContentList items={t.architecture} className="case-architecture" /></section>}

          {t.agents?.length > 0 && (
            <section className="case-section" id="case-agents" data-reveal>
              <h2>{labels.agents}</h2><p className="case-section-intro">{labels.agentIntro}</p>
              <div className="case-agent-list">{t.agents.map(([title, description], index) => <details key={title} open={index === 0}><summary><span>{title}</span><FiPlus aria-hidden="true" /></summary><p>{description}</p></details>)}</div>
            </section>
          )}

          {t.analytics && <section className="case-section" id="case-analytics" data-reveal><h2>{labels.analytics}</h2><p>{t.analytics}</p></section>}

          {t.decisions?.length > 0 && <section className="case-section" id="case-decisions" data-reveal><h2>{labels.decisions}</h2><ContentList items={t.decisions} /></section>}

          {t.learning?.length > 0 && <section className="case-section" id="case-learning" data-reveal><h2>{labels.learning}</h2><ul className="case-learning-list">{t.learning.map((item) => <li key={item}><p>{item}</p></li>)}</ul></section>}

          {t.next && <section className="case-section case-next-steps" id="case-next" data-reveal><span className={`status status-${project.status}`}>{projectStatus[language][project.status]}</span><h2>{concept ? labels.conceptNext : labels.next}</h2><p>{t.next}</p></section>}
        </div>
      </div>

      <div className="case-next-project container" data-reveal>
        <p className="eyebrow">{labels.nextProject}</p>
        <Link to={`/projects/${nextProject.slug}`} className="case-next-link"><div><span className="case-next-title">{nextProject.title}</span><span className="case-next-caption">{labels.exploreProject}</span></div><span className="case-next-arrow"><FiArrowUpRight aria-hidden="true" /></span></Link>
        <Link className="case-back" to="/#MyPortfolio"><FiArrowLeft aria-hidden="true" />{labels.back}</Link>
      </div>
    </article>
  );
}
