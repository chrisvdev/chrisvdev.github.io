import React from "react";
import "./footer.css";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = (props) => {
  const { about, experience, services, portfolio, testimonials } = props.data;
  return (
    <footer>
      <a href="#" className="footer__logo">
        Christian Villegas
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        {about && (
          <li>
            <a href="#about">About</a>
          </li>
        )}
        {experience && (
          <li>
            <a href="#experience">Experience</a>
          </li>
        )}
        {services && (
          <li>
            <a href="#services">Services</a>
          </li>
        )}
        {portfolio && (
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        )}
        {testimonials && (
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        )}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/chrisvill2312/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://github.com/chrisvill2312"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
      </div>
      <div className="footer__copyright">
      </div>
    </footer>
  );
};

export default Footer;