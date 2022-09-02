import React from "react";
import { MdLibraryAddCheck } from "react-icons/md";
import "./experience.css";

const Experience = (props) => {
  const { data } = props;
  return (
    <section id="experience">
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {data.map(({ title, attributes }, index) => (
          <div key={`experience_${index}`} className="experience">
            <h3>{title}</h3>
            <div className="experience__content">
              {attributes.map(({ attribute, level }, index) => (
                <article
                  key={`${attribute}_${level}`}
                  className="experience__details"
                >
                  <MdLibraryAddCheck className="experience__details-icon" />
                  <div>
                    <h4>{attribute}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
