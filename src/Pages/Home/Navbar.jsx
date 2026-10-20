import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { copy } from "../../data/copy";
export default function Navbar({ language, toggleLanguage }) {
  const { pathname } = useLocation();
  const t = copy[language],
    [open, setOpen] = useState(false),
    menu = useRef(null),
    trigger = useRef(null);
  useEffect(() => {
    if (open) menu.current?.querySelector("a")?.focus();
  }, [open]);

  function goToTop(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    setOpen(false);
    if (pathname !== "/") return;
    event.preventDefault();
    document.getElementById("main")?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }
  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="container header-inner">
        <Link to="/" className="profile-brand" aria-label={language === "sv" ? "Robin Vikström — startsida" : "Robin Vikström — home"} onClick={goToTop}>
          <svg className="brand-monogram" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="42" height="42" rx="13" fill="currentColor" />
            <path d="M12 31V13H20C28 13 28 23 20 23H12M20 23L27 31L34 13" stroke="var(--surface)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="brand-name">Robin<span>Vikström<span className="brand-period">.</span></span></span>
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
            {language === "sv" ? "English" : "Svenska"}
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
