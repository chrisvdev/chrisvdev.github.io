import React from "react";
import { GoCheck } from "react-icons/go";
import "./services.css";

const Services = (props) => {
  const { data } = props;
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {data.map(({ title, list }, sIndex) => (
          <article key={`service_${sIndex}`} className="service">
            <div className="service__head">
              <h3>{title}</h3>
            </div>
            <ul className="service__list">
              {list.map((item, lIndex) => (
                <li key={`service_${sIndex}-item_${lIndex}`}>
                  <GoCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
