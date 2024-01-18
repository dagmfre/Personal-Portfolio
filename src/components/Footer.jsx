const Footer = () => {
  return (
    <div className="footer">
      <img src="logob.svg" alt="" />
      <p>Copyright © 2023 Dagmfre Seid.</p>
      <div className="contact-icons">
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
      <div className="last-cont">
        <a href="#works">
          <p>Portfolio</p>
        </a>
        <p>|</p>
        <a href="./certificate.pdf">
          <p>Certificate</p>
        </a>
        <p>|</p>
        <a href="./resume.pdf">
          <p>Resume</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
