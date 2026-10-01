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
            {sv
              ? "AFFÄR, TEKNIK & ALLT DÄREMELLAN"
              : "BUSINESS, TECHNOLOGY & EVERYTHING BETWEEN"}
          </p>
          <h1>
            {sv ? "Affärsdriven," : "Business-minded,"}
            <br />
            <span>{sv ? "tekniskt nyfiken" : "technically curious"}</span>
            <br />
            {sv
              ? "och bygger gärna egna projekt."
              : "and always building personal projects."}
          </h1>
          <p className="hero-intro">{t.intro}</p>
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
              <small>Sales Manager · Solvigo</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
