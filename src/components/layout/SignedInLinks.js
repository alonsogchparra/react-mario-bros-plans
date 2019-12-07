import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


const signedInLinks = ({profile, onSignOut}) => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><a onClick={onSignOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
    </ul>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(actions.signOut())
  }
}

export default connect(null, mapDispatchToProps)(signedInLinks);