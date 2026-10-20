import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { copy, studioCopy } from "../data/copy";

export default function Navbar({ language, toggleLanguage }) {
  const t = copy[language];
  const s = studioCopy[language];
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    if (open) menu.current?.querySelector("a")?.focus();
  }, [open]);

  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main">{t.skip}</a>
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label={s.homeLabel}>
          Robin Vikström<span aria-hidden="true">.</span>
        </Link>
        <nav
          ref={menu}
          id="main-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label={s.mainNavigation}
          onKeyDown={event => {
            if (event.key === "Escape") {
              setOpen(false);
              trigger.current?.focus();
            }
          }}
        >
          {t.nav.map((label, index) => {
            const anchor = ["#MyPortfolio", "#AboutMe", "#Contact"][index];
            return (
              <Link
                key={label}
                to={"/" + anchor}
                onClick={() => setOpen(false)}
                aria-current={pathname === "/" && hash === anchor ? "location" : undefined}
              >{label}</Link>
            );
          })}
        </nav>
        <div className="header-controls">
          <button className="language-button" onClick={toggleLanguage} aria-label={language === "sv" ? "Switch to English" : "Byt till svenska"}>
            {language === "sv" ? "EN" : "SV"}
          </button>
          <button ref={trigger} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? t.close : t.menu}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
