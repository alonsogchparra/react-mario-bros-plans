import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import * as actions from '../../store/actions';


class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSignIn(this.state);
  }

  render () {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        {isLoaded(auth) ? (
        <form onSubmit={this.submitHandler} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
        ) : '' }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (credentials) => dispatch(actions.signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)