import React, { Component } from "react";
import "./skills.scss";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export default class Skills extends Component {

  views = [
    "front",
    "back",
    "databases",
    "basics",
    "workflow",
    "environments",
  ]

  @observable view = this.views[0];
  render () {
    return(
      <div id="skills">
        { this._renderSkills() }
      </div>
    );
  }


  _renderSkills = () => {
    this.views.forEach((view, i) => {
      if (i > 0 && ((i + 1) % 3 === 0 || i === this.views.length - 1)) {
        console.log("I", i)
        console.log("view", view)
      }
    })

    return this.views.map((view, i) => {
      return this[`_${view}`](i);
    });
  }

  // SASS - jQuery - HTML/CSS - HighCharts
  _basics = (i) => {
    return (
      <div key={i} className={"basics skill-set"}>
        <p>HTML/CSS</p>
        <p className="expertise">SASS</p>
        <p>jQuery</p>
      </div>
    );
  }

  // JavaScript - TypeScript - React - Angular
  _front = (i) => {
    return (
      <div key={i} className={"front skill-set"}>
        <p className="expertise">JavaScript</p>
        <p>TypeScript</p>
        <p className="expertise">React</p>
        <p>AngularJS</p>
      </div>
    );
  }

  // Node.js - Express - Sequelize
  _back = (i) => {
    return (
      <div key={i} className="back skill-set">
        <p className="expertise">Node.js</p>
        <p>Express</p>
        <p>Sequelize</p>
      </div>
    );
  }

  // MySQL - Postgres
  _databases = (i) => {
    return (
      <div key={i} className="database skill-set">
        <p className="expertise">MySQL</p>
        <p>Postgress</p>
      </div>
    );
  }

  // Git - Webpack - Gulp - Agile - Waterfall
  _workflow = (i) => {
    return (
      <div key={i} className="workflow skill-set">
        <p className="expertise">Git</p>
        <p>GitHub</p>
        <p className="expertise">Webpack</p>
        <p>Gulp</p>
      </div>
    );
  }
  // SCRUM - Agile - Waterfall
  _environments = (i) => {
    return (
      <div key={i} className="environments skill-set">
        <p>SCRUM</p>
        <p className="expertise">Agile</p>
        <p>Waterfall</p>
      </div>
    );
  }
}
