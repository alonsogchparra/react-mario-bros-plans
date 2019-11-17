import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedInLinksSidenav from './SignedInLinksSidenav';
import SignedOutLinksSidenav from './SignedOutLinksSidenav';
import SignOutLinks from './SignedOutLinks';

const navbar = (props) => {
  return (
    <div>

      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">Mario Bro's Plans</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="right hide-on-med-and-down">
            <SignedInLinks />
            <SignOutLinks />
          </div>
        </div>
      </nav>

      <SignedInLinksSidenav />
      <SignedOutLinksSidenav />

    </div>
  );
}

export default navbar;