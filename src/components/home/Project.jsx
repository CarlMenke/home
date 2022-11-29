import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import racoonimage from "../../assets/img/racoonimage.png"
import discimage from "../../assets/img/discimage.png"
import messageimage from '../../assets/img/messageimage.png'
import deskimage1 from "../../assets/img/deskimage1.jpg"
import deskimage3 from "../../assets/img/deskimage3.jpg"


const Project = ({heading}) => {

  const projectsArray = [
    { name: "Racoon Tycoon Clone",
      description: "A 3D online multiplayer clone of the popular board game Racoon Tycoon.",
      images: [racoonimage],
      githubLink:"https://github.com/marketOrganization/Racoon_Tycoon_Clone",
      deployedLink:"https://racoontycoon.herokuapp.com/",
      notes:[
        "Created a 3D multiplayer clone of the board game Racoon Tycoon utilizing Babylon, Vue, and Socket.io",
        "Established a connection between the 3D environment and the Socket.io instance to create maximum interactivity for the user.",
        "Designed a full set of functions that can update the game according to the players’ decision and return it.",
        "Employed  an authentication system for the game object each time it is sent to the back-end to avoid cheating.",
        "Created original card animations for each action possible on a players’ turn.",
        "Leveraged Git for version control and deployed the web application to a remote server with heroku.com.",
        "Implemented standard game developer practices to test and simulate the game environment."
      ]
    },
    { name: "Disc Golf Bag Builder",
      description: "An interactive Disc Golf search engine that allows the user to search for the disc they would like leave a comment or add it to their personal bag and recieve recommendations on more discs.",
      images: [discimage],
      githubLink:"https://github.com/CarlMenke/Disc_Golf_Bag_Helper_client",
      deployedLink:"https://dgb-client.herokuapp.com/",
      notes:[
        "Utilized MERN stack (MongoDB, Express, React, Node.js) to construct an application that assists the user in exploring all current disc golf discs and curate the perfect bag of discs through personalized recommendations.",
        "Created an original filter, searching, and pagination system to allow the user to easily locate their desired disc.",
        "Deployed two separate GitHub repositories to Heroku for the front-end and back-end to increase simplicity.",
        "Implemented bcrypt’s hashing system and created a REST API used for securely storing data in a full CRUD MongoDB database to create a safe and efficient way for a user to signup and login",
        "Created original card animations for each action possible on a players’ turn.",
        "Configured React Router and utilized React state and hooks to develop a responsive web application styled with flexbox layouts."
      ]
    },
    { name: "Send Quick Messaging",
      description: "A full stack instant messaging application.",
      images: [messageimage],
      githubLink:"https://github.com/CarlMenke/Send-Quick",
      deployedLink:"https://sendquick.herokuapp.com/",
      notes:[
        "Utilized PERN stack (PostgreSQL, Express, React, Node.js) with websockets to build a full-stack instant messaging application that allows the users to interact in real time.",
        "Implemented socket.io to create event driven, bi-directional communication between users.",
        "By merging socket.io and PostgreSQL into one back-end, socket.io was able to securely access to the database during events initiated by a user that causes another user’s screen to update allowing for faster connections.",
        "Deployed GitHub repositories to Heroku making frequent commits throughout development.",
        "Created original card animations for each action possible on a players’ turn.",
        "Leveraged axios and JSON Web Tokens to make secure API calls to a full CRUD PostgreSQL backend framework storing all users’ data."
      ]
    },
    { name: "The Think Tank",
      description: "A custom mineral oil cooled computer desk that I planned, designed, and fabricted in my free time.",
      images: [deskimage1, deskimage3],
      githubLink:false,
      deployedLink:false,
      notes:[
        "Equipped with dual 360mm radiators powered by two 80 GPM aquarium pumps, this computer stays cool and running quickly under any load.",
        "Designed, planned, and rendered profesionally on SOLIDWORKSexperience to help plan and make development decisions.",
        "Perosnally hand-crafted butcher block desk-top for a sturdy and clean finish.",
        "Adjustable desk lets to allow the user to stand and work to avoid fatigue of sitting all day.",
        "The custom glass pane on integrated in the butcherblock  desk-top allows the user a clear view of all internal parts.",
        "Fully removable inside compartment that houses the oil designed for increased mobility",
      ]
    },
  ]



  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
