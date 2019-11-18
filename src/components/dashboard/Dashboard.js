import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
            <div className="card z-depth-0 project-summary">
              <div className="card-content grey-text text-darken-3">
                <div className="card-title">Project</div>
                <p>Posted by Fulanito</p>
                <div className="grey-text">03/03/12</div>
              </div>
            </div>
          </div>

          <div className="col s12 m5 offset-1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
