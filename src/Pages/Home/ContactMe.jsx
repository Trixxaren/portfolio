import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { copy } from "../../data/copy";

export default function ContactMe({ language }) {
  const t = copy[language];
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xqapopdp");
  useEffect(() => {
    if (state.succeeded) navigate("/thank-you");
  }, [state.succeeded, navigate]);
  return (
    <section className="contact-section section-space" id="Contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>
            {t.contactTitle}
            <br />
            <em>{t.contactItalic}</em>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </h2>
          <p>{t.contactIntro}</p>
          <a
            className="contact-email"
            href="mailto:robin.m.e.vikstrom@gmail.com"
          >
            robin.m.e.vikstrom@gmail.com
          </a>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <label>
              {t.name}
              <input
                name="name"
                autoComplete="name"
                required
                maxLength="120"
                disabled={state.submitting}
              />
            </label>
            <label>
              {t.email}
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={state.submitting}
              />
              <ValidationError
                prefix={t.email}
                field="email"
                errors={state.errors}
              />
            </label>
          </div>
          <label>
            {t.message}
            <textarea
              name="message"
              rows="4"
              required
              maxLength="5000"
              placeholder={t.placeholder}
              disabled={state.submitting}
            />
            <ValidationError
              prefix={t.message}
              field="message"
              errors={state.errors}
            />
          </label>
          {state.errors && (
            <p className="form-error" role="alert">
              {t.formError}
            </p>
          )}
          <button
            type="submit"
            className="button button-cream"
            disabled={state.submitting}
          >
            {state.submitting ? t.sending : t.send}
            <span aria-hidden="true">↗</span>
          </button>
          <span className="form-status" role="status">
            {state.submitting ? t.sending : ""}
          </span>
        </form>
      </div>
    </section>
  );
}
