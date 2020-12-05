import React, { Component } from 'react';

class InputTask extends Component {
  state = {
    title: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTaskProps(this.state.title);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Task..." name="title" value={this.state.title} onChange={this.onChange} />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    );
  };
};

export default InputTask;