import React from 'react';
import { NavLink } from 'react-router-dom';

const signedOutLinksSidenav = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li><NavLink to="/signin">Sign In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )
}

export default signedOutLinksSidenav