import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#proj-image-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <div data-aos="fade-right" className="project" id="works">
      <div className="pros-title">
        <h1>|</h1>
        <h3>Selected Projects I've Built</h3>
        <hr />
      </div>

      <div data-aos="zoom-up" className="pros-cont">
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://nova-cars.onrender.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id="proj-image-gallery" href="/#">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                  <a
                    href="nova2.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                  </a>
                  <a
                    href="nova3.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"920.5812"}
                    rel="noreferrer"
                    target="_blank"
                  >
                  </a>
                  <a
                    href="nova4.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"735"}
                    rel="noreferrer"
                    target="_blank"
                  >
                  </a>
                  <a
                    href="nova5.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"610.1887"}
                    rel="noreferrer"
                    target="_blank"
                  >
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="nova.png" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a href="" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <div id={"proj-image-gallery"} href="/">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="p3.jpg" alt="" />
          <div className="pros-back"></div>
        </div>

        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a href="" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <div id={"proj-image-gallery"} href="/">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="p.jpg" alt="" />
          <div className="pros-back"></div>
        </div>

        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a href="" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id={"proj-image-gallery"} href="/">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="p2.jpg" alt="" />
          <div className="pros-back"></div>
        </div>
      </div>

      <div className="pros-cont" data-aos="zoom-up">
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>

            <div className="pros-desc">
              <div>
                <a href="" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <div id={"proj-image-gallery"} href="/">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="tesla.jpg" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a href="" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id={"proj-image-gallery"} href="/">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="p3.jpg" alt="" />
          <div className="pros-back"></div>
        </div>

        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a href="" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <div id={"proj-image-gallery"} href="/">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="p.jpg" alt="" />
          <div className="pros-back"></div>
        </div>

        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Netflix Clone</h4>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a href="" target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id={"proj-image-gallery"} href="/">
                  <a
                    href="nova.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Git</p>
                <p>Netlify</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="p2.jpg" alt="" />
          <div className="pros-back"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
