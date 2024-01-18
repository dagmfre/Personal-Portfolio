import Hero from "./Hero";
import Bg from "./Bg"
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="main-container">
      <Hero data-aos="fade-up"/>
      <Bg data-aos="fade-right"/>
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
