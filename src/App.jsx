import React, { useState } from "react";
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

function App() {
  const [content, setContent] = useState(defaultContent);
  const { alert, about, experience, services, portfolio, testimonials } =
    content;
  return (
    <>
      {alert && <Alert data={alert}/>}
      <Header />
      {content && <Nav data={content} />}
      {about && <About data={about} />}
      {experience && <Experience data={experience} />}
      {services && <Services data={services} />}
      {portfolio && <Portafolio data={portfolio} />}
      {testimonials && <Testimonials data={testimonials} />}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
