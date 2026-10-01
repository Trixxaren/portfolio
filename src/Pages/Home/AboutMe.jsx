import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import { copy } from "../../data/copy";
export default function AboutMe({ language }) {
  const t = copy[language],
    sv = language === "sv";
  return (
    <section className="about-section container" id="AboutMe">
      <div className="section-title-row">
        <h2>{sv ? "Lite mer om mig" : "A little more about me"}</h2>
        <span className="eyebrow">02 / ROBIN</span>
      </div>
      <div className="about-grid">
        <div className="about-prose">
          <h3>{t.aboutTitle}</h3>
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <a
            className="text-link"
            href={t.cvLink}
            target="_blank"
            rel="noreferrer"
          >
            {t.cv}
            <FiArrowUpRight />
          </a>
        </div>
        <aside className="learning-note">
          <div className="learning-note-header">
            <FiBookOpen />
            <span>{t.learningNow}</span>
          </div>
          <ul>
            {t.learningAreas.map((item, i) => (
              <li key={item}>
                <span>0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="note-foot">
            <span className="live-dot" />
            {sv ? "Lär genom att bygga" : "Learning by building"}
          </div>
        </aside>
      </div>
      <div className="approach-grid">
        {t.approach.map(([title, text], i) => (
          <article key={title}>
            <span className="approach-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
