const content = {
  sv: {
    eyebrow: "Frontend Developer",
    title1: "Robin Vikström",
    description:
      "Jag är van att driva affärer, bygga långsiktiga kundrelationer och skapa resultat. Med en bakgrund inom försäljning kombinerar jag affärsfokus med teknisk förståelse och trivs i roller där jag får ta ansvar och skapa värde.",
    meta1: "Stockholm, Sweden",
    meta2: "React • JavaScript • TypeScript",
    meta3: "Frontend Developer | Key Account Manager",
    projectsBtn: "Se mina projekt",
    cvBtn: "Visa CV",
    cvLink:
      "https://drive.google.com/file/d/1nwi5-Tz-900ZCL7Hv_FxP7rFAArTD49x/view?usp=drive_link",
  },
  en: {
    eyebrow: "Frontend Developer Student",
    title1: "Robin Vikström",
    description:
      "I am experienced in driving business, building long-term client relationships, and delivering results. With a background in sales, I combine a strong business focus with technical understanding and thrive in roles where I can take ownership and create value.",
    meta1: "Stockholm, Sweden",
    meta2: "React • JavaScript • TypeScript",
    meta3: "Frontend Developer | Key Account Manager",
    projectsBtn: "View my projects",
    cvBtn: "View CV",
    cvLink:
      "https://drive.google.com/file/d/1f67O4kb25M93ZSiFmxbhCaltZu0vHZrV/view?usp=drive_link",
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
                href={t.cvLink}
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
