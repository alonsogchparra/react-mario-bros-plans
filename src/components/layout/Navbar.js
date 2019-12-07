import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import * as actions from '../../store/actions';

class Navbar extends Component {

  render() {
    const { auth, profile, onSignOut } = this.props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignOutLinks />;
    const checkIsLoaded = isLoaded(auth) ? links : '';
    const sideNavLinks = auth.uid ? (
      <div>
        <li className="sidenav-close"><NavLink to="/create">New Project</NavLink></li>
        <li className="sidenav-close"><a className="logout" onClick={onSignOut}>Log Out</a></li>
      </div>
    ) : (
      <div>
        <li className="sidenav-close"><NavLink to="/signin">Sign In</NavLink></li>
        <li className="sidenav-close"><NavLink to="/signup">Sign Up</NavLink></li>
      </div>
    );
    const sideNavCheckIsLoaded = isLoaded(auth) ? sideNavLinks : '';

  return (
    <div>

      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">Mario Bro's Plans</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="right hide-on-med-and-down">
            { checkIsLoaded }
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {sideNavCheckIsLoaded}
      </ul>

    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(actions.signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);