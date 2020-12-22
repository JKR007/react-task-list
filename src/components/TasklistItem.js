import React, { Component } from 'react';

class TasklistItem extends Component {
  componentWillUnmount() {
    alert('The Task-item will be deleted!');
  };

  render() {
    const { completed, id, title } = this.props.task

    const completedTaskStyles = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.7,
      textDecoration: "line-through"
    };

    return (
      <li className="task-item" >
        <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)}/>
        <button onClick={() => this.props.deleteTaskProps(id)} >Delete</button>
        <span style={completed ? completedTaskStyles : null}>
          {title}
        </span>
      </li>
    );
  }
}

export default TasklistItem;