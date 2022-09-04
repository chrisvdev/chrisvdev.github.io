import IMG1 from "./assets/demo.png";
import ME from "./assets/about.jpg";
import LANDING from "./assets/landing.jpg";
import ALBT from "./assets/ALBT.png";

const content = {
  alert: {
    messages: [
      "The site still under construction, that is why you are going to find broken links, Lorems and fake cards.",
      "Be patient, i'll finish this soon...",
    ],
  },
  about: {
    me: ME,
    message: `Graduated more than 10 years ago as a computer technician, I have always had the knowledge to enter software development, but the need pushed me to the branch of support for PCs, networks and servers. Instructed on my own in soft skills, to the point of, recently, having gone through the biggest non-verbal communication masterclass on the world, and as a photographer by hobby, which gave me my knowledge in graphic design, today, after having gone through the Bootcamp of "Soy Henry", I decide to make my career as a Full Stack Developer.`,
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
  services: [
    {
      title: "UI/UX Design",
      list: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    {
      title: "Web Development",
      list: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
    {
      title: "Content creation",
      list: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
  ],
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
      image: IMG1,
      title: "title",
      github: "https://github.com/chrisvill2312/",
      demo: "https://github.com/chrisvill2312/",
    },
  ],
  testimonials: undefined,
};

export default content;
