import React, { useState } from 'react';
import styles from './TasklistItem.module.css'

const TasklistItem = (props) => {
  const { id, title, completed } = props.task
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  let viewMode = {}
  let editMode = {}

  const [editing, setEditing] = useState(false)

  const handleEditMode = () => {
    setEditing(true)
  }

  const handleEditDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false)
    }
  }

  if (editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none'
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditMode} style={viewMode}>
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
      </div>
      <input
        type="text"
        className={styles.textInput}
        value={title}
        style={editMode}
        onKeyDown={handleEditDone}
        onChange={e => {
          props.editTask(e.target.value, id)
        } }
      />
    </li>
  );
}

export default TasklistItem;