import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portafolio from "./components/portafolio/Portafolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


import IMG1 from "./assets/demo.png";

function App() {
  const portfolio = [
    {
      image: IMG1,
      title: "title",
      github: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
    {
      image: IMG1,
      title: "title",
      demo: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
    {
      image: IMG1,
      title: "title",
      github: "https://github.com/chrisvill2312/arduino-li-battery-tester",
      demo: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
    {
      image: IMG1,
      title: "title",
      github: "https://github.com/chrisvill2312/arduino-li-battery-tester",
      demo: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
    {
      image: IMG1,
      title: "title",
      github: "https://github.com/chrisvill2312/arduino-li-battery-tester",
      demo: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
    {
      image: IMG1,
      title: "title",
      github: "https://github.com/chrisvill2312/arduino-li-battery-tester",
      demo: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
  ];
  const testimonials = [
    {
      avatar: "https://assets.soyhenry.com/icons/favicon-32x32.png",
      name: "nombre",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, iste veritatis maiores eligendi quas nam eaque vitae, alias ratione, soluta earum suscipit iure tenetur cum deleniti aliquid labore voluptatibus numquam.",
    },
    {
      avatar: "https://assets.soyhenry.com/icons/favicon-32x32.png",
      name: "nombre",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, iste veritatis maiores eligendi quas nam eaque vitae, alias ratione, soluta earum suscipit iure tenetur cum deleniti aliquid labore voluptatibus numquam.",
    },
    {
      avatar: "https://assets.soyhenry.com/icons/favicon-32x32.png",
      name: "nombre",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, iste veritatis maiores eligendi quas nam eaque vitae, alias ratione, soluta earum suscipit iure tenetur cum deleniti aliquid labore voluptatibus numquam.",
    },
    {
      avatar: "https://assets.soyhenry.com/icons/favicon-32x32.png",
      name: "nombre",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, iste veritatis maiores eligendi quas nam eaque vitae, alias ratione, soluta earum suscipit iure tenetur cum deleniti aliquid labore voluptatibus numquam.",
    },
  ];
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portafolio data={portfolio} />
      <Testimonials data={testimonials} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
