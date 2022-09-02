import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { BsBookHalf } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <img
                src="https://assets.soyhenry.com/icons/favicon-32x32.png"
                alt="Soy Henry"
              />
              <h5>Soy Henry</h5>
              <small>Full Stack Developer</small>
            </article>
            <article className="about__card">
              <BsBookHalf className="about__icon"/>
              <h5>Extensive Knowledge</h5>
              <small>Image and Software design</small>
            </article>
            <article className="about__card">
              <HiUserGroup className="about__icon"/>
              <h5>Soft skills</h5>
              <small>Communication, team work and more...</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex consectetur molestias, mollitia corrupti ut. Excepturi suscipit, expedita nesciunt nihil explicabo quae dolore laudantium quis non nemo ex voluptatem nostrum.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>        
        </div>
      </div>
    </section>
  );
};

export default About;
