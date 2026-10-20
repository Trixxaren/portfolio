import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { copy, studioCopy } from "../data/copy";
import { projects, projectStatus } from "../data/projects";
import ProjectFilm from "./ProjectFilm";
import Contact from "./Contact";

function ProjectCard({ project, language, featured = false }) {
  const t = studioCopy[language];
  const image = project.screenshots[0];

  return (
    <article className={`project-card${featured ? " featured-project" : ""}`} data-reveal>
      <Link
        to={`/projects/${project.slug}`}
        className="project-card-link"
        aria-label={`${t.readAbout} ${project.title}`}
      >
        <div className="project-visual">
          <div className="project-window">
            <img src={image.src} alt={image[language]} width="1440" height="900" loading="lazy" />
          </div>
          {featured && <span className="image-disclaimer">{t.demoData}</span>}
        </div>
        <div className="project-info">
          <span className={`status status-${project.status}`}>
            {projectStatus[language][project.status]}
          </span>
          <h3>{project.title}</h3>
          <p>{project[language].summary}</p>
          <span className="project-read">{t.exploreCase}<FiArrowUpRight aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  );
}

export default function Home({ language, motionPaused, toggleMotion }) {
  const t = copy[language];
  const s = studioCopy[language];
  const featured = projects.find(project => project.slug === "sales-os");
  const others = projects.filter(project => project.slug !== "sales-os");

  return (
    <>
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-person">
          <img src="/profilbild.png" width="44" height="44" alt="" fetchPriority="high" />
          <span>Sales Manager · {t.location}</span>
        </div>
        <h1 id="hero-heading">Robin Vikström<span>.</span></h1>
        <div className="hero-introduction"><p>{t.intro}</p></div>
        <div className="hero-actions">
          <Link to="/#MyPortfolio" className="button button-primary">
            {s.exploreProjects}<FiArrowDown aria-hidden="true" />
          </Link>
          <Link to="/#AboutMe" className="text-link">{s.aboutLink}</Link>
        </div>
      </section>

      <ProjectFilm language={language} paused={motionPaused} toggleMotion={toggleMotion} />

      <section className="work-section container section-space" id="MyPortfolio" aria-labelledby="work-heading">
        <div className="section-heading" data-reveal>
          <h2 id="work-heading">{s.workTitle}</h2>
          <p>{s.workIntro}</p>
        </div>
        <ProjectCard project={featured} language={language} featured />
        <div className="project-grid">
          {others.map(project => <ProjectCard key={project.slug} project={project} language={language} />)}
        </div>
      </section>

      <section className="about-section section-space" id="AboutMe" aria-labelledby="about-heading">
        <div className="container about-grid">
          <figure className="about-photo" data-reveal>
            <div className="portrait-image">
              <img src="/profilbild.png" alt="Robin Vikström" width="800" height="800" loading="lazy" />
            </div>
            <figcaption>Robin Vikström<span>Sales Manager · Solvigo</span></figcaption>
          </figure>
          <div className="about-prose" data-reveal>
            <p className="eyebrow">{s.aboutEyebrow}</p>
            <h2 id="about-heading">{t.aboutTitle}</h2>
            <p>{t.aboutP1}</p>
            <div className="learning-note">
              <h3>{t.learningNow}</h3>
              <ul>{t.learningAreas.map(area => <li key={area}>{area}</li>)}</ul>
            </div>
            <details className="about-more">
              <summary>{s.moreAboutMe}<FiChevronDown aria-hidden="true" /></summary>
              <div className="about-more-content">
                <p>{t.aboutP2}</p>
                <p>{t.belief}</p>
                {t.approach.map(([title, description]) => (
                  <div key={title}><h3>{title}</h3><p>{description}</p></div>
                ))}
              </div>
            </details>
            <a className="text-link cv-link" href={t.cvLink} target="_blank" rel="noreferrer">
              {t.cv}<FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <Contact language={language} />
    </>
  );
}
