import React from 'react';
import { NavLink } from 'react-router-dom';

const signedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><a>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">AP</NavLink></li>
    </ul>
  );
}

export default signedInLinks;