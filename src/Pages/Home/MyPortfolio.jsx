import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { projects, projectStatus } from "../../data/projects";
import ProjectCover from "./ProjectCover";
export default function MyPortfolio({ language }) {
  const sv = language === "sv";
  return (
    <section className="work-section container" id="MyPortfolio">
      <div className="section-title-row">
        <h2>
          {sv
            ? "Från idé till fungerande projekt"
            : "From idea to working project"}
        </h2>
      </div>
      <p className="section-intro">
        {sv
          ? "Fem egna projekt. Läs om problemet, lösningen och min roll i varje bygge."
          : "Five personal projects. Explore the problem, the solution, and my role in each build."}
      </p>
      <div className="project-grid">
        {projects.map((project) => (
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
                  <FiArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
