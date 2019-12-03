import React from 'react';
import { connect } from 'react-redux';


const projectDetails = ({project}) => {
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Post by FullName of the author</div>
            <div>Date</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state);
  console.log('ownProps', ownProps);
  const id = ownProps.match.params.id;
  const projects = state.projects.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project
  }
}

export default connect(mapStateToProps)(projectDetails)