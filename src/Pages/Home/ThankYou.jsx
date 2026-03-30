const content = {
  sv: {
    title: "Tack för ditt meddelande",
    text: "Jag återkommer så snart jag kan. Ha en fin dag!",
  },
  en: {
    title: "Thank you for your message",
    text: "I will get back to you as soon as I can. Have a great day!",
  },
};

const ThankYou = ({ language }) => {
  const t = content[language];

  return (
    <section className="thank-you-section">
      <div className="container thank-you__inner">
        <h1>{t.title}</h1>
        <p className="text-lg">{t.text}</p>
      </div>
    </section>
  );
};

export default ThankYou;
