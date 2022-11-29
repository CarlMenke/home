import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    images,
    githubLink,
    deployedLink,
    notes,
  } = value;
  if(deployedLink){
    return (
      <Col md={6}>
        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Card.Title as="h3">{name || <Skeleton />} </Card.Title>
            <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
            {images.map((image,index)=>{
              return (
                <img src = {image} className="project-img" key = {index}/>
              )
            })}
            {notes.map(note=>{
              return (
                <div key={note}>
                  {note}
                  <hr></hr>
                </div>
              )
            })}
            <CardButtons githubLink={githubLink} deployedLink={deployedLink}/> 
            <hr />
          </Card.Body>
        </Card>
      </Col>
    );
  }else{
    return (
      <Col md={6}>
        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Card.Title as="h3">{name || <Skeleton />} </Card.Title>
            <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
            {images.map((image,index)=>{
              return (
                <img src = {image} className="project-img" key = {index}/>
              )
            })}
            {notes.map(note=>{
              return (
                <div key={note}>
                  {note}
                  <hr></hr>
                </div>
              )
            })}
            <hr />
          </Card.Body>
        </Card>
      </Col>
    );
  }
  
};

const CardButtons = ({ githubLink, deployedLink }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a href={githubLink} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Repository
      </a>
      <a href={deployedLink} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Deployed
      </a>
    </div>
  );
};


export default ProjectCard;
