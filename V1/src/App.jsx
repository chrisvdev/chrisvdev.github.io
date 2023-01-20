import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portafolio from "./components/portafolio/Portafolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import defaultContent from "./content";
import Alert from "./components/alert/Alert";
import axios from "axios";

function App() {
  const [content, setContent] = useState(defaultContent);
  const {
    alert,
    header,
    about,
    experience,
    services,
    portfolio,
    testimonials,
  } = content;
  useEffect(() => {
    const { REACT_APP_EXTERNAL_CONTENT } = process.env;
    REACT_APP_EXTERNAL_CONTENT &&
      axios
        .get(REACT_APP_EXTERNAL_CONTENT)
        .then(({ data }) => {
          switch (data.mode) {
            case "merge":
              setContent({ ...content, ...data });
              console.info("External data loaded and merged!");
              break;
            case "replace":
              setContent(data);
              console.info("Content replaced with external data!");
            default:
              console.info("Skipping the load of external data...");
              break;
          }
        })
        .catch((e) => console.error(`Error getting external content: ${e}`));
  }, []);
  return (
    <>
      {alert && <Alert data={alert} />}
      <Header data={header} />
      {content && <Nav data={content} />}
      {about && <About data={about} />}
      {experience && <Experience data={experience} />}
      {services && <Services data={services} />}
      {portfolio && <Portafolio data={portfolio} />}
      {testimonials && <Testimonials data={testimonials} />}
      <Contact />
      <Footer data={content} />
    </>
  );
}

export default App;
