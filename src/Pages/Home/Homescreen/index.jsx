import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";

export default function Home({ language }) {
  return (
    <>
      <HeroSection language={language} />
      <MyPortfolio language={language} />
      <AboutMe language={language} />
      <ContactMe language={language} />
    </>
  );
}
