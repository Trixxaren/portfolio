const content = {
  sv: {
    eyebrow: "Frontend • Business • Digitala lösningar",
    title1: "Robin Vikström",
    description:
      "Jag kombinerar teknisk förståelse med erfarenhet inom försäljning, kundrelationer och moderna digitala lösningar. Jag trivs i roller där jag får kombinera affärsfokus, problemlösning och användarupplevelse för att skapa värde.",
    meta1: "Stockholm, Sweden",
    meta2: "React • JavaScript • TypeScript",
    meta3: "Frontendutvecklare | Försäljning & affärsutveckling",
    projectsBtn: "Se mina projekt",
    cvBtn: "Visa CV",
    cvLink:
      "https://drive.google.com/file/d/1nwi5-Tz-900ZCL7Hv_FxP7rFAArTD49x/view?usp=drive_link",
  },

  en: {
    eyebrow: "Frontend • Business • Digital Solutions",
    title1: "Robin Vikström",
    description:
      "I combine technical understanding with experience in sales, customer relationships, and modern digital solutions. I thrive in roles where I can combine business focus, problem-solving, and user experience to create value.",
    meta1: "Stockholm, Sweden",
    meta2: "React • JavaScript • TypeScript",
    meta3: "Frontend Developer | Sales & Business",
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
            <h1 className="hero--section--title">{t.title1}</h1>

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
                className="btn btn-primary"
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