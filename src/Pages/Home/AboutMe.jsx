const content = {
  sv: {
    kicker: "Om mig",
    title: "Frontend med affärsförståelse",
    p1: "Jag är frontendutvecklare med bakgrund inom försäljning och affärsdrivna roller. Just nu studerar jag Frontend Development på Jensen Yrkeshögskola.",
    p2: "Tidigare arbetade jag som Key Account Manager på Viaplay Group Radio, där jag ansvarade för strategiska samarbeten och projekt tillsammans med några av Sveriges största företag.",
    p3: "Det har gett mig starka färdigheter inom kundansvar, behovsanalys och att driva arbete från idé till resultat. Idag tar jag med mig den erfarenheten in i utveckling och bygger lösningar som både fungerar tekniskt och skapar värde för användaren.",
    button: "Ladda ner CV",
  },
  en: {
    kicker: "About me",
    title: "Frontend with business understanding",
    p1: "I am a frontend developer with a background in sales and business-driven roles. Right now I study Frontend Development at Jensen Higher Vocational Education.",
    p2: "Previously, I worked as a Key Account Manager at Viaplay Group Radio, where I was responsible for strategic partnerships and projects together with some of Sweden’s largest companies.",
    p3: "That gave me strong skills in client responsibility, needs analysis, and driving work from idea to result. Today, I bring that experience into development and build solutions that work technically while also creating value for the user.",
    button: "Download CV",
  },
};

const AboutMe = ({ language }) => {
  const t = content[language];

  return (
    <section id="AboutMe" className="about--section">
      <div className="container about__inner">
        <div className="about--section--img">
          <img src="/utomhus.png" alt="Robin utomhus" />
        </div>

        <div className="about__content">
          <div className="section-heading section-heading--left">
            <p className="section-kicker">{t.kicker}</p>
            <h2>{t.title}</h2>
          </div>

          <div className="about__text">
            <p className="text-md">{t.p1}</p>
            <p className="text-md">{t.p2}</p>
            <p className="text-md">{t.p3}</p>
          </div>

          <div className="about__actions">
            <a
              href="https://drive.google.com/file/d/138ROqXIIjvADR7flPA-2qQlwkKT0qlKH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-black"
            >
              {t.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
