import React, { Component } from 'react'

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  render () {
    return (
      <div className="container">
        <form onSubmit className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp