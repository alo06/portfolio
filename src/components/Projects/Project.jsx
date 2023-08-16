import React from "react";
import { data } from "../../data";
import "./project.css";
import {FaGithub,FaCircle} from 'react-icons/fa'



const Project = () => {
  const projectsRow = 2;
  const rows = Math.ceil(data.length / projectsRow);
  const shouldAlternate = true; 
  return (
    <div className="project scroll" id="project">
      <h1>Projects</h1>
      <div className={`project-row ${shouldAlternate ? "alternate" : ""}`}>
        {[...Array(rows)].map((_, rowIndex) => (
          <div className="projects" key={rowIndex}>
            {data
              .slice(rowIndex * projectsRow, (rowIndex + 1) * projectsRow)
              .map((project, index) => (
                <ProjectsCard
                  key={project.id}
                  name={project.name}
                  tech={project.tech}
                  image={project.image}
                  details={project.details}
                  link={project.link}
                  live={project.live}
                  center={index === projectsRow - 1}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsCard = (props) => {
  return (
    <div className={`card${props.center ? " center" : ""}`}>
      <div className="card-img">
        <img src={props.image} alt="project-img" />
      </div>
      <div className="card-details">
        <h2>{props.name}</h2>
        <h3>{props.tech}</h3>
        <p>{props.details}</p>
        <div className="icons">
          <a href={props.link}>
            <FaGithub size={30} />
          </a>
          <a href={props.live}>
            <FaCircle size={10} />Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
