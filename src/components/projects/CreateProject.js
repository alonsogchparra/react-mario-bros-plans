import React, { Component } from 'react'

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


  render () {
    console.log('CreateProject', this.state);
    return (
      <div className="container">
        <form className="white">
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

export default CreateProject