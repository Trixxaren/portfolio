import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

const Home = ({ language, toggleLanguage }) => {
  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <HeroSection language={language} />
      <MySkills language={language} />
      <AboutMe language={language} />
      <MyPortfolio language={language} />
      <ContactMe language={language} />
      <Footer language={language} />
    </>
  );
};

export default Home;
