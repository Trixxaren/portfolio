const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="container about__inner">
        {" "}
        <div className="about--section--img">
          <img src="/utomhus.png" alt="Om mig" />
        </div>
        <div className="hero--section--content-box">
          <div className="hero--section--content">
            <h2>Om mig</h2>
            <p className="text-md">
              Jag är en lösningsorienterad och nyfiken frontendutvecklare med stark bakgrund inom försäljning och affärsdrivna roller. Just nu studerar jag Frontend Development på Jensen Yrkeshögskola, där jag arbetar med HTML, CSS, JavaScript, TypeScript, React, Next.js, Vite och Tailwind CSS, samt verktyg som Git/GitHub, npm, Node.js, Figma och Miro. Jag drivs av att bygga användarvänliga, responsiva och tillgängliga webblösningar där teknik möter verkliga affärs och användarbehov.
            </p>
            <p className="text-md">
           Tidigare var jag Key Account Manager på Viaplay Group Radio och ansvarade för strategiska samarbeten med några av Sveriges största företag. Där utvecklade jag starka färdigheter inom kundansvar, behovsanalys och att driva projekt från idé till resultat, erfarenheter jag idag tar med mig in i utvecklarrollen.
            </p>
            <p className="text-md">
             Jag är en målinriktad doer som trivs i team, tar stort eget ansvar och vill fortsätta utvecklas både tekniskt och personligt. Nästa steg för mig är på ett företag där jag får växa som utvecklare och bidra med mina kunskaper, med mål att på sikt utvecklas inom fullstack och IT-projektledning.
            </p>
            <a
              href="https://drive.google.com/file/d/14bKXvOOj3tvWqkp1NoLxmeprNxt7YNqo/view?usp=drive_link"
              download
               target="_blank"
                rel="noopener noreferrer"
            >
              <button className="btn btn-black">Ladda ner CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
