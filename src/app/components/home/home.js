import React, { Component } from "react";
import "./home.scss";

export default class Home extends Component {
  render () {
    return(
      <div id="home" className="main-content">
        <div className="top">
          <h1>Jenna Rajani</h1>
          <h2>Perceptive, Exuberant, Industrious</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Hobbies</p>
          <p>Piano</p>
          <p>Travel</p>
          <p>Intelligent Bantering</p>
        </div>
        <div className="footer">
          <h1>
            <span className="purple">let </span>
            <span className="red">code</span>
            <span>: </span>
            <span className="yellow">Oportuiny </span>
            <span>= </span>
            <span className="green">&#96;possibility ending only with ones &amp;&#123;</span>
            <span className="red"> imagination </span>
            <span className="green">&#125;&#96;</span>
            <span>;</span>
          </h1>
        </div>
      </div>
    );
  }

}
