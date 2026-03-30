import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const content = {
  sv: {
    title: "Kontaktuppgifter",
    built: "Portfolio byggd av",
    with: "med",
  },
  en: {
    title: "Contact details",
    built: "Portfolio built by",
    with: "with",
  },
};

const Footer = ({ language }) => {
  const t = content[language];

  return (
    <footer className="footer--container">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__info">
            <p className="footer__title">{t.title}</p>
            <a
              href="mailto:robin.m.e.vikstrom@gmail.com"
              className="footer__mail"
            >
              robin.m.e.vikstrom@gmail.com
            </a>
          </div>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/robin-vikstr%C3%B6m-9959b6169/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={26} />
            </a>

            <a
              href="https://github.com/Trixxaren"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={26} />
            </a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer__bottom">
          <p className="footer--content">
            {t.built} <strong>Robin Vikström</strong> {t.with}{" "}
            <strong>React</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
