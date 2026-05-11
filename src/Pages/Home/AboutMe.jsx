const content = {
  sv: {
    kicker: "Om mig",
    title: "Frontend med affärsförståelse",
    p1: "Jag är frontendutvecklare med erfarenhet inom försäljning, kundrelationer och moderna digitala lösningar. Just nu studerar jag Frontendutveckling på JENSEN Yrkeshögskola.",
    p2: "Tidigare arbetade jag som Key Account Manager på Viaplay Group Radio, där jag ansvarade för strategiska samarbeten och affärsdrivna projekt tillsammans med några av Sveriges största företag.",
    p3: "Min bakgrund har gett mig starka färdigheter inom kommunikation, behovsanalys och att driva arbete från idé till färdig lösning. Idag kombinerar jag den erfarenheten med teknisk förståelse för att bygga moderna och användarvänliga webbupplevelser.",
button: "Ladda ner CV",
    cvLink:
      "https://drive.google.com/file/d/1nwi5-Tz-900ZCL7Hv_FxP7rFAArTD49x/view?usp=drive_link",
  },
  en: {
    kicker: "About me",
    title: "Frontend with business understanding",
    p1: "I’m a frontend developer with experience in sales, customer relations, and modern digital solutions. I’m currently studying Frontend Development at JENSEN Higher Vocational Education.",
    p2: "Previously, I worked as a Key Account Manager at Viaplay Group Radio, where I was responsible for strategic partnerships and business-driven projects together with some of Sweden’s largest companies.",
    p3: "My background has given me strong skills in communication, needs analysis, and driving projects from idea to finished solution. Today, I combine that experience with technical understanding to build modern and user-friendly web experiences.",
button: "Download CV",
    cvLink:
      "https://drive.google.com/file/d/1f67O4kb25M93ZSiFmxbhCaltZu0vHZrV/view?usp=drive_link",
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
              href={t.cvLink}
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
