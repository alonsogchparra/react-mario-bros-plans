import React from 'react'

const notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            <li>
              <span className="pink-text">User </span>
              <span>Content</span>
              <div className="grey-text note-date">
                time
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default notifications