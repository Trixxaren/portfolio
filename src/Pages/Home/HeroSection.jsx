import { copy } from "../../data/copy";
export default function HeroSection({ language }) {
  const t = copy[language],
    sv = language === "sv";
  return (
    <section className="hero container" id="heroSection">
      <div className="hero-kicker">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <span className="hero-location">{t.location}</span>
      </div>
      <div className="hero-content">
        <div className="hero-writing">
          <h1>
            {t.heroTitle[0]}{" "}
            <span>{t.heroTitle[1]}</span>{" "}
            {t.heroTitle[2]}
          </h1>
          <p className="hero-intro">{t.intro}</p>
          <p className="hero-intro">{t.introMore}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#MyPortfolio">
              {sv ? "Se mina projekt" : "Explore my projects"}

            </a>
            <a className="text-link" href="#AboutMe">
              {sv ? "Lite mer om mig" : "A little about me"}

            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <img
              src="/profilbild.png"
              alt="Robin Vikström"
              width="800"
              height="800"
              fetchPriority="high"
            />
          </div>
          <div className="portrait-caption">
            <span>
              <strong>Robin Vikström</strong>
              <small>{t.role}</small>
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
