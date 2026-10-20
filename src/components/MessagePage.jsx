import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { copy } from "../data/copy";

export default function MessagePage({ language, notFound = false }) {
  const t = copy[language];
  return <section className="message-page container"><p className="eyebrow">{notFound ? "404 / ROBIN VIKSTRÖM" : "ROBIN VIKSTRÖM"}</p><span className="message-symbol" aria-hidden="true">{notFound ? "?" : "↗"}</span><h1>{notFound ? t.notFound : t.thanks}</h1><p>{notFound ? t.notFoundText : t.thanksText}</p><Link to="/" className="button button-primary">{t.home}<FiArrowUpRight aria-hidden="true" /></Link></section>;
}
