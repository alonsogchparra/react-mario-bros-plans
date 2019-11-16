import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedLinks from './SignedLinks';
import SignOutLinks from './SignedOutLinks';

const navbar = (props) => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">Mario Bro's Plans</Link>
          <ul className="right">
            <SignedLinks />
            <SignOutLinks />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;