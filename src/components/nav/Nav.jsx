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
          href="#portfolio"
          onClick={() => {
            setActive("#portfolio");
          }}
          className={"nav__portfolio-btn"+(active === "#portfolio" ? " active" : "")}
        >
          <AiOutlineFolderOpen />
        </a>
      )}
      <a
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
