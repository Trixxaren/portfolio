const content = {
  sv: {
    eyebrow: "Frontend Developer",
    title1: "Robin Vikström",
    description:
      "Jag studerar frontendutveckling på Jensen Yrkeshögskola. Med bakgrund inom försäljning, senast som Key Account Manager. Jag är en person som drivs av teknik och affärer.",
    meta1: "Stockholm, Sweden",
    meta2: "React • JavaScript • TypeScript",
    meta3: "Frontend • API-integration • UI/UX",
    projectsBtn: "Se mina projekt",
    cvBtn: "Visa CV",
  },
  en: {
    eyebrow: "Frontend Developer Student",
    title1: "Robin Vikström",
    description:
      "I study Frontend Development at Jensen Higher Vocational Education. With a background in sales, most recently as a Key Account Manager, I am driven by both technology and business.",
    meta1: "Stockholm, Sweden",
    meta2: "React • JavaScript • TypeScript",
    meta3: "Frontend • API integration • UI/UX",
    projectsBtn: "View my projects",
    cvBtn: "View CV",
  },
};

const HeroSection = ({ language }) => {
  const t = content[language];

  return (
    <section id="heroSection" className="hero--section">
      <div className="container hero__inner">
        <div className="hero--section--content-box">
          <p className="hero__eyebrow">{t.eyebrow}</p>

          <div className="hero--section--content">
            <h1 className="hero--section--title">
              {t.title1}{" "}
              <span className="hero--section--title--color">{t.title2}</span>
            </h1>

            <p className="hero--section--description">{t.description}</p>

            <div className="hero__meta">
              <span>{t.meta1}</span>
              <span>{t.meta2}</span>
              <span>{t.meta3}</span>
            </div>

            <div className="hero__actions">
              <a href="#MyPortfolio" className="btn btn-primary">
                {t.projectsBtn}
              </a>

              <a
                href="https://drive.google.com/file/d/138ROqXIIjvADR7flPA-2qQlwkKT0qlKH/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {t.cvBtn}
              </a>
            </div>
          </div>
        </div>

        <div className="hero--section--image">
          <div className="hero__image-card">
            <img src="/profilbild.png" alt="Profilbild på Robin Vikström" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
