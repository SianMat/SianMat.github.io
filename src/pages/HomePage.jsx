import FeaturedProjectList from "../components/FeaturedProjectList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Hero from "../components/Hero";

// TODO - REDUCE THE SIZE OF IMAGES

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <About />
      {/* Featured Projects */}
      <FeaturedProjectList />
      <Contact />
    </>
  );
};

export default HomePage;
