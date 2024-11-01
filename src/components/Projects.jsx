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
              <h4>Nova-Cars-An-Ecommerce-Website</h4>
              <p>
                Nova-Cars is a MERN stack website designed and built for
                effortless car exploration and purchase. It allows users
                navigate the platform easily to find and reserve a wide variety
                of cars, including SUVs, trucks, and vans...
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://nova-cars.vercel.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/dagmfre/Nova-Cars-An-Ecommerce-Website"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <div id="proj-image-gallery" href="/#">
                  <a
                    href="nov1.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                  <a
                    href="nov2.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov3.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov4.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov5.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov6.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov7.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov8.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov9.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov10.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov11.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="nov12.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov13.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov14.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov15.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nov16.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="nova-mongo.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"610.1887"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="nov1.png" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Ethiopian Medical Students' Association | EMSA</h4>
              <p>
                EMSA is a multi-page corporate web app created for the Ethiopian
                Medical Students' Association (EMSA-Ethiopia). It focuses on
                clear branding, easy access to information, and simple
                certificate generation for students...
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://emsaethiopia.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <div id="proj-image-gallery" href="/#">
                  <a
                    href="emsa1.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                  <a
                    href="emsa2.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa3.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa4.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa5.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa6.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa7.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa8.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa9.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa10.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa11.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="emsa12.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa13.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa14.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa15.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="emsa16.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"619"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="emsa1.png" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            <div>
              <h4>Complete Netflix Clone</h4>
              <p>
                This project is a complete Netflix clone built with the MERN
                stack and powered by the TMDB API. It contains features like
                searching movies and TV shows, adding them to the watchlist...
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://netflix-app-clonee.vercel.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/dagmfre/Netflix"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <div id="proj-image-gallery" href="/#">
                  <a
                    href="netflix4.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                  <a
                    href="netflix5.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="netflix5b.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="netflix5c.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="netflix5d.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="netflix-a.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="netflix-b.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="netflix.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="netflix2.png"
                    data-pswp-width={"1320 "}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="netflix3.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="netflix6.png"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                </div>
              </div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <br />
                <p>mongoDB</p>
                <p>Passport.js</p>
                <p>Bootsrap</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="netflix4.png" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
        <div className="pros">
          <div className="pros-front">
            {" "}
            <div>
              <h4>Bloggerhub</h4>
              <p>
                A dynamic and easy-to-use platform for creating and sharing
                blogs to empower people to share their thoughts easily, connect
                with others, and potentially grow their online presence...
                <i className="click">
                  (click the 'search' icon below to learn more)
                </i>
              </p>
            </div>
            <div className="pros-desc">
              <div>
                <a
                  href="https://blogger-hub-ten.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/dagmfre/Bloggerhub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <div id="proj-image-gallery" href="/#">
                  <a
                    href="blog_cover.jpg"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </a>
                  <a
                    href="blog.jpg"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                  <a
                    href="blog2.jpg"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="blog3.jpg"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>

                  <a
                    href="blog4.jpg"
                    data-pswp-width={"1320"}
                    data-pswp-height={"614.5546 pt"}
                    rel="noreferrer"
                    target="_blank"
                  ></a>
                </div>
              </div>
              <div>
                <p>Ejs</p>
                <p>Node</p>
                <p>Express</p>
                <br />
                <p>JavaScript</p>
                <p>mongoDB</p>
                <p>Bootsrap</p>
              </div>
            </div>
          </div>
          <img className="pros-img" src="blog.jpg" alt="" srcSet="" />
          <div className="pros-back"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
