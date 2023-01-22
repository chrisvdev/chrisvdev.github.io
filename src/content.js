const HB = "https://res.cloudinary.com/dgg07ocbn/image/upload/v1674362500/Landing/_DSC3579_web_mwmtrh.jpg";
const AVATAR = "https://res.cloudinary.com/dgg07ocbn/image/upload/v1674355663/Landing/about_orqxdl.jpg";
const LANDING = "https://res.cloudinary.com/dgg07ocbn/image/upload/v1674355663/Landing/landing_imicwm.jpg";
const ALBT = "https://res.cloudinary.com/dgg07ocbn/image/upload/v1674355663/Landing/ALBT_dpggao.png";
const HPI = "https://res.cloudinary.com/dgg07ocbn/image/upload/v1674355666/Landing/SoyHenryPI_mkcmav.png";
const HEC = "https://res.cloudinary.com/dgg07ocbn/image/upload/v1674355663/Landing/ec_hdbmdj.png";
import CV from '../public/CV-English.pdf'
const CF = "https://res.cloudinary.com/dgg07ocbn/image/upload/v1674355663/Landing/cloudflare_oewpnv.png";

const content = {
  alert: undefined,
  header: {
    name: "Christian Villegas",
    image: HB,
    profession: "FULL STACK DEVELOPER",
    cv: CV,
  },
  about: {
    me: AVATAR,
    message: `Hello!👋🏻 My name is Christian and I have the confidence to tell you that if you entered here looking for a Full Stack Developer that provides solutions, you will find it in me 😊. Why?
    Now as a Full Stack Developer thanks to Henry, I am up to date with the technologies that the market demands.
    I am attentive to the technologies that are to come, I strongly rely on the new ones, on my background and experience as a computer technician, which gave me the knowledge to understand what programming is all about and what is required to perform DevOps 💪🏻. As a Photographer, knowing about composition, visual language and colorimetry, makes it even easier for me to develop a better FrontEnd and UX 🎨.
    Is there already a team in place or are you building one? Apart from knowing how to implement Scrum and what agile methodologies are all about, I have knowledge and experience in communication that will accelerate my integration to the team🙏🏻.
    Don't delay and contact me. 😉`,
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
  services: [
    {
      "title": "FrontEnd Development",
      "list": [
        "Front End Architecture & Design",
        "UI / UX Development",
        "Custom JavaScript Based Solutions"
      ]
    },
    {
      "title": "BackEnd Development",
      "list": [
        "API Integration",
        "User Management",
        "Messaging Services",
        "Data Synchronization",
        "Data Storage",
        "Security",
        "Content Management System",
        "And more..."
      ]
    },
    {
      "title": "DevOps",
      "list": [
        "Business Planing",
        "Development",
        "Testing",
        "Cloud construction and Deployment",
        "Monitoring",
        "Automation and Optimization",
      ]
    }
  ],
  portfolio: [

    {
      image: CF,
      title: "A Cloudflare DNS, Subdomain and SSL management service",
      paragraph: "if you entered from christianvillegas.com you are currently using it",
      github: "https://github.com/chrisvill2312/CloudFlare-SSL-Subdomain-service",
    },
    {
      image: HEC,
      title: "Technomerch E-Commerce (SoyHenry's Bootcamp Final Project - Teamwork applying SCRUM methodology)",
      github: "https://github.com/PT07G05-Henry",
      demo: "https://tecnomerch.christianvillegas.com/",
    },
    {
      image: HPI,
      title: "The Game Catalog (SoyHenry's Bootcamp Individual Project)",
      github: "https://github.com/chrisvill2312/PI-Videogames",
      demo: "https://gamecatalog.christianvillegas.com/",
    },
    {
      image: ALBT,
      title: "ALBT (Arduino Lithium Battery Tester)",
      github: "https://github.com/chrisvill2312/arduino-li-battery-tester",
    },
    {
      image: LANDING,
      title: "This web site!",
      github:
        "https://github.com/chrisvill2312/chrisvill2312.github.io/tree/main",
    },
  ],
  testimonials: undefined,
};

export default content;
