import React, { Component } from "react";
import "./projects.scss";
import professionalProjects from "./professionalProjects";
import personalProjects from "./personalProjects";

export default class Projects extends Component {

  render () {
    return(
      <div id="projects" className="main-content">
        <h1>Professional Projects</h1>
        { this._renderProfessionalProjects() }
        <h1>Personal Projects</h1>
        { this._renderPersonalProjects() }
      </div>
    )
  }

  _renderProfessionalProjects = () => {
    let projs = professionalProjects.map((proj, i) => {
      return (
        <div key={i} className="project">
          <p className="title">{proj.displayTitle}</p>
          { this._imageOrUrl(proj) }
        </div>
      );
    });
    return (
      <ul className="projects">{projs}</ul>
    );
  }

  _renderPersonalProjects = () => {
    let projs = personalProjects.map((proj, i) => {
      return (
        <div key={i} className="project">
          <p className="title">{proj.displayTitle}</p>
          <div className={`${proj.className} ss-wrapper`}>
            <img src={proj.img} alt={proj.imgAlt}/>
            <div className={proj.className + " screen-shot"}></div>
          </div>
        </div>
      );
    });
    return (
      <ul className="projects">{projs}</ul>
    );
  }

  _imageOrUrl = (project) => {
    return project.hasOwnProperty("img")
      ? (
        <div className={`${project.className} ss-wrapper`}>
          <img src={project.img} alt={project.imgAlt}/>
          <div className={`screen-shot ${project.className}`}></div>
        </div>
        )
      :
        (
          <div className={`${project.className}-wrapper`}>
            <a target="blank" href={project.url}>{project.displayTitle}</a>
          </div>
        );
  }
}
