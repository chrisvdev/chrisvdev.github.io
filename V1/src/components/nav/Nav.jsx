import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFolderOpen,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = (props) => {
  const { about, experience, services, portfolio } = props.data;
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        title="Home"
        href="#"
        onClick={() => {
          setActive("#");
        }}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      {about && (
        <a
          title="About"
          href="#about"
          onClick={() => {
            setActive("#about");
          }}
          className={active === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      )}
      {experience && (
        <a
          title="Experience"
          href="#experience"
          onClick={() => {
            setActive("#experience");
          }}
          className={active === "#experience" ? "active" : ""}
        >
          <AiOutlineBook />
        </a>
      )}
      {services && (
        <a
          title="Services"
          href="#services"
          onClick={() => {
            setActive("#services");
          }}
          className={active === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
      )}
      {portfolio && (
        <a
          title="Portfolio"
          href="#portfolio"
          onClick={() => {
            setActive("#portfolio");
          }}
          className={
            (about && experience && services
              ? active === "#portfolio"
                ? "nav__portfolio-btn "
                : "nav__portfolio-btn"
              : "") + (active === "#portfolio" ? "active" : "")
          }
        >
          <AiOutlineFolderOpen />
        </a>
      )}
      <a
        title="Contact"
        href="#contact"
        onClick={() => {
          setActive("#contact");
        }}
        className={active === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
