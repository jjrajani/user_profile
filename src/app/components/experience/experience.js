import React, { Component } from "react";
import "./experience.scss";
import expertise from "./expertise";

export default class Experience extends Component {
  render () {
    return(
      <div id="experience" className="main-content">
        <h1>Professional Experience</h1>
        { this._renderExperience() }
      </div>
    )
  }

  _renderExperience = () => {
    return Object.keys(expertise).map((key, i) => {
      let positions = this._buildPositions(expertise[key].positions);
      return (
        <div key={i} className={`${key} category`}>
          <h3>{expertise[key].expertiseHeader}</h3>
          <p>{expertise[key].blurb}</p>
          {positions}
        </div>
      )
    });
  }

  _buildPositions = (positions) => {
    return positions.map((position, i) => {
      return (
        <div key={i} className="position">
          <p className="title">{position.title}</p>
          <img src={position.logo} alt={position.logoAlt}/>
          <p className="description">{position.description}</p>
        </div>
      );
    });
  }
}
