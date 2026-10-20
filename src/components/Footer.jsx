import { copy } from "../data/copy";

export default function Footer({ language }) {
  const t = copy[language];
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Robin Vikström</p>
        <div>
          <a href="https://github.com/Trixxaren" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/robin-vikstr%C3%B6m-9959b6169/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#top">{t.backTop} ↑</a>
        </div>
      </div>
    </footer>
  );
}
