import React, { Component } from 'react';
import { observer } from "mobx-react";
import './app.scss';
import { Skills, Home, NoMatch, Nav, Projects, Experience, Education } from "./components";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

@observer
class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <div className="content-body-wrapper">
            <Nav />
            <Skills />
            <div className="main-content-wrapper">
              <div id="router-output">
                <Switch>
                  <Redirect exact from='/' to='/home'/>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/experience" component={Experience}/>
                  <Route exact path="/projects" component={Projects}/>
                  <Route exact path="/education" component={Education}/>
                  <Route component={NoMatch}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
