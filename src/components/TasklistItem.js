import React from 'react';

const TasklistItem = (props) => {
  const { completed, id, title } = props.task

  const completedTaskStyles = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.7,
    textDecoration: "line-through"
  };

  return (
    <li className="task-item" >
      <input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)}/>
      <button onClick={() => props.deleteTaskProps(id)} >Delete</button>
      <span style={completed ? completedTaskStyles : null}>
        {title}
      </span>
    </li>
  );
}

export default TasklistItem;