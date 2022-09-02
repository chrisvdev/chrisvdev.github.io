import React from "react";
import "./footer.css";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Christian Villegas
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/christian-villegas-sanchez-66115097/?locale=en_US"><SiLinkedin/></a>
        <a href="https://github.com/chrisvill2312"><SiGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Christian Villegas. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
