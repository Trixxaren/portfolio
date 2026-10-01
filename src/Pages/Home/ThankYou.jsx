import { Link } from "react-router-dom";
import { copy } from "../../data/copy";
export default function ThankYou({ language, notFound = false }) {
  const t = copy[language];
  return (
    <section className="thank-you container">
      <p className="eyebrow">{notFound ? "404" : "ROBIN VIKSTRÖM"}</p>
      <h1>{notFound ? t.notFound : t.thanks}</h1>
      <p>{notFound ? t.notFoundText : t.thanksText}</p>
      <Link className="button button-primary" to="/">
        {t.home}
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
