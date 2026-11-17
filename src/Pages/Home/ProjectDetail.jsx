import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiGithub } from "react-icons/fi";
import { projects } from "../../data/projects";
import ProjectCover from "./ProjectCover";
import ScreenshotGallery from "./ScreenshotGallery";
import ThankYou from "./ThankYou";

export default function ProjectDetail({ language }) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <ThankYou language={language} notFound />;
  const t = project[language],
    sv = language === "sv",
    concept = project.status === "concept";
  const labels = sv
    ? {
        back: "Alla projekt",
        problem: "Problemet",
        solution: concept ? "Idén / lösningen" : "Min lösning",
        role: "Min roll",
        tech: concept ? "Tekniska områden att utforska" : "Teknik & byggstenar",
        architecture: concept ? "Tänkt arkitektur" : "Arkitektur & flöde",
        decisions: "Viktiga beslut",
        learning: "Vad jag lärde mig",
        screenshots: "Skärmbilder",
        details: "Teknik och arbetssätt",
        demo: "Öppna demo",
      }
    : {
        back: "All projects",
        problem: "The problem",
        solution: concept ? "The idea / solution" : "My solution",
        role: "My role",
        tech: concept
          ? "Technical areas to explore"
          : "Technology & building blocks",
        architecture: concept ? "Proposed architecture" : "Architecture & flow",
        decisions: "Key decisions",
        learning: "What I learned",
        screenshots: "Screenshots",
        details: "Technology and approach",
        demo: "Open demo",
      };
  return (
    <article className="project-detail container">
      <Link to="/#MyPortfolio" className="back-link">
        <FiArrowLeft />
        {labels.back}
      </Link>
      <header className="detail-header">
        <h1>{project.title}</h1>
        <p>{t.summary}</p>
        <div className="detail-links">
          {project.screenshots.length > 0 && (
            <a className="button button-secondary" href="#screenshots">
              {sv ? "Se skärmbilder" : "View screenshots"}
            </a>
          )}
          {project.github && (
            <a
              className="button button-secondary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              className="button button-primary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              {labels.demo}
            </a>
          )}
        </div>
      </header>
      {concept && (
        <div className="concept-notice">
          <span className="concept-symbol">◇</span>
          {sv
            ? "Det här är ett koncept. Beskrivningen visar en tänkt lösning, inte en färdig produkt."
            : "This is a concept. The description outlines a proposed solution, not a finished product."}
        </div>
      )}
      <ProjectCover project={project} language={language} detail />
      <div className="detail-overview">
        <section>
          <p className="eyebrow">{labels.problem}</p>
          <p>{t.problem}</p>
        </section>
        <section>
          <p className="eyebrow">{labels.solution}</p>
          <p>{t.solution}</p>
        </section>
      </div>
      <section className="detail-section role-section">
        <h2>{labels.role}</h2>
        <p>{t.role}</p>
      </section>
      {t.capabilities && (
        <section className="detail-section product-capabilities">
          <h2>
            {sv
              ? "Vad systemet samlar"
              : "What the system brings together"}
          </h2>
          <div className="capability-grid">
            {t.capabilities.map(([title, description]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {project.screenshots.length > 0 && (
        <section className="detail-section" id="screenshots">
          <h2>{labels.screenshots}</h2>
          <ScreenshotGallery
            key={project.slug}
            images={project.screenshots}
            language={language}
            projectTitle={project.title}
          />
        </section>
      )}
      <details className="project-depth">
        <summary>{labels.details}</summary>
        <section className="detail-section">
          <h2>{labels.tech}</h2>
          <ul className="technology-list">
            {t.technology.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {t.architecture.length > 0 && (
          <section className="detail-section">
            <h2>{labels.architecture}</h2>
            <ul className="architecture-flow">
              {t.architecture.map(([title, description]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {t.agents && (
          <section className="detail-section">
            <h2>
              {sv
                ? "Fem agenter. Tydliga ansvarsområden."
                : "Five agents. Clear responsibilities."}
            </h2>
            <p className="agent-intro">
              {sv
                ? "Agenterna förbereder arbetet. Människan godkänner mejlen."
                : "Agents prepare the work. A person approves the emails."}
            </p>
            <div className="agent-roster">
              {t.agents.map(([title, description], i) => (
                <details key={title} open={i === 0}>
                  <summary>
                    {title}
                    <span className="agent-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{description}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        {t.analytics && (
          <section className="detail-section">
            <h2>
              {sv ? "Analys i samma workflow" : "Analytics in the same workflow"}
            </h2>
            <p>{t.analytics}</p>
          </section>
        )}
        {t.decisions.length > 0 && (
          <section className="detail-section">
            <h2>{labels.decisions}</h2>
            <div className="decision-list">
              {t.decisions.map(([title, description]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </details>
      {t.learning.length > 0 && (
        <section className="detail-section">
          <h2>{labels.learning}</h2>
          <ul className="learning-list">
            {t.learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
      <div className="detail-bottom">
        <Link to="/#MyPortfolio" className="back-link">
          <FiArrowLeft />
          {labels.back}
        </Link>
        <Link to="/#Contact" className="text-link">
          {sv ? "Prata om projektet" : "Let’s talk about the project"}
        </Link>
      </div>
    </article>
  );
}
