import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { FiArrowUpRight } from "react-icons/fi";
import { copy, studioCopy } from "../data/copy";

export default function Contact({ language }) {
  const t = copy[language];
  const s = studioCopy[language];
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xqapopdp");
  const hasError = field => Boolean(state.errors?.getFieldErrors(field).length);

  useEffect(() => {
    if (state.succeeded) navigate("/thank-you");
  }, [state.succeeded, navigate]);

  return (
    <section className="contact-section container section-space" id="Contact" aria-labelledby="contact-heading">
      <div className="contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2 id="contact-heading">{t.contactTitle} {t.contactItalic}</h2>
          <p>{t.contactIntro}</p>
          <a className="contact-email" href="mailto:robin.m.e.vikstrom@gmail.com">
            robin.m.e.vikstrom@gmail.com
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="form-field">
            <label htmlFor="contact-name">{t.name}</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder={s.namePlaceholder} required maxLength={120} disabled={state.submitting} aria-invalid={hasError("name") || undefined} aria-describedby={hasError("name") ? "contact-name-error" : undefined} />
            <ValidationError id="contact-name-error" className="field-error" field="name" errors={state.errors} />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">{t.email}</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder={s.emailPlaceholder} required maxLength={254} disabled={state.submitting} aria-invalid={hasError("email") || undefined} aria-describedby={hasError("email") ? "contact-email-error" : undefined} />
            <ValidationError id="contact-email-error" className="field-error" field="email" errors={state.errors} />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">{t.message}</label>
            <textarea id="contact-message" name="message" rows={4} placeholder={t.placeholder} required maxLength={5000} disabled={state.submitting} aria-invalid={hasError("message") || undefined} aria-describedby={hasError("message") ? "contact-message-error" : undefined} />
            <ValidationError id="contact-message-error" className="field-error" field="message" errors={state.errors} />
          </div>
          {state.errors && <p className="form-error" role="alert">{t.formError}</p>}
          <button type="submit" className="button button-primary" disabled={state.submitting}>
            {state.submitting ? t.sending : t.send}<FiArrowUpRight aria-hidden="true" />
          </button>
          <span className="sr-only" role="status">{state.submitting ? t.sending : ""}</span>
        </form>
      </div>
    </section>
  );
}
