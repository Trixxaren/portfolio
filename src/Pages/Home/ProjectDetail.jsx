import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, projectStatus } from "../../data/projects";
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
        screenshots: "Screenshots",
        next: concept ? "Nästa steg" : "Status & nästa steg",
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
        next: concept ? "Next steps" : "Status & next steps",
        demo: "Open demo",
      };
  return (
    <article className="project-detail container">
      <Link to="/#MyPortfolio" className="back-link">
        <FiArrowLeft />
        {labels.back}
      </Link>
      <header className="detail-header">
        <div className="detail-eyebrow">
          <span className={"status status-" + project.status}>
            <i />
            {projectStatus[language][project.status]}
          </span>
          <span className="eyebrow">
            {project.kind === "case"
              ? "CASE"
              : concept
                ? sv
                  ? "KONCEPT"
                  : "CONCEPT"
                : sv
                  ? "PROJEKT"
                  : "PROJECT"}
          </span>
        </div>
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
              <FiArrowUpRight />
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
              <FiArrowUpRight />
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
          <p className="eyebrow">01 / {labels.problem}</p>
          <p>{t.problem}</p>
        </section>
        <section>
          <p className="eyebrow">02 / {labels.solution}</p>
          <p>{t.solution}</p>
        </section>
      </div>
      {t.capabilities && (
        <section className="detail-section product-capabilities">
          <h2>
            {sv
              ? "CRM och Business OS i samma flöde"
              : "CRM and Business OS in one workflow"}
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
      <section className="detail-section role-section">
        <h2>{labels.role}</h2>
        <p>{t.role}</p>
      </section>
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
          <ol className="architecture-flow">
            {t.architecture.map(([title, description], i) => (
              <li key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
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
                  <span className="agent-initial" aria-hidden="true">
                    {title[0]}
                  </span>
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
            {t.decisions.map(([title, description], i) => (
              <div key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
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
      {t.next && (
        <section className="detail-section next-section">
          <h2>{labels.next}</h2>
          <p>{t.next}</p>
        </section>
      )}
      <div className="detail-bottom">
        <Link to="/#MyPortfolio" className="back-link">
          <FiArrowLeft />
          {labels.back}
        </Link>
        <Link to="/#Contact" className="text-link">
          {sv ? "Prata om projektet" : "Let’s talk about the project"}
          <FiArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
