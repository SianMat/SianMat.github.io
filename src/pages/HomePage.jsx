import FeaturedProjectList from "../components/HomePage/FeaturedProjectList.jsx";
import Contact from "../components/Contact";
import About from "../components/HomePage/About.jsx";
import HomePageHero from "../components/HomePage/HomePageHero.jsx";

// TODO - REDUCE THE SIZE OF IMAGES

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HomePageHero />
      <About />
      {/* Featured Projects */}
      <FeaturedProjectList />
      <Contact />
    </>
  );
};

export default HomePage;
