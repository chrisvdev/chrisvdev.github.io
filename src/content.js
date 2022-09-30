import ME from "./assets/me.png";
import AVATAR from "./assets/about.jpg";
import LANDING from "./assets/landing.jpg";
import ALBT from "./assets/ALBT.png";
import CV from "./assets/CV-English.pdf";

const content = {
  alert: undefined ,
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
          level: "Intermediate",
        },
        {
          attribute: "JavaScript",
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
        {
          attribute: "React",
          level: "Experienced",
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
          attribute: "Postgres",
          level: "Intermediate",
        },
        {
          attribute: "Docker",
          level: "Basic",
        },
        {
          attribute: "IOT",
          level: "Intermediate",
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
  ],
  testimonials: undefined,
};

export default content;
