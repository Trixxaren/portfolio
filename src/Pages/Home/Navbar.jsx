import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const content = {
  sv: {
    home: "Hem",
    skills: "Kunskaper",
    about: "Om mig",
    projects: "Projekt",
    contact: "Kontakta mig",
    brand: "Robin Vikström",
    toggle: "EN",
  },
  en: {
    home: "Home",
    skills: "Skills",
    about: "About",
    projects: "Projects",
    contact: "Contact me",
    brand: "Robin Vikström",
    toggle: "SV",
  },
};

const Navbar = ({ language, toggleLanguage }) => {
  const [navActive, setNavActive] = useState(false);
  const t = content[language];

  const toggleNav = () => setNavActive((prev) => !prev);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="/" className="navbar__brand" aria-label="Startsida">
          <img className="logotype" src="/favicon-32x32.png" alt="RV Logo" />
          <span>{t.brand}</span>
        </a>

        <button
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Öppna meny"
          aria-expanded={navActive}
          aria-controls="navMenu"
          type="button"
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </button>

        <div
          id="navMenu"
          className={`navbar--items ${navActive ? "active" : ""}`}
        >
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-80}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                {t.home}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-80}
                duration={500}
                to="skills"
                className="navbar--content"
              >
                {t.skills}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-80}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                {t.about}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-80}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                {t.projects}
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar__actions">
          <button
            type="button"
            className="btn btn-outline-primary navbar__lang"
            onClick={toggleLanguage}
          >
            {t.toggle}
          </button>

          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy
            smooth
            offset={-80}
            duration={500}
            to="Contact"
            className="btn btn-primary navbar__cta"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
