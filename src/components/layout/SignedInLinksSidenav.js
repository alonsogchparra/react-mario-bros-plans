import React from 'react';
import { NavLink } from 'react-router-dom'

const signedLinksSidenav = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><a>Log Out</a></li>
    </ul>
  )
}

export default signedLinksSidenav