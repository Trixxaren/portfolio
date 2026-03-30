import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

const content = {
  sv: {
    kicker: "Kontakt",
    title: "Kontakta mig",
    description:
      "Skriv gärna ett meddelande här eller kontakta mig via LinkedIn.",
    firstName: "Förnamn",
    lastName: "Efternamn",
    email: "E-post",
    phone: "Telefonnummer",
    message: "Meddelande",
    placeholder: "Skriv ditt meddelande...",
    submit: "Skicka",
    sending: "Skickar...",
  },
  en: {
    kicker: "Contact",
    title: "Contact me",
    description:
      "Feel free to send me a message here or contact me via LinkedIn.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone number",
    message: "Message",
    placeholder: "Write your message...",
    submit: "Send",
    sending: "Sending...",
  },
};

const ContactMe = ({ language }) => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xqapopdp");
  const t = content[language];

  useEffect(() => {
    if (state.succeeded) {
      navigate("/thank-you");
    }
  }, [state.succeeded, navigate]);

  return (
    <section className="contact--section" id="Contact">
      <div className="container contact__inner">
        <div className="section-heading">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p className="section-description">{t.description}</p>
        </div>

        <form
          className="contact--form--container"
          onSubmit={handleSubmit}
          method="POST"
          action="https://formspree.io/f/xqapopdp"
        >
          <div className="form-row">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">{t.firstName}</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>

            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">{t.lastName}</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="email" className="contact--label">
              <span className="text-md">{t.email}</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
              <ValidationError
                prefix={t.email}
                field="email"
                errors={state.errors}
              />
            </label>

            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">{t.phone}</span>
              <input
                type="tel"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
              />
            </label>
          </div>

          <label htmlFor="message" className="contact--label">
            <span className="text-md">{t.message}</span>
            <textarea
              className="contact--input text-md contact--textarea"
              id="message"
              name="message"
              rows="8"
              placeholder={t.placeholder}
              required
            />
            <ValidationError
              prefix={t.message}
              field="message"
              errors={state.errors}
            />
          </label>

          <div>
            <button
              className="btn btn-primary contact--form--btn"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? t.sending : t.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
