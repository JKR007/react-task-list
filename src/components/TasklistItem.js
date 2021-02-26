import React from 'react';
import styles from './TasklistItem.module.css'

const TasklistItem = (props) => {
  const { id, title, completed } = props.task
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleClickOnComplete(id)}
      />
      <button onClick={() => props.deleteTask(id)}>Remove</button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
}

export default TasklistItem;