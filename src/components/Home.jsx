import Hero from "./Hero";
import Bg from "./Bg";
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ExperienceTimeline from "./Experience";
import Header from "./Header";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  function clickHandler() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 700);
  }

  return (
    <>
      {isLoading ? (
        <div className="loader-cont">
          <img src="loader.gif" alt=""></img>
        </div>
      ) : (
        <div className="main-container">
          <Header isClicked={isClicked} clickHandler={clickHandler} />
          <Hero data-aos="fade-up" />
          <Bg data-aos="fade-right" />
          <About />
          <Service />
          <Projects />
          <ExperienceTimeline />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
