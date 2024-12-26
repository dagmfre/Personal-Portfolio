import { useState, useEffect } from "react";

function Header({ isClicked, clickHandler }) {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 65) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-sm ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="logo-cont">
          <a className="navbar-brand" href="/#">
            <img src="logob.png" alt="logo" className="logo" />
          </a>
        </div>
        <div className="main-links-cont">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <div className="nav-link-cont">
                <li className="nav-item ">
                  <a className="nav-link underlined" href="#about">
                    <p>
                      <span>&lt;</span>ABOUT /<span>&gt;</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link underlined" href="#service">
                    <p>
                      <span>&lt;</span>SERVICE /<span>&gt;</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link underlined" href="#works">
                    <p>
                      <span>&lt;</span>WORKS /<span>&gt;</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link underlined" href="#experience">
                    <p>
                      <span>&lt;</span>EXPERIENCE /<span>&gt;</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link underlined" href="#contact">
                    <p>
                      <span>&lt;</span>CONTACT /<span>&gt;</span>
                    </p>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="main-links-cont2">
          <div
            className={`hamburger-icon ${isNavOpen && "gap"}`}
            id="icon"
            onClick={toggleNav}
          >
            <div className={`icon-1 ${isNavOpen && "a"}`} id="a"></div>
            <div className={`icon-2 ${isNavOpen && "c"}`} id="b"></div>
            <div className={`icon-3 ${isNavOpen && "b"}`} id="c"></div>
          </div>

          <div id="nav" className={isNavOpen ? "show" : ""}>
            <ul className="ul">
              <li className="li li1">
                <a href="#about">About</a>
              </li>
              <li className="li li2">
                <a href="#service">Service</a>
              </li>
              <li className="li li3">
                <a href="#works">Works</a>
              </li>
              <li className="li li4">
                <a href="#experience">Experience</a>
              </li>
              <li className="li li5">
                <a href="#contact">Contact</a>
              </li>
              <li className="li li6">
                <a className="resume2" href="resume2.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div id="blue" className={isNavOpen ? "slide" : "dark-blue"}></div>
        </div>
        <li className="nav-item last-link2">
          <a
            className={`nav-link resume-icon ${isClicked ? `no-hover` : ""}`}
            style={{
              backgroundColor: scrolled ? "#16202c" : "",
              transition: "all 0.5s",
            }}
            onClick={clickHandler}
            href="resume2.pdf"
          >
            <p>
              <span></span>Resume<span></span>
            </p>
          </a>
          <div className="resume-back"></div>
        </li>
      </div>
    </nav>
  );
}

export default Header;
