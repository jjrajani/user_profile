import React, { Component } from "react";
import "./nav.scss";
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render () {
    return(
      <div id="nav">
        <ul className="links">
          <div className="left">
            <li className="link">
              <NavLink
                to="/home"
                activeClassName="active"
              >
                <i className="fa fa-home"></i>
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                to="/projects"
                activeClassName="active"
              >
                <i className="fa fa-code"></i>
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                to="/experience"
                activeClassName="active"
              >
                <i className="fa fa-briefcase"></i>
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                to="/education"
                activeClassName="active"
              >
                <i className="fa fa-graduation-cap"></i>
              </NavLink>
            </li>
            <li className="link email">
              <a href= "mailto:jjrajani@gmail.com">
                <i className="fa fa-envelope-o"></i>
              </a>
            </li>
          </div>
          <div className="right">
            <div className="links">
              <a href="https://github.com/jjrajani" target="blank" >
                <i className="fa fa-github-square github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jenna-rajani/" target="blank" >
                <i className="fa fa-linkedin-square linkedin"></i>
              </a>
            </div>
            <div className="title">
              <p>Jenna Rajani</p>
              <p>Web Developer</p>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}
