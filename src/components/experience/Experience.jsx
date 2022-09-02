import React from "react";
import { MdLibraryAddCheck } from "react-icons/md";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Sequelize</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Postgres</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
