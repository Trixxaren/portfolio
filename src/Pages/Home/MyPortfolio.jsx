import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGrid } from "react-icons/fi";
import { projects, statusLabels, projectStatus } from "../../data/projects";
import ProjectCover from "./ProjectCover";

export default function MyPortfolio({ language }) {
  const [filter, setFilter] = useState("all");
  const sv = language === "sv";
  const visible = projects.filter(
    (project) => filter === "all" || project.status === filter,
  );
  return (
    <section className="work-section container" id="MyPortfolio">
      <div className="section-title-row">
        <h2>
          <FiGrid />
          {sv ? "Projekt & experiment" : "Projects & experiments"}
          <span>{projects.length}</span>
        </h2>
        <span className="section-note">
          {sv
            ? "Egna idéer, omsatta i projekt."
            : "Personal ideas, turned into projects."}
        </span>
      </div>
      <div
        className="project-filters"
        role="group"
        aria-label={sv ? "Filtrera projekt" : "Filter projects"}
      >
        {Object.entries(statusLabels[language]).map(([value, label]) => (
          <button
            key={value}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
            <span>
              {value === "all"
                ? projects.length
                : projects.filter((p) => p.status === value).length}
            </span>
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.slug}>
            <Link
              className="project-card-link"
              to={"/projects/" + project.slug}
              aria-label={(sv ? "Läs om " : "Explore ") + project.title}
            >
              <ProjectCover project={project} language={language} />
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className={"status status-" + project.status}>
                    <i />
                    {projectStatus[language][project.status]}
                  </span>
                  <span className="project-kind">
                    {project.kind === "case"
                      ? "CASE"
                      : project.kind === "experiment"
                        ? sv
                          ? "UTFORSKNING"
                          : "EXPLORATION"
                        : project.kind === "concept"
                          ? sv
                            ? "PRODUKTIDÉ"
                            : "PRODUCT IDEA"
                          : "FRONTEND"}
                  </span>
                </div>
                <h3>
                  {project.title}
                  <FiArrowUpRight />
                </h3>
                <p>{project[language].summary}</p>
                <ul className="tags">
                  {(Array.isArray(project.tags)
                    ? project.tags
                    : project.tags[language]
                  ).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <p className="filter-count" role="status">
        {sv ? "Visar" : "Showing"} {visible.length} {sv ? "av" : "of"}{" "}
        {projects.length} {sv ? "projekt" : "projects"}
      </p>
    </section>
  );
}
