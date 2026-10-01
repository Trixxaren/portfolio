import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { copy } from "../../data/copy";
export default function Navbar({ language, toggleLanguage }) {
  const t = copy[language],
    [open, setOpen] = useState(false),
    menu = useRef(null),
    trigger = useRef(null);
  useEffect(() => {
    if (open) menu.current?.querySelector("a")?.focus();
  }, [open]);
  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="container header-inner">
        <Link to="/" className="profile-brand" onClick={() => setOpen(false)}>
          robin vikström<span>.</span>
        </Link>
        <nav
          id="main-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          ref={menu}
          aria-label={language === "sv" ? "Huvudnavigation" : "Main navigation"}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              trigger.current?.focus();
            }
          }}
        >
          {t.nav.map((label, i) => (
            <Link
              key={label}
              to={"/" + ["#MyPortfolio", "#AboutMe", "#Contact"][i]}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            className="nav-github"
            href="https://github.com/Trixxaren"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FiArrowUpRight />
          </a>
        </nav>
        <div className="header-controls">
          <button
            className="language-button"
            onClick={toggleLanguage}
            aria-label={
              language === "sv" ? "Switch to English" : "Byt till svenska"
            }
          >
            {language === "sv" ? "EN" : "SV"}
          </button>
          <button
            className="menu-button"
            ref={trigger}
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
