import { useState } from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div>
      <div className="hero" id="hero">
        <div className="hero-bg">
          <img className="hr-imga" src="bg2.png" alt="" />
        </div>
        <div className="hero-main-child">
          <div className="main-first glitch-wrapper content">
            <img data-aos="fade-right" className="sh1" src="sh1.svg" alt="" />
            <img className="swing1" src="swing1.svg" alt="" />
            <div className="intro-cont">
              <p data-aos="fade-right" className="hello hello1">
                Hello👋, My name is
              </p>
              <div data-aos="fade-right" className="name-cont">
                <p className="hello2">Hello👋, i am</p>
                <h1 className="name text" data-text="Dagmfre Seid.">
                  Dagmfre Seid.
                </h1>
              </div>
              <h1 className="skill-cont">
                <span data-aos="fade-right" className="i-am i-am1">
                  I am a
                </span>
                <span data-aos="fade-right" className="niche">
                  <Typed
                    strings={[
                      "<i className='fas fa-solid fa-laptop-code'></i>Front-end Developer.",
                      "<i className='fas fa-brands fa-react'></i>React Developer.",
                      "<i className='fas fa-solid fa-database'></i>Back-end Engineer.",
                      "<i className='fas fa-solid fa-object-ungroup'></i>UI/UX Enthusiast.",
                    ]}
                    typeSpeed={90}
                    delaySpeed={90}
                    backSpeed={20}
                    contentType={"html"}
                    loop
                  />
                </span>{" "}
              </h1>
              <p data-aos="fade-right" className="descr descr1">
                Passionate about building eye-catching and interactive websites
                using leading-edge technologies. I've been Specializing in
                React.js to ensure efficient and high-performance web
                applications.
              </p>
              <p data-aos="fade-right" className="descr2">
                Passionate about building eye-catching and interactive websites
                using leading-edge technologies.
              </p>
              <div data-aos="fade-right" className="getin-cont">
                <div className={`getin-front getin-front1`}>
                  <a href="mailto:dagmfre@gmail.com">Get in touch</a>
                </div>
                <div className="getin-back2"></div>
              </div>
              <div data-aos="slide-up" className="platform-cont">
                <div className="platform1">
                  <a href="https://github.com/dagmfre">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/dagmfre-seid-51a094214">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/DagmfreS">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://t.me/dag65">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                  <a href="https://www.tiktok.com/@dagmfre">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
                <div className="platform2"></div>
              </div>
            </div>
          </div>
          <div className="main-sec">
            <img data-aos="fade-left" className="sh2" src="sh2.svg" alt="" />
            <img className="swing2" src="swing2.svg" alt="" />
            <div className="pc-cont pc-cont1">
              <img
                data-aos="fade-left"
                className="pc"
                src="pc_final11.svg"
                alt=""
              />
            </div>
            <div className="pc-cont2">
              <img className="pc" src="pc_final22.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
