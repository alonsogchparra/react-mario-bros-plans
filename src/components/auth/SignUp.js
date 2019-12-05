import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions';

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSignUp(this.state);
  }

  render () {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstName" id="firstName" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastName" id="lastName" onChange={this.changeHandler} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
          <div className="red-text center">
            { authError ? <p>{ authError }</p> : null }
          </div>
        </form>
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
    onSignUp: (newUser) => dispatch(actions.signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)