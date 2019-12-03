import React from 'react'

const projectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">{project.title}</div>
        <p>Posted by Fulanito</p>
        <div className="grey-text">03/03/12</div>
      </div>
    </div>
  )
}

export default projectSummary