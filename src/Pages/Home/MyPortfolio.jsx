import { useEffect, useState } from "react";
import portfolioData from "../../data/index.json";

const content = {
  sv: {
    kicker: "Projekt",
    title: "Mina projekt",
    description:
      "Ett urval av projekt där jag arbetat med frontend, API:er, responsiv design och moderna utvecklingsverktyg.",
    link: "Visa projekt",
  },
  en: {
    kicker: "Projects",
    title: "My projects",
    description:
      "A selection of projects where I have worked with frontend, APIs, responsive design, and modern development tools.",
    link: "View project",
  },
};

const MyPortfolio = ({ language }) => {
  const [projects, setProjects] = useState([]);
  const t = content[language];

  useEffect(() => {
    setProjects(portfolioData.portfolio);
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="container portfolio__inner">
        <div className="section-heading">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p className="section-description">{t.description}</p>
        </div>

        <div className="portfolio--section--container">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="portfolio--section--card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="portfolio--section--img">
                <img src={`/${project.src}`} alt={project.title} />
              </div>

              <div className="portfolio--section--card--content">
                <div className="portfolio-card__top">
                  <h3 className="portfolio--section--title">
                    {language === "en" && project.titleEn
                      ? project.titleEn
                      : project.title}
                  </h3>
                  <span className="portfolio--link">{t.link}</span>
                </div>

                <div className="portfolio__stack">
                  {project.stack.map((item) => (
                    <span key={item} className="portfolio__tag">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-md">
                  {language === "en" && project.descriptionEn
                    ? project.descriptionEn
                    : project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
