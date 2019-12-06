import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions';

class CreateProject extends Component {

  state = {
    title:'',
    content: '',
  }

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.onCreateProject(this.state);
    this.props.history.push('/');
  }


  render () {

    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.changeHandler}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.changeHandler}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateProject: (project) => dispatch(actions.createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);