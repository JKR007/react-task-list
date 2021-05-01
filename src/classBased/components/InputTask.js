import React, { Component } from 'react';

class InputTask extends Component {
  state = {
    title: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title.trim()) {
      this.props.addTask(this.state.title)
      this.setState({
        title: ""
      })
    } else {
      alert('Please, add item!')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add task list..." className="input-text" name="title" value={this.state.title} onChange={this.onChange}/>
        <button className="input-submit">Submit</button>
      </form>
    );
  };
};

export default InputTask;