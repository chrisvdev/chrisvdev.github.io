import ME from "./assets/me.png";
import AVATAR from "./assets/about.jpg";
import LANDING from "./assets/landing.jpg";
import ALBT from "./assets/ALBT.png";
import HPI from "./assets/SoyHenryPI.png";
import HEC from "./assets/ec.png";
import CV from "./assets/CV-English.pdf";

const content = {
  alert: undefined,
  header: {
    name: "Christian Villegas",
    image: ME,
    profession: "Fullstack Developer",
    cv: CV,
  },
  about: {
    me: AVATAR,
    message: `Graduated 10 years ago as a computer technician, I always had the knowledge in software development and a goal to make my career about that. I started working in the support on PCs, networks and servers area. Instructed on my own in soft skills, to the point of having gone through the biggest non-verbal communication masterclass on the world. I am a photographer by hobby, which gave me the knowledge in graphic design and use of design apps. After I’ve been gone through the Soy-Henry’s bootcamp, I feel encourage to be a Full Stack Developer.`,
  },
  experience: [
    {
      title: "FrontEnd Development",
      attributes: [
        {
          attribute: "HTML",
          level: "Experienced",
        },
        {
          attribute: "CSS",
          level: "Experienced",
        },
        {
          attribute: "JavaScript",
          level: "Experienced",
        },
        {
          attribute: "React",
          level: "Experienced",
        },
        {
          attribute: "Redux",
          level: "Experienced",
        },
        {
          attribute: "Bootstrap",
          level: "Experienced",
        },
        {
          attribute: "Tailwind",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "BackEnd Development",
      attributes: [
        {
          attribute: "Node JS",
          level: "Experienced",
        },
        {
          attribute: "Express",
          level: "Intermediate",
        },
        {
          attribute: "Sequelize",
          level: "Intermediate",
        },
        {
          attribute: "SQL",
          level: "Intermediate",
        },
        {
          attribute: "Postgres",
          level: "Intermediate",
        },
        {
          attribute: "MongoDB",
          level: "Basic",
        },
      ],
    },
    {
      title: "DevOps and Others",
      attributes: [
        {
          attribute: "Docker",
          level: "Basic",
        },
        {
          attribute: "GNU/Linux",
          level: "Intermediate",
        },
        {
          attribute: "Bash",
          level: "Intermediate",
        },
        {
          attribute: "Arduino",
          level: "Experienced",
        },
        {
          attribute: "Raspberry",
          level: "Experienced",
        },
        {
          attribute: "Git",
          level: "Intermediate",
        },
        {
          attribute: "Scrum/Agile",
          level: "Experienced",
        },
        {
          attribute: "C",
          level: "Intermediate",
        },
        {
          attribute: "C++",
          level: "Intermediate",
        },
        {
          attribute: "Java",
          level: "Intermediate",
        },
        {
          attribute: "Python",
          level: "Basic",
        },
      ],
    },
  ],
  services: undefined,
  portfolio: [
    {
      image: LANDING,
      title: "This web site!",
      github:
        "https://github.com/chrisvill2312/chrisvill2312.github.io/tree/main",
    },
    {
      image: ALBT,
      title: "ALBT (Arduino Lithium Battery Tester)",
      github: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
    {
      image: HPI,
      title: "The Game Catalog (SoyHenry's Bootcamp Individual Project)",
      github: "https://github.com/chrisvill2312/PI-Videogames",
      demo: "http://6evi.duckdns.org/",
    },
    {
      image: HEC,
      title: "Technomerch E-Commerce (SoyHenry's Bootcamp Final Project applying SCRUM methodology)",
      github: "https://github.com/PT07G05-Henry",
      demo: "https://6evi.duckdns.org:1337/",
    },
  ],
  testimonials: undefined,
};

export default content;
