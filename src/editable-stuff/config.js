// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Carl",
  middleName: "J.",
  lastName: "Menke",
  message: "Full Stack Software Engineer. Passionate about self-teaching and asking the right questions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/CarlMenke",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/carl-menke-333226139/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/carlmenkeimage.jpg"),
  imageSize: 375,
  message:
    "I am a full stack software engineer with a vision for optimization and a passion for building and perfecting systems. Through patience and consistency, I am able to produce thorough documentation and clean code. I love to learn, talk, and write code and am looking for a place that will allow me to share these interests with other passionate software engineers.",
  resume: "https://docs.google.com/document/d/12m42NjPuVptG_DvQGMcXZ88rnAhuKuj1PqIDM6qdfSg/edit?usp=sharing",
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 95 },
    { name: "Python", value: 60 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 50 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Front-End, Back-end, or Full-stack software engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "carlmenke13@gmail.com",
};


export { navBar, mainBody, about, skills , getInTouch };
