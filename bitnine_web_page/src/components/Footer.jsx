import "../styles/Footer.css";
import {
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
  FaMedium,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLinks">
          <div className="footerLinksItem">
            <a href="/">
              <b>Products</b>
            </a>
            <a href="/">Relational Database</a>
            <a href="/">Graph Database</a>
            <a href="/">Graph-based Solutions</a>
          </div>
          <div className="footerLinksItem">
            <a href="/">
              <b>Use Cases</b>
            </a>
          </div>
          <div className="footerLinksItem">
            <a href="/">
              <b>Services</b>
            </a>
          </div>
          <div className="footerLinksItem">
            <a href="/">
              <b>Resources</b>
            </a>
            <a href="/">Documentation</a>
            <a href="/">Learn</a>
          </div>
          <div className="footerLinksItem">
            <a href="/">
              <b>Blog</b>
            </a>
          </div>
          <div className="footerLinksItem">
            <a href="/">
              <b>Company</b>
            </a>
            <a href="/">About Us</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div className="footerCopy">
          <p>
            <span>&copy;</span> 2023 by Bitnine Global Inc. All Rights Reserved.
          </p>
          <div className="footerCopySocial">
            <FaGithub className="socialIcon" />
            <FaYoutube className="socialIcon" />
            <FaLinkedinIn className="socialIcon" />
            <FaFacebook className="socialIcon" />
            <FaMedium className="socialIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
