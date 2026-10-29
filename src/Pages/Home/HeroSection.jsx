import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { copy } from "../../data/copy";
export default function HeroSection({ language }) {
  const t = copy[language],
    sv = language === "sv";
  return (
    <section className="hero container" id="heroSection">
      <div className="hero-content">
        <div className="hero-writing">
          <p className="eyebrow">
            <span className="live-dot" />{" "}
            {t.heroEyebrow}
          </p>
          <h1>
            {t.heroTitle[0]}
            <br />
            <span>{t.heroTitle[1]}</span>
            <br />
            {t.heroTitle[2]}
          </h1>
          <p className="hero-intro">{t.intro}</p>
          <p className="hero-intro">{t.introMore}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#MyPortfolio">
              {sv ? "Se mina projekt" : "Explore my projects"}
              <FiArrowDownRight />
            </a>
            <a className="text-link" href="#AboutMe">
              {sv ? "Lite mer om mig" : "A little about me"}
              <FiArrowUpRight />
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
