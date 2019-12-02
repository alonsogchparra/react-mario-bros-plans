import React from 'react'

const projectDetails = () => {
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title</span>
            <p>Project Content</p>
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

export default projectDetails