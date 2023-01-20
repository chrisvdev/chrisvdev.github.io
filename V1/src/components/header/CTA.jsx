import React from "react";
//import CV from './CV.pdf'

const CTA = (props) => {
  return (
    <div className="cta">
      <a href={props.cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
