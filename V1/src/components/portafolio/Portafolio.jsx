import React from "react";
import "./portafolio.css";

const Portafolio = (props) => {
  const { data } = props;
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ image, title, paragraph, github, demo }, index) => {
          return (
            <article key={`demo_${index}`} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="demo1" />
              </div>
              <h3>{title}</h3>
              {paragraph && <p>{paragraph}</p>}
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={github ? {} : { display: "none" }}
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={demo ? {} : { display: "none" }}
                >
                  Visit
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
